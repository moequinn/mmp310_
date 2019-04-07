/*  week 7 Array 1 */

// height of my 10 cats
var cats = [10, 100, 50, 100, 150, 25, 75, 125, 175, 80, 100];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background('lightyellow');
	noStroke();
	
	for (let i = 0; i < cats.length; i++) {
		let x = i * width/cats.length;
		let s = cats[i]; // size
		cat(x, 200, s);
	}
}


function cat(x, y, s) {
    
	// cat drawing
	fill(s/ 2, 0, s + x/4);
	triangle(x - s*0.75, y - s/4, x + s*0.75, y - s/4, x, y + s/2); // ears
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
