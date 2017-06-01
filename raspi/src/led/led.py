import time
import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BOARD)
GPIO.setup(11, GPIO.OUT)
while 1:
    # LED aus



    GPIO.output(11, GPIO.LOW)
    # eine Sekunde warten
    time.sleep(1)
    # LED an
    GPIO.output(11, GPIO.HIGH)
    # eine Sekunde warten
    time.sleep(1)