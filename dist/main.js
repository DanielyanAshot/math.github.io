"use strict";

var _Math = require("Math.js");

var _format = _interopRequireDefault(require("format.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log((0, _format["default"])("an area of a circle with a radius of 8", (0, _Math.circleArea)(8)));
console.log((0, _format["default"])("hypotenuse of a triangle with sides 8 and 11", (0, _Math.hypotenuse)(8, 11).hypotenuse));
console.log((0, _format["default"])("5 to the power of 9", (0, _Math.pow)(5, 9)));