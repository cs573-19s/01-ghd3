Assignment 1 - Hello World: GitHub and d3  
===

Asssignment One Link:

Vis Details
---
  
  Previously, I had never used JavaSccript or D3, so my first step to start this assignment was reading examples and tutorials online from Stack Overflo, CodePen, and D3.js. Moreover,  I went over the first lab, in order to use a basic structure to develop upon. For that  reason, there is relatively some  similarity between the way some shapes are  defined in theh code, as well as the logic behind some transitions. 
  One of my  goals for this assignment, was to find an interesting dataset and represent it using graphic primitives. Fortunatly, I was able to find many interesting api's with very exciting content. At the en, I decided to  implement  "http://api.bf4stats.com/api/onlinePlayers", as it outputs the number  of people that are currently playing Battlefield4 online accross different platforms, as long as the maximum  number  of players in one ssession in the past 24 hours It seemed to be  a good dataset, simple and straightforward, as well as quite useful to determine which platforms aare most popular or Batlefield 4 players. 
  
 Circles:  In the visualization, each circle represents a particular platform, and the radious of each circle is tied to the number of people  who are currently  playing. In other words, the bigger the circle the more people are playing in a specific platform. Moreover, circles are placed in different positions across the x axis, based  on the peak  # number of people  that  have  plaed in the past 24 hours. Therefore, the more right, the more popular that console has  been over the past 24 hours. Circles have changing color, built with a random number  generator that produces random number in the rgb scale. 
 <img src="https://github.com/asolergayoso/01-ghd3/blob/master/Capture3.PNG" width="258" height="326">
 
 Rectangles: I used a rectangle to create the popularity bar, which is basically a green bar in bottom of the  svg that serves as a  range  for the x axis.
![alt text](https://github.com/asolergayoso/01-ghd3/blob/master/Capture4.PNG)
 
  Lines: The lines basically help the user visualize where the circles fit in the popularity bar. These are white and  go from below the center of the circle to the popularity bar. 
<img src="https://github.com/asolergayoso/01-ghd3/blob/master/Capture6.PNG" width="350" height="320">
  
  Polygon: For a polygon,  I decided to create a star that was originally meant to be placed on top of the  most popular circle. However,  that was harder  than I thought so I simply put it in onne corner. 
<img src="https://github.com/asolergayoso/01-ghd3/blob/master/Capture5.PNG" width="163" height="190">

The shapes in the visual representation have animations, that were created by separating the the creation of a shape into an enter and a "race" class. For instance the  popularity bar has 0  width in the enter class, but when the race class begins, it automatically changes it width using a transition, creating an animation. 

NOTE: It is important  to mention that originally the idea was for the program to obbtain data directly from from the api "http://api.bf4stats.com/api/onlinePlayers", however, since that site does not have a valid certificate, GitHub pages does not allow to send HTTP request, as the "Enforce HTTPS" option is enabled by default.  As a solution, the data  from the api, at a particular time was copied into players.json.

Sources
---
In order to create the random color generator, I looked at code from https://codepen.io/webercoder/pen/njBDrhttps://codepen.io/webercoder/pen/njBDr

```javascript
//function used for the color generator of the circles. 
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
 ...
 .style("fill", function() { //here we use getRandomInt() in the rgbb scale
    		var r = getRandomInt(0, 150),
       		g = getRandomInt(0, 150),
        	b = getRandomInt(0, 150);
    		return "rgb(" + [r, g, b].join(",") + ")";
  		})
```

For different functions of the code, I used ideas from the presious EnterUpdateExit Lab
https://github.com/cs573-19s/lab-EnterUpdateExit/blob/master/index.html

```javascript
//function to control radious of the circle based on currently online players.
var radious_scale = d3.scaleLinear()
	.domain( d3.extent( platforms, function(d) { return d.count; } ))
	.range ( [100, 200] );
...
//functionn to control the x axis based on the nnumber of people who have played in 24 hours
// we measure popularity of a platform with this
var peak_xscale = d3.scaleLinear()
    .domain( d3.extent(platforms, function(d) { return d.peak24; }) )
    .range( [100, width-200] );
...
d3.interval(function() {
  race(d3.shuffle(platforms)
    .slice(0, Math.floor(Math.random() * platforms.length))
    .sort());
},2000);
```

Moreover, the function that handles the mouse over actions



Link to GitHub Pages
---
https://asolergayoso.github.io/01-ghd3/


Technical Achievements  
---
In my opinion, my achievements and the things that I successfully leraned and implemented are:

1. How to tie a particular attribute of a d3  object such as a circle, to a  particular key in a dataset. In particular, being able to do this in d3  without having  to use  for loops or recursion was quite an achievment. For instance, I was able to connect  the radious of the circle to the numbers of online players.
2. Learn how to read JSON data  using an api, and also parse that data, so it would be easier for d3 to read specific attributes. This has given me much freedom to use any dataset in JSON format.
3. Utilizing a random number generator to continuosly change the color of the circles. 
4. Overall, getting acquainted with JavaScript and D3 and learn the machanics behind transitions. 

Design Achievements 
---
In terms of design, I consider my achievements to be the following:

1. Finding an apppropiate dataset, and creating a way to represent it using attributes of shapes  in a  way that can help the user to quickly identify which platform is more popular.


![alt text](https://github.com/asolergayoso/01-ghd3/blob/master/Capture1.PNG)
![alt text](https://github.com/asolergayoso/01-ghd3/blob/master/Capture2.PNG)
