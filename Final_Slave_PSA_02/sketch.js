var y = 528;
var circSize = 166;
//var x = 336;
var x = 200;
var increment = 189;
var myFont;
var words =["","1","2","5","0","0","0","0",""];
var words2 =["","","1","8","6","5","","",""];
var words3 =[" "," S","L","A","V","E","R","Y "," "];

var rectX = 100;
var rectY = 800;
var rectSize = 100;
var rectTop = rectY;
var rectBottom = rectY + rectSize;
var rectLeft = rectX;
var rectRight = rectX + rectSize;
var colR = 255;
var buttonClicked = false;

var state = 1;



function preload(){
    myFont=loadFont("Roboto-Black.ttf");
}

function setup(){
    
createCanvas(1920,1080);
    background(0);
//    loadFont(myFont);
//    textFont(Helvetica);
    textSize(100);
}


function draw (){
    
    
    fill(colR,255,255);
        rect(rectX, rectY, rectSize, rectSize);
//    Text
    
    
////    page 1  
//    for(var i=0; i<words.length;i++){
//        fill(255);
//        ellipse(x+ increment*i, y, circSize,circSize);
//        textAlign(CENTER,CENTER);
//        fill(255, 0, 0);
//        text(words[i],x+increment*i,y);
////        text(i+1,x+ increment*i,y);
////        text(words[index],300,575);
////        text("",x,y,w,h);
////        
//    }
    
//    //    page 2
//    for(var i=0; i<words2.length;i++){
//        fill(255);
//        ellipse(x+ increment*i, y, circSize,circSize);
//        textAlign(CENTER,CENTER);
//        fill(255, 0, 0);
//        text(words2[i],x+increment*i,y);
////        text(i+1,x+ increment*i,y);
////        text(words[index],300,575);
////        text("",x,y,w,h);
////        
//    }
//    
    //    page 3
//    for(var i=0; i<words3.length;i++){
//        fill(255);
//        ellipse(x+ increment*i, y, circSize,circSize);
//        textAlign(CENTER,CENTER);
//        fill(255, 0, 0);
//        text(words3[i],x+increment*i,y);
////        text(i+1,x+ increment*i,y);
////        text(words[index],300,575);
////        text("",x,y,w,h);
////        
//        
//        fill(colR, 255, 255);
//        rect(rectX, rectY, rectSize, rectSize);
//
//    }
    
   if(state == 1){
          //page 1
    for(var i=0; i<words.length;i++){
        fill(255);
        ellipse(x+ increment*i, y, circSize,circSize);
        textAlign(CENTER,CENTER);
        fill(255, 0, 0);
        text(words[i],x+increment*i,y);
//        text(i+1,x+ increment*i,y);
//        text(words[index],300,575);
//        text("",x,y,w,h);
//        
    }
   } if(state == 2){
         //    page 2
    for(var i=0; i<words2.length;i++){
        fill(255);
        ellipse(x+ increment*i, y, circSize,circSize);
        textAlign(CENTER,CENTER);
        fill(255, 0, 0);
        text(words2[i],x+increment*i,y);
//        text(i+1,x+ increment*i,y);
//        text(words[index],300,575);
//        text("",x,y,w,h);
 }
 
     } if(state == 3){
         for(var i=0; i<words3.length;i++){
        fill(255);
        ellipse(x+ increment*i, y, circSize,circSize);
        textAlign(CENTER,CENTER);
        fill(255, 0, 0);
        text(words3[i],x+increment*i,y);
//        text(i+1,x+ increment*i,y);
//        text(words[index],300,575);
//        text("",x,y,w,h);
       
        }
      // fill(0, 50);
       // ellipse(mouseX, mouseY, 40, 40);
    }

/*Page 1*/

//    for(var i=0; i<8;i++){
//        fill(255);
//        ellipse(x+ increment*i, y, circSize,circSize);
//        textAlign(CENTER,CENTER);
//        fill(255, 0, 0);
//        text(i+1,x+ increment*i,y);
////        text("",x,y,w,h);
////        
//    }
    
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
    

function mousePressed(){
    if(mouseX > rectLeft && mouseX < rectRight && mouseY > rectTop && mouseY < rectBottom){
        if(state < 3){
            state = state +1;
        }else{
            state = 1;

        }
    }
}
