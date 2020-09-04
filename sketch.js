const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,side1,side2,side3,ground;
function preload()
{
	
}

function setup() {
	createCanvas(1350, 655);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(250,500,50);
	side1 = new Bin(1150,585,150,130);
	ground = new Ground (630,655,1500,15);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ball.display();
  side1.display();
  ground.display();
  drawSprites();
 
}
function keyPressed() {
	if(keyCode===UP_ARROW){
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:503,y:-473});
	} }


