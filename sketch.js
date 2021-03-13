var path ,boy ,cash ,diamonds ,jwellery ,ruby ,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg ,rubyImg ,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG ,rubyG ,swordGroup;
var PLAY =1;
var END =0;
var gameState =1;
var boyOut ,boyOutImg;
var out

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  boyOutImg = loadImage("runner1.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadImage("gameOver.png");
  rubyImg =loadImage("ruby.png");
}

function setup(){
  
  createCanvas(400,400);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);



//creating boy running
boy = createSprite(70,330,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
   out =createSprite(200,200,20,20);
     out.addImage(endImg);
  out.visible = false;
  
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();
rubyG =new Group();

}

function draw() {

  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
 
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();
    createruby();
  
  if(gameState === PLAY){
     if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection = treasureCollection+1;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection = treasureCollection+3;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection = treasureCollection+2;
      
    }else{
      if(swordGroup.isTouching(boy)) {
        swordGroup.destroyEach();
        gameState = END;
    }else if(rubyG.isTouching(boy)){
      rubyG.destroyEach();
      treasureCollection = treasureCollection+4;
    }
  }
    path.velocityY = 4;
     if(path.y > 400 ){
    path.y = height/2;
  }
    
   
  }
  
   if(gameState === END){
       out.visible = true;
      path.velocityY =0; 
    cashG.destroyEach();
     diamondsG.destroyEach();
     jwelleryG.destroyEach();
     swordGroup.destroyEach();
     rubyG.destroyEach();
     
     if(keyDown("space")){
       reset();
  }
    }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,150,30);

}

function createCash() {
  if (World.frameCount % 50 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 80 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 80 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 150 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}

function createruby(){
  if (World.frameCount % 150 == 0) {
  var ruby = createSprite(Math.round(random(50, 350),40, 10, 10));
  ruby.addImage(rubyImg);
  ruby.scale=0.1;
  ruby.velocityY = 4;
  ruby.lifetime = 100;
  rubyG.add(ruby);
  }
}

function reset(){
  gameState =PLAY;
  out.visible = false; 
  treasureCollection = 0;  
}



