import type { Exercise, Topic } from '../../types/content'

/**
 * Source: 1_IT_Grundlagen/1.3_Informationseinheiten (W. Schindler). Explanation
 * text from bit_Byte_Druckfassung. Exercises A23-A27 (single-step unit
 * conversions, objectively one correct result) are modelled as interactive
 * exercises; the multi-step, real-world word problems A28-A31 — including a
 * genuine AP1 (Herbst 2022) exam question — are preserved as fully worked
 * examples in the lesson content rather than auto-graded exercises, since
 * their results involve rounding decisions the source material itself never
 * specifies with a definitive answer key.
 */

const TOPIC_SLUG = 'informationseinheiten'

const conversionExercises: Exercise[] = [
  // A23 — bit/Byte Grundumrechnungen
  { id: 'ex-ie-a23-a', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'easy', question: 'Rechnen Sie um: 7.000.000 bit = ? kbit', correctAnswer: '7000', explanation: '7.000.000 / 1000 = 7000 kbit' },
  { id: 'ex-ie-a23-b', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'easy', question: 'Rechnen Sie um: 3 Mbit = ? kbit', correctAnswer: '3000', explanation: '3 · 1000 = 3000 kbit' },
  { id: 'ex-ie-a23-c', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'medium', question: 'Rechnen Sie um: 50 kbit = ? Byte', correctAnswer: '6250', explanation: '50 kbit = 50.000 bit; 50.000 / 8 = 6250 Byte' },
  { id: 'ex-ie-a23-d', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'easy', question: 'Rechnen Sie um: 33 Gbit = ? Mbit', correctAnswer: '33000', explanation: '33 · 1000 = 33000 Mbit' },
  // A24 — binäre Byte-Vielfache
  { id: 'ex-ie-a24-a', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'easy', question: 'Rechnen Sie um: 3 GiB = ? MiB', correctAnswer: '3072', explanation: '3 · 1024 = 3072 MiB' },
  { id: 'ex-ie-a24-b', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'easy', question: 'Rechnen Sie um: 16.384 KiB = ? MiB', correctAnswer: '16', explanation: '16.384 / 1024 = 16 MiB' },
  { id: 'ex-ie-a24-c', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'easy', question: 'Rechnen Sie um: 50 MiB = ? KiB', correctAnswer: '51200', explanation: '50 · 1024 = 51200 KiB' },
  { id: 'ex-ie-a24-d', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'easy', question: 'Rechnen Sie um: 7.168 Byte = ? KiB', correctAnswer: '7', explanation: '7.168 / 1024 = 7 KiB' },
  // A25 — gemischt dezimal/binär
  { id: 'ex-ie-a25-a', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'medium', question: 'Rechnen Sie um: 200 KiB = ? KB', correctAnswer: '204.8', explanation: '200 KiB = 200 · 1024 = 204.800 Byte; 204.800 / 1000 = 204,8 KB' },
  { id: 'ex-ie-a25-b', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'hard', question: 'Rechnen Sie um: 32.768 kbit = ? KiB', correctAnswer: '4000', explanation: '32.768 kbit = 32.768.000 bit; / 8 = 4.096.000 Byte; / 1024 = 4000 KiB' },
  { id: 'ex-ie-a25-c', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'medium', question: 'Rechnen Sie um: 3.145.728 Byte = ? MiB', correctAnswer: '3', explanation: '3.145.728 / 1024 = 3072 KiB; / 1024 = 3 MiB' },
  { id: 'ex-ie-a25-d', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'hard', question: 'Rechnen Sie um: 3.000 KiB = ? kbit', correctAnswer: '24576', explanation: '3.000 KiB = 3.000 · 1024 = 3.072.000 Byte; · 8 = 24.576.000 bit; / 1000 = 24576 kbit' },
  // A26 — gemischt
  { id: 'ex-ie-a26-a', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'easy', question: 'Rechnen Sie um: 4.000.000 bit = ? kbit', correctAnswer: '4000', explanation: '4.000.000 / 1000 = 4000 kbit' },
  { id: 'ex-ie-a26-b', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'easy', question: 'Rechnen Sie um: 5 Mbit = ? kbit', correctAnswer: '5000', explanation: '5 · 1000 = 5000 kbit' },
  { id: 'ex-ie-a26-c', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'medium', question: 'Rechnen Sie um: 80 kbit = ? Byte', correctAnswer: '10000', explanation: '80 kbit = 80.000 bit; / 8 = 10.000 Byte' },
  { id: 'ex-ie-a26-d', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'easy', question: 'Rechnen Sie um: 10 Gbit = ? Mbit', correctAnswer: '10000', explanation: '10 · 1000 = 10000 Mbit' },
  { id: 'ex-ie-a26-e', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'medium', question: 'Rechnen Sie um: 6.000.000 bit = ? kB', correctAnswer: '750', explanation: '6.000.000 / 8 = 750.000 Byte; / 1000 = 750 kB' },
  { id: 'ex-ie-a26-f', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'easy', question: 'Rechnen Sie um: 5 MB = ? kB', correctAnswer: '5000', explanation: '5 · 1000 = 5000 kB' },
  { id: 'ex-ie-a26-g', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'hard', question: 'Rechnen Sie um: 9.000.000 kbit = ? GB', correctAnswer: '1.125', explanation: '9.000.000 kbit = 9.000.000.000 bit; / 8 = 1.125.000.000 Byte; / 1000 / 1000 / 1000 = 1,125 GB' },
  { id: 'ex-ie-a26-h', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'hard', question: 'Rechnen Sie um: 7 GB = ? Mbit', correctAnswer: '56000', explanation: '7 GB = 7.000.000.000 Byte; · 8 = 56.000.000.000 bit; / 1.000.000 = 56000 Mbit' },
  // A27 — gemischt (nur die Aufgaben mit glattem Ergebnis als Übung; c, e, g siehe Beispiele)
  { id: 'ex-ie-a27-a', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'easy', question: 'Rechnen Sie um: 5 GiB = ? MiB', correctAnswer: '5120', explanation: '5 · 1024 = 5120 MiB' },
  { id: 'ex-ie-a27-b', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'hard', question: 'Rechnen Sie um: 32.768 kbit = ? KiB', correctAnswer: '4000', explanation: 'Wie in Aufgabe A25 b): 32.768.000 bit / 8 = 4.096.000 Byte; / 1024 = 4000 KiB' },
  { id: 'ex-ie-a27-d', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'easy', question: 'Rechnen Sie um: 4.096 Byte = ? KiB', correctAnswer: '4', explanation: '4.096 / 1024 = 4 KiB' },
  { id: 'ex-ie-a27-f', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'medium', question: 'Rechnen Sie um: 16.384 kbit = ? Byte', correctAnswer: '2048000', explanation: '16.384 kbit = 16.384.000 bit; / 8 = 2.048.000 Byte' },
  { id: 'ex-ie-a27-h', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'medium', question: 'Rechnen Sie um: 10.000 Byte = ? KiB', correctAnswer: '9.765625', explanation: '10.000 / 1024 = 9,765625 KiB' },
]

export const informationseinheitenTopic: Topic = {
  id: 'topic-it-grundlagen-informationseinheiten',
  slug: 'informationseinheiten',
  moduleSlug: 'it-grundlagen',
  title: 'Informationseinheiten',
  shortIntro: 'Bit, Byte und die Vielfachen davon – dezimal (kB, MB, GB …) und binär (KiB, MiB, GiB …).',
  order: 3,
  keyPoints: [
    '1 bit ist der Informationsgehalt einer Auswahl aus genau zwei Möglichkeiten (z. B. „Lampe an / Lampe aus").',
    '1 Byte = 8 bit – das entspricht in etwa der Größe, die heute ein Speicherplatz im Arbeitsspeicher hat.',
    'Dezimale Vielfache (kB, MB, GB, …) rechnen in 1000er-Schritten, binäre Vielfache (KiB, MiB, GiB, …) in 1024er-Schritten.',
    'Für Dateigrößen und Speichermedien werden meist die binären Einheiten (KiB/MiB/GiB) verwendet, für Datenübertragung meist die dezimalen bit-Einheiten (kbit/Mbit/Gbit).',
  ],
  exercises: conversionExercises,
  content: [
    { type: 'heading', level: 2, text: 'Das bit' },
    {
      type: 'paragraph',
      text: 'Ein bit ist der Informationsgehalt, der in einer Auswahl aus genau zwei Möglichkeiten enthalten ist.',
    },
    {
      type: 'example',
      title: 'Beispiel für 1 bit',
      text: 'Lampe an / Lampe aus – zwei mögliche Zustände, also genau ein bit Information.',
    },
    {
      type: 'heading', level: 2, text: 'Dezimale bit-Vielfache' },
    {
      type: 'paragraph',
      text: 'Für größere Mengen wird das bit dezimal skaliert – jede Stufe ist das 1000-fache der vorherigen. Diese Einheiten werden in der Regel zur Angabe der Datenmenge bei der Datenübertragung benutzt.',
    },
    {
      type: 'table',
      headers: ['Umrechnung', 'Einheit'],
      rows: [
        ['1000 bit', '1 Kilobit (1 kbit)'],
        ['1000 kbit', '1 Megabit (1 Mbit)'],
        ['1000 Mbit', '1 Gigabit (1 Gbit)'],
        ['1000 Gbit', '1 Terabit (1 Tbit)'],
        ['1000 Tbit', '1 Petabit (1 Pbit)'],
        ['1000 Pbit', '1 Exabit (1 Ebit)'],
      ],
    },
    {
      type: 'heading', level: 2, text: 'Das Byte' },
    {
      type: 'paragraph',
      text: '8 bit = 1 Byte. Das entspricht der Größe, die heute in der Regel ein Speicherplatz im Arbeitsspeicher hat.',
    },
    { type: 'heading', level: 3, text: 'Dezimale Byte-Vielfache (kB, MB, GB …)' },
    {
      type: 'table',
      headers: ['Umrechnung', 'Einheit'],
      rows: [
        ['1000 Byte', '1 Kilobyte (1 kB)'],
        ['1000 kB', '1 Megabyte (1 MB)'],
        ['1000 MB', '1 Gigabyte (1 GB)'],
        ['1000 GB', '1 Terabyte (1 TB)'],
        ['1000 TB', '1 Petabyte (1 PB)'],
        ['1000 PB', '1 Exabyte (1 EB)'],
      ],
    },
    {
      type: 'note',
      text: 'Diese dezimalen Byte-Einheiten werden selten und oft fehlerhaft benutzt – gemeint sind damit meistens eigentlich die binären Einheiten unten.',
    },
    { type: 'heading', level: 3, text: 'Binäre Byte-Vielfache (KiB, MiB, GiB …)' },
    {
      type: 'table',
      headers: ['Umrechnung', 'Einheit'],
      rows: [
        ['1024 Byte', '1 Kibibyte (1 KiB)'],
        ['1024 KiB', '1 Mebibyte (1 MiB)'],
        ['1024 MiB', '1 Gibibyte (1 GiB)'],
        ['1024 GiB', '1 Tebibyte (1 TiB)'],
        ['1024 TiB', '1 Pebibyte (1 PiB)'],
        ['1024 PiB', '1 Exbibyte (1 EiB)'],
      ],
    },
    {
      type: 'note',
      text: 'Die binären Einheiten werden in der Regel zur Angabe der Größe von Dateien oder Speichermedien benutzt.',
    },
    {
      type: 'paragraph',
      text: 'Datenübertragungsraten werden in bit pro Sekunde angegeben, üblicherweise als kbit/s oder Mbit/s.',
    },

    { type: 'heading', level: 2, text: 'Weitere Beispiele: Datenübertragung in der Praxis' },
    {
      type: 'example',
      title: 'Übertragungsdauer berechnen',
      text: 'Wie lange dauert es, Dateien im Gesamtumfang von 239,4 MiB mit einer Datenübertragungsrate von 25 Mbit/s zu übertragen? 239,4 MiB = 239,4 · 1.048.576 Byte ≈ 251.029.094,4 Byte, also ≈ 2.008.232.755,2 bit. Bei 25.000.000 bit/s ergibt das 2.008.232.755,2 / 25.000.000 ≈ 80,33 Sekunden, also 1 Minute 20 Sekunden.',
    },
    {
      type: 'example',
      title: 'Erforderliche Übertragungsrate berechnen',
      text: 'Welche Datenübertragungsrate ist nötig, um eine Sounddatei im Umfang von 15,14 MiB in drei Minuten (180 s) zu übertragen? 15,14 MiB ≈ 15.875.440,64 Byte, also ≈ 127.003.525,12 bit. Geteilt durch 180 s ergibt das ≈ 705.575 bit/s ≈ 705,58 kbit/s.',
    },
    {
      type: 'example',
      title: 'Scan-Datenvolumen (DIN A4, 300 dpi, True Color)',
      text: 'Ein DIN-A4-Dokument (21 cm × 29,7 cm) wird mit 300×300 dpi und 24 Bit Farbtiefe (True Color) gescannt. Umgerechnet in Zoll: 21/2,54 ≈ 8,268 Zoll, 29,7/2,54 ≈ 11,693 Zoll. Bei 300 dpi ergibt das ≈ 2481 × 3508 Pixel (aufgerundet) = 8.703.348 Pixel. Bei 24 Bit Farbtiefe sind das 208.880.352 Bit pro Dokument. Bei 2.000 Dokumenten/Tag ergibt das ≈ 417.760.704.000 Bit. Bei einer Übertragungsrate von 500 Mbit/s dauert die nächtliche Sicherung ≈ 836 Sekunden (aufgerundet) = 13 Minuten 56 Sekunden.',
    },
    {
      type: 'example',
      title: 'Original-Prüfungsaufgabe: Datenvolumen einer Scan-Qualitätskontrolle (AP1, Herbst 2022)',
      text: 'Eine Kartonbahn (Scanfläche 50,80 cm × 30,48 cm) wird bei einer Produktionsgeschwindigkeit von 30,48 m/min zwölf Stunden täglich mit 400×400 dpi und 16 Bit Farbtiefe gescannt. a) Scans pro Tag: Die Anlage bewegt sich 3.048 cm/min, ein Scan deckt 30,48 cm ab, das ergibt 100 Scans/min, bei 720 Minuten also 72.000 Scans/Tag. b) Datenvolumen pro Scan: 50,80 cm ≙ 20 Zoll, 30,48 cm ≙ 12 Zoll; bei 400 dpi ergeben sich 8000 × 4800 = 38.400.000 Pixel, bei 16 Bit also 614.400.000 Bit ≈ 73,24 MiB pro Scan. Gesamtvolumen pro Tag: 72.000 × 73,24 MiB ≈ 5.150,8 GiB ≈ 5,03 TiB, aufgerundet also 6 TiB pro Tag.',
    },
  ],
}
