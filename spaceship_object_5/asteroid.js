/*  Asteroid class  */


class Asteroid extends Entity {
	constructor() {
		super(random(width), -100);
		this.speed.x = random(-1, 1);
		this.speed.y = random(5);
		
		this.color = color(random(100, 200), random(200), random(200));
        this.size = random(width/2) / 2;
	}
	
	display() {
		fill(this.color);
		noStroke();
//		ellipse(this.x, this.y, this.size); // testing position
        image(asteroidImage, this.x - 120, this.y - 100,  this.size + this.offset, this.size + this.offset); // asteroid Image
	}
    
    update() {
        super.update();
        
        // remove asteroids below the canvas
        if (this.y > height + this.size) {
            this.remove(asteroids);
        }
        
        // bonce asteroids off sides
        if (this.x <= 0 || this.x >= width) {
            this.speed.x *= -1;
        }
    }
}


