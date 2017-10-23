
var img;
//var state=1

 
//
//var circX=1020;
//var circY=800;
//var circSize=109;
//var circTop=circY;
//var circBottom=circY+circSize;
//var circLeft=circX;
//var circRight=circX=circSize;
//var colR;
//


function preload (){
  img=loadImage("Background.png");  
    
}



function setup(){
    
createCanvas(windowWidth,windowHeight);  
    
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
    circle 1
  
    
circ1(920,804.5,109,109);
    fill(255)

//    ellipse.mouseover fill(0);
    
//    circle 2

    ellipse(895.5,625,109,109);
    fill(255)

//      circle 3
    
     ellipse(1080,580.5,109,109);
    fill(255)
    
    
//    circle 4
    
      ellipse(1150,758,109,109);
      fill(255)

  
    noStroke();
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


