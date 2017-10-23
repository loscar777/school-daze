
var img;
//var state=1

 

var circX=573.5;
var circY=576.5;
var circSize=109;
var circTop=circY;
var circBottom=circY+circSize;
var circLeft=circX;
var circRight=circX=circSize;
var colR;



function preload (){
  img=loadImage("Background.png");  
    
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
  
    fill(255);
    noStroke();
    ellipse(597,578,109,109);


//    ellipse.mouseover fill(0);
    
//    circle 2

    ellipse(574,398,109,109);

//      circle 3
    
     ellipse(755,357,109,109);
    
    
//    circle 4
    
      ellipse(825,532,109,109);
    
// if (state) {
//  fill(0,0,0); 
//  ellipse(1150,758,109,109);
// }else {
//  noFill();
//  ellipse(1150,758,109,109);
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
//}
//
//function mousePressed(){
//    
//    if(state<3){
//    
//    state=state+1;
//    
//    }else{
//        
//        state=1;
//    }
//    
}


