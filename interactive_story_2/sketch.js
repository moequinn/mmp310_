/*
	mmp 310 week 2 (02/04/2019)
    Interactive Story of Joe and Abel Setting
    By Moe Quinn

*/


// global Variables
var x = 200; // main x postion
var y = 200; // main y postion
var w = 200; // main width
var h = 200; // main height

// Joel
var joelOffset = 200; // offset

// Joel Head
//var joelHeadX = joelOffset; // joel x postion
var joelHeadY = joelOffset + 75; // joel y postion 
var joelHeadW = joelOffset - 185; // joel width
var joelHeadH = joelOffset - 170; // joel height

// Joel Body
//var joelBodyX = joelOffset + ;  // joel x position
var joelBodyY = joelOffset + 175; // joel y position
var joelBodyW = joelOffset - 180; // joel width
var joelBodyH = joelOffset + 0;   // joel height

// Joel top wings
//var joelTopWingsX = joelOffset +; // joel x position
var joelTopWingsY = joelOffset + 140;   // joel y position
var joelTopWingsW = joelOffset + 100;   // joel width
var joelTopWingsH = joelOffset - 180;   // joel height

// Joel bottom wings
//var joelBottomWingX = joelOffset +;  // joel x position
var joelBottomWingY = joelOffset + 170;  // joel y position
var joelBottomWingW = joelOffset + 100;  // joel width
var joelBottomWingH = joelOffset - 180;  // joel hieght

// Joel Outter eyes
//var joelOutterEyeX = joelOffset +;  // joel x position
var joelOutterEyeY = joelOffset + 75;  // joel y position
var joelOutterEyeW = joelOffset - 180;  // joel width
var joelOutterEyeH = joelOffset - 180;  // joel hieght

// Joel eye pupils
//var joelPupilX = joelOffset +;  // joel x position
var joelPupilY = joelOffset + 75;  // joel y position
var joelPupilW = joelOffset - 190;  // joel width
var joelPupilH = joelOffset - 190;  // joel hieght

// Joel mouth
//var joelMouthX = joelOffset +;  // joel x position
var joelMouthY = joelOffset + 110;  // joel y position
var joelMouthW = joelOffset - 160;  // joel width
var joelMouthH = joelOffset - 160;  // joel hieght

   
// Abel

var abelOffset = 200;

// Abel Head Main
//var abelHeadMainX = joelOffset; // joel x postion
var abelHeadMainY = joelOffset + 100; // joel y postion 
var abelHeadMainW = joelOffset - 140; // joel width
var abelHeadMainH = joelOffset - 150; // joel height

// Abel Head Layer1
//var abelHeadLayer1X = joelOffset; // joel x postion
var abelHeadLayer1Y = joelOffset + 100; // joel y postion 
var abelHeadLayer1W = joelOffset - 150; // joel width
var abelHeadLayer1H = joelOffset - 160; // joel height

// Abel Head Layer2
//var abelHeadLayer2X = joelOffset; // joel x postion
var abelHeadLayer2Y = joelOffset + 100; // joel y postion 
var abelHeadLayer2W = joelOffset - 160; // joel width
var abelHeadLayer2H = joelOffset - 170; // joel height

// Abel Head Layer3
//var abelHeadX = joelOffset; // joel x postion
var abelHeadLayer3Y = joelOffset + 100; // joel y postion 
var abelHeadLayer3W = joelOffset - 150; // joel width
var abelHeadLayer3H = joelOffset - 160; // joel height

// Abeel Body main
//var abelBodyMainX = joelOffset + ;  // joel x position
var abelBodyMianY = joelOffset + 175; // joel y position
var abelBodyMainW = joelOffset - 100; // joel width
var abelBodyMainH = joelOffset - 50;   // joel height

// Abeel Body Layer 1
//var abelBodyLayer1X = joelOffset + ;  // joel x position
var abelBodyLayer1Y = joelOffset + 175; // joel y position
var abelBodyLayer1W = joelOffset - 110; // joel width
var abelBodyLayer1H = joelOffset - 60;   // joel height

// Abeel Body Layer 2
//var abelBodyLayer2X = joelOffset + ;  // joel x position
var abelBodyLayer2Y = joelOffset + 175; // joel y position
var abelBodyLayer2W = joelOffset - 120; // joel width
var abelBodyLayer2H = joelOffset - 70;   // joel height

// Abeel Body Layer 3
//var abelBodyLayer3X = joelOffset + ;  // joel x position
var abelBodyLayer3Y = joelOffset + 175; // joel y position
var abelBodyLayer3W = joelOffset - 130; // joel width
var abelBodyLayer3H = joelOffset - 80;   // joel height

// Abel top wings
//var abelTopWingsX = joelOffset +; // joel x position
var abelTopWingsY = joelOffset + 145;   // joel y position
var abelTopWingsW = joelOffset + 50;   // joel width
var abelTopWingsH = joelOffset - 150;   // joel height

// Abel bottom wings
//var abelBottomWingX = joelOffset +;  // joel x position
var abelBottomWingY = joelOffset + 175;  // joel y position
var abelBottomWingW = joelOffset + 50;  // joel width
var abelBottomWingH = joelOffset - 150;  // joel hieght

// Abel Outter eyes
//var abelOutterEyeX = joelOffset +;  // joel x position
var abelOutterEyeY = joelOffset + 100;  // joel y position
var abelOutterEyeW = joelOffset - 170;  // joel width
var abelOutterEyeH = joelOffset - 170;  // joel hieght

// Abel eye pupils
//var abelPupilX = joelOffset +;  // joel x position
var abelPupilY = joelOffset + 100;  // joel y position
var abelPupilW = joelOffset - 180;  // joel width
var abelPupilH = joelOffset - 180;  // joel hieght

// Abel mouth
//var abelMouthX = joelOffset +;  // joel x position
var abelMouthY = joelOffset + 110;  // joel y position
var abelMouthW = joelOffset - 180;  // joel width
var abelMouthH = joelOffset - 180;  // joel hieght

// clouds
var cloudX = 100;
var cloudY = 100;
var cloudW = 100;
var cloudH = 100;
//var clouudSize = 100;

// stars
var starX = 100;
var starY = 100;

// sun
var sunX = 100;
var sunY = 100;
var sunW = 100;
var sunH = 100;
//var sunSize = 100;


// global variables
var chapter = "morning"; // day, night
var whichFruit;

function setup() {
	createCanvas(windowWidth, windowHeight);
	textAlign(CENTER, CENTER);
	textFont('Hanalei Fill');
}

function draw() {
	background(200);
	
	if (chapter == "morning") {
        background('orange');
		fill('gold');
        noStroke();
		ellipse(x + 300, y - 100, w -100);
        
        // Fence 1
        noStroke();
        fill("brown");  // fence color
        rect(x - 200, y + 220, windowWidth, h - 170);
        
        // Fence 2
        noStroke();
        fill("brown");  // fence color
        rect(x - 200, y + 280, windowWidth, h - 170);
        
        // Grass
        noStroke();
        fill("lightgreen");  // grass color
        rect(x - 200, y + 280, windowWidth, windowHeight);
        
		abel(x -100, y + 0, w + 0);  // first character
		joel(x - 100, y - 100, w - 100); // second character
        
        
		narrative("Meet Joe and Abel.", "Click anywhere to continue.");
	} else if (chapter == "day") {
        background('lightblue');
		fill('yellow');
        noStroke();
		ellipse(x + 600, y - 100, w - 100);
        
        // clouds 1
        noStroke();
        fill("white");   
        ellipse(cloudX + 100, cloudY - 50, cloudW - 50);
        ellipse(cloudX + 130, cloudW - 40, cloudW- 50);
        ellipse(cloudX + 110, cloudY - 30, cloudW - 50);
        
        // clouds 2
        noStroke();
        fill("white");   
        ellipse(cloudX + 350, cloudY - 30, cloudW - 50);
        ellipse(cloudX + 320, cloudY - 20, cloudW - 50);
        ellipse(cloudX + 360, cloudY + 10, cloudW - 50);
        ellipse(cloudX + 330, cloudY + 10, cloudW - 50);
        
        // clouds 3
        noStroke();
        fill("white");   
        ellipse(cloudX + 500, cloudY + 70, cloudW - 50);
        ellipse(cloudX + 470, cloudY + 80, cloudW - 50);
        ellipse(cloudX + 510, cloudY + 90, cloudW - 50);
        
        // clouds 4
        noStroke();
        fill("white");   
        ellipse(cloudX + 650, cloudY - 30, cloudW - 50);
        ellipse(cloudX + 620, cloudY - 20, cloudW - 50);
        ellipse(cloudX + 660, cloudY - 10, cloudW - 50);
        ellipse(cloudX + 630, cloudY + 10, cloudW - 50);
        
        // clouds 5
        noStroke();
        fill("white");   
        ellipse(cloudX + 750, cloudY + 70, cloudW - 50);
        ellipse(cloudX + 720, cloudY + 80, cloudW - 50);
        ellipse(cloudX + 760, cloudY + 90, cloudW - 50);
        ellipse(cloudX + 730, cloudY + 110, cloudW - 50);
        
        // clouds 6
        noStroke();
        fill("white");   
        ellipse(cloudX + 850, cloudY + 70, cloudW - 50);
        ellipse(cloudX + 820, cloudY + 80, cloudW - 50);
        ellipse(cloudX + 860, cloudY + 90, cloudW - 50);
        ellipse(cloudX + 830, cloudY + 110, cloudW - 50);
        
        // Grass
        noStroke();
        fill("lightgreen");  // grass color
        rect(x - 200, y + 280, windowWidth, windowHeight);
        
		abel(300, 150, 200);  
		joel(400, 75, 200);
		narrative("Then Joel eats Abel or Abel eats Joel.", "Click on one of the characters to eat it.");
	} else if (chapter == "night") {
		if (whichFruit == "joel") {
            background('darkblue');
            
            // Moon
            noStroke();
            fill("white");    // Moon color
            ellipse(sunX - 30, sunW + 20, sunW + 0, sunH + 0);
            
            // star 1
            noStroke();
            fill("white"); 
            beginShape();
            vertex(starX + 319, starY - 28);
            vertex(starX + 329, starY - 56);
            vertex(starX + 295, starY - 48);
            endShape(CLOSE) // top Star
            
            beginShape();
            vertex(starX + 305, starY - 61);
            vertex(starX + 332, starY - 43);
            vertex(starX + 299, starY - 29);
            endShape(CLOSE) // bottom star
            
            // star 2
            noStroke();
            fill("white"); 
            beginShape();
            vertex(starX + 419, starY + 72);
            vertex(starX + 429, starY + 44);
            vertex(starX + 395, starY + 52);
            endShape(CLOSE) // top Star
            
            beginShape();
            vertex(starX + 405, starY + 39);
            vertex(starX + 432, starY + 57);
            vertex(starX + 399, starY + 71);
            endShape(CLOSE) // bottom star
            
            // star 3
            noStroke();
            fill("white"); 
            beginShape();
            vertex(starX + 519, starY - 28);
            vertex(starX + 529, starY - 56);
            vertex(starX + 495, starY - 48);
            endShape(CLOSE) // top Star
            
            beginShape();
            vertex(starX + 505, starY - 61);
            vertex(starX + 532, starY - 43);
            vertex(starX + 499, starY - 29);
            endShape(CLOSE) // bottom star
            
            // star 4
            noStroke();
            fill("white"); 
            beginShape();
            vertex(starX + 619, starY + 72);
            vertex(starX + 629, starY + 44);
            vertex(starX + 595, starY + 52);
            endShape(CLOSE) // top Star
            
            beginShape();
            vertex(starX + 605, starY + 39);
            vertex(starX + 632, starY + 57);
            vertex(starX + 599, starY + 71);
            endShape(CLOSE) // bottom star
            
            // star 5
            noStroke();
            fill("white"); 
            beginShape();
            vertex(starX + 719, starY - 28);
            vertex(starX + 729, starY - 56);
            vertex(starX + 695, starY - 48);
            endShape(CLOSE) // top Star
            
            beginShape();
            vertex(starX + 705, starY - 61);
            vertex(starX + 732, starY - 43);
            vertex(starX + 699, starY - 29);
            endShape(CLOSE) // bottom star
            
            // Grass
        noStroke();
        fill("lightgreen");  // grass color
        rect(x - 200, y + 280, windowWidth, windowHeight);
            
			abel(600, 100, 200);
			narrative("Abel is Stuff.", "Click anywhere to start over.");
		}
		if (whichFruit == "abel") {
            background('darkblue');
            
            // Moon
            noStroke();
            fill("white");    // Moon color
            ellipse(sunX - 30, sunW + 20, sunW + 0, sunH + 0);
            
            // star 1
            noStroke();
            fill("white"); 
            beginShape();
            vertex(starX + 319, starY - 28);
            vertex(starX + 329, starY - 56);
            vertex(starX + 295, starY - 48);
            endShape(CLOSE) // top Star
            
            beginShape();
            vertex(starX + 305, starY - 61);
            vertex(starX + 332, starY - 43);
            vertex(starX + 299, starY - 29);
            endShape(CLOSE) // bottom star
            
            // star 2
            noStroke();
            fill("white"); 
            beginShape();
            vertex(starX + 419, starY + 72);
            vertex(starX + 429, starY + 44);
            vertex(starX + 395, starY + 52);
            endShape(CLOSE) // top Star
            
            beginShape();
            vertex(starX + 405, starY + 39);
            vertex(starX + 432, starY + 57);
            vertex(starX + 399, starY + 71);
            endShape(CLOSE) // bottom star
            
            // star 3
            noStroke();
            fill("white"); 
            beginShape();
            vertex(starX + 519, starY - 28);
            vertex(starX + 529, starY - 56);
            vertex(starX + 495, starY - 48);
            endShape(CLOSE) // top Star
            
            beginShape();
            vertex(starX + 505, starY - 61);
            vertex(starX + 532, starY - 43);
            vertex(starX + 499, starY - 29);
            endShape(CLOSE) // bottom star
            
            // star 4
            noStroke();
            fill("white"); 
            beginShape();
            vertex(starX + 619, starY + 72);
            vertex(starX + 629, starY + 44);
            vertex(starX + 595, starY + 52);
            endShape(CLOSE) // top Star
            
            beginShape();
            vertex(starX + 605, starY + 39);
            vertex(starX + 632, starY + 57);
            vertex(starX + 599, starY + 71);
            endShape(CLOSE) // bottom star
            
            // star 5
            noStroke();
            fill("white"); 
            beginShape();
            vertex(starX + 719, starY - 28);
            vertex(starX + 729, starY - 56);
            vertex(starX + 695, starY - 48);
            endShape(CLOSE) // top Star
            
            beginShape();
            vertex(starX + 705, starY - 61);
            vertex(starX + 732, starY - 43);
            vertex(starX + 699, starY - 29);
            endShape(CLOSE) // bottom star
            
            // Grass
        noStroke();
        fill("lightgreen");  // grass color
        rect(X - 200, Y + 280, windowWidth, windowHeight);
			
			joel(700, 50, 200 - 150);
			narrative("Joel is Stuff.", "Click anywhere to start over.");
		}
	}
}

function mouseClicked() {
	// change chapter
	if (chapter == "morning") chapter = "day";
//	else if (chapter == "day") chapter = "night";
	else if (chapter == "night") chapter = "morning";
	
	// detect which character is clicked
	else if (chapter == "day") {
		// clicked abel
		var abelDist = dist(mouseX, mouseY, 300, 200);
		if (abelDist < 150) {
			whichFruit = "abel";
			chapter = "night";
		}
		// clicked joel
		var joelDist = dist(mouseX, mouseY, 400, 100);
		if (joelDist < 280) {
			whichFruit = "joel";
			chapter = "night";
		}
	}
}

function abel(x, s, o) {
	var eyeSize = s / 10;
    
    //Character 2 
    noStroke();
    fill(255);  // outter eye colors
    
    // Character 2 
    ellipse(x + 370, abelOutterEyeY, abelOutterEyeW, abelOutterEyeH);  // outter left eye
    
    // Characater 2 
    ellipse(x + 430, abelOutterEyeY, abelOutterEyeW, abelOutterEyeH);  // outter right eye
    
    
    //Character 2 
    noStroke();
    fill(30);  // eye colors
    
    // Character 2 
    ellipse(x + 370, abelPupilY, abelPupilW, abelPupilH);  // left pupil
    
    // Characater 2 
    ellipse(x + 430, abelPupilY, abelPupilW, abelPupilH);  // right pupil
    
    //character 2
    arc(x + 395, abelTopWingsY, abelTopWingsW, abelTopWingsH, 100, PI + HALF_PI, PIE);  // top wings 
    
    //character 2
    arc(x + 395, abelBottomWingY, abelBottomWingW, abelBottomWingH, 100, PI + HALF_PI, PIE);  // bottom wings
    
    
    
    //Character 2
    noStroke();
    fill(255, 255, 51); // main
    
    // Character 2 
    ellipse(x + 400, abelHeadMainY, abelHeadMainW, abelHeadMainH);  // head
    
    // Characater 2  
    ellipse(x + 400, abelBodyMianY, abelBodyMainW, abelBodyMainH);  // top Body
    
    
    
    //Character 2
    noStroke();   // layer 1
    fill(0);
    
    // Character 2 
    ellipse(x + 400, abelHeadLayer1Y, abelHeadLayer1W, abelHeadLayer1H); // head
    
    // Characater 2  
    ellipse(x + 400, abelBodyLayer1Y, abelBodyLayer1W, abelBodyLayer1H); // Body
    
    
    
    //Character 2 
    noStroke();
    fill(255, 255, 51); // layer 2
    
    // Character 2 
    ellipse(x + 400, abelHeadLayer2W, abelHeadLayer2W, abelHeadLayer2H); // head
    
    // Characater 2  
    ellipse(x + 400, abelBodyLayer2Y, abelBodyLayer2W, abelBodyLayer2H); // Body
    
    
    
    //Character 2 
    noStroke(); 
    fill(0);  // layer 3
    
    // Character 2 
    ellipse(x + 400, abelHeadLayer3Y, abelHeadLayer3W, abelHeadLayer3H); // head
    
    // Characater 2 
    ellipse(x + 400, abelBodyLayer3Y, abelBodyLayer3W, abelBodyLayer3H);  // Body
    
    
    //Character 2 
    noStroke(); 
    fill(255);  // mouth color
    
    //character 2
    arc(x + 400, abelMouthY, abelMouthW, abelMouthH, 100, PI + QUARTER_PI, PIE);  // mouth
    
    // end of character 2
    
    
}

function joel(x, s, o) {
    
    //Character 1 
    noStroke();
    fill(255);  // eye colors
    
    // Characater 1 
    ellipse(x - 15, joelOutterEyeY, joelOutterEyeW, joelOutterEyeH);  // Outter left eye
    
    // Characater 1 
    ellipse(x + 15, joelOutterEyeY, joelOutterEyeW, joelOutterEyeH);  // Outter right eye
    
    
    
    //Character 1 
    noStroke();
    fill(0);  // eye colors
    
    // Characater 1 
    ellipse(x - 15, joelPupilY, joelPupilW, joelPupilH);  // left eye
    
    // Characater 1 
    ellipse(x + 15, joelPupilY, joelPupilW, joelPupilH);  // right eye
    
    
    //Character 1 
    noStroke();
    fill(190);  // wings color   
    
    //character 1
    arc(x - 8, joelTopWingsY, joelTopWingsW, joelTopWingsH, 100, PI + HALF_PI, PIE);  // top wings  
    
    //character 1
    arc(x - 8, joelBottomWingY, joelBottomWingW, joelBottomWingH, 100, PI + HALF_PI, PIE);  // bottom wings
    
    
    //Character 1 
    noStroke();
    fill(102, 178, 255);  // head and body color
    
    // Characater 1 
    ellipse(x + 0, joelHeadY, joelHeadW, joelHeadH);  // head
    
    // Characater 1 
    ellipse(x + 0, joelBodyY, joelBodyW, joelBodyH);  // Body
    
    
    stroke(0);
    fill(255);
    
    //character 1
    arc(x + 0, joelMouthY, joelMouthW, joelMouthH, 100, PI + QUARTER_PI, PIE);  // mouth
    
    
    // end of character 1
    
}

function narrative(story, instructions) {
	// narrative
	stroke(255);
	textSize(30);
	text(story, width / 2, height - 100);
	// instructions
	textSize(20);
	text(instructions, width / 2, height - 50);
    
}