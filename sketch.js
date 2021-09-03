var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);

 
  drawSprites();
  

var select_sprites = Math.round(random(1,2));

if (frameCount % 80 == 0) {
  if (select_sprites == 1){
    function creatApples(){
      apple = createSprite(random(50,350),40,10,10)
      apple.addImage(apple.png);
      apple.velocityY=4
    }
    else {
          function creatLeaves(){
            leaves = createSprite(random(50,350),40,10,10)
            leaves.addImage(orangeLeaves.png)
            leaves.velocityY=-3
                }
              }        
}