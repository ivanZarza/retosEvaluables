import { Point } from "./point";
import { Triangle } from "./triangle";

let point1 = new Point(10,10)
let point2 = new Point (0,20)
let point3= new Point(0,0)

let triangle = new Triangle(point1,point2,point3)

console.log(triangle);

let lados: number[] = triangle.calculateLengthSides()

console.log(`Loingitud de la cara A ${lados[0]}, Loingitud de la cara B ${lados[1]}, Loingitud de la cara C ${lados[2]}` );