/*  Asteroid class  */

class Asteroid {
	constructor() {
		this.x = random(width * 2);
		this.y = -100;
		this.size = 100;
		this.speed = {
			x: random(-1, 1),
			y: random(5)
		};
        this.color = color(random(100), color(random(200), color(random(255))));
	}
	
	display() {
		fill(this.color);
		noStroke();
		ellipse(this.x, this.y, this.size);
	}
	
	update() {
		this.x += this.speed.x;
		this.y += this.speed.y;
	}
	
	collide() {
		var d = dist(this.x, this.y, spaceship.x, spaceship.y);
		if (d < this.size / 2) {
			textSize(100);
			textAlign(CENTER, CENTER);
			fill('orange');
			text("Game Over", width/2, height/2);
			noLoop();	
		}
	}
}
