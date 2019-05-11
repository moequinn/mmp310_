/* spaceship class */

class Spaceship extends Entity {
	constructor() {
		super(width/2, height - 80);
        
        this.color = color(random(100, 200), random(200), random(200));
	}
	
	display() {
        
        fill(this.color);
        noStroke();
//        image(spaceshipImage, this.x - 265, this.y - 100, 264, 179); // spaceship Image
//        image(spaceshipImage, this.x - 132, this.y - 100, 264, 179); // spaceship Image
//        ellipse(this.x, this.y - 30, 264, 160); // spaceship
//        ellipse(this.x - 30, this.y + 60, 30, 60); // spaceship thruster left
//        ellipse(this.x + 30, this.y + 60, 30, 60); // spaceship thruster right
    
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


