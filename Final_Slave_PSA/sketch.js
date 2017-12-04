var y = 528;
var circSize = 166;
var x = 336;
var increment = 189;
var myFont;



function preload(){
//    myFont=loadFont("Roboto-Black.ttf");
}

function setup(){
    
createCanvas(1920,1080);
    background(0);
//    loadFont(myFont);
//    textFont(Helvetica);
    textSize(100);
}


function draw (){
    for(var i=0; i<8;i++){
        fill(255);
        ellipse(x+ increment*i, y, circSize,circSize);
        textAlign(CENTER,CENTER);
        fill(255, 0, 0);
        text(i+1,x+ increment*i,y);
//        text("",x,y,w,h);
//        
    }
    
    
    
    
    
//    
//    
//    function preload(){
////    myFont=loadFont("Roboto-Black.ttf");
}
//
//function setup(){
//    
//createCanvas(1920,1080);
//    background(0);
////    loadFont(myFont);
////    textFont(Helvetica);
//    textSize(100);
//}


/*Page 1*/

function draw (){
    for(var i=0; i<8;i++){
        fill(255);
        ellipse(x+ increment*i, y, circSize,circSize);
        textAlign(CENTER,CENTER);
        fill(255, 0, 0);
        text(i+1,x+ increment*i,y);
//        text("",x,y,w,h);
//        
    }
    
    /*Page 2*/
    
//    fill(255);
//    ellipse(x+ increment*0, y, circSize,circSize);
//    textAlign(CENTER,CENTER);
//    fill(255, 0, 0);
//    text("1",x,y);
//    
    
    
    
    
    /*Page 3*/

//    fill(255);
//    ellipse(x+ increment*0, y, circSize,circSize);
//    textAlign(CENTER,CENTER);
//    fill(255, 0, 0);
//    text("1",x,y);
     
    
    
    /*Page 4*/
    
//    fill(255);
//    ellipse(x+ increment*0, y, circSize,circSize);
//    textAlign(CENTER,CENTER);
//    fill(255, 0, 0);
//    text("1",x,y);
//    
    
 
    
//    
//    fill(255);
//    ellipse(x+ increment*1,y,circSize,circSize);
//    fill(255, 0, 0);
//    text("2",x+ increment,y);
//    fill(255);
//    ellipse(x+ increment*2,y,circSize,circSize);
//    ellipse(x+ increment*3,y,circSize,circSize);
//    ellipse(x+ increment*4,y,circSize,circSize);
//    ellipse(x+ increment*5,y,circSize,circSize);
//    ellipse(x+ increment*6,y,circSize,circSize);
//    
////for (var x=366;x< 253;x+=355);
    

}
