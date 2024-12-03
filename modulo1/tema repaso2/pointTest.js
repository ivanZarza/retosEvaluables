"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var myPoint = new point_1.Point(10, 10);
console.log(myPoint);
myPoint.setX(20);
myPoint.setY(20);
console.log(myPoint.getX());
console.log(myPoint.getY());
var string = myPoint.toString();
console.log(string);
console.log(typeof string);
console.log(myPoint.distanceToOrigin());
var punto2 = new point_1.Point(10, 10);
console.log(myPoint.calculateDistance(punto2));