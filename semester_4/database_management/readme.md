# Datenbank Management
Im Modul wird mit Oracle DB gearbeitet.
## Begrifflichkeiten

|Begriff        |Beschreibung               |
|---------------|---------------------------|
|Entity         |Eine Einheit, Row, Object, Record, Tupel oder Datensatz|
|Entitätsmenge  |Eine Menge von mehreren gleichen Entitäten -> eine Tabelle               |
|Kardinalität   |Mengenangabe Tabellen      |
|Redundanz      |Das mehrfache Vorkommen von Daten welche überflüssig sind  |
|Relation       |Beziehung zwischen Tabellen -> Diese sollten immer sprechend sein|
|Attribut       |Attribute bestimmt die Zusammenstellung der Entity         |
### Notation von Kardinalität

![](res/kardinaltiät_natation.png?raw=true)
## Aufbau einer Datenbank
Eine relationale Datenbank besteht aus 3 Teilen.

|Begriff            |Beschreibung               |
|-------------------|---------------------------|
|Datenbank          |Physische Repräsentation der Daten|
|Managementsystem   |Mengenrelationen und Usermanagement|
|Instanz            |Memorybereich einer Datenbank|

## Setup
### Variablen
Es gibt unter Oracle diverse Systemvariablen, welche das System benutzt.

|Name               |Beschreibung                    |
|-------------------|--------------------------------|
|`${ORACLE_BASE}`     |Base Directory von Oracle. Folgende Komponenten liegen unter diesem Verzeichnis: - Software-Admin Verzeichnis|
|`${ORACLE_HOME}`     |Hier liegt die Oracle Installation.|
|`${ORACLE_SID}`      |System ID, ist der eindeutige Name der Datenbank Instanz. Kann gesetzt werden um auf der Instanz zu arbeiten.|
|`${TNS_ADMIN}`       |Ort der Netzwerk Config - Default unter  `${ORACLE_HOME}/network/` |
|Oracle Inventory   |Liegt default in `${ORACLE_HOME}/oraInventory`. Es ist möglich mehrere Inventories pro Host zu haben. Config File ist in `{ORACLE_HOME}/oraInst.loc` abgelegt|

Alle Variablen sind Case Sensitiv

### Oracle Installationen
Oracle Upgrades funktionieren nach dem System "out of place"
Dies bedeutet, dass alle Upgrades in einen eigenen Software Stack im Verzeichnis `{$ORACLE_BASE}/products` installiert werden müssen.

Es wird davon abgeraten im ORACLE_HOME Config Files anzulegen, da dieses von Zeit zu Zeit ändern kann

### OFA Optimal Flexible Architecture
Richtlinie zur Ablage von Files in Oracle DB
Die Dokumentation ist unter `/u01/app/oracle/local/dba/doc/ofa4.pdf` zu finden.

```
-   /u01
    - /app
        - /oraInventory                 Inventory
        - /oracle                       `$ORACLE_BASE`
            - /prduct                   ORACLE Installation
            - /admin                    Basis Directory für Instanz-spezifische Directories
            - /network
                - /admin                TNS_ADMIN
                - /log                  SQlNet Logs
                - /trace                SQlNet Trace Files
            - /diag                     
```            
### Oracle Versionen
Es ist durchaus üblich mehrere Versionen von Oracle auf dem gleichen Server zu betreiben.

### oratab
Unter oratab werden die existierenden Datenbanken abgelegt.
oratab liegt unter `/etc/`
Das Format von oratab sieht folgendermassen aus:
``` bash
${ORACLE_SID}:${ORACLE_HOME}:[Y|N]
```
`[Y][N]` Definiert hierbei ob die Datenbank beim Starten des Hosts ebenfalls gestartet werden soll.


## SQL Grundlagen
Ein Statement muss immer mit einem Semikolon abgeschlossen werden.
Namen von Objekten dürfen keine Schlüsselwörter verwenden.
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
|Dateryp    |Beschreibung                   | Wertigkeit                                      |
|-----------|-------------------------------|-------------------------------------------------|
|`INTEGER`  |Zahlenwert                     |
|`VARCHAR2` |Zeichenkette Oracle Spezifisch | Wertebereich wird automatisch assoziiert        |
|`CHAR`     |Fix definierte Zeichenkette    |
|`NUMBER`   |Zahlenwert mit Gleitkomma      |zwischen 1 * 10^-130 und 9.99...9 x 10^125 zu 38 |
|`DATE`     |Datum                          |
|`CLOB`|Character Large Object => Für Objekte|
|`BLOB`|Binary Large Object => für Binärwerte|

### Special
``` sql
NUMBER(3,2) -- 3 Zahlen mit 2 Nachkommastellen
NUMBER(2)   -- 2 Zahlen

CREATE TABLE test (a char(20));  -- a ist 20 Zeichen lang
``` 

## Getting Start - Near Working
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
Trivadis BasEnv ist eine grosse Script- und Alias Sammlung

#### BasEnv Alias
Hier einige hilfreiche BasEnv Commands zur Systemadministration

|Command    |Description                    |
|---------- |-------------------------------|
| `u`       |Zeit alle Systemrelevanten Infos an|
| `sqh`     |sqlplus mit Historiesierung|
| `sq`      |Wie `sqh` jedoch ohne Historiesierung|
| `sta`     |Zeigt Status der Datenbank an|


Für das Browsen durch Directories gibt es diverse cd Aliases

|Command    |Description                    |
|---------- |-------------------------------|
| `cdh`     |`cd $ORACLE_HOME`              |
| `cda`     |`cd $ORACLE_HOME`              |
| `cdd`     |`cd` in Dial Directory         |
| `cdob`    |`cd $ORACLE_BASE`              |
| `cdt`     |`cd $TNS_ADMIN`                |
| `cdl`     |`cd $ORACLE_BASE/local`        |

### SQLPlus
Einloggen als User
``` shell
$ sqlplus /nolog
SQL> connect / as sysdba
SQL> exit
```
Das Ganze geht auch Einzeilig
``` shell
$ sqlplus / as sysdba
```

Alternativ zu sqlplus gibt es noch das Tool sqh.


``` shell
$ sqh
# Dieser Command gibt die momentan benutze Datenbank zurück.
SQL> select name from v$database;
NAME
---------
XE112
```

#### Formatierung von Output
``` shell
 SQL> set lines 200
 SQL> col member format a40                 # Setzt die Zeilenbreite von member auf 40 Zeichen
 SQL> select group#, member from v$logfile order by 1,2; 
 ``` 
Hierfür gibt es noch weitere Optionen:
 
|Befehl                     | Funktion                                                               |
|---------------------------|-----------------------------------------------------------------------|
|`set lines [n]`            | Setzt die Zeilenlänge auf n Zeichen                                   |
|`set pages [n]`            | Setzt die Seitenlänge  auf n Zeilen                                    |
|`col [Name] format a [n]`  | Beschränkt Charakter Felder auf n Charakter                           |
|`col [Name] format 999`    | Beschränkt numerische Felder auf z.B. 3 Stellen. 5 Stellen = 99999    |

### Helpfull selects
Gibt alle Tabellen des tablespaces zurück

`select table_name from all_tables;`


## Erstellung Tablespace
Für jeden Tablespace sollte ein eigener Benutzer erstellt werden. 
So kann garantiert werden, dass von einer fremden Applikation auf fremde Tabellen zugegriffen werden kann.

So kann ein neuer Tablespace erstellt werden:
``` sql
create tablespace WEBSHOP_DATA    
    datafile '/u02/oradata/XE112/webshop_data01XE112.dbf'   
    size 50M   
    autoextend on; 
``` 

Ein neuer User erstellt man so:
Hierbei müssen drei Schritte ausgeführt werden.
- User erstellen
- Berechtigungen setzen
- Auf den Tablespace berechtigen.
``` sql
create user WEBSHOP   
    default tablespace WEBSHOP_DATA
    identified by manager; 

grant connect, resource to WEBSHOP;  
alter user WEBSHOP quota unlimited on WEBSHOP_DATA;
```

# DB 2
## Grundbegriffe
### Datafiles
Sind alle Daten drinnen. Datenfiles sind Binärdateien.



### System Change Number
Diese Nummer wird geführt und incremenentiert wenn das System neu gestartet wurde.
Wenn das System crasht wird die nummer nicht neu gesetzt. So kann nachfollzogen werden, ob das System regulär neu gestartet wurde oder nicht.


### Redo Log Files
Sind ebenfalls Binärfiles. Hier werden alle Transaktionen hineingechrieben.
Falls die Instanz crascht ist alles weg was im Memory geschrieben ist.

Beim Start werden diese gelesen und es wird ein checkup mit dem System startcounter gemacht. 
Falls dieser Tiefer als der Redo Log level ist werden diese zur wiederherstellung benutzt.

Redo Logs werden meist mehrfach angelegt.

### Flashback
Speichert noch mehr als Redo Logs
Kann auch mit upgrades umgehen.
Ist jedoch nur in der Enterprise Version brauchbar


### Controll File
Ist ebenfalls Binär
Das File sollte immer doppelt vorhanden sein.

### Parameter File
Ist ein Asci File

`{oracle_sid}.ora` 
Parameter können z.B die default Memory grösse sein.
Hier könnnen alle default Parameter gesetzt werden.


- Auditing File
- Optimizer

### Trace Files
Sind Ascii Files

Stehen alle Informationen über die Datenbank und ihren Status drinnen.
Wird häufig für Service Requests an Oracle benötigt.

### Alert Log
Ascii File
Neue Version im XML  Format 

Fehlermeldungen fangen meist immer mit `ora-` an.
`oerr ora  1119` zeigt den Fehlerstatus an 

### Password Files
Ist wieder ein Binary File
Beinhaltet Passwörter von Superuser


## Instanzen
PGA - Programm Global Area
Bereich in welchem das Programm läuft


### SGA - System Global Area
Ist ein bereich im memory 
Hier sind diverse Parameter geladen.

-> Buffer Cache
    Bei einer Abfrage werden Anfragen im Buffercache für eine bestimmte Zeit zwischengespeichert.




Background Prozesse

Server Processes

## Oracle Net
Der Aufbau einer Verbindung wird via Listener gemacht.



### tnsping

Ping auf Oracle Basis über Listener

### tnsnames

Remotezugriff über Remote

### ezconnect

- Hostname des Listeners
- Post
- Service Name



tns.names.ora file muss ein Eintrag gemacht werden.

### FRA

Der FRA sollte nie 100 % des Platzes zur Verfügung gestellt werden. 
Bei zum Beispiel 100 Gb sollte der FRA etwa 20 GB Platz gegeben werden.

## Backup

Offline Backups müssen konsistent sein.

Online Backups sind nicht konsistent. Deshalb muss auch das Transaktionlog mitgezogen werden.

Bei Offline Backups sind alle Daten seit dem Backup verloren.

RMAN recovery manager sollte primär für das Backup verwendet werden.
 
# Security

## Passwort Handhabung

Die Komplexität des Passworts kann eingestellt werden.
Jeder User hat ein eigenes Profil
In Oracle gibt es 7 verschiedene Möglichkeiten, wie Passwörter eingeschränkt werden können.
```sql
select resource_name, limit
from dba_profiles

where 	profile			= 'DEFAULT' 
and 	resource_type 	= 'PASSWORD'

order by 1;
```



# Monitoring
Failed Login Atemts
Patching: 

# Auditing
Es können auch Bind Variablen angezeigt werden.

Um ein Auditing zu machen kann das Package `dbms_fga`

Oraclce bietet zum Auditieren folgende Operationen an:

`DBA_STMT_AUDIT_OBTS`
`DBA_PRIV_AUDIT_OBTS`
`DBA_OBJ_AUDIT_OBTS`

## Synonyme erstellen

```sql
create synonym web_ro_usr.artikel for webshop.artikel;
```


