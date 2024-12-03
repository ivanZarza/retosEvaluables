import { Point } from "./point";

let myPoint = new Point(10, 10);
console.log(myPoint);

myPoint.setX(20);
myPoint.setY(20);
console.log(myPoint.getX());
console.log(myPoint.getY());

const string = myPoint.toString();

console.log(string);
console.log(typeof string);

console.log(myPoint.distanceToOrigin());

let punto2 = new Point(10, 10);

console.log(myPoint.calculateDistance(punto2));

console.log(myPoint.calculateQuadrant());
myPoint.setX(-10);
console.log(myPoint.calculateQuadrant());
myPoint.setY(-10);
console.log(myPoint.calculateQuadrant());
myPoint.setX(10);
console.log(myPoint.calculateQuadrant());
myPoint.setY(0);
console.log(myPoint.calculateQuadrant());

let punto3 = new Point(15, 15);
let punto4 = new Point(16, 17);
let punto5 = new Point(18, 19);

let points: Point[] = [punto2, punto3, punto4, punto5]

myPoint.setX(18)
myPoint.setY(18)
console.log(myPoint);

let resultadoMasCercano: Point = myPoint.calculateNearest(points)
console.log(resultadoMasCercano);
console.log(myPoint.calculateNearest(points));