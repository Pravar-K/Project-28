
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var mango;
function preload()
{
	boy = loadImage("boy.png");
	mago=loadImage("mango.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

boy = new Image("boy");

mango=new Mango(20,20,20,20);
mango2=new Mango(20,20,40,20);
mango3=new Mango(20,20,60,20);
mango4=new Mango(20,20,80,20);
mango5=new Mango(20,20,100,20);
mango6=new Mango(20,20,120,20);
mango7=new Mango(20,20,140,20);

tree=new Tree(40,40,90,50);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



