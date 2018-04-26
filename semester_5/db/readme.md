# Test DB2-2#
## RMAN Restore/Recovery

Es können die ganze Datenbank, ganze Tablespaces oder einzelne Datenfiles
restored werden

    RMAN> restore database;
    RMAN> restore tablespace users;
    RMAN> restore datafile 1;

    skipping datafile 1; already restored to file /u02/oradata/XE112/system01XE112.dbf

Um Datenfiles zu restoren, müssen sie offline sein.
    
    RMAN> restore tablespace users;


### Unterschied restore recover

Restore wird von Fremden Speichermedium gemacht. Z.B beschädigte Files ersetzen
Recovery wird per Redo Logs gemacht.

## Recovery Befehle

	RMAN> recover database;
	RMAN> recover tablespace users;
	RMAN> recover datafile 1;

	SQL> alter database open resetlogs;

### Recovery Arten
Es gibt zwei verschiedene Arten von Recovery’s:
*Complete Recovery*
- Complete Recovery’s sind Recovery’s, die bis zur letzten Transaktion nachgefahren werden

*Incomplete Recovery*
- Incomplete Recovery’s sind Recovery’s, die nicht bis zur letzten Transaktion recovered werden
- PIT Recovery’s sind z.B. incomplete Recovery’s
- Nach incomplete Recovery’s müssen die Redo Log’s geleert werden
	
	alter database open resetlogs;


### Beispiel Recovery / Restore
Backup’s machen ist das Eine, man muss sie auch restoren können
Restore von Online Backups wird in 2 Schritten gemacht:

1) Restore
2) Recovery

```sql
SQL> startup force mount;
RMAN> run {
		allocate channel ch1 device type disk;
		allocate channel ch2 device type disk;
		allocate channel ch3 device type disk;
		allocate channel ch4 device type disk;

		restore database;
		recover database;
		sql "alter database open";

		release channel ch1;
		release channel ch2;
		release channel ch3;
		release channel ch4;
}
```
## Complete Recovery

Sind Backups vorhanden?

```sql
RMAN> list backup of database;
oder
RMAN> list backup of datafile 4;
oder
RMAN> list backup of datafile '/u02/oradata/XE112/users01XE112.dbf';


# Zeitpunkt merken

SQL> alter session set nls_date_format='dd.mm.yyyy hh24:mi:ss';
SQL> select sysdate from dual;

```

Beim Löschen von Datenbankfiles tritt meistens kein Fehler auf, da die DB im Speicher repliziert wurde.

### Alert Log
Fehler forcieren durch Schreiben des aktuellen Memory’s in die
Datenfiles und Controlfiles


```sql
SQL> alter system checkpoint;
alter system checkpoint
*
ERROR at line 1:
ORA-03113: end-of-file on communication channel
Process ID: 23510
Session ID: 133 Serial number: 73

# Alertlog konsultieren und schauen was passiert ist

$ taa
$ via
```
Complete Restore / Recovery durchführen
Sicherstellen, dass die vorher erstellte Tabelle vorhanden ist

Zu beachten:
- Das Backup wurde gemacht bevor die Tabelle erstellt wurde
- Die Tabelle wird durch Nachfahren der Redo Log’s erstellt 

```sql
SQL> startup mount;
$ rmanch
RMAN> restore datafile 4;
RMAN> recover datafile 4;
SQL> alter database open;
SQL> select * from test_users;
SQL> startup mount;
$ rmanch
RMAN> restore tablespace USERS;
RMAN> recover tablespace USERS;
SQL> alter database open;
SQL> select * from test_users;
```

## PIT (Point in Time Recovery / Restore)

Point In Time (PIT) Restore / Recovery auf den Zeitpunkt
durchführen, als die in Übung 3 erstellte Tabelle noch nicht
vorhanden war.  Kontrollieren ob die Tabelle vorhanden ist



```sql
SQL> startup force mount;
$ rmanch
run {
	set until time "to_date('14_05_2016 18:00:00', 'DD_MM_YYYY HH24:MI:SS')";
	restore database;
	recover database;
}
SQL> alter database open resetlogs;
SQL> select table_name from dba_tables where table_name = 'TEST_USERS';
```
# Export Import
## Verwendung
- Kopieren von einzelnen Schemen- oder Teilen davon
- "saubere" Upgrades von Datenbanken ohne alte Zöpfe von früheren Migrationen mitzuschleppen
	- "Full Imports" möglichst vermeiden, nur die Schemen importieren, die benötigt
werden
- Weitergeben von Teilen der Datenbank an Drittpersonen wie z.B. SW Entwicklungsfirmen
- Reorganisieren von Tabellen
## SYS Objekt
-> sys Objekte werden nicht exportiert und können auch nicht importiert werden

- Anders als bei RMAN erwartet das Import Tool eine laufende Datenbank
- Eine laufende DB bedeutet, dass mindestens alle sys Objekte vorhanden sind
- Dies ist konzeptionell korrekt, muss aber berücksichtigt werden
- Erstellt man keine Objekte unter dem Schema sys, was man eh nicht machen sollte, ist das kein Problem


## Datapump
- Die neuen Export / Import Utilities werden «Datapump» genannt
- expdp / impdp
- Datapump wurde mit ORACLE 10g eingeführt


```sql
# DD View
DBA_DIRECTORIES
create or replace directory datapump as '/u00/app/oracle/admin/DAH11203/dpdump';
```


```sql
# Hilfe aufrufen von Oracle Tools
expdp help=yes
impdp help=yes
```

Command Datapump -> schwer zu lesen
```sql
expdp USERID=system/manager FULL=Y PARALLEL=8
FLASHBACK_TIME=sysdate JOB_NAME=dp_fullexp
DIRECTORY=DATA_PUMP_DIR DUMPFILE=dp_fullexp_%U.dmp
LOGFILE=dp_fullexp.log
```

Desshalb noch mit Params
Hier das File `exp.par`
```sql
USERID="/ as sysdba"
FULL=Y
FLASHBACK_TIME=sysdate
JOB_NAME=dp_fullexp1
DIRECTORY=dpdump
DUMPFILE=dp_fullexp_%U.dmp
LOGFILE=dp_fullexp.log
```

Aufruf des Files
```
expdp parfile=exp.par
```

## Datapump Parameters

- Die vollständige Liste der Parameter ist in der Dokumentation
ersichtlich

Was oft als Basis verwendet wird:


```
USERID="/ as sysdba"
FULL=Y
PARALLEL=4
FLASHBACK_TIME=sysdate
JOB_NAME=dp_fullexp
DIRECTORY=dpdump
DUMPFILE=dp_fullexp_%U.dmp
LOGFILE=dp_fullexp.log

```


USERID 
User mit welchem man sich in die DB verbindet 
`[Username]/[Passwort]@tns_name system/manager 
“/ as sysdba”
system/manager@xe112.tsbe.ch`

FULL 
Fullexport der gesamten DB Wird “N” angegeben, muss eine
sonsNge OpNon wie z.B. ein Schema
oder eine Tabelle angegeben werden 
`Y oder N`

FLASHBACK_TIME 
GaranNert einen konsistenten Export.WichNger Parameter! sysdate

DIRECTORY 
Name des DB Directories, wohin der
Export gemacht werden soll Name aus dba_directories

PARALLEL 
Parallelität 
8

DUMPFILE 
Name des Dumpfiles.
Die Variable %U gibt an, dass mehrere
Files erstellt werden können. z.B. wenn
Parallel > 1 eingestellt ist Beliebiger Name
Ggf. Mit %U

### Full Export

Erstellen eines Full Exports der Datenbank

```sql
create or replace directory dpdump as '/u01/app/
oracle/admin/XE112/dmp';

expdp USERID=system/manager FULL=Y
FLASHBACK_TIME=sysdate DIRECTORY=dpdump
DUMPFILE=dp_fullexp.dmp LOGFILE=dp_fullexp.log

```
Importieren des Schemas webshop in die gleiche Datenbank unter dem Namen webshop_copy
Wahlweise mit Parameterfile oder direct via CLI

```sql
Parameterfile:
USERID="/ as sysdba"
FULL=N
PARALLEL=1
JOB_NAME=db_imp_webshop
DIRECTORY=dpdump
REMAP_SCHEMA=webshop:webshop_copy
SCHEMAS=WEBSHOP
EXCLUDE=statistics
DUMPFILE=dp_fullexp.dmp
LOGFILE=dp_imp_webshop1.log

impdp parfile=imp.par

```
* Generell System Tablespace kann man nicht offline nehmen (unmounten)
  * Complete / incomplete Recovery und Befehle dazu
  * PIT Recoverys (Voraussetzungen dafür)
* Export/Import
  * Wofür braucht man das
  * sysobjekte werden nicht exportiert
  * Voraussetzungen (z.b ein Directory) (keine syntax)
  * Wie ruft man dir Hilfe auf?
  * Unterschied Paramater File / CLI
  * Was für paramater sind möglich?
* Security
  * Was ist möglich?
  * Vier möglichkeiten ein Passwort zu reglementieren. (Keine syntax)
  * Autiting Möglichkeiten
  * Unified Autiding was ist das?
  * Warum sollte man nicht min sysowner verbinden.
  * Welche privilegien sollte man nicht vergeben?
  * Rollen (Konzept)


