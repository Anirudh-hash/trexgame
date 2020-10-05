
var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudimage;
var            obstacleimage1,                                       obstacleimage2, obstacleimage3, obstacleimage4, obstacleimage5,       obstacleimage6; 
var cloudgroup;
var obstaclegroup;
var score=0;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png")
  
  cloudimage=loadImage("cloud.png");
  
  obstacleimage1=loadImage("obstacle1.png");
  obstacleimage2=loadImage("obstacle2.png");
  obstaceleimage3=loadImage("obstacle3.png");
  obstaceleimage4=loadImage("obstacle4.png");
  obstaceleimage5=loadImage("obstacle5.png");
  obstaceleimage6=loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);
  
  // create trex
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  // create ground
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  // create invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
cloudgroup=new Group();
  obstaclegroup=new Group();
 
}

function draw() {
  background(255);
  
  // trex jump and gravity
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
    trex.velocityY = trex.velocityY + 0.8
  
  // reset ground
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  score=score+1
   text("score"+score,530,20)
  
  trex.collide(invisibleGround);
  
  spawnClouds();
  spawnobstacles();
    drawSprites();
}


function spawnClouds() {
  //write code here to spawn the clouds
  if (World.frameCount % 60 === 0) {
    var cloud = createSprite(400,320,40,10);
    cloud.y=Math.round(random(50,125));
    cloud.addImage("cloud",cloudimage);
    cloud.scale = 0.75;
    cloud.velocityX = -3;
    

    cloud.lifetime=400/3;
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
  }
  
}

function spawnobstacles (){
  if(World.frameCount % 100===0) {
    var r=Math.round(random);
  var obstacle=createSprite(400,360);                                 if (r==1){
   obstacle1.addImage(obstacleimage1);
  }
    if(r==2){
    obstacle2.addImage(obstacleimage1);
    }
    if(r==3){
    obstacle3.addImage(obstacleimage1);
    }
    if(r==4){
    obstacle4.addImage(obstacleimage1);
    }
    if(r==5){
    obstacle5.addImage(obstacleimage1);
    }
    if(r==6){
  obstacle6.addImage(obstacleimage1);
    } 
  obstacle.scale=0.5;
  obstacle.velocityX=-6;
  obstacle.lifetime=400/3;
  obstaclegroup.add(obstacle);
}
}