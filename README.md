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
 
  Lines: The lines basically help the user to vvisualize where the circles fit in the popularity bar. These are white go from below the center  of the circle to the popularity bar. 
  <img src="https://github.com/asolergayoso/01-ghd3/blob/master/Capture6.PNG" width="350" height="320">
  
  Polygon: For a polygon,  I decided to create a star that was originally meant to be placed on top of the  most popular circle. However,  that was harder  than I thought so I simpply put it in onne corner. 
  <img src="https://github.com/asolergayoso/01-ghd3/blob/master/Capture5.PNG" width="163" height="190">

The shapes in the visual representation have animations, that were created by separating the the creationn of a shape into an enter and a "race" class. For instance the ppopularity bar has 0  width in the enter class, but when the race class begins, it automatically changes it width using a transition, creating an animation. 

Link to GitHub Pages
---
https://asolergayoso.github.io/01-ghd3/


Technical Achievements  
---
Most of my technical details are focused around the release of the circles correponding to their data. I used the follow functions: 
1. 
2. 
3. Math (Random Num Gen)

Design Achievements 
---
Color ... As seen in the screenshots below, the circles change hue based on a random number generator. 

![alt text](https://github.com/asolergayoso/01-ghd3/blob/master/Capture1.PNG)
![alt text](https://github.com/asolergayoso/01-ghd3/blob/master/Capture2.PNG)
