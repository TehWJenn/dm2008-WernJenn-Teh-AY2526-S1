// Activity 8a - Type 3 fade control
int ledPin = 9;
int brightness = 0;
int fadeAmount = 5;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  analogWrite(ledPin, brightness); 
  brightness += fadeAmount;

  if (brightness <= 0 || brightness >= 255) {
    fadeAmount = -fadeAmount;
  }

  delay(30);
}




//Activity 8a - Type 2 on/off
// int ledPin = 13;

// void setup() {
//   pinMode(ledPin, OUTPUT);
// }

// void loop() {
//   digitalWrite(ledPin, HIGH);  // LED on
//   delay(500);
//   digitalWrite(ledPin, LOW);   // LED off
//   delay(500);
// }


//Type 4 combination challenge
// One LED blinks (digitalWrite), one LED fades (analogWrite)

// int fadeLED = 9;      // PWM pin for fade control (~)
// int blinkLED = 13;    // Digital pin for on/off blink
// int brightness = 0;   // Current brightness level (0–255)
// int fadeAmount = 5;   // How much to change brightness each frame

// void setup() {
//   // Set pins as outputs
//   pinMode(fadeLED, OUTPUT);
//   pinMode(blinkLED, OUTPUT);
// }

// void loop() {
//   // Blink LED (digitalWrite)
//   digitalWrite(blinkLED, HIGH);  // Turn on
//   delay(100);                    // Wait 100ms
//   digitalWrite(blinkLED, LOW);   // Turn off
//   delay(100);                    // Wait 100ms

//   // Fade LED (analogWrite)
//   analogWrite(fadeLED, brightness);  // Set brightness (0–255)
//   brightness += fadeAmount;          // Increase or decrease brightness

//   // Reverse direction at brightness limits
//   if (brightness <= 0 || brightness >= 255) {
//     fadeAmount = -fadeAmount;
//   }

//   delay(30); // Small pause for smooth fading
// }
