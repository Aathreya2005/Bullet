var bullet,img,wall,thickness;
var speed,weight;

//function preload(){
  //  img=loadImage("image/bullet.jpg");
//}

function setup(){
  createCanvas(775,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,200,30,10);
  bullet.shapeColor="white";
  //bullet=addImage("bullet",img);
  bullet.velocityX=speed;

  wall=createSprite(750,200,thickness,300);
  wall.shapeColor="blue";
}
function draw(){
  background(0);
  if(bullet.collide(wall)){
    bullet.velocityX=0;
    
    var deform=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(deform<10){
      wall.shapeColor=color(0,255,0);
    }
    if(deform>10){
      wall.shapeColor=color(255,0,0);
    }
  }
  drawSprites();
}