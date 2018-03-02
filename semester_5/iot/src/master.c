

const int TEMP_SENS = A0;



void setup() {
  Serial.begin(9600);
}


boolean regulateLED(int voltage, int threshold){
  if(voltage > threshold){
    return true;
  }
  return false;
}


// slave 
void loop(){
  int voltage = analogRead(TEMP_SENS);
  Serial.write(regulateLED(voltage, 490))
  delay(100);
}

