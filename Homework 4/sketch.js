var img;
var img2;
var font;
var robofont;

function preload(){
    
img = loadImage ("changingfaces_yellow.png");
img2= loadImage("changing faces_red.png"); 
 robofont=loadfont('RobotoSlab-Light.ttf');   
    
}

function setup(){
   
createCanvas(windowWidth, windowHeight);
    
    textFont("RobotoSlab-Light.ttf");
      textSize(1200);
    
}

function draw(){ 
 background(255);
 imageMode(CENTER);
 image(img,width/2,height/2,600,600);
      textSize(1200);
      
    text("Fly Butter Fly ! Spread your color through the sky",200,500);
    
    if (mouseX>300){  
 
 image(img2,width/2,height/2,700,700);
    }
    
}

