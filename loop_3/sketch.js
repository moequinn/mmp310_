/*
	mmp 310 week 6 (02/27/2019)
	loop 3 Grids example
*/
    
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(random(91));
    rectMode(CENTER);
	textSize(50);
    frameRate(1);
}

function draw() {
	var columns = 12;
	var rows = 8;
	var w = width / columns; // column width
	var h = height / rows; // row height
	
	for (let x = 0; x <= width; x += w) {
		for (let y = 0; y <= height; y += h) {
			
                // symbol patterns
                noFill();
                strokeWeight(4);
                stroke('#70FFC1');
                var r = random(w);
                var offset = 10;

                ellipse(x - offset, y, w / 4);
                ellipse(x + offset, y, w / 4);
                ellipse(x, y - offset, w / 4);
                ellipse(x, y + offset, w / 4);
            
                // Random choice
                var choice = random(2);
                if (choice > 1) {
				
				var _r = random(0, 255, x);
				var _g = random(60, 255, y);
				var _b = random(100, 255);
                
                // square pattern
				fill(_r, _g, _b);
                rect(x, y, w, h);
                
			    } else {
                // inner patterns
				stroke('#CC4689');
                rect(x, y, w / 2, h / 2);
                rect(x, y, w / 3, h / 3);
                rect(x, y, w / 6, h / 6);
			}
		}
	}
}