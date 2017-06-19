# PiGRRL
![](res/cartridge.png?raw=true)
## Inhaltsverzeichnis

- [Intro](#t1)
- [Stückliste](#t2)
    - [Seiten zum Teile-Kauf](#t2-1)
- [Systemkonfiguration](#t3)
    - [Bespielung auf Karte](#t3-1)
    - [Installation Bildschirmtreiber](#t3-2)
- [Schaltung](#t4)
    - [Plan](#t4-1)
    - [Protyp](#t4-2)
    - [Pin Besetzung](#t4-3)
- [Printplatte](#t5)
    - [Layouting](#t5-1)
    - [Ätzen](#t5-2)
    - [Zusammenbau](#t5-3)
- [Schlusswort](#t6)
    - [Lesson lerned](#t6-1)
    - [Fazit](#t6-2)
- [Quellen](#t7)

## <a name="t1">Intro
Jeder kennt Ihn, nur wenige wissen wie er funktioniert - der Gameboy.
Mit dem Projekt PiGRRL wollte ich dieser Frage auf den Grund gehen und mir selber einen Gameboy machen.
Als Basis dient hierzu das Raspberry PI 3.

## <a name="t2">Stückliste
Folgende Komponenten werden für das PiGRRL benötigt. 

- 10 Tastical Buttons
- 2 Backbuttos
- 1 Adafruite Charger Chip
- 1 Litium Ionen Akku
- 1 PiTFT 2.6 Zoll Bildschirm
- 1 GPIO Kabel
- 32 GB Micro SD Karte

![](res/teile.jpg?raw=true)

Der Teilekauf kann, wenn man nicht auf das All in One Kit verwendet, 
ziemlich viel Zeit verschwenden diversen Teilen nachzujagen.
Mir passierte es ausserdem, dass ich falsche Teile kaufte.

### <a name="t2-1">Seiten zum Teile-Kauf
URL | Anmerkung
---|---
https://de.aliexpress.com/ | eignet sich nicht, wenn man schnell Teile braucht.
https://www.pi-shop.ch/ | hat sehr viel Raspberry PI spezifische Hardware, wie zum Beispiel der Bildschirm.
http://www.play-zone.ch/ | vor allem elektronische Bauteile. Lieferzeit in der Schweiz beträgt etwa 3 Tage
http://www.conrad.ch/ | Extrem grosses Angebot und teuer.


## <a name="t3">Systemkonfiguration
Die Installation von [Retro-Pi](https://retropie.org.uk/download/) lief ohne weitere Probleme ab. 

### <a name="t3-1">Bespielung auf Karte
Um Retro-Pi auf die SD Karte zu spielen wurde [Etcher](https://etcher.io/) verwendet. 
Die Software eignet sich besonders gut dafür.

### <a name="t3-2">Installation Bildschirmtreiber
Adafruit bietet ein eigenes Kernelmodul für Retro-Pi an. 
Mit diesem kann der Bildschirm und dessen Buttons einfach betrieben werden.
Die Installation ist hierbei sehr einfach. Man folgt lediglich der
[PiTFT](https://learn.adafruit.com/running-opengl-based-games-and-emulators-on-adafruit-pitft-displays/pitft-setup)
Anleitung von Adafruit.

#### <a name="t3-2-1">Probleme
Es sollte beim PiGRRL unbedingt darauf geschaut werden, dass der richtige Bildschirm verwendet wird. 
Ich hatte zuerst den Bildschirm PiTFT 3.5 verwendet. 
Dieser scheint jedoch nach reichlichen Recherchen in diversen Foren nicht mit dem RetroPi kompatibel zu sein.

## <a name="t4">Schaltung
### <a name="t4-1">Plan
Der Schaltplan beinhaltet alle Pin-Interfaces und zu welchen diese verlinkt werden müssen.
Weitere Details wie zum Beispiel den Beleuchtungsdruck können findet man [hier](res/PiGrrl.PDF).

![](res/schaltplan.png?raw=true)

### <a name="t4-2">Protyp
Zuvor wurde ein noch einen Prototyp auf eine Steckplatine gesetzt und anschliessend an das Raspberry Pi geschalten.
![](res/plain_plate.jpeg?raw=true)

### <a name="t4-3">Pin Besetzung
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
## <a name="t5">Printplatte
Ein wichtiger Punkt des Projekts war es den Entstehungsprozess einer Printplatte nachvollziehen zu können.
Der Prozess besteht aus mehreren Schritten hier dokumentiert sind.
Einen sehr grossen Dank schulde ich für diesen Arbeitsschritt einem Mitstudenten, 
welcher mit der Materie des Printplatten ätzen bestens vertraut ist. 

Ohne Ihn wäre dieser Arbeitsschritt nicht mal ansatzweise möglich gewesen, weil das Fachwissen wie auch das Werkzeug gefehlt hat.

Für alle welche nicht Zugriff auf dies haben empfiehlt sich, eine fertige [Platte](https://www.adafruit.com/product/3015)
zu kaufen.

### <a name="t5-1">Layouting
Das grobe Layout wurde mit Alzium aus dem vorherigen Schaltplan generiert.
Danach mussten die Leiterbahnen gezogen werden. Es sieht bei der Platte nicht nach viel aus, 
kann aber auch hier sehr viel Zeit einnehmen. 
Eine Schwierigkeit die sich ergeben hat war, dass der Rechte Teil der Platine mit den linken Pins verbunden werden müssen.
Hierbei dürfen sich die Leiterbahnen nicht kreuzen. Nach einem halben Nachmittag war dies jedoch auch geschafft.

![](res/layout.png?raw=true)

### <a name="t5-2">Ätzen
Nach dem Layouten mit Alzium konnte die Platine geätzt werden. Hierbei wurden mehrere Anläufe benötigt.
Beim ersten durchgang war die Natronlauge mit welcher die Printplatte entwickelt wird zu stark und hat die ganze Photoaktive Schicht weggeätzt.

Darauf folgten weitere Versuche wobei die Ätzt Flüssigkeit zu stark war.

![](res/leiterplatte.jpeg?raw=true)

Danach konnte die Platine mit den Buttons bestükt und gelötet werden.
![](res/platte_teile.jpg?raw=true)

### <a name="t5-3">Zusammenbau
Zu guter Letzt wurden alle Komponenten zusammen verkabelt. 
Hierbei wurde der feste Stromanschluss durch das Akku Modul von Adafruit ersetzt.
![](res/zusammenbau.jpg?raw=true)

Das Gehäuse wurde von einem Mitstudenten mit einem 3D Drucker gedruckt.
Die Vorlage gibt es [hier](https://www.thingiverse.com/thing:382485).

![](res/final_gameboy.jpg?raw=true)

## <a name="t6">Schlusswort
### <a name="t6-1">Lesson lerned
Bei der Projektarbeit konnte ich sehr gut nachvollziehen, wie der Herstellungsprozess einer Leiterplatte funktioniert.
Des Weiteren konnte ich das angeeignete Wissen welches in über das letzte Semester erarbeitet habe anwenden.

Was ich sehr wohl aus der Projektarbeit für weitere IOT Projekte mitnehme ist die verlorene Hemmschwelle vor der Arbeit mit eletronischen Bauteilen.

### <a name="t6-2">Fazit
Das Projekt hat mich for Herausvorderungen gestellt, welche ohne Hilfe für mich nicht lösbar gewesen wären.
Jedoch zeigt dies wieder einmal mehr, dass fragen keine Schande ist. Durch einen guten Know-How Austausch können alle profitieren.

## <a name="t7">Quellen
- [GPIO Bild](http://pi4j.com/pins/model-3b-rev1.html)
- [Cartrige Bild](https://www.theverge.com/2016/4/7/11383166/this-hacked-game-boy-hides-a-raspberry-pi-and-hundreds-of-games)
