"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.setX = function (x) {
        this.x = x;
    };
    Point.prototype.setY = function (y) {
        this.y = y;
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.toString = function () {
        var x = this.x;
        var y = this.y;
        return "".concat(x, ",").concat(y);
    };
    Point.prototype.distanceToOrigin = function () {
        var x = this.x - 0;
        var y = this.y - 0;
        return Math.sqrt(x * x + y * y);
        // return Math.sqrt(this.x*this.x + this.y*this.y);
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        var x = this.x - anotherPoint.getX();
        var y = this.y - anotherPoint.getY();
        return Math.sqrt(x * x + y * y);
    };
    return Point;
}());
exports.Point = Point;
