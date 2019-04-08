/* spaceship class */

class Spaceship extends Entity {
    constructor() {
        super(width/2, height - 200);
        this.speed.x = 5;
    }
    
    display() {
        fill('gray');
    
    // Middle blaster
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
        
    // move the spaceship
    controls() {
		     
       
    if (keyIsDown(RIGHT_ARROW)) {
        this.speed.x += 15;
    }
    
    if (keyIsDown(LEFT_ARROW)) {
        this.speed.x -= 15;
    }
        
    if (keyIsDown(DOWN_ARROW)) {
        this.speed.y += 15;
    }
    
    if (keyIsDown(UP_ARROW)) {
        this.speed.y -= 15;
    }
        
    },
};


    