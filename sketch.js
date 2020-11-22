
var fixed, moving, moving2, moving3, moving4;

function setup() { 

 createCanvas(windowWidth,windowHeight);

  fixed = createSprite(width/2, height/2, 100, 100); 
  fixed.shapeColor = "yellow"; 

  moving = createSprite(20, height/2, 50, 50); 
  moving.shapeColor = "yellow"; 
  moving.velocityX=5;

  moving2 = createSprite(width-20, height/2, 50, 50); 
  moving2.shapeColor = "yellow"; 
  moving2.velocityX=-5;

  moving3 = createSprite(width/2, 20, 50, 50); 
  moving3.shapeColor = "yellow"; 
  moving3.velocityY=5;

  moving4 = createSprite(width/2, height-20, 50, 50); 
  moving4.shapeColor = "yellow"; 
  moving4.velocityY=-5;
}

 function draw() {
 
  background(0);

 // moving.x = World.mouseX;
 // moving.y = World.mouseY;

if(moving.x<0){
  moving.velocityX=moving.velocityX*(-1);
}
if(moving2.x>width){
  moving2.velocityX=moving2.velocityX*(-1);
}
if(moving3.y<0||moving3.y>height){
  moving3.velocityY=moving3.velocityY*(-1);
}
if(moving4.y>height||moving4.y<0){
  moving4.velocityY=moving4.velocityY*(-1);
}


  if(isTouching(moving,fixed)){
   moving.shapeColor="red";
  }else{
   moving.shapeColor="yellow";
  }

  if(isTouching(moving2,fixed)){
    moving2.shapeColor="red";
   }else{
    moving2.shapeColor="yellow";
   }

   if(isTouching(moving3,fixed)){
    moving3.shapeColor="red";
   }else{
    moving3.shapeColor="yellow";
   }
 
   if(isTouching(moving4,fixed)){
     moving4.shapeColor="red";
    }else{
     moving4.shapeColor="yellow";
    }

  if(bounceOff(moving,fixed)){
    moving.shapeColor="red";
    moving.velocityX=moving.velocityX*(-1);
   }else{
     moving.shapeColor="yellow";
   }

   if(bounceOff(moving2,fixed)){
    moving2.shapeColor="red";
    moving2.velocityX=moving.velocityX*(-1);
   }else{
     moving.shapeColor="yellow";
   }



  
 drawSprites();

 }
 