// DM2008 — Mini Project
// PONG (Starter Scaffold)

// Notes for students:
// 1) Add paddle controls (W/S and ↑/↓) inside handleInput()
// 2) Add scoring + reset when the ball goes past a paddle
// 3) Add win conditions / start + game-over states if you want

/* ----------------- Globals ----------------- */
let leftPaddle, rightPaddle, ball;
let clicksLeft = 0;
let clicksRight = 0;
let bgmusic;
let winmuisc;
let wallbounce;

function preload() {
  bgmusic = loadSound("Assets/bgmusic.mp3");
  winmusic = loadSound("Assets/win.mp3");
  wallbounce = loadSound("Assets/wallbounce.mp3");
}
/* ----------------- Setup & Draw ----------------- */
function setup() {
  createCanvas(640, 360);
  noStroke();
  bgmusic.loop();
  bgmusic.setVolume(0.1);

  // paddles: x, y, w, h
  leftPaddle = new Paddle(30, height / 2 - 30, 10, 60);
  rightPaddle = new Paddle(width - 40, height / 2 - 30, 10, 60);

  // ball starts center with a gentle push
  ball = new Ball(width / 2, height / 2, 8);

  // create the reset button
  resetButton = createButton("Restart");
  resetButton.position(width - 100, 10); // top-right corner
  resetButton.style("font-size", "16px");
  resetButton.style("background-color", "rgba(255, 255, 255, 0.5)"); // white with 30% opacity
  resetButton.style("color", "#000"); // text color (black)
  resetButton.style("border", "none"); // remove default border
  resetButton.mousePressed(resetGame); // call resetGame() when clicked
}

function draw() {
  background(18);

  //left
  textSize(40);
  textAlign(CENTER, CENTER);
  text(clicksLeft, width / 4, height / 7);

  //right
  textSize(40);
  textAlign(CENTER, CENTER);
  text(clicksRight, (width * 3) / 4, height / 7);

  // 1) read input (students: add paddle movement here)

  handleInput();

  // 2) update world
  leftPaddle.update();
  rightPaddle.update();
  ball.update();

  // 3) handle collisions
  ball.checkWallBounce(); // top/bottom
  ball.checkPaddleBounce(leftPaddle);
  ball.checkPaddleBounce(rightPaddle);

  // 4) draw everything
  drawCourt();
  leftPaddle.show();
  rightPaddle.show();
  ball.show();
}

/* ----------------- Input ----------------- */
function handleInput() {
  // TODO (students): move paddles
  if (keyIsPressed) {
    if (keyCode === 87) {
      //w
      leftPaddle.vy = -6;
    }
    if (keyCode === 83) {
      //s
      leftPaddle.vy = 6;
    }
    if (keyCode === 38) {
      //up arrow
      rightPaddle.vy = -6;
    }
    if (keyCode === 40) {
      // down arrow
      rightPaddle.vy = 6;
    }
  }
  // - W/S to move leftPaddle up/down
  // - UP/DOWN to move rightPaddle up/down
  //
  // Hints:
  // leftPaddle.vy = -5 or 5; rightPaddle.vy = -5 or 5;
  // Make sure to stop paddles when keys are released (see keyReleased)
}

function keyReleased() {
  // Stop paddles when keys are released (students: fill this once handleInput is added)
  leftPaddle.vy = 0;
  rightPaddle.vy = 0;
}

function createRandomPaddles() {
  leftPaddle = new Paddle(30, height / 2 - 30, random(3, 30), random(40, 90));
  rightPaddle = new Paddle( width - 40,height / 2 - 30, random(3, 30), random(40, 90));
}

function resetGame() {
  // reset scores
  clicksLeft = 0;
  clicksRight = 0;

  // randomize paddles again
  createRandomPaddles();

  // reset ball to center
  ball.reset();
}
/* ----------------- Classes ----------------- */
class Paddle {
  constructor(x, y, w, h) {
    this.pos = createVector(x, y);
    this.w = w;
    this.h = h;
    this.vy = 0;
    this.speed = 6;
  }

  update() {
    // basic vertical movement; constrained to canvas
    this.pos.y += this.vy;
    this.pos.y = constrain(this.pos.y, 0, height - this.h);
  }

  show() {
    fill(220);
    rect(this.pos.x, this.pos.y, this.w, this.h, 2);
  }
}

class Ball {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.r = r;
    // gentle random direction
    this.vel = createVector(0, 0);
    this.vel.x = random([-1, 1]) * 3.5;
    this.vel.y = random([-1, 1]) * 2.0;
  }

  update() {
    this.pos.add(this.vel);
  }

  checkWallBounce() {
    // bounce off top/bottom
    if (this.pos.y - this.r <= 0 || this.pos.y + this.r >= height) {
      this.vel.y *= -1;
      this.pos.y = constrain(this.pos.y, this.r, height - this.r);
      wallbounce.play();
      wallbounce.setVolume(0.3);
    }

    // TODO (students): detect when ball passes left or right edge.
    // Increase a score counter and reset ball to center with a new direction.
    if (this.pos.x + this.r < 0) {
      winmusic.play();
      winmusic.setVolume(0.1);
      clicksRight += 1;
      this.pos.x = width / 2;
      this.pos.y = height / 2;
      this.vel.x = random([-1, 1]) * 3.5;
      this.vel.y = random([-1, 1]) * 2.0;
    }

    if (this.pos.x - this.r > width) {
      winmusic.play();
      winmusic.setVolume(0.1);
      clicksLeft += 1;
      this.pos.x = width / 2;
      this.pos.y = height / 2;
      this.vel.x = random([-1, 1]) * 3.5;
      this.vel.y = random([-1, 1]) * 2.0;
    }
  }

  checkPaddleBounce(p) {
    // AABB-then-circle quick check (simple & forgiving)
    const withinY = this.pos.y > p.pos.y && this.pos.y < p.pos.y + p.h;
    const withinX =
      this.pos.x + this.r > p.pos.x && this.pos.x - this.r < p.pos.x + p.w;

    if (withinX && withinY) {
      // push ball out so it doesn't get stuck
      if (this.vel.x < 0) {
        this.pos.x = p.pos.x + p.w + this.r;
      } else {
        this.pos.x = p.pos.x - this.r;
      }
      this.vel.x *= -1; // reflect horizontally
      wallbounce.play(0, 1, 2, 0, 0.2);

      this.vel.mult(1.1); // speed increases as it bounce
    }
  }

  show() {
    fill(255, 170, 70);
    circle(this.pos.x, this.pos.y, this.r * 2);
  }

  reset() {
    // students: call this after a point is scored
    this.pos.set(width / 2, height / 2);
    this.vel.set(random([-1, 1]) * 3.5, random([-1, 1]) * 2.0);
  }
}

/* ----------------- UI helpers ----------------- */
function drawCourt() {
  // center line
  stroke(80);
  strokeWeight(2);
  for (let y = 10; y < height; y += 18) {
    line(width / 2, y, width / 2, y + 8);
  }
  noStroke();
}
