# PiGRRL

## Inhaltsverzeichnis

## Intro
Jeder kennt kennt  Ihn, nur wenige wissen wie er funkioniert - der Gameboy.
Mit dem Projekt PiGRRL wollte ich dieser Frage auf den Grund gehen und mir selber einen Gameboy machen.
Als Basis dient hierzu das Raspberry PI 3.

## Stückliste
Folgende Komponenten werden für das PiGRRL benötgt. 

- 10 Tastical Buttons
- 2 Backbuttos
- 1 Adafruite Charger Chip
- 1 Litium Ionen Akku
- 1 PiTFT 2.6 Zoll Bildschirm
- 1 GPIO Kabel
- 32 GB Micro SD Karte

![](res/teile.jpg?raw=true)

Der Teilekauf kann wenn man nicht auf das All in One Kit verwendet, 
ziemlich viel Zeit verschenden diversen Teilen nachzujagen.
Mir passierte es ausserdem, dass ich falsche Teile kaufte.

### Seiten zum Teile-Kauf:
- https://de.aliexpress.com/  eignet sich nicht wenn man schnell Teile braucht.
- https://www.pi-shop.ch/  hat sehr viel Raspberry PI spetzifische Hardware, wie zum Beispiel der Bildschirm.
- http://www.play-zone.ch/ vor allem elektronische Bauteile. Lieferzeit in der Schweiz beträgt etwa 3 Tage
- http://www.conrad.ch/ Extrem grosses Angebot und teuer.


## Systemkonfiguration
Die Installation von [Retropi](https://retropie.org.uk/download/) lief ohne weitere Probleme ab. 

### Bespielung auf Karte
Um Retropi auf die SD Karte zu spielen wurde [Etcher](https://etcher.io/) verwendet. 
Die Software eignet sich besonders gut dafür.

### Installation Bildschirmtreiber
Adafruit bietet ein eigenes Kernelmodul für Retropi an. 
Mit diesem kann der Bildschirm und dessen Buttons einfach betrieben werden.
Die Installation ist hierbei sehr einfach. Man folgt lediglich der
[PiTFT](https://learn.adafruit.com/running-opengl-based-games-and-emulators-on-adafruit-pitft-displays/pitft-setup)
Anleitung von Adafruit.

#### Probleme
Es sollte beim PiGRRL unbedingt darauf geschaut werden, dass der richtige Bildschirm verwendet wird. 
Ich hatte zuerst den Bildschirm PiTFT 3.5 verwendet. 
Dieser scheint jedoch nach reichlichen Recherchen in diversen Foren nicht mit dem RetroPi kompatibel zu sein.

## Schaltung
### Plan
Der Schaltplan beinhaltet alle Pininterfaces und zu welchen diese verlinkt werden müssen.
Weitere Details wie zum Beispiel den Beleuchtungsdruck können findet man [hier](res/PiGrrl.PDF).

![](res/schaltplan.png?raw=true)

### Protyp
Zuvor wurde ein noch einen Prototyp auf eine Steckplatine gesetzt und anschliessend an das Raspberry Pi geschalten.
![](res/plain_plate.jpeg?raw=true)

### Pin Besetzung
![](res/gpios.png?raw=true)

Die Knöpfe wurden folgenden GPIO's zugewiesen.

Funktion | Pin | GPIO
--- | --- | ---
LEFT|Pin 7 |GPIO 4
UP|Pin 36|GPIO 16
RIGHT|Pin 35|GPIO 19
DOWN|Pin 37|GPIO 26
SELECT|Pin 29|GPIO 5
START|Pin 31|GPIO 6
A|Pin 8|GPIO 14
B|Pin 10|GPIO 15
X|Pin 38|GPIO 20
Y|Pin 12|GPIO 18
L|Pin 32|GPIO 12
R|Pin 33|GPIO 13


Im Prototyp wurden die einzelnen Kabel mit einem GPIO Kabel verbunden.
Auf den Einsatz des Akkus wurde in diesem Teil noch verzichtet.

![](res/prototyp.jpg?raw=true)
## Printplatte
Ein wichtiger Punkt des Projekts war es den Entstehungsprozess einer Printplatte nachvollziehen zu können.
Der Prozess besteht aus mehreren Schritten hier dokumentiert sind.

### Layouting
Der Schaltplan sowie das Layout der Platine wurde mit Alzium gemacht.

### Ätzen
Nach dem Layouten mit Alzium konnte die Platine geätzt werden

![](res/leiterplatte.jpeg?raw=true)

### Anschluss


![](res/zusammenbau.jpg?raw=true)

## Inbetriebnahme
Nun kann man per USB diverse ROMS auf den Gameboy laden
## Schlusswort
# Quellen
[GPIO Bild](http://pi4j.com/pins/model-3b-rev1.html)
