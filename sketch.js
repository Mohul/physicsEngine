const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ball,ground,rock,wall;

function setup(){
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var ball_options={
    restitution:1,
    frictionAir:0.001
  
  }

  ball = Bodies.circle(100,20,10,ball_options);
  World.add(world,ball);

  var gr_options={
    isStatic:true
  }

  ground = Bodies.rectangle(200,380,400,10,gr_options);
  World.add(world,ground);

  var rock_options={
    restitution:0.8,
    frictionAir:0.002
  }

  rock = Bodies.circle(300,20,30,rock_options)
  World.add(world,rock)


  wall = Bodies.rectangle(300,200,200,20,gr_options)
  World.add(world,wall)

  

}

function draw(){
  background("black");
  Engine.update(engine);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);

   rectMode(CENTER);
   rect(ground.position.x,ground.position.y,400,10);

   ellipseMode(RADIUS);
   ellipse(rock.position.x,rock.position.y,30);

   rectMode(CENTER);
   rect(wall.position.x,wall.position.y,200,20);
}