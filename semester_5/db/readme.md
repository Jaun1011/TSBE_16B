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


