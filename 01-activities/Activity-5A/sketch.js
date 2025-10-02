// DM2008 – Activity 5a
// Colliding Circles (30 min)
let isOn = false;
let balls = [];

function setup() {
  createCanvas(400, 400);

  // Step 1: create two Ball objects
  balls.push(new Ball(200, 200));
  balls.push(new Ball(200, 200));
  balls.push(new Ball(200, 200));
  balls.push(new Ball(200, 200));
  balls.push(new Ball(200, 200));
  balls.push(new Ball(200, 200));
  balls.push(new Ball(200, 200));
  balls.push(new Ball(200, 200));
  balls.push(new Ball(200, 200));
}

function draw() {
  background(0, 100);

  // Step 2: update and display each ball
  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];
    balls[i].move();
    balls[i].show();
    
  // Step 3: check collisions
  // Use dist() between ball centers
    balls[i].checkCollision(balls);
  // Trigger feedback (color, bounce, etc.)   	
  
  if (isOn) {
    fill(30, 250,50);
  }else{
    fill(250, 40 ,520);
    } 

}
}

class Ball {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.r = random(1,50);
    this.vel = createVector(random(-2, 2), random(2,4));
  }

  move() {
    this.pos.add(this.vel);
    
    // TODO: wrap around OR bounce off edges
    if (this.pos.x + this.r < 0 || this.pos.x + this.r> width  ) {this.vel.x *= -1;}
    if (this.pos.y + this.r< 0 || this.pos.y + this.r> height) {this.vel.y *= -1;}
    
  }

  show() {
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }

  // Step 4: Add a method to checkCollision(others)
  // Use dist() and respond visually
  checkCollision(others){
    for (let i = 0; i < others.length; i++) {
      // Make sure we do not compare the ball to itself
     if (others[i] !== this) {
        let other = others[i];
        let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
        if (d < this.r + other.r) {
          push();
          // stroke(random(250), random(250), random(250));
          stroke(100,40,250,80);
          strokeWeight(random(2, 50));
          // fill (random (250), random (250), random (250));
          ellipse(this.pos.x, this.pos.y, this.r*2); // highlight on collision
          pop();  
         }
      }
      }
  }
}

function keyPressed() {
  isOn = !isOn; // toggle true/false   
}