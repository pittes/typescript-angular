export class Ball {
	id: number;
	color: string;
	size: string;

	constructor(inColor: string, inSize: string) {
		this.color = inColor;
		this.size = inSize;
	}

	about(): string {
		return `Ball: Id=${this.id}, Color=${this.color}, Size=${this.size}`;
	}
}