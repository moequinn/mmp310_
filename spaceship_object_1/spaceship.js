/* spaceship class */

class Spaceship extends Entity {
	constructor() {
		super(width/2, height - 200);
	}
	
	display() {
		triangle(this.x, this.y, 
             this.x - this.size * 2, this.y + this.size * 2, 
             this.x + this.size * 2, this.y + this.size * 2);
        
    fill('lightgray');
        
    ellipse(this.x, this.y, 
            this.size * 0.5, 
            this.size * 1.5); //top
        
    ellipse(this.x - this.size / 0.5, 
            this.y + this.size * 2, 
            this.size - this.size / 2, 
            this.size * 1.5); // left
        
    ellipse(this.x + this.size / 0.5, 
            this.y + this.size * 2, 
            this.size - this.size / 2, 
            this.size * 1.5); // right
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


