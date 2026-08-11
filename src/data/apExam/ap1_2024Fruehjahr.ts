import type { ApExamMeta, ApExamQuestion } from '../../types/apExam'

export const ap1_2024FruehjahrMeta: ApExamMeta = {
  id: 'ap1-2024-fruehjahr',
  area: 'AP1',
  year: 2024,
  period: 'Frühjahr',
  label: 'Frühjahr 2024',
  examDate: 'Mittwoch, 28. Februar 2024',
  examTitle: 'Einrichten eines IT-gestützten Arbeitsplatzes',
  courseCode: '1201',
  sourceExamPdf: 'AP1_24f.pdf',
  sourceSolutionPdf: 'Loe_AP1_24f.pdf',
  solutionSource: 'confirmed',
  taskCount: 4,
  durationMinutes: 90,
  totalPoints: 100,
}

const SCENARIO =
  'Sie sind Auszubildender in der IT-Abteilung der KustoFlex GmbH. Diese fertigt Kunststoffteile aller Art und Größen auch nach individuellen Wünschen.'

const q1aa: ApExamQuestion = {
  id: 'ap1-2024-fruehjahr-q1-aa',
  examId: 'ap1-2024-fruehjahr',
  questionNumber: 1,
  subPart: 'aa',
  topic: 'Nutzwertanalyse',
  scenario: SCENARIO,
  referenceText:
    '1. Aufgabe (26 Punkte)\n\nIm Unternehmen KustoFlex GmbH werden fünf CAD-Arbeitsplätze gerichtet. Sie sind in dem Projektteam, das geeignete Systeme auswählt.\n\na) Nach der Auswertung von vier Firmenangeboten ergibt sich die folgende Tabelle. Unternehmen 3 bietet ausschließlich eine Software as a Service (SaaS) Lösung an.\n\nKriterium — Gewichtung — Unternehmen 1 (Punkte/Gew.) — Unternehmen 2 (Punkte/Gew.) — Unternehmen 3 (Punkte/Gew.) — Unternehmen 4 (Punkte/Gew.)\nGrafikkarte — 20 — 3/60 — 2/40 — 4/80 — ?/60\nArbeitsspeicher (RAM) — 25 — ?/100 — 3/75 — 4/100 — 3/75\nMonitor — 40 — 2/80 — ?/40 — 4/160 — 4/?\nPreis — ? (15) — 3/45 — 4/60 — 1/15 — 1/15\nSumme — 100 — 12/285 — 10/? — 13/355 — 11/?',
  question:
    'aa) Ermitteln Sie die fehlenden Werte und eine Reihenfolge der vier Unternehmen beginnend mit der höchsten Punktzahl.',
  maxPoints: 4,
  modelSolution:
    'Vollständige Tabelle:\nKriterium — Gewichtung — U1 (Punkte/Gew.) — U2 (Punkte/Gew.) — U3 (Punkte/Gew.) — U4 (Punkte/Gew.)\nGrafikkarte — 20 — 3/60 — 2/40 — 4/80 — 3/60\nArbeitsspeicher (RAM) — 25 — 4/100 — 3/75 — 4/100 — 3/75\nMonitor — 40 — 2/80 — 1/40 — 4/160 — 4/160\nPreis — 15 — 3/45 — 4/60 — 1/15 — 1/15\nSumme — 100 — 12/285 — 10/215 — 13/355 — 11/310\n\nReihenfolge (höchste zuerst): Unternehmen 3 / Unternehmen 4 / Unternehmen 1 / Unternehmen 2 (3 / 4 / 1 / 2)\n\nBewertung: 3 Punkte (je richtige Zahl 0,5 Punkte) plus 1 Punkt für die Rangfolge. Folgefehler sind zu berücksichtigen.',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q1ab: ApExamQuestion = {
  id: 'ap1-2024-fruehjahr-q1-ab',
  examId: 'ap1-2024-fruehjahr',
  questionNumber: 1,
  subPart: 'ab',
  topic: 'KO-Kriterien',
  scenario: SCENARIO,
  question:
    'ab) In einem Meeting wurde neu festgelegt, dass nur eine on-premise Lösung in Frage kommt.\n\nWählen Sie unter Berücksichtigung des Meetings das Unternehmen aus, das den Auftrag bekommen sollte.',
  maxPoints: 2,
  modelSolution:
    'Unternehmen 4 sollte den Auftrag bekommen, da Unternehmen 3 (trotz höchster Punktzahl) die KO-Bedingung nicht erfüllt (bietet ausschließlich eine SaaS-Lösung an, keine on-premise Lösung).\n\n1 Punkt für die richtige Nennung der Unternehmung 4; 1 Punkt für den Ausschluss der Unternehmung 3 wegen der KO-Bedingung.',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q1b: ApExamQuestion = {
  id: 'ap1-2024-fruehjahr-q1-b',
  examId: 'ap1-2024-fruehjahr',
  questionNumber: 1,
  subPart: 'b',
  topic: 'Kostenberechnung / Leasing',
  scenario: SCENARIO,
  referenceText:
    'b) Das ausgewählte Unternehmen legt folgendes Angebot vor:\nMonitor — 450 EUR\nPC — 720 EUR\nSoftwareleasing — 50 EUR pro Monat und Arbeitsplatz\nWartungspauschale — 1200 EUR pro Jahr für alle Geräte\nRabatt 5 % auf PC und Monitor\n\n(5 CAD-Arbeitsplätze insgesamt.)',
  question:
    'Berechnen Sie die laufenden Kosten pro Monat für die gesamten CAD-Arbeitsplätze unter der Voraussetzung, dass die Nutzungsdauer der Monitore vier Jahre und der PCs drei Jahre beträgt. Geben Sie den Rechenweg an.',
  maxPoints: 7,
  modelSolution:
    '(5 × 450 EUR) − 5 % => 2.137,50 EUR / 48 Monate = 44,53 EUR (2 Punkte)\n(5 × 720 EUR) − 5 % => 3.420,00 EUR / 36 Monate = 95,00 EUR (2 Punkte)\nWartungspauschale: 1.200 EUR / 12 Monate = 100,00 EUR (1 Punkt)\nSoftwareleasing: 50 EUR × 5 Arbeitsplätze = 250,00 EUR (1 Punkt)\nSumme: 44,53 + 95,00 + 100,00 + 250,00 = 489,53 EUR (1 Punkt)\n\nEin Folgefehler bei der Summe ist ggfs. zu berücksichtigen.',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q1c: ApExamQuestion = {
  id: 'ap1-2024-fruehjahr-q1-c',
  examId: 'ap1-2024-fruehjahr',
  questionNumber: 1,
  subPart: 'c',
  topic: 'Monitor-Anschlüsse',
  scenario: SCENARIO,
  referenceText:
    'c) Nach der Beschaffung und Lieferung sollen die Büros vor Ort eingerichtet werden. Die gelieferten Monitore besitzen eventuell die nachstehenden Anschlüsse (vier abgebildete Steckertypen, nummeriert 1–4: 1 = DVI-Stecker, 2 = USB-C-Stecker, 3 = HDMI-Stecker, 4 = Displayport-Mini-Stecker).',
  question: 'Ordnen Sie die Anschlüsse den Abbildungen zu (HDMI, USB-C, DVI, Displayport (DP)).',
  maxPoints: 4,
  modelSolution: 'HDMI: 3\nUSB-C: 4\nDVI: 1\nDisplayport (DP): 2',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q1d: ApExamQuestion = {
  id: 'ap1-2024-fruehjahr-q1-d',
  examId: 'ap1-2024-fruehjahr',
  questionNumber: 1,
  subPart: 'd',
  topic: 'Kaufvertrag / Willenserklärung',
  scenario: SCENARIO,
  question:
    'd) Die Monitore wurden am 1. September 2023 bestellt. Es gibt keine Auftragsbestätigung und sie wurden am 7. Oktober 2023 geliefert. Die Rechnung haben Sie am 9. Oktober 2023 erhalten.\n\nErläutern Sie, zu welchem Zeitpunkt der Kaufvertrag zustande gekommen ist und begründen Sie Ihre Entscheidung.',
  maxPoints: 2,
  modelSolution:
    'Der Kaufvertrag ist mit der Lieferung am 7. Oktober zustande gekommen. (1 Punkt)\nBegründung: Die Bestellung gilt hierbei als Antrag (1. Willenserklärung), die Lieferung (schlüssiges Handeln, 2. übereinstimmende Willenserklärung) als Annahme. (1 Punkt)',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q1e: ApExamQuestion = {
  id: 'ap1-2024-fruehjahr-q1-e',
  examId: 'ap1-2024-fruehjahr',
  questionNumber: 1,
  subPart: 'e',
  topic: 'Kaufvertragsinhalte',
  scenario: SCENARIO,
  question:
    'e) Nennen Sie drei mögliche Inhalte, die durch einen Kaufvertrag geregelt sind (Abgrenzung von den juristischen Bestandteilen eines Kaufvertrags, z. B. Willenserklärungen).',
  maxPoints: 3,
  modelSolution:
    '– Kaufgegenstand (oder auch Sache, Kaufsache, Beschaffenheit der Ware)\n– Menge\n– Kaufpreis\n– Zahlungsbedingungen\n– Lieferbedingungen\n– Liefertermin\n– u. a.\n\nJe Nennung 1 Punkt, maximal 3 Punkte.',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q1fa: ApExamQuestion = {
  id: 'ap1-2024-fruehjahr-q1-fa',
  examId: 'ap1-2024-fruehjahr',
  questionNumber: 1,
  subPart: 'fa',
  topic: 'Kaufvertragsstörungen',
  scenario: SCENARIO,
  referenceText: 'f) Die ordnungsgemäße Abwicklung des Kaufvertrages ist dem Kunden sehr wichtig.',
  question: 'fa) Nennen Sie zwei Kaufvertragsstörungen.',
  maxPoints: 2,
  modelSolution: '– Lieferverzug\n– Mangelhafte Lieferung',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q1fb: ApExamQuestion = {
  id: 'ap1-2024-fruehjahr-q1-fb',
  examId: 'ap1-2024-fruehjahr',
  questionNumber: 1,
  subPart: 'fb',
  topic: 'Kaufvertragsstörungen / Maßnahmen',
  scenario: SCENARIO,
  question:
    'fb) Geben Sie bei Ihren genannten Kaufvertragsstörungen je eine Maßnahme an, die der Kunde ergreifen kann, um diesen Störungen zu vermeiden.',
  maxPoints: 2,
  modelSolution:
    'Lieferverzug → sofortige Mahnung, Analyse der Lieferkette …\nMangelhafte Lieferung → sofortige Kontrolle der Lieferung, sorgfältige Auswahl der Lieferanten, Konventionalstrafen vereinbaren\n\nAndere Maßnahmen sind möglich.',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q2a: ApExamQuestion = {
  id: 'ap1-2024-fruehjahr-q2-a',
  examId: 'ap1-2024-fruehjahr',
  questionNumber: 2,
  subPart: 'a',
  topic: 'Netzwerk-LED',
  scenario: SCENARIO,
  referenceText:
    '2. Aufgabe (24 Punkte)\n\nNach der Konfiguration des CAD-Arbeitsplatzes prüfen Sie nun die Netzwerkeinstellungen. Dazu führen Sie verschiedene Tests durch und interpretieren die Ergebnisse.\n\na) Bei einem Blick auf die Buchse der Netzwerkkarte Ihres PCs erkennen Sie rechts oben eine grüne Leuchtdiode (LED, Bild 1).',
  question:
    'Interpretieren Sie die hier zur Verfügung gestellten Informationen bzgl. der Netzwerkfunktionalität Ihres PCs für: LED leuchtet durchgehend / LED blinkt unregelmäßig.',
  maxPoints: 4,
  modelSolution:
    'LED leuchtet durchgehend: Es wurde eine erfolgreiche physikalische Netzwerkverbindung zwischen zwei Netzwerkports (der Netzwerkkarte und einem Switch) hergestellt. Mögliche weitere Lösung: Übertragungsgeschwindigkeit/Link Speed wird angezeigt.\n\nLED blinkt unregelmäßig: Es findet eine Netzwerkkommunikation/ein Datenaustausch zwischen Ihrem PC und einem anderen Netzwerkgerät statt.\n\nWeitere richtige herstellerabhängige Lösungen sind möglich.',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q2b: ApExamQuestion = {
  id: 'ap1-2024-fruehjahr-q2-b',
  examId: 'ap1-2024-fruehjahr',
  questionNumber: 2,
  subPart: 'b',
  topic: 'OSI-Modell',
  scenario: SCENARIO,
  referenceText:
    'b) Nach der Eingabe des Befehls „ipconfig /all" auf der Kommandozeile Ihres PCs erhalten Sie u. a. die folgenden weiteren Informationen (Abb. 1):\nPhysische Adresse: 50-1A-C5-F2-38-B7\nDHCP aktiviert: Ja\nAutokonfiguration aktiviert: Ja\nVerbindungslokale IPv6-Adresse: fe80::521a:c5ff:fef2:38b7%5(Bevorzugt)\nIPv4-Adresse: 192.168.0.52(Bevorzugt)\nSubnetzmaske: 255.255.255.0',
  question:
    'Benennen Sie die in der folgenden Tabelle aufgeführten OSI-Schichten und ordnen Sie zur Strukturierung die vorliegenden Begriffe den richtigen Schichten zu:\n– Physische Adresse,\n– DHCP,\n– Verbindungslokale IPv6-Adresse,\n– Buchse mit LED.\n\nOSI-Schicht 7 — Name — Begriff\nOSI-Schicht 4 — Transport (vorgegeben) — TCP (vorgegeben)\nOSI-Schicht 3 — Name — Begriff\nOSI-Schicht 2 — Name — Begriff\nOSI-Schicht 1 — Name — Begriff',
  maxPoints: 4,
  modelSolution:
    'OSI-Schicht 7 — Anwendung / Application — DHCP\nOSI-Schicht 4 — Transport — TCP\nOSI-Schicht 3 — Vermittlung / Network — Verbindungslokale IPv6-Adresse\nOSI-Schicht 2 — Sicherung / Data Link — Physische Adresse\nOSI-Schicht 1 — Bitübertragung / Physical — Buchse mit LED',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q2c: ApExamQuestion = {
  id: 'ap1-2024-fruehjahr-q2-c',
  examId: 'ap1-2024-fruehjahr',
  questionNumber: 2,
  subPart: 'c',
  topic: 'IPv6-Adressanalyse',
  scenario: SCENARIO,
  referenceText:
    'c) Sie analysieren nun die in Abb. 1 angezeigte IPv6 Adresse „fe80::521a:c5ff:fef2:38b7".',
  question:
    'Nennen Sie die folgenden zugehörigen Werte: Länge der IPv6-Adresse in Bits; ungekürzte Darstellung der IPv6-Adresse in Hexadezimalschreibweise; Präfixlänge; Interface-Identifier.',
  maxPoints: 5,
  modelSolution:
    '– Länge der IPv6-Adresse in Bits: 128 (1 Punkt)\n– Ungekürzte Darstellung der IPv6-Adresse in Hexadezimalschreibweise: fe80:0000:0000:0000:521a:c5ff:fef2:38b7 (2 Punkte)\n– Präfixlänge: 64 Bits (1 Punkt)\n– Interface-Identifier: 521a:c5ff:fef2:38b7 (1 Punkt)',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q2d: ApExamQuestion = {
  id: 'ap1-2024-fruehjahr-q2-d',
  examId: 'ap1-2024-fruehjahr',
  questionNumber: 2,
  subPart: 'd',
  topic: 'DHCP',
  scenario: SCENARIO,
  referenceText:
    'd) Physische Adresse: 50-1A-C5-F2-38-B7; DHCP aktiviert: Ja; Autokonfiguration aktiviert: Ja; Verbindungslokale IPv6-Adresse: fe80::521a:c5ff:fef2:38b7%5(Bevorzugt); IPv4-Adresse: 192.168.0.52(Bevorzugt); Subnetzmaske: 255.255.255.0 (Abb. 1, Wiederholung)',
  question: 'Nennen Sie unter Bezugnahme auf Abb.1 die Informationen, die der DHCP-Server Ihrem Client zur Verfügung stellt.',
  maxPoints: 2,
  modelSolution: 'IPv4-Adresse, Subnetzmaske. Angabe der konkreten Werte ist auch möglich.',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q2e: ApExamQuestion = {
  id: 'ap1-2024-fruehjahr-q2-e',
  examId: 'ap1-2024-fruehjahr',
  questionNumber: 2,
  subPart: 'e',
  topic: 'ARP',
  scenario: SCENARIO,
  referenceText:
    'e) Zur weiteren Analyse Ihrer Netzwerkkonfiguration geben Sie den Befehl „arp -a" ein und erhalten die folgende Ausgabe (Abb. 2):\nSchnittstelle: 192.168.0.52 --- 0x5\nInternetadresse: 192.168.0.1 — Physische Adresse: d4-3f-cb-8c-37-8b — Typ: dynamisch',
  question:
    'Erläutern Sie anhand des Beispiels in Abb. 2 die grundlegende Aufgabe des Address Resolution Protocol (ARP) bei der Netzwerkkommunikation in einem LAN.',
  maxPoints: 3,
  modelSolution:
    'Ermittlung der zugehörigen MAC-Adresse (hier nur: d4-3f-cb-8c-37-8b) zu den IP-Adressen (hier nur: 192.168.0.1).',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q2f: ApExamQuestion = {
  id: 'ap1-2024-fruehjahr-q2-f',
  examId: 'ap1-2024-fruehjahr',
  questionNumber: 2,
  subPart: 'f',
  topic: 'Erreichbarkeitsprüfung',
  scenario: SCENARIO,
  question: 'f) Geben Sie einen geeigneten Befehl an, um von Ihrem PC aus die Erreichbarkeit der Internetadresse (siehe Abb. 2) zu prüfen.',
  maxPoints: 2,
  modelSolution: 'ping 192.168.0.1\noder tracert 192.168.0.1\noder andere geeignete Netzwerkbefehle',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q2g: ApExamQuestion = {
  id: 'ap1-2024-fruehjahr-q2-g',
  examId: 'ap1-2024-fruehjahr',
  questionNumber: 2,
  subPart: 'g',
  topic: 'IP-/MAC-Adresszuordnung',
  scenario: SCENARIO,
  question:
    'g) In den Abbildungen 1 und 2 haben Sie Informationen zu dem Datenverkehr der ARP-Kommunikation zwischen Ihrem PC und dem weiteren PC in Ihrem Netzwerk erhalten.\n\nOrdnen Sie in der folgenden Skizze die IP-Adressen und die Physischen Adressen richtig zu (Eigener PC / Weiterer PC in Netzwerk).',
  maxPoints: 4,
  modelSolution:
    'Eigener PC — IP-Adresse: 192.168.0.52, Physische Adresse: 50-1a-c5-f2-38-b7\nWeiterer PC in Netzwerk — IP-Adresse: 192.168.0.1, Physische Adresse: d4-3f-cb-8c-37-8b',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q3a: ApExamQuestion = {
  id: 'ap1-2024-fruehjahr-q3-a',
  examId: 'ap1-2024-fruehjahr',
  questionNumber: 3,
  subPart: 'a',
  topic: 'Dateiformat-Recherche',
  scenario: SCENARIO,
  question:
    '3. Aufgabe (24 Punkte)\n\nEin Kunde sendet seine Daten für ein Bauteil im PLY-Format. Da Ihnen das Format nicht bekannt ist, suchen Sie nach Informationen über das Dateiformat und seinen Aufbau.\n\na) Nennen Sie drei Möglichkeiten, um Informationen über das unbekannte Dateiformat erhalten zu können.',
  maxPoints: 3,
  modelSolution:
    '– Online-Recherche mit Suchmaschine\n– Frage in Foren oder Online-Communities\n– Anfrage beim Hersteller\n– Fachliteratur\n– Handbücher\n– Chatbot wie z. B. ChatGPT\n– u. a.',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q3b: ApExamQuestion = {
  id: 'ap1-2024-fruehjahr-q3-b',
  examId: 'ap1-2024-fruehjahr',
  questionNumber: 3,
  subPart: 'b',
  topic: 'Dateiformatkonvertierung',
  scenario: SCENARIO,
  question:
    'b) Sie haben erfahren, dass es sich bei dem Polygon File Format (PLY) um ein Dateiformat zur Speicherung dreidimensionaler Daten handelt. Ihr betriebseigenes CAD-System benötigt aber die Daten im OBJ- oder STL-Format.\n\nNennen Sie eine Möglichkeit, wie Sie die Kundendaten in Ihrem CAD-System dennoch verwenden können.',
  maxPoints: 2,
  modelSolution:
    '– Importmöglichkeiten des CAD-Programms\n– Exportmöglichkeit eines CAD-Programms\n– Dateiformatkonverter benutzen (online oder offline)\n– Eigenen Konverter programmieren\n– u. a.',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q3c: ApExamQuestion = {
  id: 'ap1-2024-fruehjahr-q3-c',
  examId: 'ap1-2024-fruehjahr',
  questionNumber: 3,
  subPart: 'c',
  topic: 'ASCII- vs. Binärformat',
  scenario: SCENARIO,
  question:
    'c) Sie haben Informationen über den Aufbau einer PLY-Datei erhalten. Eine PLY-Datei kann im ASCII-Format oder als Binärdatei gespeichert sein.\n\nErläutern Sie den Unterschied zwischen einer Datei im ASCII Format und einer Datei im Binär Format.',
  maxPoints: 4,
  modelSolution:
    'ASCII-Format: Eine Datei im ASCII-Format speichert Daten als ASCII-Zeichen, die mit jedem Texteditor geöffnet und bearbeitet werden können. (2 Punkte)\nBinärdatei: Eine Binärdatei speichert Daten in einem binären Format, die nur mit der entsprechenden Anwendung verarbeitet werden kann. (2 Punkte)',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q3da: ApExamQuestion = {
  id: 'ap1-2024-fruehjahr-q3-da',
  examId: 'ap1-2024-fruehjahr',
  questionNumber: 3,
  subPart: 'da',
  topic: 'Speicherbedarf-Berechnung',
  scenario: SCENARIO,
  referenceText:
    'd) In einer PLY-Datei sind 3840 Punkte gespeichert. Jeder Punkt wird durch x, y und z Koordinaten bestimmt. Jede Koordinate wird durch einen 32-Bit-Float-Wert codiert.',
  question:
    'da) Berechnen Sie, wie viele Kibibyte Sie benötigen, um die 3.840 Punkte zu speichern. Der Speicherbedarf des Datei-Headers und Farbcodierungen sollen nicht berücksichtigt werden.',
  maxPoints: 3,
  modelSolution: '3 × (32 Bit / 8 Bit) × 3.840 = 46.080 Byte / 1024 = 45 KiB',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q3db: ApExamQuestion = {
  id: 'ap1-2024-fruehjahr-q3-db',
  examId: 'ap1-2024-fruehjahr',
  questionNumber: 3,
  subPart: 'db',
  topic: 'Farbtiefe-Berechnung',
  scenario: SCENARIO,
  question:
    'db) Jeder Punkt soll jetzt im RGB-Farbraum mit je 8 Bit pro Farbkanal codiert werden.\n\nBerechnen Sie, wie viele verschiedene Farben sich damit darstellen lassen.',
  maxPoints: 2,
  modelSolution: '2^8 × 2^8 × 2^8 = 256 × 256 × 256 = 16.777.216 mögliche Farben',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q3dc: ApExamQuestion = {
  id: 'ap1-2024-fruehjahr-q3-dc',
  examId: 'ap1-2024-fruehjahr',
  questionNumber: 3,
  subPart: 'dc',
  topic: 'Speichermehrbedarf-Berechnung',
  scenario: SCENARIO,
  question: 'dc) Berechnen Sie, wie viel Prozent Speicher Sie pro Bildpunkt zusätzlich benötigen, um die Farbwerte zu speichern.',
  maxPoints: 3,
  modelSolution: '12 Byte (3 × 4 Byte) → 15 Byte (12 Byte + 3 Byte RGB) = 25 % mehr',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q3e: ApExamQuestion = {
  id: 'ap1-2024-fruehjahr-q3-e',
  examId: 'ap1-2024-fruehjahr',
  questionNumber: 3,
  subPart: 'e',
  topic: 'Netzteilauswahl',
  scenario: SCENARIO,
  referenceText:
    'e) Sie werden beauftragt, das Netzteil für einen CAD-Rechner auszuwählen. Es stehen Netzteile von 400 W in 50-W-Schritten bis 1200 W zur Verfügung. Die folgenden Komponenten wurden bereits ausgewählt. Zu der ermittelten Leistungsaufnahme ist ein Puffer von 10 % hinzuzurechnen.\n\nKomponente — Maximale Leistungsaufnahme in Watt je Stück — Anzahl\nMainboard — 20 — 1\nProzessor — 172 — 1\nProzessor-Lüfter — 12 — 1\nArbeitsspeicher — 5 — 4\nGrafikkarte — 310 — 1\nM.2 SSD — 5 — 2\nGehäuselüfter — 8 — 2',
  question: 'Berechnen Sie die ermittelte Leistungsaufnahme mit Puffer und benennen Sie das ausgewählte Netzteil.',
  maxPoints: 4,
  modelSolution:
    '20 W + 172 W + 12 W + 4 × 5 W + 310 W + 2 × 5 W + 2 × 8 W = 560 W\n560 W + 10 % = 616 W → 650 W gewählt\n\n(3 Punkte Berechnung Leistungsaufnahme, 1 Punkt Auswahl Netzteil)',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q3f: ApExamQuestion = {
  id: 'ap1-2024-fruehjahr-q3-f',
  examId: 'ap1-2024-fruehjahr',
  questionNumber: 3,
  subPart: 'f',
  topic: 'Stromkosten-Berechnung',
  scenario: SCENARIO,
  referenceText:
    'f) Der PC wird an 200 Arbeitstagen je 9 Stunden laufen. Das Netzteil hat einen Wirkungsgrad von 90 % und wird im Schnitt zu 50 % ausgelastet sein.\n\nHinweis: Konnten Sie in e) kein Netzteil ermitteln, rechnen Sie mit 750 Watt weiter.',
  question: 'Berechnen Sie die Stromkosten bei einem Preis von 0,40 EUR pro kWh.',
  maxPoints: 3,
  modelSolution:
    '200 × 9 h × (0,650 kW / 90 %) × 0,5 × 0,40 EUR/kWh = 260,00 EUR\n\nAlternativ: Rechnung mit 750 W: 200 × 9 h × (0,750 kW / 90 %) × 0,5 × 0,40 EUR/kWh = 300,00 EUR',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q4a: ApExamQuestion = {
  id: 'ap1-2024-fruehjahr-q4-a',
  examId: 'ap1-2024-fruehjahr',
  questionNumber: 4,
  subPart: 'a',
  topic: 'Geheimhaltung unterwegs',
  scenario: SCENARIO,
  referenceText:
    '4. Aufgabe (26 Punkte)\n\nMit Herrn Müller wurde ein neuer Mitarbeiter eingestellt, der mit dem hausinternen CAD-Programm die Realisierungsmöglichkeiten der Aufträge überprüfen soll, um eine für alle Seiten optimale Lösung zu finden. In einigen Fällen wird von ihm erwartet, dass er für wenige Tage beim Kunden vor Ort tätig ist. Zu diesen Terminen wird ihm ein leistungsfähiger Laptop zur Verfügung gestellt. Die Erstellung und das Bearbeiten einer Konstruktionszeichnung erfordert eine große Rechnerleistung und einen hohen Speicherbedarf, sodass bei Außenterminen dies auf der lokalen Festplatte des Laptops erfolgen muss.\n\na) Herr Müller möchte seine berufsbedingten Fahrten mit Bus und Bahn und die Aufenthalte auf öffentlichen Plätzen zur Erledigung betrieblicher Arbeiten nutzen. Allerdings sind dabei zur Gewährleistung der Geheimhaltung besondere Vorsichtsmaßnahmen erforderlich.\n\nMaßnahmen oder Verhaltensweisen — Folge der Nichtbeachtung\nBeispiel: Nutzung einer Blickschutzfolie (vorgegeben) — Bildschirminhalt kann von Unberechtigten gelesen werden (vorgegeben)\n(drei weitere Zeilen zu ergänzen)',
  question:
    'Nennen Sie Herrn Müller drei geeignete Maßnahmen oder Verhaltensweisen zur Gewährleistung der Geheimhaltung. Weisen Sie dabei auf eine mögliche Folge einer Nichtbeachtung hin. Ergänzen Sie dazu die Tabelle.',
  maxPoints: 6,
  modelSolution:
    'Maßnahmen oder Verhaltensweisen — Folge der Nichtbeachtung\nNutzung geeigneter Zugangs- und Zugriffskontrolle, z. B. durch sicheres Passwort — Unberechtigten Personen ist die Nutzung von Geräten und der Zugriff auf Daten möglich\nVerschlüsselung der Daten — Unberechtigter Zugriff auf Daten möglich\nSicherung lokal gespeicherter Daten — Verfügbarkeit der Daten ist nicht mehr gegeben\nNutzung einer VPN-Verbindung — Datenübertragung könnte von Unberechtigten abgegriffen werden\n\nWeitere sinnvolle Lösungen möglich!',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q4b: ApExamQuestion = {
  id: 'ap1-2024-fruehjahr-q4-b',
  examId: 'ap1-2024-fruehjahr',
  questionNumber: 4,
  subPart: 'b',
  topic: 'VPN',
  scenario: SCENARIO,
  question: 'b) Herr Müller sichert seine Daten möglichst auf dem Server der KustoFlex GmbH über VPN.\n\nErklären Sie die Funktionalität des Begriffs VPN.',
  maxPoints: 2,
  modelSolution:
    'VPN (Virtual Private Network): Eine Netzwerkverbindung ohne eigene physische Verbindung, die von Unberechtigten nicht einsehbar ist.\n\nSinngemäß auch gültig:\n– Verschlüsselte Verbindung unter Nutzung des öffentlichen Netzes (Internet)\n– Eine Technologie, die eine sichere Verbindung über das Internet zwischen einem Gerät (z. B. Computer, Smartphone) und einem entfernten Netzwerk herstellt.',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q4c: ApExamQuestion = {
  id: 'ap1-2024-fruehjahr-q4-c',
  examId: 'ap1-2024-fruehjahr',
  questionNumber: 4,
  subPart: 'c',
  topic: 'Datensicherung / Generationsprinzip',
  scenario: SCENARIO,
  question:
    'c) Herr Müller kritisiert, dass im Außendienst nicht immer eine stabile Internetverbindung zur Verfügung steht.\n\nNach den Sicherheitsrichtlinien der KustoFlex GmbH sind für lokal gespeicherte Daten Tagesvollsicherungen auf mehreren (nummerierten) externen Festplatten vorgesehen.\n\nNennen Sie Herrn Müller drei Punkte, die zu beachten sind, wenn die lokal gespeicherten Daten mithilfe von externen Festplatten möglichst zuverlässig gesichert werden sollen. Berücksichtigen Sie dabei die Datensicherheitsaspekte.',
  maxPoints: 3,
  modelSolution:
    '3 sinnvolle Aspekte, z. B.:\n– Datenträger werden verschlüsselt, d. h. bei der Nutzung ist die Eingabe eines Passworts erforderlich.\n– Bei jedem Sicherungsvorgang wird in einer festen Reihenfolge jeweils ein anderer Datenträger verwendet, um bei Ausfall noch weitere Sicherungsstände zu haben.\n– Nachdem alle Datenträger genutzt wurden, wird wieder der erste verwendet.\n– Auch der Hinweis auf die Anwendung des „Generationsprinzips" („Großvater-Vater-Sohn-Prinzip") ist möglich!\n\nAuch andere Lösungen sind zulässig.',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q4da: ApExamQuestion = {
  id: 'ap1-2024-fruehjahr-q4-da',
  examId: 'ap1-2024-fruehjahr',
  questionNumber: 4,
  subPart: 'da',
  topic: 'Malware-Arten',
  scenario: SCENARIO,
  referenceText: 'd) Sie informieren Herrn Müller über „Malware" als Oberbegriff für Schadsoftware.',
  question: 'da) Nennen Sie drei Arten von Malware.',
  maxPoints: 3,
  modelSolution:
    'Drei aus: Viren, Wurm, Trojaner, Spyware, Adware, Hintertür (Backdoor), Scareware, Ransomware, Keylogger, Riskware, Archivbomben, Dropper.',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q4db: ApExamQuestion = {
  id: 'ap1-2024-fruehjahr-q4-db',
  examId: 'ap1-2024-fruehjahr',
  questionNumber: 4,
  subPart: 'db',
  topic: 'Malware-Merkmale',
  scenario: SCENARIO,
  question: 'db) Weisen Sie den in Aufgabe da) genannten Arten jeweils ein spezifisches Merkmal zu.',
  maxPoints: 3,
  modelSolution:
    'Viren: Software, die den Programmcode eines ursprünglich unschädlichen Programms befällt und sich selbst verbreitet.\nWurm: Wird nach Infektion selbst aktiv und breitet sich aus.\nTrojaner: Eingebettet in eine meist nützliche Software; Trojaner wird durch Start dieser Software aktiv.\nSpyware: Spioniert Inhalte und Aktivitäten aus.\nAdware: Forscht den Computer und das Nutzerverhalten aus, um gezielt Werbung zu platzieren.\nHintertür (Backdoor): Ermöglicht Dritten einen unbefugten Zugang („Hintertür") zum Computer, jedoch versteckt und unter Umgehung der üblichen Sicherheitseinrichtungen.\nScareware: Ist darauf angelegt, den Benutzer zu verunsichern und ihn dazu zu verleiten, schädliche Software zu installieren oder für ein unnützes Produkt zu bezahlen.\nRansomware: Blockiert den Zugriff auf das Betriebssystem bzw. verschlüsselt potenziell wichtige Dateien und fordert den Benutzer zur Zahlung von Lösegeld auf.\nKeylogger: Sind eine Unterklasse der Spyware. Sie sind Programme, die dazu verwendet werden, die Eingaben des Benutzers an der Tastatur eines Computers zu protokollieren und einem Dritten bereitzustellen.\nRiskware: Software, die für legale Zwecke beworben wird, aber dabei erhebliche Sicherheitsprobleme aufwerfen kann.\nArchivbomben: Stark komprimierte Dateien, wie beispielsweise einfarbige Bitmap-Dateien in Gigabyte-Größe, die nach dem Packen eine Größe von wenigen 100 Kilobyte haben.\nDropper: Trojaner, die einen Virus aussetzen, meistens ein Bootsektorvirus, zur Erstfreisetzung oder gezielten Infektion.',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q4e: ApExamQuestion = {
  id: 'ap1-2024-fruehjahr-q4-e',
  examId: 'ap1-2024-fruehjahr',
  questionNumber: 4,
  subPart: 'e',
  topic: 'Malware-Schutz',
  scenario: SCENARIO,
  question:
    'e) Eine Antivirensoftware ist bereits auf dem Laptop installiert.\n\nErläutern Sie Herrn Müller drei weitere organisatorische oder technische Empfehlungen, wie man sich vor Malware schützen kann.',
  maxPoints: 3,
  modelSolution:
    'z. B.:\n– Keine unbekannten Datenträger benutzen, die infizierte Dateien enthalten könnten\n– Kein Download von unsicheren Quellen\n– Keine Ausführung aktiver Inhalte von Dateien (z. B. Makros, E-Mail-Anhänge)\n– AdBlocker nutzen\n– Regelmäßig Updates von Betriebssystem und Anwendungen installieren\n– Mitarbeiter sensibilisieren\n– etc.',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q4f: ApExamQuestion = {
  id: 'ap1-2024-fruehjahr-q4-f',
  examId: 'ap1-2024-fruehjahr',
  questionNumber: 4,
  subPart: 'f',
  topic: 'Übertragungsdauer-Berechnung',
  scenario: SCENARIO,
  referenceText:
    'f) Ergebnis des Speedtests: Download 75.78 Mbps, Upload 50.02 Mbps.',
  question:
    'Berechnen Sie zur Verdeutlichung des Zeitaufwands für Herrn Müller die Übertragungsdauer, wenn er Daten mit einem Umfang von 1 GiB aufgrund des Ergebnisses des Speedtests abspeichern möchte. Der Rechenweg ist mit anzugeben. Runden Sie das Ergebnis auf volle Sekunden auf und stellen Sie das Ergebnis in Minuten und Sekunden dar.',
  maxPoints: 6,
  modelSolution:
    '1 GiB × 1.024 × 1.024 × 1.024 × 8 / (50,02 Mbps × 1.000 × 1.000) = 171,73 s, gerundet 172 s\nEntspricht 2 Minuten und 52 Sekunden\n\nPunkteverteilung:\nUmrechnung von GiB auf Byte (1 GiB × 1.024 × 1.024 × 1.024): 1 Punkt\nUmrechnung von Byte auf Bit (× 8 bit): 1 Punkt\nUmrechnung der Übertragungsdauer von Mbps auf bit/s (50,02 Mbps × 1.000 × 1.000): 1 Punkt\nBerechnung der Übertragungsdauer (/50,02): 1 Punkt\nErmittlung des Gesamtergebnisses (= 171,73 s): 1 Punkt\nUmrechnung auf Minuten und Sekunden (172 Sekunden = 2 Minuten und 52 Sekunden): 1 Punkt\n(Teilpunkte möglich)\n\nHinweis: Die Berechnung nutzt den Upload-Wert (50,02 Mbps), da Herr Müller die Daten auf dem Server ablegt (Upload).',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

export const ap1_2024FruehjahrQuestions: ApExamQuestion[] = [
  q1aa,
  q1ab,
  q1b,
  q1c,
  q1d,
  q1e,
  q1fa,
  q1fb,
  q2a,
  q2b,
  q2c,
  q2d,
  q2e,
  q2f,
  q2g,
  q3a,
  q3b,
  q3c,
  q3da,
  q3db,
  q3dc,
  q3e,
  q3f,
  q4a,
  q4b,
  q4c,
  q4da,
  q4db,
  q4e,
  q4f,
]
