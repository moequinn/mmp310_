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
        
   /* // left wing
    ellipse(this.x - this.size * 2, this.y + this.size * 2, this.size + this.size);
        
    // right wing
    ellipse(this.x + this.size * 2, this.y + this.size * 2, this.size + this.size); 
        
    //fill('gray');
    ellipse(this.x, this.y + this.size * 2, this.size + this.size * 3, this.size * 2); */
        
    
   /* fill('blue');
    // left inner wing
    ellipse(this.x - this.size * 2, this.y + this.size * 2, this.size + this.size / 2);
    
    // right inner wing
    ellipse(this.x + this.size * 2, this.y + this.size * 2, this.size + this.size / 2);
    */
    
    },
    update: function () {
        // move the spaceship
    if (keyIsDown(RIGHT_ARROW)) {
        this.x += 15;
    }
    
    if (keyIsDown(LEFT_ARROW)) {
        this.x -= 15;
    }
        
    if (keyIsDown(DOWN_ARROW)) {
        this.y += 15;
    }
    
    if (keyIsDown(UP_ARROW)) {
        this.y -= 15;
    }
        
    },
};


var asteroids = [];

function setup() {
    createCanvas(windowWidth, windowHeight); // spaceship position
    noStroke();
    spaceship.x = width/2;
    spaceship.y = height - 140;
}

function draw() {
    background(51);
       
    // adds random asteroid
    if (random(100) > 95) {
        
        // create an asteroid
        asteroids.push(new Asteroid());
        }
    
    spaceship.diplay();
    spaceship.update();
    
    for (let i = 0; i < asteroids.length; i++) {
        asteroids[i].display();
        asteroids[i].update();
        asteroids[i].collide();
    }
}
