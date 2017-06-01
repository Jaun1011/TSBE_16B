import time
import RPi.GPIO as GPIO
import re


def main()
	GPIO.setmode(GPIO.BOARD)
	GPIO.setup(11, GPIO.OUT)
	while 1:
	    # LED aus
	    if loadTemparature() <= 23:
	    	GPIO.output(11, GPIO.HIGH)
	   	else
	   		GPIO.output(11, GPIO.LOW)
	    time.sleep(1)

def loadTemparature():
	value = readFile('/sys/bus/w1/devices/10-000802cfb15d/w1_slave')
	m = re.search('(?t=).*', value)
	return float(m);

def readFile(fileName):
	f = open(fileName, 'r');

	return f.read()
main()

#/sys/bus/w1/devices/10-000802cfb15d/w1_slave
# 33 00 4b 46 ff ff 02 10 f4 : crc=f4 YES
# 33 00 4b 46 ff ff 02 10 f4 t=21612