//var x;


function setup(){
  createCanvas(1000,768);
//x=width/2; 

}

function draw(){
    noFill();
    
background(255);
    
    for(var i=5;i<=width;i+=50) {
        
        for(var j=20;j<=height;j+=10){
         fill(random (255),0,random(255));  
        rect(i,j,10,10);
            
        
        
    
       
        }
    }
}

