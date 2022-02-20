
var trex ,trex_running,ground;
function preload(){
  trex_running=loadAnimation ("trex1.png","trex3.png","trex4.png");

  

}

function setup(){
  createCanvas(600,300);
  
  //create a trex sprite
trex = createSprite(50,200,20,20);
 trex.addAnimation("running",trex_running);
 trex.scale=0.5;
 ground = createSprite(20,290,1000,20);
}
function draw(){
  background("white");
  if (keyDown("up")) {
    trex.velocityY=-10;
  }
  trex.velocityY=trex.velocityY+0.5;
  trex.collide(ground);
  
drawSprites();
}
