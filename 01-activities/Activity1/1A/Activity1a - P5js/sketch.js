function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(175, 216, 250);
 
   //red shirt
  fill(245, 54, 102);
  ellipse(250, 415, 170, 190);
  
   
  //left hand
   push();
  translate (158,400)
  rotate(40);
  fill(250);
  ellipse(0, 0, 50, 100);
  pop();
  
    
  //left hand
  push();
  translate (330,400)
  rotate(130);
  fill(250);
  ellipse(0, 0, 50, 100);
  pop();
  
  
  
  //left sleves
  push();
  translate (182, 330)
  rotate(40);
  rect(0,0,60, 90);
  pop();
  
  //right sleves
  push();
  translate (373,400)
  rotate(138);
  rect(0,0,60, 90);
  pop();
  
  //white belly
  fill(250);
  ellipse(250, 460, 170, 100);
  
  push()
  translate (200,485);
  rotate(160);
  ellipse(0, 0, 65, 100);
  pop()
  
  push()
  translate (300, 485);
  rotate(20);
  ellipse(0, 0, 65, 100);
  pop()
  
 
 
  
  
  fill(250);
  noStroke();
  ellipse(500 / 2, 500 / 2, 200);
  ellipse(500 / 2, 300, 200, 100);

  // left ear
  push();
  fill(40);
  rotate(10);
  ellipse(210, 75, 44, 125);
  pop();

  // right ear
  push();
  translate (380,170)
  fill(40);
  rotate(58);
  ellipse(0,0, 43, 110);
  pop();

  //left eye
  fill(40);
  ellipse(208, 280, 15, 23);
  //right eye
  fill(40);
  ellipse(292, 280, 15, 23);
  
  //nose
  fill(40);
  ellipse(250, 300, 23, 15);
  
 
}
