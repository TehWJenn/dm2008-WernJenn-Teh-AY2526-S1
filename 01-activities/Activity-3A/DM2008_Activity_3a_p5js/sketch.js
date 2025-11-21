let palette = ["#f06449", "#009988", "#3c78d8", "#ffeb3b"];
let time = (10, 40, 60);
let currentNumber = 0;
let col = "#f06449";
let posit = (0, 100, 300, 500);

function setup() {
  createCanvas(400, 420);
  noStroke();
  picked = random(palette);
}

function draw() {
  background(220);
  for (let j = 0; j < 50; j++) {
    for (let i = 0; i < 50; i++) {
      fill(col);
      ellipse(i * 30, j * 30, 30);
    }
  }

  if (keyIsPressed) {
    switch (key) {
      case "1":
        background(250);
        fill(picked);
        ellipse(width / 2, height / 2, 200);
        break;
      case "c":
        for (let j = 0; j < 50; j++) {
          for (let i = 0; i < 50; i++) {
            for (let a = currentNumber; a < palette.length; a++) {
              fill(palette[a]); // use the i-th color
            }
            ellipse(i * 30, j * 30, 30);
          }
        }

        break;
      default:
        background(220);
        for (let j = 0; j < 50; j++) {
          for (let i = 0; i < 50; i++) {
            fill(random (palette));
            ellipse(i * 30, j * 30, 30);
          }
        }
    }
  }
}

function mousePressed() {
    background(220);
    for (let j = 0; j < 50; j++) {
    for (let i = 0; i < 50; i++) {
      fill(random (palette));
      ellipse(i * 30, j * 30, 30);
    }
    }
}

  // function mousePressed (){
  //   if (windowWidth < 200) {
  //     currentNumber++;
  //   if (currentNumber >= palette.length) {
  //     //random colour
  //     fill(palette);
  //     currentNumber = 0;
  //   }
  //   }
  // }

  // console.log("Current index:", currentNumber, "→", palette[currentNumber]);


//Trail 2
// let palette = ["#f06449", "#009988", "#3c78d8", "#ffeb3b"];

// let currentNumber = 0;
// let col = "#f06449";

// function setup() {
//   createCanvas(400, 420);
//   noStroke();
// }

// function draw() {
//   background(220);

//   fill(col);

//   for (let i=0; i<50; i++){

//     ellipse(i*30, 0, 30);
//     ellipse(i*30, 30, 30);
//     ellipse(i*30, 60, 30);
//     ellipse(i*30, 90, 30);
//     ellipse(i*30, 120, 30);
//     ellipse(i*30, 150, 30);
//     ellipse(i*30, 180, 30);
//     ellipse(i*30, 210, 30);
//     ellipse(i*30, 240, 30);
//     ellipse(i*30, 270, 30);
//     ellipse(i*30, 300, 30);
//     ellipse(i*30, 330, 30);
//     ellipse(i*30, 360, 30);
//     ellipse(i*30, 390, 30);
//     ellipse(i*30, 420, 30);
//     }
// }
// function keyPressed() {
//   currentNumber++;
//   if (currentNumber >= palette.length) {
//     //random colour
//     fill(palette);
//     currentNumber = 0;
//   }

//   console.log("Current index:", currentNumber, "→", palette[currentNumber]);
// }

//TRAIL 1
// let palette = ["#f06449", "#009988", "#3c78d8", "#ffeb3b"];

// let currentNumber = 0;
// let col = "#f06449";

// function setup() {
//   createCanvas(400, 420);
//   noStroke();
// }

// function draw() {
//   background(220);

//   fill(col);

//   for (let i=0; i<500; i++){

//     ellipse(i*30, 0, 30);
//     ellipse(i*30, 30, 30);
//     ellipse(i*30, 60, 30);
//     ellipse(i*30, 90, 30);
//     ellipse(i*30, 120, 30);
//     ellipse(i*30, 150, 30);
//     ellipse(i*30, 180, 30);
//     ellipse(i*30, 210, 30);
//     ellipse(i*30, 240, 30);
//     ellipse(i*30, 270, 30);
//     ellipse(i*30, 300, 30);
//     ellipse(i*30, 330, 30);
//     ellipse(i*30, 360, 30);
//     ellipse(i*30, 390, 30);
//     ellipse(i*30, 420, 30);
//     }
// }
// function keyPressed() {
//   // currentNumber++;
//   // if (currentNumber >= palette.length) {
//   //   //random colour
//   //   currentNumber = 0;
//   // }
//   col = random(palette);
//   console.log("Current index:", currentNumber, "→", palette[currentNumber]);
// }

//BASE CODE
// // DM2008 — Activity 3a
// // (Array Sampler, 25 min)

// // 1. Create an array of colors (or other values)
// //    You can make more than one array if you'd like
// let palette = ["#f06449", "#009988", "#3c78d8", "#ffeb3b"];

// // 2. A variable to track the current index
// let currentIndex = 0;

// function setup() {
//   createCanvas(400, 400);
//   noStroke();
// }

// function draw() {
//   background(220);

//   // 3. Use the array value at currentIndex
//   fill(palette[currentIndex]);
//   ellipse(width/2, height/2, 200);
// }

// // 4. Change the index when a key is pressed
// function keyPressed() {
//   // Advance to the next item
//   currentIndex++;
//   // Reset to 0 when we reach the end
//   if (currentIndex >= palette.length) {
//     currentIndex = 0;
//   }
//   // Log in the console to check
//   console.log("Current index:", currentIndex, "→", palette[currentIndex]);
// }

/* 
TODOs for students:
1. Replace colors with your own data (positions, text, sizes, etc).
2. Try mousePressed() instead of keyPressed().
3. Use push() to add new items, or splice() to remove them, then check how the sketch adapts.
4. Try looping through an array to visualize all the items within it instead of accessing one item at a time.
*/

//EXAMPLE
// // Create a new array with some colors
// let palette = ["#f06449", "#009988", "#3c78d8"];

// function setup() {
//   createCanvas(400, 400);
//   noStroke();
// }

// function draw() {
//   background(225);

//   // Even spacing based on how many items are in the array
//   const spacing = width / (palette.length + 1);
//   // Draw one circle for each palette color
//   for (let i = 0; i < palette.length; i++) {
//     fill(palette[i]);                   // use the i-th color
//     const x = (i + 1) * spacing;        // position from the loop index
//     ellipse(x, height / 2, 60);
//   }
// }

// // Try changing the array while the loop keeps adapting
// function keyPressed() {
//   if (key == 'a' || key == 'A') {
//     // Add a new random color to the end
//     palette.push(color(random(255), random(255), random(255)));
//   }
//   if (key == 'r' || key == 'R' ) {
//     // Remove the last color (if any)
//     if (palette.length > 0) {
//       palette.splice(palette.length - 1, 1);
//     }
//   }
// }
