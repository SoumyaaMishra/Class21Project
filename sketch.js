var wall, bullet;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22,83);
  bullet = createSprite(50,200,50,10);
  wall = createSprite(1200, 200, thickness, height/2);
  bullet.velocityX = speed;
  wall.shapeColor = color(80,80,80);
  bullet.shapeColor = color(255,255,255);
  bullet.velocityX = speed;

}

function draw() {
  background("black");

  
 /* if (bullet.collide(wall) || bullet.collide(wall)){
   bullet.velocityX = 0;
}
  
  if(bullet.isTouching(wall)){
    bullet.velocity = 0
  }
  */
  //if(wall.x-bullet.x <(bullet.width+wall.width/2)){
    if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/ thickness*thickness*thickness;

    

      if(deformation > 10){
        wall.shapeColor = color(255,0,0);
      }

      if(deformation < 10){
        wall.shapeColor = color(230,230,0);
      }
      drawSprites();
  }

 

}

function hasCollided(Lbullet, Lwall){
    bulletRightEdge = Lbullet.x + Lbullet.width;
    wallLeftEdge = Lwall.x;

    if(bulletRightEdge >= wallLeftEdge){
      return true;
    }
    else{
    return false;}

    
  }