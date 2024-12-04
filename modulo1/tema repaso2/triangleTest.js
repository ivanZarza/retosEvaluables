"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var triangle_1 = require("./triangle");
var point1 = new point_1.Point(10, 10);
var point2 = new point_1.Point(0, 20);
var point3 = new point_1.Point(0, 0);
var triangle = new triangle_1.Triangle(point1, point2, point3);
console.log(triangle);
var lados = triangle.calculateLengthSides();
console.log("Loingitud de la cara A ".concat(lados[0], ", Loingitud de la cara B ").concat(lados[1], ",Loingitud de la cara C ").concat(lados[2]));
