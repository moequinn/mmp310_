/*  week 7 Array 2 */

var points = []; // empty array
var r = 0;
var speed = 5;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
}

function draw() {
	background(51);
	
	if (mouseIsPressed) {
		points.push([mouseX + speed, mouseY + speed]);	
	}
	
	for (let i = 0; i < points.length; i++) {
		let x = points[i][0];
		let y = points[i][1];
		fill('pink');
		ellipse(x, y, 40); // face
        
        fill('blue');
        ellipse(x - 10, y, 20); // left eye
        ellipse(x + 10, y, 20); // right eye
	}
	
	translate(width/2, height/2);
	scale(r);
	r += 0.01;
	
	for (let i = 0; i < points.length; i++) {
		let x = points[i][0] - width/2;
		let y = points[i][1] - height/2;
		
        fill('lightgreen');
		ellipse(x, y, 40); // face
        
        fill('purple');
		ellipse(x - 10, y, 20); // left eye
        ellipse(x + 10, y, 20); // right eye
	}
	
	if (random(100) > 99) r = 0;
}

