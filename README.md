Assignment 1 - Hello World: GitHub and d3  
===
- Jason Abel
- Github username: jabel3141
- Github Repo: https://github.com/jabel3141/01-ghd3
- Github pages site: https://jabel3141.github.io/01-ghd3/

Description
---

This webpage is designed for the user to have a little fun with this basic assignment. The webpage is called Shape Arcade becuase there are 3 little minigames that the user can play. 

![Games Pic](/images/games.PNG) 

The first invoves polygons where the user must click the different shapes until they form a basic pentagon. 

![Games Pic](/images/pentagon.PNG) 

The second game with the circles is connect the dots. The user can connect each circle to form the larger circle (or they can have some fun and create their own design using the circle and connecting whatever dot they want).

![Games Pic](/images/connect.PNG) 

Finally the squares are just a basic visual where the squares will travel the distance of the lines and change color when they are moused over.

![Games Pic](/images/slider.PNG) 

Technical Achievements
---

- Change the shape and color of a shape after an event is triggered
- Translate an object using transitions
- Given an array of coordinates, functions callbacks and mappers in the attribute of the polygon create the polygons instead of giving hard values straght in the attribute line. 
- Creating multiple shapes at one time instead of making tons of appends to the SVG
- Got rid of a click event on an object after a certain condition is met


Design Achievements
---

- Instead of just shapes on the webpage, made basic minigames for the user to play around with
- Configured webpage to use bootstrap to help organize the 3 SVGs and create a nicer looking webpage
- Used three SVGs to break up the minigames to have their own sections
- Made the polygons change shape when they are clicked on
- Made Circles interactive by creating a line between two points when clicked on
- Number of circles in the large circle are dynamic and can be changed to have more or less circles and still be in a perfect circle