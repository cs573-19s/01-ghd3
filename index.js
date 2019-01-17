
console.log(d3); // test if d3 is loaded

var width = 1600,
    height = 800,
    margin = {left: 50, top: 30, right: 20, bottom: 20},
    g_width = width / 4 - margin.left - margin.right,
    g_height = height / 4 - margin.top - margin.bottom;

// Add an SVG
var svg = d3.select("#container")
    .append("svg")
    // width, height
    .attr("width", width)// sttribute
    .attr("height", height)

var g1 = d3.select("svg")
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
var g2 = d3.select("svg")
    .append("g")
    .attr("transform", "translate(" + 600 + "," + margin.top + ")");
var g3 = d3.select("svg")
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + 310 + ")");
var g4 = d3.select("svg")
    .append("g")
    .attr("transform", "translate(" + 600 + "," + 310+ ")");

// data
var data = [1,3,5,7,8,4,3,7]
var scale_x = d3.scale.linear()
    .domain([0, data.length - 1])
    .range([0, g_width])
var scale_y = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([g_height, 0])

var line_generator = d3.svg.line()
    .x(function (d, i) {
        return scale_x(i);
    })
    .y(function (d) {
        return scale_y(d);
    })
    .interpolate("cardinal")

var Rectangle1 = [ { "x": scale_x(1),   "y": scale_y(1)},  { "x": scale_x(1),  "y": scale_y(6)},
    { "x": scale_x(6),  "y": scale_y(6)}];
var Rectangle2 = [ { "x": scale_x(1),   "y": scale_y(1)}, { "x": scale_x(6),  "y": scale_y(1)},
    { "x": scale_x(6),  "y": scale_y(6)}];

var polyGons1 = [ { "x": scale_x(1),   "y": scale_y(1)},  { "x": scale_x(2),  "y": scale_y(5)},
    { "x": scale_x(4),  "y": scale_y(6)}, { "x": scale_x(6),  "y": scale_y(4)}];
var polyGons2 = [ { "x": scale_x(1),   "y": scale_y(1)}, { "x": scale_x(2),  "y": scale_y(2)},
    { "x": scale_x(5),  "y": scale_y(1)}, { "x": scale_x(6),  "y": scale_y(4)}];

var circleData = [{ "x_axis": scale_x(4), "y_axis": scale_y(4), "radius": 15, "color" : "green" }];

var lineFunction = d3.svg.line()
    .x(function(d) { return d.x; })
    .y(function(d) { return d.y; })
    .interpolate("linear");

// Add Rectangles
g1.append("path")
    .attr("d", lineFunction(Rectangle1))
g1.append("path")
    .attr("d", lineFunction(Rectangle2));

// Add Circles
g2.append("circle")
    .attr("cy", scale_y(4))
    .attr("r", 60)
    .attr("fill", "lightcoral");

// Add Lines
g3.append("path")
    .attr("d", line_generator(data));

// Add Polygons
g4.append("path")
    .attr("d", lineFunction(polyGons1))
g4.append("path")
    .attr("d", lineFunction(polyGons2));


var x_axis = d3.svg.axis().scale(scale_x),
    y_axis = d3.svg.axis().scale(scale_y).orient("left");

g1.append("g")
    .call(x_axis)
    .attr("transform", "translate(0," + g_height + ")")
g1.append("g")
    .call(y_axis)
    .append("text")
    .text("y")
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "end")
    .attr("dy", "1em")

g2.append("g")
    .call(x_axis)
    .attr("transform", "translate(0," + g_height + ")")
g2.append("g")
    .call(y_axis)
    .append("text")
    .text("y")
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "end")
    .attr("dy", "1em")

g3.append("g")
    .call(x_axis)
    .attr("transform", "translate(0," + g_height + ")")
g3.append("g")
    .call(y_axis)
    .append("text")
    .text("y")
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "end")
    .attr("dy", "1em")

g4.append("g")
    .call(x_axis)
    .attr("transform", "translate(0," + g_height + ")")
g4.append("g")
    .call(y_axis)
    .append("text")
    .text("y")
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "end")
    .attr("dy", "1em")

