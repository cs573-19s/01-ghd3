Assignment 1 - Hello World: GitHub and d3  
===

This is a starting project to make sure you can write and host a webpage that generates graphics using d3. 

The primary goal is to be able to generate graphics primitives (circles, rectangles, lines, polygons) at different locations on the screen with different colors. 

The secondary goal is to introduce you to coding on GitHub, including creating a gh-pages branch to host your visualizations.

You may write everything from scratch, or start with demo programs from books or the web. 
If you do start with code that you found, you **must identify** the source of the code in your README and, most importantly, make non-trivial changes to the code to make it your own so you really learn what you're doing. 

For example, you could download one of the d3.js examples, read it through so you understand what it's doing, and then change the appearance of the graphical output to use different color schemes, different primitive shapes, different layouts of the primitives, and so on.

Resources
---

If you need a JavaScript/HTML/CSS refresher, see [Technology Fundamentals by Scott Murray](http://chimera.labs.oreilly.com/books/1230000000345/ch03.html#_html) and/or [JavaScript Codeacademy](https://www.codecademy.com/en/tracks/javascript).

If you need a Git/GitHub refreseher, see [GitHub Bootcamp](https://help.github.com/categories/bootcamp/), the [GitHub Guides](https://guides.github.com/) (especially the ones on Hello World, and Understanding the GitHub Flow, and Forking Projects), and [CodeSchool's Try Git Course](https://www.codeschool.com/courses/try-git).

Requirements
---

1. Your project should contain at least four kinds of graphics primitives (circles, rectangles, lines, polygons) in different colors. 
2. Your document should identify the source of the code if you start with code that you found. 
3. Your code should be forked from the GitHub repo and linked using GitHub pages. See the "GitHub Details" section below for detailed instructions on how to do this.

GitHub Details
---

- Fork the GitHub Repository for Assignment 1. You now have a copy associated with your username.
- Make changes to index.html to fulfill the project requirements. 
- Make sure your "master" branch matches your "gh-pages" branch. See the GitHub Guides referenced above if you need help.
- Edit the README.md with a link to your gh-pages site "http://YourUsernameGoesHere.github.io/01-ghd3/index.html".
- To submit, make a [Pull Request](https://help.github.com/articles/using-pull-requests/) on the original repository.

Vis Details
---

For this project you should use d3.js. 
You can learn from examples on the [d3.js](http://d3js.org) site or start from scratch.

See the [Using d3js](https://github.com/mbostock/d3/wiki#using) documentation for how to run your own local server.

Creative solutions are welcome! In the past I've seen recreations of paintings, interactives, and more.

Go beyond the minimum requirements of this project.
Experiment with other aspects of the [d3 API](https://github.com/mbostock/d3/wiki/API-Reference) and [d3 Tutorials](https://github.com/mbostock/d3/wiki/Tutorials). 
Try making the elements interactive, for example, or animate them.

Grading
---

Grades are on a 120 point scale. 
96 points will be graded for functionality: the program does what the assignment requests with an informative README. 

We will use Google Chrome to view submissions. 
Be sure to test your code there.

Below are some, but not necessarily all, of the key points we will consider during grading:

- Circles and Rectangles  
- Lines  
- Polygons  
- Different colors  
- README Quality
    - A description of what you have created. 1-2 screenshots are recommended for the README.  
    - A working link to the hosted files (usually the gh-pages 'live' url)  
    - Section for Technical and Design Achievements

Technical Achievement Desription -- 12  
Design Achievement Description -- 12

Remember, it is up to *you* to define what constitutes a technical and design achievements.
Be ambitious as these are designed to allow you to shape your learning.
These are the only way to move from B to A territory.

Starting code:(from Rainbow Worm from Mike Bostock https://beta.observablehq.com/@mbostock/rainbow-worm)
canvas = {
  const context = DOM.context2d(width, height);
  const n = 60;
  const x = Float64Array.from({length: n}, (_, i) => 40 + (width - 80) * i / n);
  while (true) {
    const dt = Date.now() * 1e-3;
    const y = Float64Array.from({length: n}, (_, i) => Math.sin(i / 10 + dt) * height / 3 + height / 2);
    const z = Float64Array.from({length: n}, (_, i) => 80 * Math.sin(i / 10 + dt) ** 2 + 10);
    context.clearRect(0, 0, width, height);
    let p0 = null, p1 = [x[0], y[0]], p2 = [x[1], y[1]], p3 = [x[2], y[2]];
    for (let i = 3; i <= n; ++i) {
      context.beginPath();
      lineJoin(context, p0, p1, p2, p3, z[i - 1]);
      context.fillStyle = sinebow(i / n);
      context.fill();
      context.stroke();
      p0 = p1, p1 = p2, p2 = p3, p3 = i < n ? [x[i], y[i]] : null;
    }
    yield context.canvas;
  }
}
lineJoin = ƒ(context, p0, p1, p2, p3, width)
// Compute stroke outline for segment p12.
function lineJoin(context, p0, p1, p2, p3, width) {
  const u12 = perp(p1, p2);
  const r = width / 2;
  let a = [p1[0] + u12[0] * r, p1[1] + u12[1] * r];
  let b = [p2[0] + u12[0] * r, p2[1] + u12[1] * r];
  let c = [p2[0] - u12[0] * r, p2[1] - u12[1] * r];
  let d = [p1[0] - u12[0] * r, p1[1] - u12[1] * r];

  if (p0) { // Clip ad and dc using average of u01 and u12.
    const u01 = perp(p0, p1);
    const e = [p1[0] + u01[0] + u12[0], p1[1] + u01[1] + u12[1]];
    a = lineIntersect(p1, e, a, b);
    d = lineIntersect(p1, e, d, c);
  }

  if (p3) { // Clip ab and dc using average of u12 and u23.
    const u23 = perp(p2, p3);
    const e = [p2[0] + u23[0] + u12[0], p2[1] + u23[1] + u12[1]];
    b = lineIntersect(p2, e, a, b);
    c = lineIntersect(p2, e, d, c);
  }

  context.moveTo(...a);
  context.lineTo(...b);
  context.lineTo(...c);
  context.lineTo(...d);
  context.closePath();
}
lineIntersect = ƒ(…)
// Compute intersection of two infinite lines ab and cd.
function lineIntersect([x3, y3], [x4, y4], [x1, y1], [x2, y2]) {
  const x13 = x1 - x3, x21 = x2 - x1, x43 = x4 - x3;
  const y13 = y1 - y3, y21 = y2 - y1, y43 = y4 - y3;
  const ua = (x43 * y13 - y43 * x13) / (y43 * x21 - x43 * y21);
  return [x1 + ua * x21, y1 + ua * y21];
}
perp = ƒ(…)
// Compute unit vector perpendicular to p01.
function perp([x0, y0], [x1, y1]) {
  const y10 = y1 - y0, x10 = x1 - x0;
  const l = Math.sqrt(y10 * y10 + x10 * x10);
  return [-y10 / l, x10 / l];
}
sinebow = ƒ(t)
function sinebow(t) {
  return `rgb(${[
    Math.round(255 * Math.sin(Math.PI * (t + 0 / 3)) ** 2),
    Math.round(255 * Math.sin(Math.PI * (t + 1 / 3)) ** 2),
    Math.round(255 * Math.sin(Math.PI * (t + 2 / 3)) ** 2)
  ]}`;
}

height = 500
