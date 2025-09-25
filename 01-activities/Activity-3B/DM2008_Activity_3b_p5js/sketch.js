function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(220);
  myStar(width/2, height/2, 250, 250);
  myStar(mouseX, mouseY, 200, 200);
  
}


function myStar(x,y,w,h){
  noStroke();
  
  fill (255, 200, 0);
  rect(x, y, w , h);
  
  
  fill (255, 250, 0);
  rect(x,y, w -30, h - 30);
  
  
  fill (0, 0, 250);
  rect(x,y, w -150, h - 150);
  
 
  push()
  translate (x - 87, y);
  rotate(QUARTER_PI);
  fill(250, 0,0);
  rect(0,0,50);
  pop()
  
  
  push()
  translate (x,y-87);
  rotate(QUARTER_PI);
  fill(250, 0,0);
  rect (0,0, 50);
  pop ()
  
  push()
  translate(x,y+85);
  rotate(QUARTER_PI);
  fill(250, 0,0);
  rect(0, 0, 50);
  pop ()
  
  push()
  translate (x + 85,y);
  rotate(QUARTER_PI);
  fill(250, 0,0);
  rect(0, 0, 50);
  pop ()
  
  push()
  translate (x+50, y - 50);
  rotate(HALF_PI);
  fill(20, 0, 250);
  rect(0,0, 50);
  pop()
  
  push()
  translate (x+50, y + 50);
  rotate(HALF_PI);
  fill(20, 0, 250);
  rect(0,0, 50);
  pop()
  
  push()
  translate (x-50, y+50);
  rotate(HALF_PI);
  fill(20, 0, 250);
  rect(0,0, 50);
  pop()
  
  push()
  translate (x - 50, y - 50);
  rotate(HALF_PI);
  fill(20, 0, 250);
  rect(0,0, 50);
  pop()
}

// function myStar(x,y,w,h){
//   noStroke();
  
//   push()
//   translate (200, 200);
//   fill (255, 200, 0);
//   rect(0,0, 100, 100);
//   pop(
//   )
//   push()
//   translate (115, 200);
//   rotate(QUARTER_PI);
//   fill(250, 0,0);
//   rect(0,0, 50);
//   pop()
  
  
//   push()
//   translate (200,115);
//   rotate(QUARTER_PI);
//   fill(250, 0,0);
//   rect (0,0, 50);
//   pop ()
  
//   push()
//   translate(200,285);
//   rotate(QUARTER_PI);
//   fill(250, 0,0);
//   rect(0, 0, 50);
//   pop ()
  
//   push()
//   translate (285,200);
//   rotate(QUARTER_PI);
//   fill(250, 0,0);
//   rect(0, 0, 50);
//   pop ()
  
//   push()
//   translate (253, 150);
//   rotate(HALF_PI);
//   fill(20, 0, 250);
//   rect(0,0, 50);
//   pop()
  
//   push()
//   translate (250, 250);
//   rotate(HALF_PI);
//   fill(20, 0, 250);
//   rect(0,0, 50);
//   pop()
  
//   push()
//   translate (150, 250);
//   rotate(HALF_PI);
//   fill(20, 0, 250);
//   rect(0,0, 50);
//   pop()
  
//   push()
//   translate (150, 150);
//   rotate(HALF_PI);
//   fill(20, 0, 250);
//   rect(0,0, 50);
//   pop()
// }


//Part 3
// let palette = ["#f06449", "#009988", "#3c78d8"];

// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(220);

//   // loop through array
//   for (let i = 0; i < palette.length; i++) {
//     drawCircle(i * 100 + 100, height/2, palette[i]);
//   }
// }

// // function uses data from array
// function drawCircle(x, y, col) {
//   fill(col);
//   ellipse(x, y, 60);
// }





// DM2008 — Activity 3b
// (One Function Wonder, 15 min)

// function setup() {
//   createCanvas(400, 400);
//   rectMode(CENTER);
// }

// function draw() {
//   background(220);

  // TODO 1:
  // Define a function that draws something (a shape or group of shapes).
  // It should take at least one parameter (e.g., position, size, or color).

  // TODO 2:
  // Call your function multiple times with different parameter values.
  // myShape(100, 200, 50);
  // myShape(300, 200, 80);

  // TODO 3:
  // (Challenge) Call your function inside a for loop
  // to create a repeating pattern or variation.
//}

// Example starter function:
// function myShape(x, y, s) {
//   ellipse(x, y, s, s);
// }


//example 1
// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(220);
//   myFlower(width/2, height/2, 50, 50);
//   myFlower(mouseX, mouseY, 25, 25);
// }

// function myFlower(x, y, w, h) {
//   noStroke();
//   fill("#795548");
//   ellipse(x, y, w, h);
//   fill("#FFC107");
//   ellipse(x, y - h, w/2, h * 1.5);
//   ellipse(x, y + h, w/2, h * 1.5);
//   ellipse(x - w, y, w * 1.5, h/2);
//   ellipse(x + w, y, w * 1.5, h/2);
// }