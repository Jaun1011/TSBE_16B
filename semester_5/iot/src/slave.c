char str[4];

void setup() {
  Serial.begin(9600);
}

// slave 
void loop(){
  int i = 0;
  
  if (Serial.available()) {
    delay(100); //allows all serial sent to be received together
    while(Serial.available() && i < 5) {
      str[i++] = Serial.read();
      Serial.print("Value" + Serial.read());
    }
    str[i++] = '\0';
  }
}

