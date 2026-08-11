import type { ApExamMeta, ApExamQuestion } from '../../types/apExam'

export const ap2SiT1_2024WinterMeta: ApExamMeta = {
  id: 'ap2-si-t1-2024-winter',
  area: 'AP2_SI_T1',
  year: 2024,
  period: 'Winter',
  label: 'Winter 2024/25',
  examDate: 'Mittwoch, 27. November 2024',
  examTitle: 'Konzeption und Administration von IT-Systemen',
  courseCode: '1202',
  sourceExamPdf: 'SI_AP2_T1_24w.pdf',
  sourceSolutionPdf: 'Loe_SI_AP2_T1_24w.pdf',
  solutionSource: 'confirmed',
  taskCount: 4,
  durationMinutes: 90,
  totalPoints: 100,
}

const SCENARIO =
  'Die Aufgaben 1 bis 4 beziehen sich auf die folgende Ausgangssituation:\n\nSie arbeiten als Fachinformatiker (Systemintegration) bei der Retailers GmbH. Dabei handelt es sich um einen mittelständischen IT-Dienstleister, zu den Angeboten gehören der Vertrieb von Servern und Cloud Lösungen. Das Unternehmen besitzt mehrere Standorte in Deutschland.\n\nBearbeiten Sie in diesem Zusammenhang die folgenden vier Aufgaben:\n1. Cloud und Rechenzentrum\n2. Mailinfrastruktur und digitale Zertifikate\n3. RAID-Systeme\n4. Monitoring von Systemen'

export const ap2SiT1_2024WinterQuestions: ApExamQuestion[] = [
  // 1. Aufgabe (24 Punkte) — Cloud und Rechenzentrum
  {
    id: 'ap2-si-t1-2024-winter-q1-aa',
    examId: 'ap2-si-t1-2024-winter',
    questionNumber: 1,
    subPart: 'aa',
    topic: 'Cloud Computing',
    scenario: SCENARIO,
    referenceText:
      '1. Aufgabe (24 Punkte)\n\nIhr Unternehmen will das Rechenzentrum erweitern. Im Zuge dessen sind Sie beauftragt, bei der Planung und Umsetzung zu unterstützen.\n\na) Es soll nun geprüft werden, ob es sinnvoll ist, den Mailserver in die Cloud auszulagern.',
    question:
      'aa) Erläutern Sie drei organisatorische Vorteile, die eine Cloud-Lösung im Vergleich zur bisherigen On-Premises-Lösung bietet.',
    maxPoints: 6,
    modelSolution:
      'Reduktion des Wartungsaufwandes: Bei einer Verlagerung des Mailservers in die Cloud übernimmt der Anbieter der Cloud-Lösung meist die vollständige Verantwortung für Wartung, Sicherheitsmaßnahmen sowie Updates. Das hat zum Vorteil, dass das interne Personal der Retailers GmbH entlastet wird und mehr Zeit für wichtigere Aufgaben verbleibt.\n\nVereinfachte Skalierbarkeit und Flexibilität: Cloud-Lösungen erlauben eine einfache Anpassung und Skalierung der verwendeten Ressourcen. So können z. B. Speicherkapazitäten schnell erweitert werden, ohne dass zuvor zusätzliche Hardware beschafft und installiert werden muss. Auf Veränderungen kann demnach unkompliziert und sofort reagiert werden.\n\nVerbesserter Zugriff: Die Daten des Mailservers sind bei einer Cloud-Lösung jederzeit und von überall aus verfügbar. Je nach abgeschlossenem Service-Level-Agreement (SLA) kann beispielsweise auch eine Hochverfügbarkeit gewährleistet werden. Der Datenzugriff wird also im Vergleich zu einer On-Premises-Lösung erleichtert.\n\nWeitere mögliche organisatorische Vorteile, die erläutert werden könnten:\n– Verringerter Investitionsbedarf in Hardware und Personal\n– Verringerte Abhängigkeit von Hardware-Herstellern im eigenen Rechenzentrum\n– Einfachere Integration weiterer Dienste\n– Vereinfachte Benutzerverwaltung\n– Schnellere und planbarere Implementierung\n– Verbesserte Ausfallsicherheit\n– …',
    answerStatus: 'confirmed',
    sourcePage: 2,
  },
  {
    id: 'ap2-si-t1-2024-winter-q1-ab',
    examId: 'ap2-si-t1-2024-winter',
    questionNumber: 1,
    subPart: 'ab',
    topic: 'Cloud Computing',
    scenario: SCENARIO,
    question: 'ab) Erläutern Sie zwei Aspekte, die Sie vor der Auslagerung von IT-Systemen in die Cloud berücksichtigen sollten.',
    maxPoints: 4,
    modelSolution:
      'Datenschutz und Compliance: Je nach Cloud-Lösung könnten die Daten in verschiedenen Regionen oder Ländern gespeichert werden. Das kann Auswirkungen auf die Einhaltung von Datenschutzvorschriften wie z. B. die DSGVO haben und muss demnach berücksichtigt werden.\n\nIntegrationsfähigkeit bestehender Systeme: Vor einer Auslagerung von Systemen in die Cloud muss geprüft werden, ob diese Systeme anschließend wieder gut mit den noch verbleibenden Systemen des internen Rechenzentrums verbunden und integriert werden können.\n\nWeitere mögliche Aspekte, die erläutert werden könnten:\n– Migrationsaufwand\n– Kundensupport des Cloud-Anbieters\n– Abhängigkeit vom externen Dienstleister (Vendor Lock-in)\n– Beachtung der Wirtschaftlichkeit und Kostenstruktur (pay per use, flatrate …)\n– Verfügbarkeit / SLAs\n– Datensicherung und Wiederherstellung\n– …',
    answerStatus: 'confirmed',
    sourcePage: 2,
  },
  {
    id: 'ap2-si-t1-2024-winter-q1-ba',
    examId: 'ap2-si-t1-2024-winter',
    questionNumber: 1,
    subPart: 'ba',
    topic: 'Serverhardware / Beschaffung',
    scenario: SCENARIO,
    referenceText:
      'b) Wichtige Gründe haben die Firma überzeugt, doch am On-Premises-Konzept festzuhalten.\n\nba) Bisher wurde der Mailserver auf einem mittlerweile veralteten System betrieben, welches es nun zu erneuern gilt. Es wird erwartet, dass der Bedarf an Mailkonten für neue Mitarbeiter in den nächsten Jahren wachsen wird.\n\nTabelle Server-Vergleich:\nServer / Prozessor / RAM / Speicher / Netzwerkschnittstellen / Taktrate / Kerne / Preis\nDall PowerEcke T420 / 1 CPU / 32 GB / 240 GB SSD (max. 8 x 2,5" à 960 GB) / 2 x 1 GbE / 2,6 GHz / 10 / 4.500 EUR\nHapé Proviant L560 / 3 CPU / 64 GB / 2 x 240 GB SSD (max. 12 x 2,5" à 960GB) / 4 x 1 GbE + 2 x 10 GbE / 2,3 GHz / 36 / 6.000 EUR\nRenovo DenkSystem RS650 / 2 CPU / 64 GB / 2 x 480 GB SSD (max. 8 x 2,5" à 960 GB) / 6 x 1 GbE / 2,2 GHz / 20 / 6.500 EUR',
    question:
      'Erläutern Sie anhand der Tabelle und unter der Maßgabe, dass der Server auch in Zukunft den höchsten Anforderungen genügt, welcher Server am besten für den Einsatz als Mailserver geeignet ist.',
    maxPoints: 5,
    modelSolution:
      'Der Server Hapé Proviant L560 ist zu wählen, da nur dieser den höchsten Anforderungen genügt. Der Server hat die höchste Prozessorleistung sowie die modernste Netzwerkschnittstelle (10 GbE). Außerdem ist eine bestmögliche Erweiterbarkeit des Speichers gegeben (bis zu 12 x 960 GB statt max. 8 x 960 GB).\n\nWeiterführende Informationen: Üblicherweise werden Server-Systeme mit einem, zwei, vier oder acht CPU-Sockets bereitgestellt, die Verwendung von 3 CPUs ist demnach eher unüblich, aber möglich.\n\nErläuterung, warum die übrigen Server nicht gewählt werden sollten:\nDall PowerEcke T420 ist günstig, verfügt aber nur über eine schwache Leistung, eine sehr limitierte Netzwerkanbindung sowie wenig RAM. Außerdem ist der initial zur Verfügung stehende Speicher sehr gering und die Erweiterbarkeit ist im Vergleich zum Hapé Proviant L560 stärker limitiert. Der Server ist demnach nicht zu wählen.\nRenovo DenkSystem RS650 ist teurer als Hapé Proviant L560, bietet aber weniger Leistung, eine vergleichsweise limitierte Erweiterbarkeit des Speichers und es fehlt die modernere 10 GbE-Schnittstelle. Demnach ist der Server nicht zu wählen.',
    answerStatus: 'confirmed',
    sourcePage: 3,
  },
  {
    id: 'ap2-si-t1-2024-winter-q1-bb',
    examId: 'ap2-si-t1-2024-winter',
    questionNumber: 1,
    subPart: 'bb',
    topic: 'IT-Sicherheit / E-Mail',
    scenario: SCENARIO,
    question: 'bb) Nennen Sie sechs technisch-organisatorische Maßnahmen (TOM), um E-Mails vor Kompromittierung oder Verlust zu bewahren.',
    maxPoints: 6,
    modelSolution:
      '– Regelmäßige Backups sowie Möglichkeiten zur Wiederherstellung\n– Firewalls sowie Intrusion Detection/Prevention Systeme (IDS/IPS)\n– Verwenden einer unterbrechungsfreien Stromversorgung (USV)\n– Nutzung von geeigneten RAID-Systemen\n– Detailliertes Logging und Monitoring\n– Sensibilisierung und Schulung der Mitarbeiter\n– Berechtigungsmanagement (Zugriffsrechte und Rollenmanagement)\n– Verwendung redundanter Hardware\n– Physische Zugangskontrollen\n– Regelmäßige Sicherheitsüberprüfung des Servers\n– Geeignete Netzwerksegmentierung\n– Etablierung von Notfallplänen\n– …',
    answerStatus: 'confirmed',
    sourcePage: 3,
  },
  {
    id: 'ap2-si-t1-2024-winter-q1-bc',
    examId: 'ap2-si-t1-2024-winter',
    questionNumber: 1,
    subPart: 'bc',
    topic: 'Netzwerkverkabelung',
    scenario: SCENARIO,
    question:
      'bc) Beim Einbau des Mailservers im Rechenzentrum kommt nun die Frage auf, wie der Server zukünftig im Netzwerk angebunden sein soll.\n\nErläutern Sie einen Aspekt, der für den Einsatz von Lichtwellenleitern gegenüber Kupferkabeln in oder zwischen Rechenzentren spricht.',
    maxPoints: 3,
    modelSolution:
      'Höhere Übertragungsgeschwindigkeiten: Lichtwellenleiter (LWL) bzw. Glasfaserkabel unterstützen deutlich höhere Bandbreiten und Geschwindigkeiten im Vergleich zu Kupferkabeln. Besonders bei datenintensiven Anwendungen wie Mailservern können so große Datenmengen schnell übertragen werden.\n\nWeitere mögliche Aspekte, die erläutert werden können:\n– Verringerter Signalverlust und größere Reichweiten\n– Unempfindlich gegenüber elektromagnetischen Störungen\n– Erhöhte Sicherheit durch erschwertes Abhören\n– Langlebigkeit und Zukunftsfähigkeit (durch z. B. Multiplexing)\n– Kompaktere Bauweise\n– …',
    answerStatus: 'confirmed',
    sourcePage: 3,
  },

  // 2. Aufgabe (26 Punkte) — Mailinfrastruktur und digitale Zertifikate
  {
    id: 'ap2-si-t1-2024-winter-q2-a',
    examId: 'ap2-si-t1-2024-winter',
    questionNumber: 2,
    subPart: 'a',
    topic: 'Spam / Phishing',
    scenario: SCENARIO,
    question:
      '2. Aufgabe (26 Punkte)\n\nDie Retailers GmbH wird ihre neue Mail-Infrastruktur im hauseigenen Rechenzentrum betreiben. Die Mail-Infrastruktur besteht aus zwei Servern in einem Clusterverbund.\n\na) Die Retailers GmbH empfängt täglich viele Spam- und Phishing-Mails.\n\nErläutern Sie den Unterschied zwischen „Spam" und „Phishing".',
    maxPoints: 4,
    modelSolution:
      'Spam-Mails sind unerwünschte und oft massenhaft versendete E-Mails, die in der Regel Werbeinhalte enthalten. Sie werden nur selten gezielt verschickt. Phishing-Mails hingegen sind betrügerische Nachrichten, die darauf abzielen, persönliche Informationen wie z. B. Passwörter oder Kreditkartendaten zu erbeuten. Häufig werden Phishing-Mails auf spezifische Empfängergruppen zugeschnitten und gezielt verschickt.',
    answerStatus: 'confirmed',
    sourcePage: 4,
  },
  {
    id: 'ap2-si-t1-2024-winter-q2-ba',
    examId: 'ap2-si-t1-2024-winter',
    questionNumber: 2,
    subPart: 'ba',
    topic: 'DKIM / SPF',
    scenario: SCENARIO,
    referenceText:
      'b) Für den Einsatz von Sicherheitsmaßnahmen (Bsp.: Abwehrmaßnahmen gegen Phishingangriffe) sollen DKIM und SPF zum Einsatz kommen. Sie finden im Internet die folgende Erläuterung:\n\n"DKIM separates the question of the identity of the Signer of the message from the purported author of the message. In particular, a signature includes the identity of the Signer. Verifiers can use the signing information to decide how they want to process the message. The signing identity is included as part of the signature header field.\nDKIM differs from traditional hierarchical public-key systems in that no certificate authority infrastructure is required; the Verifier requests the public key from a repository in the domain of the claimed Signer directly rather than from a third party.\nThe DNS is proposed as the initial mechanism for the public keys. Thus, DKIM currently depends on DNS administration and the security of the DNS system. DKIM is designed to be extensible to other key fetching services as they become available."\n(Textquelle: https://datatracker.ietf.org/doc/html/rfc6376/)\n\n"An SPF record is a DNS record that declares which hosts are, and are not, authorized to use a domain name for the „HELO" and „MAIL FROM" identities.\nLoosely, the record partitions hosts into permitted and not-permitted sets (though some hosts might fall into neither category).\nThe SPF record is expressed as a single string of text found in the RDATA of a single DNS TXT resource record; multiple SPF records are not permitted for the same owner name."\nTextquelle: https://datatracker.ietf.org/doc/html/rfc7208\n\nHinweis: Für die nachfolgenden Aufgaben ist es nicht erforderlich, eine wörtliche Übersetzung und/oder die relevanten Textpassagen anzugeben, um die volle Punktzahl zu erreichen. Diese dienen hier nur der näheren Erläuterung.',
    question: 'ba) Nennen Sie die Stelle, an der die Signaturidentität in einer Mail enthalten ist.',
    maxPoints: 2,
    modelSolution:
      'Die Signaturidentität einer E-Mail, die mit DKIM signiert wurde, ist im Signatur-Header-Feld enthalten.\nRelevante Textpassage der Angabe: "The signing identity is included as part of the signature header field."',
    answerStatus: 'confirmed',
    sourcePage: 4,
  },
  {
    id: 'ap2-si-t1-2024-winter-q2-bb',
    examId: 'ap2-si-t1-2024-winter',
    questionNumber: 2,
    subPart: 'bb',
    topic: 'DKIM / SPF',
    scenario: SCENARIO,
    question: 'bb) Nennen Sie den aktuellen Mechanismus, wie der öffentliche Schlüssel zu finden ist.',
    maxPoints: 2,
    modelSolution:
      'Der aktuelle Mechanismus, um den öffentlichen Schlüssel für DKIM zu finden, ist die DNS-Abfrage.\nRelevante Textpassage der Angabe: "The DNS is proposed as the initial mechanism for the public keys."',
    answerStatus: 'confirmed',
    sourcePage: 4,
  },
  {
    id: 'ap2-si-t1-2024-winter-q2-bc',
    examId: 'ap2-si-t1-2024-winter',
    questionNumber: 2,
    subPart: 'bc',
    topic: 'DKIM / SPF',
    scenario: SCENARIO,
    question: 'bc) Nennen Sie die Stelle, an der ein SPF-Eintrag gesetzt wird.',
    maxPoints: 2,
    modelSolution:
      'Der SPF-Eintrag wird als DNS-Eintrag gesetzt.\nRelevante Textpassage der Angabe: "An SPF record is a DNS record that […]".',
    answerStatus: 'confirmed',
    sourcePage: 4,
  },
  {
    id: 'ap2-si-t1-2024-winter-q2-bd',
    examId: 'ap2-si-t1-2024-winter',
    questionNumber: 2,
    subPart: 'bd',
    topic: 'DKIM / SPF',
    scenario: SCENARIO,
    question: 'bd) Nennen Sie die Aufgabe des SPF-Eintrages.',
    maxPoints: 2,
    modelSolution:
      'Die Aufgabe des SPF-Eintrags ist es, zu deklarieren, welche Hosts autorisiert sind, eine bestimmte Domain für die „HELO"- und „MAIL FROM"-Identitäten zu verwenden.\nRelevante Textpassage der Angabe: „[…] that declares which hosts are, and are not, authorized to use a domain name for the „HELO" and „MAIL FROM" identities."',
    answerStatus: 'confirmed',
    sourcePage: 4,
  },
  {
    id: 'ap2-si-t1-2024-winter-q2-ca',
    examId: 'ap2-si-t1-2024-winter',
    questionNumber: 2,
    subPart: 'ca',
    topic: 'DKIM-Fehleranalyse',
    scenario: SCENARIO,
    referenceText:
      'c) Nach Einrichtung des Systems werden Sie mit der Analyse einiger betrieblicher Ereignisse betraut.\n\nca) Ein Mitarbeiter meldet an der zentralen IT-Hotline, dass eine E-Mail von einer externen Mailadresse in seinen Spam-Ordner einsortiert wurde. Nach einer Analyse finden Sie folgenden Fehler im Log-File:\n\nDKIM Verification Failed',
    question: 'Nennen Sie einen Grund für diese Fehlermeldung.',
    maxPoints: 2,
    modelSolution:
      'Mögliche Gründe dafür, dass die DKIM-Signatur nicht erfolgreich überprüft werden konnte:\n– Fehlerhafte DKIM-Signatur\n– DKIM-Signatur fehlt vollständig\n– Inhalte der E-Mail wurden nach der Signierung verändert\n– DNS-Timeouts bzw. -Fehler',
    answerStatus: 'confirmed',
    sourcePage: 5,
  },
  {
    id: 'ap2-si-t1-2024-winter-q2-cb',
    examId: 'ap2-si-t1-2024-winter',
    questionNumber: 2,
    subPart: 'cb',
    topic: 'Spam-Filter / Fehleranalyse',
    scenario: SCENARIO,
    referenceText:
      'cb) Für eine bessere Filterung von Spam-Mails wurde zusätzlich noch ein Spam-Filter installiert und konfiguriert.\n\nEin externer Geschäftspartner hat eine E-Mail an Ihren Mitarbeiter Herrn Anton gesendet und meldet sich bei Ihnen und teilt per Handy folgende Fehlermeldung als Screenshot mit:\n\n"This message was created automatically by mail delivery software.\nA message that you sent could not be delivered to one or more of its recipients. This is a permanent error. The following address(es) failed:\nanton@retailers.gmbh\n  host mail.retailers.gmbh\n  SMTP error from remote mail server after pipelined end of data:\n  554 5.7.1 Matched map: BLOCKLIST_SENDER_DOMAIN"',
    question: 'Nennen Sie den Grund für diese Fehlermeldung.',
    maxPoints: 2,
    modelSolution:
      'Die Maildomain des Geschäftspartners wurde durch einen Spam-Filter blockiert. Die Domain befindet sich scheinbar auf einer entsprechenden Sperrliste ("BLOCKLIST_SENDER_DOMAIN").',
    answerStatus: 'confirmed',
    sourcePage: 5,
  },
  {
    id: 'ap2-si-t1-2024-winter-q2-da',
    examId: 'ap2-si-t1-2024-winter',
    questionNumber: 2,
    subPart: 'da',
    topic: 'X.509-Zertifikate',
    scenario: SCENARIO,
    referenceText:
      'd) Die „Retailers GmbH" hat für ihre Mitarbeiter die Regelung zum Einsatz von persönlichen Zertifikaten sowie zur Signierung und Verschlüsselung von Mails erlassen.\n\nJeder Mitarbeiter hat ein persönliches X.509-Zertifikat erhalten und hat dieses in seinem System eingebunden.',
    question: 'da) Nennen Sie zwei Eigenschaften von persönlichen X.509-Zertifikaten.',
    maxPoints: 2,
    modelSolution:
      'Mögliche Eigenschaften eines X.509-Zertifikates:\n– Name des Inhabers\n– Gültigkeit (von, bis)\n– Öffentlicher Schlüssel\n– Zertifizierungsstelle (certificate authority – CA)\n– Eindeutige Seriennummer\n– Version\n– …',
    answerStatus: 'confirmed',
    sourcePage: 5,
  },
  {
    id: 'ap2-si-t1-2024-winter-q2-db',
    examId: 'ap2-si-t1-2024-winter',
    questionNumber: 2,
    subPart: 'db',
    topic: 'Asymmetrische Verschlüsselung / Signatur',
    scenario: SCENARIO,
    referenceText:
      'db) Herr Meier und Herr Anton besitzen jeweils einen öffentlichen und einen privaten Schlüssel, welche bereits korrekt auf ihren PC-Arbeitsplätzen installiert sind.\n\nAblaufdiagramm mit vier zu ergänzenden Lücken:\nSchritt 1: Herr Meier und Herr Anton tauschen ihre öffentlichen Schlüssel aus.\nSchritt 2: Herr Meier verfasst eine E-Mail und signiert diese mit ___________.\nSchritt 3: Herr Meier verschlüsselt diese E-Mail mit ___________.\nSchritt 4: Herr Meier sendet die signierte und verschlüsselte E-Mail an Herrn Anton.\nSchritt 5: Herr Anton entschlüsselt die empfangene E-Mail mit ___________.\nSchritt 6: Herr Anton überprüft die empfangene E-Mail mit ___________.',
    question:
      'Ergänzen Sie die vier unvollständigen Schritte in der Darstellung mit Angaben darüber, welcher Schlüssel von welchem Schlüsseleigentümer jeweils verwendet wird.',
    maxPoints: 8,
    modelSolution:
      'Herr Meier und Herr Anton tauschen ihre öffentlichen Schlüssel aus.\n↓\nHerr Meier verfasst eine E-Mail und signiert diese mit seinem privaten Schlüssel.\n↓\nHerr Meier verschlüsselt diese E-Mail mit dem öffentlichen Schlüssel von Herrn Anton.\n↓\nHerr Meier sendet die signierte und verschlüsselte E-Mail an Herrn Anton.\n↓\nHerr Anton entschlüsselt die empfangene E-Mail mit seinem privaten Schlüssel.\n↓\nHerr Anton überprüft die empfangene E-Mail mit dem öffentlichen Schlüssel von Herrn Meier.',
    answerStatus: 'confirmed',
    sourcePage: 6,
  },

  // 3. Aufgabe (25 Punkte) — RAID-Systeme
  {
    id: 'ap2-si-t1-2024-winter-q3-aa',
    examId: 'ap2-si-t1-2024-winter',
    questionNumber: 3,
    subPart: 'aa',
    topic: 'RAID / Nettospeicherkapazität',
    scenario: SCENARIO,
    referenceText:
      '3. Aufgabe (25 Punkte)\n\nDie Retailers GmbH soll für die Datensicherung, die Archivierung und das Datenrestore entsprechende Maßnahmen treffen.\n\na) Sie haben für die Nutzung in der Firma ein logisches Laufwerk mit einem RAID 15-Verbund eingerichtet. Dazu standen Ihnen folgende sechs Festplatten zur Verfügung.\n4 x Xconnext GD35612, Festplatte mit jeweils 2,5 TiB\n2 x Xconnext GD36442, Festplatte mit jeweils 3,5 TiB\n\nDiagramm: RAID 15 (= RAID 5 über drei gespiegelte RAID-1-Paare). Drei RAID-1-Gruppen, jede aus zwei Festplatten gebildet:\nGruppe 1: zwei Festplatten mit je den Blöcken A1, B1, CP\nGruppe 2: zwei Festplatten mit je den Blöcken A2, BP, C1\nGruppe 3: zwei Festplatten mit je den Blöcken AP, B2, C2\n(P kennzeichnet jeweils die Paritätsinformation der Zeile; die drei RAID-1-Gruppen bilden gemeinsam den RAID-5-Verbund der obersten Ebene.)',
    question: 'aa) Berechnen Sie die Nettospeicherkapazität dieses RAID 15-Verbunds. Der Rechenweg ist anzugeben.',
    maxPoints: 4,
    modelSolution:
      'Für die Nettospeicherkapazität relevante Festplatten:\n6 Festplatten – 4 Festplatten = 2 Festplatten\n\nBerechnung der Nettospeicherkapazität:\n2 x 2,5 TiB = 5,0 TiB\n\nWeiterführende Informationen: Durch das Mirroring innerhalb jedes RAID 1 ist jeweils eine Festplatte für die Berechnung der Nettospeicherkapazität abzuziehen. Statt 6 Festplatten stehen also nur noch 3 Festplatten zur Speicherung von Nutzdaten zur Verfügung.\nZusätzlich ist eine weitere Festplatte aufgrund der verwendeten Parität (RAID 5) abzuziehen. Es stehen also insgesamt nur 2 Festplatten für Nutzdaten zur Verfügung (siehe Angabe A1, A2 sowie B1, B2 und C1, C2).\nIn einem RAID werden die Daten immer gleichmäßig auf alle Festplatten verteilt, demnach ist immer die kleinste verwendete Festplattengröße entscheidend. Bei 4 x 2,5 TiB und 2 x 3,5 TiB werden einheitlich 2,5 TiB je Festplatte verwendet. Der übrige Speicherplatz bleibt ungenutzt.',
    answerStatus: 'confirmed',
    sourcePage: 7,
  },
  {
    id: 'ap2-si-t1-2024-winter-q3-ab',
    examId: 'ap2-si-t1-2024-winter',
    questionNumber: 3,
    subPart: 'ab',
    topic: 'RAID / Nettospeicherkapazität',
    scenario: SCENARIO,
    referenceText: 'Siehe Angaben zu den sechs Festplatten und dem RAID 15-Verbund unter aa).',
    question:
      'ab) Ermitteln Sie die RAID-Konfiguration, mit der bei Verwendung der gegebenen Festplatten die größte Nettospeicherkapazität erzielt wird. Bedingung: Das RAID-System muss Ausfallsicherheit gewährleisten. Berechnen Sie diese Nettospeicherkapazität in GiB unter Angabe des Rechenwegs.',
    maxPoints: 4,
    modelSolution:
      'RAID-Konfiguration mit Ausfallsicherheit und größtmöglicher Nettospeicherkapazität: RAID 5\n\nBerechnung der Nettospeicherkapazität:\n(6 x 2,5 TiB) – (1 x 2,5 TiB) = 12,5 TiB\n\nWeiterführende Informationen: Eine höhere Nettospeicherkapazität lässt sich nur durch RAID 0 erreichen, hierbei fehlt aber die Redundanz und demnach kann keine Ausfallsicherheit gegeben werden. Streng genommen zählt es demnach auch nicht zu den RAID-Systemen.\n\nErrechneter nutzbarer Speicher bei Verwendung anderer beispielhafter RAID-Level:\nRAID 1: 7,5 TiB\nRAID 6: 10,0 TiB\nRAID 10: 7,5 TiB',
    answerStatus: 'confirmed',
    sourcePage: 7,
  },
  {
    id: 'ap2-si-t1-2024-winter-q3-ac',
    examId: 'ap2-si-t1-2024-winter',
    questionNumber: 3,
    subPart: 'ac',
    topic: 'Hot-Spare',
    scenario: SCENARIO,
    question:
      'ac) Der RAID 15-Verbund soll zusätzlich noch mit einer Hot-Spare-Festplatte betrieben werden.\n\nErläutern Sie die Funktion einer Hot-Spare-Festplatte.',
    maxPoints: 2,
    modelSolution:
      'Bei einer Hot-Spare-Festplatte handelt es sich um eine zusätzliche, nicht direkt verwendbare Festplatte. Fällt eine Festplatte im RAID-Verbund aus, tritt die Hot-Spare-Festplatte vollautomatisch an deren Stelle.\n\nWeiterführende Information: Da es sich um einen Tausch im laufenden Betrieb (Hot) handelt und die Festplatte eine Reserve (Spare) darstellt, wird die zusätzliche Festplatte als Hot-Spare-Festplatte bezeichnet.',
    answerStatus: 'confirmed',
    sourcePage: 7,
  },
  {
    id: 'ap2-si-t1-2024-winter-q3-ad',
    examId: 'ap2-si-t1-2024-winter',
    questionNumber: 3,
    subPart: 'ad',
    topic: 'JBOD',
    scenario: SCENARIO,
    question:
      'ad) Es wird diskutiert, alle aufgeführten Festplatten als JBOD (Just a Bunch of Disks) zu nutzen.\n\nErläutern Sie anhand von drei Aspekten, warum der Einsatz von JBOD nicht praktikabel ist.',
    maxPoints: 6,
    modelSolution:
      'Keine Ausfallsicherheit: Bei JBOD werden lediglich mehrere Festplatten zu einer einzigen logischen Festplatte verbunden. Beim Ausfall einer Festplatte ist das gesamte logische Volumen gefährdet.\n\nKeine Redundanz: Im Gegensatz zu RAID-Systemen werden bei JBOD keinerlei Datenkopien oder Paritäten angelegt, dadurch steigt das Risiko von Datenverlust erheblich, da Daten nicht wiederhergestellt werden können.\n\nVerschlechterte Performance: JBOD behandelt jede Festplatte unabhängig voneinander und verwendet weder Lastverteilung noch Striping. Im Vergleich zu RAID-Systemen führt dies zu deutlich schlechterer Performance, insbesondere bei gleichzeitigen Zugriffen.\n\nWeitere mögliche Aspekte, die für eine Erläuterung genutzt werden könnten:\n– Verschlechterte Datenintegrität aufgrund fehlender Paritätsprüfungen oder Fehlerkorrekturen\n– Begrenzte Skalierbarkeit\n– Höhere Kosten bei Ausfällen\n– Keine Möglichkeit, Hot-Spare-Festplatten zu integrieren\n– …',
    answerStatus: 'confirmed',
    sourcePage: 7,
  },
  {
    id: 'ap2-si-t1-2024-winter-q3-b',
    examId: 'ap2-si-t1-2024-winter',
    questionNumber: 3,
    subPart: 'b',
    topic: 'Datendeduplizierung',
    scenario: SCENARIO,
    referenceText:
      'Fortsetzung 3. Aufgabe\n\nb) Bei der Speicherung von Daten soll der Prozess der Datendeduplizierung eingeführt werden.\n\n"Deduplication segments an incoming data stream, uniquely identifies data segments, and then compares the segments to previously stored data. If the segment is unique, it\'s stored on disk. However, if an incoming data segment is a duplicate of what has already been stored, a reference is created to it and the segment isn\'t stored again.\nFor example, a file or volume that\'s backed up every week creates a significant amount of duplicate data. Deduplication algorithms analyze the data and store only the compressed, unique segments of a file. This process can provide an average of 10 to 30 times reduction in storage capacity requirements, with average backup retention policies on normal enterprise data. This means that companies can store 10 TB to 30 TB of backup data on 1 TB of physical disk capacity, which has huge economic benefits."\nQuelle: https://www.dell.com/en-us/lp/data-de-duplication',
    question: 'Nennen Sie anhand des Textes zwei Vorteile, die für den Einsatz sprechen.',
    maxPoints: 4,
    modelSolution:
      'Reduktion des Speicherbedarfs\nRelevante Textpassage der Angabe: "[…] can provide an average of 10 to 30 times reduction in storage capacity requirements […]".\n\nEnorme wirtschaftliche Einsparungen\nRelevante Textpassage der Angabe: "[…] which has huge economic benefits […]".\n\nVerringerte Anzahl von doppelten Daten\nRelevante Textpassage der Angabe: "[…] store only the compressed, unique segments of a file […]".\n\nHinweis: Für diese Aufgaben ist es nicht erforderlich, eine wörtliche Übersetzung und/oder die relevanten Textpassagen anzugeben, um die volle Punktzahl zu erreichen.',
    answerStatus: 'confirmed',
    sourcePage: 8,
  },
  {
    id: 'ap2-si-t1-2024-winter-q3-c',
    examId: 'ap2-si-t1-2024-winter',
    questionNumber: 3,
    subPart: 'c',
    topic: 'SAN-Kapazitätsplanung',
    scenario: SCENARIO,
    question:
      'c) Die Firmendaten werden zurzeit auf einem veralteten SAN mit einer Nettospeicherkapazität von 12 TiB gespeichert. Aufgrund des Alters und der Kapazitätsauslastung des Systems von 90 % hat man sich entschlossen, ein neues SAN-System zu beschaffen.\n\nIm neuen SAN-System können maximal 30 Festplatten vom Typ SAS 2100X mit einer Speicherkapazität von je 2,5 TiB verbaut werden. Der jährliche Datenzuwachs beträgt 650 GiB.\n\nBerechnen Sie die benötigte Nettospeicherkapazität bei einer Übernahme des Altdatenbestands und einer geplanten Laufzeit des neuen SAN von drei Jahren unter Angabe des Rechenwegs. Das Ergebnis ist in TiB und auf eine Stelle nach dem Komma anzugeben.',
    maxPoints: 5,
    modelSolution:
      'Datenbestand des alten SAN:\n12 TiB x 0,9 (90 % Auslastung) = 10,8 TiB\n10,8 TiB * 1.024 = 11.059,2 GiB\n\nDatenzuwachs:\n650 GiB x 3 Jahre = 1.950 GiB\n\nBenötigte Nettospeicherkapazität:\n11.059,2 GiB + 1.950 GiB = 13.009,2 GiB\n13.009,2 GiB / 1.024 = 12,7042969 TiB → ≈ 12,8 TiB\n\nWeiterführende Informationen: Bei Berechnungen zu voraussichtlich benötigten Speicherkapazitäten ist es immer sinnvoll, aufzurunden.\nDie übrigen Angaben der Aufgabenstellung (30 Festplatten mit je 2,5 TiB) werden nicht benötigt und sind für die Beantwortung der Fragestellung nicht relevant.',
    answerStatus: 'confirmed',
    sourcePage: 8,
  },

  // 4. Aufgabe (25 Punkte) — Monitoring von Systemen
  {
    id: 'ap2-si-t1-2024-winter-q4-aa',
    examId: 'ap2-si-t1-2024-winter',
    questionNumber: 4,
    subPart: 'aa',
    topic: 'Programmierung (Arrays, Fehlersuche)',
    scenario: SCENARIO,
    referenceText:
      '4. Aufgabe (25 Punkte)\n\nSie wirken bei der Entwicklung von Skripten zur Systemverwaltung mit und sollen folgende, aus prüfungstechnischen Gründen stark vereinfachte Aufgabe erledigen.\n\na) Ein Monitoring-Programm soll um die Methode „Mittelwerte" erweitert werden, welche von jeweils drei aufeinanderfolgenden Werten im Array PerfCPU den Mittelwert berechnet. Gestartet wird mit den ersten drei Werten „40, 42, 47" in PerfCPU. Der Mittelwert beträgt „43" und ersetzt die „42", die Werte „40" und „47" werden mit „0" überschrieben.\n\nAus den ursprünglichen Werten 40, 42, 47 wird somit „0, 43, 0".\n\nDanach wird mit den jeweils nächsten drei Werten bis zum Ende des Arrays entsprechend verfahren.\n\nArray PerfCPU: Inhalt vor Durchlauf der Methode „Mittelwerte"\nIndex: 0 1 2 3 4 5 6 7 8\nWert: 40 42 47 52 50 60 76 77 81\n\nArray PerfCPU: gewünschter Inhalt nach Durchlauf der Methode „Mittelwerte"\nIndex: 0 1 2 3 4 5 6 7 8\nWert: 0 43 0 0 54 0 0 78 0\n\nQuellcode:\nZeile1  //Test-Array anlegen und mit Test-Daten füllen\nZeile2  int[] PerfCPU = new int[] {40,42,47,52,50,60,76,77,81};\nZeile3  //Variable deklarieren\nZeile4  int temp = 0;\nZeile5  //Schleife zum Berechnen und Speichern der Mittelwerte\nZeile6  for (int i = 1; i < 6; i += 3)\nZeile7  {\nZeile8      temp = ((PerfCPU [i - 1]) + (PerfCPU [i]) + (PerfCPU [i + 1])) / 3;\nZeile9      PerfCPU [i] = 0; PerfCPU [i-1] = temp; PerfCPU[i + 1] = 0;\nZeile10 }\n\nHinweis: In der perforierten Anlage auf Seite 9 finden Sie Erläuterungen zu der verwendeten Syntax (Schleifenarten, Wertzuweisung in Kurzform "i += 3", Auswahlanweisungen, Kommentare, Konsolenausgabe).',
    question:
      'aa) Stellen Sie fest, ob der Quellcode entsprechend der Beschreibung die gewünschten Ergebnisse liefert. Analysieren Sie dazu schrittweise den Quellcode und tragen Sie die ermittelten Werte in die vorgesehenen Felder ein.\n\nArray PerfCPU: Inhalt nach Durchlauf der Methode „Mittelwerte" — Array-Index 0 bis 8, jeweiliger Array-Wert ist einzutragen.',
    maxPoints: 9,
    modelSolution:
      'Array-Index: 0 1 2 3 4 5 6 7 8\nArray-Wert:  43 0 0 54 0 0 76 77 81\n\n(Der Quellcode liefert somit NICHT die gewünschten Werte: gewünscht wäre „0, 43, 0, 0, 54, 0, 0, 78, 0", tatsächlich berechnet wird „43, 0, 0, 54, 0, 0, 76, 77, 81".)',
    answerStatus: 'confirmed',
    sourcePage: 11,
  },
  {
    id: 'ap2-si-t1-2024-winter-q4-ab',
    examId: 'ap2-si-t1-2024-winter',
    questionNumber: 4,
    subPart: 'ab',
    topic: 'Programmierung (Fehlerbehebung)',
    scenario: SCENARIO,
    referenceText:
      'Vorlage-Tabelle mit den Spalten „Programmzeile" und „Anweisung" (leer, auszufüllen). Siehe Quellcode der Methode „Mittelwerte" unter aa).',
    question:
      'ab) Der Programmcode liefert offensichtlich nicht die gewünschten Werte. Dafür verantwortlich sind zwei fehlerhafte Anweisungen im Programmcode.\n\nGeben Sie die zwei Anweisungen in korrekter Form an.',
    maxPoints: 10,
    modelSolution:
      'Programmzeile 6: For (int i = 1; i < 8; i += 3)\nProgrammzeile 9: PerfCPU [i -1] = 0; PerfCPU [i] = temp; PerfCPU [i + 1] = 0;\n\nWeiterführende Informationen:\nZeile 6: „i < 6" ist falsch, da hierdurch das Array nicht vollständig durchlaufen wird.\nZeile 9: „[i] = 0" sowie „[i -1] = temp" ist falsch, da hierdurch der Mittelwert nicht an der korrekten Position gespeichert wird.\n\nWeitere Lösungen sind möglich, beispielsweise „i < 9" oder „i < 10" in Zeile 6.',
    answerStatus: 'confirmed',
    sourcePage: 11,
  },
  {
    id: 'ap2-si-t1-2024-winter-q4-ba',
    examId: 'ap2-si-t1-2024-winter',
    questionNumber: 4,
    subPart: 'ba',
    topic: 'CSV-Dateien',
    scenario: SCENARIO,
    question:
      'Fortsetzung 4. Aufgabe\n\nb) Die Daten des Arrays sollen zusammen mit weiteren Daten in einer CSV-Datei gespeichert werden.\n\nba) Erläutern Sie zwei Argumente, die für die Verwendung von CSV-Dateien sprechen.',
    maxPoints: 4,
    modelSolution:
      'Einfache Lesbarkeit: Da es sich um eine Textdatei handelt, welche einfach aufgebaut ist, ist eine CSV-Datei sowohl für Menschen als auch Programme leicht lesbar und verständlich.\n\nSehr gute Kompatibilität: Das tabellenähnliche Dateiformat, in dem Felder meist durch Kommas getrennt werden, ist einfach adaptier- und verwendbar. Daher wird CSV als Standardformat in vielen Anwendungen wie Excel, MySQL, SPSS etc. unterstützt.\n\nWeitere mögliche Argumente, die für eine Erläuterung genutzt werden könnten:\n– Geringer Speicherbedarf\n– Einfache Erstellung, Bearbeitung und Konvertierung\n– Plattformunabhängigkeit (z. B. Betriebssysteme)\n– …',
    answerStatus: 'confirmed',
    sourcePage: 12,
  },
  {
    id: 'ap2-si-t1-2024-winter-q4-bb',
    examId: 'ap2-si-t1-2024-winter',
    questionNumber: 4,
    subPart: 'bb',
    topic: 'CSV-Dateien',
    scenario: SCENARIO,
    question: 'bb) Erläutern Sie ein Argument, das gegen die Verwendung von CSV-Dateien spricht.',
    maxPoints: 2,
    modelSolution:
      'Kein standardisiertes Format: CSV steht zwar für „comma-separated values", häufig werden aber auch alternative Trennzeichen wie z. B. Tabulator oder Semikolon verwendet. Die Zeichenkodierung ist ebenfalls nicht festgelegt. Falsche Annahmen könnten also zu erhöhten Aufwänden bei der Verwendung von CSV-Dateien führen.\n\nWeitere mögliche Argumente, die für eine Erläuterung genutzt werden könnten:\n– Keine Unterstützung von Datentypen\n– Nicht für große Datenmengen geeignet\n– Keine Fehlerbehandlungsmechanismen\n– …',
    answerStatus: 'confirmed',
    sourcePage: 12,
  },
]
