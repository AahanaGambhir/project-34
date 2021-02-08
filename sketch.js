const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImage, monster1, monster2;

function preload() {
//preload the images here
backgroundImage = loadImage("images/GamingBackground.png");
monster1 = loadImage("images/Monster-01.png")
monster2 = loadImage("images/Monster-02.png")


}

function setup() {
  createCanvas(1300, 500);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
  ground = new Ground(600, 490 , 1300, 20);
  hero = new Hero(400, 200, 200)
  fly = new Fly(hero.body, {x:400, y:200})
}

function draw() {
  background(backgroundImage);
  ground.display();
  hero.display();
  fly.display();
}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY})
}