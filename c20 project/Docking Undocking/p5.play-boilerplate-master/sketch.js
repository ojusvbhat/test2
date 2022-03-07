var bg ;
var sleep;
var brush;
var gym;
var eat;
var drink;
var move;
var astronaut;

function preload(){
bg = loadImage("Images/Images/iss.png");
sleep = loadAnimation("Images/Images/sleep.png");
brush = loadAnimation("Images/Images/brush.png");
gym = loadAnimation("Images/Images/gym11.png","Images/Images/gym12");
eat = loadAnimation("Image/Images/eat1.png","Images/Images/eat2.png");
drink = loadAnimation("Images/Images/drink1.png","Images/Images/drink2.png");
move = loadAnimation("Images/Images/move.png","Images/Images/move1.png");
}

function setup() {
createCanvas(800,400);
astronaut = createSprite(300, 230,);
astronaut.addAnimation("sleeping",sleep);
astronaut.scale=0.1;

text("Instructions:",30,40);
text("Up Arrow =  Brush",30,45);
text("Down Arrow = Gym",30,50);
text("Right Arrow = Bath",30,55);
text("Left Arrow = Eat",30,60);
text("m = move",30,65);

createEdgeSprites();
astronaut.bounceOff(edges);
}

function draw() {
background(bg);  
 
if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing");
  astronaut.y = 350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
 }

if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
    }

    if(keyDown("RIGHT_ARROW")){
      astronaut.addAnimation("eating",eat);
      astronaut.changeAnimation("eating");
      astronaut.y = 350;
      astronaut.velocityX=0;
      astronaut.velocityY=0;
      }
    
      if(keyDown("m")){
        astronaut.addAnimation("moving",move);
        astronaut.changeAnimation("moving");
        astronaut.y = 350;
        astronaut.velocityX=-2;;
        astronaut.velocityY=-4;
        }
drawSprites();
}