/*
	mmp 310 week 5 (02/20/2019)
	loop 2 example
*/
    
    function setup() {
	createCanvas(windowWidth, windowHeight);
	background(51);
	rectMode(CENTER);
	noStroke();
	textAlign(100);
	
	// making a row of self portraits
	let faceSize = random(100, 300);
	let increment = faceSize;
	for (let x = 0; x <= width; x += increment) {
		
		let y = height/2 + random(-100, 100);
		
		faceSize = random(100, 300);
		
		let r = random(255);
		let g = random(200, 255);
		let b = random(255);
        
        let offset = 40;
        let lightX2 = 60;
        let lightX3 = 90;
        let lightY2 = 25;
        let lightY3 = 75;
        
        
		fill(r, g, b);
		ellipse(x, y, faceSize,); // face
        ellipse(x + offset, y - offset, faceSize,); // face
        ellipse(x - offset, y - offset, faceSize,); // face
        triangle(x, y, lightX2, lightY2, lightX3, lightY3); // light source
        
        
        
        
		var randomChoice = random(3); // making random choices 
		if (randomChoice > 2) {
			fill('lightpurple');
		} else if (randomChoice > 1) {
			fill('lightgreen');
		} else {
			fill('lightblue');
		}
		
		let eyeSize = faceSize / 5;
		
		if (random(1) > 0.5) {
			ellipse(x + eyeSize, y - eyeSize, eyeSize); // left eye
			ellipse(x - eyeSize, y - eyeSize, eyeSize); // right eye
		} else {
			rect(x + eyeSize, y - eyeSize, eyeSize, eyeSize); // left eye
			rect(x - eyeSize, y - eyeSize, eyeSize, eyeSize); // right eye
		}
		
		fill('darkgreen');
		let mouthSize = faceSize / 2;
		rect(x, y + mouthSize / 2 + random(20), mouthSize, mouthSize / 4, mouthSize/8);
		
		// text('x: ' + x, x, y); // x label
	}
	
}
