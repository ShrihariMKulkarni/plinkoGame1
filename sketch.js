const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var dv1 , dv2 , dv3 , dv4 , dv5 , dv6 , dv7;

function preload(){

	
}

function setup() {
	createCanvas(480 , 720);
	
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(0,windowHeight,windowWidth,20)
    World.add(world,ground);

	dv1 = new Division(0,windowHeight , 10, 500);
	dv2 = new Division(80,windowHeight , 10, 500);
	dv3 = new Division(160,windowHeight , 10, 500);
	dv4 = new Division(240,windowHeight , 10, 500);
	dv5 = new Division(320,windowHeight , 10, 500);
	dv6 = new Division(400,windowHeight , 10, 500);
	dv7 = new Division(480,windowHeight , 10, 500);

	for(var j = 65; j<=width; j=j+50){
	plinkos.push(new Plinko(j , 75 , 10));

	}
	
	for(var j = 45; j<=width; j=j+50){
	plinkos.push(new Plinko(j , 175 , 10));
			
	}
	
	for(var j = 65; j<=width; j=j+50){
	plinkos.push(new Plinko(j , 275 , 10));
				
	}
	
	for(var j = 45; j<=width; j=j+50){
	plinkos.push(new Plinko(j , 375 , 10));
					
	}	

	Engine.run(engine);

}


function draw() {
  ellipseMode(CENTER);
  background("black");

  for(var i = 0; i < plinkos.length; i++){
plinkos[i].display();

  }

  if(frameCount%60 === 0){
	particles.push(new Particle(random(width/2-10 , width/2+10) , 10, 10))
	  }	

  for(var k = 0; k < particles.length; k++){
	particles[k].display();
	
	  }

	  console.log(particles);



  ground.display();
  dv1.display(); 
  dv2.display(); 
  dv3.display(); 
  dv4.display(); 
  dv5.display(); 
  dv6.display(); 
  dv7.display(); 	

 
}
