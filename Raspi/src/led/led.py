import time
import RPi.GPIO as GPIO

# Pin-Nummern wie auf dem Raspberry Board verwenden
GPIO.setmode(GPIO.BOARD)

# Pin 11 (GPIO 17) als Output
GPIO.setup(11, GPIO.OUT)

# Dauersschleife für das Blinken
while 1:
    # LED aus
    GPIO.output(11, GPIO.LOW)
    # eine Sekunde warten
    time.sleep(1)
    # LED an
    GPIO.output(11, GPIO.HIGH)
    # eine Sekunde warten
    time.sleep(1)