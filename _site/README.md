Assignment 1 - Hello World: GitHub and d3  
===

Link
---

https://lionandbull.github.io/01-ghd3/

Technical Achievement Desription
---
Four Graphics:
![](https://ws1.sinaimg.cn/large/006tNc79ly1fzlluq9l0bj31qg08kjro.jpg)

Used d3.js to draw four grapics which are: Green Rectangle, Black Circle, Red Line, and Blue Polygon.

Code part:
```
// Add an SVG
var svgContainer = d3.select("#layer-2").append("svg")
                                    .attr("width", 1000)
                                    .attr("height", 50)
                                    .attr("fill", "black");

// Add Rectangles
var svgContainer = d3.select("#layer-1").append("svg")
                                    .attr("width", 200)
                                    .attr("height", 200)
                                    .attr("fill", "black");
var rectangle = svgContainer.append("rect")
							.attr("x", 50)
							.attr("y", 10)
							.attr("width", 50)
							.attr("height", 100)
							.attr("fill", "green");
// Add Circles
var svgContainer = d3.select("#layer-1").append("svg")
                                    .attr("width", 200)
                                    .attr("height", 200)
                                    .attr("fill", "black");
var circle = svgContainer.append("circle")
						.attr("cx", 150)
						.attr("cy", 50)
						.attr("r", 20)
						.attr("fill", "black");
// Add Lines
var svgContainer = d3.select("#layer-1").append("svg")
                                    .attr("width", 400)
                                    .attr("height", 200)
                                    .attr("fill", "black");
var line = svgContainer.append("line")
                        .attr("x1", 200)
						.attr("y1", 50)
						.attr("x2", 300)
						.attr("y2", 50)
						.attr("stroke-width", 5)
						.attr("stroke", "red");
// Add Polygons
var svgContainer = d3.select("#layer-1").append("svg")
                                    .attr("width", 300)
                                    .attr("height", 200)
                                    .attr("fill", "black");
var polygon = svgContainer.append("polygon")
						.attr("points", "150,50,180,20,220,50")
						.attr("stroke-width", 4)
						.attr("stroke", "blue");

```

Design Achievement Description 
---

Human-being:
![](https://ws2.sinaimg.cn/large/006tNc79ly1fzllurmqnpj30qk0qkdgh.jpg)

Combined the four features to draw this strong man!






