var group1x=217.115;

var group1y=181.095;

var counter=0;
var counter2=0;
var spin;
var speed=.5;
var speed2=10;

var group2x=217.5;
var group2y=491.5;

var counter=0;
var counter2=0;
var spin;
var speed=.8;
var speed2=10;


function setup(){
    
createCanvas(1224,792);
    
    
}

function draw ()

{
 background(255);
//    
////    Circle group 4
////    
//      noFill();
//      strokeWeight(9);
//      ellipse(217.115,181.095,218.293,218.293);
//     
//    
//      fill(0);
//      ellipse(237.38,255.827,44.758,44.758);
//    
//    
//      fill(0);
//      ellipse(130.732,215.851,26.829,26.829);
//     
//    
//      fill(0);
//      ellipse(181,99.236,27,27);
////////    
//////    Circle group 3
//    
//       noFill();
//       strokeWeight(9);
//       ellipse(762.732,170.12,218.293,218.293);
//    
//    
//       noFill(0);
//       strokeWeight(5);
//       ellipse(788.341,229.876,77,77);
//    
//       
//       noFill(0);
//       strokeWeight(5);
//       ellipse(726.146,88.573,27,27);
//    
////      Circle group 2
    
       push();
       translate(group2x,group2y);
       rotate(radians(counter));
//    
       noFill();
       strokeWeight(9);
       ellipse(0,0,218.293,218.293);
    

       fill(0);
       ellipse(25.11,59.374,76.829,76.829);
        push();
//    
    
    

//    
//     Circle group 1
    
     push();
        translate(group1x,group1y);
         rotate(radians(counter));
        
       noFill();
       strokeWeight(9);
       ellipse(0,0,218.293,218.293);
    

       fill(0);
       ellipse(24.495,59.756,76.829,76.829);
    push();
    
      
    counter+=speed;
    counter2+=speed2;
    
    
    
    
   
    
}
