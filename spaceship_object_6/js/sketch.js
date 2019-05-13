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
var powerups = [];

// probability asteroid spawned in each frame
var asteroidProb = 99;

// laser timeout counter
var laserTimeout = 24; // number of frames between laser firing
var laserCounter = 0; // counts frame each time
var laserRed = 0;

// score
// one point for every asteroid destroyed
var score = 0;

// player lives
var lives = 3;

// sound effects
var bg;
var crash;
var jet;
var shot;
var pow;

// images
var gif_createImg;
var gif_createImgShip;
var gif_createImgAsteroid;

/*
draw()
if (chapter == 'intro') {
    intro();
} else if (chapter == 'game') {
    game();
}
*/

// global variables
var chapter = "intro"; // beging game

function preload() {
//    gif_loadImg = loadImage("images/space_background2.gif");
//    gif_createImg = createImg("images/space_background2.gif");
    laser = loadImage("images/laser_beam.gif");
    spaceshipImage = loadImage("images/spaceship1.gif");
    asteroidImage = loadImage("images/asteroid1.gif");
    asteroidImage2 = loadImage("images/asteroid2.gif");
    asteroidImage3 = loadImage("images/asteroid3.gif");
    powerupImage = loadImage("images/powerup.png");
    backgroundImage = loadImage("images/space_background2.gif");
    
//    gif_createImgShip = createImg("images/spaceship1.gif");
//    gif_createImg = createImg("images/space_background2.gif");
//    gif_createImg.style('width', '100%');
//    gif_createImg.style('height', '100%');
//    gif_createImg.hide();
    
    
    bg = loadSound("sound/bg.mp3");    
//    crashse = loadSound("sound/crashse.mp3");
    jet = loadSound("sound/jet.mp3");
    lasershot = loadSound("sound/lasershot.mp3");
//    powerUp = loadSound("sound/powerup");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
    
	rectMode(CENTER);
    imageMode(CENTER);
	textAlign(CENTER, CENTER);
    
    bg.play();
    bg.loop();
    
	spaceship = new Spaceship();
}

function draw() {
	background(50);
	
	if (chapter == "intro") {
		
        intro();
        
        
	} else if (chapter == "game") {
        
        game();
    } 
}

function mouseClicked() {
	// change chapter
//	if (chapter == "intro") chapter = "START";
    
//	else if (chapter == "intro") chapter = "game";
    
	 if (chapter == "intro") {
        chapter = "game";
//        gif_createImg.show();
//         image(backgroundImage, width/2, height/2, windowWidth, windowHeight); // background Image
    }
	
	// start the game when the start button is clicked
	else if (chapter == "intro") {
		// clicked anywhere
//		mouseClicked();
        chapter = "game";
        
    }	
}

function intro() {
    
    fill(250);
    rect(width/2, height/2, 200, 100);
    
    fill(0);
//    stroke(250);
    textSize(20);
    text('START THE GAME', width/2, height/2);
    
    fill(250);
    textSize(60);
    text('SPACE RAIDER', width/2, height/2- 200);
    
    fill(250);
    textSize(30);
    text('PRESS THE SPACEBAR KEY TO SHOOT', width/2, height/2 + 200);
    text('PRESS THE LEFT & RIGHT ARROW KEYS TO MOVE', width/2, height/2 + 300);
}

function game() {
	background(51);
    image(backgroundImage, width/2, height/2, windowWidth, windowHeight); // background Image
//    gif_createImg.show();
    
	
	// add random power ups
	if (random(1000) > 998) {
		powerups.push(new Powerup());
	}
	
	// adds random asteroid
	if (random(100) > asteroidProb) {
		// create an asteroid
		asteroids.push(new Asteroid());
	}
	
	// add lasers
	if (laserCounter <= 0) {
		// shoot a laser
		if (keyIsDown(32) || keyIsDown(88)) {
			lasers.push(new Laser(-60, 0));
            lasers.push(new Laser(60, 0));
			laserCounter = laserTimeout;
            lasershot.play();
		}
	} else {
		laserCounter -= 1;	
	}
	
	
	spaceship.controls();
	spaceship.display();
	spaceship.update();
	
	for (let i = 0; i < powerups.length; i++) {
		if (powerups[i].collide(spaceship)) {
			// power up applied
			laserTimeout = 12;
			powerups[i].died = true;
			laserRed += 20;
		}
		powerups[i].display();
		powerups[i].update();
	}
	
	for (let i = 0; i < asteroids.length; i++) {
		asteroids[i].display();
		asteroids[i].update();
		
		// collision with other asteroids
		for (let j = 0; j < asteroids.length; j++) {
			if (i != j) {
				if (asteroids[i].collide(asteroids[j])) {
					asteroids[i].speed.x *= -1;	
					asteroids[j].speed.x *= -1;	
				}
			}
		}
		
		// collision with spaceship
		if (asteroids[i].collide(spaceship)) {
			asteroids[i].died = true;
			lives -= 1;
			if (lives == 0) {
				endGame();
			}
		}
		
		// detect all lasers
		for (let j = 0; j < lasers.length; j++) {
			if (asteroids[i].collide(lasers[j])) {
				asteroids[i].died = true;
				lasers[j].died = true;
				
				// increment score
				score += 1;
				
				// after player hits asteroid, increase probability
                if (asteroidProb > 95)
				    asteroidProb -= 0.5;
				if (laserTimeout < 24) {
					laserTimeout += 0.5;
				}
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
	
	for (let i = 0; i < powerups.length; i++) {
		if (powerups[i].died) {
			powerups[i].remove(powerups);
		}
	}
	
	
	/* user display */
	
	// score
	fill('orange');
	textSize(40);
	text('Score: ' + score, width - 100, 20);
	
	// lives
//	text('Lives: ' + lives, 70, 20);
	for (let i = 0; i < lives; i++) {
		var x = 20 + i * 30;
		rect(x, 20, 20, 20);
	}
}

function endGame() {
	textSize(100);
	fill('orange');
	text('YOU DIED', width/2, height/2);
	noLoop();
}

// touch events
var touch = {};

function touchStarted() {
	if (touches[0]) {
		touch.x = touches[0].x;
		touch.y = touches[0].y;
		touch.px = touches[0].x;
		touch.py = touches[0].y;
	}
}

function touchMoved() {
	if (touches[0]) {
		touch.x = touches[0].x;
		touch.y = touches[0].y;
	}
}

