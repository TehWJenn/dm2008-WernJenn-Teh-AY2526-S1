// let port; // Serial Communication port
// let connectBtn;
// let sensorVal;


let plantSize = 10;
let plantY = 590;
let soilY = 600;
let soilHeight = 200;
let angle = 0;
let watercan;
let lightSlider, fBtn, feedBtn, waterSound, sparkleSound;
let sparkles = []; // Array to hold falling sparkles
let showSparkles = false;
let closing = false;
// let isOn = true;

let Fly = []; // array to hold many objects
const NUM_START = 0; // you can tweak this

let bendTarget = 0;
let bendCurrent = 0;
let maxBend = 400;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // port = createSerial(); // creates the Serial Port

  // Connection helpers
  // connectBtn = createButton("Connect to Arduino");
  // connectBtn.position(20, 20);
  // connectBtn.mousePressed(connectBtnClick);

  angleMode(DEGREES);
  // fertilizer = loadImage("f.png");

  //load water sound
  waterSound = loadSound("watering.mp3");
  //load sparkle sound
  sparkleSound = loadSound("sparkle.mp3");

  // Load and prepare watering can GIF
  watercan = loadImage("Water.gif");
  watercan.resize(150, 150); // Resize once
  imageMode(CENTER); // Set mode once

  // Create slider for light/brightness
  let slidertext = createP("Lighting");
  slidertext.position(90, 70);
  slidertext.style("margin", "4px 0 0 16px");
  slidertext.style("color", "#FFFAC8");

  lightSlider = createSlider(50, 255, 210, 1); // min, max, start, step
  lightSlider.position(100, 100);
  lightSlider.style("accent-color", "#FFD700");

  // Button:fertilizer
  feedBtn = createButton("feed fly");
  feedBtn.position(80, 250);
  feedBtn.style("margin", "4px 0 0 16px");
  feedBtn.style("color", "#FFFAC8"); // Text color
  feedBtn.style("background", "#AECA5F"); // Remove background
  feedBtn.style("border", "none");
  feedBtn.style("font-size", "16px"); // Optional: change font size
  feedBtn.mousePressed(feed);

  // icon: fertilizer
  fBtn = createImg("f.png");
  fBtn.position(90, 150);
  fBtn.size(80, 80);
  fBtn.mousePressed(fertilizer);
}

function draw() {

  // Receive data from Arduino
  // if (port.opened()) {
  //   sensorVal = port.readUntil("\n");
  //   // Only log data that has information, not empty signals
  //   if (sensorVal[0]) {
  //     // Once you verify data is coming in,
  //     // disable logging to improve performance
  //     console.log(sensorVal);

      // OPTION 1:
      // Update circle's size with sensor's data directly
      // Reduce delay() value in Ardiuno to get smoother changes

      // use float() to convert from data from string to number
      // circleSize = float(sensorVal);

      // OPTION 2:
      // Update circle's size using lerp() to smoothly change values
      // This method even works with longer delay() values in Arduino

      // targetSize = float(sensorVal);
      // last value in lerp() controls speed of change
      // circleSize = lerp(circleSize, targetSize, 0.1);
  //   }
  // }


  // Get current slider value
  let lightVal = lightSlider.value();

  // Background brightness
  let bgR, bgG, bgB;

  if (lightVal < 255) {
    // Shades of blue for low to almost max
    bgR = map(lightVal, 40, 200, 0, 135); // from dark blue to sky blue
    bgG = map(lightVal, 20, 200, 0, 206);
    bgB = map(lightVal, 60, 200, 70, 250);
  } else {
    // Maximum slider = yellow
    bgR = 255;
    bgG = 229;
    bgB = 122;
  }

  background(bgR, bgG, bgB);

  //TEXT press to water
  fill("#FFFAC8"); // text color
  textSize(15); // font size
  text("click here below to water the plant!", 1000, 50); // (text, x, y)
  textFont("margin");
  
  //TEXT press to water
  fill("#FFFAC8"); // text color
  textSize(15); // font size
  text("Drag the stem left and right!", 1000, 500); // (text, x, y)
  textFont("margin");


if (mouseIsPressed && mouseX > width/2 && mouseY < 300   ){
      image(watercan, mouseX, mouseY);

}
   
  // Bending the plant through pull
  if (mouseIsPressed && mouseY > 300) {
    // map mouseX → left/right bend. center => 0, extremes => ±maxBend
    bendTarget = map(mouseX, 0, width, -maxBend, maxBend);
  } else {
    // when not pressed, target is straight (0)
    bendTarget = 0;
  }

  stem(); // Draw stem

  // Move to top of stem for plant
  push();
  translate(700, plantY - 10);
  scale(plantSize / 100);

  // Plant color depends on slider (brighter with higher slider)
  let plantGreen = map(lightVal, 10, 255, 20, 250); // map to green intensity
  fill(100, plantGreen, 100);
  noStroke();

  // Animate open/close motion
  let openAngle = 30 + sin(angle) * 60;
  angle += closing ? -1 : 3;
  if (angle > 180 || angle < 0) closing = !closing;

  // Draw top and bottom lobes
  plant(openAngle);
  plant(-openAngle);
  pop();

  // Draw soil last
  drawSandSoil(soilY, soilHeight);


 
  // Grow flower when mouse pressed
  if (mouseIsPressed && mouseX > width/2 && mouseY < 300  ) {
    if (plantY > 270) plantY -= 0.7;
    if (plantSize < 125) plantSize += 0.3;
  }

  // --- Sparkles ---
  if (showSparkles) {
    // Add sparkles continuously while active
    for (let i = 0; i < 1; i++) {
      sparkles.push(new Sparkle(random(width * 0.4, width * 0.6), -10));
    }
  }

  // Update and display sparkles
  for (let i = sparkles.length - 1; i >= 0; i--) {
    sparkles[i].update();
    sparkles[i].show();
    if (sparkles[i].isDead()) {
      sparkles.splice(i, 1);
    }
  }


  // feed fly
   for (let i = 0; i < Fly.length; i++) {
    Fly[i].update(); // change over time
    Fly[i].show(); // draw
  }

    for (let i = Fly.length - 1; i >= 0; i--) {
    if (Fly[i].life <= 0) {
      Fly.splice(i, 1);
    }
  }



}

function plant(a) {
  
  push();
  rotate(a);

  // Lobe shape (green body) color already set by fill() in draw()
  beginShape();
  for (let i = 0; i <= 180; i += 5) {
    let r = 100 + sin(i * 1) * 5;
    let x = cos(i) * r;
    let y = sin(i) * r;
    vertex(x, y);
  }
  endShape();

  // Teeth along edge
  // stroke(255);
  // strokeWeight(1);
  // for (let i = 0; i <= 180; i += 15) {
  //   let r = 100;
  //   let x = cos(i) * r;
  //   let y = sin(i) * r;
  //   let tx = cos(i) * (r + 10);
  //   let ty = sin(i) * (r + 10);
  //   line(x, y, tx, ty);
  // }
  //Teeh inside
  stroke(255);
  strokeWeight(1);

  let radius = 100; // Semicircle radius
  let teethCount = 15; // Number of teeth
  let toothLength = 10; // Length of each tooth

  for (let j = 0; j <= teethCount; j++) {
    let x;
    if (j <= teethCount / 2) {
      // Left half, map from -radius to 0 (center)
      x = map(j, 0, teethCount / 2, -radius, 0);
    } else {
      // Right half, map from 0 to radius (center)
      x = map(j, teethCount / 2, teethCount, 0, radius);
    }

    let y = 0; // Flat edge y-coordinate
    line(x, y, x, y - toothLength);
  }
  pop();
  
  //Using AI help for the atan cal
 
  
//   push();
//   translate(x1, y1);
//   rotate(headAngle);

//   plant(openAngle);
//   plant(-openAngle);
//   pop();
}

function stem() {
//Plant stem no bend
  // stroke("#38761d");
  // strokeWeight(10);
  // line(700, 600, 700, plantY);

//Plant stem bend (using AI for help IN)
   // Stem endpoints
  let x0 = 700;
  let y0 = 600;
  let x1 = 700;
  let y1 = plantY;

  // Smooth the bend (easing)
  bendCurrent = lerp(bendCurrent, bendTarget, 0.12);

  // Control point for bending
  let cx = (x0 + x1) / 2 + bendCurrent;
  let cy = (y0 + y1) / 2;
  
  // Draw guide: endpoints and control point
  stroke(200);
  strokeWeight(1);
  line(x0, y0, cx, cy);
  line(cx, cy, x1, y1);
  ellipse(cx, cy, 8); // control point indicator


  // Draw curved stem
  stroke("#38761d");
  strokeWeight(10);
  noFill();
  beginShape();
  vertex(x0, y0);
  quadraticVertex(cx, cy, x1, y1);
  endShape();
  

  
}

// 🌾 Soil drawing
function drawSandSoil(yStart, height) {
  noStroke();
  fill(112, 78, 37);
  rect(0, yStart, windowWidth, windowHeight);

  // Grainy texture
  for (let i = 0; i < 500; i++) {
    fill(random(90, 130), random(60, 90), random(30, 50), 150);
    ellipse(random(width), random(yStart, yStart + height), random(2, 5));
  }

  // Highlights
  for (let i = 0; i < 150; i++) {
    fill(random(180, 220), random(140, 170), random(90, 120), 100);
    ellipse(random(width), random(yStart, yStart + height), random(1, 3));
  }
}
// Sparkle class (emoji)
class Sparkle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = random(2, 5);
    this.alpha = 255;
    this.size = random(16, 32);
  }

  update() {
    this.y += this.speed;
    this.alpha -= 1;
  }

  show() {
    textSize(this.size);
    fill(255, 255, 200, this.alpha);
    text("✨", this.x, this.y);
  }

  isDead() {
    return this.alpha <= 0 || this.y > height;
  }
}

// Trigger fertilizer
function fertilizer() {
  showSparkles = true;
  // Stop sparkles after 2 seconds
  setTimeout(() => (showSparkles = false), 1000);
}

//Feeding function using 
function feed(){
  let sz = random(16, 40);
  let speedX = 0;
  let speedY = 2;
  Fly.push(new flies(width / 2, 5, sz, speedX, speedY));
}

class flies {
  constructor(x, y, sz, speedX, speedY) {
    // Required properties
    this.x = x;
    this.y = y;
    this.sz = sz;

    // Motion
    this.dx = speedX;
    this.dy = speedY;

    // Style (customize!)
    this.h = random(360);
    this.a = 200;

    // Lifespan (optional)
    this.life = 200; // use this if you want fade/shrink/remove behavior
  }
  update() {
    // Basic movement
    this.x += this.dx;
    this.y += this.dy;

    if (this.y >= plantY - 20 && this.y <= plantY + 20) {
      this.sz = 0;
    
    }
  }

// draw fly 
  show() {
   
    push();
    noStroke();
    fill(229, 243, 253);
    translate(this.x+20, this.y-10);
    rotate(70);
    ellipseMode(CENTER);
    ellipse(0, 0, this.sz-7, this.sz+10);
    pop();

    push();
    noStroke();
    fill(229, 243, 253);
    translate(this.x-15, this.y-10);
    rotate(320);
    ellipseMode(CENTER);
    ellipse(0, 0,this.sz-7, this.sz+15);
    pop();
    
    fill(70);
    ellipse(this.x, this.y, this.sz);

   
  }
}


// DO NOT REMOVE THIS FUNCTION
// function connectBtnClick(e) {
//   // If port is not already open, open on click,
//   // otherwise close the port
//   if (!port.opened()) {
//     port.open(9600); // opens port with Baud Rate of 9600
//     e.target.innerHTML = "Disconnect Arduino";
//     e.target.classList.add("connected");
//   } else {
//     port.close();
//     e.target.innerHTML = "Connect to Arduino";
//     e.target.classList.remove("connected");
//   }
// }
// function mousePressed() {
//   // Watering area
//   if (!waterPlaying && mouseX > width/2) {
//     waterSound.play();
//     waterPlaying = true;
//   }
//   // Fertilizer/sparkle area
//   if (!sparklePlaying && mouseX < width/2 && mouseY > 90 && mouseY < 150) {
//     sparkleSound.play();
//     sparklePlaying = true;
//   }
// }

// function mouseReleased() {
//   // Stop watering sound when releasing
//   if (waterPlaying) {
//     waterSound.pause();
//     waterPlaying = false;
//   }

//   // Stop sparkle sound if needed
//   if (sparklePlaying) {
//     // sparkleSound.pause(); // optional if you want it to stop immediately
//     sparklePlaying = false;
//   }
// }

function mousePressed(){
    // Draw the watering can GIF if mouse pressed
    if (!soundPlayed && mouseX > width/2 && mouseY < 300 ) {
      waterSound.play();
      soundPlayed = true;
    }
    else if (!soundPlayed && mouseX < 190 && mouseY > 130 && mouseY < 220 ){
    sparkleSound.play();
    setVolume(0.3);
    soundPlayed = true;
    }
  }
     


function mouseReleased(){
    waterSound.pause();
    soundPlayed = false;     
}