
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1;

function setup() {
  createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;
  
  diameter = 40;
  posx = width/2;
  posy = height/4+200; 
  roof= new Roof(width/2, height/4, width/7, 20);
  bob1 = new Bob(posx-diameter*2, posy, diameter/2);
  bob2 = new Bob(posx-diameter, posy, diameter/2);
  bob3 = new Bob(posx, posy, diameter/2);
  bob4 = new Bob(posx+diameter, posy, diameter/2);
  bob5 = new Bob(posx+diameter*2, posy, diameter/2);

  rope1 = new Rope(bob1.body,roof.body,-diameter*2, 0);
  rope2 = new Rope(bob2.body,roof.body,-diameter, 0);
  rope3 = new Rope(bob3.body,roof.body,0, 0);
  rope4 = new Rope(bob4.body,roof.body,+diameter, 0);
  rope5 = new Rope(bob5.body,roof.body,+diameter*2, 0);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(255, 234, 111);
  Engine.update(engine);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  if(keyDown(UP_ARROW)){
    Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-50, y:-45})
  }
  drawSprites();
}



