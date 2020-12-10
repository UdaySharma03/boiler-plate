var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(50, 200, 50, 80);
  movingRect= createSprite(600, 200, 80, 30);
fixedRect.velocityX=3;
movingRect.velocityX=-2;
}

function draw() {
  background(255,255,255);  
  //movingRect.x=World.mouseX;
  //movingRect.y=World.mouseY;
  //console.log(movingRect.x);
  //console.log(fixedRect.x);
if(Math.abs(movingRect.x-fixedRect.x)<fixedRect.width/2+movingRect.width/2 &&
Math.abs(movingRect.y-fixedRect.y)<fixedRect.height/2+movingRect.height/2 )
  {
  //movingRect.shapeColor="red";
  //fixedRect.shapeColor="red";
  fixedRect.velocityX=-3;
  movingRect.velocityX=2;
  
}
else{
//movingRect.shapeColor="green";
//fixedRect.shapeColor="green";

}
  drawSprites();
}
