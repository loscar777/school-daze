
var nums =[100,25,46,72];


function setup(){
    
    createCanvas(windowWidth,windowHeight);
      background(0);
}

function draw (){
    
  
    
    for (var i =0; i<4; i++){
    stroke(255);
    fill(random (255),0,random(255));  
    
    ellipse(i*300+100,400,nums[i],nums[i]);
        
//       I wanted to move the balls  
    
//    function bounceball(){
//    if(i > 200 || i < 0){
//        speed = speed * -1;
//    }
//}
//    
//function moveball(){
//   i = i + speed;
//        
    }
    
   

}
