"use strict";
exports.__esModule = true;
var BallService = /** @class */ (function () {
    function BallService() {
        this.ballList = [];
        this.nextId = 1;
    }
    BallService.prototype.add = function (ball) {
        ball.id = this.nextId++;
        this.ballList.push(ball);
        return "success";
    };
    BallService.prototype.list = function () {
        return this.ballList;
    };
    BallService.prototype.remove = function (id) {
        var index = -1;
        for (var idx = 0; idx < this.ballList.length; idx++) {
            if (id == this.ballList[idx].id) {
                index = idx;
                break;
            }
        }
        this.ballList.splice(index, 1);
        return "Removed";
    };
    return BallService;
}());
exports.BallService = BallService;
