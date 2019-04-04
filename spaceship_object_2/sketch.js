/*
	week 9 spaceship Objects 1 
*/

var spaceship = { 
    x: 0, 
    y: 200,
    size: 50,
    speed: 5,
    diplay: function () {
        // draw spaceship
    fill('lightgray');
    
    // Middle blaster
    triangle(this.x, this.y, 
             this.x - this.size, this.y + this.size * 2, 
             this.x + this.size, this.y + this.size * 2 
    );
        
    // left wing
    ellipse(this.x - this.size * 2, this.y + this.size * 2, this.size + this.size);
        
    // right wing
    ellipse(this.x + this.size * 2, this.y + this.size * 2, this.size + this.size);
        
    //fill('gray');
    ellipse(this.x, this.y + this.size * 2, this.size + this.size * 3, this.size * 2);
        
    fill('blue');
    // left inner wing
    ellipse(this.x - this.size * 2, this.y + this.size * 2, this.size + this.size / 2);
    
    // right inner wing
    ellipse(this.x + this.size * 2, this.y + this.size * 2, this.size + this.size / 2);
    
    
    },
    update: function () {
        // move the spaceship
    if (keyIsDown(RIGHT_ARROW)) {
        this.x += 5;
    }
    
    if (keyIsDown(LEFT_ARROW)) {
        this.x -= 5;
    }
        
    },
};

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
}

function draw() {
    background(51);
    
    spaceship.diplay();
    spaceship.update();
}
