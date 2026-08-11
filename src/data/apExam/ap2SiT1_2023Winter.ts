import type { ApExamMeta, ApExamQuestion } from '../../types/apExam'

export const ap2SiT1_2023WinterMeta: ApExamMeta = {
  id: 'ap2-si-t1-2023-winter',
  area: 'AP2_SI_T1',
  year: 2023,
  period: 'Winter',
  label: 'Winter 2023/24',
  examDate: 'Mittwoch, 29. November 2023',
  examTitle: 'Konzeption und Administration von IT-Systemen',
  courseCode: '1202',
  sourceExamPdf: 'SI_AP2_T1_23w.pdf',
  sourceSolutionPdf: 'Loe_SI_AP2_T1_23w.pdf',
  solutionSource: 'confirmed',
  taskCount: 4,
  durationMinutes: 90,
  totalPoints: 100,
}

const SCENARIO =
  'Die Aufgaben 1 bis 4 beziehen sich auf die folgende Ausgangssituation:\n\nSie sind bei der Nort-IT GmbH als Fachinformatiker Systemintegration beschäftigt. Die Nort-IT GmbH ist ein in Hamburg ansässiges Systemhaus, welches überwiegend für mittelständische Betriebe im Bereich IT-Services agiert.\n\nDie Reederei IDA hat die Nort-IT damit beauftragt, verschiedene Systemerweiterungen und Optimierungen an ihren IT-Systemen vorzunehmen.\n\nBearbeiten Sie in diesem Zusammenhang die folgenden vier Aufgaben:\n1. Serverdienste bereitstellen\n2. Datensicherheit und Berechtigungen prüfen\n3. Programm zur Serverüberwachung erweitern\n4. Datensicherung und Patch-Management einrichten'

export const ap2SiT1_2023WinterQuestions: ApExamQuestion[] = [
  // 1. Aufgabe (25 Punkte) — Serverdienste bereitstellen
  {
    id: 'ap2-si-t1-2023-winter-q1-a',
    examId: 'ap2-si-t1-2023-winter',
    questionNumber: 1,
    subPart: 'a',
    topic: 'Cloud Computing / SaaS',
    scenario: SCENARIO,
    question:
      '1. Aufgabe (25 Punkte)\n\nIm Rahmen der Neustrukturierung der IT-Dienste der IDA AG sollen verschiedene Anwendungen in die Private Cloud der IDA AG migriert und als Software as a Service (SaaS) bereitgestellt werden.\n\na) Erläutern Sie drei Aspekte, die für eine Bereitstellung von Anwendungen in Form von SaaS sprechen.',
    maxPoints: 6,
    modelSolution:
      'Skalierbarkeit und Flexibilität: Durch die Bereitstellung der Anwendungen in Form von SaaS können diese einfach skaliert und an die Bedürfnisse der IDA AG angepasst werden. Beispielsweise kann bei einer steigenden Nachfrage die Rechenleistung oder die Speicherkapazität der Anwendung flexibel erhöht werden. Hierdurch kann die IDA AG ihre Ressourcen schneller, flexibler und effizienter einsetzen.\n\nWartung und Aktualisierung: Durch die zentralisierte Bereitstellung der Anwendungen in der Private Cloud der IDA AG können die Anwendungen schneller und zuverlässiger gewartet und aktualisiert werden. Hierdurch können Ausfallzeiten minimiert und neue Funktionen schneller eingeführt werden.\n\nGeringere Hardwareanforderungen an die eingesetzten Clients: Da die Anwendungen zentral in der Private Cloud ausgeführt werden, wird an den lokalen Clients der Anwender weniger Rechenleistung benötigt. Für den Zugriff auf die SaaS-Komponenten wird lediglich eine stabile Netzwerkverbindung benötigt. Hierdurch können auch leistungsschwache und unterschiedliche Endgeräte für den Zugriff auf die Anwendungen genutzt werden.\n\nMögliche weitere Aspekte für eine Erläuterung:\n– Erhöhung des Sicherheitsniveaus durch zentrale Richtlinien und Maßnahmen\n– Standortunabhängiger Zugriff\n– Einfachere Datenverwaltung\n– Erhöhung der Umweltfreundlichkeit durch Verringerung des Energieverbrauches\n– Erhöhte Verfügbarkeit\n– Erleichterter Support sowie Troubleshooting\n\nWeiterführende Informationen: Während die Bereitstellung von Software as a Service insbesondere für Endnutzer relevant ist, werden Platform as a Service (PaaS) und Infrastructure as a Service (IaaS) eher von Administratoren und Entwicklern genutzt. Je nach Servicemodell steht ein unterschiedlicher Leistungsumfang zur Verfügung (Diagramm: bei IaaS verwaltet der Kunde noch Virtualisierung, Speicher, Netzwerk und Server selbst; bei PaaS zusätzlich auch Betriebssystem und Middleware durch den Anbieter; bei SaaS werden zusätzlich auch Daten und Anwendungen vollständig durch den Anbieter bereitgestellt).',
    answerStatus: 'confirmed',
    sourcePage: 2,
  },
  {
    id: 'ap2-si-t1-2023-winter-q1-ba',
    examId: 'ap2-si-t1-2023-winter',
    questionNumber: 1,
    subPart: 'ba',
    topic: 'Server-Cluster',
    scenario: SCENARIO,
    referenceText:
      'b) Es soll eine Private Cloud mit einem Server-Cluster aufgebaut werden. Der Server-Cluster setzt sich aus vier Servern zusammen und dient als Plattform für die virtuellen Server.',
    question: 'ba) Erläutern Sie zwei Sachverhalte, die beim Aufbau des Server-Clusters zu beachten sind.',
    maxPoints: 4,
    modelSolution:
      'Gleiche Software: Mithilfe der gleichen Software(-versionen) ist sichergestellt, dass die vier Server untereinander kompatibel sind. Außerdem können so Sicherheitsupdates und Patches schneller verteilt werden und die Administration des Server-Clusters wird erheblich vereinfacht.\n\nLeistung / Durchsatz: Die Leistungsfähigkeit der einzelnen Server im Cluster ist entscheidend für die Gesamtleistung und den Durchsatz des Clusters. Durch eine ausreichende Ressourcenausstattung jedes Servers im Cluster können Flaschenhälse vermieden und eine hohe Leistungsfähigkeit des Clusters gewährleistet werden.\n\nMögliche weitere Aspekte für eine Erläuterung:\n– Testung\n– Sicherheitsanforderungen\n– Verfügbarkeit bzw. Redundanz\n– Geeignetes Betriebssystem\n– Gemeinsame Speicher\n– Identische Konfigurationen\n– Zertifizierte Hardware',
    answerStatus: 'confirmed',
    sourcePage: 2,
  },
  {
    id: 'ap2-si-t1-2023-winter-q1-bb',
    examId: 'ap2-si-t1-2023-winter',
    questionNumber: 1,
    subPart: 'bb',
    topic: 'Virtualisierung / Hypervisor',
    scenario: SCENARIO,
    question:
      'bb) Bei der Server-Virtualisierung kommt ein Hypervisor (Virtual-Machine-Monitor) zum Einsatz.\n\nErläutern Sie den Zweck eines Hypervisors.',
    maxPoints: 4,
    modelSolution:
      'Der Hypervisor sitzt zwischen der Hardware bzw. dem Betriebssystem und abstrahiert die Hardware, um den virtuellen Maschinen vorzugeben, dass sie physische Maschinen sind. Dadurch ermöglicht er die Ausführung mehrerer virtueller Maschinen auf einem physischen System.\n\nWeiterführende Informationen: Typ-1-Hypervisoren arbeiten direkt auf der Hardware, während Typ-2-Hypervisoren über ein Host-Betriebssystem laufen. Die zusätzliche Softwareschicht bei Typ-2-Hypervisoren beeinflusst ihre Leistung im Vergleich zu Typ-1-Hypervisoren.',
    answerStatus: 'confirmed',
    sourcePage: 2,
  },
  {
    id: 'ap2-si-t1-2023-winter-q1-bc',
    examId: 'ap2-si-t1-2023-winter',
    questionNumber: 1,
    subPart: 'bc',
    topic: 'Containerisierung',
    scenario: SCENARIO,
    referenceText:
      'Einige Anwendungen sollen aus bestimmten Gründen nicht mittels virtueller Maschinen bereitgestellt werden, sondern mittels Containerisierung.\n\nZu dem Thema Containerisierung (Container) liegt folgender Text (Quelle Wikipedia) vor:\n\n"Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels. Because all of the containers share the services of a single operating system kernel, they use fewer resources than virtual machines."\n\nHinweis: Der Text dient als Hilfe und soll nicht übersetzt werden!',
    question: 'bc) Erläutern Sie das Funktionsprinzip der Containerisierung.',
    maxPoints: 5,
    modelSolution:
      'Containerisierung isoliert Anwendungen voneinander, indem sie ihre eigenen Umgebungen mit Software, Bibliotheken und Konfigurationen bündeln. Auf einem Betriebssystem können viele Container mit je einer Anwendung bereitgestellt werden. Container arbeiten in isolierten Umgebungen und kommunizieren über spezielle APIs oder Netzwerkprotokolle.',
    answerStatus: 'confirmed',
    sourcePage: 3,
  },
  {
    id: 'ap2-si-t1-2023-winter-q1-bd',
    examId: 'ap2-si-t1-2023-winter',
    questionNumber: 1,
    subPart: 'bd',
    topic: 'Stromkostenberechnung',
    scenario: SCENARIO,
    question:
      'bd) Vor der Umstellung auf den neuen Server-Cluster betrugen die monatlichen Stromkosten im vergangenen Jahr durchschnittlich 1.359,44 EUR inkl. Nebenkosten.\n\nFür jeden der vier neuen Server des Clusters wird mit einer durchschnittlichen Leistungsaufnahme von 600 W gerechnet. Der Preis für eine Kilowattstunde wird mit 40 ct veranschlagt. Dazu kommt eine monatliche Pauschale für die Nebenkosten in Höhe von 20 EUR.\n\nBerechnen Sie den Betrag der Reduzierung bzw. der Erhöhung, um den sich die jährlichen (365 Tage) Stromkosten voneinander unterscheiden. Rechnen Sie mit einem 24/7-Betrieb.',
    maxPoints: 6,
    modelSolution:
      'Berechnung der Stromkosten pro Jahr für das Cluster:\n4 Server * 0,6 kW * 0,4 € * 24 h * 365 Tage = 8.409,60 €\n\nBerechnung der Nebenkosten pro Jahr:\n12 * 20,00 € = 240,00 €\n\nBerechnung der Gesamtkosten pro Jahr:\n8.409,60 € + 240,00 € = 8.649,60 €\n\nBerechnung der bisherigen Kosten pro Jahr:\n1.359,44 € * 12 = 16.313,28 €\n\nBerechnung der Kostenersparnis:\n16.313,28 € – 8.649,60 € = 7.663,68 €',
    answerStatus: 'confirmed',
    sourcePage: 3,
  },

  // 2. Aufgabe (22 Punkte) — Datensicherheit und Berechtigungen prüfen
  {
    id: 'ap2-si-t1-2023-winter-q2-a',
    examId: 'ap2-si-t1-2023-winter',
    questionNumber: 2,
    subPart: 'a',
    topic: 'Kryptographie / Schutzziele',
    scenario: SCENARIO,
    question:
      '2. Aufgabe (22 Punkte)\n\nDie Reederei IDA hat ein streng vertrauliches Projekt an die Nort-IT GmbH vergeben. Alle Mitarbeiter, die an dem Projekt „Alster" mitarbeiten, mussten strenge Datenschutzbestimmungen unterschreiben, die unter anderem auch die Verschlüsselung jeglicher dezentral gehaltener Daten auf externen Datenträgern für dieses Projekt vorsehen.\n\na) Erläutern Sie die folgenden Ziele der Kryptographie:\nVertraulichkeit:\nIntegrität:\nAuthentizität:',
    maxPoints: 6,
    modelSolution:
      'Vertraulichkeit: Hierdurch wird sichergestellt, dass die Daten nur von berechtigten Personen eingesehen werden dürfen. Die externen Datenträger werden also so verschlüsselt, dass nur autorisierte Personen diese entschlüsseln können.\n\nIntegrität: Hierdurch wird sichergestellt, dass die Daten nicht unbemerkt geändert oder manipuliert werden. Durch digitale Signaturen oder Hashfunktionen könnte die Reederei IDA die Unversehrtheit und somit die Integrität der Daten sicherstellen.\n\nAuthentizität: Hierdurch wird sichergestellt, dass die Daten nur aus autorisierten Quellen stammen. Außerdem ist es das Ziel der Authentizität, Möglichkeiten bereitzustellen, um autorisierte Nutzer zu identifizieren. Die Reederei könnte hierfür z. B. spezielle Zugangsprotokolle einsetzen.',
    answerStatus: 'confirmed',
    sourcePage: 4,
  },
  {
    id: 'ap2-si-t1-2023-winter-q2-b',
    examId: 'ap2-si-t1-2023-winter',
    questionNumber: 2,
    subPart: 'b',
    topic: 'Verschlüsselungsalgorithmen',
    scenario: SCENARIO,
    question:
      'b) Zur Verschlüsselung der dezentral auf externen Datenträgern gehaltenen Daten des Projekts „Alster" wird ein Verschlüsselungstool eingesetzt.\n\nIn Bezug auf Verschlüsselung kommen folgende Algorithmen zum Einsatz: DES, AES, RSA.\n\nBeurteilen Sie die Eignung dieser Algorithmen im konkreten Anwendungsfall und sprechen Sie eine Empfehlung aus.\nDES:\nAES:\nRSA:\nEmpfehlung:',
    maxPoints: 7,
    modelSolution:
      'DES: DES ist inzwischen aufgrund der sehr geringen Schlüssellänge von 56 Bit sowie mehrerer bekannter Sicherheitslücken nicht mehr zu verwenden. Der Algorithmus ist sehr anfällig für Brute-Force-Angriffe.\n\nAES: AES ist ein robuster und sicherer Verschlüsselungsalgorithmus mit Schlüssellängen von 128, 192 oder 256 Bit. Der Standard kann Brute-Force-Angriffen effektiv widerstehen.\n\nRSA: RSA ist ein asymmetrischer Verschlüsselungsalgorithmus, der für die Verschlüsselung von Schlüsseln und digitalen Signaturen verwendet wird. Der Standard ist für die Verschlüsselung großer Datenmengen ungeeignet.\n\nEmpfehlung: AES ist für die Verschlüsselung der externen Datenträger einzusetzen.',
    answerStatus: 'confirmed',
    sourcePage: 4,
  },
  {
    id: 'ap2-si-t1-2023-winter-q2-ca',
    examId: 'ap2-si-t1-2023-winter',
    questionNumber: 2,
    subPart: 'ca',
    topic: 'Linux-Dateiberechtigungen',
    scenario: SCENARIO,
    referenceText:
      'c) Nach der Einbindung des verschlüsselten Datenträgers ins System möchte der Projektleiter und Dateieigentümer Herbert Meyer die Datei 2023-01-10_Aenderungen.txt mit den heute gesammelten Erkenntnissen füllen.\n\nhmeyer@forschungspc$ ls -la\n----rw-r-- 1  hmeyer alster  Jan 10 12:10  2023-01-10_Aenderungen.txt\n\nAnlage zur 2. Aufgabe – Hilfestellung für den Aufbau von Zugriffsrechten (Seite 5 des Aufgabensatzes):\nDas erste Zeichen zeigt den Typ der Datei an: "-" = eine "normale" Datei, "d" = Verzeichnis, "l" = Verknüpfung (symbolischer Link).\nDie nachfolgenden Rechte sind in drei Gruppen zu je drei Spalten aufgeteilt (r = read/Leserecht, w = write/Schreibrecht, x = execute/Ausführungsrecht): erste Gruppe = Rechte des Eigentümers der Datei (owner → user), zweite Gruppe = Rechte der Gruppe der Datei (group), dritte Gruppe = Rechte aller anderen Benutzer (other). Für jede Datei kann ein individueller Dateibesitzer sowie die Gruppe, der die Datei gehört, angegeben werden. Die Abarbeitungsreihenfolge der Rechte liest sich von links nach rechts.\nÜbersetzter und angepasster Auszug der Manpage des chmod-Befehls: chmod ändert die Dateimodusbits jeder gegebenen Datei je nach Modus (symbolische Darstellung oder Oktalzahl). Ein numerischer Modus besteht aus einer bis drei Oktalziffern (0–7), die durch Addieren der Bits mit den Werten 4, 2 und 1 abgeleitet werden: Die erste Ziffer wählt Berechtigungen für den Benutzer, dem die Datei gehört (Eigentümer): Lesen (4), Schreiben (2), Ausführen (1); die zweite Ziffer wählt Berechtigungen für die Gruppe der Datei mit denselben Werten; die dritte Ziffer für andere Benutzer, die nicht in der Gruppe der Datei sind, mit den gleichen Werten.',
    question:
      'ca) Beim Versuch, die Datei 2023-01-10_Aenderungen.txt zu öffnen, um sie zu verändern, erhält Herr Meyer jedoch die Fehlermeldung „Keine Berechtigung".\n\nErläutern Sie die Ursache dieser Fehlermeldung und geben Sie einen Lösungsvorschlag an. Beachten Sie die Anlage auf Seite 5.\nUrsache der Fehlermeldung:\nLösungsvorschlag:',
    maxPoints: 3,
    modelSolution:
      'Ursache der Fehlermeldung: Herr Meyer (hmeyer) hat als Eigentümer keinerlei Rechte für die Datei „2023-01-10_Aenderungen.txt".\n\nLösungsvorschlag: Der Eigentümer (hmeyer) sollte sowohl das Lese- als auch das Schreibrecht für die Datei erhalten.\n\nAlternative: Der User hmeyer ist der Gruppe alster hinzuzufügen. Hierüber könnte der User die Datei dann verändern.\n\nFalsch wäre es, „other" pauschal die Schreibrechte zu erteilen.',
    answerStatus: 'confirmed',
    sourcePage: 5,
  },
  {
    id: 'ap2-si-t1-2023-winter-q2-cb',
    examId: 'ap2-si-t1-2023-winter',
    questionNumber: 2,
    subPart: 'cb',
    topic: 'Linux-Dateiberechtigungen (chmod)',
    scenario: SCENARIO,
    referenceText:
      'cb) Ein Administrator des Systems hat das Problem mit folgendem Befehl gelöst:\nchmod 664 2023-01-10_Aenderungen.txt\n\n(Siehe auch die Anlage zur 2. Aufgabe auf Seite 5, wie unter ca) zitiert.)',
    question:
      'Beschreiben Sie die Auswirkungen jeder Ziffer der gesetzten Rechte (Eigentümer, Gruppe, Andere) des chmod-Befehls.\nEigentümer:\nGruppe:\nAndere:',
    maxPoints: 6,
    modelSolution:
      'Eigentümer: Als erstes Recht wird das Recht des Eigentümers geändert (6). Der Dateieigentümer erhält hierdurch sowohl lesende als auch schreibende Rechte (Lesen (4) + Schreiben (2) = 6).\n\nGruppe: An zweiter Stelle werden die Rechte der Gruppe geändert. Die Gruppenmitglieder erhalten ebenfalls lesende und schreibende Rechte.\n\nAndere: An dritter Stelle werden die Rechte aller anderen Anwender gesetzt. Alle anderen erhalten lesende Rechte.',
    answerStatus: 'confirmed',
    sourcePage: 5,
  },

  // 3. Aufgabe (27 Punkte) — Programm zur Serverüberwachung erweitern
  {
    id: 'ap2-si-t1-2023-winter-q3-a',
    examId: 'ap2-si-t1-2023-winter',
    questionNumber: 3,
    subPart: 'a',
    topic: 'Programmierung (Arrays, Schleifen)',
    scenario: SCENARIO,
    referenceText:
      'Syntax zur 3. Aufgabe (Anlage):\nBeispiele für verschiedene Schleifenarten:\nwhile(number < 5) { Console.WriteLine(number); number = number + 1; }\nfor(int i = 0; i < number; i++) { Console.WriteLine(number); }\ndo { Console.WriteLine(number); number = number + 1; } while(number < 5);\n\nBeispiel für eine Auswahlanweisung:\nint number = 20;\nif (number < 18) { Console.WriteLine("ok"); } else { Console.WriteLine("not ok"); }\n\nKommentare: //Kommentar einzeilig  /* Kommentar mehrzeilig */\n\nBeispiel für Konsolenausgabe: Die Anweisung Console.WriteLine("Die Temperatur beträgt: " + Temperatur + " Grad Celsius"); erzeugt die Bildschirmausgabe "Die Temperatur beträgt: 45 Grad Celsius".\n\nAufgabentabelle „Darstellung der Werte im Array maxRAM20231119" für den 19.11.2023 (Stunde 0 bis 1, 1 bis 2, 2 bis 3, 3 bis 4, 4 bis 5, 5 bis 6, … 20 bis 21, 21 bis 22, 22 bis 23, 23 bis 24):\nArray-Index: 0, 1, 2, 3, 4, 5, 20, 21, 22, 23\nArray-Wert: 33, 44, 40, 52, 60, 56, 40, 52, 60, 56\n\nBeispiel-Konsolenausgabe: "Mittelwert Tag: 46 / Mittelwert Nachmittag: 49 / Mittelwert Vormittag: 43"\n\nBereits vorgegebener Programmrumpf „MemMon":\nint sumLast = 0;                    //Summe der Stundenwerte\nint mwTag = 0;                      //Mittelwert Tag\nint mwVormittag = 0;                //Mittelwert erste Tageshälfte\nint mwNachmittag = 0;                //Mittelwert zweite Tageshälfte\nint[] maxRAM20231119 = new int[24] {33,44,40,52,60,56,33,44,40,52,60,56,33,44,40,52,60,56,33,44,40,52,60,56};   //Array mit Testdaten\n                                     //Berechnung Mittelwert Tag\nfor (int i = 0; i < 24; i++)\n{\n  sumLast = sumLast + maxRAM20231119[i];\n}\nmwTag = sumLast / 24;\n                                     //Mittelwert für Tag ausgeben\nConsole.WriteLine("Mittelwert Tag: " + mwTag);\n                                     //Berechnung Mittelwert erste Tageshälfte\n\n                                     //Berechnung Mittelwert zweite Tageshälfte\n\n                                     //Mittelwerte für Tageshälften reihenfolgerichtig ausgeben',
    question:
      '3. Aufgabe (27 Punkte)\n\nIm Rahmen der IT-Systemüberwachung bei der IDA AG sollen Sie eine Software-Erweiterung entwickeln:\n\na) Das Programm „MemMon" berechnet den Mittelwert der Speicherauslastung (RAM) des Web-Servers pro Tag. Die Werte der stündlichen Speicherauslastung pro Tag sind in eindimensionalen Arrays als ganzzahlige Prozentwerte gespeichert.\n\nSie sollen das Programm „MemMon" so erweitern, dass zusätzlich jeweils der Mittelwert der Speicherauslastung für die erste Tageshälfte (0-12 Uhr „Vormittag") und für die zweite Tageshälfte (12-24 Uhr „Nachmittag") berechnet und angezeigt wird. Die Tageshälfte mit dem kleineren Mittelwert soll in der dritten Zeile stehen, bei Gleichheit erst „Vormittag", dann „Nachmittag"!\n\nVervollständigen Sie den vorliegenden Programmentwurf entsprechend. Orientieren Sie sich dabei an den vorgegebenen Kommentaren und nutzen Sie die Anlage „Syntax".',
    maxPoints: 17,
    modelSolution:
      '[…] (bereits vorgegebener Programmteil unverändert, siehe Anlage)\n\n//Berechnung Mittelwert erste Tageshälfte\nint sumLast = 0;\nfor (int i = 0; i < 12; i++)\n{\n      sumLast = sumLast + maxRAM20231119[i];\n}\nmwVormittag = sumLast / 12;\n\n//Berechnung Mittelwert zweite Tageshälfte\nint sumLast = 0;\nfor (int i = 12; i < 24; i++)\n{\n      sumLast = sumLast + maxRAM20231119[i];\n}\nmwNachmittag = sumLast / 12;\n\n//Mittelwerte für Tageshälften reihenfolgerichtig ausgeben\nif (mwVormittag >= mwNachmittag)\n{\n      Console.WriteLine("Mittelwert Vormittag: " + mwVormittag);\n      Console.WriteLine("Mittelwert Nachmittag: " + mwNachmittag);\n}\nelse\n{\n      Console.WriteLine("Mittelwert Nachmittag: " + mwNachmittag);\n      Console.WriteLine("Mittelwert Vormittag: " + mwVormittag);\n}',
    answerStatus: 'confirmed',
    sourcePage: 8,
  },
  {
    id: 'ap2-si-t1-2023-winter-q3-b',
    examId: 'ap2-si-t1-2023-winter',
    questionNumber: 3,
    subPart: 'b',
    topic: 'Pseudocode',
    scenario: SCENARIO,
    question:
      'Fortsetzung 3. Aufgabe\n\nb) Der Entwurf eines Algorithmus kann auch mithilfe des sogenannten „Pseudocodes" erfolgen.\n\nErläutern Sie zwei Vorteile der Verwendung von Pseudocode im Vergleich zu realen Programmiersprachen.',
    maxPoints: 6,
    modelSolution:
      'Abstraktion und Klarheit: Dadurch, dass sich Pseudocode nicht zwingend an die Syntax einer bestimmten Programmiersprache halten muss, können Programmierer ihre Ideen ohne Einschränkungen formlos und verständlich darstellen. Hierdurch wird der Code besser lesbar und einfacher zu adaptieren.\n\nEinfacher für Einsteiger: Pseudocode bietet eine einladende Einstiegsmöglichkeit. Anfänger, die sich erst noch mit den Grundlagen der Programmierung vertraut machen müssen, können hierdurch ungehindert erste Konzepte und Logiken erarbeiten. Außerdem ist es einfacher, zu experimentieren und unterschiedliche Herangehensweisen flexibler zu erproben.\n\nMögliche weitere Vorteile für eine Erläuterung:\n– Durch bekannte Wörter leichter zu verstehen\n– Kompakt und daher besser für gemeinschaftliche Projekte geeignet\n– Reduzierte Abhängigkeit von bestimmten Programmiersprachen\n– Erleichtert das Erklären und Lehren\n– Ermöglicht schnelles Prototyping',
    answerStatus: 'confirmed',
    sourcePage: 10,
  },
  {
    id: 'ap2-si-t1-2023-winter-q3-c',
    examId: 'ap2-si-t1-2023-winter',
    questionNumber: 3,
    subPart: 'c',
    topic: 'Exceptions',
    scenario: SCENARIO,
    question:
      'c) Bei der Ausführung eines Programms, insbesondere in der Entwicklungsphase, kann es zu einem Programmabbruch aufgrund einer Ausnahmebedingung (Exception) kommen.\n\nErläutern Sie zwei Umstände, die Grund für das Auftreten einer „Exception" sein können.',
    maxPoints: 4,
    modelSolution:
      'Index außerhalb des gültigen Bereichs: Die Schleifen verwenden die Array-Indizes, um die Werte von „maxRAM20231119" zu durchlaufen. Wenn die Indizes außerhalb des gültigen Bereichs liegen (z. B. wenn „i" größer als der maximal zulässige Index ist), wird eine Exception ausgelöst.\n\nTeilen durch Null: Die Berechnungen der Mittelwerte basieren auf einer Division. Wenn „sumLast" nicht richtig initialisiert oder berechnet wird, könnte dies zu einer Division durch Null führen. Hierdurch könnte eine Exception auftreten.\n\nMögliche weitere Gründe für eine Exception:\n– Speicherüberlauf\n– Logikfehler in den Bedingungen\n– Zugriff auf ungültige Datentypen\n– Null-Referenzen',
    answerStatus: 'confirmed',
    sourcePage: 10,
  },

  // 4. Aufgabe (26 Punkte) — Datensicherung und Patch-Management einrichten
  {
    id: 'ap2-si-t1-2023-winter-q4-a',
    examId: 'ap2-si-t1-2023-winter',
    questionNumber: 4,
    subPart: 'a',
    topic: 'Backup / Restore',
    scenario: SCENARIO,
    referenceText:
      'Tabelle Bandsicherung:\nTag:        Sa      So      Mo      Di      Mi      Do      Fr      Sa      So      Mo      Di      Mi      Do\nDatum:      07.10.2023  08.10.2023  09.10.2023  10.10.2023  11.10.2023  12.10.2023  13.10.2023  14.10.2023  15.10.2023  16.10.2023  17.10.2023  18.10.2023  19.10.2023\nBandbezeichnung: 3D6  V4  4D1  4D2  4D3  4D4  4D5  4D6  V5  5D1  5D2  5D3  5D4\nSicherungsmethode: Diff.  Voll.  Diff.  Diff.  Diff.  Diff.  Diff.  Diff.  Voll.  Diff.  Diff.  Diff.  Diff.\n(Sicherungsmethode: Voll. = Vollsicherung, Diff. = Differenzielles Backup. Das Backup findet jeweils um 23 Uhr des angegebenen Wochentags statt.)',
    question:
      '4. Aufgabe (26 Punkte)\n\nIm Rahmen der Datenhaltung und des Patch-Managements sollen Sie folgende Aufgaben bearbeiten:\n\na) Nach dem Ausfall mehrerer Festplatten eines RAID-Systems am 18.10.2023 um 18:12 Uhr soll ein neues RAID-System aufgebaut werden. Die Daten der vorhandenen Sicherungsbänder sollen zur Datenwiederherstellung in das neue RAID-System übertragen werden. Das Backup findet jeweils um 23 Uhr des angegebenen Wochentags statt.\n\nGeben Sie die Bandbezeichnungen der entsprechenden Bänder in der korrekten Reihenfolge an, die für eine vollständige Wiederherstellung der Daten in dem neuen RAID-System benötigt werden.\n\nErläutern Sie Ihre Auswahl.',
    maxPoints: 6,
    modelSolution:
      'Der aktuellste gesicherte Datenstand ist Dienstag, der 17.10.2023, um 23:00 Uhr. Da es sich beim Band 5D2 allerdings um ein differenzielles Backup handelt, genügt es nicht, nur dieses Band wiederherzustellen. Ein differenzielles Backup enthält immer nur die Daten seit der letzten Vollsicherung.\n\nZusätzlich zum Band 5D2 wird das vorherige Vollbackup V5 vom 15.10.2023 benötigt. Zuerst müssen die Daten von V5 und anschließend die Daten von 5D2 für die Wiederherstellung übertragen werden.\n\nBenötigte Bänder in korrekter Reihenfolge: V5 (15.10.2023, Vollsicherung), dann 5D2 (17.10.2023, differenzielles Backup).\n\nWeiterführende Informationen:\nVollbackup: Beim Vollbackup erfolgt ein vollständiges Backup eines Laufwerkes, einer Partition oder ausgewählter Verzeichnisse. Die zuvor festgelegte Auswahl wird beim Vollbackup vollständig kopiert und an anderer Stelle abgelegt. Das Archivbit wird zurückgesetzt.\nDifferenzielles Backup: Zunächst werden alle Daten vollständig kopiert (Vollbackup). Anschließend erfolgt eine zusätzliche Sicherung aller Daten, die seit dem letzten Vollbackup geändert wurden. Neu erstellte Dateien, aktualisierte sowie anderweitig veränderte Daten werden hierdurch berücksichtigt. Zyklisch wird das Vollbackup erneuert. Die Größe der differenziellen Sicherungen wächst mit jeder zusätzlichen Sicherung an. Das Verfahren benötigt im Vergleich zum Vollbackup oder zum Klonen weniger Speicherplatz. Das Archivbit wird nicht zurückgesetzt.\nInkrementelles Backup: Zunächst werden alle Daten vollständig kopiert (Vollbackup). Anschließend erfolgt eine zusätzliche Sicherung aller Daten, die nach der jeweils letzten Sicherung geändert wurden. Die letzte Sicherung kann ein Vollbackup oder eine zusätzliche Sicherung sein. Zyklisch wird das Vollbackup erneuert. Die Größe der inkrementellen Sicherungen bleibt bei gleichbleibenden Änderungen am Dateisystem relativ ähnlich. Das Verfahren benötigt im Vergleich zum Vollbackup oder zum Klonen weniger Speicherplatz. Das Archivbit wird zurückgesetzt.',
    answerStatus: 'confirmed',
    sourcePage: 11,
  },
  {
    id: 'ap2-si-t1-2023-winter-q4-b',
    examId: 'ap2-si-t1-2023-winter',
    questionNumber: 4,
    subPart: 'b',
    topic: 'Archivierung',
    scenario: SCENARIO,
    question:
      'b) Die jeweiligen Vollbackups sollen archiviert werden. Erläutern Sie zwei Maßnahmen, die ergriffen werden müssen, um aus einer Datensicherung eine Archivierung zu erstellen.',
    maxPoints: 4,
    modelSolution:
      'Speicherung der Daten mit der WORM-Methode: Durch die Write Once, Read Many Methode wird eine Speichermethode beschrieben, bei der Daten einmal geschrieben und anschließend nur noch gelesen, aber nicht mehr verändert werden dürfen. Hierdurch wird sowohl die Datenintegrität als auch die Unveränderlichkeit der Daten gewährleistet.\n\nLangzeit-Speicherung und Medienrotation: Es sollten langlebige und stabile Speichermedien verwendet werden, die für eine Langzeitarchivierung geeignet sind. Außerdem sollten die Daten regelmäßig auf neue Medien übertragen werden. Je länger ein Medium für die Archivierung verwendet wird, desto wahrscheinlicher ist ein Materialverschleiß und eine Abnutzung des Speichermediums.\n\nMögliche weitere Maßnahmen, um aus einer Datensicherung eine Archivierung zu erstellen:\n– Verschlüsselung zum Schutz vor Manipulation\n– Regelmäßige Prüfung und Validierung\n– Überwachung und Einhaltung der Compliance-Vorgaben\n– Strenge Zugriffskontrolle',
    answerStatus: 'confirmed',
    sourcePage: 11,
  },
  {
    id: 'ap2-si-t1-2023-winter-q4-c',
    examId: 'ap2-si-t1-2023-winter',
    questionNumber: 4,
    subPart: 'c',
    topic: 'Dateisystem / Zuordnungseinheiten',
    scenario: SCENARIO,
    referenceText:
      'c) Beim Formatieren eines logischen Volumens auf dem RAID kann die Größe der Zuordnungseinheit auf einen der folgenden Werte festgelegt werden:\n512 Byte, 1.024 Byte, 2.048 Byte, 4.096 Byte, 8.192 Byte, 16.384 Byte, 32.768 Byte und 65.536 Byte',
    question: 'Erläutern Sie je einen Anwendungsfall für kleinere und größere Zuordnungseinheiten.',
    maxPoints: 4,
    modelSolution:
      'Kleinere Zuordnungseinheiten (wie 512 Byte oder 1.024 Byte) sind ideal für viele kleine Dateien (z. B. Textdateien), um den Speicherplatz effizient zu nutzen.\n\nGrößere Zuordnungseinheiten (32.768 Byte oder 65.536 Byte) eignen sich besser für große Dateien wie Videos oder Bilder, um die Datenübertragungsleistung zu optimieren.\n\nWeiterführende Informationen: Das Dateisystem legt Dateien immer in ein oder mehrere Cluster einer bestimmten Zuordnungseinheit ab. Ein Cluster ist also der kleinstmögliche Speicherplatz, der zum Speichern einer Datei verwendet werden kann. Sollte eine Datei größer als die gewählte Cluster-Größe sein, werden solange weitere Cluster hinzugefügt, bis die komplette Dateigröße abgespeichert werden kann. Wenn man z. B. in den meisten Betriebssystemen mittels eines Rechtsklicks auf die Eigenschaften einer Datei zugreift, erhält man immer zwei Speicherangaben. Unter „Größe" wird die eigentliche Größe der Datei angezeigt, unter „Größe auf Datenträger" wird die Größe aller – zum Speichern der Datei benötigten – Cluster angezeigt.',
    answerStatus: 'confirmed',
    sourcePage: 11,
  },
  {
    id: 'ap2-si-t1-2023-winter-q4-d',
    examId: 'ap2-si-t1-2023-winter',
    questionNumber: 4,
    subPart: 'd',
    topic: 'Patch-Management',
    scenario: SCENARIO,
    question:
      'd) Betriebssystem-, Anwendungs- und Treiberpatches sollen firmenintern verwaltet und bereitgestellt werden. Erläutern Sie drei Vorteile dieses Vorgehens.',
    maxPoints: 6,
    modelSolution:
      'Risikoreduzierung: Durch das Vorgehen können essenzielle Sicherheitsupdates zentral gesteuert und schnellstmöglich an alle relevanten Clients verteilt werden. Außerdem können einzelne Updates ggf. zurückgehalten werden, wenn bei diesen die Gefahr besteht, dass sie die Systemstabilität negativ beeinflussen könnten.\n\nPlanbare Wartung: Durch die firmeninterne Verwaltung können die Patches vor der Bereitstellung bewertet, priorisiert und terminiert werden. Die anschließende Bereitstellung der Patches kann automatisiert erfolgen. Die Reederei hat durch dieses Patch-Management eine erhöhte Kontrolle und Planungssicherheit.\n\nInterne Lastverteilung: Durch die firmeninterne Verwaltung aller Patches wird das Firmennetzwerk effizient genutzt, wodurch weniger Daten über externe Internetverbindungen übertragen werden müssen. Das spart Bandbreite und minimiert Engpässe aufgrund externer Datenübertragungen.\n\nWeitere Vorteile des Vorgehens:\n– Einhaltung der Compliance-Vorgaben\n– Minimierung von Unterbrechungen im Arbeitsalltag',
    answerStatus: 'confirmed',
    sourcePage: 12,
  },
  {
    id: 'ap2-si-t1-2023-winter-q4-e',
    examId: 'ap2-si-t1-2023-winter',
    questionNumber: 4,
    subPart: 'e',
    topic: 'Patch vs. Upgrade',
    scenario: SCENARIO,
    referenceText:
      '"When a new version of software is released, users of that software are entitled to a free patch or an upgrade at a discounted price, depending on the current license owned.\n\nA patch is offered to users who currently own a license for a version of the software that has the same major revision number as the new release. For example, if a user owns version 1 of the software and version 1.1 is released, the user can download a patch free of charge from our website.\n\nUpgrade pricing is offered to users who own a license that has a major revision number different from the new release. For example, if a user owns version 1 of the software and version 2 is released, the user can purchase an upgrade at a discounted price."',
    question:
      'e) Sie beabsichtigen, eine Software durch einen Patch oder durch ein Upgrade zu aktualisieren.\n\nErläutern Sie die beiden möglichen Modelle anhand des vorliegenden Textes und wann diese zum Einsatz kommen.',
    maxPoints: 6,
    modelSolution:
      'Patches können kostenlos an Lizenzeigentümer verteilt werden, wenn die Hauptversion der neu veröffentlichten Softwareversion übereinstimmt. Unabhängig hiervon kann, je nach Lizenz, bei einer neuen Softwareversion auch ein kostenloser Patch angeboten werden.\n\nUpgrades werden meistens verkauft, wenn ein User eine Lizenz mit einer anderen Hauptversion besitzt. Diese Upgrades werden dann unter Umständen zu einem ermäßigten Preis angeboten.',
    answerStatus: 'confirmed',
    sourcePage: 12,
  },
]
