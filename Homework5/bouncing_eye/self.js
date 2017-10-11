var isBeige = false;
var circX=0;


function setup() {
createCanvas(960,1024)
}


function draw(){
    background(217,206,176);
    
    fill(104,123,58);
    rect(300,900,100,150);
    
    if(isBeige==false){
        
        fill(210,180,131);
        
    }else{
            
        fill(217,206,176);
    
    }
    rect(0,110,92,340);
    noStroke()
//    
//     if (mouseX > 50) {
//        
//        fill(255,153,102);
//    }
//    
     if(isBeige==false){
        
       fill(178,87,98);
        
    }else{
            
        fill(217,206,176);
    
    }
    
    rect(230,0,447.5,950);
    
    
    if(isBeige==false){
        
       fill(178,87,98);
        
    }else{
            
        fill(217,206,176);
    
    }
    
  
    rect(50,0,80,180);
    
    
    
    if(isBeige==false){
        
        fill(210,180,131);
        
    }else{
            
        fill(217,206,176);
    
    }
    
    rect(150,0,92,680);
    
    fill(37,76,36);
     
    if (mouseX > 200) {
        
        fill(255,153,102);
    }

    ellipse(200,280,175,175);
   
   
    fill(85,99,144);
    rect(400,0,30,480);
    rect(288,480,142,30);
    
    stroke(255,255,255);
    fill(203,150,110,50);
    rect(250,600,308,103);

    noStroke()
    
    
    fill(198,151,78);
    rect(650,0,90,680);
    
    noStroke()
    
//   BLUE EYE 
    fill(25,54,77);
    ellipse(circX,280,175,175);
//    x+x+3;
    if (isBeige == true && circX < 600) {
        circX = circX + 10;
    }else if(isBeige == false) {
        circX = 0;
    }
    
    if(isBeige==false){
        
        fill(135,64,67);
        
    }else{
            
        fill(217,206,176);
    
    }
    
    rect(740,0,92,180);
    
    
    
       if(isBeige==false){
        
      fill(198,151,78);
        
    }else{
            
        fill(217,206,176);
    
    }
    
    rect(780,125,110,340);
    
    
    if(isBeige==false){
        
        fill(183,68,95);
        
    }else{
            
        fill(217,206,176);
    
    }
    
   
    rect(625,0,130,19);    
}


    function mousePressed() {
        
        isBeige = !isBeige;
        
    }