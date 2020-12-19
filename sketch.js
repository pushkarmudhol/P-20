var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600, 400);
  
  car=carteSprite(50,200,50,50);
  car.velocity.X = speed;
  car.shapeColor=color(255);

  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=color(80,80,80);

}

function draw() {
  background("pink");  

  if(wall.x-car.x < (car.width+wall.weight)/2){
    car.velocityX=0;
    var deormation =0.5 * weight * speed*speed/22509
    
      if(deormation>108){
      car.shapeColor=color(255,0,0);

      if(deormation<108 && deormation>108){
      car.shapeColor=color(230,230,0);

      if(deormation<100){
      car.shapeColor=color(0,255,0);
     
    }
  }

  drawSprites();
}