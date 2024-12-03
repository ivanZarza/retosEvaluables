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
