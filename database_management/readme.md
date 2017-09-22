# Datenbank Management
Im Modul wird mit Oracle DB gearbeitet.

## SQL Grundlagen
Ein Statement muss immer mit einem Semikolon abgeschlossen werden.
Namen von Objeken dürfen keine Schlüsselwörter verwenden.
Auch auf Umlaute sollte verzichtet werden.

Kommentare können folgendermassen gemacht werden.
Keywords können mit Kommentaren nicht getrennt werden
``` SQL
/**/    Mehrzeilig
--      Einzeilig 
```

### DML (Data Manipulition Language)


Eine Operation kann mit mehreren Mengenoperationen ausgeführt werden.
Bei Mehrfachausführen von Queries können Parameter gesetzt werden.



#### Abfrageoperationen

SELECT
Dient zur Abfrage von Daten.
``` SQL
SELECT * FROM benutzer WHERE 1=1;
```

#### Manipulationsoperationen

|Name      |Beschreibung                    |
|----------|--------------------------------|
|INSERT    |fügt neues Entity hinzu         |
|UPDATE    |Updated Entity                  |
|DELETE    |Löscht Entity                   |

### DDL (Data Definition Language)
DDL verändert was an der Datenstruktur.

|Name      |Beschreibung                    |
|----------|--------------------------------|
|CREATE    |fügt eine neue Tabelle hinzu    |
|ALTER     |fügt eine Row in die Tabelle ein|
|DROP      |Löscht die Tabelle              |


### DCL Data Controll Language
Wird für Berechtigungen verwendet.    
 - GRANT


### TCL Transaction Controll Language
Unter anderem für Rollbacks in Verwendung


## Datentypen
|Dateryp   |Beschreibung                   |
|----------|-------------------------------|
|INTEGER   |Zahlenwert                     |
|VARCHAR2  |Zeichenkette Oracle Spetzifisch|
