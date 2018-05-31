# Netzwerk
## Klassifizierungen

|Abkürzung| Beschreibung|
|-------|---------------------------|
|CAN     | Controller Area Network     |
|LAN     | Local Area Network          |
|WAN    | Wide Area Network         |
|GAN    | Global Area Network         |

## Topologien

### Stern
Alle Clients sind in Sternform aufgebaut

```text
        
                &   &   &
                 \  |  /
                  \ | /
                   \|/
         &----------*----------&
                   /|\
                  / | \
                 /  |  \
                /   |   \
               &    &    &
               

```
#### Vorteile
- Einfacher Aufbau (keine Signalregeneration)
- Ausfall einer Station beeinträchtigt das Netzwerk nicht.
- Problemdiagnose bei Zentralem Punkt

#### Nachteile
- Ausfall von Zentralem Punkt verherend
- Distanz Zwischen Vermittlungsknoten und Peripherie beschränkt


### Ring

```text      
           &                  &
           |                  |
         __*__________________*_____
        |                           |
        |                           |
        |___________*_________*_____|
                    |         |
                    &         &
```

#### Vorteile
- Aufbau ist simpel
- Verkabelung is einfach gehalten

#### Nachteile
- Durchfluss wird bei jedem zusätzlichen Client geringer

- Ausfall einer Station beeinträchtigt den ganzen Ring

#### Beispiele
IBM-Token Ring, IEEE 802.5   FDDI (Fiber Distributed Data Interface), X3T9 

### Bus

```text      
                      &         &            &
                      |         |            |
         |____________*__*______*__*_________*______|
         |               |          |               |
                         &          &
```

#### Vorteile
- Distanzen sind kein Problem
- Ausfall einer Station beeinträchtigt das Netz nicht
- Neues Hinzufügen eines Clients ist einfach

#### Nachteile
- Komplexe Hardware
- Bei Vielen Benutzern hohe Leistungsfähigkeit notwendig 

#### Beispiel
Basisband-Netzwerke auf der Basis von 
Ethernet und IEEE 802.3   
Token Bus IEEE 802.4 


## Übertragungsarten 
**Unicast**: Daten werden genau an einen Endpoint gesendet
**Multicast**: Daten werden an eine bestimmte Gruppe von Endpoints gesendet
**Broadcast**: Daten werden an alle Endpoints im Netzwerk gesendet


## Datenübertragung

### Synchron

Die Synchronisation wird während der Datenübertragung aufrecht erhalten.
Sender und empfänger müssen gleichen takt haben
Der Takt wird vom Modem vorgegeben


### Asynchron
Jedes Zeichen ist als Dateneinheit zu betrachten. 
Die Einzelnen Daten können also unabhängig zueineander zwischen Client und Server
versendet werden.
Die Daten werden per einem Start und zwei Stoppbits signiert.

## Osi Schichten Modell
|Schicht| Name                 | Beispiele         |
|-------|----------------------|-------------------|
|7      | Application Layer    |Applikationen|
|6      | Presentation Layer   |Darstellung der Zeichen, wie ASCII|
|5      | Session Layer        |Speichert Sessions die als eine Art Checkpoint für Datenübermittlung dienen|
|4      | Technical Layer      |E2E Transport der Daten|
|3      | Network Layer        |Netzadressierungen Auf und Abbau logischer Verbindungen Routing|
|2      | Data Link Layer      |Zusammenfassung des Bitstroms in Mit CRC Checksumme sowie Sequenz und Zeitüberwachung |
|1      | Physical Layer       |Kabel,Funk, Logisch 0 und 1|

## IEEE 802 DataLink
Laut dem Standart wird der DataLink Layer in ein 2A **MAC** Median Access Controll und ein 2B **LLC** Logical Link Controll Layer unterteilt

### Vorteile sind:

- eine Standartisierung der Übermittlung von Daten
- Separisierung von Netzwerkkommunikation
- Änderungen in einer Schicht haben keinen Einfluss auf die anderen Schichten
### Kommunikation
```text

Anwendungsschicht         ->                    AH |Daten |
Darstellungsschicht       ->                 PH|   |      |
Kommunikationsschicht     ->              SH|  |   |      |
Transportschicht          ->           TH|  |  |   |      |
Vermittlungsschicht       ->        NH|  |  |  |   |      |
Sicherungsschicht         ->    DLH|  |  |  |  |   |      |DLT
Bitübertragungsschicht    ->   |   |  |  |  |  |   |      |

```
## Verbindungsorientierte Dienste
Alle Daten halten den vorgegebenen Weg ein.
Die Reihenfolge der Daten wird eingehalten.
Bspl: Telefonverbindung


## Verbindungslose Dienste

- Jedes Datenelement trägt die volle Adresse des Empfängers und wird von den anderen Elementen durch das Netz befördert.
- Die Datenelemente müssen nicht den gleichen Weg nehmen.
Briefpost IP



## Tokenring
Maximal 260 Nodes an 4MB resp 72 Nodes an 16MB

Real als Stern aufgebaut logisch als ring
Benötigt immer  einen Monitor (kann arbeitsstation sein)

# Ethernet
## IEEE 802
IEEE ist ein Standart zur Integration von verschiedenen Systemen

