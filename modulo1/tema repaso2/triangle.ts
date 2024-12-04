import { Point } from "./point";

class Triangle {
  private vertex1: Point
  private vertex2: Point
  private vertex3: Point

  constructor(vertex1:Point, vertex2: Point, vertex3: Point) {
    this.vertex1 = vertex1
    this.vertex2 = vertex2
    this.vertex3 = vertex3
  }

  calculateLengthSides(): number[]{
    let lados: number[] = []
    lados.push(this.vertex1.calculateDistance(this.vertex2))
    lados.push(this.vertex2.calculateDistance(this.vertex3))
    lados.push(this.vertex3.calculateDistance(this.vertex1))
    return lados
  }
}

export { Triangle }