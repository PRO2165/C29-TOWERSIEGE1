const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var sling;
var polygon_img;
var polygon;

function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,270,10);
  stand2 = new Stand(700,200,240,10);
  
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //new stand block

  //level one
  block172 = new Block(610,175,30,40);
  block22 = new Block(640,175,30,40);
  block32 = new Block(670,175,30,40);
  block42 = new Block(700,175,30,40);
  block52 = new Block(730,175,30,40);
  block62 = new Block(760,175,30,40);
  block72 = new Block(790,175,30,40);
  //level two
  block82 = new Block(640,135,30,40);
  block92 = new Block(670,135,30,40);
  block102 = new Block(700,135,30,40);
  block112 = new Block(730,135,30,40);
  block122 = new Block(760,135,30,40);
  //level three
  block132 = new Block(670,95,30,40);
  block142 = new Block(700,95,30,40);
  block152 = new Block(730,95,30,40);
  //top
  block162 = new Block(700,35,30,40);

  //polygon holder with string
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  //sling creation
  sling = new slingshot(this.polygon,{x:100, y:200})

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40)

  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

//new stand blocks 
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block172.display();
  block22.display();
  block32.display();
  block42.display();
  block52.display(); 
  block62.display();
  block72.display();
  fill("pink");
  block82.display();
  block92.display();
  block102.display();
  block112.display();
  block122.display();
  fill("turquoise");
  block132.display();
  block142.display();
  block152.display();
  fill("grey");
  block162.display();

  //displaying sling
    sling.display()
}

function mouseDragged() {
  Matter.Body.setPosition(this.polygon,{x:mouseX, y:mouseY})
}

function mouseReleased() {
  sling.fly()
}























