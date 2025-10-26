// Activity 8b Type 3: Ultrasonic Sensor
const int ultraPin = A0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  int duration = analogRead(ultraPin);          // 0..1023
  float distanceCM = (duration * 520.0) / 1023.0; // per DFRobot
  // Optional clamp if you like
  if (distanceCM < 2) distanceCM = 2;
  if (distanceCM > 500) distanceCM = 500;

  Serial.print("Distance: ");
  Serial.print(distanceCM, 1);
  Serial.println(" cm");
  delay(100);
}

// // Activity 8b - Type 2: Force Sensor
// void setup() {
//   Serial.begin(9600);
// }

// void loop() {
//   int sensorValue = analogRead(A0);
//   Serial.println(sensorValue);
//   delay(100);
// }


// // Activity 8b - Type 1: Phototransistor Sensor
// const int lightPin = A1;

// void setup() { 
// 	Serial.begin(9600); 
// }

// void loop() {
//     int luxVal = analogRead(lightPin); // 0..1023, higher = brighter
//     Serial.println(luxVal);
//     delay(100);
// }
