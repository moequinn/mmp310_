/* 
	nba rookies data vis
	mmp 310 week 8
*/

var rookies; // rookies csv data
var offset = 0; // offset varible

function preload() {
	rookies = loadTable('rookies.csv', 'csv', 'header'); // loader for the data
}

function setup() {
	createCanvas(windowWidth, windowHeight); // canvas position and size
	textSize(50);
	textAlign(LEFT, CENTER);
	noStroke();
}

function draw() {  // drawing sketch
	background(101);
	
	for (let i = 0; i < rookies.getRowCount(); i++) {   // rookies data file
		let ast = rookies.getNum(i, 'ASTper');  // number of AST
		let min = rookies.getNum(i, 'MPper');  // number of MP
		let x = map(min, 0, 36, 0, width);  // x's width
		let y = map(ast, 0, 6, height, 0);  // y's height
		
		fill('lightblue');
		if (dist(x + offset/2, y + offset, mouseX, mouseY) < 10) {  // distance
			let player = rookies.getString(i, 'Player').split('\\')[0];
            
            fill('white');  // color for the player text
			text(player, 100, 200);
            
            fill('yellow');  // color for the ast text
			text(ast, 100, 250);
            
            fill('pink');  // color for the min text
			text(min, 100, 300);
            
            fill('blue');  // color for the circle
            }
            stroke('white');
            ellipse(x, y, 25); // graph circle
//            rect(x, y, offset/2, offset*2); // graph recttangle
	}
}
