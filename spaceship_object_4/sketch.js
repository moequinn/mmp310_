/*
	week 9 spaceship Objects 1 
*/


var laser;
//var gif_loadImg, gif_createImg;
var backgroundImage;
var spaceshipImage;
var asteroidImage;
var spaceship;
var asteroids = [];
var lasers = [];
// asteroids probability
var asteroidProb = 95;

function preload() {
//    gif_loadImg = loadImage("space_background2.gif");
//    gif_createImg = createImg("space_background2.gif");
    laser = loadImage("laser_beam.gif");
    backgroundImage = loadImage("space_background2.gif");
    spaceshipImage = loadImage("spaceship1.gif");
    asteroidImage = loadImage("asteroid1.gif");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
//    saveFrames("spaceship_object_1", "png", 2, 22);
	
	spaceship = new Spaceship();
}

function draw() {
	background(51);
    image(backgroundImage, 0, 0, windowWidth, windowHeight); // background Image
    
//    gif_createImg.position(0, 0, windowWidth, windowHeight);
	
	// adds random asteroid
	if (random(100) > asteroidProb) {
		// create an asteroid
		asteroids.push(new Asteroid());
	}
	
	// add lasers
	if (keyIsDown(32) || keyIsDown(88)) {
		lasers.push(new Laser());	
	}
	
	spaceship.controls();
	spaceship.display();
	spaceship.update();
	
	for (let i = 0; i < asteroids.length; i++) {
		asteroids[i].display();
		asteroids[i].update();
		
		// collision with spaceship
		if (asteroids[i].collide(spaceship)) {
			// end game
			textAlign(CENTER, CENTER);
			textSize(100);
			fill('orange');
			text('YOU DIED', width/2, height/2);
			noLoop();
		}
		
		// detect all lasers
		for (let j = 0; j < lasers.length; j++) {
			if (asteroids[i].collide(lasers[j])) {
				asteroids[i].died = true;
				lasers[j].died = true;
                
                //
                
			}
		}
	}
	
	for (let i = 0; i < lasers.length; i++) {
		lasers[i].display();
		lasers[i].update();
	}
	
	// clean up dead asteroids and lasers
	for (let i = 0; i < asteroids.length; i++) {
		if (asteroids[i].died) {
			asteroids[i].remove(asteroids);
		}
	}
	
	for (let i = 0; i < lasers.length; i++) {
		if (lasers[i].died) {
			lasers[i].remove(lasers);
		}
	}
}
