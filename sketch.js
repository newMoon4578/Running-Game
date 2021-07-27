var runner;
var ground;
var barrier1;
var barrier2;

function preload(){
  //pre-load images
  path = loadImage("path.png");
  runner_running = loadAnimation("Runner-1.png","Runner-2.png");
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  ground = createSprite(200,200,400,400);
  ground.addImage("path", path);
  ground.velocityY = 4;
  ground.scale = 1.2;

  runner = createSprite(200,200,20,20);
  runner.addAnimation("running", runner_running);
  runner.scale = 0.1;

  barrier1  = createSprite(0,0,50,800);
  barrier1.visible = false;
  barrier2 = createSprite(400,0,50,800);
  barrier2.visible = false;
}

function draw() {
  background("green");

  runner.x = World.mouseX;

  if (runner.x <= 0){
    runner.x = runner.x + 10;
  }

  if (runner.x >= 400){
    runner.x = runner.x - 10;
  }

  if (ground.y > 400){
    ground.y = ground.width/2;
  }

  runner.collide(barrier1);
  runner.collide(barrier2);

  drawSprites();
}
