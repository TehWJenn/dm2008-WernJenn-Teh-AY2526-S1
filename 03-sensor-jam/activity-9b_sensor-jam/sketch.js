let port; // Serial Communication port
let connectBtn;

let sensorVal, circleSize;
let ellipseX;
let ellipseCol = '#7351daff';

function setup() {
  createCanvas(windowWidth, windowHeight);

  port = createSerial(); // creates the Serial Port

  // Connection helpers
  connectBtn = createButton("Connect to Arduino");
  connectBtn.position(20, 20);
  connectBtn.mousePressed(connectBtnClick);
}

function draw() {
  background(0, 50);

  for (let j = 0; j < 50; j++) {
    for (let i = 0; i < 50; i++) {
      fill(ellipseCol);
      ellipseX = ellipse(i * 30, j * 30, circleSize);
    }
  }

  // Receive data from Arduino
  if (port.opened()) {
    sensorVal = port.readUntil("\n");
    // Only log data that has information, not empty signals
    if (sensorVal[0]) {
      // console.log(sensorVal);
      // Update circle's size with sensor's data
      // Reduce delay() value in Ardiuno to get smoother changes
      circleSize = sensorVal;
      ellipseX = map(sensorVal, 2, 500, 200, width);
      // ellipseCol = map(sensorVal, 2, 100,);



    }
  }

    // fill(ellipseCol,0,0);
    // noStroke();
    // ellipse(ellipseX, height / 2, circleSize);
    
  }


// DO NOT REMOVE THIS FUNCTION
function connectBtnClick(e) {
  // If port is not already open, open on click,
  // otherwise close the port
  if (!port.opened()) {
    port.open(9600); // opens port with Baud Rate of 9600
    e.target.innerHTML = "Disconnect Arduino";
    e.target.classList.add("connected");
  } else {
    port.close();
    e.target.innerHTML = "Connect to Arduino";
    e.target.classList.remove("connected");
  }
}
