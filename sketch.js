var starImg,bgImg;
var star, starBody;
var fairy ,fairyImg ;
var engine,world,bodies;
var fairy2,fairy2Img;
var fairy3,fairy3Img;
var starworld,starsun;
var starworldImg,starsumImg;
var joy,joyVoice;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
  fairyImg=loadAnimation("images/fairyImage1.png","images/fairyImage2.png");

starworldImg=loadImage("images/	starImage.png");
starsunImg=loadImage("images/starryNight.jpg");
joyVoice=loadSound("sound/joyMusic.mp3");



}

function setup() {
	createCanvas(800,750);

fairy=createSprite(100,400)
fairy.addAnimation("fairyFly",fairyImg)
fairy.scale=0.25;

	star = createSprite(650,100);
	star.addImage(starImg);
	star.scale = 0.2;




	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  

  drawSprites();

}

function keyPressed() {


	if(keyCode===LEFT_ARROW){
		fairy.x=fairy.x-10
	}
	if(keyCode===RIGHT_ARROW){
		fairy.x=fairy.x+10
	}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}	

}
function starPosition(){

if(star.y>470 && starBody.position.y > 470 ){
Matter.Body.setStatic(starBody,true);

}
}






