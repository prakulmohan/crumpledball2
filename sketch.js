
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin;
var paper;
var ground;

function setup() {
	createCanvas(1600, 700);
     rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,670,width,20);

	dustbin = new Dustbin(1200,650);

	paper = new Paper(200,450,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  dustbin.display();  
  paper.display();
  ground.display();
}
  
function keyPressed(){
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:90,y:-90});
	}


}


