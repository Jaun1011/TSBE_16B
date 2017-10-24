# Internet Services
## DNS (Domain Name System)
### Configuration
Um DNS einzrichten müssen folgende Config Files angepasst werden.

|File                           | Beschreibgung                 |
|-------------------------------|-------------------------------|
|`/etc/network/interfaces`      | Hier wird die Config für die Network Interfaces definiert. Wie z.B IP, Netmask, Gateway und DNS Resolver|
|`/etc/hosntname/`              | Name des Rechners             |
|`/etc/hosts/`                  | Feste Zuordung von IP auf Hostname|
|`/etc/resolv.conf`             | Nameserver sowie lokale DNS Domain|
|`/etc/nsswitch.conf`           | Reienfolge für die Abarbeitung und Auflösung der IP und des Namen|

### Nameserver
Ein Nameserver übersetzt eine IP in einen Name.
`192.168.0.10` wird  so zu `host1.test.ch` umgewandelt.
Die Funkltionsweise ist hierbei analog zum Telefonbuch.




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

