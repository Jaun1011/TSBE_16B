# Datenbank Management
Im Modul wird mit Oracle DB gearbeitet.
## Setup
### Variablen
Es gibt unter Oracle diverse Systemvariablen welche das System benutzt.

|Name               |Beschreibung                    |
|-------------------|--------------------------------|
|`${ORACLE_BASE}`     |Base Directory von Oracle. Folgende Komponenten liegen unter diesem Verzeichnis: - Softwate- Admin Verzeichnis|
|`${ORACLE_HOME}`     |Hier liegt die Oracle Installation.|
|`${ORACLE_SID}`      |System ID, ist der eindeutige name der Datenbank Instanz. Kann gesezt werden um auf der Instanz zu arbeiten.|
|`${TNS_ADMIN}`       |Ort der Netzwerk Config - Default unter  `${ORACLE_HOME}/network/admin` |
|Oracle Incentory   |Liegt default in `${ORACLE_HOME}/oraInventory`. Es ist möglich mehrere Infentories pro Host zu haben. Config File ist in `{ORACLE_HOME}/oraInst.loc` abgelegt|

Alle Variablen sind Case Sensitiv

### Oracle Installationen
Oracle Upgrades funktionieren nach dem System "Out Of Place"
Dies bedeutet, dass alle Upgrades in einen eigenen Softwarestack im Verzeichnis `{$ORACLE_BASE}/products` installiert werden müssen.

Es wird davon abgeraten im ORACLE_HOME Config Files anzulegen, da dieses von Zeit zu Zeit änderen kann

### OFA Optimal Flexible Architecture
Richtlinie zur ablage von Files in Oracle DB
Die Dokumentation ist unter `/u01/app/oracle/local/dba/doc/ofa4.pdf` zu finden.


-   /u01
    - /app
        - /oraInventory -> Inventory
        - /oracle -> ORACLE_BASE
            - /prduct -> ORACLE Installation
            - /admin            -> Basis Directory für Instazspefischie Direcotries
            - /network
                - /admin        -> TNS_ADMIN
                - /log          -> SQlNet Logs
                - /trace        -> SQlNet Trace Files
            - /diag
            
            

### Oracle Versionen
Es ist durchaus üblich mehrere Versionen von Oracle auf dem gleichen Server zu betreiben.

### oratab


Unter oratab wrden die existierenden Datenbanken abgelegt.
oratab liegt unter `/etc/`
Das Format von oratab sieht folgendermassen aus:
``` bash
${ORACLE_SID}:${ORACLE_HOME}:[Y|N]
```
[Y][N] Definiert hierbei ob die Datenbank beim Starten des Hosts ebenfalls gestartet werden soll.


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
Dient zur Abfrage von Daten.
``` SQL
SELECT name, vormame
FROM benutzer 
WHERE 1=1
GROUP BY
HAVING ...
UNION ...;
```

SELECT DISTINCT gibt nur die Differenz der unterschiedlichen Zeilen zurück

``` SQL
SELECT name, vormame
FROM benutzer 
WHERE name like "hans" OR vorname like "fritz";
```

#### Manipulationsoperationen

|Name      |Beschreibung                    |
|----------|--------------------------------|
|`INSERT`    |fügt neues Entity hinzu         |
|`UPDATE`    |Updated Entity                  |
|`DELETE`    |Löscht Entity                   |

### DDL (Data Definition Language)
DDL verändert was an der Datenstruktur.

|Name      |Beschreibung                    |
|----------|--------------------------------|
|`CREATE`    |fügt eine neue Tabelle hinzu    |
|`ALTER`     |fügt eine Row in die Tabelle ein|
|`DROP`      |Löscht die Tabelle              |


### DCL Data Controll Language
Wird für Berechtigungen verwendet.    
 - GRANT


### TCL Transaction Controll Language
Unter anderem für Rollbacks in Verwendung


## Datentypen
|Dateryp   |Beschreibung                   |
|----------|-------------------------------|
|`INTEGER`   |Zahlenwert                     |
|`VARCHAR2`  |Zeichenkette Oracle Spetzifisch|


## Getting Start
### oraenv
``` shell

$ cat /etc/oratab       # gibt vorhandene Datenbanken zurück
...
rdbms_12102_ee:/u01/app/oracle/product/12.1.0.2:D
XE112:/u01/app/oracle/product/11.2.0/xe:Y

$ . oraenv
ORACLE_SID ? XE112
``` 
### Trivadis BasEnv
Trivadis BasEnv ist eine grosse Script und Alias Sammlung

### Alias
|Command    |Description                    |
|---------- |-------------------------------|
| `cdh`     |cd $ORACLE_HOME                |

### SQLPlus
``` shell
$ sqlplus /nolog
SQL> connect / as sysdba
SQL> exit

#Alternativ zu sqlplus gibt es noch das Tool sqh.

$ sqh
# Dieser Command gibt die momentan benutze Datenbank zurück.
SQL> select name from v$database;
NAME
---------
XE112
```

Formatierung von Output
``` shell
 sql> set lines 200
 sql> col member format a40                 # Setzt die Zeilenbreite von member auf 40 Zeichen
 SQL> select group#, member from v$logfile order by 1,2; 
 ``` 