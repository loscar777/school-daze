
var img;
//var state=1

// circle 1

var circ1X=598;
var circ1Y=576.5;
var circ1Size=109;
var circ1Radius=circ1Size / 2;
var d1;

// circle 2


var circ2X=574;
var circ2Y=398;
var circ2Size=109;
var circ2Radius=circ2Size / 2;
var d2;


// circle 3

var circ3X=755;
var circ3Y=357;
var circ3Size=109;
var circ3Radius=circ3Size / 2;
var d3;



// circle 4

var circ4X=825;
var circ4Y=532;
var circ4Size=109;
var circ4Radius=circ4Size / 2;
var d4;

var white=0;

var beat1;
var beat2;
var beat3;
var beat4;

var isClicked = false;
var isClicked2 = false;
var isClicked3 =false; 
var isClicked4 =false;

function preload (){
  img=loadImage("Background.png");
   beat1 = loadSound("Urban_pop04a.mp3");
   beat2 = loadSound("Pop_Dance07c.mp3");
   beat3 = loadSound("BomBomBass.wav")
    
    
    
}



function setup(){
    
createCanvas(1366,762);  
    
}

function draw() {

//    circ=ellipse 
    
    imageMode(CENTER);
    image(img,width/2,height/2);
    
 
    
//    
// if (mouseX >circLeft && mouseX< circRight && mouseY>circTop && mouseY<circBottom) {
//     
////     
////     colR 200;
// }else{
//     
//     colR=255,233,4;
//     
//       circ=ellipse 
// }
//  fill(colR,255);
//    circ(circX,circY,circSize,circSize);
//    
//    
//    circle 1
    
  
    fill(white);
    noStroke();
//    ellipse(597,578,109,109);
//    
    ellipse(circ1X, circ1Y, circ1Size, circ1Size);
    d1 = dist(circ1X, circ1Y, mouseX, mouseY);  


//    ellipse.mouseover fill(0);
    
//    circle 2
     
//    ellipse(574,398,109,109);
    
    ellipse(circ2X,circ2Y,circ2Size,circ2Size);
    d2 = dist(circ2X, circ2Y, mouseX, mouseY);

//      circle 3
    
//     ellipse(755,357,109,109);
//    
    ellipse(circ3X,circ3Y, circ3Size,circ3Size);
     d3 = dist(circ3X, circ3Y, mouseX, mouseY);
    
    
//    circle 4
////    
//      ellipse(825,532,109,109);
   
     ellipse(circ4X,circ4Y,circ4Size,circ4Size);
     d4 = dist(circ4X, circ4Y, mouseX, mouseY);
//    
    if (d1 < circ1Radius || d2 < circ2Radius || d3 < circ3Radius || d4 < circ4Radius) {
        white = 255; 
    }else {
        white = 0;
    }  
//    
// if (state) {
//  fill(255); 
//  ellipse(825,532,109,109);
// }else {
//  noFill();
//  ellipse(825,532,109,109);
// }    

  

//    
//    if(state==1){
//    fill(255,10,30,50);
//    
//    ellipse(mouseX,mouseY,40,40);
//    }else if(state==2) {
//    
//    fill(10,100,250,50);
//    ellipse(mouseX,mouseY,40,40);
//    
//    }else{
//        
//        
//        fill(0,50);
//        ellipse(mouseX,mouseY,40,40)
//    }
//    
}
//
function mousePressed(){
    
    if(d1 > circ1Radius && isClicked == false) {
        beat1.play();
        isClicked = !isClicked;
    }else if(d1 > circ1Radius && isClicked == true) {
        beat1.stop();
        isClicked = !isClicked;
    }
    
    if(d2 > circ2Radius && isClicked2 == false) {
        beat2.play();
        isClicked2 = !isClicked2;
    }else if(d2 > circ2Radius && isClicked == true) {
        beat2.stop();
        isClicked2 = !isClicked2;
    }
//    
   if(d3 > circ3Radius && isClicked == false) {
        beat3.play();
        isClicked3 = !isClicked3;
    }else if(d3 > circ3Radius && isClicked == true) {
        beat3.stop();
        isClicked3 = !isClicked3;
        
    }
//    
//    if(d4 > circ4Radius) {
//        
//    }
    
}


