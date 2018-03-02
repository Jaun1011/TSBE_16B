

const int sensorPin = A0;    // select the input pin for the potentiometer
const int LED_BLUE = 7;

const int LED_YELLOW_1 = 4;
const int LED_YELLOW_2 = 5;
const int LED_YELLOW_3 = 6;

void setup() {
  Serial.begin(9600);
  pinMode(LED_BLUE, OUTPUT);
  
  pinMode(LED_YELLOW_1, OUTPUT);
  pinMode(LED_YELLOW_2, OUTPUT);
  pinMode(LED_YELLOW_3, OUTPUT);

  testLED(LED_BLUE);
  
  testLED(LED_YELLOW_1);
  testLED(LED_YELLOW_2);
  testLED(LED_YELLOW_3);
}



void testLED(int pin){
    digitalWrite(pin, HIGH);
    delay(300);
    digitalWrite(pin, LOW);
}

void regulateLED(int pin ,int voltage, int threshold){
  if(voltage > threshold){
    digitalWrite(pin, HIGH);
  }else{
    digitalWrite(pin, LOW);  
  }
}

void loop() {
  int voltage = analogRead(sensorPin);
  
  regulateLED(LED_YELLOW_1, voltage, 530);
  regulateLED(LED_YELLOW_2, voltage, 540);
  regulateLED(LED_YELLOW_3, voltage, 550);  
  
  Serial.println(voltage);
}


