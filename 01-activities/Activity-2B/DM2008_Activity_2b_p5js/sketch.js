// DM2008 — Activity 2b
// (Pattern Making, 40 min)

const spacing = 30;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250);
  

      
  
//   s = map(mouseX, 0, width, 2, 200)
  
// //   // Horizontal row of shapes
//   for (let i = 0; i < width; i += 50) {
    
// //     ellipse (30, 30, 30)
    
    
//     // Alternate colors using % (modulo)
//     if (i % 100 == 0) {
//       fill(i%40,i,0, 50);   // black
//       ellipse(i + 2, height/2, i+ 80);
//     } else {
//       fill(i%10,i%500, i%200); // gray
//       rect(i, height/2, 50);
//     }

//   }
  
    
    
  }
    if (i == 50) {
      fill(i%40,i,0, 50);   // black
      ellipse(i + 20, height/2, i+ 80);
    } else {
      fill(i%10,i%500, i%200); // gray
      rect(i + 1, height/2, i + 80, 8);
    }

  } 
   


// shape stretches
//        if (i % 100 == 0) {
//       fill(i%40,i);   // black
//       ellipse(i + 20, height/2, 90, mouseX);
//     } else {
//       fill(i%10,i%500, i%200); // gray
//       rect(i, height/2, 90, mouseY);
//     }

// }
       

  
    // TODO: change ellipse to rect, triangle, or something else
    // TODO: try varying size instead of color
    
  // TODO: add one interaction (mouse or key) to change the rule
  // Example: if (mouseIsPressed) { fill(255, 0, 0); }
}