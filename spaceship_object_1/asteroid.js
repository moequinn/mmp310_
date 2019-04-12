/*  Asteroid class  */

class Asteroid extends Entity {
	constructor() {
		super(random(width), -100);
		this.speed.x = random(-1, 1);
		this.speed.y = random(5);
		
		this.color = color(random(100, 200), random(200), random(200));
	}
	
	display() {
		fill(this.color);
		noStroke();
		ellipse(this.x, this.y, this.size); 
	}
	
//	collide() {
//		var d = dist(this.x, this.y, spaceship.x, spaceship.y);
//		if (d < this.size / 2) {
//			textSize(100);
//			textAlign(CENTER, CENTER);
//			fill('orange');
//			text("Game Over", width/2, height/2);
//			noLoop();	
//		}
//	}
}


