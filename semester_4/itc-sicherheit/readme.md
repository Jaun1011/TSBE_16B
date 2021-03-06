# ITC Security
In diesem Modul werden theoretische Ansätze über IT Security angeschnitten.
Hierbei ist die praktische Verwendung secondär.

## Integrale Sicherheit

### IKS (Internes Kontrollsystem)

Eine Massnahme gegen Ransomware sind z.B Backups

Hierbei wird nicht die Eintrittswarshceinlichkeit gemindert
IKS wäre hierbei ob der Backup gemacht wird und dass dieser erfolgreich ist sowie valide Daten vorweist.

![](res/iks_kreislauf.jpg?)

Hierbei muss immer belegt werden, dass die möglichen Massnahmen gemacht wurden.
Z.B Backup wurde täglich gemacht.
Restore von einzelnen Dateien wurden gemacht.
Diese Schritte werden schriftlich festgehalten und werden periodisch ausgeführt.

Bei der ausführung eines IKS muss der Prüfer bestätigen in Form einer Unterschrift dass der Test gemacht wurde.
Man kann einen IKS wie einen Test anschauen. 

### BCM (Betriebskontinuitätsmanagement)
Was braucht es damit der Betrieb aufrecht erhalten werden kann.
Dabei müssen alle nicht benötigten Punkte gestrichen werden.

Beispiel für eine Planungsfirma:
- Räumlichkeiten müssen gewährleistet sein
- Jeder braucht ein Laptop
- Es braucht einen Server für die Planungssoftware

Es muss schriftrlich festgehalten werden, was sich dabei überlegt wurde. 
Wesswegen wurden die entsprechenden Punkte gestrichen.

### Beeinflussende Faktoren
Dies können Gesetze sowie best practise sein welche eingehalten werden müssen.

## ISMS

![](res/itsm_view.png?raw=true)

ISMS kann zertifiziert werden lassen. Dadurch kann das Vertrauen vom Kunden verbessert werden.
Jedoch kann dies aber auch ein trugschluss sein, da Zertifizierungen ebenfalls sehr detailiert gemacht werden.
ISMS ist kein Produkt sondern Prozesse und Regeln innerhalb eines Unternehmens.

### Best Practice
Kann unter anderem eine Empfehlung von Hersteller sein.
Dies können auch Standarts vom Kobic, ISO etc sein.

Keine Namen sondern Rollen bei Verantwortlichkeiten definieren.

## Firewall Handhabung
Es gibt mehrere Arten von Firewalls wobei die Grenzen hier vermehrt verschwimmen.

Es gibt grob gesagt 2 Regelsetzt für eine Firewall.
Alles was von aussen kommt wird prinzipiell zugetan und erst bei Nutzung aufgetan.
Von innen nach aussen ist man weniger restriktiv.


## SAN
Storage Area Network -> bietet eine hohe flexibilität
Ein SAN ist praktisch immer Redundant aufgebaut.

- SATA ist sehr günstig und nicht sehr schnell
- Fiber Channel Disk sind extrem schnell aber ziemlich teuer.


LOOM -> einzelne Speichereinheit zB eine Disk


Backup von SAN Daten 
Kann nicht mehr über ethernet gemacht werden
Ein Backup kann dirrekt vom SAN gezogen werden.
Diese gehen meist auf ein anderes SAN

Bei Katastrophen ist eine Redundanz unvermeidbar.
Z.B Brand, Hochwasser etc
