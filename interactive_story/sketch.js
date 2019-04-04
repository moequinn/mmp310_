/*
    mmp 310 week 1 (01/27/2019)
    Interactive Story of Joe and Abel
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
var joelHeadX = joelOffset + 0; // joel x postion
var joelHeadY = joelOffset + 75; // joel y postion 
var joelHeadW = joelOffset - 185; // joel width
var joelHeadH = joelOffset - 170; // joel height

// Joel Body
var joelBodyX = joelOffset + 0;  // joel x position
var joelBodyY = joelOffset + 175; // joel y position
var joelBodyW = joelOffset - 180; // joel width
var joelBodyH = joelOffset + 0;   // joel height

// Joel top wings
var joelTopWingsX = joelOffset - 8; // joel x position
var joelTopWingsY = joelOffset + 140;   // joel y position
var joelTopWingsW = joelOffset + 100;   // joel width
var joelTopWingsH = joelOffset - 180;   // joel height

// Joel bottom wings
var joelBottomWingX = joelOffset - 8;  // joel x position
var joelBottomWingY = joelOffset + 170;  // joel y position
var joelBottomWingW = joelOffset + 100;  // joel width
var joelBottomWingH = joelOffset - 180;  // joel hieght

// Joel Outter eyes
var joelOutterLeftEyeX = joelOffset - 15;  // joel x position
var joelOutterRightEyeX = joelOffset + 15;  // joel x position
var joelOutterEyeY = joelOffset + 75;  // joel y position
var joelOutterEyeW = joelOffset - 180;  // joel width
var joelOutterEyeH = joelOffset - 180;  // joel hieght

// Joel eye pupils
var joelPupilLeftX = joelOffset - 15;  // joel x position
var joelPupilRightX = joelOffset + 15;  // joel x position
var joelPupilY = joelOffset + 75;  // joel y position
var joelPupilW = joelOffset - 190;  // joel width
var joelPupilH = joelOffset - 190;  // joel hieght

// Joel mouth
var joelMouthX = joelOffset + 0;  // joel x position
var joelMouthY = joelOffset + 110;  // joel y position
var joelMouthW = joelOffset - 160;  // joel width
var joelMouthH = joelOffset - 160;  // joel hieght

   
// Abel

var abelOffset = 200;

// Abel Head Main
var abelHeadMainX = joelOffset + 400; // joel x postion
var abelHeadMainY = joelOffset + 100; // joel y postion 
var abelHeadMainW = joelOffset - 140; // joel width
var abelHeadMainH = joelOffset - 150; // joel height

// Abel Head Layer1
var abelHeadLayer1X = joelOffset + 400; // joel x postion
var abelHeadLayer1Y = joelOffset + 100; // joel y postion 
var abelHeadLayer1W = joelOffset - 150; // joel width
var abelHeadLayer1H = joelOffset - 160; // joel height

// Abel Head Layer2
var abelHeadLayer2X = joelOffset+ 400; // joel x postion
var abelHeadLayer2Y = joelOffset + 100; // joel y postion 
var abelHeadLayer2W = joelOffset - 160; // joel width
var abelHeadLayer2H = joelOffset - 170; // joel height

// Abel Head Layer3
var abelHeadXLayer3X = joelOffset + 400; // joel x postion
var abelHeadLayer3Y = joelOffset + 100; // joel y postion 
var abelHeadLayer3W = joelOffset - 150; // joel width
var abelHeadLayer3H = joelOffset - 160; // joel height

// Abeel Body main
var abelBodyMainX = joelOffset + 400;  // joel x position
var abelBodyMianY = joelOffset + 175; // joel y position
var abelBodyMainW = joelOffset - 100; // joel width
var abelBodyMainH = joelOffset - 50;   // joel height

// Abeel Body Layer 1
var abelBodyLayer1X = joelOffset + 400;  // joel x position
var abelBodyLayer1Y = joelOffset + 175; // joel y position
var abelBodyLayer1W = joelOffset - 110; // joel width
var abelBodyLayer1H = joelOffset - 60;   // joel height

// Abeel Body Layer 2
var abelBodyLayer2X = joelOffset + 400;  // joel x position
var abelBodyLayer2Y = joelOffset + 175; // joel y position
var abelBodyLayer2W = joelOffset - 120; // joel width
var abelBodyLayer2H = joelOffset - 70;   // joel height

// Abeel Body Layer 3
var abelBodyLayer3X = joelOffset + 400;  // joel x position
var abelBodyLayer3Y = joelOffset + 175; // joel y position
var abelBodyLayer3W = joelOffset - 130; // joel width
var abelBodyLayer3H = joelOffset - 80;   // joel height

// Abel top wings
var abelTopWingsX = joelOffset + 395; // joel x position
var abelTopWingsY = joelOffset + 145;   // joel y position
var abelTopWingsW = joelOffset + 50;   // joel width
var abelTopWingsH = joelOffset - 150;   // joel height

// Abel bottom wings
var abelBottomWingX = joelOffset + 395;  // joel x position
var abelBottomWingY = joelOffset + 175;  // joel y position
var abelBottomWingW = joelOffset + 50;  // joel width
var abelBottomWingH = joelOffset - 150;  // joel hieght

// Abel Outter eyes
var abelOutterLeftEyeX = joelOffset + 370;  // joel x position
var abelOutterRightEyeX = joelOffset + 430;  // joel x position
var abelOutterEyeY = joelOffset + 100;  // joel y position
var abelOutterEyeW = joelOffset - 170;  // joel width
var abelOutterEyeH = joelOffset - 170;  // joel hieght

// Abel eye pupils
var abelPupilLeftX = joelOffset + 370;  // joel x position
var abelPupilRightX = joelOffset + 430;  // joel x position
var abelPupilY = joelOffset + 100;  // joel y position
var abelPupilW = joelOffset - 180;  // joel width
var abelPupilH = joelOffset - 180;  // joel hieght

// Abel mouth
var abelMouthX = joelOffset + 400;  // joel x position
var abelMouthY = joelOffset + 110;  // joel y position
var abelMouthW = joelOffset - 180;  // joel width
var abelMouthH = joelOffset - 180;  // joel hieght



function setup() {
    
    createCanvas(windowWidth, windowHeight);
	textSize(40);
	textAlign(CENTER, CENTER);

}


function draw() {
    
    background(204, 255, 229) // background color
    
    
    
    //Characater 1 on the left Joe
    //Characater 2 on the right Abel
    
    
    //Character 1 
    noStroke();
    fill(255);  // eye colors
    
    // Characater 1 
    ellipse(joelOutterLeftEyeX, joelOutterEyeY, joelOutterEyeW, joelOutterEyeH);  // Outter left eye
    
    // Characater 1 
    ellipse(joelOutterRightEyeX, joelOutterEyeY, joelOutterEyeW, joelOutterEyeH);  // Outter right eye
    
    
    
    //Character 1 
    noStroke();
    fill(0);  // eye colors
    
    // Characater 1 
    ellipse(joelPupilLeftX, joelPupilY, joelPupilW, joelPupilH);  // left pupil
    
    // Characater 1 
    ellipse(joelPupilRightX, joelPupilY, joelPupilW, joelPupilH);  // right pupil
    
    
    //Character 1 
    noStroke();
    fill(190);  // wings color   
    
    //character 1
    arc(joelTopWingsX, joelTopWingsY, joelTopWingsW, joelTopWingsH, 100, PI + HALF_PI, PIE);  // top wings  
    
    //character 1
    arc(joelBottomWingX, joelBottomWingY, joelBottomWingW, joelBottomWingH, 100, PI + HALF_PI, PIE);  // bottom wings
    
    
    
    //Character 1 
    noStroke();
    fill(102, 178, 255);  // head and body color
    
    // Characater 1 
    ellipse(joelBodyX, joelHeadY, joelHeadW, joelHeadH);  // head
    
    // Characater 1 
    ellipse(joelBodyX, joelBodyY, joelBodyW, joelBodyH);  // Body
    
    
    
    stroke(0);
    fill(255);
    
    //character 1
    arc(joelMouthX, joelMouthY, joelMouthW, joelMouthH, 100, PI + QUARTER_PI, PIE);  // mouth
    
    
    // end of character 1
    
    
    
    
    //Character 2 
    noStroke();
    fill(255);  // outter eye colors
    
    // Character 2 
    ellipse(abelOutterLeftEyeX, abelOutterEyeY, abelOutterEyeW, abelOutterEyeH);  // outter left eye
    
    // Characater 2 
    ellipse(abelOutterRightEyeX, abelOutterEyeY, abelOutterEyeW, abelOutterEyeH);  // outter right eye
    
    
    //Character 2 
    noStroke();
    fill(30);  // eye colors
    
    // Character 2 
    ellipse(abelPupilLeftX, abelPupilY, abelPupilW, abelPupilH);  // left pupil
    
    // Characater 2 
    ellipse(abelPupilRightX, abelPupilY, abelPupilW, abelPupilH);  // right pupil
    
    
    
    //Character 2 
    noStroke();
    fill(190);  // wings color
    
       
    
    //character 2
    arc(abelTopWingsX, abelTopWingsY, abelTopWingsW, abelTopWingsH, 100, PI + HALF_PI, PIE);  // top wings 
    
    //character 2
    arc(abelBottomWingX, abelBottomWingY, abelBottomWingW, abelBottomWingH, 100, PI + HALF_PI, PIE);  // bottom wings
    
    
    //Character 2
    noStroke();
    fill(255, 255, 51);
    
    // Character 2 
    ellipse(abelHeadMainX, abelHeadMainY, abelHeadMainW, abelHeadMainH);  // head
    
    // Characater 2  
    ellipse(abelBodyMainX, abelBodyMianY, abelBodyMainW, abelBodyMainH);  // Body
    
    
    
    //Character 2
    noStroke();
    fill(0);
    
    // Character 2 
    ellipse(abelHeadLayer1X, abelHeadLayer1Y, abelHeadLayer1W, abelHeadLayer1H); // head
    
    // Characater 2  
    ellipse(abelBodyLayer1X, abelBodyLayer1Y, abelBodyLayer1W, abelBodyLayer1H); // Body
    
    
    
    //Character 2 
    noStroke();
    fill(255, 255, 51); // layer 2
    
    // Character 2 
    ellipse(abelHeadLayer2X, abelHeadLayer2Y, abelHeadLayer2W, abelHeadLayer2H); // head
    
    // Characater 2  
    ellipse(abelBodyLayer2X, abelBodyLayer2Y, abelBodyLayer2W, abelBodyLayer2H); // Body
    
    
    
    //Character 2 
    noStroke(); 
    fill(0);  // layer 3
    
    // Character 2 
    ellipse(abelBodyLayer3X, abelHeadLayer3Y, abelHeadLayer3W, abelHeadLayer3H); // head
    
    // Characater 2 
    ellipse(abelBodyLayer3X, abelBodyLayer3Y, abelBodyLayer3W, abelBodyLayer3H);  // Body
    
    
    //Character 2 
    noStroke(); 
    fill(255);  // mouth color
    
    //character 2
    arc(abelMouthX, abelMouthY, abelMouthW, abelMouthH, 100, PI + QUARTER_PI, PIE);  // mouth
    
    // end of character 2
     
    
    noStroke(); 
    fill(0);  // text color
    
    text('Meet Joe and Abel', 240, 110); 
    //comments
    
    
}