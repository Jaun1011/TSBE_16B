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

![](pic/teile.jpg?raw=true)

## Systemkonfiguration
Die Installation von [Retropi](https://retropie.org.uk/download/) lief ohne weitere Probleme ab. 

### Bespielung auf Karte
Um Retropi auf die SD Karte zu spielen wurde [Etcher](https://etcher.io/) verwendet. 
Die Software eignet sich besonders gut dafür.




## Schaltplan
### Layouting
Der Schaltplan sowie das Layout der Platine wurde mit Alzium gemacht.
### Protyp
Zuvor wurde ein noch einen Prototyp auf eine Steckplatine gesetzt und anschliessend an das Raspberry Pi geschalten.
![](pic/plain_plate.jpeg?raw=true)




### Pin Besetzung
![](pic/gpios.png?raw=true)

Die Knöpfe wurden folgenden GPIO's zugewiesen.

Funktion | Pin | GPIO
--- | --- | ---
LEFT|Pin 7 |GPIO 4
UP|Pin 36|GPIO 16
RIGHT|Pin 35|GPIO 19
DOWN|Pin 37|GPIO 26
 |  |  
SELECT|Pin 29|GPIO 5
START|Pin 31|GPIO 6
 |  |  
A|Pin 8|GPIO 14
B|Pin 10|GPIO 15
X|Pin 38|GPIO 20
Y|Pin 12|GPIO 18
 |  |  
L|Pin 32|GPIO 12
R|Pin 33|GPIO 13


Im Prototyp wurden die einzelnen Kabel mit eine ein GPIO Kabel verbunden.

![](pic/prototyp.jpg?raw=true)



## Ätzen
Nach dem Layouten mit Alzium konnte die Platine geàzt weren

![](pic/leiterplatte.jpeg?raw=true)
![](pic/leiterplatte.jpeg?raw=true)

### Anschluss

## Inbetriebnahme
## Schlusswort
# Quellen
[GPIO Bild](http://pi4j.com/pins/model-3b-rev1.html)
