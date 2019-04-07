/*  week 7 Array 2 */

var points = []; // empty array
var r = 0;
function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
}

function draw() {
	background(51);
	
	if (mouseIsPressed) {
		points.push([mouseX, mouseY]);	
	}
	
	for (let i = 0; i < points.length; i++) {
		let x = points[i][0];
		let y = points[i][1];
		fill('pink');
		ellipse(x, y, 10);
        ellipse(x - 10, y, 10);
        ellipse(x + 10, y, 10);
	}
	
	translate(width/2, height/2);
	scale(r);
	r += 0.01;
	
	for (let i = 0; i < points.length; i++) {
		let x = points[i][0] - width/2;
		let y = points[i][1] - height/2;
		fill('lightgreen');
		rect(x, y, 30, 30);
	}
	
	if (random(100) > 99) r = 0;
}

