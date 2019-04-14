/* Laser class */

class Laser extends Entity {
	constructor() {
		super(spaceship.x, spaceship.y);
		this.speed.y = -10;
	}
	
	display() {
		fill('red');
		noStroke();
		rectMode(CENTER);

//		rect(this.x, this.y, 10, 25); // top laser
        image(laser,this.x - 163, this.y - 130, 60, 80); // top laser beam png
        
        fill('blue');
		noStroke();
        
//        rect(this.x - 200, this.y + 120, 10, 25); // left laser
        image(laser,this.x - 196, this.y - 110, 60, 80); // left laser beam png
        
//        rect(this.x + 200, this.y + 120, 10, 25); // right laser
        image(laser,this.x - 132, this.y - 110, 60, 80); // right laser beam png
	}
}