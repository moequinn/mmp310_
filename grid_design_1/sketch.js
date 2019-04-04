/*
	mmp 310 week 5 (03/06/2019)
	new grid design with save image code
*/
    
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(51);
    
    var columns = 12;
    var rows = 8;
    var w = width / columns; // columns width
    var h = height / rows; // row height
    
    // nested for loop
    for(let x = 0; x <= width; x += w) {
        for(let y = 0; y <= height; y += h) {
            
            stroke(random(10, 100, 30));
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
                
                stroke(random(0, 255, 0));
                rect(x, y, w, h);
                ellipse(x, y, w / 2, h / 2);
                
			} else {
                
                fill(random(255));
                rect(x, y, w, h);
                rect(x, y, w / 2, h / 2);
                
			}
			
		}
	}
}

function mouseClicked() {
    save('pattern-1.jpg');
}