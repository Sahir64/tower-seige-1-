const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function preload()
{
	
}

function setup() {
	createCanvas(1400, 777);


	engine = Engine.create();
	world = engine.world;
  
  

  ground1 = new GROUND(770,650,400,16);
  ground2 = new GROUND(1100,400,250,16);
  Ground = new GROUND(100,757,2580,30);


  box1 = new BOX3(650,549,60,60);
  box2 = new BOX3(710,549,60,60);
  box3 = new BOX3(770,549,60,60);
  box4 = new BOX3(830,549,60,60);
  box5 = new BOX3(890,549,60,60);
  
  box6 = new BOX2(700,423,60,60);
  box7 = new BOX2(760,423,60,60);
  box8 = new BOX2(820,423,60,60);
  
  box9 = new BOX(725,360,60,60);
  box10 = new BOX(785,360,60,60);
  
  box11 = new BOX6(620,612,60,60);
  box12 = new BOX6(680,612,60,60);
  box13 = new BOX6(740,612,60,60);
  box14 = new BOX6(800,612,60,60);
  box15 = new BOX6(860,612,60,60);
  box16 = new BOX6(920,612,60,60);
  
 
  
 
  
  slingshot.display();

  drawSprites();
  
}


function mouseDragged()
{
  Matter.Body.setPosition( { mouseX , mouseY});
}

function mouseReleased()
{
  slingshot.fly();
}