var tower1,tower;
var door1,door,door2;
var climber,climber1,climber2;
var ghost1,ghost;
var END=1
var PLAY=0
var gameState=PLAY;
 var castle;

function preload(){
 tower1=loadImage('tower.png') 
  door2=loadImage('door.png')
  climber2=loadImage('climber.png')
  ghost1=loadAnimation('ghost-standing.png','ghost-jumping.png')
  castle=loadSound('spooky.wav')
}


function setup(){
createCanvas(600,600)
  door=new Group() 
  climber=new Group()
  tower=createSprite(300,300,15,15)
  tower.addImage('play',tower1)
  tower.velocityY=3
  ghost=createSprite(300,450,15,15)
  ghost.addAnimation('play',ghost1)
  ghost.scale=0.35
}


function draw(){
    
  background(255)
  //castle.play()
 if(gameState===PLAY){
   doors()
  
      if(climber.isTouching(ghost)){
  ghost.velocityY=0
}
  if(tower.y>600){
    tower.y=100
  }
  if(keyDown('space')){
    ghost.velocityY=-3
  }
  if(keyDown('left')){
    ghost.x=ghost.x-4
  }
  if(keyDown('right')){
    ghost.x=ghost.x+4
  }

  ghost.velocityY=ghost.velocityY+0.3    
  drawSprites()
  
  if(ghost.y>610){
 gameState=END
    ghost.destroy()
}
}
  if(gameState==END){
    background(0)
    fill('white')
    textSize(40)
    text('You Lose!!!,try Again ',100,300)
  }
}
function doors(){
  if((frameCount%100===0)){
    door1=createSprite(200,0,15,15)
    door1.addImage('play',door2)
    door1.velocityY=3
    door1.x=random(120,400)
    climber1=createSprite(door1.x,door1.y+60,15,15)
    climber1.velocityY=3
    climber1.addImage('play',climber2)
    door.add(door1)
    climber.add(climber1)
    climber1.lifetime=200
    door1.lifetime=240
    ghost.depth=door1.depth
  ghost.depth++
 

  }

}