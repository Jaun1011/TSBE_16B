# Internet of Things

Im Modul IOT wird mit Arduino Steuerungen erstellt.
Arduino kann mit einer abstraierten Version von C programmiert werden.

## Tag 1
### Auftrag
Der Auftrag von heute war, diverse Leds mit dem Arduino anzusteuern. 
In einem zweiten Lauf soll noch ein Lichtsensor angeschlossen werden.

### Bauteile
- Arduino
- 3 Leds
- 1 Lichtsensor

### Resultat
#### HW

#### Code
Der Code zum Auftrag findet man [hier](src/led_temp_driver.c)

Speziell ist diese Zeile. Mit der Methode analogRead kann ein analoger Wert vom analogen Interface geholt werden.

``` java
int  voltage = analogRead(sensorPin);
```



## Tag 2
### Auftrag
Heute sollte mit dem Arduino ein Heizregler nachgebaut werden.
Dazu muss ein Temparatursensor angeschlossen werden.
### Bauteile
- Arduino Uno
- Relais
- Temparatursensor
- 2 Leds

### Resultat

Das Relais war bei mir leider bereits in der Verpackung defekt. Hierbei wurde längere Zeit nach dem Problem gesucht.
Da kein Relais mehr vorhanden war, wurde das Relais durch Logik ersetzt.
Dank Lars Bättig konnte der Aufbau mit dem Relais ebenfalls noch getestet werden.


## Tag 3
### Auftrag
Heute sollte ein Arduino Uno mit einem Arduino Nano angesteuert werden.
Der Auftrag war, dass über das Arduino Uno mit einem Sensor, Werte ausliest
### Bauteile

- Arduino Uno
- Arduino Nano
- 1 Led

### Resultat

Um das Arduino Nano mit dem Arduino Uno anzusteuern, muss der rx tx Port verwendet werden.
Hierbei muss darauf geachtet werden, dass die Verbingung übers Kreuz gemacht wird.

Anschliessend wurden das Arduino Uno [Master](src/master.c) und das Arduino Nano [Slave](src/slave.c) programmiert.

Danach versuchte ich noch eine Datenübertragung per Funk zum laufen zu bekommen.
