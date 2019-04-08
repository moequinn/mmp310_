/* Laser class */

class Laser extends Entity {
    constructor() {
        super(width/2, height - 200);
        this.speed.x = 5;
    }
    
    display() {
    // Middle blaster
    fill('blue');
        
    ellipse(this.x, this.y, 
            this.size * 0.5, 
            this.size * 1.5); //top laser
        
    ellipse(this.x - this.size / 0.5, 
            this.y + this.size * 2, 
            this.size - this.size / 2, 
            this.size * 1.5); // left laser
        
    ellipse(this.x + this.size / 0.5, 
            this.y + this.size * 2, 
            this.size - this.size / 2, 
            this.size * 1.5); // right laser
        
    // laser button
    controls() {
		       
    if (keyIsDown(SPACE)) {
        this.speed.x += 15;
        
    },
};
