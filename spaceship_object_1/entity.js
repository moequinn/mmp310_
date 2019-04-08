/* entity super class */

class Entity {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.size = 100;
		this.speed = { x: 0, y: 0 };
	}
	
	update() {
		this.x += this.speed.x;
		this.y += this.speed.y;
	}
}