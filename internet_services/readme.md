# Internet Services
## DNS (Domain Name System)
### Configuration
Um DNS einzrichten müssen folgende Config Files angepasst werden.

|File                           | Beschreibgung                 |
|-------------------------------|-------------------------------|
|`/etc/network/interfaces`      | Hier wird die Config für die Network Interfaces definiert. Wie z.B IP, Netmask, Gateway und DNS Resolver|
|`/etc/hosntname`               | Name des Rechners             |
|`/etc/hosts`                   | Feste Zuordung von IP auf Hostname|
|`/etc/resolv.conf`             | Nameserver sowie lokale DNS Domain|
|`/etc/nsswitch.conf`           | Reienfolge für die Abarbeitung und Auflösung der IP und des Namen|

### Nameserver
Ein Nameserver übersetzt eine IP in einen Name.
`192.168.0.10` wird  so zu `host1.test.ch` umgewandelt.
Die Funkltionsweise ist hierbei analog zum Telefonbuch.


### So funktionierts
Wenn ein Domain Name Server nichts mit dem Namen oder einer IP Adresse anzufangen weis, 
wird diese an den nächst höheren Server weitergegeben.
Heist, wenn die lokale IP nicht aufgelöst werden kann, 
wird diese an den nächst höheren DNS Server weitergegeben, 
bis diese aufgelöst werden kann.

Diese DNS Einträge können auch Lokal gemacht werden und zwar im File `/etc/hosts/` 

### Namespaces
Namensräume oder Namespaces sind Bereiche welche eindeutig aufgerufen werden können.
Ein Beispiel hierzu ist `127.0.0.1` diese IP ist immer mit dem Namen `localhost` aufrufbar.

Das System kann sich wie ein Baum vorgestellt werden.
Zuest wird die **Top Level Domain** aufgelöst. Anschliessend die **Second Level Domain** und danach die **Third Level Domain**.

|Typ                                | Beispiel |
|-----------------------------------|----------|
|Top Level Domain                   | ch.      |
|Sub Level Domain                   | swisscom.|
|Third Level Domain                 | shop.    |
|FQDN(Full Qualified Domain Dame)   | shop.swisscom.ch.|

An der Spitze der Nahrungskette stehen die so genannten **Root Server**. 
Weltweit gibt es davon rund 13 Stück. Auf den Root Servern wird die Auflösung für die Top Level Domains aufgezeichniet.
Eine vollständige Liste kann auf der [IANA](http://www.ripe.net/) Website angeschaut werden.


## Resolver
### Rekursive Anfrage
Anfrage an fixen Nameserver. Dieser muss eine eindeutige Rückmeldung geben. 
Heist er kennt die Auflösung oder er kennt sie nicht
### Iterative Anfrage
Der Nameserver gibt empfielt beim nicht Auflösen einen entsprechenden Nameserver zurück, 
welcher in der Lage sein könnte den Request aufzulösen
So hangelt sich der  Resolver von Nameserver zu Nameserver bis ein Auflösung funktioniert hat.

In der Praxis wird eher die rekursive Anfrage gemacht, da Systeme meist mit einer Empfehlung nicht viel anfangen können.

|Typ                 | Beispiel |
|--------------------|--------------------------------------------|
|**forward lookup**  | Domain wird zu IP Adresse umgewandelt      |
|**reverse lookup**  | IP Adresse wird zu Domain umgewandelt      |



## Config Management
/etc/network
```
auto 
```


dns-nameservers
Hier müssen IP Adressen welche der Resolver benötigt angegeben


dns-search
es muss nicht mehr der ganze name des dns genannt werden.


/etc/bind/named.conf.local
``` config
zone "bund.int" in {
    tpye master;
    file "/etc/bind/db.bund.int"
}

zone 220.0.168.
```
named.conf.options
forwarders
wenn der nicht aufgelöst werden kann werden diese verwendet.

allow-qurey
aus welchen Netzen können anfragen gemahct werden.
Von welchen netzen können fragen beantwortet werden.

/etc/bind/db.sb.int


### Fehleranalyse
1) zuerst alle verlinkungen im named.conf.local analysieren
2) in der Zonendatei können die Zonen angeschaut werden



## DHCP

