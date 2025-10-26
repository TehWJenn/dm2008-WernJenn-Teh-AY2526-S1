let colorBtn, sizeSlider, shapeSelect, opacityBtn, rotateBtn;
let shapeAlpha,shapeRotation;

let r = 255;
let g = 255;
let b = 255;
let angle = 0;

function setup() {
  createCanvas(640, 400);
  noStroke();
  textFont("Helvetica, Arial, sans-serif");
  angleMode(DEGREES);

  // starting color
  shapeColor = color(random(255), random(255), random(255));

  // Button: change color
  colorBtn = createButton("Change Color");
  colorBtn.position(16, 16);
  colorBtn.mousePressed(randomShapeColor);

  opacityBtn = createButton("Opacity");
  opacityBtn.position(150, 16);
  opacityBtn.mousePressed(randomOpacity);
  
  rotateBtn = createButton("Rotate");
  rotateBtn.position(16, 180);
  rotateBtn.mousePressed(rotateShape);

  // Slider: controls size
  createP("Size").position(0, 50).style("margin", "4px 0 0 16px");
  sizeSlider = createSlider(20, 220, 100, 1);
  sizeSlider.position(15, 70);

  // Dropdown: choose shape
  createP("Shape").position(0, 100).style("margin", "8px 0 0 16px");
  shapeSelect = createSelect();
  shapeSelect.position(16, 130);
  shapeSelect.option("ellipse");
  shapeSelect.option("rect");
  shapeSelect.option("triangle");
  
  
  createP("left and right").position(0, 240).style("margin", "4px 0 0 16px");
  WtranslationSlider = createSlider(-200, 200, 50, 1);
  WtranslationSlider.position(15, 257);
  
    
  createP("up and down").position(0, 310).style("margin", "4px 0 0 16px");
  HtranslationSlider = createSlider(-200, 200, 50, 1);
  HtranslationSlider.position(15, 330);

}

function draw() {
  background(240);

  push();
  
  translate(width * 0.65, height * 0.5);
  let W = WtranslationSlider.value();
  let H = HtranslationSlider.value();

  let s = sizeSlider.value();
  

  fill(r,g,b , shapeAlpha);
  
  // draw chosen shape
  let choice = shapeSelect.value();
  if (choice === "ellipse") {
    push();
    rotate(angle);
    ellipse(W, H, s, s);
    pop();
  } else if (choice === "rect") {
    push();
    rotate(angle);
    rectMode(CENTER);
    rect(W, H, s, s);
    pop();
  } else if (choice === "triangle") {
    push();
    rotate(angle);
    translate(W, H);
    triangle(-s * 0.6, s * 0.5, 0, -s * 0.6, s * 0.6, s * 0.5);
    pop();
  }
  pop();
}
function randomShapeColor() {
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);

}

function randomOpacity() {
  shapeAlpha = random(0,255);
  
  console.log(shapeAlpha);
}

function rotateShape() {
   angle += 30; // add 20 degrees each click
  if (angle >= 360) angle = 0;
}
