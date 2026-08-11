import type { ApExamMeta, ApExamQuestion } from '../../types/apExam'

export const ap2SiT1_2026SommerMeta: ApExamMeta = {
  id: 'ap2-si-t1-2026-sommer',
  area: 'AP2_SI_T1',
  year: 2026,
  period: 'Sommer',
  label: 'Sommer 2026',
  examDate: 'Mittwoch, 29. April 2026',
  examTitle: 'Konzeption und Administration von IT-Systemen',
  courseCode: '1202',
  sourceExamPdf: 'SI_AP2_T1_26s.pdf',
  solutionSource: 'unclear',
  taskCount: 4,
  durationMinutes: 90,
  totalPoints: 100,
}

const SCENARIO =
  'Die Aufgaben 1 bis 4 beziehen sich auf die folgende Ausgangssituation:\n\nSie arbeiten als Fachinformatiker für Systemintegration bei der Liebig GmbH, einem mittelständischen Unternehmen mit Firmensitz in Leipzig. Die Liebig GmbH ist im Bereich Fahrzeugtechnik ein renommierter Zulieferer.\n\nAktuell sind Sie im Team „IT-Systeme" tätig und in mehrere Projekte eingebunden.\n\nBearbeiten Sie in diesem Zusammenhang die folgenden vier Aufgaben:\n1. Planung und Inbetriebnahme eines Webservers.\n2. Den sicheren Betrieb von Servern gewährleisten.\n3. Die Verfügbarkeit der Dienste sicherstellen.\n4. Software zur Systemverwaltung weiterentwickeln und testen.'

export const ap2SiT1_2026SommerQuestions: ApExamQuestion[] = [
  // 1. Aufgabe (28 Punkte) — Planung und Inbetriebnahme eines Webservers
  {
    id: 'ap2-si-t1-2026-sommer-q1-aa',
    examId: 'ap2-si-t1-2026-sommer',
    questionNumber: 1,
    subPart: 'aa',
    topic: 'Netzteil-Dimensionierung',
    scenario: SCENARIO,
    referenceText:
      'Serverkomponenten:\nAnzahl | Komponente\n1 | Mainboard 40 W\n2 | CPU je 90 W\n8 | RAM-Riegel je 4 W\n4 | HDD je 10 W\n2 | Netzwerkkarten je 6 W\n\nVerfügbar sind Netzteile mit einer Leistung von 250 W, 300 W, …, 550 W, 600 W in 50 W Abstufungen.',
    question:
      '1. Aufgabe (28 Punkte)\n\nSie sollen einen neuen Webserver im Rechenzentrum der Liebig GmbH in Betrieb nehmen.\n\na) Es sind Aufgaben bei der Hardwareauswahl und zur IT-Sicherheit zu bearbeiten.\n\naa) Dem Server fehlt noch ein Netzteil.\n\nBerechnen Sie den Leistungsbedarf, wobei Sie bei Ihrer Überlegung einen Leistungspuffer von 20 % zur ermittelten Leistungsaufnahme aller Serverkomponenten aufschlagen. Gehen Sie von einem Wirkungsgrad des Netzteils von 90 % aus. Bestimmen Sie die erforderliche Leistung des Netzteils. Geben Sie die mindestens erforderliche Leistung des Netzteils in einer marktüblichen Größe an.\n\nDer Rechenweg ist anzugeben.',
    maxPoints: 6,
    answerStatus: 'unclear',
    sourcePage: 2,
  },
  {
    id: 'ap2-si-t1-2026-sommer-q1-ab',
    examId: 'ap2-si-t1-2026-sommer',
    questionNumber: 1,
    subPart: 'ab',
    topic: 'UEFI/BIOS-Härtung',
    scenario: SCENARIO,
    question:
      'ab) Der Server soll gehärtet werden.\n\nErläutern Sie zwei Einstellungen, mit denen Sie den Server bereits im UEFI/BIOS härten.\nEinstellung 1:\nErläuterung:\nEinstellung 2:\nErläuterung:',
    maxPoints: 6,
    answerStatus: 'unclear',
    sourcePage: 3,
  },
  {
    id: 'ap2-si-t1-2026-sommer-q1-ac',
    examId: 'ap2-si-t1-2026-sommer',
    questionNumber: 1,
    subPart: 'ac',
    topic: 'TOM (Technisch-Organisatorische Maßnahmen)',
    scenario: SCENARIO,
    referenceText:
      'Tabelle "Beispiel / Erläuterung", erste Zeile bereits vorgegeben:\nBeispiel: Chipkarte für Serverraum — Erläuterung: Verhindert unbefugten physischen Zugriff auf Systeme mit sensiblen Daten – schützt vor Diebstahl oder Manipulation.\n(zwei weitere Zeilen sind vom Prüfling auszufüllen)',
    question:
      'ac) Neben der Härtung einzelner Systeme sollen auch andere, übergreifende Sicherheitsmaßnahmen angewendet werden.\n\nNennen Sie zwei weitere Beispiele für Technisch Organisatorische Maßnahmen (TOM), die Sie umsetzen, damit der Server und die Daten geschützt sind, und erläutern Sie deren Nutzen.',
    maxPoints: 6,
    answerStatus: 'unclear',
    sourcePage: 3,
  },
  {
    id: 'ap2-si-t1-2026-sommer-q1-ba',
    examId: 'ap2-si-t1-2026-sommer',
    questionNumber: 1,
    subPart: 'ba',
    topic: 'Bootloader (GRUB)',
    scenario: SCENARIO,
    referenceText:
      '"GRUB is [...] a boot manager. The boot loader is the part of GRUB that loads the kernel of the operating system into memory. The boot manager part of GRUB is the menu that allows you to select different operating system kernels to load. [...]\nPlus, GRUB automatically finds the Linux kernel to boot if it knows the hard drive number, partition number, and filename of the kernel. GRUB, though it is a Linux program, can also boot other non-Linux operating systems, like Windows."\nQuelle: https://www.codecademy.com/resources/blog/grub-linux/',
    question:
      'Fortsetzung 1. Aufgabe\n\nb) Sie installieren auf dem Server ein Linux Betriebssystem.\n\nba) Erläutern Sie die Funktion und den Zweck von GRUB anhand des Textes.\n(Keine 1 zu 1 Übersetzung!)',
    maxPoints: 4,
    answerStatus: 'unclear',
    sourcePage: 4,
  },
  {
    id: 'ap2-si-t1-2026-sommer-q1-bb',
    examId: 'ap2-si-t1-2026-sommer',
    questionNumber: 1,
    subPart: 'bb',
    topic: 'Bootfehler (GRUB rescue)',
    scenario: SCENARIO,
    referenceText:
      'Fehlermeldung des Bootloaders "GRUB" nach der Installation des Betriebssystems:\nGRUB loading.\nWelcome to GRUB!\n\nerror: file not found.\ngrub rescue>',
    question:
      'bb) Nach der Installation des Betriebssystems wird der Neustart des Servers mit der abgebildeten Fehlermeldung des Bootloaders „GRUB" abgebrochen.\n\nErläutern Sie eine mögliche Ursache und eine mögliche Fehlerbehebung.\nUrsache:\nFehlerbehebung:',
    maxPoints: 6,
    answerStatus: 'unclear',
    sourcePage: 4,
  },

  // 2. Aufgabe (21 Punkte) — Den sicheren Betrieb von Servern gewährleisten
  {
    id: 'ap2-si-t1-2026-sommer-q2-aa',
    examId: 'ap2-si-t1-2026-sommer',
    questionNumber: 2,
    subPart: 'aa',
    topic: 'Zertifizierungsstelle (CA)',
    scenario: SCENARIO,
    question:
      '2. Aufgabe (21 Punkte)\n\nIm Folgenden sind Aufgaben zur Sicherstellung des Betriebs des Webservers zu bearbeiten.\n\na) Der Webserver erlaubt ausschließlich HTTPS-Verbindungen.\n\naa) Erläutern Sie zwei Aufgaben einer Certificate Authority (CA).',
    maxPoints: 4,
    answerStatus: 'unclear',
    sourcePage: 4,
  },
  {
    id: 'ap2-si-t1-2026-sommer-q2-ab',
    examId: 'ap2-si-t1-2026-sommer',
    questionNumber: 2,
    subPart: 'ab',
    topic: 'TLS-Handshake',
    scenario: SCENARIO,
    question:
      'ab) Erläutern Sie den schrittweisen Ablauf eines Zertifikatshandshakes beim Verbindungsaufbau eines Clients zu Ihrem Webserver.',
    maxPoints: 5,
    answerStatus: 'unclear',
    sourcePage: 5,
  },
  {
    id: 'ap2-si-t1-2026-sommer-q2-ba',
    examId: 'ap2-si-t1-2026-sommer',
    questionNumber: 2,
    subPart: 'ba',
    topic: 'Load Balancer',
    scenario: SCENARIO,
    question:
      'b) Die Anzahl Ihrer Kunden ist stark angestiegen. Sie sollen weitere Webserver bereitstellen.\n\nIm Team beraten Sie sich in diesem Zusammenhang über den Einsatz eines Load Balancers.\n\nba) Erläutern Sie die Funktionsweise eines Load Balancers.',
    maxPoints: 3,
    answerStatus: 'unclear',
    sourcePage: 5,
  },
  {
    id: 'ap2-si-t1-2026-sommer-q2-bb',
    examId: 'ap2-si-t1-2026-sommer',
    questionNumber: 2,
    subPart: 'bb',
    topic: 'Load-Balancing-Verfahren',
    scenario: SCENARIO,
    question:
      'bb) In dem Gespräch über Load Balancer fallen die Begriffe „Round Robin", „Least Connections" und „IP-Hashing".\n\nErläutern Sie die Prinzipien dieser drei Methoden.\nRound Robin:\nLeast Connections:\nIP-Hashing:',
    maxPoints: 6,
    answerStatus: 'unclear',
    sourcePage: 5,
  },
  {
    id: 'ap2-si-t1-2026-sommer-q2-c',
    examId: 'ap2-si-t1-2026-sommer',
    questionNumber: 2,
    subPart: 'c',
    topic: 'DDoS-Angriff',
    scenario: SCENARIO,
    question:
      'c) Die Webserver sollen gegen typische Angriffsszenarien abgesichert werden.\n\nErläutern Sie in diesem Zusammenhang das Angriffsszenario eines DDoS-Angriffs.',
    maxPoints: 3,
    answerStatus: 'unclear',
    sourcePage: 5,
  },

  // 3. Aufgabe (26 Punkte) — Die Verfügbarkeit der Dienste sicherstellen
  {
    id: 'ap2-si-t1-2026-sommer-q3-aa',
    examId: 'ap2-si-t1-2026-sommer',
    questionNumber: 3,
    subPart: 'aa',
    topic: 'Cloud-Servicemodelle',
    scenario: SCENARIO,
    referenceText:
      'Die Liebig GmbH, die hochwertige, personalisierbare Produkte verkauft, plant, ihren gesamten IT-Betrieb (einschließlich des Webshops, der Kundendatenbank und der internen Warenwirtschaft) in die Cloud zu migrieren. Aktuell werden die Daten auf lokalen Servern in Deutschland betrieben.\n\nTabelle "Servicemodell / Erläuterung / Beispiel" (auszufüllen für IaaS, PaaS, SaaS).',
    question:
      '3. Aufgabe (26 Punkte)\n\naa) Erläutern Sie die drei grundlegenden Cloud-Servicemodelle und nennen Sie je ein Beispiel für jeden Service.',
    maxPoints: 9,
    answerStatus: 'unclear',
    sourcePage: 6,
  },
  {
    id: 'ap2-si-t1-2026-sommer-q3-ab',
    examId: 'ap2-si-t1-2026-sommer',
    questionNumber: 3,
    subPart: 'ab',
    topic: 'Cloud-Bereitstellungsmodelle',
    scenario: SCENARIO,
    question:
      'ab) Welches Bereitstellungsmodell (Deployment Model) – Private Cloud, Public Cloud oder Hybrid Cloud – würden Sie dem Unternehmen unter Berücksichtigung der strengen deutschen Sicherheits- und Compliance-Anforderungen primär empfehlen?\n\nNennen Sie einen Vorteil und einen Nachteil dieses Modells.',
    maxPoints: 2,
    answerStatus: 'unclear',
    sourcePage: 6,
  },
  {
    id: 'ap2-si-t1-2026-sommer-q3-b',
    examId: 'ap2-si-t1-2026-sommer',
    questionNumber: 3,
    subPart: 'b',
    topic: 'RTO / RPO',
    scenario: SCENARIO,
    question:
      'b) Die hohe Verfügbarkeit (24/7) des Webshops ist geschäftsentscheidend.\n\nErläutern Sie die folgenden beiden Schlüsselmetriken für die Ausfallsicherheit im Cloud-Betrieb.\nRTO (Recovery Time Objective)\nRPO (Recovery Point Objective)',
    maxPoints: 4,
    answerStatus: 'unclear',
    sourcePage: 6,
  },
  {
    id: 'ap2-si-t1-2026-sommer-q3-c',
    examId: 'ap2-si-t1-2026-sommer',
    questionNumber: 3,
    subPart: 'c',
    topic: 'SLA-Verfügbarkeitsberechnung',
    scenario: SCENARIO,
    referenceText: 'Ein Ausfall des Webshops kostet das Unternehmen durchschnittlich 500 EUR pro Stunde.',
    question:
      'c) Berechnen Sie den maximal tolerierbaren Umsatzverlust pro Jahr, wenn das Service Level Agreement (SLA) des Cloud-Anbieters eine Verfügbarkeit von 99,9 % („Three Nines") garantiert.\n\nHinweis: Ein Jahr hat 365 Tage.',
    maxPoints: 5,
    answerStatus: 'unclear',
    sourcePage: 7,
  },
  {
    id: 'ap2-si-t1-2026-sommer-q3-d',
    examId: 'ap2-si-t1-2026-sommer',
    questionNumber: 3,
    subPart: 'd',
    topic: 'Cloud / Datenschutz',
    scenario: SCENARIO,
    question:
      'd) Erläutern Sie, unter welchen Voraussetzungen die Daten dieses Webshops unter Berücksichtigung des Datenschutzes in der Cloud gespeichert werden dürfen.',
    maxPoints: 6,
    answerStatus: 'unclear',
    sourcePage: 7,
  },

  // 4. Aufgabe (25 Punkte) — Software zur Systemverwaltung weiterentwickeln und testen
  {
    id: 'ap2-si-t1-2026-sommer-q4-aa',
    examId: 'ap2-si-t1-2026-sommer',
    questionNumber: 4,
    subPart: 'aa',
    topic: 'Array / Schreibtischtest',
    scenario: SCENARIO,
    referenceText:
      'Sie sind an der Entwicklung eines universellen Programms zum Task-Scheduling beteiligt.\n\nDie nächsten sieben Tasks (Task-Nr. 1 bis Task-Nr. 7) sollen entsprechend ihrer Priorität nacheinander abgearbeitet werden. Die höchste Priorität hat den Wert 1, die niedrigste Priorität hat den Wert 9. So wird z. B. Task 6 mit der Priorität 2 vor Task 1 mit der Priorität 3 abgearbeitet.\n\nArray "tasksPrio[]":\nPrioritäten der Tasks (Inhalt des Arrays): 5, 7, 4, 8, 3, 7, 3\nArray-Index: 0, 1, 2, 3, 4, 5, 6\nEntsprechende Task-Nr.: 1, 2, 3, 4, 5, 6, 7\n\nProgrammentwurf:\nZeile 1: int[] tasksPrio = new int[] {5,7,4,8,3,7,3}; //Array mit den Prioritäten\nZeile 2: int indexMaxPrio = 0; //indexMaxPrio verweist auf die höchste Priorität\nZeile 3: int maxPrioritaet = 10; //maxPrioritaet speichert die höchste Priorität\nZeile 4: for (int i = 0; i < 7; i++) //Schleifenkopf\nZeile 5: {\nZeile 6:   if (tasksPrio[i] < maxPrioritaet) //höhere Priorität gefunden?\nZeile 7:   {\nZeile 8:     maxPrioritaet = tasksPrio[i]; //höhere Priorität merken\nZeile 9:     indexMaxPrio = i; //aktuellen Wert für indexMaxPrio merken\nZeile 10:   }\nZeile 11: }\nZeile 12: int taskNummer = indexMaxPrio + 1;\nZeile 13: return(taskNummer); //Rückgabe der taskNummer mit der höchsten Priorität\n\nVorgegebene Tabellenwerte:\nBei Schleifenstart: indexMaxPrio = 0, maxPrioritaet = 10\nEnde Schleifenschritt 1: indexMaxPrio = 0, maxPrioritaet = 5\n(Ende Schleifenschritt 2 bis 7 sind vom Prüfling auszufüllen)',
    question:
      '4. Aufgabe (25 Punkte)\n\nSie sind an der Entwicklung eines universellen Programms zum Task-Scheduling beteiligt.\n\na) Die nächsten sieben Tasks (Task-Nr. 1 bis Task-Nr. 7) sollen entsprechend ihrer Priorität nacheinander abgearbeitet werden.\n\naa) Der folgende Algorithmus soll den Array-Index ermitteln, der auf das Array-Feld mit der höchsten Priorität verweist. Kommt diese Priorität mehr als einmal vor, soll der Array-Index mit dem kleineren Wert gelten.\n\nPrüfen Sie den Algorithmus, indem Sie für die Zeilen 4 bis 11 einen „Schreibtischtest" durchführen.\n\nErgänzen Sie die Tabelle mit Ihren Ergebnissen (indexMaxPrio, maxPrioritaet) für die Schleifenschritte 2 bis 7.',
    maxPoints: 12,
    answerStatus: 'unclear',
    sourcePage: 8,
  },
  {
    id: 'ap2-si-t1-2026-sommer-q4-ab',
    examId: 'ap2-si-t1-2026-sommer',
    questionNumber: 4,
    subPart: 'ab',
    topic: 'Programmanalyse',
    scenario: SCENARIO,
    question: 'ab) Erläutern Sie den Zweck der Anweisung in Zeile 12 in dem obigen Programm.',
    maxPoints: 3,
    answerStatus: 'unclear',
    sourcePage: 8,
  },
  {
    id: 'ap2-si-t1-2026-sommer-q4-b',
    examId: 'ap2-si-t1-2026-sommer',
    questionNumber: 4,
    subPart: 'b',
    topic: 'Arrays (Vor-/Nachteile)',
    scenario: SCENARIO,
    question:
      'b) In vielen Fällen ist die Speicherung von Daten in Arrays sinnvoll und wird von den gängigen Programmiersprachen unterstützt.\n\nErläutern Sie zwei Merkmale bzw. Eigenschaften von Arrays, die für bzw. gegen ihre Verwendung sprechen.',
    maxPoints: 6,
    answerStatus: 'unclear',
    sourcePage: 9,
  },
  {
    id: 'ap2-si-t1-2026-sommer-q4-c',
    examId: 'ap2-si-t1-2026-sommer',
    questionNumber: 4,
    subPart: 'c',
    topic: 'Prozessbeendigung',
    scenario: SCENARIO,
    question:
      'c) Bei einem Testlauf des Programms stellt sich heraus, dass sich das Programm nicht wie vorgesehen beenden lässt und die zugewiesenen Systemressourcen blockiert.\n\nErläutern Sie eine Möglichkeit, das Programm im laufenden Betrieb zu beenden.',
    maxPoints: 4,
    answerStatus: 'unclear',
    sourcePage: 9,
  },
]
