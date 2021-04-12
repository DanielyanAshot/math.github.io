"use strict";

var _math = require("./math.js");

var _format = require("./format.js");

console.log((0, _format.format)("an area of a circle with a radius of 8", (0, _math.circleArea)(8)));
console.log((0, _format.format)("hypotenuse of a triangle with sides 8 and 11", (0, _math.hypotenuse)(8, 11).hypotenuse));
console.log((0, _format.format)("5 to the power of 9", (0, _math.pow)(5, 9)));
