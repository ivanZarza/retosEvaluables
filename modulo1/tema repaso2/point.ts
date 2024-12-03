class Point {
    private x: number;
    private y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    setX(x: number):void {
        this.x = x;
    }

    setY(y: number):void {
      this.y = y;
    }

    getX():number {
      return this.x;
    }

    getY():number {
      return this.y;
    }

    toString(): string {
      let x = this.x;
      let y = this.y;
      return `${x},${y}`;
    }
    
    distanceToOrigin(): number {
      // let x:number = this.x - 0;
      // let y:number = this.y - 0;
      // return Math.sqrt(x*x + y*y); 
      return Math.sqrt(this.x*this.x + this.y*this.y);
    } 

    calculateDistance(anotherPoint:Point): number {
      let x = this.x - anotherPoint.getX();
      let y = this.y - anotherPoint.getY();
      return Math.sqrt(x*x + y*y);
    }
}

export { Point }

