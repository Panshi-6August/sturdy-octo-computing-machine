const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

var Pig1,Pig2;

var S1,S2,S3,S4;
var bird;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

  

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    Pig1=new Pick(810,350)
    S1= new Stick(810,260,300,PI/2)

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    Pig2=new Pick(810,220)
    S2= new Stick(810,180,300,PI/2)
    box5 = new Box(810,160,70,70);
    S3= new Stick(760,120,150,PI/7)
    S4= new Stick(870,120,150,PI/7)
    bird = new Bird(70,100)
    ground = new Ground(600,385,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    Pig1.display();
    S1.display();
    Pig2.display();
    S2.display();
    S3.display();
    S4.display();
    bird.display();
    


}