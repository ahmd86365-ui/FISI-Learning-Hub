import type { ApExamMeta, ApExamQuestion } from '../../types/apExam'

export const ap2SiT1_2025SommerMeta: ApExamMeta = {
  id: 'ap2-si-t1-2025-sommer',
  area: 'AP2_SI_T1',
  year: 2025,
  period: 'Sommer',
  label: 'Sommer 2025',
  examDate: 'Mittwoch, 7. Mai 2025',
  examTitle: 'Konzeption und Administration von IT-Systemen',
  courseCode: '1202',
  sourceExamPdf: 'SI_AP2_T1_25s.pdf',
  sourceSolutionPdf: 'Loe_SI_AP2_T1_25s.pdf',
  solutionSource: 'confirmed',
  taskCount: 4,
  durationMinutes: 90,
  totalPoints: 100,
}

const SCENARIO =
  'Die Aufgaben 1 bis 4 beziehen sich auf die folgende Ausgangssituation:\n\nSie sind bei der Retailer GmbH als Fachinformatiker für Systemintegration beschäftigt. Die Retailer GmbH ist ein mittelständisches Unternehmen im Bereich Logistik. Die IT-Systeme der Retailer GmbH werden laufend weiterentwickelt.\n\nIn diesem Zusammenhang sollen Sie die folgenden vier Aufgaben bearbeiten:\n1. IT-Systeme planen und konfigurieren\n2. Die Verfügbarkeit der Dienste sicherstellen\n3. Mobile Endgeräte verwalten\n4. Systemsoftware entwickeln'

export const ap2SiT1_2025SommerQuestions: ApExamQuestion[] = [
  // 1. Aufgabe (26 Punkte) — IT-Systeme planen und konfigurieren
  {
    id: 'ap2-si-t1-2025-sommer-q1-aa',
    examId: 'ap2-si-t1-2025-sommer',
    questionNumber: 1,
    subPart: 'aa',
    topic: 'Virtualisierung',
    scenario: SCENARIO,
    question:
      '1. Aufgabe (26 Punkte)\n\nDie Retailer GmbH benötigt aus Kapazitätsgründen eine leistungsstärkere Plattform für den E-Mail-Dienst.\n\na) Der E-Mail-Dienst lief bislang auf einem physischen Server.\n\naa) Sie sollen prüfen, inwieweit es für die Retailer GmbH vorteilhaft ist, den E-Mail-Dienst in einer virtuellen Maschine zu betreiben.\n\nErläutern Sie je drei Vorteile und Nachteile einer Virtualisierung von Servern.\nVorteile einer Virtualisierung:\nNachteile einer Virtualisierung:',
    maxPoints: 6,
    modelSolution:
      'Vorteile einer Virtualisierung:\n– Verbesserte Auslastung der Hardware (mehrere virtuelle Server auf einem physischen Server)\n– Kosteneinsparung durch weniger physische Hardware\n– Geringerer Energieverbrauch durch weniger physische Hardware\n– Höhere Flexibilität\n– Schnellere Backups und Wiederherstellungen\n– …\n\nNachteile einer Virtualisierung:\n– Komplexere Verwaltung / Administration der Infrastruktur\n– Zusätzliche Lizenzkosten oder Kosten für zertifizierte Hardware\n– Beim Ausfall des Hostsystems sind mehrere virtuelle Server betroffen\n– Performanceprobleme bei I/O-intensiven Anwendungen\n– Leistungsstarke Hardware zwingend erforderlich\n– …',
    answerStatus: 'confirmed',
    sourcePage: 2,
  },
  {
    id: 'ap2-si-t1-2025-sommer-q1-ab',
    examId: 'ap2-si-t1-2025-sommer',
    questionNumber: 1,
    subPart: 'ab',
    topic: 'Hypervisor',
    scenario: SCENARIO,
    referenceText:
      'Tabelle mit den Spalten "Typ-1-Hypervisor (native oder bare-metal)" und "Typ-2-Hypervisor (gehostet)" und den Zeilen: "Erläutern Sie kurz den jeweiligen Hypervisor-Typ.", "Geben Sie für die beiden Hypervisor-Typen je ein sinnvolles Einsatzbeispiel an.", "Geben Sie für die beiden Hypervisor-Typen je ein marktgängiges Produkt an."',
    question:
      'ab) Zur weiteren Entscheidungsfindung über eine eventuelle Virtualisierung des E-Mail-Dienstes sollen Sie über den Typ-1-Hypervisor und über den Typ-2-Hypervisor informieren.\n\nErgänzen Sie dazu die Tabelle.',
    maxPoints: 8,
    modelSolution:
      'Typ-1-Hypervisor (native oder bare-metal):\nErläuterung: Virtualisierungssoftware, die direkt auf der Hardware-Ebene aufsetzt und direkten Zugriff auf diese hat.\nEinsatzbeispiel: Mehrheitlich in Rechenzentren zur Bereitstellung von Server-Diensten …\nMarktgängiges Produkt: KVM, VMware vSphere, Microsoft Hyper-V, Xen, …\n\nTyp-2-Hypervisor (gehostet):\nErläuterung: Virtualisierungssoftware, die auf einem bereits installierten Betriebssystem läuft und sich wie eine Anwendung verhält.\nEinsatzbeispiel: Einsatz größtenteils im Bereich von Arbeitsplätzen und im privaten Umfeld zum Test und zur Entwicklung von Software …\nMarktgängiges Produkt: Parallels, VMware Workstation (Player/Pro), VMware Fusion, VirtualBox (Oracle), …',
    answerStatus: 'confirmed',
    sourcePage: 2,
  },
  {
    id: 'ap2-si-t1-2025-sommer-q1-ba',
    examId: 'ap2-si-t1-2025-sommer',
    questionNumber: 1,
    subPart: 'ba',
    topic: 'RAID / Speicherkapazität',
    scenario: SCENARIO,
    referenceText:
      'Für die Datenspeicherung wird zurzeit ein RAID-6-Verbund mit einer Nettospeicherkapazität von 80 TiB verwendet. Die Nettospeicherkapazität des RAID-6-Verbunds soll verdoppelt werden. Im RAID-6-Verbund sind Festplatten mit einer Kapazität von je 8 TiB verbaut.',
    question:
      'b)\nba) Berechnen Sie nachvollziehbar, wie viele Festplatten mit einer Kapazität von je 8 TiB für die Erweiterung des RAID-6-Verbunds auf 160 TiB benötigt werden.',
    maxPoints: 2,
    modelSolution:
      'Berechnung des zusätzlichen Speicherbedarfs:\n160 TiB – 80 TiB = 80 TiB\n\nBerechnung der zusätzlich benötigten Festplatten:\n80 TiB / 8 TiB je Festplatte = 10 Festplatten\n\nEs werden 10 zusätzliche Festplatten benötigt.',
    answerStatus: 'confirmed',
    sourcePage: 3,
  },
  {
    id: 'ap2-si-t1-2025-sommer-q1-bb',
    examId: 'ap2-si-t1-2025-sommer',
    questionNumber: 1,
    subPart: 'bb',
    topic: 'RAID-Ausfallsicherheit',
    scenario: SCENARIO,
    question:
      'bb) Im Zuge der Erweiterung des RAID-Verbunds wird die Sicherheit der Daten gegen Verlust bei einem Festplattenausfall in einem RAID-10-Verbund und in einem RAID-6-Verbund verglichen.\n\nErläutern Sie den Sachverhalt am Beispiel eines gleichzeitigen Ausfalls von zwei Festplatten.',
    maxPoints: 3,
    modelSolution:
      'In einem RAID-6-Verbund entsteht durch die doppelt verteilten Paritätsinformationen kein Datenverlust beim gleichzeitigen Ausfall zwei beliebiger Festplatten.\n\nBei einem RAID-10-Verbund hängt die Datensicherheit davon ab, welche Festplatten ausfallen. Sind beide Festplatten eines Spiegelpaares betroffen, gehen die Daten verloren. Sind zwei Festplatten unterschiedlicher Spiegelpaare betroffen, bleiben die Daten erhalten.',
    answerStatus: 'confirmed',
    sourcePage: 3,
  },
  {
    id: 'ap2-si-t1-2025-sommer-q1-bc',
    examId: 'ap2-si-t1-2025-sommer',
    questionNumber: 1,
    subPart: 'bc',
    topic: 'RAID-Kapazität',
    scenario: SCENARIO,
    question:
      'bc) Als weiteres Entscheidungskriterium für einen möglichen Wechsel von RAID 6 auf RAID 10 soll die jeweils verfügbare Nettospeicherkapazität betrachtet werden.\n\nBerechnen Sie nachvollziehbar die Nettospeicherkapazität für einen RAID-10-Verbund mit der Anzahl Festplatten des erweiterten RAID-6-Verbunds aus ba).\n\nHinweis: Sollten Sie ba) nicht bearbeitet haben, gehen Sie von zwölf Festplatten für die Erweiterung des RAID 6 aus.',
    maxPoints: 2,
    modelSolution:
      'Anzahl Festplatten des erweiterten RAID-6-Verbundes (Aufgabe ba):\n12 Festplatten je 8 TiB (Nettospeicherkapazität RAID-6: 80 TiB)\n10 zusätzliche Festplatten je 8 TiB (Erweiterung der Nettospeicherkapazität des RAID-6-Verbundes um weitere 80 TiB)\n→ 12 Festplatten + 10 Festplatten = 22 Festplatten\n\nNutzbarer Anteil der Festplatten: 22 Festplatten * 0,5 = 11 Festplatten\nNettospeicherkapazität RAID-10-Verbund: 11 Festplatten * 8 TiB = 88 TiB\n\nDie Nettospeicherkapazität für den RAID-10-Verbund mit der Anzahl Festplatten des erweiterten RAID-6-Verbundes beträgt 88 TiB.\n\nAlternative Lösung, sollte mit zwölf zusätzlichen Festplatten (gemäß Hinweis) gerechnet werden:\n12 Festplatten + 12 Festplatten = 24 Festplatten\nNutzbarer Anteil der Festplatten: 24 Festplatten * 0,5 = 12 Festplatten\nNettospeicherkapazität RAID-10-Verbund: 12 Festplatten * 8 TiB = 96 TiB',
    answerStatus: 'confirmed',
    sourcePage: 3,
  },
  {
    id: 'ap2-si-t1-2025-sommer-q1-c',
    examId: 'ap2-si-t1-2025-sommer',
    questionNumber: 1,
    subPart: 'c',
    topic: 'USV / Notstromversorgung',
    scenario: SCENARIO,
    referenceText:
      'Die Server der Retailer GmbH haben zusammen eine maximale Leistungsaufnahme von 600 VA. Diese sind an eine USV mit einer Ausgangsleistung von 2.400 VA angeschlossen. Bei vollständig geladenen Akkus kann die USV die Server rechnerisch 60 Minuten lang mit Strom versorgen.\n\nBei Stromausfall soll zunächst die USV die Server so lange mit Strom versorgen, bis die Akkuladung auf 30 % abgesunken ist. Dann soll ein Notstromaggregat die Stromversorgung der Server übernehmen. Das Notstromaggregat benötigt vom Start bis zur vollständigen Betriebsbereitschaft drei Minuten.',
    question:
      'c) Berechnen Sie nachvollziehbar, bei welchem prozentualen Ladungsstand der Start des Notstromaggregates eingeleitet werden muss.',
    maxPoints: 5,
    modelSolution:
      'Relevante Angaben der Aufgabenstellung:\nMaximale Überbrückungsdauer durch die USV: 60 Minuten\nEnde der Stromversorgung durch die USV: Akkuladung bei 30 %\nStartdauer des Notstromaggregats: 3 Minuten\n\nBenötigter Ladungsstand (%) je Überbrückungsdauer:\n60 Minuten Überbrückungsdauer ≙ 100 % Ladungsstand\n0,6 Minuten Überbrückungsdauer ≙ 1 % Ladungsstand\n3 Minuten Überbrückungsdauer ≙ 5 % Ladungsstand\n\nBerechnung des Ladungsstands (%) beim Start des Notstromaggregates:\n30 % (Ende der Stromversorgung durch die USV) + 5 % (Startzeit des Notstromaggregats) = 35 %\n\nDer Start des Notstromaggregates muss bei einem prozentualen Ladungsstand von 35 % eingeleitet werden.',
    answerStatus: 'confirmed',
    sourcePage: 3,
  },

  // 2. Aufgabe (27 Punkte) — Die Verfügbarkeit der Dienste sicherstellen
  {
    id: 'ap2-si-t1-2025-sommer-q2-a',
    examId: 'ap2-si-t1-2025-sommer',
    questionNumber: 2,
    subPart: 'a',
    topic: 'Datenschutz / DSGVO',
    scenario: SCENARIO,
    referenceText:
      'Bei der Retailer GmbH ist es Angreifern gelungen, firmenkritische Daten – einschließlich Kundeninformationen – im SAN zu verschlüsseln. Sie wirken an der Untersuchung des Vorfalls und der Datenwiederherstellung mit. Anschließend sollen Sie Maßnahmen zur Verbesserung der IT-Sicherheit vorschlagen.',
    question:
      '2. Aufgabe (27 Punkte)\n\na) Erste Analysen deuten darauf hin, dass es sich gemäß DSGVO um einen erheblichen IT-Sicherheitsvorfall handelt. In solchen Fällen ist zu prüfen, ob die betroffenen Kunden darüber informiert werden müssen.\n\nNennen Sie drei datenschutzrelevante Kriterien, die darüber entscheiden, ob eine Information erfolgen muss.',
    maxPoints: 3,
    modelSolution:
      'Mögliche datenschutzrelevante Kriterien:\n– Art und Sensibilität der betroffenen Daten\n– Wahrscheinlichkeit eines hohen Risikos für Rechte und Freiheiten\n– Unbefugter Zugriff auf die Daten\n– Missbräuchliche Verwendung der Daten\n– Veränderung der Daten\n– Möglichkeit zur Wiederherstellung der Daten\n– …',
    answerStatus: 'confirmed',
    sourcePage: 4,
  },
  {
    id: 'ap2-si-t1-2025-sommer-q2-b',
    examId: 'ap2-si-t1-2025-sommer',
    questionNumber: 2,
    subPart: 'b',
    topic: 'Backup / Datenwiederherstellung',
    scenario: SCENARIO,
    referenceText:
      'Originale der kompromittierten Daten liegen in einem kürzlich erstellten Voll-Backup auf einem LTO-Medium vor. Die Wiederherstellung der Daten vom Bandlaufwerk dauert mehr als acht Stunden. Daten, die seit dem letzten Backup neu erstellt wurden, können nicht wiederhergestellt werden. Dies verursacht erhebliche wirtschaftliche Schäden für die Retailer GmbH.',
    question:
      'b) Um Derartiges zukünftig auszuschließen, sollen Sie einen Vorschlag zur Verkürzung der erforderlichen Zeit für die Datenwiederherstellung und einen Vorschlag zur Vermeidung des Verlusts noch nicht gesicherter Daten ausarbeiten und erläutern.\nVerkürzung der Zeit für die Datenwiederherstellung:\nVermeidung von Datenverlust:',
    maxPoints: 6,
    modelSolution:
      'Verkürzung der Zeit für die Datenwiederherstellung:\nUm die lange Wiederherstellungszeit vom Band (LTO) zu vermeiden, sollten die Backups zunächst auf eine Festplatte geschrieben werden. Von dort können sie bei Bedarf schnell wiederhergestellt werden. Zusätzlich kann im Hintergrund eine Sicherung auf Band erfolgen. Dieses Verfahren nennt man Disk-to-Disk-to-Tape (D2D2T). Die Festplatte sorgt für schnelle Wiederherstellung, das Band dient der Langzeitarchivierung.\nBeispielhafte alternative Lösung: Cloud-Backup\n\nVermeidung von Datenverlust:\nUm neu erstellte oder geänderte Daten abzusichern, sollten regelmäßig inkrementelle Backups in kurzen Abständen auf einem schnellen Speichermedium durchgeführt werden. Dabei werden nur die seit dem letzten Backup geänderten Daten gesichert, was Zeit und Speicher spart.\nBeispielhafte alternative Lösung: Kontinuierliche Datensicherung (CDP)',
    answerStatus: 'confirmed',
    sourcePage: 4,
  },
  {
    id: 'ap2-si-t1-2025-sommer-q2-c',
    examId: 'ap2-si-t1-2025-sommer',
    questionNumber: 2,
    subPart: 'c',
    topic: '3-2-1-Backup-Regel',
    scenario: SCENARIO,
    question:
      'c) Bei der Weiterentwicklung des Datensicherungskonzepts soll auch die 3-2-1-Regel für Backups berücksichtigt werden.\n\nEntwickeln Sie einen dieser Regel entsprechenden Vorschlag für die Datenhaltung bei der Retailer GmbH und erläutern Sie diesen.',
    maxPoints: 4,
    modelSolution:
      'Die 3-2-1-Regel fordert drei Datenkopien auf zwei verschiedenen Speichermedien, davon eine extern. Die Retailer GmbH kann dies umsetzen, indem die Originaldaten im System bleiben, eine Kopie lokal auf einem NAS gesichert wird und eine weitere extern z. B. in der Cloud oder auf Band an einem anderen Ort gespeichert wird. So sind die Daten auch bei Ausfällen oder Schäden gut geschützt.',
    answerStatus: 'confirmed',
    sourcePage: 4,
  },
  {
    id: 'ap2-si-t1-2025-sommer-q2-d',
    examId: 'ap2-si-t1-2025-sommer',
    questionNumber: 2,
    subPart: 'd',
    topic: 'System-Härtung',
    scenario: SCENARIO,
    referenceText:
      'Aufgrund des stattgefundenen IT-Sicherheitsvorfalls sollen umgehend Schutzmaßnahmen eingeleitet werden. Die IT-Sicherheit der Server und Clients soll durch eine „System-Härtung" verbessert werden. Dazu zählen Maßnahmen, wie z. B. die Sicherstellung der Aktualität der installierten Software.',
    question:
      'd) Erläutern Sie zwei weitere Maßnahmen, die einer „System-Härtung" dienen.',
    maxPoints: 4,
    modelSolution:
      'Nicht benötigte Systemdienste oder Software-Komponenten sollten deaktiviert oder deinstalliert werden, um die Angriffsfläche zu minimieren. Jeder zusätzliche Dienst kann potenzielle Schwachstellen enthalten.\n\nBenutzer sollten nur die Rechte erhalten, die sie für ihre Aufgaben benötigen (Prinzip der minimalen Rechtevergabe). So lässt sich verhindern, dass Schadsoftware mit Administratorrechten großen Schaden anrichtet.\n\nWeitere mögliche Maßnahmen, die für eine Erläuterung genutzt werden könnten:\n– Verwendung sicherer Passwörter und Multi-Faktor-Authentifizierung (MFA)\n– Aktivierung und Konfiguration von Firewalls\n– Protokollierung und Überwachung sicherheitsrelevanter Ereignisse\n– Verwendung eines Bildschirmschoners mit Kennwort-Schutz\n– Aktivierung einer starken Benutzerkontensteuerung (User Account Control)\n– Verwenden eines sicheren BIOS-Passwortes\n– …',
    answerStatus: 'confirmed',
    sourcePage: 5,
  },
  {
    id: 'ap2-si-t1-2025-sommer-q2-e',
    examId: 'ap2-si-t1-2025-sommer',
    questionNumber: 2,
    subPart: 'e',
    topic: 'IT-Sicherheitsprinzipien',
    scenario: SCENARIO,
    question:
      'e) Sicherheitsexperten empfehlen im Rahmen von Sicherheitskonzepten für IT-Systeme folgende Prinzipien: Das Least-Privilege-Prinzip und das Zero-Trust-Prinzip.\n\nBeide Prinzipien sollen bei der Retailer GmbH implementiert werden.\n\nErläutern Sie zu jedem Prinzip eine typische Maßnahme.\nLeast-Privilege-Prinzip\nZero-Trust-Prinzip',
    maxPoints: 6,
    modelSolution:
      'Least-Privilege-Prinzip:\nBeim Least-Privilege-Prinzip erhält jeder Benutzer oder jede Anwendung nur die minimal nötigen Rechte, die zur Erfüllung der jeweiligen Aufgabe erforderlich sind. Eine typische Maßnahme ist die rollenbasierte Rechtevergabe, bei der z. B. ein Sachbearbeiter keine Administratorrechte erhält.\n\nZero-Trust-Prinzip:\nDas Zero-Trust-Prinzip geht davon aus, dass keinem Gerät, Benutzer oder Netzwerk automatisch vertraut wird. Eine typische Maßnahme ist die Identitätsprüfung bei jedem Zugriff, z. B. durch starke Authentifizierung, Gerätezustandsprüfung und rollenbasierte Zugriffskontrolle.',
    answerStatus: 'confirmed',
    sourcePage: 5,
  },
  {
    id: 'ap2-si-t1-2025-sommer-q2-f',
    examId: 'ap2-si-t1-2025-sommer',
    questionNumber: 2,
    subPart: 'f',
    topic: 'Penetrationstest / Sicherheitstests',
    scenario: SCENARIO,
    referenceText:
      'Die Wirksamkeit der umgesetzten Maßnahmen soll von einem Sicherheits-Dienstleister getestet werden. Dieser bietet an, folgende Tests durchzuführen:\n– Den aktuellen Patch-Stand ermitteln\n– Passwort- und Benutzersicherheit prüfen\n– Fehlkonfigurationen in IT-Systemen aufspüren\n– Fehlkonfigurationen im Active-Directory aufspüren',
    question:
      'f) Beschreiben Sie zwei zusätzliche sicherheitsrelevante Tests, die noch eingefordert werden sollten.',
    maxPoints: 4,
    modelSolution:
      'Es sollte noch ein Penetrationstest eingefordert werden. Hierbei werden echte Angriffe simuliert und nicht nur technische Lücken, sondern auch Fehlkonfigurationen und unsichere Dienste erkannt.\n\nAußerdem sollte die Netzwerksicherheit überprüft werden, um alle offenen Ports und aktiven Dienste sowie die Konfiguration der Firewalls und Router zu prüfen.\n\nWeitere mögliche Tests, die für eine Beschreibung genutzt werden könnten:\n– Auswertung der Logs\n– Prüfung aller Clients auf Malware / Viren\n– Sicherheitsprüfung aller Applikationen und Dienste\n– Prüfung gemäß geltenden Richtlinien (firmenintern oder z. B. BSI)\n– Simulierte Social-Engineering-Tests\n– …',
    answerStatus: 'confirmed',
    sourcePage: 5,
  },

  // 3. Aufgabe (22 Punkte) — Mobile Endgeräte verwalten
  {
    id: 'ap2-si-t1-2025-sommer-q3-aa',
    examId: 'ap2-si-t1-2025-sommer',
    questionNumber: 3,
    subPart: 'aa',
    topic: 'MDM',
    scenario: SCENARIO,
    referenceText:
      'Die Retailer GmbH will ein „Mobile Device Management System" (MDMS) zur effizienten Administration der mobilen Endgeräte einführen.\n\na) Tabellarische Übersicht der Leistungsmerkmale von drei MDM-Systemen (Auszug):\nLeistungsmerkmal | Anbieter A | Anbieter B | Anbieter C\nUnterstützte Clients: IOS/Android/Windows | IOS/Android/Windows | Android/Windows\nUnterstützte Plattformen: On Premises/Public Cloud/Hybrid Cloud | On Premises/Public Cloud/Hybrid Cloud | Public Cloud\nLogs und Reports: Ja | Ja | Ja\nContent-Management-System: Nein | Nein | Ja\nBlack- und Whitelisting: Ja | Ja | Ja\nBring your own Device: Ja | Ja | Ja\nClient-Ortung: Ja | Ja | Ja\nWipe Mobile Device: Ja | Nein | Ja\nLockdown Mobile Device: Ja | Ja | Nein\nE-Mail-Management: Ja | Ja | Ja\nEigener App-Store: Nein | Ja | Nein\nKamera Zugriffssteuerung: Ja | Ja | Ja\nGeräteinventarisierung: Ja | Ja | Ja\nMDMS-Profile: Ja | Ja | Ja\nSoftware-Updates: Ja | Ja | Ja',
    question:
      '3. Aufgabe (22 Punkte)\n\naa) Wählen Sie den Anbieter aus, dessen MDMS bei Verlust oder Diebstahl eines mobilen Gerätes den besten Schutz gegen missbräuchliche Nutzung bietet und begründen Sie Ihre Entscheidung.',
    maxPoints: 4,
    modelSolution:
      'Um einen bestmöglichen Schutz vor Missbrauch bei Diebstahl oder Verlust gewährleisten zu können, sind die Leistungsmerkmale „Wipe Mobile Device" und „Lockdown Mobile Device" besonders wichtig. Da nur Anbieter A diese Features unterstützt, sollte dieser gewählt werden.',
    answerStatus: 'confirmed',
    sourcePage: 6,
  },
  {
    id: 'ap2-si-t1-2025-sommer-q3-ab',
    examId: 'ap2-si-t1-2025-sommer',
    questionNumber: 3,
    subPart: 'ab',
    topic: 'MDM / Datenschutz',
    scenario: SCENARIO,
    question:
      'ab) Die Retailer GmbH erlaubt ihren Mitarbeitern die Nutzung privater Endgeräte für dienstliche Zwecke, sofern diese in das MDMS eingebunden sind.\n\nBeschreiben Sie, wie der Schutz privater Daten auf einem Endgerät gegenüber dem MDMS sichergestellt wird.',
    maxPoints: 2,
    modelSolution:
      'Die Client-Software des MDMS läuft als Container-App und hat keine Zugriffsrechte auf den privaten Bereich des Endgeräts. Der Zugang zum MDMS-Client ist passwortgeschützt, um die Sicherheit der Firmendaten zu gewährleisten.',
    answerStatus: 'confirmed',
    sourcePage: 6,
  },
  {
    id: 'ap2-si-t1-2025-sommer-q3-ac',
    examId: 'ap2-si-t1-2025-sommer',
    questionNumber: 3,
    subPart: 'ac',
    topic: 'Betriebsvereinbarung',
    scenario: SCENARIO,
    referenceText:
      'Die Retailer GmbH will eine Betriebsvereinbarung zur Nutzung mobiler Endgeräte mit dem Betriebsrat abschließen. Zwei Sachverhalte wurden bereits vorgeschlagen:\n– Verschlüsselung von Daten bzw. Datenträgern\n– Private Nutzung der Geräte',
    question:
      'ac) Sie sollen technische und/oder organisatorische Sachverhalte vorschlagen, die Bestandteil einer solchen Vereinbarung sein sollten.\n\nNennen Sie fünf weitere Sachverhalte.',
    maxPoints: 5,
    modelSolution:
      'Mögliche weitere Sachverhalte für eine Betriebsvereinbarung:\n– Regelungen zur Passwort- und Authentifizierungspflicht\n– Maßnahmen zur Datensicherung und Backup\n– Verhalten bei Diebstahl oder Verlust\n– Vorgaben zur Trennung privater und dienstlicher Daten\n– Schulung von Mitarbeitern\n– Fernsteuerung der Kamera\n– Regelungen zu BYOD (Bring Your Own Device)\n– …',
    answerStatus: 'confirmed',
    sourcePage: 7,
  },
  {
    id: 'ap2-si-t1-2025-sommer-q3-b',
    examId: 'ap2-si-t1-2025-sommer',
    questionNumber: 3,
    subPart: 'b',
    topic: 'Lizenzierung (CAL)',
    scenario: SCENARIO,
    referenceText:
      'Für den Zugriff auf den MDMS-Server sind auch Client-Zugriffs-Lizenzen (CAL) erforderlich. Angeboten werden die zwei folgenden Lizenztypen:\n\nUser CAL: Companies purchase a user CAL for each user who accesses the MDMS-Server. Purchasing a user CAL makes sense if the company\'s employees uses multiple devices or if there are simply more devices than users in the company.\n\nDevice CAL: Companies purchase a device CAL for each device that accesses the MDMS-Server, regardless of the number of users that use that device to access the server. It can make more economic and administrative sense for employees to share devices within the company.',
    question:
      'b) Erläutern Sie für jeden der beiden beschriebenen Lizenztypen den kostengünstigeren Einsatzfall.',
    maxPoints: 6,
    modelSolution:
      'User CAL:\nFür jeden Nutzer wird eine Lizenz benötigt. Dieser Lizenztyp ist sinnvoll, wenn Mitarbeiter verschiedene / mehrere Geräte nutzen oder es mehr Geräte als Nutzer gibt.\n\nDevice CAL:\nFür jedes Gerät wird eine Lizenz benötigt. Dieser Lizenztyp ist sinnvoll, wenn mehrere Mitarbeiter an einem Gerät arbeiten oder es mehr Nutzer als Geräte gibt.',
    answerStatus: 'confirmed',
    sourcePage: 7,
  },
  {
    id: 'ap2-si-t1-2025-sommer-q3-c',
    examId: 'ap2-si-t1-2025-sommer',
    questionNumber: 3,
    subPart: 'c',
    topic: 'Update / Upgrade',
    scenario: SCENARIO,
    question:
      'c) Die Aktualisierung des MDMS erfolgt, wie auch bei anderen Softwareprodukten üblich, in Form von „Updates" und „Upgrades".\n\nErläutern Sie den Unterschied zwischen „Update" und „Upgrade" mit Blick auf Kosten und Funktion.',
    maxPoints: 5,
    modelSolution:
      'Ein Update ist eine kleinere, meist kostenlose Aktualisierung, die Fehler behebt oder Sicherheitslücken schließt, ohne die Grundfunktionen zu verändern. Ein Upgrade ist eine größere, oft kostenpflichtige Versionserweiterung, die neue Funktionen oder Verbesserungen bietet und damit den Funktionsumfang deutlich erweitert.',
    answerStatus: 'confirmed',
    sourcePage: 7,
  },

  // 4. Aufgabe (25 Punkte) — Systemsoftware entwickeln
  {
    id: 'ap2-si-t1-2025-sommer-q4-aa',
    examId: 'ap2-si-t1-2025-sommer',
    questionNumber: 4,
    subPart: 'aa',
    topic: 'Array / Programmanalyse',
    scenario: SCENARIO,
    referenceText:
      'Sie wirken bei der Erstellung von Programmen zur Systemverwaltung mit und sollen folgende, aus prüfungstechnischen Gründen stark vereinfachte, Aufgabe bearbeiten.\n\na) Ein Array mit der Bezeichnung „RAM1" enthält neun Felder. Die Anzahl Felder ist nicht mehr ausreichend und soll verdoppelt werden. Da keine entsprechende Methode zum Vergrößern eines Arrays existiert, soll ein neues entsprechend großes Array mit der Bezeichnung „RAM2" angelegt werden. Der Inhalt von Array „RAM1" soll nach Array „RAM2" entsprechend dem folgenden Schema kopiert werden. Die weiteren Felder des Arrays „RAM2" sollen mit den im Schema angegebenen Zahlen (1, 2, 3 …) gefüllt werden.\n\nSchema:\nRAM1: 40, 42, 47, 52, 50, 60, 64, 66, 71\nRAM2: 1, 40, 2, 42, 3, 47, 4, 52, 5, 50, 6, 60, 7, 64, 8, 66, 9, 71\n[Index]: 0..17\n\nFolgender Programmentwurf liegt vor:\nint[] RAM1 = new int[9] { 40, 42, 47, 52, 50, 60, 64, 66, 71 };\nint[] RAM2 = new int[18];\nfor (int i = 0; i < 9; i++)\n{\n    RAM2[i * 2 + 1] = i;\n    RAM2[i * 2] = RAM1[i];\n}',
    question:
      'aa) Analysieren Sie den Programmentwurf. Stellen Sie fest, welche Werte in den ersten neun Feldern von „RAM2" gespeichert werden.\n\nTragen Sie die Werte in die vorgesehenen Felder ein.',
    maxPoints: 9,
    modelSolution:
      'RAM2 (Index 0–8): 40, 0, 42, 1, 47, 2, 52, 3, 50\n\n[Index]: 0, 1, 2, 3, 4, 5, 6, 7, 8',
    answerStatus: 'confirmed',
    sourcePage: 8,
  },
  {
    id: 'ap2-si-t1-2025-sommer-q4-ab',
    examId: 'ap2-si-t1-2025-sommer',
    questionNumber: 4,
    subPart: 'ab',
    topic: 'Programmierfehler',
    scenario: SCENARIO,
    question:
      'ab) Offensichtlich liefert das Programm falsche Werte. Dafür sind zwei Fehler im Programmcode verantwortlich.\n\nLokalisieren Sie die beiden Fehler und geben Sie zu jedem Fehler den korrekten Code an.\nKorrekter Code 1\nKorrekter Code 2',
    maxPoints: 10,
    modelSolution:
      'Korrekter Code 1:\nRAM2[i * 2] = i + 1;\n\nKorrekter Code 2:\nRAM2[i * 2 + 1] = RAM1[i];\n\nDurch die beiden Codekorrekturen wurde die vertauschte Zuweisungslogik behoben. Ursprünglich wurden die Werte aus RAM1 an den geraden Stellen korrekt eingefügt, aber die Indexzähler standen fälschlich an den ungeraden Positionen. Die Korrektur dreht dies um, sodass nun die Zähler (beginnend bei 1) an den geraden Indizes stehen und die Daten aus RAM1 an den ungeraden. Damit entspricht die Struktur des Arrays RAM2 nun dem vorgegebenen Schema der Aufgabenstellung.',
    answerStatus: 'confirmed',
    sourcePage: 8,
  },
  {
    id: 'ap2-si-t1-2025-sommer-q4-b',
    examId: 'ap2-si-t1-2025-sommer',
    questionNumber: 4,
    subPart: 'b',
    topic: 'Syntax- und Semantikfehler',
    scenario: SCENARIO,
    question:
      'b) Fehler, die beim Programmieren vorkommen, werden unterschieden in Syntaxfehler und in Semantikfehler.\n\nBeschreiben Sie die beiden Fehlerarten und geben Sie dazu jeweils ein Beispiel an.\nSyntaxfehler:\nSemantikfehler:',
    maxPoints: 6,
    modelSolution:
      'Syntaxfehler:\nEin Syntaxfehler tritt auf, wenn der Quellcode nicht den Regeln der Programmiersprache entspricht. Das Programm kann in diesem Fall nicht ausgeführt werden. Beispiel: Fehlende Semikolons, nicht geschlossene Klammern oder nicht deklarierte Variablen.\n\nSemantikfehler:\nEin Semantikfehler liegt vor, wenn der Code zwar fehlerfrei ausgeführt werden kann, aber nicht das tut, was beabsichtigt war. Das Programm funktioniert, liefert aber ein falsches Ergebnis. Beispiel: Eine Schleife zählt von 1 bis 10, obwohl sie eigentlich von 0 bis 9 zählen sollte.',
    answerStatus: 'confirmed',
    sourcePage: 8,
  },
]
