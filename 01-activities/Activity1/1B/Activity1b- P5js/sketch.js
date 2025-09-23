// DM2008
// Activity 1b (Georg Nees)

let x;
let y;
let w;
let angle = 0;


function setup() {
  createCanvas(800, 800)
  background(240);
  
  angleMode(DEGREES);
  
}

function draw() {
  background(240,30);
  
  x = random(width);
  y = random(height);
  w = random(10, 80);
  
  
  stroke(random(250,255),random(0,255),random(0,255));
  strokeWeight(random(0.5, 300));
  noFill();
  rect(x, y, w, w);
  
  push();
  translate(mouseX,mouseY);
  noFill();
  stroke(random(0,255),random(0,255),random(250,255));
  strokeWeight(random (2,40));
  rotate(angle);
  rectMode(CENTER);
  rect(0,0,random(0,500), random(0,500));
  pop();
  
  angle = angle +1
  
}


  

function keyPressed(){
  saveCanvas("activity1b-image", "jpg");
}