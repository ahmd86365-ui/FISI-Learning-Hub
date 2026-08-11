import type { ApExamMeta, ApExamQuestion } from '../../types/apExam'

export const ap2SiT1_2022SommerMeta: ApExamMeta = {
  id: 'ap2-si-t1-2022-sommer',
  area: 'AP2_SI_T1',
  year: 2022,
  period: 'Sommer',
  label: 'Sommer 2022',
  examDate: 'Mittwoch, 4. Mai 2022',
  examTitle: 'Konzeption und Administration von IT-Systemen',
  courseCode: '1202',
  sourceExamPdf: 'SI_AP2_T1_22s.pdf',
  sourceSolutionPdf: 'Loe_SI_AP2_T1_22s.pdf',
  solutionSource: 'confirmed',
  taskCount: 4,
  durationMinutes: 90,
  totalPoints: 100,
}

const SCENARIO =
  'Die Aufgaben 1 bis 4 beziehen sich auf die folgende Ausgangssituation:\n\n' +
  'Sie sind bei der eFRAG GmbH, einem überregionalen IT-Systemhaus für Großkunden im Bereich der regenerativen Energiegewinnung, als Fachinformatiker/-in beschäftigt.\n\n' +
  'Sie betreuen zurzeit die ReWind GmbH, ein Unternehmen für Windenergieanlagen.\n\n' +
  'In diesem Zusammenhang sollen Sie die folgenden vier Aufgaben bearbeiten:\n' +
  '– Speichersysteme bereitstellen, eine Datenbank bearbeiten\n' +
  '– Skripte zur Systemverwaltung erstellen\n' +
  '– Die Datensicherheit und den Datenschutz sicherstellen\n' +
  '– Die Betriebssysteminstallation planen und durchführen'

const q1aa: ApExamQuestion = {
  id: 'ap2-si-t1-2022-sommer-q1-aa',
  examId: 'ap2-si-t1-2022-sommer',
  questionNumber: 1,
  subPart: 'aa',
  topic: 'RAID-Controller / Auswahlkriterien',
  scenario: SCENARIO,
  referenceText:
    'Übersichtstabelle „Technisches Merkmal / Möglicher Wert" mit vorgegebener erster Zeile:\nUnterstützte RAID-Level | 0, 1, 10, 5, 6, 50, 60\n(zwei weitere Zeilen sind vom Prüfling zu ergänzen)',
  question:
    '1. Aufgabe (26 Punkte)\n\nDie ReWind GmbH hat Sie beauftragt, zwei Speichersysteme (NAS) als Plattform für eine neue Datenbank bereitzustellen. An der Entwicklung der Datenbank wirken Sie ebenfalls mit.\n\n' +
    'Das Speichersystem soll insgesamt aus zwei RAID-Verbünden bestehen. Zum einen aus einem möglichst schnellen RAID-Verbund mit einer Kapazität von ca. 20 TiB und zum anderen aus einem kostengünstigen RAID-Verbund mit einer Kapazität von ca. 200 TiB.\n\n' +
    'Bei der Auswahl der RAID-Controller sind verschiedene technische Merkmale der Controller zu berücksichtigen.\n\n' +
    'Vervollständigen Sie die Übersichtstabelle um zwei weitere leistungsbestimmende Merkmale.',
  maxPoints: 4,
  modelSolution:
    'Technisches Merkmal | Möglicher Wert\n' +
    'Unterstützte RAID-Level | 0, 1, 10, 5, 6, 50, 60 (vorgegeben)\n' +
    'Größe des Cache | z. B. 1024 MiB\n' +
    'Anzahl HDD/SSD-Anschlüsse | z. B. 16 Festplatten / SSDs\n' +
    'Art der Schnittstelle | z. B. PCIe Gen3\n' +
    'Durchsatz des Controllers | z. B. 6 Gbit/s\n' +
    '… | …\n\n' +
    '(Zwei der genannten Merkmale sind für die volle Punktzahl ausreichend.)',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q1ab: ApExamQuestion = {
  id: 'ap2-si-t1-2022-sommer-q1-ab',
  examId: 'ap2-si-t1-2022-sommer',
  questionNumber: 1,
  subPart: 'ab',
  topic: 'RAID-Level / Schreibgeschwindigkeit',
  scenario: SCENARIO,
  question: 'Geben Sie den fehlertoleranten RAID-Level an, der die höchstmögliche Datenrate bei Schreiboperationen bietet.',
  maxPoints: 2,
  modelSolution:
    'Der gesuchte RAID-Level ist RAID 10.\n\n' +
    'RAID 10 ist eine Kombination aus RAID 0 (Disk-Striping) und RAID 1 (volle Redundanz durch Spiegelung), hierdurch kann eine höchstmögliche Datenrate bei Schreiboptionen sowie ein fehlertoleranter Betrieb gewährleistet werden. Es bietet eine hohe Redundanz bei guter Performance. Besonders geeignet ist es für Input-/Output-intensive Anwendungen, es steht eine Nettokapazität von 50 % zur Verfügung.',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q1ac: ApExamQuestion = {
  id: 'ap2-si-t1-2022-sommer-q1-ac',
  examId: 'ap2-si-t1-2022-sommer',
  questionNumber: 1,
  subPart: 'ac',
  topic: 'RAID-Level / Speicherkapazität',
  scenario: SCENARIO,
  question:
    'Geben Sie den fehlertoleranten RAID-Level an, bei dem die verfügbare Speicherkapazität gegenüber der gesamten Speicherkapazität des RAID-Verbunds möglichst groß ist.',
  maxPoints: 2,
  modelSolution:
    'Der gesuchte RAID-Level ist RAID 5. RAID 4 könnte auch gewählt werden. Hierbei werden die Paritäten jedoch nicht auf alle verfügbaren Festplatten aufgeteilt.\n\n' +
    'RAID 5 kann bei mindestens 3 Festplatten eingesetzt werden. Die Lesegeschwindigkeit ist durch parallele Zugriffe sehr hoch. Die Schreibgeschwindigkeit ist leicht verringert durch die Berechnung der Parity Information. Die Nettospeicherkapazität entspricht der Bruttospeicherkapazität abzüglich der Kapazität einer Festplatte des Verbundes.\n\n' +
    'RAID 4 funktioniert analog zu RAID 5, verteilt die Paritätsinformationen jedoch nicht auf mehrere Festplatten. Im Idealfall sollte bei einer Entscheidung zwischen RAID 5 und RAID 4 immer RAID 5 bevorzugt werden – RAID 4 wird heutzutage nur noch sehr selten verwendet.',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q1ad: ApExamQuestion = {
  id: 'ap2-si-t1-2022-sommer-q1-ad',
  examId: 'ap2-si-t1-2022-sommer',
  questionNumber: 1,
  subPart: 'ad',
  topic: 'Benchmarktest / Testbedingungen',
  scenario: SCENARIO,
  question:
    'Nach Fertigstellung der Speichersysteme und der Integration in das Netzwerk wollen Sie für die Speichersysteme einen Benchmarktest durchführen.\nUm objektive Ergebnisse zu bekommen, ist für geeignete Testbedingungen zu sorgen.\n\n' +
    'Erläutern Sie zwei Aspekte, die bei Nichtbeachtung zu verfälschten Testergebnissen führen können.',
  maxPoints: 4,
  modelSolution:
    'Um verfälschte Testergebnisse auszuschließen, sollte auf Folgendes geachtet werden:\n' +
    '– Nichtbenötigte Dienste und Programme müssen beendet werden.\n' +
    '– Der Test sollte in einem separaten Netzwerk / einer separaten Umgebung durchgeführt werden.\n' +
    '– Die Test-Umgebung sollte fehlerfrei sein.\n' +
    '– Der Testaufbau sollte möglichst realitätsnah erfolgen.\n' +
    '– Die Tests sollten so ausgewählt werden, dass sie praxisgerecht sind.',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const DB_ENTWURF_REFERENCE =
  'Vereinfachter (unvollständiger) Datenbankentwurf, Beziehungen ohne Kardinalitäten:\n' +
  'Tabelle Windpark: IDWindpark (PK), StandortWindpark, BetreiberGesellschaft, FlaecheWindpark, Erweiterungsfähig\n' +
  'Tabelle Windrad: IDWindrad (PK), Windradtyp, Baujahr, Nabenhöhe, LeistungMaximal, LeistungAktuell, IDWindpark\n' +
  'Tabelle Betriebsdaten: IDLog (PK), Datum, TagesErzeugung, IDWindrad\n\n' +
  'Windpark ist über IDWindpark mit Windrad verbunden; Windrad ist über IDWindrad mit Betriebsdaten verbunden. Die Kardinalitäten sind noch zu ergänzen.'

const q1ba: ApExamQuestion = {
  id: 'ap2-si-t1-2022-sommer-q1-ba',
  examId: 'ap2-si-t1-2022-sommer',
  questionNumber: 1,
  subPart: 'ba',
  topic: 'Datenmodellierung / Kardinalitäten',
  scenario: SCENARIO,
  referenceText: DB_ENTWURF_REFERENCE,
  question: 'Folgender vereinfachter Entwurf der neuen Datenbank liegt vor (siehe Referenztext).\n\nErgänzen Sie in dem Diagramm zu den beiden Beziehungen die entsprechenden Kardinalitäten.',
  maxPoints: 4,
  modelSolution:
    'Windpark (1) — Windrad (n): Ein Windpark kann mehrere Windräder enthalten (1:n).\n' +
    'Windrad (1) — Betriebsdaten (n): Ein Windrad hat mehrere Betriebsdaten-Einträge (1:n).\n\n' +
    'Schreibweise: 1 : n oder 1 : ∞',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q1bb: ApExamQuestion = {
  id: 'ap2-si-t1-2022-sommer-q1-bb',
  examId: 'ap2-si-t1-2022-sommer',
  questionNumber: 1,
  subPart: 'bb',
  topic: 'Datenbank / Referentielle Integrität',
  scenario: SCENARIO,
  referenceText:
    DB_ENTWURF_REFERENCE +
    '\n\nAccess-Dialog „Beziehungen bearbeiten": Tabelle/Abfrage „Windrad", Verwandte Tabelle/Abfrage „Betriebsdaten", verknüpfte Felder ID-Windrad / ID-Windrad; Checkbox „Mit referentieller Integrität" (nicht aktiviert), weitere deaktivierte Optionen „Aktualisierungsweitergabe an verwandte Felder" und „Löschweitergabe an verwandte Datensätze".',
  question:
    'Beim Bearbeiten der Beziehungen müssen Sie entscheiden, ob die Check-Box „Mit referentieller Integrität" zu aktivieren ist.\n\n' +
    'Erläutern Sie den Hintergrund, warum die Check-Box „Mit referentieller Integrität" aktiviert werden sollte.',
  maxPoints: 3,
  modelSolution:
    'Die Aktivierung der Check-Box „Mit referentieller Integrität" erfolgt, um inkonsistente Zustände der Datenbank möglichst zu verhindern. Dazu zählen sogenannte Einfüge-, Lösch- und Änderungsanomalien. Die referentielle Integrität trägt somit zur Sicherstellung der Datenintegrität bei relationalen Datenbanken bei.',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q1bc: ApExamQuestion = {
  id: 'ap2-si-t1-2022-sommer-q1-bc',
  examId: 'ap2-si-t1-2022-sommer',
  questionNumber: 1,
  subPart: 'bc',
  topic: 'SQL / Aggregatfunktion',
  scenario: SCENARIO,
  referenceText: DB_ENTWURF_REFERENCE + '\n\nHinweis: Ein Bogen SQL-Syntax (Auszug) befindet sich im Belegsatz.',
  question: 'Erstellen Sie eine SQL-Anweisung, die die Anzahl Windräder im Windpark „Kahler Asten" (IDWindpark 102) liefert.',
  maxPoints: 3,
  modelSolution: 'SELECT count(*)\nFROM Windrad\nWHERE IDWindpark = 102;',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q1bd: ApExamQuestion = {
  id: 'ap2-si-t1-2022-sommer-q1-bd',
  examId: 'ap2-si-t1-2022-sommer',
  questionNumber: 1,
  subPart: 'bd',
  topic: 'SQL / TOP und ORDER BY',
  scenario: SCENARIO,
  referenceText: DB_ENTWURF_REFERENCE + '\n\nHinweis: Ein Bogen SQL-Syntax (Auszug) befindet sich im Belegsatz.',
  question:
    'Erstellen Sie eine SQL-Anweisung, die die IDs der drei Windräder im Windpark „Kahler Asten" (IDWindpark 102) mit der höchsten Tagesleistung am 3. Mai 2022 liefert.',
  maxPoints: 4,
  modelSolution: 'SELECT top 3\nIDWindrad\nFROM Betriebsdaten\nWHERE IDWindpark = 102\nAND Datum = "2022.05.03"\nORDER BY TagesErzeugung DESC;',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const AKTIONSDIAGRAMM_BELEGSATZ =
  'Belegsatz-Legende „UML-Aktionsdiagramm/Aktivitätsdiagramm": Startknoten (gefüllter Kreis) markiert den Beginn eines Ablaufs; Ablaufende (Kreis mit Kreuz) markiert das Ende eines Zweiges; Endknoten (gefüllter Kreis mit Ring) markiert das Ende eines Ablaufs; Aktion (Rechteck mit abgerundeten Ecken) beschreibt ein Verhalten, das eine Veränderung herbeiführt; Pfeil beschreibt den Fluss von Aktion zu Aktion, Angabe einer Bedingung in eckiger Klammer möglich (z. B. [Bedingung]).\n' +
  'Zusätzlich abgebildet: Teilung (Splitting) — nach dem Ende einer Aktion werden mehrere Aktionen begonnen; Synchronisation (Und) — nach dem Ende mehrerer Aktionen wird eine Aktion begonnen; Synchronisation und Teilung — nach dem Ende mehrerer Aktionen wird mit mehreren Aktionen begonnen; Entscheidung (Raute) — nach Aktion a wird entweder Aktion b, c oder d ausgeführt, mit Bedingungen wie [x<0], [x=0], [x>0]; Zusammenführung (Oder) — nach Aktion a, b oder c wird Aktion d ausgeführt; Zusammenführung und Entscheidung — nach Aktion a oder b wird entweder Aktion c oder d ausgeführt.\n' +
  'Ein Beispiel mit zwei Schwimmbahnen (Schwimmbahn 1/Schwimmbahn 2) und Aktionen 1–3 illustriert den Ablauf über Bahnen hinweg, endend im Endknoten.'

const q2a: ApExamQuestion = {
  id: 'ap2-si-t1-2022-sommer-q2-a',
  examId: 'ap2-si-t1-2022-sommer',
  questionNumber: 2,
  subPart: 'a',
  topic: 'UML-Aktivitätsdiagramm / Speicherverwaltung',
  scenario: SCENARIO,
  referenceText:
    'Vorgegebener Diagrammrahmen „Speichermonitor" (UML-Aktivitätsdiagramm): Startknoten → Aktivität „prüfeNAS-1" → Entscheidungsraute (noch ohne Beschriftung/Verzweigungen) — vom Prüfling zu vervollständigen.\n\n' +
    AKTIONSDIAGRAMM_BELEGSATZ,
  question:
    '2. Aufgabe (27 Punkte)\n\nSie wirken bei der Entwicklung von Tools zur Systemverwaltung mit und sollen folgende Aufgaben bearbeiten.\n\n' +
    'Die Datenhaltung erfolgt auf den Speichersystemen NAS-1 und NAS-2. NAS-1 hat eine Kapazität von 10 TiB und NAS-2 hat 1 PiB. Damit das schnellere NAS-1 optimal genutzt wird, gelten die folgenden Regeln:\n' +
    '– Wenn die Speicherbelegung von NAS-1 größer als 40 % und kleiner als 60 % beträgt, dann sollen alle Dateien, auf die seit 120 Tagen nicht mehr zugegriffen wurde, von NAS-1 auf NAS-2 verschoben werden.\n' +
    '– Wenn die Speicherbelegung von NAS-1 größer als 60 % und kleiner als 80 % beträgt, dann sollen alle Dateien, auf die seit mindestens 60 Tagen nicht mehr zugegriffen wurde, von NAS-1 auf NAS-2 verschoben werden.\n' +
    '– Wenn die Speicherbelegung von NAS-1 mehr als 80 % beträgt, dann sollen alle Dateien, auf die seit sieben Tagen nicht mehr zugegriffen wurde und die größer als 100 MiB sind, von NAS-1 auf NAS-2 verschoben werden.\n\n' +
    'Zur Vorbereitung der Programmentwicklung wird zunächst ein Aktivitätsdiagramm erstellt.\n\n' +
    'Vervollständigen Sie das Aktivitätsdiagramm entsprechend der genannten Regeln.\n\n' +
    'Hinweis: Eine Übersicht der Symbole zum Aktivitätsdiagramm finden Sie im Belegsatz.',
  maxPoints: 14,
  modelSolution:
    'Lösungsdiagramm (Swimlane „Speichermonitor"): Startknoten → Aktivität „prüfeNAS-1" → Entscheidungsraute [Belegung > 40 % und < 60 %] → Aktivität „Verschiebe alle Dateien mit Zugriffsdatum älter als 120 Tage nach NAS-2" → Endknoten.\n' +
    'Andernfalls [sonst] → nächste Entscheidungsraute [Belegung > 60 % und < 80 %] → Aktivität „Verschiebe alle Dateien mit Zugriffsdatum älter als 60 Tage nach NAS-2" → Endknoten.\n' +
    'Andernfalls [sonst] → dritte Entscheidungsraute [Belegung > 80 %] → Aktivität „Verschiebe alle Dateien mit Zugriffsdatum älter als 7 Tage und größer als 100 MiB nach NAS-2" → Endknoten.\n' +
    'Andernfalls [sonst] (keine der Bedingungen erfüllt) → direkt zum gemeinsamen Endknoten.\n\n' +
    'Alle drei „Verschiebe…"-Aktivitäten sowie der direkte „sonst"-Pfad der letzten Entscheidung münden im selben, gemeinsamen Endknoten.',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q2b: ApExamQuestion = {
  id: 'ap2-si-t1-2022-sommer-q2-b',
  examId: 'ap2-si-t1-2022-sommer',
  questionNumber: 2,
  subPart: 'b',
  topic: 'Algorithmus / Bubblesort',
  scenario: SCENARIO,
  referenceText:
    'Vorgegebener (unvollständiger) Code:\n' +
    'Zeile 1: int[] werte = { 30, 24, 12, 50, 11, 49, 11 };  //Beispiel Werte\n' +
    'Zeile 2: int temp;  //Variable zum Zwischenspeichern\n' +
    'Zeile 3: len = werte.Length;  //len entspricht der Länge des Arrays\n' +
    'Zeile 4: for (int p = 0; p <= len - 2; p++) {  //äußere Schleife\n' +
    'Zeile 5: (zu ergänzen)  //innere Schleife\n' +
    'Zeile 6: (zu ergänzen)  //Vergleich der Elemente\n' +
    'Zeile 7: (zu ergänzen)  //Tausch der Elemente\n' +
    'Zeile 8: (zu ergänzen)  //Tausch der Elemente\n' +
    'Zeile 9: (zu ergänzen)  //Tausch der Elemente\n' +
    'Zeile 10: }  //Ende Vergleich und Tausch\n' +
    'Zeile 11: }  //Ende innere Schleife\n' +
    'Zeile 12: }  //Ende äußere Schleife',
  question:
    'Oft ist es erforderlich, die Werte eines Arrays in eine aufsteigende Reihenfolge zu sortieren. Dabei kann der Bubblesort-Algorithmus zum Einsatz kommen.\n\n' +
    'Zum Bubblesort-Algorithmus haben Sie folgende Beschreibung recherchiert:\n\n' +
    'Der Algorithmus vergleicht fortlaufend jeweils zwei benachbarte Elemente im Array, beginnend an der Arraystelle „i=0". Ist der Wert an der Stelle „i" größer als der an Stelle „i+1", werden die Werte der Positionen „i" und „i+1" gegeneinander getauscht.\n' +
    'Nach dem vollständigen Durchlauf des Arrays ist das größte Element an der letzten Stelle des Arrays. Bei jedem weiteren Durchlauf wird dann auf die gleiche Weise verfahren, allerdings nur bis zu den bereits sortierten Arraystellen.\n\n' +
    'Vervollständigen Sie den noch unvollständigen Entwurf zum Bubblesort-Algorithmus, indem Sie die Zeilen 5 bis 9 ergänzen.',
  maxPoints: 13,
  modelSolution:
    'Zeile 5: for (int i = 0; i <= len – 2 – p; i++) {  // innere Schleife\n' +
    'Zeile 6: if (werte[i] > werte[i +1]) {  // Vergleich der Elemente\n' +
    'Zeile 7: temp = werte[i +1];  // Tausch der Elemente\n' +
    'Zeile 8: werte[i + 1] = werte[i]  // Tausch der Elemente\n' +
    'Zeile 9: werte[i] = temp;  // Tausch der Elemente',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q3a: ApExamQuestion = {
  id: 'ap2-si-t1-2022-sommer-q3-a',
  examId: 'ap2-si-t1-2022-sommer',
  questionNumber: 3,
  subPart: 'a',
  topic: 'WLAN / Webcam-Anbindung',
  scenario: SCENARIO,
  question:
    '3. Aufgabe (20 Punkte)\n\nIn der ReWind GmbH sollen für die Überwachung des Firmengeländes Webcams angeschafft werden.\n\n' +
    'Es wird diskutiert, die Webcams über WLAN anzubinden.\n\nNennen Sie drei Vorteile für die Anbindung über WLAN.',
  maxPoints: 3,
  modelSolution:
    '– Kabellose Verbindungsart\n– Flexible Positionierung der Webcams möglich\n– Schnelle und einfache Installation\n– Einfache Zuweisung an Accesspoints\n– Günstige Implementierung\n– …',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const WEBCAM_TABELLE_REFERENCE =
  'Webcam-Vergleichstabelle:\n' +
  'Nr | Eigenschaften | Neocam BVR | CamHD-Sec | SecretAV-NB | XoCam z1\n' +
  '1 | Bildauflösung | 1.920 x 1.080 | HD | FHD | 4K\n' +
  '2 | Bilder pro Sekunde | 30 | 60 | 30 | 30\n' +
  '3 | Bewegungserkennung | ja | ja | nein | nein\n' +
  '4 | PoE | nein | ja | nein | nein\n' +
  '5 | SD-Kartenslot | bis 8 GiB | nein | bis 8 GiB | bis 4 GiB\n' +
  '6 | Schutz vor Vandalismus | ja | nein | nein | nein\n' +
  '7 | Zugriff passwortgeschützt | ja | ja | ja | nein\n' +
  '8 | Verschlüsselungsmethode | WPA2 | WPA3 | WEP | WPA\n' +
  '9 | Nachtsichtmodus | Infrarot | nein | nein | nein\n' +
  '10 | Video-Komprimierung | H.264, MPEG-4, MJPEG | MPEG-4, MJPEG | H.264, MPEG-4, MJPEG | H.264\n' +
  '11 | WLAN | ja | ja | ja | ja'

const q3ba: ApExamQuestion = {
  id: 'ap2-si-t1-2022-sommer-q3-ba',
  examId: 'ap2-si-t1-2022-sommer',
  questionNumber: 3,
  subPart: 'ba',
  topic: 'Webcam-Auswahl / Einsatzzweck',
  scenario: SCENARIO,
  referenceText: WEBCAM_TABELLE_REFERENCE,
  question:
    'Für die Videoüberwachung des Firmengeländes werden von der ReWind GmbH die vier oben genannten Webcams in die engere Wahl gezogen.\n\n' +
    'Geben Sie zu dem jeweiligen aufgelisteten Einsatzzweck die geeignete Webcam aus der obenstehenden Tabelle an. Begründen Sie Ihre Entscheidung.\n\n' +
    'Einsatzzweck: 24-stündige Überwachung des Außengeländes mit Publikumsverkehr\n' +
    'Einsatzzweck: Webkonferenzen bei höchster Bildqualität\n' +
    'Einsatzzweck: Überwachung des Serverraums bei sicherster Verschlüsselungsmethode',
  maxPoints: 6,
  modelSolution:
    '24-stündige Überwachung des Außengeländes mit Publikumsverkehr → Webcam: Neocam BVR — Begründung: Nachtsichtmodus (Infrarot); Schutz vor Vandalismus; Bewegungserkennung\n\n' +
    'Webkonferenzen bei höchster Bildqualität → Webcam: XoCam z1 — Begründung: Höchste Qualität (Auflösung 4K)\n\n' +
    'Überwachung des Serverraums bei sicherster Verschlüsselungsmethode → Webcam: CamHD-Sec — Begründung: Passwortgeschützter Zugriff; Neuste Verschlüsselungsmethode (WPA3)',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q3bb: ApExamQuestion = {
  id: 'ap2-si-t1-2022-sommer-q3-bb',
  examId: 'ap2-si-t1-2022-sommer',
  questionNumber: 3,
  subPart: 'bb',
  topic: 'Datenmengenberechnung / Video',
  scenario: SCENARIO,
  referenceText:
    'Überwachungszeit pro Tag: 00:00 bis 05:00 Uhr und 19:00 bis 24:00 Uhr\n' +
    'Anzahl der Webcams: 10\n' +
    'Bildauflösung pro Bild: 1.920 x 1.080 Pixel\n' +
    'Farbtiefe: 16 Bit\n' +
    'Videoübertragung: 10 Bilder/Sekunde',
  question:
    'Einige Webcams sollen jede Nacht das Außengelände der ReWind GmbH überwachen.\n\n' +
    'Ermitteln Sie anhand der folgenden Angaben die anfallende Datenmenge der zu speichernden Bilder pro Webcam pro Minute in MiB. Der Rechenweg ist anzugeben. Das Ergebnis ist auf eine ganze Zahl aufzurunden.',
  maxPoints: 5,
  modelSolution:
    'Berechnung der Gesamtpixel:\n1.920 Pixel · 1.080 Pixel = 2.073.600 Pixel\n\n' +
    'Berechnung der Gesamtbit:\n2.073.600 Pixel · 16 Bit/Pixel = 33.177.600 Bit\n\n' +
    'Berechnung der Bit pro Sekunde:\n33.177.600 Bit · 10 Bilder/s = 331.776.000 Bit/s\n\n' +
    'Berechnung der MiB pro Sekunde:\n331.776.000 Bit/s : 8 = 41.472.000 Byte/s\n41.472.000 Byte/s : 1.024 = 40.500 KiB/s\n40.500 KiB/s : 1.024 = 39,5507 MiB/s\n\n' +
    'Berechnung der MiB pro Minute:\n39,5507 MiB/s · 60 s = 2.373,04 MiB → 2.374 MiB\n\n' +
    'Die Angaben zur Überwachungszeit pro Tag und die Anzahl der Webcams können vernachlässigt werden und sind für diese Aufgabe nicht relevant. Es soll lediglich die anfallende Datenmenge für eine Webcam pro Minute in MiB berechnet werden.',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q3bc: ApExamQuestion = {
  id: 'ap2-si-t1-2022-sommer-q3-bc',
  examId: 'ap2-si-t1-2022-sommer',
  questionNumber: 3,
  subPart: 'bc',
  topic: 'DSGVO / Videoüberwachung',
  scenario: SCENARIO,
  question:
    'Bei der Videoüberwachung ist die DSGVO zu beachten.\n\n' +
    'Erläutern Sie in diesem Zusammenhang die Begriffe Löschfristen, Persönlichkeitsrecht und Zweckbindung.\n\nLöschfristen:\n\nPersönlichkeitsrecht:\n\nZweckbindung:',
  maxPoints: 6,
  modelSolution:
    'Löschfristen: Gespeicherte Daten müssen gelöscht werden, sobald die Verarbeitung nicht mehr zur Zweckerfüllung notwendig ist, etwa wenn die Rechtsgrundlage entfällt (z. B. durch Widerruf der Einwilligung oder wenn der Vertragszweck erfüllt ist). Näheres regelt Art. 17 DSGVO mit dem Recht auf Löschung, auch als „Recht auf Vergessenwerden" bezeichnet. Der Verantwortliche soll sich im Vorfeld der Datenverarbeitung Gedanken über den „Lebenszyklus" der Daten machen und in einem Verarbeitungsverzeichnis auch die vorgesehene Frist für die Löschung der verschiedenen Kategorien der Daten festlegen. Andere Erläuterungen sind möglich.\n\n' +
    'Persönlichkeitsrecht: Bilder, Fotos und Videoaufnahmen von Personen dürfen grundsätzlich nur mit Einwilligung des Abgebildeten verarbeitet oder zugänglich gemacht werden. Das gilt auch für das beschäftigte Personal. Die Datenschutzerklärung des Personals erfolgt im „Opt-in"-Verfahren. Es muss sichergestellt werden, dass die Einwilligung durch eine eindeutige Handlung (elektronisch, in Papierform oder über eine schlüssige Handlung) abgegeben wurde. Andere Erläuterungen sind möglich.\n\n' +
    'Zweckbindung: Die Aufnahmen der Webcams dürfen für festgelegte, eindeutige und legitime Zwecke erhoben werden. Solange die weitere Verarbeitung der Daten zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist, besteht das Recht der Verarbeitung. Ist der Verarbeitungszweck erfüllt oder erreicht, so besteht die Pflicht zur Löschung (Speicherbegrenzung). Andere Erläuterungen sind möglich.',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q4a: ApExamQuestion = {
  id: 'ap2-si-t1-2022-sommer-q4-a',
  examId: 'ap2-si-t1-2022-sommer',
  questionNumber: 4,
  subPart: 'a',
  topic: 'Betriebssystem / Sicherheitsmerkmale',
  scenario: SCENARIO,
  referenceText:
    'Tabelle „Sicherheitsmerkmal / Erläuterung" mit vorgegebener erster Zeile:\nBetriebssystem-Firewall | Schutz des Rechners vor netzinternen Angriffen, Schutz des internen Netzes vor kompromittierten Rechnern\n(drei weitere Zeilen sind vom Prüfling zu ergänzen)',
  question:
    '4. Aufgabe (27 Punkte)\n\nSie wirken bei der Auswahl und Installation des Betriebssystems für einen Fileserver mit. Anschließend sollen Sie den Fileserver virtualisieren und administrieren.\n\n' +
    'Bei der Auswahl des Betriebssystems soll unter anderem auch berücksichtigt werden, welche integrierten Sicherheitsmerkmale das Betriebssystem bietet.\n\n' +
    'Ergänzen Sie die folgende Tabelle um drei weitere Sicherheitsmerkmale und erläutern Sie diese kurz.',
  maxPoints: 6,
  modelSolution:
    'Betriebssystem-Firewall — Erläuterung: Schutz des Rechners vor netzinternen Angriffen, […] (vorgegeben)\n\n' +
    'Dateisystem-/Zugriffsberechtigungen — Erläuterung: Schutz der Daten vor unbefugten Zugriffen, auch im laufenden Betrieb; Least-Privilege-Prinzip: Aufgabengerechte Vergabe von Berechtigungen\n\n' +
    'Laufwerksverschlüsselung — Erläuterung: Schutz der Daten vor unberechtigten Zugriffen, z. B. bei Diebstahl oder sonstigem Verlust des Geräts\n\n' +
    'Sicheres bzw. zuverlässiges Löschen von Datenträgern — Erläuterung: Statt einer normalen Formatierung: Daten durch mehrfaches Überschreiben löschen\n\n' +
    'Snapshots/Timeshift bzw. Wiederherstellungspunkte — Erläuterung: Bereitstellung von Recoverymaßnahmen zum Sichern und Wiederherstellen\n\n' +
    'Logs — Erläuterung: Verschiedene Systemlogs zur Überwachung von Zugriffen und Dokumentation von Änderungen\n\n' +
    '(Drei der genannten Merkmale sind für die volle Punktzahl ausreichend.)',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q4b: ApExamQuestion = {
  id: 'ap2-si-t1-2022-sommer-q4-b',
  examId: 'ap2-si-t1-2022-sommer',
  questionNumber: 4,
  subPart: 'b',
  topic: 'Betriebssystemhärtung',
  scenario: SCENARIO,
  question:
    'Server-Betriebssysteme laufen nach der Installation zunächst mit Default-Einstellungen. Zur Erhöhung der Systemsicherheit wird eine „Betriebssystemhärtung" durchgeführt, bei der verschiedene Einstellungen entsprechend geändert werden.\n\n' +
    'Erläutern Sie zwei in diesem Zusammenhang vorzunehmende Änderungen an den Default-Einstellungen des Betriebssystems.',
  maxPoints: 4,
  modelSolution:
    'Eine Betriebssystemhärtung könnte zum Beispiel erfolgen durch…\n' +
    '– die Deaktivierung nicht benötigter Softwarekomponenten (z. B. Remotezugriff, FTP, Webzugriff),\n' +
    '– die Deaktivierung von unsicheren oder veralteten Schnittstellen, Autostart-Mechanismen und Hintergrunddiensten,\n' +
    '– die Beschränkung der laufenden Dienste auf einen Betrieb unter minimalen Rechten,\n' +
    '– die Nutzung von Verschlüsselung,\n' +
    '– die Anpassung der Dateisystemrechte und ihrer Vererbung (insbesondere für Konfigurationsdateien des Betriebssystems),\n' +
    '– …',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q4c: ApExamQuestion = {
  id: 'ap2-si-t1-2022-sommer-q4-c',
  examId: 'ap2-si-t1-2022-sommer',
  questionNumber: 4,
  subPart: 'c',
  topic: 'Virtualisierung / Hypervisor-Typen',
  scenario: SCENARIO,
  referenceText:
    'Auszufüllende Tabelle „Hypervisor Typ-1 / Hypervisor Typ-2" mit den Zeilen: „Erläutern Sie stichwortartig den jeweiligen Hypervisor-Typ", „Geben Sie für die beiden Hypervisor-Typen ein sinnvolles Einsatzbeispiel an", „Geben Sie für die beiden Hypervisor-Typen ein marktgängiges Produkt an".',
  question: 'Zur Vorbereitung der Virtualisierung des Fileservers soll eine Übersicht zu den beiden prinzipiellen Virtualisierungstechniken erstellt werden.\n\nErgänzen Sie die Tabelle.',
  maxPoints: 8,
  modelSolution:
    'Hypervisor Typ-1 — Erläuterung: Nativer / Bare-metal Hypervisor: Virtualisierungssoftware, die direkt auf der Hardware-Ebene aufsetzt. — Einsatzbeispiel: mehrheitlich in Rechenzentren zur Bereitstellung von Servern verwendet. — Marktgängige Produkte: KVM, VMware vSphere, Microsoft Hyper-V, Xen\n\n' +
    'Hypervisor Typ-2 — Erläuterung: Gehosteter Hypervisor: setzt auf einem bereits installierten Betriebssystem auf. — Einsatzbeispiel: Einsatz größtenteils im Bereich von Arbeitsplätzen und im privaten Umfeld zum Test und zur Entwicklung von Software. — Marktgängige Produkte: Parallels, VMware Workstation (Player/Pro), VirtualBox (Oracle), VMware Fusion',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q4d: ApExamQuestion = {
  id: 'ap2-si-t1-2022-sommer-q4-d',
  examId: 'ap2-si-t1-2022-sommer',
  questionNumber: 4,
  subPart: 'd',
  topic: 'Kommandozeile / Wildcards',
  scenario: SCENARIO,
  referenceText:
    'Die Log-Files des Servers werden in dem Verzeichnis C:\\system\\log gespeichert und wie folgt benannt: BezeichnungJahrMonatTag.log.\n' +
    'Z. B. system20220502.log, security20220425.log, error20220419.log.\n\n' +
    'Wildcard-Tabelle:\n* = Zero or more characters\n? = Exactly one character',
  question:
    'Im Verlauf einer Fehlersuche sollen alle Log-Files aus dem Zeitraum vom 1. April 2022 bis einschließlich 9. April 2022 in das Verzeichnis X:\\debug kopiert werden.\n\n' +
    'Vervollständigen Sie das Befehlszeilenkommando „copy" unter Nutzung entsprechender Wildcards.\n\ncopy ___________________ X:\\debug',
  maxPoints: 3,
  modelSolution: 'Zwei Lösungen möglich:\ncopy *2022040?.log X:\\debug\noder\ncopy *2022040*.log X:\\debug',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q4ea: ApExamQuestion = {
  id: 'ap2-si-t1-2022-sommer-q4-ea',
  examId: 'ap2-si-t1-2022-sommer',
  questionNumber: 4,
  subPart: 'ea',
  topic: 'Datensicherung / Backup-Methoden',
  scenario: SCENARIO,
  question:
    'Sie sollen ein Konzept zur Datensicherung erstellen und das Datensicherungsprogramm qbackup installieren.\n\n' +
    'Die Tagessicherungen können prinzipiell als inkrementelle oder als differentielle Datensicherung durchgeführt werden.\n\n' +
    'Erläutern Sie die beiden Datensicherungsmethoden mit Bezug zu einem Vollbackup.',
  maxPoints: 4,
  modelSolution:
    'Beim differentiellen Backup werden zunächst alle Daten vollständig kopiert (Voll-Backup). Anschließend erfolgt eine zusätzliche Sicherung aller Daten, die seit dem letzten Voll-Backup geändert wurden. Neu erstellte Dateien, aktualisierte sowie anderweitig veränderte Daten werden hierdurch berücksichtigt. Zyklisch wird das Voll-Backup erneuert. Die Größe der differentiellen Sicherungen wächst mit jeder zusätzlichen Sicherung an.\n\n' +
    'Beim inkrementellen Backup werden zunächst alle Daten vollständig kopiert (Voll-Backup). Anschließend erfolgt eine zusätzliche Sicherung aller Daten, die nach der jeweils letzten Sicherung geändert wurden. Neu erstellte Dateien, aktualisierte sowie anderweitig veränderte Daten werden hierdurch berücksichtigt. Die letzte Sicherung kann ein Voll-Backup oder eine zusätzliche Sicherung sein. Zyklisch wird das Voll-Backup erneuert. Die Größe der inkrementellen Sicherungen bleibt bei gleichbleibenden Änderungen am Dateisystem relativ ähnlich.',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q4eb: ApExamQuestion = {
  id: 'ap2-si-t1-2022-sommer-q4-eb',
  examId: 'ap2-si-t1-2022-sommer',
  questionNumber: 4,
  subPart: 'eb',
  topic: 'Kommandozeile / PATH-Umgebungsvariable',
  scenario: SCENARIO,
  referenceText:
    'Das Backup-Programm qbackup befindet sich im Verzeichnis C:\\Backup und lässt sich dort durch einen Doppelklick im Explorer-Fenster starten.\n' +
    'Der Programmaufruf in der Eingabeaufforderung schlägt dagegen wie abgebildet fehl:\n\n' +
    'C:\\>qbackup\nDer Befehl "qbackup" ist entweder falsch geschrieben oder konnte nicht gefunden werden.\nC:\\>',
  question: 'Erläutern Sie den Grund, warum der Programmaufruf fehlschlägt und geben Sie einen geeigneten Lösungsvorschlag an.',
  maxPoints: 2,
  modelSolution:
    'Beim Aufruf des Programms fehlt die entsprechende Pfadangabe zur Ausführung. Um das Problem zu lösen, sollte entweder die Pfadangabe beim Programmaufruf mit angegeben werden (C:\\Backup\\qbackup) oder die Umgebungsvariable %path% sollte um C:\\Backup ergänzt werden.',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

export const ap2SiT1_2022SommerQuestions: ApExamQuestion[] = [
  q1aa,
  q1ab,
  q1ac,
  q1ad,
  q1ba,
  q1bb,
  q1bc,
  q1bd,
  q2a,
  q2b,
  q3a,
  q3ba,
  q3bb,
  q3bc,
  q4a,
  q4b,
  q4c,
  q4d,
  q4ea,
  q4eb,
]
