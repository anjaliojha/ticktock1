var hr;
var min; 
var sec;


function setup() {
  createCanvas(800,400);
    
 
}

function draw() {
  background(255,255,255); 

  hr = hour();
  sec = second();
  min = minute();

  drawSprites();


  translate(400,200);
  angleMode(DEGREES);
  scAngle = map(sec,0,60,0,360);
  hrAngle = map(hr,0,60,0,360);
  minAngle = map(min,0,30,0,360);


  push();
  rotate(scAngle)
  strokeWeight(10);
  stroke("red");
  fill("red");
  line(0,0,100,0);
  pop();

  push();
  rotate(hrAngle)
  strokeWeight(10);
  stroke("blue");
  fill("blue");
  line(0,0,70,0);
  pop();

  
  push();
  rotate(minAngle)
  strokeWeight(10);
  stroke("green");
  fill("green");
  line(0,0,85,0);
  pop();
  

  
}