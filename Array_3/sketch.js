/*  week 7 Array 3 */

// global varibles
var cats = []; // empty cats

function mousePressed() {
	cats.push([mouseX, mouseY]);
}

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0);
	for (let i = 0; i < cats.length; i++) {
		cat(cats[i][0], cats[i][1], 100);
		cats[i][1] += 2;
	}
}

function cat(x, y, s) {
    
	// cat drawing
	fill(s/ 2, 0, s + x/4);
    noStroke();
//	triangle(x - s*0.75, y - s/4, x + s*0.75, y - s/4, x, y + s/2); // ears
    ellipse(x - 60, y - 10, s/2); // left ear
    ellipse(x + 60, y - 10, s/2); // right ear
    
    fill(0);
    noStroke();
    ellipse(x - 60, y - 10, s/4); // inner left ear
    ellipse(x + 60, y - 10, s/4); // inner right ear
    
    
    fill(s/ 2, 0, s + x/4);
    noStroke();
	ellipse(x, y, s); // face
    
    ellipse(x, y + s/2, s * 0.5); // upper trunk
    ellipse(x, y + s * 0.7, s* 0.4); // mid trunk
    ellipse(x, y + s * 0.85, s * 0.3); // lower trunk
    
	fill(255, y);
	ellipse(x - s/4, y, s/4, s/2); // left eye
	ellipse(x + s/4, y, s/4, s/2); // right eye
    
    fill(0);
	ellipse(x - s/4, y, s/6, s/4); // left eye
	ellipse(x + s/4, y, s/6, s/4); // right eye
    
}