var car,wall,speed,weight,deformation,rating;

function setup() {
  createCanvas(1600,400);
  car=createSprite(100,200,50,50);
  
  wall=createSprite(1500,200,    10, height/2);
  speed=random(55,90);
  car.velocityX=speed;
  weight=random(400,1500);
}

function draw() {
  background(0);  
  if (wall.x-car.x<wall.width/2+car.width/2){
    car.velocityX=0;
    deformation= (0.5*weight*speed*speed)/22500;
    if (deformation<100){
      car.shapeColor="green";
      rating="A-";
    }
    if(deformation>=100&&deformation<180){
      car.shapeColor="yellow";
      rating="B+";
    }
   if(deformation >180){
      car.shapeColor="red";
      rating="D-";
    }
  }
  drawSprites();
}