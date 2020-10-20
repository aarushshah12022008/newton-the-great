
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;

var ball1,ball2,ball3,ball4,ball5;

var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
 
	roof = new Log(400,100,400,20);

	ball1 = new Ball(220,350,30);
	ball2 = new Ball(290,350,30);
	ball3 = new Ball(365,350,30);
	ball4 = new Ball(450,350,30);
	ball5 = new Ball(550,350,30);

	rope1 = new Rope(ball1.body,{x:220,y:100})
	rope2 = new Rope(ball2.body,{x:295,y:100})
	rope3 = new Rope(ball3.body,{x:365,y:100})
	rope4 = new Rope(ball4.body,{x:450,y:100})
	rope5 = new Rope(ball5.body,{x:550,y:100})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
  roof.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function mouseDragged(){

Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})

}

function keyPressed(){
	if(keyCode === UP_ARROW){
	 
	 Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-85,y:185});
   
	 }
   }

