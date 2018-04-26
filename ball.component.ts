import { Ball } from './Ball';
import { BallService } from './ball.service';

export class BallComponent {
	ballSvc: BallService;

	constructor(bSvc: BallService) {
		this.ballSvc = bSvc;
		console.log("BallComponent initialized!");
	}
}

let ballComp: BallComponent = new BallComponent(new BallService());

console.log("BallComponent created... # of balls: " + ballComp.ballSvc.ballList.length);

let b1: Ball = new Ball("blue","large");
ballComp.ballSvc.add(b1);
let b2: Ball = new Ball("black","small");
ballComp.ballSvc.add(b2);
let b3: Ball = new Ball("green","medium");
ballComp.ballSvc.add(b3);
let b4: Ball = new Ball("red", "small");
ballComp.ballSvc.add(b4);

for (let ball of ballComp.ballSvc.list()) {
	console.log(ball.about());
}

console.log("remove an item...");
ballComp.ballSvc.remove(b2.id);

for (let ball of ballComp.ballSvc.list()) {
	console.log(ball.about());
}

console.log("# of balls: " + ballComp.ballSvc.ballList.length);

console.log("Bye!");



// let bArray: Ball[] = [b1,b2,b3];

// for (let b of bArray) {
// 	console.log(b.about());
// }
