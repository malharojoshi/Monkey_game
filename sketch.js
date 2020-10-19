var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ob,obImg
var ground;
var monkeyCreated = "no";
var gamestate = "play"
var ground;

function spawnob() {
if (World.frameCount%200===0) {
    ob=createSprite(banana.x+20,500,20,20)
  ob.addImage(obImg)
  ob.scale=0.2
  ob.velocityX=-6
  ob.lifetime=banana.lifetime
    }
}

function spawnBanana() {
  if (World.frameCount % 80 === 0) {
    banana = createSprite(600, random(440, 200), 20, 20)
    banana.addImage(bananaImage)
    banana.lifetime=115
    banana.velocityX = -5
    banana.scale = 0.08
  }
}

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obImg = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600, 600)
  ground=createSprite(300,550,1200,20)

}


function draw() {
  background(180)
  if (gamestate === "play") {
    spawnBanana();
    spawnob();
    if (keyIsDown(32)) {
      monkey.velocityY=monkey.velocityY-4
    }
    ground.velocityX=-5
    if (ground.x < 0){
      ground.x = 300;
    }
    if (monkeyCreated === "no") {
      monkey = createSprite(50, 500, 20, 20)
      monkey.addAnimation("monkey_moving",monkey_running)
      monkey.scale=0.18
      monkeyCreated = "yes"
    }
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  if (monkeyCreated === "yes") {
    monkey.collide(ground);
    if (monkey.y===0||monkey.y<0) {  
        monkey.destroy()
        monkeyCreated="no";
      }
  }
  drawSprites();
  score=(Math.round(frameCount / frameRate()))
  text("Survival Time: "+score,100,50)
}