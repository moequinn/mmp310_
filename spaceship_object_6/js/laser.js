/* Laser class */

class Laser extends Entity {
	constructor(x, y) {
		super(spaceship.x + x, spaceship.y);
		this.speed.y = -10;
        this.height = 25;
	}
	
	display() {
		fill('red');
		noStroke();
		rectMode(CENTER);

//        rect(this.x, this.y - 95, 10, 25); // top laser
        image(laser,this.x, this.y, 60, 80); // top laser beam png
        
        fill('blue');
		noStroke();
        
//        rect(this.x - 31, this.y - 85, 10, 25); // left laser
//        image(laser, this.x + 31, this.y - 110, 60, 80); // left laser beam png
        
//        rect(this.x + 31, this.y - 85, 10, 25); // right laser
//        image(laser,this.x - 31, this.y - 110, 60, 80); // right laser beam png
	}
    
    update() {
        super.update();
        
        if (this.y < -this.height) {
            this.remove(lasers);
        }
    }
}