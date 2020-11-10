

var fixedRect, movingRect;
var speed,weight;
function setup() {
  createCanvas(1200,800);
  
speed=random(55,90)
weight = random(400,500)

  fixedRect = createSprite(700,500,60,height/2);
  fixedRect.shapeColor = "white";
 


  movingRect = createSprite(200,500,50,50);
  movingRect.shapeColor = "green";
  movingRect.velocityX = speed;

}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  if (fixedRect.x-movingRect.x <(movingRect.width+fixedRect.width/2)) {
   movingRect.velocityX=0;
   var deformation=0.5 * weight * speed /22509; 
 if (deformation>180){

movingRect.shapeColor= "yellow"

 }
 
 if(deformation<180 && deformation>100){
movingRect.shapeColor = "orange"

 }

 if(deformation<100){


  movingRect.shapeColor= "red"
 }
   drawSprites();

  }
}