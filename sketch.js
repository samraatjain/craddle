
var paper,log;
var slingShot;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paperDiameter = "80";

	//Create the Bodies Here.
	paper1 = new Paper(100,100,30);
	paper2 = new Paper(95,100,30);
	paper3 = new Paper(90,100,30);
	paper4 = new Paper(85,100,30);
	paper5 = new Paper(80,100,30);
	

	log = new Log(400,300,400,20);

	rope1 = new SlingShot(paper1.body,log.body,-paperDiameter*2,10,70);
	rope2 = new SlingShot(paper1.body,log.body,-paperDiameter*2,10,60);
	rope3 = new SlingShot(paper1.body,log.body,-paperDiameter*2,10,50);
	rope4 = new SlingShot(paper1.body,log.body,-paperDiameter*2,10,40);
	rope5 = new SlingShot(paper1.body,log.body,-paperDiameter*2,10,30);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  paper2.display();
  paper3.display();
  paper4.display();
  paper5.display();

  log.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}



