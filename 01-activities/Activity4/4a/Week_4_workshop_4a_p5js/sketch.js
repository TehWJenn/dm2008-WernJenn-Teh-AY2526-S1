let cookie;

function setup() {
  createCanvas(400, 400);
  noStroke();
  // make one cookie object
  cookie = new Cookie("choc-chip", 80, width/2, height/2);
  cookie2 = new Cookie("mintchoc-chip", 80, 300,200);
  cookie3 = new Cookie("redcook", 80, 100,200);

}

function draw() {
  background(250);
  cookie.show(); 
  cookie2.show();// call the method on our object
  cookie3.show();
}

// Class definition **
class Cookie {
  constructor(flavor, size, x, y) {
    this.flavor = flavor;
    this.size = size;
    this.x = x; //x and y postiton
    this.y = y;
    this.color = color(196, 146, 96);
    this.color2 = color(200, 255,210);
    this.color3 = color(255, 200,210);
    
  }

  // Method: draw the cookie using its own data
  show() {
    // if (this.flavor == "choc-chip") {
    //   fill(196, 146, 96);
    // } else {
    //   fill(200, 255,210);
    // }
    if (this.flavor == "choc-chip"){
       fill(this.color);
    }
    else if (this.flavor == "mintchoc-chip"){
      fill(this.color2);
    }
    else {
      fill(this.color3);
    }
    
    // fill(this.color);
    
    ellipse(this.x, this.y, this.size);

    // a few "chips" placed relative to size (the dark chip)
    const s = this.size * 0.1;
    fill(60);
    ellipse(this.x - this.size*0.22, this.y - this.size*0.15, s);
    ellipse(this.x + this.size*0.18, this.y - this.size*0.10, s);
    ellipse(this.x - this.size*0.05, this.y + this.size*0.12, s);
    ellipse(this.x + this.size*0.20, this.y + this.size*0.18, s);
  }

  // Steps 5 & 6: Implement additional methods here
  //move(arrow) or move keyss
  move(key){ 
    if (key === 'right') this.x += 10;
    if (key=== 'left') this.x -= 10;
    if (key === 'up') this.y -= 10;
    if (key === 'down') this.y += 10;
  }
  
  changeColor(){
    this.color = color(random(200, 255),random(200, 250),random(0,255));
    this.color2 = color(random(0),random(200,255),random(200,255));
    this.color3= color(random(200, 255),random(0, 100),random(0,255));
  }
}

// Step 5: add movement (keyboard arrows)
function keyPressed() {
  if (keyCode === 68){ // d key
    cookie.move("right");
    cookie2.move("left");
    cookie3.move("left");
  }
  else if (keyCode === 65){ //a key
    cookie.move("left");
    cookie2.move("right");
    cookie3.move("right");
  }
  else if (keyCode === UP_ARROW){
    cookie.move("up");
    cookie2.move("down");
    cookie3.move("down");
  }
    else if (keyCode === DOWN_ARROW){
    cookie.move("down");
    cookie2.move("up");
    cookie3.move("up");
  }
}
 

// Step 6: add flavor randomizer (mouse click)
function mousePressed() {
  cookie.changeColor();
  cookie2.changeColor();
  cookie3.changeColor();
}