var bullet,wall,thickness;
var speed,weight;



function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 20);
  

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  speed=random(55,90);
  weight=random(400,1500);

  bullet.velocityX=speed;

  wall=createSprite(1200,200,thickness,height/2);
  
}

function draw() {
  background(255,255,255);  

  bullet.collide(wall);

  if(hasCollided(bullet,wall)){
    bullet.velocityX-0;
    var damage=0.5*weight * speed * speed/(thickness *thickness *thickness);

    if(damage>10){
      wall.shapeColor=(255,0,0);
    }
    
    if(damage<10){
      wall.shapeColor=(0,255,0);
    }
  }

  drawSprites();
}

var bulletRightEdge,wallLeftEdge;



function hasCollided(lbullet,lwall){
  bulletRightEdge-lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}
























