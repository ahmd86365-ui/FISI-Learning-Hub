import type { ApExamMeta, ApExamQuestion } from '../../types/apExam'

export const ap2SiT1_2023SommerMeta: ApExamMeta = {
  id: 'ap2-si-t1-2023-sommer',
  area: 'AP2_SI_T1',
  year: 2023,
  period: 'Sommer',
  label: 'Sommer 2023',
  examDate: 'Mittwoch, 26. April 2023',
  examTitle: 'Konzeption und Administration von IT-Systemen',
  courseCode: '1202',
  sourceExamPdf: 'SI_AP2_T1_23s.pdf',
  sourceSolutionPdf: 'Loe_SI_AP2_T1_23s.pdf',
  solutionSource: 'confirmed',
  taskCount: 4,
  durationMinutes: 90,
  totalPoints: 100,
}

const SCENARIO =
  'Die Aufgaben 1 bis 4 beziehen sich auf die folgende Ausgangssituation:\n\n' +
  'Sie sind bei der Best-IT GmbH als Fachinformatiker Systemintegration beschäftigt. Die Best-IT GmbH ist ein in Köln ansässiges bedeutendes Systemhaus, welches überwiegend für mittelständische Betriebe im Bereich IT-Services agiert.\n\n' +
  'Das Autohaus Schnellinger hat die Best-IT GmbH beauftragt, verschiedene Verbesserungen an ihren IT-Systemen vorzunehmen.\n\n' +
  'Bearbeiten Sie in diesem Zusammenhang die folgenden vier Aufgaben.\n' +
  '1. Aufgabe: Server bereitstellen und administrieren\n' +
  '2. Aufgabe: Systeme skalieren und aktualisieren\n' +
  '3. Aufgabe: Programm zur Serverüberwachung erweitern\n' +
  '4. Aufgabe: Datensicherung und Datenspeicher einrichten'

const q1a: ApExamQuestion = {
  id: 'ap2-si-t1-2023-sommer-q1-a',
  examId: 'ap2-si-t1-2023-sommer',
  questionNumber: 1,
  subPart: 'a',
  topic: 'Serverkonfiguration / Sicherheit',
  scenario: SCENARIO,
  referenceText:
    'Liste „Serverkonfiguration" mit vorgegebener erster Zeile:\nServer-Hardware | Boot-Reihenfolge ändern; Secure-Boot aktivieren\n(vier weitere Bereiche sind vom Prüfling mit jeweils zwei Einstellungen zu ergänzen: „Installation und Konfiguration des Betriebssystems", „Dienste und Features des Servers", „Anmelden am Server", „Administrieren des Servers")',
  question:
    '1. Aufgabe (26 Punkte)\n\nIn dieser Aufgabe sollen Sie die Bereitstellung von lokalen Servern unter besonderer Berücksichtigung der Systemsicherheit planen.\n\n' +
    'Zur Vorbereitung der Installation und anschließenden Konfiguration soll eine Liste erstellt werden, welche – nach Bereichen gegliedert – sicherheitsrelevante Einstellungen an Servern beinhaltet.\n\n' +
    'Ergänzen Sie in der Liste „Serverkonfiguration" die vier freien Bereiche mit jeweils zwei entsprechenden Einstellungen.',
  maxPoints: 8,
  modelSolution:
    'Server-Hardware — Boot-Reihenfolge ändern; Secure-Boot aktivieren (vorgegeben)\n\n' +
    'Installation und Konfiguration des Betriebssystems —\n' +
    '– Vergabe von pseudonymisierten / anonymisierten Serverbezeichnungen\n' +
    '– Aktivierung und Konfiguration automatisierter Systemupdates\n' +
    '– Entfernen nicht benötigter Benutzer / Konten\n' +
    '– Konfiguration der Firewall (inkl. Firewall-Regeln)\n' +
    '– Vorherige Formatierung der Datenträger\n' +
    '– Einrichten von unterschiedlichen Systempartitionen\n' +
    '– Vergabe eines sicheren Passworts\n' +
    '– …\n\n' +
    'Dienste und Features des Servers —\n' +
    '– Deaktivierung nicht benötigter Dienste und Features\n' +
    '– Festlegung des Starttyps je Systemdienst\n' +
    '– Konfiguration der zu verwendenden Konten je Systemdienst\n' +
    '– Konfiguration der Auto-Start-Programme\n' +
    '– Deaktivierung nicht benötigter oder unsicherer Protokolle\n' +
    '– Sperrung ausgewählter Skripte\n' +
    '– …\n\n' +
    'Anmelden am Server —\n' +
    '– Definition sicherer Passwortrichtlinien\n' +
    '– Beschränkung der Anmeldezeiten\n' +
    '– Konfiguration benutzerdefinierter Hinweise für die Anmeldemaske\n' +
    '– Erzwingen einer Zwei-Faktor-Authentifizierung oder Multi-Faktor-Authentifizierung\n' +
    '– Unterbinden einer Remote-Anmeldung\n' +
    '– …\n\n' +
    'Administrieren des Servers — Explizite Rechtevergabe zur/zum:\n' +
    '• Installation von Anwendungen\n' +
    '• Ändern und Sichern der Systemeinstellungen\n' +
    '• Zugriff auf Ordnerpfade\n' +
    '• …\n' +
    '– Aktivieren und Konfigurieren der Backup-Komponenten\n' +
    '– Konfiguration der Rechteverwaltung und Vererbungseinstellungen\n' +
    '– Konfiguration der Logeinstellungen\n\n' +
    '(Zwei Einstellungen je Bereich sind für die volle Punktzahl ausreichend.)',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q1ba: ApExamQuestion = {
  id: 'ap2-si-t1-2023-sommer-q1-ba',
  examId: 'ap2-si-t1-2023-sommer',
  questionNumber: 1,
  subPart: 'ba',
  topic: 'Asymmetrische Verschlüsselung',
  scenario: SCENARIO,
  question: 'In IT-Systemen kommt an verschiedenen Stellen das asymmetrische Verschlüsselungsverfahren zum Einsatz.\n\nErläutern Sie die prinzipielle Funktionsweise dieses Verfahrens.',
  maxPoints: 4,
  modelSolution:
    'Bei der asymmetrischen Verschlüsselung wird ein Schlüsselpaar erzeugt, welches aus einem öffentlichen sowie einem privaten Schlüssel besteht. Der öffentliche Schlüssel ist nicht geheim und kann verbreitet werden. Der private Schlüssel ist geheim zu halten und verbleibt beim Besitzer des Schlüsselpaares. Mithilfe des öffentlichen Schlüssels erfolgt die Verschlüsselung von Daten. Der private Schlüssel kann vom Besitzer genutzt werden, um Daten, die mit dem zugehörigen öffentlichen Schlüssel verschlüsselt wurden, zu entschlüsseln.\n\n' +
    'Weiterführende Informationen: Asymmetrische Verschlüsselungsverfahren werden häufig z. B. bei der Nachrichtenverschlüsselung (End-to-End) mittels PGP, Open PGP oder RSA verwendet.',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q1bb: ApExamQuestion = {
  id: 'ap2-si-t1-2023-sommer-q1-bb',
  examId: 'ap2-si-t1-2023-sommer',
  questionNumber: 1,
  subPart: 'bb',
  topic: 'Asymmetrische vs. symmetrische Verschlüsselung',
  scenario: SCENARIO,
  question: 'Erläutern Sie einen Nachteil dieses Verfahrens gegenüber dem der symmetrischen Verschlüsselung.',
  maxPoints: 2,
  modelSolution:
    'Durch den komplexen Schlüsselaustausch und dadurch, dass für einen bidirektionalen Datenaustausch zwei Schlüsselpaare benötigt werden, ist ein Nachteil des asymmetrischen Verfahrens gegenüber der symmetrischen Verschlüsselung die aufwändige Schlüsselverwaltung.\n\n' +
    'Weiterführende Informationen: Weitere Nachteile gegenüber der symmetrischen Verschlüsselung wären z. B. die rechenintensive und daher verlangsamte Datenübertragung oder die komplexe Implementierung der asymmetrischen Verschlüsselungsverfahren.',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q1c: ApExamQuestion = {
  id: 'ap2-si-t1-2023-sommer-q1-c',
  examId: 'ap2-si-t1-2023-sommer',
  questionNumber: 1,
  subPart: 'c',
  topic: 'Digitale Zertifikate',
  scenario: SCENARIO,
  question:
    'Zur Gewährleistung der IT-Sicherheit werden an verschiedenen Stellen digitale Zertifikate eingesetzt.\n\n' +
    'Erläutern Sie in mindestens vier Schritten den Vorgang, einen Server mithilfe eines öffentlich bestätigten Zertifikats abzusichern.',
  maxPoints: 4,
  modelSolution:
    '1. Im ersten Schritt ist ein digitales Zertifikat bei einer geeigneten Certificate Authority (CA) zu beantragen, hierfür sind unter anderem eindeutige Informationen zur Identität des Servers notwendig, um diese vollständig zu belegen.\n' +
    '2. Anschließend überprüft die Zertifizierungsstelle bzw. CA die zur Verfügung gestellten Informationen und stellt bei einer zweifelsfreien Identitätsfeststellung ein signiertes Zertifikat zur Verfügung.\n' +
    '3. Das zur Verfügung gestellte Zertifikat muss anschließend auf dem Ziel-Server installiert und in die entsprechenden Konfigurationsdateien hinterlegt werden.\n' +
    '4. Abschließend müssen gegebenenfalls übergeordnete Zertifikate nachgeladen und installiert werden, sodass eine vollständige Zertifikatskette hergestellt wird.\n\n' +
    'Weitere/Andere Schritte sind möglich.',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q1d: ApExamQuestion = {
  id: 'ap2-si-t1-2023-sommer-q1-d',
  examId: 'ap2-si-t1-2023-sommer',
  questionNumber: 1,
  subPart: 'd',
  topic: 'E-Mail-Sicherheit / Phishing-Schutz',
  scenario: SCENARIO,
  question: 'Angriffe auf IT-Systeme erfolgen zu einem großen Teil im Rahmen der Kommunikation mit E-Mails.\n\nBeschreiben Sie zwei Sicherheitsmaßnahmen, die geeignet sind, solche Angriffe nicht wirksam werden zu lassen.',
  maxPoints: 4,
  modelSolution:
    'Wiederkehrende Informations- und Sensibilisierungsmaßnahmen: Die Mitarbeiter des Autohauses Schnellinger könnten durch die Best-IT GmbH in regelmäßigen Workshops durch Informationsflyer oder mithilfe von Rundmails wiederkehrend über die Gefahren von Phishing-Mails sensibilisiert werden. Die Wahrscheinlichkeit, dass Mitarbeiter auf betrügerische E-Mails hereinfallen, wird hierdurch gesenkt.\n\n' +
    'Verwenden geeigneter Antivirensoftware, Plugins, Firewalls etc.: Durch geeignete Antivirensoftware inkl. SPAM- und Phishing-Erkennung, kann direkt auf den Clients überprüft werden, ob verdächtige E-Mails eingegangen sind. Diese E-Mails können dann gekennzeichnet oder direkt entfernt werden. Alternativ könnten eingehende E-Mails bereits vorab durch eine Firewall überprüft werden.\n\n' +
    'Vorbeugende Konfiguration der verwendeten E-Mail-Programme: Um das Schadenspotenzial von betrügerischen E-Mails zu minimieren, kann das verwendete E-Mail-Programm so konfiguriert werden, dass z. B. Dateianhänge nicht heruntergeladen werden, der Text-Modus anstelle einer HTML-Darstellung genutzt wird, oder dass durch entsprechende Regeln bereits eine Vorsortierung der E-Mails erfolgt.\n\n' +
    'Weitere Sicherheitsmaßnahmen sind möglich.',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q1e: ApExamQuestion = {
  id: 'ap2-si-t1-2023-sommer-q1-e',
  examId: 'ap2-si-t1-2023-sommer',
  questionNumber: 1,
  subPart: 'e',
  topic: 'Systemkompromittierung / Symptome',
  scenario: SCENARIO,
  referenceText: 'Zum Beispiel könnte das Starten unbekannter Programme ein Hinweis auf eine Systemkompromittierung sein (vorgegebenes Beispiel).',
  question:
    'Falls ein Angriff auf ein IT-System nicht verhindert werden konnte, ist es besonders wichtig, diesen anhand bestimmter Symptome frühzeitig zu erkennen.\n\n' +
    'Zum Beispiel könnte das Starten unbekannter Programme ein Hinweis auf eine Systemkompromittierung sein.\n\n' +
    'Erläutern Sie zwei weitere mögliche Symptome einer Systemkompromittierung.',
  maxPoints: 4,
  modelSolution:
    'Ein mögliches Symptom einer Systemkompromittierung könnte eine stark veränderte und reduzierte Systemleistung sein. Durch im Hintergrund ausgeführte Schadsoftware werden Systemkomponenten (z. B. CPU, RAM, SSD) zusätzlich in Anspruch genommen, hierdurch sinkt die zur Verfügung stehende Leistung für die eigentlichen Programme/Prozesse.\n\n' +
    'Sollte ein System kompromittiert sein, versuchen Angreifer oftmals sensible Unternehmensinformationen nach außen zu schicken. Somit könnte ein weiteres Symptom für eine Kompromittierung ein erhöhtes Netzwerkaufkommen sein. Insbesondere wenn das Sendevolumen der Mitarbeiter-Computer bzw. deren Netzwerkkarten dauerhaft ansteigt, lohnt sich ggf. eine Untersuchung der betroffenen Computer.\n\n' +
    'Weitere denkbare Symptome:\n– Unerwünschte Programme und Toolbars\n– Häufige Popups und scheinbar gefälschte Systemmeldungen\n– Häufige Programm- und Clientabstürze\n– Ungewöhnliche Aktivitäten, wie z. B. Änderungen der Passwörter und Systemeinstellungen\n– Erhöhte Aufforderungen zur Eingabe von Passwörtern',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q2aa: ApExamQuestion = {
  id: 'ap2-si-t1-2023-sommer-q2-aa',
  examId: 'ap2-si-t1-2023-sommer',
  questionNumber: 2,
  subPart: 'aa',
  topic: 'USV / Schaltskizzen',
  scenario: SCENARIO,
  referenceText:
    'Zur Auswahl stehende Bezeichnungen: Offline, Online, Line-Interactive.\n\n' +
    'Zwei Schaltskizzen sind abgebildet: Linke Skizze zeigt Eingang → Gleichrichter → Wechselrichter → Ausgang mit einem zusätzlichen „Bypass"-Pfad (Schalter, für Wartungsarbeiten) sowie Batterie, mit Legende „Normalfall"/„Fehlerfall". Rechte Skizze zeigt Eingang → Gleichrichter → Wechselrichter → Ausgang mit einem „Umschalter" (Schalter) sowie Batterie, ebenfalls mit Legende „Normalfall"/„Fehlerfall".',
  question:
    '2. Aufgabe (24 Punkte)\n\nDie neue CarConfigurator-App der Schnellinger GmbH ist das Aushängeschild des Unternehmens. Sie soll zuverlässig zur Verfügung stehen und auch bei Marketingaktionen in der Lage sein, mit großer Last umzugehen.\n\n' +
    'Das Autohaus betreibt dazu eine Webservice-Umgebung und ein Datenbanksystem, die lokal gehostet sind und auf virtuellen Servern laufen.\n\n' +
    'Um eine hohe Verfügbarkeit sicherzustellen, werden die Server unter anderem mit einer USV ausgestattet.\n\n' +
    'Ordnen Sie den beiden Schaltskizzen die entsprechende Bezeichnung zu.\n\nBezeichnung (linke Skizze, mit Bypass): ______\nBezeichnung (rechte Skizze, mit Umschalter): ______',
  maxPoints: 2,
  modelSolution:
    'Bezeichnung (linke Skizze, mit Bypass): Online\nBezeichnung (rechte Skizze, mit Umschalter): Offline\n\n' +
    'Weiterführende Informationen: Die Offline-USV kann auch als Standby-USV bezeichnet werden, hierbei handelt es sich um die einfachste USV-Form. Mithilfe der Offline-USV kann jedoch nur vor einem totalen Netzausfall sowie vor kurzzeitigen Spannungsschwankungen und -spitzen geschützt werden. Die USV erreicht einen Wirkungsgrad von ca. 95 %.\n\n' +
    'Die Online-USV bietet hingegen den vollständig möglichen Schutz, hierbei werden auch Schwankungen der Netzfrequenz und -spannung vollständig ausgeglichen. Dieser USV-Typ funktioniert nach dem Dauerwandler-Prinzip und kann daher auch als Dauerwandler-USV bezeichnet werden. Die USV erreicht einen Wirkungsgrad von ca. 90 %.\n\n' +
    'Eine Line-Interactive-USV wäre einer (im Aufgabentext nicht abgebildeten) dritten Schaltskizze mit Spannungsregulierer zuzuordnen.\n\n' +
    'Am einfachsten sind Line-Interactive-, Offline- sowie Online-USVs anhand der Spannungsregulierer, Umschalter oder Bypass zu erkennen.',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q2ab: ApExamQuestion = {
  id: 'ap2-si-t1-2023-sommer-q2-ab',
  examId: 'ap2-si-t1-2023-sommer',
  questionNumber: 2,
  subPart: 'ab',
  topic: 'USV / Abkürzungen',
  scenario: SCENARIO,
  referenceText:
    'Auszufüllende Tabelle „Bezeichnung / Abkürzung / Bedeutung (Abkürzung ausgeschrieben)" mit vorgegebenen Zeilen Online, Offline, Line-Interactive (Abkürzung und Bedeutung sind zu ergänzen).',
  question:
    'Die USV-Typen „Online, Offline und Line-Interactive" werden abgekürzt auch als VI, VFI und VFD bezeichnet.\n\n' +
    'Ordnen Sie diese Abkürzungen in der Tabelle entsprechend zu und geben Sie die Bedeutung der Abkürzungen an.',
  maxPoints: 6,
  modelSolution:
    'Online — Abkürzung: VFI — Bedeutung: Voltage and Frequency Independent\n' +
    'Offline — Abkürzung: VFD — Bedeutung: Voltage and Frequency Dependent\n' +
    'Line-Interactive — Abkürzung: VI — Bedeutung: Voltage Independent',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q2ac: ApExamQuestion = {
  id: 'ap2-si-t1-2023-sommer-q2-ac',
  examId: 'ap2-si-t1-2023-sommer',
  questionNumber: 2,
  subPart: 'ac',
  topic: 'USV / Line-Interactive vs. Offline',
  scenario: SCENARIO,
  question: 'Nennen Sie zwei Vorteile und zwei Nachteile einer Line-Interactive-USV im Vergleich zu einer Offline-USV.\n\nVorteile:\n\nNachteile:',
  maxPoints: 4,
  modelSolution:
    'Vorteile:\n– Geringere Umschaltzeit, dadurch auch für sensiblere Geräte verwendbar\n– Ständige Regelung von Spannungsschwankungen möglich\n– Oftmals gutes Preis-Leistungsverhältnis\n\n' +
    'Nachteile:\n– Teurer in der Anschaffung\n– Teurer im Betrieb\n– Komplizierterer Aufbau\n– Oftmals weniger kompakte Bauweise\n\n' +
    'Weitere Nennungen sind möglich.',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q2b: ApExamQuestion = {
  id: 'ap2-si-t1-2023-sommer-q2-b',
  examId: 'ap2-si-t1-2023-sommer',
  questionNumber: 2,
  subPart: 'b',
  topic: 'Skalierung / Scale out vs. Scale up',
  scenario: SCENARIO,
  question:
    'Um den Anforderungen nach einer bestmöglichen Verfügbarkeit gerecht zu werden, soll die Webserverarchitektur mögliche Lastspitzen durch Skalierung der Ressourcen kompensieren.\n\n' +
    'Beschreiben Sie die Konzepte der Skalierungsmethoden „Horizontale Skalierung" und „Vertikale Skalierung".\n\nHorizontale Skalierung (Scale out)\n\nVertikale Skalierung (Scale up)',
  maxPoints: 6,
  modelSolution:
    'Horizontale Skalierung (Scale out): Bei dieser Form der Skalierung wird die Last auf mehrere gleichartige Geräte verteilt. Bei einer Erhöhung der Kapazität wird hochskaliert, indem weitere Geräte hinzugefügt werden und bei der Lastverteilung berücksichtigt werden. Sollte die Kapazität verringert werden (d. h. wenn runterskaliert werden soll), werden Geräte entfernt und nicht mehr in der Lastverteilung berücksichtigt. Bei dieser Form der Skalierung kann eine Erweiterung/Verringerung der Rechenleistung jederzeit dynamisch und ohne Ausfallzeiten vorgenommen werden.\n\n' +
    'Vertikale Skalierung (Scale up): Im Gegensatz zur horizontalen Skalierung ist bei der vertikalen Skalierung die Anzahl der Geräte fest definiert. Eine Skalierung wird hierbei erreicht, indem weitere Ressourcen zur festen Anzahl der Geräte hinzugefügt werden. Es werden also z. B. mehr CPUs, mehr RAM oder mehr Speicher zu den bereits bestehenden Geräten hinzugefügt. Beim Runterskalieren würden Ressourcen der bereits bestehenden Geräte entfernt werden. Dadurch, dass die Geräte für eine Skalierung angepasst werden müssen, ist bei dieser Form der Skalierung mit Ausfallzeiten zu rechnen.',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q2c: ApExamQuestion = {
  id: 'ap2-si-t1-2023-sommer-q2-c',
  examId: 'ap2-si-t1-2023-sommer',
  questionNumber: 2,
  subPart: 'c',
  topic: 'Blue Green Deployment',
  scenario: SCENARIO,
  referenceText:
    'Schaubild „Before Deployment": Loadbalancer verweist (Pfeil) auf Umgebung 2 (Version 1.0, Live, Green); Umgebung 1 (Version 1.1, Staging, Blue) ist vorbereitet, aber nicht angebunden.\n' +
    'Schaubild „After Deployment": Loadbalancer verweist (Pfeil) auf Umgebung 1 (Version 1.1, Live, Blue); Umgebung 2 (Version 1.0, Staging, Green) ist nicht mehr angebunden.',
  question: 'Um unterbrechungsfrei kontinuierlich neue Updates veröffentlichen zu können, haben Sie sich für Blue Green Deployments entschieden.\n\nErläutern Sie die Methode des Blue Green Deployments anhand des Schaubilds.',
  maxPoints: 6,
  modelSolution:
    'Beim Konzept des Blue Green Deployments existieren immer mindestens zwei Umgebungen (siehe Angabe, Umgebung 1 sowie Umgebung 2). Eine dieser Umgebungen wird immer als Live-Umgebung genutzt, das heißt, durch den Loadbalancer werden alle Anwender für das produktive Arbeiten auf diese Umgebung verwiesen (siehe Angabe, Before Deployment Umgebung 2). Bei der anderen Umgebung handelt es sich um eine identische Umgebung, welche jedoch bereits eine neue Version installiert hat.\n\n' +
    'Sobald mit der neuen Version gearbeitet werden soll, werden die Anwender durch den Loadbalancer auf die andere – bereits vorbereitete Umgebung – verwiesen (siehe Angabe, After Deployment Umgebung 1). Die zuvor verwendete Umgebung verbleibt zunächst in der älteren Version (im Beispiel Version 1.0) und wird als mögliches Fallback genutzt, sollte es zu Fehlern bei der neuen Version/Umgebung kommen.\n\n' +
    'Sobald alle Anwender fehlerfrei in der neuen Umgebung arbeiten, wird die andere Umgebung auf eine neue Version vorbereitet.',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const MONCPU_REFERENCE =
  'Beispieltabelle (Zeitraum → Array-Index → Array-Wert):\n' +
  '0 Uhr bis 1 Uhr → Index 0 → Wert 33\n1 Uhr bis 2 Uhr → Index 1 → Wert 44\n2 Uhr bis 3 Uhr → Index 2 → Wert 40\n3 Uhr bis 4 Uhr → Index 3 → Wert 52\n4 Uhr bis 5 Uhr → Index 4 → Wert 60\n5 Uhr bis 6 Uhr → Index 5 → Wert 56\n… (Indizes 6–19 ausgelassen) …\n20 Uhr bis 21 Uhr → Index 20 → Wert 40\n21 Uhr bis 22 Uhr → Index 21 → Wert 52\n22 Uhr bis 23 Uhr → Index 22 → Wert 60\n23 Uhr bis 0 Uhr → Index 23 → Wert 56\n\n' +
  'Messagebox-Vorschau: Titel „MONCPU", Text „Die Systemauslastung war an mehr als 18 Stunden höher als 80 %.", Schaltfläche „OK".\n\n' +
  'Vorgegebener (unvollständiger) Programmentwurf „Programmerweiterung MONCPU":\n' +
  'string message = "Die Systemauslastung war an mehr als 18 Stunden höher als 80 %.";  //Text Messagebox\n' +
  'string title = "MONCPU";  //Titel Messagebox\n' +
  'int cpuutil = 0;  //Systemauslastung\n' +
  'int cpulimit = 0;  //Grenzwert der Systemauslastung\n' +
  'int sumstd = 0;  //Summe Stunden\n' +
  '//Array mit Testdaten\n' +
  'int[] usedCPU = new int[24] {33,44,40,52,60,56,33,44,40,52,60,56,33,44,40,52,60,56,33,44,40,52,60,56};\n' +
  '(restlicher Programmcode ist vom Prüfling zu ergänzen)\n\n' +
  'Anlagen zur 3. Aufgabe — Syntaxregeln:\n\n' +
  'Beispiele für verschiedene Schleifenarten:\n' +
  'while (number < 5)\n{\n  Console.WriteLine(number);\n  number = number + 1;\n}\n\n' +
  'for (int i = 0; i < number; i++)\n{\n  Console.WriteLine(usedCPU[i]);\n}\n\n' +
  'do\n{\n  Console.WriteLine(number);\n  number = number + 1;\n} while (number < 5);\n\n' +
  'Beispiel für eine Auswahlanweisung:\n' +
  'int number = 20;\nif (number < 18)\n{\n  Console.WriteLine("ok");\n}\nelse\n{\n  Console.WriteLine("not ok");\n}\n\n' +
  'Kommentare:\n//Kommentar einzeilig\n/* Kommentar mehrzeilig */\n\n' +
  'Beispiel Messagebox:\n' +
  'string message = "Anzeigetext in der Messagebox";\nstring title = "Bezeichnung der Messagebox";\nMessageBox.Show(message,title);'

const q3a: ApExamQuestion = {
  id: 'ap2-si-t1-2023-sommer-q3-a',
  examId: 'ap2-si-t1-2023-sommer',
  questionNumber: 3,
  subPart: 'a',
  topic: 'Programmierung / Array-Auswertung',
  scenario: SCENARIO,
  referenceText: MONCPU_REFERENCE,
  question:
    '3. Aufgabe (26 Punkte)\n\nIm Rahmen der Serverüberwachung sollen Sie eine Programmerweiterung vornehmen.\n\n' +
    'Das Programm „MONCPU" dient der täglichen Überwachung der CPU-Last des Datenbank-Servers. Es speichert für jede zurückliegende volle Stunde den Mittelwert der CPU-Last. Die Mittelwerte werden als ganzzahliger Prozentwert in einem eindimensionalen Array gespeichert (siehe Beispieltabelle im Referenztext).\n\n' +
    'Sie sollen das vorhandene Programm so erweitern, dass die Meldung aus dem Referenztext (Messagebox „MONCPU") ausgegeben wird, sofern die CPU-Last am vergangenen Tag an mehr als 18 Stunden den Wert von 80 % überschritten hat.\n\n' +
    'Vervollständigen Sie den vorliegenden Programmentwurf entsprechend der Anforderung.\n\n' +
    'Orientieren Sie sich dabei an den vorgegebenen Kommentaren und nutzen Sie die Anlage „Syntax" (siehe Referenztext).',
  maxPoints: 15,
  modelSolution:
    'Hinweis: Die Musterlösung benennt einige Bezeichner abweichend vom Aufgabenstamm (Array „CpuUtilDay" statt „usedCPU"; „String" statt „string") — beide Schreibweisen meinen dasselbe Datenfeld bzw. denselben Datentyp.\n\n' +
    'String message = "Die Systemauslastung war an mehr als 18 Stunden höher als 80 %.";  // Text Messagebox\n' +
    'String title = "MONCPU";  // Titel Messagebox\n' +
    'int cpuutil = 0;  // Systemauslastung\n' +
    'int cpulimit = 0;  // Grenzwert der Systemauslastung\n' +
    'int sumstd = 0;  // Summe Stunden\n' +
    '// Array mit Testdaten\n' +
    'int[] CpuUtilDay = new int[24] {33,44,40,52,60,56,33,44,40,52,60,56,33,44,40,52,60,56,33,44,40,52,60,56};\n\n' +
    'for (int i = 0; i < 24; i++)\n' +
    '{\n' +
    '    if (CpuUtilDay[i] > 80)\n' +
    '    {\n' +
    '        sumstd = sumstd + 1;\n' +
    '    }\n' +
    '    if (sumstd > 18)\n' +
    '    {\n' +
    '        MessageBox.Show(message,title);\n' +
    '    }\n' +
    '}',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q3b: ApExamQuestion = {
  id: 'ap2-si-t1-2023-sommer-q3-b',
  examId: 'ap2-si-t1-2023-sommer',
  questionNumber: 3,
  subPart: 'b',
  topic: 'UML-Klassendiagramm / Aggregation und Komposition',
  scenario: SCENARIO,
  question:
    'In der Programmdokumentation ist ein Klassendiagramm enthalten. Im Klassendiagramm sind die Beziehungstypen „Aggregation" und „Komposition" enthalten.\n\n' +
    'Erläutern Sie die genannten Beziehungstypen und geben Sie zu jedem Beziehungstyp ein allgemeines Beispiel an.\n\n– Aggregation\nErläuterung:\n\nBeispiel:\n\n– Komposition\nErläuterung:\n\nBeispiel:',
  maxPoints: 6,
  modelSolution:
    'Aggregation — Erläuterung: Eine Aggregation bezeichnet Beziehungen zwischen zwei Klassen mit einer sogenannten „Teil-Ganzes-Beziehung". Die Beziehung kann hierbei als „ist Teil von", „besteht aus" oder „hat" beschrieben werden. — Beispiel: Die Klassen „Tisch" und „Tischbein". Ein Tisch besteht aus mehreren Tischbeinen.\n\n' +
    'Komposition — Erläuterung: Eine Komposition ist eine besondere Form der Aggregation. Bei dieser Form der Beziehung ist die „Teil-Ganzes-Beziehung" an die Existenz des „Ganzen" geknüpft. — Beispiel: Die Klasse „Gebäude" und „Raum". Ein Gebäude besteht aus mehreren Räumen, ein Raum kann aber nur mit einem Gebäude bestehen.',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q3c: ApExamQuestion = {
  id: 'ap2-si-t1-2023-sommer-q3-c',
  examId: 'ap2-si-t1-2023-sommer',
  questionNumber: 3,
  subPart: 'c',
  topic: 'Task-Scheduler / Kommandozeile',
  scenario: SCENARIO,
  referenceText:
    'Parameter Task-Scheduler:\nSCHTASKS /Parameter [Argumente]\n\n' +
    'Beschreibung: Ermöglicht einem Administrator, geplante Aufgaben auf einem lokalen oder Remotecomputer zu erstellen, abzufragen, zu löschen, zu ändern und zu beenden.\n\n' +
    'Parameterliste:\n' +
    '/Create — Erstellt eine neue geplante Aufgabe.\n' +
    '/tn <taskname> — Specifies a name for the task. Each task on the system must have a unique name and must conform to the rules for file names, not exceeding 238 characters. Use quotation marks to enclose names that include spaces.\n' +
    '/sc <scheduletype> — Specifies the schedule type. The valid values include: HOURLY, DAILY, WEEKLY, MONTHLY, ONCE, ONSTART\n' +
    '/tr <Taskrun> — Specifies the program or command that the task runs. Type the fully qualified path and file name of an executable file, script file, or batch file. The path name must not exceed 262 characters.\n' +
    '/st <Starttime> — Specifies the start time for the task, using the 24-hour time format, hh:mm. The default value is the current time on the local computer.',
  question:
    'Das Programm „MONCPU.EXE", welches sich in dem Verzeichnis d:\\util befindet, soll mithilfe des Task-Schedulers täglich um 16:10 Uhr automatisiert gestartet werden. Dazu soll ein entsprechender Aufruf mit dem Namen CPUMON erstellt werden.\n\n' +
    'Informationen zu den Parametern des Task-Schedulers finden Sie im Referenztext.\n\n' +
    'Vervollständigen Sie den entsprechenden Programmaufruf:\n\nSCHTASKS ___________________',
  maxPoints: 5,
  modelSolution: 'SCHTASKS /Create /tn CPUMON /tr d:\\util\\MONCPU.EXE /sc DAILY /st 16:10',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q4a: ApExamQuestion = {
  id: 'ap2-si-t1-2023-sommer-q4-a',
  examId: 'ap2-si-t1-2023-sommer',
  questionNumber: 4,
  subPart: 'a',
  topic: 'Datensicherung / Inkrementell vs. differenziell',
  scenario: SCENARIO,
  referenceText:
    'Säulendiagramm „Tagessicherung (inkrementell)" für die 21. Woche (Datenvolumen in GB): Mo = 25, Di = 10, Mi = 10, Do = 20, Fr = 10, Sa = 5. Eine Vollsicherung wird sonntags durchgeführt.\n\n' +
    'Darunter: leeres Rechenfeld (Gitter) sowie ein leeres Säulendiagramm-Template „Tagessicherung (differenziell)" (Achse 0–100 GB, Tage Mo–Sa) zum Eintragen der berechneten Ergebnisse.',
  question:
    '4. Aufgabe (24 Punkte)\n\nIm Zusammenhang mit der Datenspeicherung, Datensicherung und der Wiederherstellung der Daten bei der Schnellinger GmbH sollen Sie Verbesserungen vornehmen.\n\n' +
    'Die Tagessicherungen der Schnellinger GmbH werden aktuell inkrementell durchgeführt.\n\n' +
    'Eine Vollsicherung wird sonntags durchgeführt. Die Datenvolumen der Tagessicherungen für die 21. Woche sind als Säulendiagramm dargestellt (siehe Referenztext).\n\n' +
    'Es wird überlegt, anstatt inkrementeller Datensicherungen differenzielle Datensicherungen durchzuführen.\n\n' +
    'Berechnen Sie anhand der gegebenen Datenvolumen die sich daraus resultierenden Datenvolumen pro Tag und stellen Sie die Ergebnisse entsprechend in dem folgenden Wochenplan dar.',
  maxPoints: 6,
  modelSolution:
    'Datenvolumen der inkrementellen Sicherungen pro Tag (siehe Angabe):\nMontag: 25 GB\nDienstag: 10 GB\nMittwoch: 10 GB\nDonnerstag: 20 GB\nFreitag: 10 GB\nSamstag: 5 GB\n\n' +
    'Hieraus resultierende (kumulierte) Datenmengen bei einer differenziellen Sicherung:\nMo: 25 GB\nDi: 35 GB\nMi: 45 GB\nDo: 65 GB\nFr: 75 GB\nSa: 80 GB',
  answerStatus: 'confirmed',
  sourcePage: 10,
}

const SAN_REFERENCE =
  'Die Daten der Schnellinger GmbH werden zurzeit auf einem SAN mit einer Nettospeicherkapazität von 8 TiB gespeichert. Aufgrund des Alters des SAN und einer Kapazitätsauslastung von 90 % wurde beschlossen, ein neues SAN zu beschaffen.\n\n' +
  'In dem neuen SAN können maximal 24 Festplatten vom Typ SAS 3200A mit einer Speicherkapazität von je 1 TiB verbaut werden. Der jährliche Datenzuwachs der Schnellinger GmbH beträgt 450 GiB.'

const q4ba: ApExamQuestion = {
  id: 'ap2-si-t1-2023-sommer-q4-ba',
  examId: 'ap2-si-t1-2023-sommer',
  questionNumber: 4,
  subPart: 'ba',
  topic: 'SAN / Speicherkapazitätsberechnung',
  scenario: SCENARIO,
  referenceText: SAN_REFERENCE,
  question: 'Ermitteln Sie die benötigte Nettospeicherkapazität bei einer Übernahme des Altdatenbestands und einer geplanten Betriebszeit von fünf Jahren.\n\nDer Rechenweg ist anzugeben.',
  maxPoints: 4,
  modelSolution:
    'Berechnung des Altdatenbestandes:\n8 TiB * 0,9 = 7,2 TiB\n\n' +
    'Umrechnung TiB in GiB:\n7,2 TiB * 1.024 = 7.372,80 GiB\n\n' +
    'Berechnung des Datenzuwachses für 5 Jahre:\n5 * 450 GiB = 2.250 GiB\n\n' +
    'Berechnung der benötigten Nettospeicherkapazität:\n2.250 GiB + 7.372,80 GiB = 9.622,80 GiB (≈ 9,4 TiB)',
  answerStatus: 'confirmed',
  sourcePage: 11,
}

const q4bb: ApExamQuestion = {
  id: 'ap2-si-t1-2023-sommer-q4-bb',
  examId: 'ap2-si-t1-2023-sommer',
  questionNumber: 4,
  subPart: 'bb',
  topic: 'RAID 6 / Festplattenanzahl',
  scenario: SCENARIO,
  referenceText: SAN_REFERENCE + '\n\nHinweis: Sollte ba) nicht bearbeitet worden sein, ist mit dem alternativen Ausgangswert von 9,7 TiB weiterzurechnen.',
  question: 'Ermitteln Sie die Anzahl der benötigten Festplatten des SAN, wenn ein RAID-6-Verbund eingerichtet wird.\n\nHinweis: Sollte ba) nicht bearbeitet worden sein, rechnen Sie mit dem alternativen Ausgangswert von 9,7 TiB weiter.\n\nDer Rechenweg ist anzugeben.',
  maxPoints: 4,
  modelSolution:
    'Für eine Nettospeicherkapazität von 9,4 TiB werden 10 Festplatten vom Typ SAS 3200A mit einer Speicherkapazität von je 1 TiB benötigt. Zusätzlich werden durch die doppelten Paritäten von RAID 6 noch zwei weitere Festplatten benötigt.\n\n' +
    'In Summe werden also 12 x 1 TiB Festplatten benötigt.',
  answerStatus: 'confirmed',
  sourcePage: 11,
}

const q4bc: ApExamQuestion = {
  id: 'ap2-si-t1-2023-sommer-q4-bc',
  examId: 'ap2-si-t1-2023-sommer',
  questionNumber: 4,
  subPart: 'bc',
  topic: 'RAID / Hot-Spare-Festplatte',
  scenario: SCENARIO,
  question: 'Das SAN im RAID-6-Verbund soll zusätzlich mit einer Hot-Spare-Festplatte betrieben werden.\n\nErläutern Sie die Funktion einer Hot-Spare-Festplatte.',
  maxPoints: 4,
  modelSolution:
    'Bei einer Hot-Spare-Festplatte handelt es sich um eine zusätzliche nicht direkt verwendbare Festplatte. Fällt eine Festplatte im RAID-Verbund aus, tritt die Hot-Spare-Festplatte vollautomatisch an deren Stelle.\n\n' +
    'Weiterführende Information: Da es sich um einen Tausch im laufenden Betrieb (Hot) handelt und die Festplatte eine Reserve (Spare) darstellt, wird die zusätzliche Festplatte als Hot-Spare-Festplatte bezeichnet.',
  answerStatus: 'confirmed',
  sourcePage: 11,
}

const q4c: ApExamQuestion = {
  id: 'ap2-si-t1-2023-sommer-q4-c',
  examId: 'ap2-si-t1-2023-sommer',
  questionNumber: 4,
  subPart: 'c',
  topic: 'Disaster Recovery / RTO und RPO',
  scenario: SCENARIO,
  referenceText:
    'Recovery Time Objective and Recovery Point Objective\n\n' +
    'The recovery time objective (RTO) is the planned duration of time and a service level within. A business process must be restored after a disaster in order to avoid unacceptable disturbances associated with a break in business continuity. It can include the time for trying to find a solution, the time to fix the problem, the time for recovery itself and the communication of the solved problem to users.\n\n' +
    'The recovery point objective (RPO) measures the maximum time period in which recent data might have been permanently lost in the event of a major failure. For instance if the business continuity plan is „restore up to last available backup", the RPO is the maximum interval between such a backup that has been safely stored offsite.',
  question:
    'Die Schnellinger GmbH hat für die Notfallwiederherstellung (Disaster Recovery) der Unternehmensdaten in ihren Service Level Agreements die Zielvorgaben Recovery Time Objective (RTO) und Recovery Point Objective (RPO) beschrieben (englischer Text siehe Referenztext).\n\n' +
    'Erläutern Sie anhand des Textes …\n\n– die Zielvorgabe Recovery Time Objective (RTO):\n\n– die Zielvorgabe Recovery Point Objective (RPO):',
  maxPoints: 6,
  modelSolution:
    'Das Recovery Time Objective (RTO) beschreibt die Zeit, die eine Anwendung oder ein System ausfallen kann, ohne dass ein bedeutsamer Schaden für das Unternehmen entsteht. Es beschreibt die erlaubte Zeitspanne zwischen dem Zeitpunkt des Schadens und der vollständigen Wiederherstellung.\n\n' +
    'Das Recovery Point Objective (RPO) beschreibt die Menge des Datenverlustes, die innerhalb eines Unternehmens in Kauf genommen werden kann, ohne dass ein bedeutsamer Schaden für das Unternehmen entsteht. Es beschreibt die erlaubte Zeitspanne zwischen zwei Datensicherungen.\n\n' +
    'Anhand der Angabe sind auch kürzere Antworten möglich.',
  answerStatus: 'confirmed',
  sourcePage: 12,
}

export const ap2SiT1_2023SommerQuestions: ApExamQuestion[] = [
  q1a,
  q1ba,
  q1bb,
  q1c,
  q1d,
  q1e,
  q2aa,
  q2ab,
  q2ac,
  q2b,
  q2c,
  q3a,
  q3b,
  q3c,
  q4a,
  q4ba,
  q4bb,
  q4bc,
  q4c,
]
