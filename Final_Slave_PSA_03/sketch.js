var y = 528;
var circSize = 250;
//var x = 336;
var x = 200;
var increment = 250;
var myFont;
var words =["","1","2","5","0","0","0","0",""];
var words2 =["","","1","8","6","5","","",""];
var words3 =[" "," S","L","A","V","E","R","Y "," "];
var words4=["","","2","0","1","6","","",""];
var words5=["","4","0","0","0","0","0","0","0"];


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
//    
//    sound=loadSound()
}

function setup(){
    
createCanvas(1920,1080);
    background(0);
//    loadFont(myFont);
//    textFont(Helvetica);
//    textSize(100);
}


function draw (){
    
    
    fill(colR,255,255);
        rect(rectX, rectY, rectSize, rectSize);
    textSize(40);
    fill(0);
    text("Click",150,850);
    fill(255);
    
//    text("Slavery", 300,700);
    textSize(275);
    


    
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
   } 
     if(state == 2){
         //    page 2
         text("SLAVERY",900,250);
        text("ABOLISHED",1000,800);
         
    for(var i=0; i<words2.length;i++){
        fill(255);
        ellipse(x+ increment*i, y, circSize,circSize);
       
        
        textAlign(CENTER,CENTER);
        fill(255, 0, 0);
        text(words2[i],x+increment*i,y);
//        text("SLAVERY",900,250);
//        text("ABOLISHED",1000,800);
//        text(i+1,x+ increment*i,y);
//        text(words[index],300,575);
//        text("",x,y,w,h);
 }
 
     } 
       if(state == 3){
        text("MORE PEOPLE",900,250);
        text("ARE ENSLAVED",1000,800); 
           
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
       }

     if(state == 4){
        text("TIME",900,250);
        text("FINISH",1000,800); 
         
         for(var i=0; i<words4.length;i++){
        fill(255);
        ellipse(x+ increment*i, y, circSize,circSize);
        textAlign(CENTER,CENTER);
        fill(255, 0, 0);
        text(words4[i],x+increment*i,y);
//        text(i+1,x+ increment*i,y);
//        text(words[index],300,575);
//        text("",x,y,w,h);
       
        }
    }
    
      if(state == 5){
         for(var i=0; i<words5.length;i++){
        fill(255);
        ellipse(x+ increment*i, y, circSize,circSize);
        textAlign(CENTER,CENTER);
        fill(255, 0, 0);
        text(words5[i],x+increment*i,y);
//        text(i+1,x+ increment*i,y);
//        text(words[index],300,575);
//        text("",x,y,w,h);
       
        }
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
//}
    
       }
function mousePressed(){
    if(mouseX > rectLeft && mouseX < rectRight && mouseY > rectTop && mouseY < rectBottom){
        if(state <6){
            state = state +1;
        }else{
            state = 1;

        }
}
}

