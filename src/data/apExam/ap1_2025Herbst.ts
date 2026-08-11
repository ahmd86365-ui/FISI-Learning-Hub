import type { ApExamMeta, ApExamQuestion } from '../../types/apExam'

export const ap1_2025HerbstMeta: ApExamMeta = {
  id: 'ap1-2025-herbst',
  area: 'AP1',
  year: 2025,
  period: 'Herbst',
  label: 'Herbst 2025',
  examDate: 'Mittwoch, 17. September 2025',
  examTitle: 'Einrichten eines IT-gestützten Arbeitsplatzes',
  courseCode: '1202',
  sourceExamPdf: 'AP1_25h.pdf',
  sourceSolutionPdf: 'Loe_AP1_25h.pdf',
  solutionSource: 'confirmed',
  taskCount: 4,
  durationMinutes: 90,
  totalPoints: 100,
}

const SCENARIO =
  'Die Aufgaben 1 bis 4 beziehen sich auf die folgende Ausgangssituation:\n\nSie absolvieren Ihre Ausbildung in der IT-Abteilung der Apothekengruppe Curatia, die Filialen in ganz Deutschland unterhält. Zusätzlich betreibt die Curatia einen Onlineshop.'

const BELEG_REFERENCE =
  'Abbildung zur 1. Aufgabe: Rechnung R20250815 vom 11. Sept. 2025 der RofoFix AG (Marktplatz 10, 89173 Waschlar, Industriestr. 10, 89173 Thumendorf) an die Apothekengruppe Curatia (Markt 3, 08799 Grunkan).\n' +
  'Bestelldatum: 05. Sept. 2025\nLieferdatum: 10. Sept. 2025\nKunde: D92307\nVerwendungszweck: D92307R20250815\nRegistergericht: Thumendorf, HRB 233144\nSteuernummer: 271/369/45321\nUSt-Identnr.: DE987654321\n\n' +
  'Rechnungspositionen (Position | Artikelnummer/Bezeichnung | Menge/Einheit | Einzelpreis in EUR | Gesamtpreis in EUR | USt-Satz):\n' +
  '01 | S4813 Scanstift M193 | 3 Stück | 60,00 EUR | 180,00 EUR | 1\n' +
  '02 | R3635 Papierrollen Kasse | 10 5er Pack | 50,00 EUR | 500,00 EUR | 1\n' +
  '03 | G18 Dragees Pfefferminz | 2000 Dosen | 0,15 EUR | 300,00 EUR | 2\n\n' +
  'Nettobetrag: 980,00 EUR\nUSt 19 %: 129,20 EUR\nUSt 7 %: 21,00 EUR\nBruttobetrag: 1.130,20 EUR\n\n' +
  'Zahlungsziel: Bis 30. Sept. 2025 2 % Skonto oder bis 31. Okt. 2025 ohne Abzug.\nIm unteren Bereich der Rechnung ist außerdem ein QR-Code (GiroCode) abgebildet.'

const q1a: ApExamQuestion = {
  id: 'ap1-2025-herbst-q1-a',
  examId: 'ap1-2025-herbst',
  questionNumber: 1,
  subPart: 'a',
  topic: 'Kaufmännische Vorgänge / Beleg',
  scenario: SCENARIO,
  referenceText: BELEG_REFERENCE,
  question:
    '1. Aufgabe (25 Punkte)\n\nDie Curatia beabsichtigt, eine weitere Filiale zu eröffnen. Dabei sind Sie bei der Beschaffung und Einrichtung der Kassensysteme mit eingebunden. Ihnen wird der auf Seite 3 abgebildete Beleg zugeleitet.\n\nAuf dem Beleg sind mehrere kaufmännisch relevante Zeitpunkte vermerkt.\n\nNennen Sie unter Angabe des Datums die Vorgänge, die bereits stattgefunden haben.',
  maxPoints: 3,
  modelSolution: '05.09.2025: Bestellung der Ware\n10.09.2025: Lieferung der Ware\n11.09.2025: Rechnungsstellung',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q1b: ApExamQuestion = {
  id: 'ap1-2025-herbst-q1-b',
  examId: 'ap1-2025-herbst',
  questionNumber: 1,
  subPart: 'b',
  topic: 'Kaufmännische Kontrolle / Rechnungsabgleich',
  scenario: SCENARIO,
  referenceText: BELEG_REFERENCE,
  question: 'Sie gleichen die Rechnungspositionen ab.\n\nBeschreiben Sie dazu drei mögliche Kontrollvorgänge.',
  maxPoints: 6,
  modelSolution:
    '– Abgleich Artikelbezeichnung der Bestellung mit der Lieferung.\n' +
    '– Vergleichen der Menge bzw. Einheit der Bestellung mit der Lieferung.\n' +
    '– Prüfung des Einzelpreises mit dem in der Bestellung vereinbarten Einzelpreis.\n' +
    '– Prüfung des Umsatzsteuersatzes der Position, ob regulärer oder ermäßigter Steuersatz.\n\n' +
    'Achtung: Der Abgleich betrifft nur die Rechnungspositionen!',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q1ca: ApExamQuestion = {
  id: 'ap1-2025-herbst-q1-ca',
  examId: 'ap1-2025-herbst',
  questionNumber: 1,
  subPart: 'ca',
  topic: 'Kaufmännische Rechnung / Skonto',
  scenario: SCENARIO,
  referenceText: BELEG_REFERENCE,
  question:
    'Auf der Rechnung ist die Möglichkeit angegeben, Skonto in Anspruch zu nehmen.\n\nBerechnen Sie den Skontobetrag, der abgezogen werden kann. Runden Sie das Ergebnis kaufmännisch auf zwei Stellen hinter dem Komma.',
  maxPoints: 2,
  modelSolution: '1.130,20 EUR * 0,02 = 22,604 EUR = 22,60 EUR',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q1cb: ApExamQuestion = {
  id: 'ap1-2025-herbst-q1-cb',
  examId: 'ap1-2025-herbst',
  questionNumber: 1,
  subPart: 'cb',
  topic: 'Kaufmännische Rechnung / Rabatt',
  scenario: SCENARIO,
  question: 'Neben Skonto gibt es als Preisnachlass auch noch den Rabatt.\n\nBeschreiben Sie zwei mögliche Gründe, einen Rabatt zu erhalten.',
  maxPoints: 4,
  modelSolution:
    '– Mengenrabatt: Bei Absatz einer bestimmten Menge erfolgt der Rabatt\n' +
    '– Neukundenrabatt: Nachlass, um neue Kunden zu gewinnen\n' +
    '– Schüler-, Studentenrabatt: Nachlass für bestimmte Personengruppen\n' +
    '– Zeitrabatte wie Frühbezugsrabatt: Sie werden für frühzeitige Vertragsabschlüsse gewährt\n' +
    '– Treuerabatt: Langjährige Kunden erhalten Vergünstigungen\n' +
    '– Web-/Online-Rabatt: Für online bestellte Produkte\n\n' +
    'Weitere Lösungen sind möglich.',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q1da: ApExamQuestion = {
  id: 'ap1-2025-herbst-q1-da',
  examId: 'ap1-2025-herbst',
  questionNumber: 1,
  subPart: 'da',
  topic: 'GiroCode / QR-Code auf Rechnungen',
  scenario: SCENARIO,
  referenceText: BELEG_REFERENCE,
  question:
    'Im unteren Bereich der Rechnung ist ein QR-Code abgebildet.\n\nNennen Sie zwei mögliche Informationen, die sich hinter einem QR-Code (GiroCode) auf einer Rechnung verbergen können.',
  maxPoints: 2,
  modelSolution:
    'Der Code beinhaltet alle Daten einer (SEPA-)Überweisung:\n' +
    '– Begünstigter/Zahlungsempfänger\n– IBAN\n– BIC\n– Verwendungszweck\n– Rechnungsbetrag\n– u. a.',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q1db: ApExamQuestion = {
  id: 'ap1-2025-herbst-q1-db',
  examId: 'ap1-2025-herbst',
  questionNumber: 1,
  subPart: 'db',
  topic: 'GiroCode / QR-Code auf Rechnungen',
  scenario: SCENARIO,
  question: 'Nennen Sie zwei Erleichterungen, die die Nutzung des Codes bei Bezahlung bietet.',
  maxPoints: 2,
  modelSolution:
    '– Fehlerfreie Übernahme der Überweisungsdaten für den Zahlungspflichtigen.\n' +
    '– Keine manuelle Eingabe der Überweisungsdaten notwendig.\n' +
    '– Zuordnung des Zahlungseingangs besser möglich.',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q1ea: ApExamQuestion = {
  id: 'ap1-2025-herbst-q1-ea',
  examId: 'ap1-2025-herbst',
  questionNumber: 1,
  subPart: 'ea',
  topic: 'Prozessdigitalisierung / Akzeptanz',
  scenario: SCENARIO,
  question:
    'Es soll ein neues Verfahren zur Rechnungsbearbeitung eingeführt werden. Dabei werden Vorgänge automatisiert und die Beschäftigten so entlastet. Dennoch gibt es Bedenken vonseiten der Beschäftigten.\n\nNennen Sie zwei mögliche Ursachen für die Ablehnung der neuen Prozesse.',
  maxPoints: 2,
  modelSolution:
    '– Angst vor Wegrationalisieren des eigenen Arbeitsplatzes\n' +
    '– Bedenken, den geänderten Anforderungen nicht gewachsen zu sein\n' +
    '– Fehlende Bereitschaft, gewohnte Abläufe/Routinen zu ändern\n' +
    '– Angst vor mehr Leistungsdruck durch freigewordene Zeitressourcen\n' +
    '– Befürchtung, die Kontrolle über die Aufgaben zu verlieren\n\n' +
    'Auch andere sinnvolle Antworten sind möglich.',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q1eb: ApExamQuestion = {
  id: 'ap1-2025-herbst-q1-eb',
  examId: 'ap1-2025-herbst',
  questionNumber: 1,
  subPart: 'eb',
  topic: 'Prozessdigitalisierung / Akzeptanz',
  scenario: SCENARIO,
  question:
    'Die Curatia nimmt die Befürchtungen der Beschäftigten ernst.\n\nBeschreiben Sie zwei Maßnahmen, den Bedenken der Beschäftigten entgegenzuwirken.',
  maxPoints: 4,
  modelSolution:
    '– Frühzeitige Kommunikation bezüglich der Umstellung\n' +
    '– Motivierende Herangehensweise, z. B. durch Aufzeigen einer Aufwertungsmöglichkeit des eigenen Arbeitsplatzes\n' +
    '– (Permanente) Mitarbeiterqualifizierung (mit Fortbildungsmanagement) zur Nutzung des neuen Verfahrens\n' +
    '– Klare Handlungsanweisung/Bedienungsanleitungen\n' +
    '– Einsatz von Spezialisten als Multiplikatoren für direkten Austausch bei Fragen und Problemen\n' +
    '– Einbeziehung der Mitarbeiter, z. B. Abfrage von Wünschen und Herausforderungen\n' +
    '– Transparenz über damit erreichte Verbesserungen, z. B. Wegfall stupider Arbeiten\n\n' +
    'Auch andere sinnvolle Antworten sind möglich.',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q2a: ApExamQuestion = {
  id: 'ap1-2025-herbst-q2-a',
  examId: 'ap1-2025-herbst',
  questionNumber: 2,
  subPart: 'a',
  topic: 'Digitales Rechnungsmanagement',
  scenario: SCENARIO,
  referenceText: 'Auszufüllende Tabelle mit Spalte „Digitale Rechnung" und den Zeilen „Vorteile" und „Nachteile".',
  question:
    '2. Aufgabe (25 Punkte)\n\nDigitale Rechnungsmanagementsysteme bieten Sicherheitsmaßnahmen wie Verschlüsselung und Zugriffskontrollen, um die Vertraulichkeit und Integrität der Daten zu gewährleisten. Deswegen wurde Ihr Ausbilder von der Geschäftsleitung beauftragt, zusammen mit Ihnen die Umstellung auf ein digitales Rechnungsmanagementsystem zu prüfen.\n\nNennen Sie zwei Vorteile und zwei Nachteile der digitalen Rechnung innerhalb eines automatischen Rechnungsmanagementsystems.',
  maxPoints: 4,
  modelSolution:
    'Vorteile: Effizienzsteigerung; Kosteneinsparungen; Einfacher Zugriff und bessere Nachverfolgbarkeit; Integration; Nachhaltigkeit; Vermeiden von Medienbrüchen (andere Antworten möglich)\n\n' +
    'Nachteile: Anfangsinvestitionen; Sicherheitsrisiken, z. B. Datenmissbrauch; Bedenken wegen Veränderungen; Schulungskosten (andere Antworten möglich)',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const AKTIVITAETSDIAGRAMM_LEGENDE =
  'Legende „Aktivitätsdiagramm" (vorgegeben): Startknoten (gefüllter Kreis), Endknoten (gefüllter Kreis mit Ring, beendet alle Aktivitäten), Ablaufende (Kreis mit Kreuz, beendet aktuellen Fluss); Beispiel-Schwimmbahnen (Schwimmbahn 1/Schwimmbahn 2) mit Schritt 1–3 und bahnübergreifendem Übergang über Zwischenknoten "A"; Teilung (Splitting), Synchronisation (Und) und Teilung-und-Synchronisation als schwarze Balken; Entscheidung (Raute mit Bedingungen, z. B. [x<0]/[x=0]/[x>0]), Zusammenführung (Oder, Raute mit mehreren Eingängen) und Entscheidung-und-Zusammenführung (Raute mit Bedingungen und mehreren Eingängen/Ausgängen).\n\n' +
  'Vorgegebener Diagrammrahmen „Prozess nach Rechnungseingang" auf der Folgeseite: Startknoten → Aktivität „Eingang" → (vom Prüfling zu ergänzen).'

const q2ba: ApExamQuestion = {
  id: 'ap1-2025-herbst-q2-ba',
  examId: 'ap1-2025-herbst',
  questionNumber: 2,
  subPart: 'ba',
  topic: 'UML-Aktivitätsdiagramm / Rechnungseingang',
  scenario: SCENARIO,
  referenceText: AKTIVITAETSDIAGRAMM_LEGENDE,
  question:
    'Fortsetzung 2. Aufgabe\n\nAls Auszubildender der IT-Abteilung sollen Sie zusammen mit den Fachleuten aus der Buchhaltung den Rechnungseingangsprozess darstellen.\n\n' +
    'Der Prozess nach Rechnungseingang läuft wie folgt ab:\n' +
    '– Nach dem Rechnungseingang erfolgt eine automatische Prüfung.\n' +
    '– Ist die Prüfung nicht ok, erfolgt eine Ablehnung und der Prozess wird beendet.\n' +
    '– Sonst wird geprüft, ob der Betrag größer oder gleich 1.000 EUR ist.\n' +
    '– Falls ja, erfolgt eine manuelle Prüfung.\n' +
    '– Ist die Rechnung gemäß manueller Prüfung nicht ok, erfolgt eine Ablehnung und der Prozess wird ebenfalls beendet.\n' +
    '– Ist der Betrag < 1.000 EUR oder ist die manuelle Prüfung ok, wird gleichzeitig die Rechnung bezahlt und archiviert.\n' +
    '– Anschließend ist der Prozess beendet.\n\n' +
    'Erstellen Sie auf der nächsten Seite ein UML-Aktivitätsdiagramm zum oben beschriebenen Ablauf.',
  maxPoints: 9,
  modelSolution:
    'Bewertung: Automatische Prüfung mit zugehöriger Entscheidung: 2 Punkte; Manuelle Prüfung mit zugehöriger Entscheidung: 2 Punkte; Bezahlen, Archivieren, Parallelisierung, Ablehnung, Endknoten: je 1 Punkt.\n\n' +
    'Lösungsdiagramm (Best-effort-Beschreibung der Grafik): Startknoten → Aktivität „Eingang" → Aktivität „automatische Prüfung" → Entscheidungsraute: bei „nicht ok" führt der Pfad zu einer Zusammenführungsraute vor „Ablehnung"; bei „ok" führt der Pfad zu einer zweiten Entscheidungsraute „Betrag ≥ 1000€". Ist der Betrag ≥ 1000 €, folgt die Aktivität „manuelle Prüfung" mit einer eigenen Entscheidungsraute: bei „ok" geht der Pfad zur Teilung (Splitting-Balken), bei „nicht ok" zur Zusammenführungsraute vor „Ablehnung". Ist der Betrag < 1000 €, geht der Pfad direkt zur Teilung. Die Teilung (Splitting-Balken) führt parallel zu den Aktivitäten „Bezahlung" und „Archivierung", die anschließend über eine Synchronisation (Und-Balken) wieder zusammengeführt werden. Von der Zusammenführungsraute vor „Ablehnung" führt der Pfad zur Aktivität „Ablehnung", von dort sowie vom Synchronisationspfad weiter zum gemeinsamen Endknoten.',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q2bb: ApExamQuestion = {
  id: 'ap1-2025-herbst-q2-bb',
  examId: 'ap1-2025-herbst',
  questionNumber: 2,
  subPart: 'bb',
  topic: 'KI-gestützte Rechnungsprüfung',
  scenario: SCENARIO,
  question: 'Beschreiben Sie zwei Argumente, die für einen möglichen Einsatz einer automatischen Rechnungsprüfung mit KI-Unterstützung sprechen.',
  maxPoints: 4,
  modelSolution:
    '– KI-Systeme sind lernende Systeme. Sie erkennen Muster im Verhalten der Zahlungspflichtigen.\n' +
    '– Zeitersparnis: KI kann zeitraubende manuelle Prüfungen automatisieren, wodurch Mitarbeiter sich auf andere Aufgaben konzentrieren können.\n' +
    '– Kostenreduktion: Durch die Automatisierung der Rechnungsprüfung können Fehler reduziert und die Effizienz gesteigert werden.\n' +
    '– Fehlerreduktion: KI-Systeme sind in der Lage, Rechnungen präzise zu analysieren und Fehler zu erkennen, die bei manuellen Prüfungen übersehen werden könnten.\n' +
    '– Skalierbarkeit: KI-Lösungen können problemlos an das Wachstum des Unternehmens angepasst werden, ohne dass zusätzliche personelle Ressourcen erforderlich sind.\n\n' +
    'Weitere Gründe sind möglich.',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q2ca: ApExamQuestion = {
  id: 'ap1-2025-herbst-q2-ca',
  examId: 'ap1-2025-herbst',
  questionNumber: 2,
  subPart: 'ca',
  topic: 'Speicherbedarf-Berechnung',
  scenario: SCENARIO,
  referenceText:
    'In der Apothekengruppe Curatia gehen pro Stunde durchschnittlich 14 Rechnungen über den Rechnungseingangsprozess ein. Die Rechnungen kommen rund um die Uhr an und eine eingegangene Rechnung benötigt durchschnittlich 124 kB Speicherplatz.',
  question:
    'Fortsetzung 2. Aufgabe\n\nErmitteln Sie den benötigten Speicherbedarf pro Tag in KiB. Das Ergebnis ist auf ganze KiB zu runden. Der Rechenweg ist anzugeben.',
  maxPoints: 3,
  modelSolution: '24 Stunden x 14 Scans = 336 Scans/Tag (1 Punkt)\n124 kB x 336 Scans/Tag x 1.000 / 1.024 = 40.687,5 KiB = 40.688 KiB (2 Punkte)',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q2cb: ApExamQuestion = {
  id: 'ap1-2025-herbst-q2-cb',
  examId: 'ap1-2025-herbst',
  questionNumber: 2,
  subPart: 'cb',
  topic: 'Speicherbedarf-Berechnung / Komprimierung',
  scenario: SCENARIO,
  question:
    'Durch den Einsatz einer Komprimierungsmethode lässt sich der Speicherbedarf der archivierten Rechnungen um 30 % verringern.\n\n' +
    'Ermitteln Sie den gesamten Speicherbedarf für ein Jahr (365 Tage) in GiB.\nFalls bei Teilaufgabe a) kein Ergebnis berechnet wurde, ist mit einem täglichen Speicherbedarf von 50.000 KiB zu rechnen. Das Endergebnis ist auf zwei Nachkommastellen zu runden. Der Rechenweg ist anzugeben.',
  maxPoints: 3,
  modelSolution:
    '40.688 KiB x 365 Tage = 14.851.120 KiB (1 Punkt)\n' +
    '14.851.120 KiB / 1.024 / 1.024 * 0,7 = 9,91492 GiB = 9,92 GiB (2 Punkte)\n\n' +
    'Alternativ (bei 50.000 KiB/Tag):\n' +
    '50.000 KiB x 365 Tage = 18.250.000 KiB (1 Punkt)\n' +
    '18.250.000 / 1.024 / 1.024 * 0,7 = 12,1832 GiB = 12,19 GiB (2 Punkte)',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q2cc: ApExamQuestion = {
  id: 'ap1-2025-herbst-q2-cc',
  examId: 'ap1-2025-herbst',
  questionNumber: 2,
  subPart: 'cc',
  topic: 'Kostenberechnung / Storage as a Service',
  scenario: SCENARIO,
  question:
    'Die IT-Abteilung hat beschlossen, den benötigten Speicher für die Archivierung extern zu beziehen. Es liegt ein Angebot vor, welches pro 5 GiB Speicherplatz Jahreskosten von 21,00 EUR umfasst.\n\n' +
    'Ermitteln Sie die voraussichtlichen Gesamtkosten für die Archivierung über einen Zeitraum von zehn Jahren, basierend auf einem jährlichen Speicherbedarf von 15 GiB.',
  maxPoints: 2,
  modelSolution: '15 GiB / 5 GiB = 3-mal das Angebot pro Jahr\n3 * 10 Jahre = 30-mal das Angebot in zehn Jahren\n30 * 21 EUR = 630 EUR',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q3a: ApExamQuestion = {
  id: 'ap1-2025-herbst-q3-a',
  examId: 'ap1-2025-herbst',
  questionNumber: 3,
  subPart: 'a',
  topic: 'Datenschutz / elektronische Gesundheitskarte',
  scenario: SCENARIO,
  question:
    '3. Aufgabe (26 Punkte)\n\nIn der Apotheke soll ein Kartenterminal eingerichtet und in das vorhandene Netzwerk integriert werden.\n\n' +
    'Begründen Sie, inwiefern das Einlesen von Patientendaten mithilfe der elektronischen Gesundheitskarte erhöhten Sicherheitsanforderungen unterliegt und nennen Sie dafür eine rechtliche Grundlage.',
  maxPoints: 3,
  modelSolution:
    'Begründung (2 Punkte): Die Daten unterliegen dem besonderen Schutz personenbezogener Daten. Die Verarbeitung bedarf der Einwilligung.\n' +
    'Rechtliche Grundlage (1 Punkt): z. B. DSGVO, BDSG\n\n' +
    'Auch möglich: § 291 SGB V — Anforderungen an die Sicherheit der Datenübertragung und die Zugriffskontrollen für Anwendungen der eGK.',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q3b: ApExamQuestion = {
  id: 'ap1-2025-herbst-q3-b',
  examId: 'ap1-2025-herbst',
  questionNumber: 3,
  subPart: 'b',
  topic: 'Authentifizierungsmittel',
  scenario: SCENARIO,
  referenceText:
    'Auszufüllende Tabelle „Fingerabdrucksensor / Passwort / Chipkarte" mit Zeilen Methode/Vorteil/Sicherheitsrisiko. Vorgegeben: Methode Fingerabdrucksensor = Biometrie, Methode Passwort = Wissen, Methode Chipkarte = Besitz; Vorteil Fingerabdrucksensor = „Schnell und immer personenbezogen"; Sicherheitsrisiko Fingerabdrucksensor = „Funktion unsicher; Verschmutzung kann zur Beeinträchtigung führen."',
  question: 'Sie verschaffen sich einen Überblick über die Authentifizierungsmittel Fingerabdrucksensor, Passwort und Chipkarte.\n\nErgänzen Sie in der Tabelle die fehlenden Angaben.',
  maxPoints: 4,
  modelSolution:
    'Fingerabdrucksensor — Methode: Biometrie; Vorteil: Schnell und immer personenbezogen; Sicherheitsrisiko: Funktion unsicher, Verschmutzung kann zur Beeinträchtigung führen. (vorgegeben)\n\n' +
    'Passwort — Methode: Wissen; Vorteil: Keine Hilfsmittel bei der Mitführung notwendig, kein Lesegerät erforderlich.; Sicherheitsrisiko: Kann verraten, ausgespäht oder geknackt werden (Phishing).\n\n' +
    'Chipkarte — Methode: Besitz; Vorteil: Kann zusätzlich Daten speichern, z. B. Medikationsplan, kann z. B. an pflegende Personen ausgeliehen werden.; Sicherheitsrisiko: Kann gestohlen und von Fremden missbräuchlich genutzt werden.',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q3c: ApExamQuestion = {
  id: 'ap1-2025-herbst-q3-c',
  examId: 'ap1-2025-herbst',
  questionNumber: 3,
  subPart: 'c',
  topic: 'Softwareupdate / Kartenterminal',
  scenario: SCENARIO,
  question: 'Der Hersteller des Kartenterminals empfiehlt, vor der Inbetriebnahme ein Softwareupdate durchzuführen.\n\nBeschreiben Sie einen Grund für diese Maßnahme.',
  maxPoints: 2,
  modelSolution:
    '– Softwarefehler werden behoben, interne Fehler treten seltener auf.\n– Das System wird gegenüber Angriffen gehärtet.\n– System wird auf aktuelle Anforderungen hin angepasst.\n\nWeitere Lösungen sind zulässig.',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q3d: ApExamQuestion = {
  id: 'ap1-2025-herbst-q3-d',
  examId: 'ap1-2025-herbst',
  questionNumber: 3,
  subPart: 'd',
  topic: 'Lieferkettensicherheit / Gerätemanipulation',
  scenario: SCENARIO,
  question:
    'Eine weitere Empfehlung des Terminal-Herstellers lautet, auf eine sichere Lieferkette zu achten, um Gerätemanipulationen zu verhindern.\n\nBeschreiben Sie ein mögliches Risiko manipulierter Geräte bezüglich der IT-Sicherheit.',
  maxPoints: 2,
  modelSolution: 'Z. B. unbemerkter Einbau von Abhöreinrichtungen, Deaktivierung von Sicherheitsfunktionen',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const KARTENTERMINAL_STROM_REFERENCE =
  'Für das Kartenterminal wird ein Netzteil 24 V/0,5 A mitgeliefert. Alternativ kann das Gerät auch über einen USB-Port mit 5 V versorgt werden. Der PC nutzt weitere USB-Geräte wie Tastatur, Maus, Scanner usw.'

const q3ea: ApExamQuestion = {
  id: 'ap1-2025-herbst-q3-ea',
  examId: 'ap1-2025-herbst',
  questionNumber: 3,
  subPart: 'ea',
  topic: 'Elektrotechnik / Leistungsberechnung',
  scenario: SCENARIO,
  referenceText: KARTENTERMINAL_STROM_REFERENCE,
  question: 'Ermitteln Sie rechnerisch, welcher Strom auf diesem Anschluss für eine dem Netzteil entsprechende stabile Leistungsversorgung zur Verfügung gestellt werden müsste.\nFormel: P = U * I',
  maxPoints: 2,
  modelSolution: 'P_Netzteil = 24 V * 0,5 A = 12 W\nI_USB = 12 W / 5 V = 2,4 A',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q3eb: ApExamQuestion = {
  id: 'ap1-2025-herbst-q3-eb',
  examId: 'ap1-2025-herbst',
  questionNumber: 3,
  subPart: 'eb',
  topic: 'Elektrotechnik / USB-Stromversorgung',
  scenario: SCENARIO,
  referenceText: KARTENTERMINAL_STROM_REFERENCE,
  question: 'Beim Betrieb des Kartenterminals treten Störungen auf.\n\nBegründen Sie einen möglichen Zusammenhang zwischen den Störungen und der Stromversorgung über den USB-Port.',
  maxPoints: 3,
  modelSolution:
    'Über den USB-Port müssten für das Kartenterminal 2,4 A bereitgestellt werden. Je nach USB-Port (A, C) kann es sein, dass diese Stromstärke nicht erreicht wird.\n\n' +
    'Daher ist evtl. eine stabile Stromversorgung für das Terminal nicht gewährleistet. Wenn möglich sollte die Verwendung des Netzteils bevorzugt werden.',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q3f: ApExamQuestion = {
  id: 'ap1-2025-herbst-q3-f',
  examId: 'ap1-2025-herbst',
  questionNumber: 3,
  subPart: 'f',
  topic: 'Netzwerk / IPv4-Adressierung',
  scenario: SCENARIO,
  referenceText:
    'Netzwerkskizze: Internet-Router (172.16.10.1/24) — Switch (172.16.10.10/24) — verbunden mit Konnektor (zur Verschlüsselung der Verbindungen), PC (172.16.10.25/24) und Kartenterminal (noch zu konfigurieren). Auszufüllende Felder: IP-Adresse, Subnetzmaske, Standard-Gateway.',
  question: 'Fortsetzung 3. Aufgabe\n\nKonfigurieren Sie die Netzwerkschnittstelle des Kartenterminals, um mit dem PC, dem Konnektor und dem Router kommunizieren zu können. Verwenden Sie die letzte mögliche IPv4-Adresse.',
  maxPoints: 3,
  modelSolution: 'IP-Adresse: 172.16.10.254\nSubnetzmaske: 255.255.255.0\nStandard-Gateway: 172.16.10.1',
  answerStatus: 'confirmed',
  sourcePage: 10,
}

const q3g: ApExamQuestion = {
  id: 'ap1-2025-herbst-q3-g',
  examId: 'ap1-2025-herbst',
  questionNumber: 3,
  subPart: 'g',
  topic: 'Netzwerk / Patchfeld und Verkabelung',
  scenario: SCENARIO,
  referenceText:
    'Im Verkaufsraum befinden sich zwei RJ45-Doppeldosen mit den Bezeichnungen „Verkauf - 3/4" und „Verkauf - 5/6". Foto des Netzwerkschranks: Im 12-Port-Patchfeld sind laut Beschriftung/Foto die Anschlüsse 1, 2 und 5 bis 12 über Patchkabel mit dem Switch verbunden („gepatcht"); die Anschlüsse 3 und 4 sind sichtbar nicht belegt (nicht mit dem Switch verbunden).',
  question: 'Sie möchten nun das Kartenterminal mithilfe eines Patchkabels an die richtige Netzwerkdose anschließen. Im Verkaufsraum finden Sie zwei RJ45-Doppeldosen mit den folgenden Bezeichnungen: „Verkauf - 3/4" und „Verkauf - 5/6".\n\nIm Netzwerkschrank sind Switch und Patchfeld wie im Foto gezeigt verbunden.\n\nWählen Sie einen geeigneten Anschluss für Ihr Patchkabel in den Netzwerkdosen aus und begründen Sie Ihre Wahl.',
  maxPoints: 3,
  modelSolution:
    'Die beiden Anschlüsse 3 und 4 sind am Patchfeld nicht „gepatcht", d. h. nicht mit dem Switch verbunden. Daher ist nur die Verwendung der Anschlüsse Verkauf - 5 oder Verkauf - 6 möglich. Alternativ müssten die Patchkabel im Rack umgesteckt werden.',
  answerStatus: 'confirmed',
  sourcePage: 11,
}

const q3h: ApExamQuestion = {
  id: 'ap1-2025-herbst-q3-h',
  examId: 'ap1-2025-herbst',
  questionNumber: 3,
  subPart: 'h',
  topic: 'Elektronische Signatur',
  scenario: SCENARIO,
  referenceText:
    'Skizze zur Signaturerstellung: Die Apotheke besitzt ein Schlüsselpaar (privat Apotheke, öffentlich Apotheke), das Rechenzentrum (RZ) besitzt ein Schlüsselpaar (privat RZ, öffentlich RZ). Dargestellt ist ein Brief-Symbol, das bei der Apotheke mithilfe eines Schloss-Symbols (Verschlüsselungs-/Signatur-Vorgang) versehen und dann zum Rechenzentrum übertragen wird, wo es mithilfe eines Schloss-Symbols wieder entsperrt/geprüft wird.',
  question:
    'Ein weiterer Einsatzbereich des Kartenterminals ist die Erstellung einer „elektronischen Unterschrift" (Signatur).\n\nBeschreiben Sie die prinzipielle Vorgehensweise bei der Erstellung und Überprüfung einer Signatur zwischen Apotheke und Rechenzentrum anhand der folgenden Skizze.',
  maxPoints: 4,
  modelSolution:
    '– Der Hashwert der Nachricht wird berechnet und mit dem privaten Schlüssel der Apotheke verschlüsselt. Diese Signatur wird zusammen mit der Nachricht versendet.\n' +
    '– Der Server entschlüsselt mit dem öffentlichen Schlüssel der Apotheke die empfangene Signatur und erhält so den ursprünglichen Hashwert zu der Nachricht.\n' +
    '– Funktioniert die Entschlüsselung der Signatur mit dem öffentlichen Schlüssel der Apotheke, so ist der Absender korrekt, die Authentizität ist nachgewiesen.\n' +
    '– Anschließend wird auf Basis der empfangenen Nachricht deren Hashwert erneut berechnet. Stimmt der neu berechnete Hashwert mit dem entschlüsselten Hashwert überein, so wurden die Daten bei der Übertragung nicht verändert. Damit ist die Integrität der Nachricht nachgewiesen.\n\n' +
    'Auch folgende Formulierung genügt den Anforderungen:\n' +
    '– Die Nachricht wird mit dem privaten Schlüssel der Apotheke signiert und dann versendet.\n' +
    '– Der Server überprüft die Signatur mit dem öffentlichen Schlüssel der Apotheke und sichert somit die eindeutige Herkunft.',
  answerStatus: 'confirmed',
  sourcePage: 11,
}

const ENGLISH_TEXT_REFERENCE =
  'In relational databases, tables are linked together by keys. A primary key is a unique identifier for each record in a table and ensures that each record is unique. For example, an identification number can be used as a primary key. A foreign key is also used to link tables together by referring to a primary key in another table. This link allows data from different tables to be linked and used together in queries. Creating these relationships between tables enables efficient data organisation and reduces redundancy. For example, a customer ID in an orders table can be linked to a customer details table so that both order and customer information can be accessed with a single query.'

const q4aa: ApExamQuestion = {
  id: 'ap1-2025-herbst-q4-aa',
  examId: 'ap1-2025-herbst',
  questionNumber: 4,
  subPart: 'aa',
  topic: 'Datenbank / Primärschlüssel',
  scenario: SCENARIO,
  referenceText: ENGLISH_TEXT_REFERENCE,
  question:
    '4. Aufgabe (24 Punkte)\n\nSie entwickeln Software für die Apothekengruppe Curatia. Ihre Aufgabe ist es, eine Datenbank zu entwickeln, welche die Daten der Apotheken verwaltet.\n\n' +
    'Vor dem Entwurf der Datenbank informieren Sie sich in einer Fachzeitschrift.\n\n' +
    'Beantworten Sie die folgenden Fragen mit Bezug zu dem gegebenen englischen Text auf Deutsch:\n\n' +
    'Beschreiben Sie die Funktion eines Primärschlüssels in einer Tabelle.',
  maxPoints: 2,
  modelSolution: 'Ein Primärschlüssel ist ein eindeutiger Bezeichner für jeden Datensatz in einer Tabelle.',
  answerStatus: 'confirmed',
  sourcePage: 12,
}

const q4ab: ApExamQuestion = {
  id: 'ap1-2025-herbst-q4-ab',
  examId: 'ap1-2025-herbst',
  questionNumber: 4,
  subPart: 'ab',
  topic: 'Datenbank / Fremdschlüssel',
  scenario: SCENARIO,
  referenceText: ENGLISH_TEXT_REFERENCE,
  question: 'Beschreiben Sie den Zweck von Fremdschlüsseln in relationalen Datenbanken.',
  maxPoints: 2,
  modelSolution: 'Ein Fremdschlüssel wird verwendet, um Tabellen zu verknüpfen, indem er auf einen Primärschlüssel in einer anderen Tabelle verweist.',
  answerStatus: 'confirmed',
  sourcePage: 12,
}

const q4ac: ApExamQuestion = {
  id: 'ap1-2025-herbst-q4-ac',
  examId: 'ap1-2025-herbst',
  questionNumber: 4,
  subPart: 'ac',
  topic: 'Datenbank / Tabellenverknüpfung',
  scenario: SCENARIO,
  referenceText: ENGLISH_TEXT_REFERENCE,
  question: 'Beschreiben Sie den Vorteil des Verknüpfens von Tabellen in einer Datenbank.',
  maxPoints: 2,
  modelSolution: 'Das Verknüpfen von Tabellen ermöglicht eine effiziente Datenorganisation und verringert Redundanz.',
  answerStatus: 'confirmed',
  sourcePage: 12,
}

const q4b: ApExamQuestion = {
  id: 'ap1-2025-herbst-q4-b',
  examId: 'ap1-2025-herbst',
  questionNumber: 4,
  subPart: 'b',
  topic: 'Datenmodellierung / ERM (Chen-Notation)',
  scenario: SCENARIO,
  referenceText:
    'Vorgegebenes (unvollständiges) Datenmodell in Chen-Notation: Entität „Medikament" (Rechteck) bereits verbunden mit den Attributen (Ellipsen) PZN (unterstrichen, Primärschlüssel), NameM, Lagerbestand, Preis, Datum. Zwei leere Beziehungs-Rauten (Diamonds) sind vorgegeben, noch ohne Verbindungen — zu ergänzen um die Entitäten „Wirkstoffe" und „Lieferant" inkl. deren Attributen und Kardinalitäten.\n\n' +
    'Zu berücksichtigen:\n' +
    '– Ein Medikament kann aus mehreren Wirkstoffen bestehen.\n' +
    '– Ein Wirkstoff kann in mehreren Medikamenten verwendet werden.\n' +
    '– Es soll erfasst werden, welcher Lieferant das entsprechende Medikament liefern kann.\n' +
    '– Ein Lieferant kann mehrere Medikamente liefern.\n' +
    '– Das einzelne Medikament wird immer von einem Lieferanten geliefert.\n' +
    '– Die entsprechende Dosierung des jeweiligen Wirkstoffes im Medikament soll abgebildet werden.\n\n' +
    'Mindestattribute:\n' +
    'PZN – Pharmazentralnummer – eindeutige ID für das Medikament\n' +
    'WID – WirkstoffID – eindeutige ID für den Wirkstoff\n' +
    'NameM – Name des Medikamentes\n' +
    'NameW – Name des Wirkstoffs\n' +
    'Lagerbestand – Anzahl der Medikamente im Lager\n' +
    'Preis – Preis des Medikamentes\n' +
    'Datum – Verfallsdatum des Medikamentes\n' +
    'LID – Lieferant ID – eindeutige ID für den Lieferanten\n' +
    'Dosierungseinheit – Einheit der Dosierung (z. B. mg, ml)\n' +
    'Dosierung – Dosierung des Wirkstoffs im Medikament\n' +
    'NameL – Name des Lieferanten\n' +
    'IBAN – Internationale Bankkontonummer des Lieferanten',
  question:
    'In der Apotheke Curatia sollen Sie für interne Zwecke einen Ausschnitt aus dem Datenmodell erstellen, der den Zusammenhang zwischen Wirkstoffen, Medikamenten und Lieferanten darstellt. Dabei ist das im Referenztext beschriebene zu berücksichtigen.\n\n' +
    'Modellieren Sie die oben beschriebene Datenstruktur in der CHEN-Notation. Geben Sie die Kardinalitäten zwischen den Entitäten an und ordnen Sie die Mindestattribute den entsprechenden Tabellen richtig zu. Ihr Kollege hat Ihnen bereits die Entität Medikamente vorgegeben.\n\n' +
    'Erweitern Sie das vorgegebene Datenmodell.\n\n' +
    'Hinweise: Bestimmen Sie alle notwendigen Primärschlüssel (unterstrichenes Attribut). Fremdschlüssel müssen nicht angegeben werden.',
  maxPoints: 8,
  modelSolution:
    'Bewertung: Zwei Entitäten jeweils 1 P: 2 Punkte; Zwei Kardinalitäten: 2 Punkte; Primärschlüsselangabe in allen drei Tabellen: 1 Punkt; Sinnvolle Zuordnung der Attribute pro Entität: 2 Punkte; Attribut Dosierung in die Zwischentabelle: 1 Punkt.\n\n' +
    'Andere Lösungen sind möglich (Auflösung Zwischentabelle).\n\n' +
    'Lösungsdiagramm: Entität „Medikament" (Attribute: PZN (PS), NameM, Lagerbestand, Preis, Datum) — verbunden über eine Beziehungs-Raute mit Kardinalität n (Medikament-Seite) zu m (Wirkstoffe-Seite) mit Entität „Wirkstoffe" (Attribute: WID (PS), NameW, Dosierungseinheit). Die m:n-Beziehung trägt das zusätzliche Attribut „Dosierung".\n' +
    'Daneben ist die Entität „Medikament" über eine zweite Beziehungs-Raute mit Kardinalität n (Medikament-Seite) zu 1 (Lieferant-Seite) mit der Entität „Lieferant" (Attribute: LID (PS), NameL, IBAN) verbunden.',
  answerStatus: 'confirmed',
  sourcePage: 13,
}

const q4ca: ApExamQuestion = {
  id: 'ap1-2025-herbst-q4-ca',
  examId: 'ap1-2025-herbst',
  questionNumber: 4,
  subPart: 'ca',
  topic: 'Algorithmus / Pseudocode-Erläuterung',
  scenario: SCENARIO,
  referenceText:
    'Quellcode (Zeilen 1–5):\n' +
    '1  FUNCTION checkInventory(data, limit):\n' +
    '2    FOR each medicine IN data:\n' +
    '3      IF medicine.quantity < limit:\n' +
    '4        PRINT medicine.name, " is below the limit."\n' +
    '5  END FUNCTION',
  question:
    'Fortsetzung 4. Aufgabe\n\nEin Mitarbeiter erstellt einen Algorithmus, um den Lagerbestand der Medikamente in allen Filialen zu überprüfen. Er verwendet den im Referenztext angegebenen Quellcode.\n\n' +
    'Erläutern Sie die Zeilen zwei, drei und vier dieses Algorithmus.\n\nZeile 2:\n\nZeile 3:\n\nZeile 4:',
  maxPoints: 3,
  modelSolution:
    'Zeile 2: Durchläuft jedes Medikament in der übergebenen Datenstruktur.\n' +
    'Zeile 3: Überprüft, ob die Menge des Medikaments unter dem festgelegten Limit liegt.\n' +
    'Zeile 4: Gibt eine Warnung mit dem Namen des Medikaments aus, wenn es unter dem Limit liegt.\n\n' +
    'Andere Formulierungen sind möglich.',
  answerStatus: 'confirmed',
  sourcePage: 14,
}

const q4cb: ApExamQuestion = {
  id: 'ap1-2025-herbst-q4-cb',
  examId: 'ap1-2025-herbst',
  questionNumber: 4,
  subPart: 'cb',
  topic: 'Algorithmus / Schreibtischtest',
  scenario: SCENARIO,
  referenceText:
    "limit = 25\ndata = [\n  {name: 'Paracetamol', quantity: 50},\n  {name: 'ASS', quantity: 22},\n  {name: 'Pantoprazol', quantity: 25},\n  {name: 'Ibuprofen', quantity: 30}\n]",
  question:
    "Führen Sie einen Schreibtischtest durch und geben Sie die Ausgabe für die folgenden Eingabedaten aus, die in einem assoziativen Array (Dictionary) mit dem Namen 'data' und der Integervariable 'limit' gespeichert sind.",
  maxPoints: 2,
  modelSolution: 'ASS is below the limit.',
  answerStatus: 'confirmed',
  sourcePage: 14,
}

const q4da: ApExamQuestion = {
  id: 'ap1-2025-herbst-q4-da',
  examId: 'ap1-2025-herbst',
  questionNumber: 4,
  subPart: 'da',
  topic: 'Algorithmus / Pseudocode-Fehleranalyse',
  scenario: SCENARIO,
  referenceText:
    'Pseudocode:\nFunktion berechneGesamtpreis(bestellung):\n    gesamtpreis = 0\n    Für jedes Produkt in bestellung:\n        gesamtpreis = gesamtpreis * (Produkt.Preis * Produkt.Menge)\n    Rückgabe gesamtpreis\nEnde Funktion',
  question:
    'Jede Medikamentenbestellung besteht aus mehreren Produkten, wobei für jedes Produkt der Name, der Preis pro Einheit und die bestellte Menge angegeben sind. Der im Referenztext angegebene Pseudocode ist eine Funktion, die den Gesamtpreis einer Bestellung berechnen soll.\n\n' +
    'Erläutern Sie, warum der aktuelle Pseudocode nicht korrekt funktioniert.',
  maxPoints: 3,
  modelSolution:
    'Der „gesamtpreis" wird zu Beginn auf 0 gesetzt und dann in der Schleife immer mit dem Produkt aus Preis und Menge multipliziert. Da jede Multiplikation mit 0 stets 0 ergibt, bleibt der „gesamtpreis" immer 0. Das Produkt aus Preis und Menge muss addiert werden.\n\nAndere Formulierungen sind möglich.',
  answerStatus: 'confirmed',
  sourcePage: 15,
}

const q4db: ApExamQuestion = {
  id: 'ap1-2025-herbst-q4-db',
  examId: 'ap1-2025-herbst',
  questionNumber: 4,
  subPart: 'db',
  topic: 'Algorithmus / Pseudocode-Korrektur',
  scenario: SCENARIO,
  question: 'Korrigieren Sie die fehlerhafte Zeile im Pseudocode, damit die Funktion den Gesamtpreis korrekt berechnet.',
  maxPoints: 2,
  modelSolution: 'gesamtpreis = gesamtpreis + (Produkt.Preis * Produkt.Menge)\n\nKorrektur auch direkt im Quellcode möglich.',
  answerStatus: 'confirmed',
  sourcePage: 15,
}

export const ap1_2025HerbstQuestions: ApExamQuestion[] = [
  q1a,
  q1b,
  q1ca,
  q1cb,
  q1da,
  q1db,
  q1ea,
  q1eb,
  q2a,
  q2ba,
  q2bb,
  q2ca,
  q2cb,
  q2cc,
  q3a,
  q3b,
  q3c,
  q3d,
  q3ea,
  q3eb,
  q3f,
  q3g,
  q3h,
  q4aa,
  q4ab,
  q4ac,
  q4b,
  q4ca,
  q4cb,
  q4da,
  q4db,
]
