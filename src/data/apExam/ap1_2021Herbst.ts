import type { ApExamMeta, ApExamQuestion } from '../../types/apExam'

export const ap1_2021HerbstMeta: ApExamMeta = {
  id: 'ap1-2021-herbst',
  area: 'AP1',
  year: 2021,
  period: 'Herbst',
  label: 'Herbst 2021',
  examDate: 'Mittwoch, 29. September 2021',
  examTitle: 'Einrichten eines IT-gestützten Arbeitsplatzes',
  courseCode: '1201',
  sourceExamPdf: 'AP1_21h.pdf',
  sourceSolutionPdf: 'Loe_AP1_21h.pdf',
  solutionSource: 'confirmed',
  taskCount: 4,
  durationMinutes: 90,
  totalPoints: 100,
}

const SCENARIO =
  'Sie sind Mitarbeiter/-in der IT.SYS GmbH, einem Systemhaus, welches IT-Dienstleistungen für Privatpersonen und Unternehmen anbietet.\n\n' +
  'Ein Kunde der IT.SYS GmbH ist die Arztpraxis Care. Diese wird mit ihrer Praxis an einen neuen Standort ziehen. Dabei soll die IT-Technik zum Teil erneuert werden. Die IT.SYS GmbH wird mit der Planung und Umsetzung des Umzuges beauftragt.\n\n' +
  'Sie arbeiten an diesem Projekt mit und sollen die folgenden vier Aufgaben erledigen:\n' +
  '– Das Projekt zur Installation der IT planen und einen Netzplan vervollständigen\n' +
  '– Die Energiebilanz der neuen Hardware optimieren und Fehler in einem Skript korrigieren\n' +
  '– Die Migration der bestehenden Postfächer auf den neuen E-Mail-Server vorbereiten\n' +
  '– Maßnahmen zum Datenschutz und zur Datensicherung ergreifen und den Kunden beraten'

const NETPLAN_REFERENCE =
  'Vorgangsliste (Abbildung zur 1. Aufgabe):\n' +
  'Vorgang | Beschreibung | Dauer in Stunden | Vorgänger\n' +
  'A | Ist-Analyse | 2 | –\n' +
  'B | Soll-Konzept | 4 | A\n' +
  'C | Beschaffung neuer Server | 3 | B\n' +
  'D | Installation strukturierter Netzwerk-Verkabelung | 8 | B\n' +
  'E | Datensicherung | 2 | B\n' +
  'F | Dokumentation des neuen Netzwerkes | 5 | B\n' +
  'G | Installation neuer Server | 4 | C, D\n' +
  'H | Abbau alter Infrastruktur | 1 | E\n' +
  'I | Einrichtung Clients | 3 | G, H\n' +
  'J | Funktionstest | 1 | I\n' +
  'K | Übergabe und Einweisung der Mitarbeiter | 2 | F, J\n\n' +
  'Netzplan-Vorlage (Vorgangsknoten-Notation; Legende je Knoten: FAZ oben links, FEZ oben rechts, darunter Vorgang / Dauer / GP / FP, unten SAZ links / SEZ rechts). ' +
  'Für die Vorgänge A und B sind FAZ, FEZ, GP, FP, SAZ und SEZ bereits als Beispiel eingetragen (A: FAZ 0, FEZ 2, GP 0, FP 0, SAZ 0, SEZ 2; B: FAZ 2, FEZ 6, GP 0, FP 0, SAZ 2, SEZ 6). ' +
  'Für die Vorgänge C bis K sind im Aufgabenblatt nur Vorgangsbuchstabe und Dauer vorgegeben; alle übrigen Felder (FAZ, FEZ, GP, FP, SAZ, SEZ) sind leer und zu ergänzen.'

const q1a: ApExamQuestion = {
  id: 'ap1-2021-herbst-q1-a',
  examId: 'ap1-2021-herbst',
  questionNumber: 1,
  subPart: 'a',
  topic: 'Projektmanagement / Projektmerkmale',
  scenario: SCENARIO,
  question:
    'In Vorbereitung des Umzuges arbeiten Sie an der Planung mit.\n\n' +
    'Ihr Kollege sagt Ihnen, bei dem Umzug der Arztpraxis handelt es sich um ein Projekt.\n\n' +
    'Nennen Sie vier Merkmale eines Projekts.',
  maxPoints: 4,
  modelSolution:
    'Merkmale eines Projektes:\n' +
    '– Neuartigkeit & Einmaligkeit\n' +
    '– Konkrete Zielvorgabe(n)\n' +
    '– Zeitbegrenzung\n' +
    '– Ressourcenbegrenzung\n' +
    '– Komplexität & Größe\n' +
    '– Projektspezifische Organisationsform',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q1b: ApExamQuestion = {
  id: 'ap1-2021-herbst-q1-b',
  examId: 'ap1-2021-herbst',
  questionNumber: 1,
  subPart: 'b',
  topic: 'Projektmanagement / SMART-Kriterien',
  scenario: SCENARIO,
  question:
    'Die Ziele in einem Projekt sollen den SMART-Kriterien entsprechen.\n\n' +
    'Nennen Sie die vier weiteren SMART-Kriterien auf Deutsch oder Englisch.\n\n' +
    'S spezifisch – specific\n\nM\n\nA\n\nR\n\nT',
  maxPoints: 4,
  modelSolution:
    'M messbar / measurable\n' +
    'A akzeptiert / accepted\n' +
    'R realistisch / reasonable\n' +
    'T terminiert / time-bound\n\n' +
    'Alternative Antwortmöglichkeiten:\n' +
    'A attraktiv / attractive, erreichbar / attainable\n' +
    'R relevant / relevant',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q1c: ApExamQuestion = {
  id: 'ap1-2021-herbst-q1-c',
  examId: 'ap1-2021-herbst',
  questionNumber: 1,
  subPart: 'c',
  topic: 'Projektmanagement / Netzplantechnik',
  scenario: SCENARIO,
  referenceText: NETPLAN_REFERENCE,
  question:
    'In Vorbereitung des Projektes wird ein Netzplan erstellt. Ihr Kollege hat bereits mit der Erstellung angefangen und bittet Sie, diesen zu vervollständigen.\n\n' +
    'Tragen Sie die fehlenden FAZ, FEZ, SAZ, SEZ, GP und FP in den nebenstehenden Plan ein.\n\n' +
    'Hinweis:\n' +
    'FAZ = frühester Anfangszeitpunkt\n' +
    'FEZ = frühester Endzeitpunkt\n' +
    'FP = freier Puffer (= FAZ des Nachfolgers – FEZ des aktuellen Vorgangs)\n' +
    'SAZ = spätester Anfangszeitpunkt, SEZ = spätester Endzeitpunkt\n' +
    'GP = Gesamtpuffer (= SAZ – FAZ oder = SEZ – FEZ)',
  maxPoints: 14,
  modelSolution:
    'Vollständig ausgefüllter Netzplan:\n' +
    'Vorgang | FAZ | FEZ | Dauer | GP | FP | SAZ | SEZ\n' +
    'A | 0 | 2 | 2 | 0 | 0 | 0 | 2\n' +
    'B | 2 | 6 | 4 | 0 | 0 | 2 | 6\n' +
    'C | 6 | 9 | 3 | 5 | 5 | 11 | 14\n' +
    'D | 6 | 14 | 8 | 0 | 0 | 6 | 14\n' +
    'E | 6 | 8 | 2 | 9 | 0 | 15 | 17\n' +
    'F | 6 | 11 | 5 | 11 | 11 | 17 | 22\n' +
    'G | 14 | 18 | 4 | 0 | 0 | 14 | 18\n' +
    'H | 8 | 9 | 1 | 9 | 9 | 17 | 18\n' +
    'I | 18 | 21 | 3 | 0 | 0 | 18 | 21\n' +
    'J | 21 | 22 | 1 | 0 | 0 | 21 | 22\n' +
    'K | 22 | 24 | 2 | 0 | 0 | 22 | 24\n\n' +
    'Befüllung der Netzpläne (Methodik gemäß Lösungserläuterungen):\n' +
    '1. Vorwärtsterminierung: Es wird von vorne nach hinten gerechnet, beginnend bei Vorgang A. Zuweisung der Vorgänge gemäß Angabe der Vorgänger und der Dauer gemäß Angabe. Früheste Endzeitpunkte berechnen: FEZ = FAZ + Dauer. Früheste Anfangszeitpunkte übernehmen: Sonderfall erster Vorgang: FAZ des ersten Vorganges = 0; ansonsten FAZ = FEZ des vorangegangenen Vorganges (bei mehreren Vorgängern wird der höchste Wert übernommen).\n' +
    '2. Rückwärtsterminierung: Es wird von hinten nach vorne gerechnet, beginnend beim letzten Vorgang. Sonderfall letzter Vorgang: SEZ des letzten Vorganges ist immer identisch mit dessen FEZ; ansonsten ist SEZ immer der SAZ des nachfolgenden Vorganges (bei mehreren Nachfolgern wird der niedrigste Wert übernommen). Spätesten Anfangszeitpunkt berechnen: SAZ = SEZ – Dauer.\n' +
    '3. Berechnung der Pufferzeiten: Gesamtpuffer je Vorgang: GP = SAZ – FAZ. Freier Puffer je Vorgang: FP = FAZ des nachfolgenden Vorganges – FEZ des eigenen Vorganges (bei mehreren Nachfolgern der niedrigste Wert). Der freie Puffer (FP) ist der Zeitraum, um den ein Vorgang maximal verschoben werden kann, ohne die frühesten Termine seiner nachfolgenden Vorgänge zu beeinflussen. Der Gesamtpuffer (GP) ist der Zeitraum, um den ein Vorgang maximal verschoben werden kann, ohne die spätesten Termine seiner nachfolgenden Vorgänge zu beeinflussen.',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q1d: ApExamQuestion = {
  id: 'ap1-2021-herbst-q1-d',
  examId: 'ap1-2021-herbst',
  questionNumber: 1,
  subPart: 'd',
  topic: 'Projektmanagement / Netzplantechnik',
  scenario: SCENARIO,
  referenceText: NETPLAN_REFERENCE,
  question: 'Markieren Sie den kritischen Pfad im Netzplan.',
  maxPoints: 1,
  modelSolution:
    'Kritischer Pfad: A -> B -> D -> G -> I -> J -> K\n\n' +
    'Ermittlung des kritischen Pfades: Markieren aller Vorgänge ohne freien Puffer und ohne Gesamtpuffer, d. h. alle Vorgänge mit FP = 0 und GP = 0.',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q1e: ApExamQuestion = {
  id: 'ap1-2021-herbst-q1-e',
  examId: 'ap1-2021-herbst',
  questionNumber: 1,
  subPart: 'e',
  topic: 'Projektmanagement / Netzplantechnik',
  scenario: SCENARIO,
  referenceText: NETPLAN_REFERENCE,
  question:
    'Der Vorgang H, der Abbau der alten Infrastruktur, verzögert sich um vier Stunden.\n\n' +
    'Beschreiben Sie die Auswirkung auf das Projektende.',
  maxPoints: 2,
  modelSolution:
    'Das Projektende wird von der Verzögerung bei Vorgang H nicht beeinflusst. Sowohl der freie Puffer (FP) als auch der Gesamtpuffer (GP) des Vorganges betragen neun Stunden. Eine Verzögerung von vier Stunden kann daher ohne Auswirkungen auf andere Vorgänge in Kauf genommen werden.',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q2a: ApExamQuestion = {
  id: 'ap1-2021-herbst-q2-a',
  examId: 'ap1-2021-herbst',
  questionNumber: 2,
  subPart: 'a',
  topic: 'Energieeffizienz / Netzteil-Wirkungsgrad',
  scenario: SCENARIO,
  referenceText:
    'Tabelle:\n' +
    '  | PC-A | PC-B\n' +
    'Wirkungsgrad des Netzteils bei 60 W in Prozent | 43 % | 76 %\n' +
    'Durch die Komponenten des PCs benötigte durchschnittliche Leistung im Betrieb | 60 W | 60 W\n' +
    'Vom Netzteil bezogene Leistung aus dem Stromnetz | 139,53 W | [zu berechnen]\n' +
    'Energiekosten pro Monat in EUR | [zu berechnen] | [zu berechnen]\n\n' +
    '(Darunter ein leeres Rechenfeld für den Rechenweg.)',
  question:
    'Im Rahmen des Umzuges sollen einige PCs neu angeschafft werden. Der Kunde soll sich zwischen zwei PC-Varianten entscheiden. Beide PC-Varianten sind nahezu baugleich bis auf das verwendete Netzteil.\n\n' +
    'Sie wurden damit beauftragt, für eine Besprechung die Energieeffizienz der beiden PCs unter ökonomischen Gesichtspunkten zu vergleichen.\n\n' +
    'Betriebsstunden:\n– 9 Stunden pro Tag\n– Betrieb an 20 Arbeitstagen pro Monat\n\n' +
    'Die beiden zu vergleichenden PCs sind wie folgt ausgestattet:\n' +
    '– PC-A hat ein niedrigpreisiges Netzteil ohne Zertifikat.\n' +
    '– PC-B hat ein Netzteil nach dem 80Plus Gold Standard.\n\n' +
    'Errechnen Sie die Leistung und die Energiekosten pro Monat, wenn eine kWh 30 Cent kostet.\n\n' +
    'Dem englischsprachigen Manual des Netzteils können Sie folgende Definition entnehmen:\n' +
    'Efficiency = Useful power output/Total power input',
  maxPoints: 6,
  modelSolution:
    'Tabelle (Lösung):\n' +
    '  | PC-A | PC-B\n' +
    'Wirkungsgrad des Netzteils bei 60 W in Prozent | 43% | 76%\n' +
    'Durch die Komponenten des PCs benötigte durchschnittliche Leistung im Betrieb | 60W | 60W\n' +
    'Vom Netzteil bezogene Leistung aus dem Stromnetz | 139,53W | 78,95W\n' +
    'Energiekosten pro Monat in EUR | 7,53 € | 4,26 €\n\n' +
    'Erläuterung zur Berechnung:\n' +
    'Gemäß Angabe sind die Energiekosten pro Monat zu errechnen, hierfür müssen zunächst die angegebenen Betriebsstunden pro Tag sowie die Arbeitstage pro Monat multipliziert werden.\n' +
    'Betriebsstunden pro Monat:\n' +
    '20 Arbeitstage pro Monat * 9 Stunden pro Tag = 180 Betriebsstunden im Monat\n' +
    'Um die vom Netzteil bezogene Leistung aus dem Stromnetz zu berechnen, ist die benötigte Leistung der Komponenten durch den Wirkungsgrad des jeweiligen Netzteiles zu dividieren. Je höher der Wirkungsgrad eines Netzteiles ist, desto weniger Energie wird verschwendet.\n' +
    '60 W (Leistung der Komponenten) / 0,76 (Wirkungsgrad Netzteil PC-B) = 78,95 W\n' +
    '60 W (Leistung der Komponenten) / 0,43 (Wirkungsgrad Netzteil PC-A) = 139,53 W\n' +
    'Obwohl die benötigte Leistung beider PCs identisch ist, werden bei PC-A 60,58 W zusätzlich benötigt. PC-B ist somit wesentlich effizienter und kostengünstiger.\n' +
    'Um die Energiekosten pro Monat zu berechnen, sind die monatlichen Betriebsstunden mit der vom Netzteil bezogenen Leistung sowie den Energiekosten pro Wattstunde zu multiplizieren.\n' +
    '1 kWh = 1000 Wh\n' +
    '30 Cent / kWh ≙ 0,03 Cent / Wh\n' +
    '180 h (monatliche Betriebsstunden) * 78,95 W (vom Netzteil bezogene Leistung) * 0,03 Cent / Wh = 426,33 Cent (4,26 €)\n' +
    '180 h (monatliche Betriebsstunden) * 139,53 W (vom Netzteil bezogene Leistung) * 0,03 Cent / Wh = 753,462 Cent (7,53 €)',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q2b: ApExamQuestion = {
  id: 'ap1-2021-herbst-q2-b',
  examId: 'ap1-2021-herbst',
  questionNumber: 2,
  subPart: 'b',
  topic: 'Energieeffizienz / Amortisationsrechnung',
  scenario: SCENARIO,
  question:
    'Der PC mit dem Netzteil nach dem 80Plus Gold Standard kostet in der Anschaffung 100 EUR mehr.\n\n' +
    'Berechnen Sie die Dauer in Monaten, ab der sich die Anschaffung amortisiert hat.\n' +
    'Hinweis: Falls Sie Aufgabe a) nicht lösen konnten, rechnen Sie bei PC-A mit 6,83 EUR und bei PC-B mit 4,78 EUR.',
  maxPoints: 4,
  modelSolution:
    'Differenz der PC-Kosten: 100 €\n' +
    'Differenz der Energiekosten / Monat: 7,53 € - 4,26 € = 3,27 €\n' +
    'Dauer in Monaten, ab der sich die Anschaffung amortisiert hat:\n' +
    '100 € / 3,27 € pro Monat = 30,58 Monate\n' +
    'Die Anschaffung hat sich nach 31 Monaten amortisiert.\n\n' +
    'Unter Verwendung der alternativen Angaben hätte sich die Anschaffung nach 49 Monaten amortisiert (48,78 Monate rechnerisch).',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q2c: ApExamQuestion = {
  id: 'ap1-2021-herbst-q2-c',
  examId: 'ap1-2021-herbst',
  questionNumber: 2,
  subPart: 'c',
  topic: 'Energieeffizienz / Energiesparmaßnahmen',
  scenario: SCENARIO,
  question: 'Machen Sie drei weitere Vorschläge zur Senkung der Energiekosten des IT-Arbeitsplatzes.',
  maxPoints: 3,
  modelSolution:
    '– Verwendung von schaltbaren Steckdosen zur Vermeidung von Energiekosten im Standby-Betrieb\n' +
    '– Verwendung energieeffizienter Geräte (z. B. bei Bevorzugung von Geräten mit guten Energieeffizienz Labeln)\n' +
    '– Verwendung von Thin Clients und virtualisierter PC-Arbeitsplätze\n' +
    '– Automatisiertes Herunterfahren der Computer nach Arbeitszeitende\n' +
    '– Bevorzugung von effizienten Netzteilen (idealerweise Wirkungsgrad >= 90%)\n' +
    '– Weitere Lösungen sind möglich.',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q2d: ApExamQuestion = {
  id: 'ap1-2021-herbst-q2-d',
  examId: 'ap1-2021-herbst',
  questionNumber: 2,
  subPart: 'd',
  topic: 'Elektrotechnik / Leistungsberechnung',
  scenario: SCENARIO,
  question:
    'Bei der Installation der Geräte stellen Sie fest, dass folgende Geräte über eine einzige Mehrfachsteckdose mit der Aufschrift „maximal 16 A" angeschlossen werden sollen.\n' +
    '– 3 PCs mit einer maximalen Leistungsaufnahme von jeweils 180 W\n' +
    '– Ein Drucker mit einer maximalen Leistungsaufnahme von 400 W\n' +
    '– Eine Kaffeemaschine mit einer maximalen Leistungsaufnahme von 1.200 W\n' +
    '– Klimagerät mit einer maximalen Leistungsaufnahme von 2.000 W\n\n' +
    'Weisen Sie durch eine Rechnung nach, dass diese Geräte nicht gleichzeitig betrieben werden können.',
  maxPoints: 4,
  modelSolution:
    'Bei einer durchschnittlichen Netzspannung von 230 Volt in Deutschland, kann eine Mehrfachsteckdose mit 16 A, maximal mit 3680 Watt belastet werden.\n' +
    '(230 V x 16 A = 3680 Watt)\n\n' +
    'Leistungsaufnahme aller anzuschließenden Geräte: 4140 Watt\n' +
    '(3 x 180 W (PCs) + 400 W (Drucker) + 1200 W (Kaffeemaschine) + 2000 W (Klimagerät) = 4140 Watt)\n\n' +
    'An der Mehrfachsteckdose können also nicht alle Geräte gleichzeitig betrieben werden.',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q2e: ApExamQuestion = {
  id: 'ap1-2021-herbst-q2-e',
  examId: 'ap1-2021-herbst',
  questionNumber: 2,
  subPart: 'e',
  topic: 'Skripting / PowerShell-Fehlerkorrektur',
  scenario: SCENARIO,
  referenceText:
    'Tabelle "Erstelltes Skript" / "Falsche Zeilen korrigieren" (zweite Spalte leer, auszufüllen):\n' +
    '$Drive = Get-Volume -DriveLetter Z\n' +
    '$Prozent=($Drive.SizeRemaining/$Drive.Size)*1000\n' +
    'if($Prozent -gt 15)\n' +
    '{\n    Write-Host „Es sind weniger als 15% Speicherplatz frei."\n}\n' +
    'else\n' +
    '{\n    Write-Host „Es ist genügend Speicherplatz verfügbar."\n}\n\n' +
    'Manual: To use a comparison operator, specify the values that you want to compare together with an operator that separates these values. The Shell includes the following comparison operators:\n' +
    'Operators | Description\n' +
    '-eq | equals\n-ne | not equals\n-gt | greater than\n-ge | greater than or equal\n-lt | less than\n-le | less than or equal\n\n' +
    'Note:\nWrite-Host produce a display output.\nGet-Volume return a Volume object that match the specified criteria.',
  question:
    'Für den gewählten Rechner wird eine Datensicherung erstellt. Ihr Kollege hat das folgende Skript erstellt, welches eine Warnung ausgeben soll, wenn der Speicherplatz auf dem Ziellaufwerk Z unter 15 % fällt.\n\n' +
    'Leider funktioniert das Skript nicht wie gewünscht und bringt eine Warnmeldung, obwohl das Laufwerk nur zu 50 % gefüllt ist.\n\n' +
    'Lesen Sie sich die folgende Anleitung (manual) durch und korrigieren Sie in der obigen Tabelle die zwei Fehler.',
  maxPoints: 8,
  modelSolution:
    'Korrigierte Zeilen (die zwei fehlerhaften Zeilen):\n' +
    'Zeile "$Prozent=..." → korrigiert: $Prozent=($Drive.SizeRemaining/$Drive.Size) * 100\n' +
    'Zeile "if($Prozent -gt 15)" → korrigiert: if($Prozent -lt 15)\n\n' +
    'Ohne die Korrekturen wäre die prozentuale Berechnung des aktuell freien Speicherplatzes fehlerhaft (* 100 anstelle von * 1000). Außerdem würde die Warnmeldung bei über 15% freiem Speicherplatz ausgegeben werden und nicht wie gewünscht bei unter 15% (lt – „less than" anstelle von gt – „greater than").',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q3a: ApExamQuestion = {
  id: 'ap1-2021-herbst-q3-a',
  examId: 'ap1-2021-herbst',
  questionNumber: 3,
  subPart: 'a',
  topic: 'Lastenheft',
  scenario: SCENARIO,
  question:
    'Die Arztpraxis Care benötigt Unterstützung bei der Auswahl notwendiger IT. Die Arztpraxis beauftragt Sie, sie bzgl. der Auswahl von Hardware- und Softwarekomponenten zu unterstützen.\n\n' +
    'Grundlage für einen möglichen Auftrag an die IT.SYS GmbH ist ein Lastenheft der Arztpraxis Care, das die spezifischen Anforderungen des Auftraggebers an den potenziellen Auftragnehmer beschreibt.\n\n' +
    'Benennen Sie fünf inhaltliche Aspekte, die in solch einem Lastenheft üblicherweise enthalten sind.',
  maxPoints: 5,
  modelSolution:
    '– Definition der Projektziele\n' +
    '– Beschreibung der Ausgangssituation (z. B. bestehende IT-Infrastruktur)\n' +
    '– Sicherheitsrelevante Anforderungen (z. B. Risikoakzeptanz)\n' +
    '– Funktionale Anforderungen (z. B. welche Daten wie verarbeitet werden müssen)\n' +
    '– Nicht funktionale Anforderungen (z. B. Qualitätsanforderungen)\n' +
    '– Zeitliche Rahmenbedingungen\n' +
    '– Kurzvorstellung des Auftraggebers',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q3ba: ApExamQuestion = {
  id: 'ap1-2021-herbst-q3-ba',
  examId: 'ap1-2021-herbst',
  questionNumber: 3,
  subPart: 'ba',
  topic: 'Kaufmännische Rechnung / Dienstleisterkosten',
  scenario: SCENARIO,
  question:
    'Eines der Projektziele ist die Ablösung eines veralteten E-Mail-Systems in der Arztpraxis Care. Ein wesentlicher Aspekt ist hierbei die Migration der bestehenden Postfächer auf den neuen E-Mail-Server. Aus organisatorischen Gründen kann eine solche Migration nur außerhalb der gewöhnlichen Öffnungszeiten der Praxis durchgeführt werden. Die Praxis ist wochentags von 18.00 – 8.00 Uhr geschlossen.\n\n' +
    'Für betreffende Arbeiten beauftragt die IT.SYS GmbH einen Subunternehmer, der diese unter der Woche durchführen soll. Der Dienstleister verlangt für seine Tätigkeit 130 EUR/h. Die Migration eines Postfachs dauert wegen umfangreicher manueller Nacharbeiten im Schnitt zwei Stunden. In Summe sind 20 Postfächer zu migrieren.\n\n' +
    'Berechnen Sie die Gesamtkosten für die Migration, die die IT.SYS GmbH berücksichtigen müsste.\n\n' +
    'Der Rechenweg ist anzugeben.',
  maxPoints: 2,
  modelSolution: 'Kosten pro Stunde * Dauer pro Postfach * Anzahl der Postfächer\n130 €/h * 2h * 20 = 5200 €',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q3bb: ApExamQuestion = {
  id: 'ap1-2021-herbst-q3-bb',
  examId: 'ap1-2021-herbst',
  questionNumber: 3,
  subPart: 'bb',
  topic: 'Kaufmännische Rechnung / Projektdauer',
  scenario: SCENARIO,
  question:
    'Ermitteln Sie, nach wie vielen Tagen die Migration frühestens abgeschlossen ist, wenn das Subunternehmen zwei Angestellte mit einer täglichen Arbeitszeit von 8 h pro Tag einsetzt.\n\n' +
    'Der Rechenweg ist anzugeben.',
  maxPoints: 2,
  modelSolution:
    'Dauer pro Postfach * Anzahl der Postfächer / Tägliche Arbeitszeit / Anzahl Arbeiter\n' +
    '2h * 20 / 8h / 2 = 2,5\n' +
    'Aufgerundet: 3 Tage',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q3c: ApExamQuestion = {
  id: 'ap1-2021-herbst-q3-c',
  examId: 'ap1-2021-herbst',
  questionNumber: 3,
  subPart: 'c',
  topic: 'Remote-Arbeit / Vor- und Nachteile',
  scenario: SCENARIO,
  question:
    'Mit dem Auftraggeber wird diskutiert, ob gewisse Arbeiten der IT.SYS GmbH remote durchgeführt werden sollen.\n\n' +
    'Nennen Sie zwei Vorteile sowie zwei Nachteile von remote gegenüber einer Vor-Ort-Wartung.',
  maxPoints: 4,
  modelSolution:
    'Vorteile für Remote-Arbeit:\n' +
    '– Kostenvorteil (z. B. weniger Fahrtkosten, Spesen)\n' +
    '– Umweltschonenderes Arbeitsmodell (z. B. Vermeidung CO2 durch weniger Fahrten)\n' +
    '– Schonung interner Ressourcen (z. B. Büros, Besprechungsräume)\n' +
    '– Kontaktvermeidung (z. B. bessere Einhaltung der COVID-Vorgaben)\n' +
    '– Zusätzliche Spezialisten können leicht eingebunden werden\n\n' +
    'Nachteile Remote-Arbeit:\n' +
    '– Datenschutzrisiken (z. B. es könnten Patientendaten abgegriffen werden)\n' +
    '– Zusätzliche Kosten für gesicherte Verbindungen\n' +
    '– Keine Wartungsmöglichkeit bei Verbindungsproblemen\n' +
    '– Erschwerte Kommunikation durch indirekte Kommunikationskanäle',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q3d: ApExamQuestion = {
  id: 'ap1-2021-herbst-q3-d',
  examId: 'ap1-2021-herbst',
  questionNumber: 3,
  subPart: 'd',
  topic: 'Schulungskonzepte',
  scenario: SCENARIO,
  question:
    'Auf allen Arbeitsplätzen in der Arztpraxis soll eine neue Software-Suite für die Bereiche Textverarbeitung, Tabellenkalkulation und Präsentationen installiert werden. Eine weitere Aufgabe der IT.SYS GmbH ist es, die Mitarbeiter in der Praxis in diese Programme einzuweisen.\n\n' +
    'Beschreiben Sie drei von den vier vorgegebenen Möglichkeiten, wie die betreffenden Inhalte vermittelt werden können.\n\n' +
    '(1) Schulung am Arbeitsplatz:\n\n(2) Webinare:\n\n(3) Video-Tutorien:\n\n(4) Multiplikatoren-Schulung:',
  maxPoints: 6,
  modelSolution:
    '(Es sind drei der vier folgenden Möglichkeiten zu beschreiben; alle vier werden hier der Vollständigkeit halber angegeben.)\n\n' +
    'Schulung am Arbeitsplatz:\nDie betroffenen Mitarbeiter erhalten während der regulären Arbeitszeit eine detaillierte Einweisung in die einzelnen Bestandteile der Software und haben direkt die Möglichkeit Fragen zu stellen.\n\n' +
    'Webinare:\nZu zuvor festgelegten Zeiten findet eine Online-Präsentation bzw. ein Online-Kurs zur Software-Suite statt. Die Teilnehmer haben jederzeit die Möglichkeit Fragen zu stellen.\n\n' +
    'Video-Tutorien:\nZuvor vorbereitete Videos werden allen Mitarbeitern unabhängig voneinander zur Verfügung gestellt. Die Video-Tutorien können zeitlich flexibel genutzt werden. Eine Möglichkeit zur Interaktion wird nicht geboten.\n\n' +
    'Multiplikatoren-Schulung:\nEinzelne Mitarbeiter werden explizit für die Schulung ausgewählt. Nach Abschluss der Schulung geben diese Mitarbeiter das neu erworbene Wissen an die übrigen Kolleginnen / Kollegen weiter, die Form ist hierbei nicht direkt festgelegt.',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q3e: ApExamQuestion = {
  id: 'ap1-2021-herbst-q3-e',
  examId: 'ap1-2021-herbst',
  questionNumber: 3,
  subPart: 'e',
  topic: 'Hardware / RAID-Level',
  scenario: SCENARIO,
  question:
    'Der Praxisinhaber hat von seinem IT-Dienstleister gehört, dass durch den Verbund mehrerer Festplatten verschiedene RAID-Level gebildet werden können. Besonders wichtig für die Arztpraxis ist es, dass eine hohe Verfügbarkeit der Daten vorhanden ist. Besonders der Ausfall einer Festplatte soll kompensiert werden. Gleichzeitig soll sich der Anteil der Speicherkapazität für die Nutzdaten auf den Festplatten nicht so stark reduzieren.\n\n' +
    'Hinsichtlich dieser Prioritäten beraten Sie den Praxisinhaber und stellen die RAID-Level 0, 1 und 5 vor.\n\n' +
    'Erklären Sie dem Praxisinhaber die Grundfunktionen der drei RAID-Level-Arten und begründen Sie, für welches RAID-Level sich der Praxisinhaber entscheiden sollte.',
  maxPoints: 7,
  modelSolution:
    'RAID 0:\nDurch das RAID-Level 0 wird keine Datenredundanz gewährleistet. Beim Ausfall einer Festplatte sind die gespeicherten Daten unbrauchbar. Vorteil des RAID-Levels ist die hohe Transferrate durch parallele Schreibzugriffe. Durch die fehlende Redundanz wird die Datensicherheit nicht erhöht.\n\n' +
    'RAID 1:\nDurch das RAID-Level 1 wird eine volle Redundanz der Daten gewährleistet, da hier alle Daten gespiegelt abgespeichert werden. Der nutzbare Anteil der Speicherkapazität reduziert sich anteilsmäßig um 50 %. Die Nettokapazität ist also nur halb so groß wie beim RAID-Level 0. Allerdings kann hierdurch der Ausfall einer Festplatte verkraftet werden.\n\n' +
    'RAID 5:\nBeim RAID-Level 5 werden Paritätsinformationen aufgeteilt auf alle verwendeten Festplatten. Hierbei entsteht eine Datenredundanz. Die Lesegeschwindigkeit ist durch die Möglichkeit der parallelen Zugriffe sehr hoch. Die Schreibgeschwindigkeit ist leicht verringert durch die Berechnung der Paritätsinformationen. Im RAID-Level 5 müssen mindestens drei Festplatten verwendet werden, hierbei wäre die Nettokapazität um ca. 33% verringert.\n\n' +
    'Durch RAID 0 kann keine hohe Verfügbarkeit der Daten gewährleistet werden, durch RAID 1 sinkt der Anteil des nutzbaren Speichers sehr stark, nur RAID 5 bietet eine hohe Verfügbarkeit der Daten bei einer relativ großen Nettospeicherkapazität. Bei den drei zur Auswahl gestellten Optionen ist RAID 5 zu wählen.',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q4a: ApExamQuestion = {
  id: 'ap1-2021-herbst-q4-a',
  examId: 'ap1-2021-herbst',
  questionNumber: 4,
  subPart: 'a',
  topic: 'IT-Sicherheit / Schutzziele',
  scenario: SCENARIO,
  referenceText:
    'Tabelle "Sicherheitsmaßnahme" mit Kreuz-Spalten "Vertraulichkeit" / "Integrität" / "Verfügbarkeit" und Spalte "Begründung":\n' +
    'Sichere Passwörter wählen → Vertraulichkeit (X, vorgegebenes Beispiel) → Begründung (vorgegeben): "Der Zugriff Fremder auf die Benutzerdaten wird besser geschützt."\n' +
    'Regelmäßige Datensicherung der Patientendaten → [Kreuz und Begründung auszufüllen]\n' +
    'Verschlüsselung der Festplatten → [Kreuz und Begründung auszufüllen]\n' +
    'Zentrale Bearbeitung wichtiger Dokumente auf Server → [Kreuz und Begründung auszufüllen]\n' +
    'Hashwertüberprüfung bei Softwareinstallation → [Kreuz und Begründung auszufüllen]',
  question:
    'Die IT.SYS GmbH hat von der Arztpraxis Care auch noch den Auftrag erhalten, Datenschutz und Datensicherheit zu gewährleisten und gegebenenfalls Maßnahmen zu ergreifen. Sie werden beauftragt, sich dieser Aufgabe anzunehmen.\n\n' +
    'In einem ersten Schritt informieren Sie sich über allgemeine Grundlagen der Informationssicherheit. Als wichtige Schutzziele werden hier u. a. Vertraulichkeit, Integrität und Verfügbarkeit genannt. Sie klären nun, welches Schutzziel der jeweiligen Sicherheitsmaßnahme zugeordnet werden kann. Setzen Sie dazu pro Zeile jeweils ein Kreuz und geben Sie eine Begründung für Ihre Zuordnung an.',
  maxPoints: 6,
  modelSolution:
    'Sichere Passwörter wählen → Vertraulichkeit (X, vorgegebenes Beispiel) → Der Zugriff Fremder auf die Benutzerdaten wird besser geschützt.\n' +
    'Regelmäßige Datensicherung der Patientendaten → Verfügbarkeit (X) → Die Verfügbarkeit der Daten wird durch regelmäßige Datensicherungen maßgeblich verbessert. Im Falle eines Datenverlustes können die originalen Daten aus den Datensicherungen wiederhergestellt werden.\n' +
    'Verschlüsselung der Festplatten → Vertraulichkeit (X) → Durch die Verschlüsselung der Festplatte bzw. der darauf gespeicherten Informationen ist eine inhaltliche Nutzung der Daten durch unberechtigte Personen ausgeschlossen.\n' +
    'Zentrale Bearbeitung wichtiger Dokumente auf Server → Integrität (X) → Durch die zentrale Bearbeitung wichtiger Dokumente auf einem Server wird die Unverfälschbarkeit und Korrektheit der Daten gewährleistet. Unterschiedliche Bearbeitungsstände der Dokumente werden vermieden.\n' +
    'Hashwertüberprüfung bei Softwareinstallation → Integrität (X) → Der zusammen mit dem Softwarepaket übermittelte Hashwert muss identisch zum lokal berechneten Hashwert des Softwarepakets sein. Sollte der Hashwert unterschiedlich sein, ist davon auszugehen, dass die Software z. B. beim Übertragungsweg manipuliert wurde. Die Integrität des Pakets kann durch Hashwertprüfungen zweifelsfrei bestätigt werden.\n\n' +
    'u. U. sind andere Lösungen bei sinnvoller Begründung möglich.\n\n' +
    'Vertraulichkeit: Daten dürfen ausschließlich autorisierten Personen zugänglich sein.\n' +
    'Integrität: Daten müssen unverfälschbar und korrekt sein.\n' +
    'Verfügbarkeit: Durch verschiedenste Systeme ist sicherzustellen, dass Daten unter allen Umständen verfügbar sind.',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q4b: ApExamQuestion = {
  id: 'ap1-2021-herbst-q4-b',
  examId: 'ap1-2021-herbst',
  questionNumber: 4,
  subPart: 'b',
  topic: 'IT-Sicherheit / BSI-Grundschutz',
  scenario: SCENARIO,
  question:
    'Im IT-Grundschutz-Kompendium des Bundesamtes für Sicherheit in der Informationstechnik (BSI) finden Sie Basis-Anforderungen zur Absicherung eines PC-Clients.\n\n' +
    'Nennen Sie je eine Maßnahme, mit denen die folgenden Anforderungen umgesetzt werden könnten.\n\n' +
    '– Aktivieren von Autoupdate-Mechanismen:\n\n– Differenzieren von Benutzerrollen (Rollentrennung):',
  maxPoints: 2,
  modelSolution:
    'Aktivieren von Autoupdate-Mechanismen:\n' +
    'In vertrauenswürdiger Software automatische Aktualisierungen zulassen, Update der Virensignaturen automatisch durchführen lassen, verfügbare Updates vom Betriebssystemhersteller automatisch installieren lassen.\n\n' +
    'Differenzieren von Benutzerrollen (Rollentrennung):\n' +
    'Durch eine Rollen- und Rechtematrix kann sichergestellt werden, dass jeder User so viele Rechte wie nötig aber auch so wenige Rechte wie möglich erhält. Administrative Eingriffe wie z. B. die Installation von Softwarepaketen oder die Konfiguration des Systems darf nur durch entsprechend berechtigte Administratoren erfolgen. Systemdateien dürfen von Benutzern nur im lesenden Zugriff verwendet werden.',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q4c: ApExamQuestion = {
  id: 'ap1-2021-herbst-q4-c',
  examId: 'ap1-2021-herbst',
  questionNumber: 4,
  subPart: 'c',
  topic: 'IT-Sicherheit / Schutzbedarfsanalyse',
  scenario: SCENARIO,
  referenceText:
    'Schutzbedarfskategorien:\n' +
    'Niedrig bis mittel → Die Schadensauswirkungen sind begrenzt und überschaubar.\n' +
    'Hoch → Die Schadensauswirkungen können beträchtlich sein.\n' +
    'Sehr hoch → Die Schadensauswirkungen können ein existenziell bedrohliches, katastrophales Ausmaß erreichen.\n\n' +
    'Tabelle "IT-Anwendung" / "Schutzbedarfsfeststellung" (Schutzziel, Kategorie, Begründung):\n' +
    'Prüfziffernverfahren bei der Übermittlung der Krankenversicherungsnummer | Integrität | hoch | (vorgegebenes Beispiel: "z. B.: Verfälschte Daten bei der Übertragung können zu fehlerhaften Abrechnungen führen.")\n' +
    'Textverarbeitung | Verfügbarkeit | mittel | [Begründung auszufüllen]\n' +
    'Software zur telemedizinischen Beratung über Videokonferenz | Vertraulichkeit | hoch | [Begründung auszufüllen]\n' +
    'Patientendatenverarbeitung | Integrität | sehr hoch | [Begründung auszufüllen]',
  question:
    'Im Rahmen einer Schutzbedarfsanalyse versuchen Sie zu ermitteln, wie wichtig die verwendeten unternehmensrelevanten IT-Anwendungen für den Fortgang des Geschäftsprozesses sind, um das Maß an benötigtem Schutz zu definieren.\n\n' +
    'Folgende Schutzbedarfskategorien werden vorgeschlagen (siehe Referenztabelle).\n\n' +
    'In einer Tabelle wurde bereits der Schutzbedarf verschiedener IT-Anwendungen zugewiesen.\n\n' +
    'Fügen Sie jeweils eine mögliche Begründung für den gewählten Schutzbedarf hinzu.',
  maxPoints: 6,
  modelSolution:
    'Textverarbeitung | Verfügbarkeit | mittel | Bei einem Ausfall der Textverarbeitung müssen bestimmte Arbeitsschritte wie beispielsweise die Rechnungserstellung oder die Erstellung der Patientenbriefe nachgeholt werden. Work-arounds sind allerdings möglich.\n' +
    'Software zur telemedizinischen Beratung über Videokonferenz | Vertraulichkeit | hoch | Bei der telemedizinischen Beratung werden vertrauliche Patientendaten ausgetauscht, ein Bekanntwerden dieser Daten kann die Betroffenen erheblich beeinträchtigen.\n' +
    'Patientendatenverarbeitung | Integrität | sehr hoch | Sollten Daten bei der Patientendatenverarbeitung nicht korrekt sein, könnte dies zu fehlerhaften Diagnosen oder Behandlungen führen. Patienten wären ggf. unmittelbar gefährdet.',
  answerStatus: 'confirmed',
  sourcePage: 10,
}

const q4d: ApExamQuestion = {
  id: 'ap1-2021-herbst-q4-d',
  examId: 'ap1-2021-herbst',
  questionNumber: 4,
  subPart: 'd',
  topic: 'Datenschutz / Rechtsgrundlagen',
  scenario: SCENARIO,
  question:
    'Die Arzthelferin an der Rezeption möchte von Ihnen wissen, für welche Art von Daten ein besonderer Schutz gesetzlich vorgeschrieben ist.\n\n' +
    'Geben Sie der Arzthelferin Auskunft und benennen Sie hierzu eine rechtliche Grundlage.',
  maxPoints: 2,
  modelSolution:
    'Personenbezogene Daten, Mitarbeiterdaten sowie Patientendaten jeglicher Art unterliegen dem besonderen Schutz. Gesetzliche Vorschriften diesbezüglich sind z. B. in der Datenschutzgrundverordnung (DSGVO) oder dem Bundesdatenschutzgesetz (BDSG) geregelt. Das BDSG ergänzt und präzisiert die DSGVO an einigen Stellen.',
  answerStatus: 'confirmed',
  sourcePage: 10,
}

const q4e: ApExamQuestion = {
  id: 'ap1-2021-herbst-q4-e',
  examId: 'ap1-2021-herbst',
  questionNumber: 4,
  subPart: 'e',
  topic: 'IT-Sicherheit / Passwortkriterien',
  scenario: SCENARIO,
  question:
    'Führen Sie zwei Kriterien an, die ein sicheres Passwort erfüllen sollte. Beschreiben Sie auch, warum diese Kriterien für eine höhere Sicherheit sorgen.',
  maxPoints: 4,
  modelSolution:
    '(Zwei der folgenden Kriterien werden erwartet, jeweils mit Begründung:)\n\n' +
    '– Verwenden einer ausreichenden Passwortlänge\n  Hierdurch werden Brute-Force-Attacken erschwert, zusammen mit anderen Passwortkriterien kann es hierdurch unmöglich gemacht werden, das Passwort zeitnah zu ermitteln. Die Anzahl der möglichen Passwörter steigt mit zunehmender Passwortlänge exponentiell an.\n\n' +
    '– Passwörter dürfen keinen persönlichen Bezug haben\n  Unberechtigte Personen könnten andernfalls das Passwort einfach erraten. Es ist darauf zu achten, dass persönliche Daten wie z. B. das eigene Geburtsdatum, der Name des Kindes o. Ä. kein Passwortbestandteil sind.\n\n' +
    '– Verwendung von Sonderzeichen, Ziffern sowie Groß- und Kleinbuchstaben\n  Durch die Erhöhung des Zeichenvorrats wird die Komplexität des Passwortes und somit auch die Schwierigkeit des Entschlüsselns maßgeblich erhöht.\n\n' +
    '– Sicherstellen, dass das Passwort oder Teile des Passwortes in keinem Wörterbuch zu finden sind\n  Durch unsinnige Zeichenketten wird das softwareunterstützte Ermitteln des Passwortes über Wörterbücher erschwert. Reelle Wörter sind stets mittels Sonderzeichen und Ziffern zu verfremden.\n\n' +
    '– Verwendung unterschiedlicher Passwörter für unterschiedliche Zugänge\n  Sollte ein Passwort bekannt werden, sind durch die unterschiedlichen Passwörter der verschiedenen Zugänge nicht direkt alle Systeme gefährdet. Das mögliche Risiko beim Bekanntwerden des Passwortes kann so reduziert werden.',
  answerStatus: 'confirmed',
  sourcePage: 10,
}

const Q4F_REFERENCE =
  'Die Gebührenabrechnungssoftware ist so eingerichtet, dass der Datenbestand freitags beim Herunterfahren des PCs auf einer speziell eingerichteten Partition der Festplatte gesichert wird.'

const q4fa: ApExamQuestion = {
  id: 'ap1-2021-herbst-q4-fa',
  examId: 'ap1-2021-herbst',
  questionNumber: 4,
  subPart: 'fa',
  topic: 'Datensicherung / Risikoanalyse',
  scenario: SCENARIO,
  referenceText: Q4F_REFERENCE,
  question:
    'Die Gebührenabrechnungssoftware ist so eingerichtet, dass der Datenbestand freitags beim Herunterfahren des PCs auf einer speziell eingerichteten Partition der Festplatte gesichert wird.\n\n' +
    'Ihr Teamleiter beauftragt Sie, der Leiterin des Praxismanagements die Risiken aufzuzeigen.\n\n' +
    'Beschreiben Sie zwei der Risiken.',
  maxPoints: 2,
  modelSolution:
    'Durch die wöchentliche Sicherung entsteht ein hohes Sicherheitsrisiko, sollte z. B. am Donnerstag ein Defekt innerhalb der Gebührenabrechnungssoftware vorliegen, sind Daten von sechs Tagen unwiederbringlich verloren. Eine Datenrekonstruktion ist kaum möglich bzw. sehr aufwendig.\n\n' +
    'Durch das Sichern der Daten auf einer Festplattenpartition des PCs wird nur eine geringe Datenverfügbarkeit gewährleistet. Da die Sicherungen nicht redundant gespeichert werden, ist die Verfügbarkeit einer einzigen Festplatte entscheidend für die Verfügbarkeit aller gesicherten Daten.\n\n' +
    'Die Sicherungen und die Produktivdaten der Gebührenabrechnungssoftware sind räumlich nicht getrennt. Im Brandfall wären somit sowohl die gesicherten als auch die produktiv verwendeten Datenbestände verloren.',
  answerStatus: 'confirmed',
  sourcePage: 11,
}

const q4fb: ApExamQuestion = {
  id: 'ap1-2021-herbst-q4-fb',
  examId: 'ap1-2021-herbst',
  questionNumber: 4,
  subPart: 'fb',
  topic: 'Datensicherung / Verbesserungsvorschlag',
  scenario: SCENARIO,
  referenceText: Q4F_REFERENCE,
  question: 'Unterbreiten Sie der Leiterin einen konkreten Verbesserungsvorschlag.',
  maxPoints: 2,
  modelSolution:
    'Ein Sicherungskonzept mit wöchentlichen Vollsicherungen sowie täglichen inkrementellen Sicherungen könnte das Risiko der langen Sicherungsintervalle minimieren.\n\n' +
    'Die Sicherungen sollten auf speziell eingerichteten RAID-Systemen vorgenommen werden. Hierbei können im Falle eines Festplattendefekts die Daten wiederhergestellt werden.\n\n' +
    'Die Sicherungen sollten auf geeigneten externen Medien abgelegt werden. Diese externen Medien müssen dann räumlich getrennt aufbewahrt werden.',
  answerStatus: 'confirmed',
  sourcePage: 11,
}

export const ap1_2021HerbstQuestions: ApExamQuestion[] = [
  q1a,
  q1b,
  q1c,
  q1d,
  q1e,
  q2a,
  q2b,
  q2c,
  q2d,
  q2e,
  q3a,
  q3ba,
  q3bb,
  q3c,
  q3d,
  q3e,
  q4a,
  q4b,
  q4c,
  q4d,
  q4e,
  q4fa,
  q4fb,
]
