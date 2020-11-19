var fixedRect, movingRect, ball, bat;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ball = createSprite(20,50,50,50,25);
  ball.shapeColor = "cyan";
  ball.velocityX = 3;
  bat = createSprite(800,50,60,100);
  bat.shapeColor = "orange";
  

}

function draw() {
  background(0,0,0);  
  bounceOff(ball, bat);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
  drawSprites();
}

function bounceOff(ob1,ob2){

  if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
    && ob2.x - ob1.x < ob2.width/2 + ob1.width/2
    && ob1.y - ob2.y < ob2.height/2 + ob1.height/2
    && ob2.y - ob1.y < ob2.height/2 + ob1.height/2) {
   ob1.velocityX = ob1.velocityX * (-1);
   ob1.velocityY = ob1.velocityY * (-1);
   ob2.velocityX = ob2.velocityX * (-1);
   ob2.velocityY = ob2.velocityY * (-1);
}
else {
  return false;
}

}