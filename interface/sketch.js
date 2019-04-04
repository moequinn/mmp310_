/*
	week 6
	dom library
	ui 
*/

/* global variables */
var bg = "green";
var g = 255;
var columns = 8;
var rows = 8;

function setup() {
	createCanvas(windowWidth, windowHeight/2);
	pattern();
	
	var button = createButton("Save Image");
	button.mousePressed(saveImage);
//	button.style('color', bg);
	button.style('font-family', 'monaco');
	button.id('my-button');
	button.class('interface');
//	button.position(0, height - 50);
	
	var generatePattern = createButton("Generate Pattern");
	generatePattern.mousePressed(pattern);
	generatePattern.class('interface');
//	generatePattern.position(180, height - 50);
	
	// columns slider
	createDiv("Number of Columns");
	var columnSlider = createSlider(2, 100, columns);
	columnSlider.input(setColumn);
	
	// rows 
    createDiv("Number of Rows");
	var rowSlider = createSlider(2, 100, rows);
	rowSlider.input(setRow);
	
	// bg color
	createDiv("Background Color");
	var colorSlider = createSlider(0, 255, g);
	colorSlider.input(setColor);
	
	
}

function setColumn() {
	columns = this.value();
	pattern();
}

function setRow() {
	rows = this.value();
	pattern();
}

function setColor() {
	g = this.value();
	pattern();
}

function pattern() {
	background(0, g, 127);
	
	var w = width / columns;
	var h = height / rows;
	
	for (let x = 0; x <= width; x += w) {
		for (let y = 0; y <= height; y += h) {
			
			// drawing 
			
			stroke(random(10, 100,));
            strokeWeight(2);
            
            var r = random(3);
            if (r > 2) {
                
                var _r = random(0, 255, x);
				var _g = random(60, 255, y);
				var _b = random(100, 255);
                
                // square pattern
				fill(_r, _g, _b);
                rect(x, y, w, h);
                
			} else if (r > 1) {
                
                stroke(random(0, 255));
                rect(x, y, w, h);
                ellipse(x, y, w / 2, h / 2);
                
			} else {
                
                fill(random(255));
                rect(x, y, w, h);
                rect(x, y, w / 2, h / 2);
                
			}
			
			
			// end drawing
		}
	}
}

function saveImage() {
	save("pattern.png");
}






