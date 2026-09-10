import type { Topic } from '../../types/content'

const opt = (id: string, text: string) => ({ id, text })

export const routingTopic: Topic = {
  id: 'topic-netzwerktechnik-routing', slug: 'routing-und-standardgateway', moduleSlug: 'netzwerktechnik',
  title: 'Routing und Standardgateway', shortIntro: 'Lokale und entfernte Netze, Routingtabellen, Next Hop und Default Route.', order: 7,
  exercises: [
    { id: 'ex-netz-07-01', topicSlug: 'routing-und-standardgateway', type: 'single-choice', difficulty: 'easy', question: 'Wann sendet ein Host ein Paket an sein Standardgateway?', options: [opt('a', 'Wenn das Ziel außerhalb des eigenen Subnetzes liegt'), opt('b', 'Bei jeder ARP-Anfrage'), opt('c', 'Nur bei Broadcasts'), opt('d', 'Wenn die MAC-Adresse des eigenen Hosts unbekannt ist')], correctAnswer: 'a' },
    { id: 'ex-netz-07-02', topicSlug: 'routing-und-standardgateway', type: 'text', difficulty: 'medium', question: 'Welche vier Angaben enthält ein typischer Routingtabelleneintrag?', explanation: 'Zielnetz, Subnetzmaske bzw. Präfix, Gateway/Next Hop und ausgehende Schnittstelle; häufig kommt eine Metrik hinzu.' },
    { id: 'ex-netz-07-03', topicSlug: 'routing-und-standardgateway', type: 'single-choice', difficulty: 'medium', question: 'Welche Route wird verwendet, wenn mehrere Einträge passen?', options: [opt('a', 'Die Route mit dem längsten passenden Präfix'), opt('b', 'Immer die Default Route'), opt('c', 'Die alphabetisch erste Schnittstelle'), opt('d', 'Die Route mit der größten Zieladresse')], correctAnswer: 'a' },
  ],
  content: [
    { type: 'paragraph', text: 'Ein Host vergleicht Zieladresse und Subnetzmaske mit seinem eigenen Netz. Liegt das Ziel lokal, ermittelt er die Ziel-MAC-Adresse und sendet direkt. Liegt das Ziel in einem anderen Netz, sendet er den Frame an die MAC-Adresse seines Standardgateways; die IP-Zieladresse bleibt die des entfernten Hosts.' },
    { type: 'heading', level: 2, text: 'Routingtabelle lesen' },
    { type: 'table', headers: ['Feld', 'Bedeutung'], rows: [['Ziel/Präfix', 'Netz, für das der Eintrag gilt'], ['Gateway / Next Hop', 'nächster Router auf dem Weg; bei direkt verbundenen Netzen ohne weiteren Router'], ['Schnittstelle', 'Ausgang, über den das Paket gesendet wird'], ['Metrik', 'Kostenwert zur Auswahl zwischen gleich spezifischen Wegen']] },
    { type: 'paragraph', text: 'Router wählen zuerst die spezifischste passende Route (Longest Prefix Match). Die Route 0.0.0.0/0 ist die Default Route und greift nur, wenn kein genauerer Eintrag vorhanden ist.' },
    { type: 'heading', level: 2, text: 'Statische Routen' },
    { type: 'paragraph', text: 'Statische Routen werden administrativ eingetragen. Sie sind überschaubar und vorhersehbar, passen sich aber nicht automatisch an Ausfälle oder neue Wege an. Für unbekannte externe Ziele verweist eine Standardroute typischerweise auf den Router mit Internetzugang.' },
    { type: 'exam-tip', text: 'Prüfe eine Routingtabelle in dieser Reihenfolge: direkt verbundene Netze, spezifische entfernte Netze, danach Default Route. Achte darauf, dass der Next Hop über eine lokale Schnittstelle erreichbar ist.' },
  ],
}

export const vlanTopic: Topic = {
  id: 'topic-netzwerktechnik-vlan', slug: 'vlan-und-segmentierung', moduleSlug: 'netzwerktechnik',
  title: 'VLAN und Netzwerksegmentierung', shortIntro: 'Broadcastdomänen logisch trennen, Access- und Trunk-Ports sowie Inter-VLAN-Routing.', order: 8,
  exercises: [
    { id: 'ex-netz-08-01', topicSlug: 'vlan-und-segmentierung', type: 'single-choice', difficulty: 'easy', question: 'Auf welcher OSI-Schicht arbeitet die grundlegende VLAN-Trennung?', options: [opt('a', 'Schicht 1'), opt('b', 'Schicht 2'), opt('c', 'Schicht 4'), opt('d', 'Schicht 7')], correctAnswer: 'b' },
    { id: 'ex-netz-08-02', topicSlug: 'vlan-und-segmentierung', type: 'true-false', difficulty: 'medium', question: 'Geräte in verschiedenen VLANs können ohne Routing direkt miteinander kommunizieren.', options: [opt('true', 'Richtig'), opt('false', 'Falsch')], correctAnswer: 'false', explanation: 'Zwischen unterschiedlichen VLANs ist ein Layer-3-Gerät bzw. Inter-VLAN-Routing erforderlich.' },
    { id: 'ex-netz-08-03', topicSlug: 'vlan-und-segmentierung', type: 'text', difficulty: 'medium', question: 'Worin unterscheiden sich Access- und Trunk-Port?', explanation: 'Ein Access-Port gehört typischerweise zu genau einem VLAN und verbindet ein Endgerät. Ein Trunk transportiert Frames mehrerer VLANs zwischen VLAN-fähigen Komponenten und nutzt dafür VLAN-Tags.' },
  ],
  content: [
    { type: 'paragraph', text: 'Ein Virtual Local Area Network trennt ein physisches Ethernet logisch in mehrere Layer-2-Netze. Switches leiten Frames nur innerhalb des zugeordneten VLANs weiter. Dadurch entstehen getrennte Broadcastdomänen, obwohl dieselbe Switch-Infrastruktur verwendet wird.' },
    { type: 'heading', level: 2, text: 'IEEE 802.1Q und VLAN-ID' },
    { type: 'paragraph', text: 'IEEE 802.1Q ergänzt Ethernet-Frames auf Verbindungen mit mehreren VLANs um ein Tag. Die VLAN-ID ordnet den Frame der richtigen logischen Broadcastdomäne zu. Alle beteiligten Komponenten entlang dieses Weges müssen die Kennzeichnung korrekt verarbeiten.' },
    { type: 'table', headers: ['Porttyp', 'Aufgabe'], rows: [['Access-Port', 'bindet ein Endgerät üblicherweise ungetaggt an ein einzelnes VLAN an'], ['Trunk-Port', 'transportiert mehrere VLANs getaggt zwischen Switches, Router oder Servern']] },
    { type: 'heading', level: 2, text: 'Kommunikation zwischen VLANs' },
    { type: 'paragraph', text: 'VLANs sind voneinander getrennt. Soll Verkehr zwischen ihnen fließen, benötigt er Routing über einen Router oder Layer-3-Switch. Dort können zusätzlich Regeln festlegen, welche Netze miteinander kommunizieren dürfen.' },
    { type: 'example', title: 'Betriebliche Segmentierung', text: 'Verwaltung, Gäste und VoIP erhalten getrennte VLANs. Ein Trunk verbindet die Switches; Access-Ports ordnen Endgeräte zu. Nur definierte Verbindungen werden über das zentrale Layer-3-Gerät geroutet.' },
  ],
}

export const diensteSicherheitTopic: Topic = {
  id: 'topic-netzwerktechnik-dienste-sicherheit', slug: 'netzwerkdienste-firewall-und-vpn', moduleSlug: 'netzwerktechnik',
  title: 'Netzwerkdienste, Firewall und VPN', shortIntro: 'TCP/UDP, wichtige Ports, Firewall-Regeln und geschützte Verbindungen über fremde Netze.', order: 9,
  exercises: [
    { id: 'ex-netz-09-01', topicSlug: 'netzwerkdienste-firewall-und-vpn', type: 'matching', difficulty: 'medium', question: 'Ordne Dienst und Standardport zu: DNS, HTTP, HTTPS, SSH – 53, 80, 443, 22.', explanation: 'DNS → 53 · HTTP → 80 · HTTPS → 443 · SSH → 22.' },
    { id: 'ex-netz-09-02', topicSlug: 'netzwerkdienste-firewall-und-vpn', type: 'single-choice', difficulty: 'medium', question: 'Welche Grundregel reduziert die Angriffsfläche am stärksten?', options: [opt('a', 'Alle Ports öffnen und protokollieren'), opt('b', 'Nur ausdrücklich benötigte Verbindungen erlauben'), opt('c', 'Nur ausgehenden Verkehr prüfen'), opt('d', 'Ports zufällig ändern')], correctAnswer: 'b' },
    { id: 'ex-netz-09-03', topicSlug: 'netzwerkdienste-firewall-und-vpn', type: 'text', difficulty: 'medium', question: 'Was leistet ein VPN-Tunnel?', explanation: 'Er schützt die Kommunikation über ein nicht vertrauenswürdiges Transportnetz durch authentisierte und verschlüsselte Übertragung zwischen den VPN-Endpunkten.' },
  ],
  content: [
    { type: 'paragraph', text: 'Anwendungen werden auf der Transportschicht über Portnummern angesprochen. TCP arbeitet verbindungsorientiert und bestätigt die geordnete Übertragung; UDP arbeitet verbindungslos mit geringerem Overhead. Die Wahl hängt vom Anwendungsprotokoll ab.' },
    { type: 'table', headers: ['Dienst', 'Transport / Port', 'Zweck'], rows: [['SSH', 'TCP 22', 'verschlüsselte Fernadministration'], ['DNS', 'UDP/TCP 53', 'Namensauflösung'], ['HTTP', 'TCP 80', 'Webzugriff ohne TLS'], ['HTTPS', 'TCP 443', 'Webzugriff mit TLS'], ['DHCP', 'UDP 67/68', 'automatische IP-Konfiguration'], ['SMTP', 'TCP 25', 'Mailtransport']] },
    { type: 'heading', level: 2, text: 'Firewall-Regeln' },
    { type: 'paragraph', text: 'Eine Firewall bewertet Verkehr anhand definierter Kriterien wie Quelle, Ziel, Protokoll, Port und Verbindungszustand. Ein restriktives Regelwerk erlaubt nur benötigte Kommunikation und verwirft den Rest. Reihenfolge, Richtung und Protokollierung müssen eindeutig dokumentiert sein.' },
    { type: 'warning', text: 'Eine offene Portnummer ist kein Schutzmechanismus und beweist allein keine Sicherheitslücke. Entscheidend sind der tatsächlich erreichbare Dienst, dessen Konfiguration und die notwendige Freigabe.' },
    { type: 'heading', level: 2, text: 'VPN' },
    { type: 'paragraph', text: 'Ein Virtual Private Network verbindet einzelne Clients oder ganze Standorte über ein fremdes Netz. Der Tunnel schützt Vertraulichkeit und Integrität und authentisiert die Endpunkte. Beim Remote-Access-VPN verbindet sich ein einzelner Benutzer; beim Site-to-Site-VPN koppeln Gateways zwei Netze.' },
    { type: 'exam-tip', text: 'Begründe Firewall- und VPN-Entscheidungen mit Kommunikationsrichtung, Quelle, Ziel, Dienst und Schutzbedarf.' },
  ],
}

export const diagnoseTopic: Topic = {
  id: 'topic-netzwerktechnik-diagnose', slug: 'netzwerkdiagnose', moduleSlug: 'netzwerktechnik',
  title: 'Netzwerkdiagnose mit Systembefehlen', shortIntro: 'Konfiguration prüfen, Erreichbarkeit testen und Fehler systematisch eingrenzen.', order: 10,
  exercises: [
    { id: 'ex-netz-10-01', topicSlug: 'netzwerkdiagnose', type: 'matching', difficulty: 'easy', question: 'Ordne zu: ipconfig/ip addr, ping, tracert/traceroute, nslookup – Konfiguration, Erreichbarkeit, Pfad, DNS.', explanation: 'ipconfig/ip addr → Konfiguration · ping → Erreichbarkeit · tracert/traceroute → Pfad · nslookup → DNS.' },
    { id: 'ex-netz-10-02', topicSlug: 'netzwerkdiagnose', type: 'technical-problem', difficulty: 'medium', question: 'Eine Website ist per IP erreichbar, aber nicht per Namen. Welchen Bereich prüfst du als Nächstes und mit welchem Werkzeug?', explanation: 'Die Namensauflösung ist verdächtig. DNS-Servereintrag prüfen und die Auflösung mit nslookup testen.' },
    { id: 'ex-netz-10-03', topicSlug: 'netzwerkdiagnose', type: 'text', difficulty: 'medium', question: 'Warum beweist ein fehlgeschlagener Ping nicht automatisch, dass ein Host ausgeschaltet ist?', explanation: 'ICMP kann durch Host- oder Netzwerkfirewalls gefiltert sein. Andere Dienste können trotzdem erreichbar sein; deshalb müssen weitere Schichten und gezielte Dienste geprüft werden.' },
  ],
  content: [
    { type: 'paragraph', text: 'Eine belastbare Diagnose beginnt bei der lokalen Konfiguration und arbeitet schrittweise nach außen. Ergebnisse werden dokumentiert, damit Ursache und Wirkung nicht verwechselt werden.' },
    { type: 'list', style: 'numbered', items: ['Link und Schnittstellenstatus prüfen.', 'IP-Adresse, Präfix, Gateway und DNS-Server kontrollieren.', 'Loopback und eigene Adresse testen.', 'Ein Ziel im lokalen Netz und anschließend das Gateway testen.', 'Entfernte IP-Adresse testen.', 'Namensauflösung getrennt prüfen.', 'Route, offene Verbindungen und bei Bedarf Paketfluss untersuchen.'] },
    { type: 'table', headers: ['Windows', 'Linux', 'Zweck'], rows: [['ipconfig /all', 'ip addr; ip route', 'Adressierung und Routing'], ['ping', 'ping', 'ICMP-Erreichbarkeit und Laufzeit'], ['arp -a', 'ip neigh', 'Zuordnung IP zu MAC im lokalen Netz'], ['tracert', 'traceroute / tracepath', 'Weg zum Ziel'], ['nslookup', 'dig / nslookup', 'DNS-Abfrage'], ['netstat', 'ss', 'Verbindungen und lauschende Ports'], ['route print', 'ip route', 'Routingtabelle']] },
    { type: 'code', language: 'powershell', code: 'ipconfig /all\nping 127.0.0.1\nping <Standardgateway>\nnslookup example.org\ntracert example.org' },
    { type: 'warning', text: 'Scans und aktive Prüfungen dürfen nur in eigenen oder ausdrücklich freigegebenen Netzen durchgeführt werden. Beginne mit zielgerichteten, möglichst schonenden Tests.' },
    { type: 'exam-tip', text: 'Nenne bei einer Fehleranalyse nicht nur einen Befehl. Formuliere Erwartung, beobachtetes Ergebnis und den daraus folgenden nächsten Prüfschritt.' },
  ],
}
