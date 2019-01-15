Assignment 1 - Hello World: GitHub and d3  
Project Name:  WPI GitHub Social Network
===

This is a website presenting sample social network in WPI with some GitHub Attributes. Users could chose their teammates based on it.
There are three main modules including a network diagram, a GitHub radar chart and an information block.
There are four kinds of graphics primitives. The network diagram includes circles and lines. The radar chart includes polygons and lines. And the information block includes a rectangle.
What's more is that hover effects and click effects are represented in this project.


Working Link
---
https://yutinghan.github.io/01-ghd3/

Screenshots
---
Interface
  ![Interface screenshot](/Screenshots/interface.png)
  
  
Mouse Effects
  ![Mouse Effects screenshot](/Screenshots/mouseEffect.png)   

      


Technical Achievement Description
---
All the nodes, links and polygons, i.e. radar chart, are drawn based on the JSON data, which could be modified easily and could be linked to a database.
Hover effects and click effects are built in this project. When the user mouse over the circle, the corresponding circle will change color and size. And when the user click the circle, the Github attributes will be presented on the radar chart.

Design Achievement Description
---
It will be useful website if a real database is provided. 
Imagine a situation where you are a WPI student and you are finding a coding teammate. This website will be helpful. You could find a student in your social network and be able to see his/her Github experiences, his/her contact information and what courses he/she is taking in this semester.

References
---
1. Basic SVG shapes:  https://www.dashingd3js.com/basic-building-blocks
2. Using JSON to simplify code: https://www.dashingd3js.com/using-json-to-simplify-code
3. Force layout: https://bl.ocks.org/d3indepth/c48022f55ebc76e6adafa77cf466da35
4. Draw pentagon: http://bl.ocks.org/fabiovalse/8543484



