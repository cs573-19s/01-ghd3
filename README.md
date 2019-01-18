Assignment 1 - Hello World: GitHub and d3  
===

I have created the album cover of Pink Floyyds Dark Side of the Moon album cover. This includes using an SVG to create several rectangles, polygons, lines and colors.

Design Achievements
---
I learned about the SVG pattern and how to include different elements by using append. Additionally, I learned about the Enter, exit, update pattern for D3. 

Technical Achievments
---
I learned how to create polygons, change the fill of a shape, and apply certain transformations to shapes as well such as rotate.

Additionally I attempted to implement twinkling stars in the background of the image that would just generate stars at random positions. To do this I started by modifying the Alphabet lab from lecture and while I was able to get this code working independantly, when I tried to incorporate it with my code the stars were not showing up. The code for this part is included below. I hope to continue modifying this until I am able to succesfully get it working.


<!--https://bl.ocks.org/mbostock/3808234-->
<!DOCTYPE html>
<meta charset="utf-8">
<style>

text {
  font: bold 48px monospace;
}

.enter {
  fill: black;
}

.update {
  fill: black;
}

.exit {
  fill: black;
}

</style>
<svg width="5000" height="5000"></svg>
<script src="https://d3js.org/d3.v5.min.js"></script>
<script>

var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var x = []
var y = []

for (var i = 1; i <= 5000; i++) {
   x.push(i);
   y.push(i);

}
var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    g = svg.append("g")
//      .attr("transform", "translate(32," + (height / 2) + ")"); // N

function update(x,y) {
  var t = d3.transition()
      .duration(750);

  // JOIN new data with old elements.
  var text = g.selectAll("text")
    .data(x,  function(d) { return x;});

  // EXIT old elements not present in new data.
  text.exit()
      .attr("class", "exit")
    .transition(t)
      .style("fill-opacity", 1e-6)
      .remove();

  // UPDATE old elements present in new data.
  text.attr("class", "update")
      .attr("y",  function(d, i) {return y[i]; })
      .style("fill-opacity", 1)
    .transition(t)
      .style("fill", "orange")
      .attr("x", function(d, i) { return x[i]; })
      .attr("y", function(d, i){return y[i];});

  // ENTER new elements present in new data.
  text.enter().append("text")
      .attr("class", "enter")
      .attr("dy", ".35em")
      .attr("y", function(d, i) { return y[i]; })
      .attr("x", function(d, i) { return x[i]; })
      .style("fill-opacity", 1e-6)
      .text("*")
    .transition(t)
      .attr("y", function(d, i) { return y[i];})
      .style("fill-opacity", 1);
}

// Grab a random sample of letters from the alphabet, in alphabetical order.
d3.interval(function() {
  update(d3.shuffle(x)
      .slice(1000,2000),
      d3.shuffle(y)
      .slice(1000,2000))
      ;
}, 1500);

</script>
