/* spaceship class */

class Spaceship extends Entity {
	constructor() {
		super(width/2, height - 80);
	}
	
	display() {
        image(spaceshipImage, this.x - 265, this.y - 100, 264, 179); // spaceship Image
	}
	
	controls() {
		if (keyIsDown(RIGHT_ARROW)) {
			this.speed.x = 15;
		} else if (keyIsDown(LEFT_ARROW)) {
			this.speed.x = -15;
		} else {
			this.speed.x = 0;	
		}
	}
}


