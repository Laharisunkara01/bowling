const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,ballImg
var pin1,pin2,pin3,pin4;
var pin6,pin7, pin8,pin9;
var pin10,pin11;
var slingshot;
var bkg,bg
var stand
var backgroundImg;
var gameState="onSling"
var score=0;

function preload(){
  ballImg=loadImage("sprites/ball.png");
    getTime();
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

 
 
  
  
  ball = Bodies.circle(50,200,30);
  World.add(world,ball);

  pin1=new Pin(400,200,20,20)
  pin2=new Pin(390,200,20,20)
  pin3=new Pin(410,200,20,20)
  pin4=new Pin(380,200,20,20)
  pin5=new Pin(420,200,20,20)
  pin6=new Pin(370,200,20,20)
  pin7=new Pin(430,200,20,20)
  pin8=new Pin(360,200,20,20)
  pin9=new Pin(440,200,20,20)
  pin10=new Pin(350,200,20,20)
  pin11=new Pin(450,200,20,20)
  
  //pin.addImage("sprites/pin.png")

  ground = new Ground(700,200,800,400);
  stand = new Stand(400,230,270,10);
  


  slingshot= new Slingshot(this.ball,{x:50,y:200});
}

function draw() {
  if(backgroundImg)
 background(backgroundImg);  


  

  pin1.display();
  pin2.display();
  pin3.display();
  pin4.display();
  pin5.display();
  pin6.display();
  pin7.display();
  pin8.display();
  pin9.display();
  pin10.display();
  pin11.display();
  


 


  fill("brown")
  ground.display();
  fill("white")
  stand.display();

  

  pin1.score();
  pin2.score();
  pin3.score();
  pin4.score();
  pin5.score();
  pin6.score();
  pin7.score();
  pin8.score();
  pin9.score();
  pin10.score();
  pin11.score();

  textSize(25)
  fill("white")  
  text("SCORE:"+score,width-300,50)

  

  imageMode(CENTER) 
  image(ballImg,ball.position.x,ball.position.y,50,50)

   
  slingshot.display();

  drawSprites();
}


function mouseDragged(){
  if(gameState==="onSling"){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

}
function mouseReleased(){
  gameState="launch"
  slingshot.fly();
}
function keyPressed(){
  if (keyCode===32){
    gameState="onSling"
   slingshot.attach(this.ball)
   Matter.Body.setPosition(this.ball,{x:50,y:200})
  }
}
async function getTime(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJson=await response.json()
  var dateTime=responseJson.datetime
  var hour=dateTime.slice(11,13)
  console.log(hour)

  if(hour>=06 && hour<=19){
      bg="sprites/bkg.png"
  }else {
   bg="sprites/bkg2.png"
  }
backgroundImg=loadImage(bg)
}
