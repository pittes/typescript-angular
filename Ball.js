"use strict";
exports.__esModule = true;
var Ball = /** @class */ (function () {
    function Ball(inColor, inSize) {
        this.color = inColor;
        this.size = inSize;
    }
    Ball.prototype.about = function () {
        return "Ball: Id=" + this.id + ", Color=" + this.color + ", Size=" + this.size;
    };
    return Ball;
}());
exports.Ball = Ball;
