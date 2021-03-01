const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var restartImage;
var gameoverImage;
var restart;
var basket ;
var score = 0;
var engine;
var world;
var backgroundimg;
var ball1Image,ball2Image,ball3Image,ball4Image,ball5Image,ball6Image;
var basket1,basket2,basket3,basket4,basket5,basket6;
var gameover,






  function preload(){
  ball1Image = loadImage("basketball.png");
  ball2Image = loadImage("bowling.png");
  ball3Image = loadImage("soccer.png");
  ball4Image = loadImage("sportball.png");
  ball5Image = loadImage("tennis-ball.png");
  ball6Image = loadImage("ball.png");

  backgroundimg = loadImage("sprite_0.png");

  basket1Image = loadImage("basket.png");
  basket2Image = loadImage("basket.png");
  basket3Image = loadImage("basket.png");
  basket4Image = loadImage("basket.png");
  basket5Image = loadImage("basket.png");
  basket6Image = loadImage("basket.png");
  restartImage = loadImage("restart.png");
  gameoverImage = loadImage("gameover.png");




}





function setup() {
  engine = Engine.create();
    world = engine.world;
    
  createCanvas(800,400);
background = createSprite(600,300);
background.addImage ("background",backgroundimg)
gameover = createSprite(400,200,50,50);
gameover.addImage("");
gameover.visible = false;

restart = createSprite(400,350,50,50);
restart.addImage("");
restart.visible = false;

}

function draw() {
  background(255,255,255); 
 // var scene = createSprite(200,200,400,400);
 // b//ackgroundimg.setbackgroundimg("Imported piskel.gif");
  //bac//kgroundimg.scale=2;
 // backgroundimg.velocityX=-2;
 // backgroundimg.x=scene.width/2;
  text("BasketsandBalls",600,600);
  text("score",500,500);
  
 // ball1.display() ;
  drawSprites();
}


function spawningballs (){
  if(frameCount%60===0){
    var ball = createSprite(500,480,20,20);
    var rand = Math.round(random(1,6));
    switch(rand){
      case 1 : ball.addImage(ball1Image);
      break ;
      case 2 : ball.addImage(ball2Image);
      break ;
      case 3 : ball.addImage(ball3Image);
      break
        case 4 : ball.addImage(ball4Image);
      break 
       case 5: ball.addImage(ball5Image);
      break ;
      case 6 : ball.addImage(ball6image);
      break ;
      
  }

  ball.velocityY = 5;

}
}


if ( count>= 5) {
  gameState ="end";
  textSize(100);
  text("GameOver", 150, 250);
}

for (var i = 0; i < plinkos.length; i++) {
   plinkos[i].display();  
}

for (var i = 0; i < particles.length; i++) {
   particles[i].display();
    
   if (particles[i].body.position.x < 300 && particles[i].body.position.y>760) {
    score=score+500;
    particles.pop();
   }
  else if (particles[i].body.position.x < 600 && particles[i].body.position.x > 301 && particles[i].body.position.y > 760) {
    score = score + 100;
    particles.pop();
  }
  else if (particles[i].body.position.x < 900 && particles[i].body.position.x > 601 && particles[i].body.position.y > 760) {
    score = score + 200;
    particles.pop();
  }
 }

 for (var k = 0; k < divisions.length; k++) {
   divisions[k].display();
 }


function mousePressed(){
if(gameState!=="end"){
    count++;
   particles.push(new Particle(mouseX, 10, 10, 10)); 
}   
}

var BallsGroup = createGroup();


function spawningballs() {
  
}
 