"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pow = pow;
exports.hypotenuse = hypotenuse;
exports.circleArea = circleArea;
exports.PI = void 0;
var PI = 3.14;
exports.PI = PI;

function pow(base) {
  var exponent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

  if (exponent === 0) {
    return 1;
  }

  return base * pow(base, exponent - 1);
}

function hypotenuse(adjacent, opposite) {
  return {
    adjacent: adjacent,
    opposite: opposite,
    hypotenuse: Math.sqrt(Math.pow(adjacent, 2) + Math.pow(opposite, 2))
  };
}

function circleArea(radius) {
  return PI * Math.pow(radius, 2);
}