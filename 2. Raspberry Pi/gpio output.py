import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setup(2, GPIO.OUT)

GPIO.output(2, True)
print("gpio push")
time.sleep(1)
GPIO.output(2, False)
print("gpio end")
GPIO.cleanup()
