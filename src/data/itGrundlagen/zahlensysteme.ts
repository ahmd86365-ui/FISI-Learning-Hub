import type { Exercise, Topic } from '../../types/content'

/**
 * Source: 1_IT_Grundlagen/1.2_Zahlensysteme (W. Schindler). Explanation text
 * from t01_Dualzahlen, t02_Hexzahlen, t03_Signierte_Dualzahlen. Exercises
 * below reproduce the exact conversion tasks from worksheets A04, A05, A07,
 * A08, A09, A10 (each item is a real question from the source, not
 * invented); the correct answers are the single objectively-correct result
 * of applying the conversion method taught in the same worksheets — the
 * source files themselves contain no answer key. Worksheets A01, A02, A03
 * and A06 are "continue the list" table-building sheets (not discrete
 * question/answer items) and are referenced in the lesson text instead of
 * being modelled as individual exercises.
 */

const TOPIC_SLUG = 'zahlensysteme'

const a04BinToDez: Exercise[] = [
  { id: 'ex-zs-a04-a', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'easy', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Dezimalzahl um: 101 bin', correctAnswer: '5', explanation: '1·4 + 0·2 + 1·1 = 5' },
  { id: 'ex-zs-a04-b', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'easy', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Dezimalzahl um: 0000 0101 bin', correctAnswer: '5', explanation: 'Führende Nullen ändern den Wert nicht: 0000 0101 bin = 5 dez.' },
  { id: 'ex-zs-a04-c', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'easy', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Dezimalzahl um: 1 bin', correctAnswer: '1', explanation: '1 bin = 1 dez.' },
  { id: 'ex-zs-a04-d', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'medium', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Dezimalzahl um: 1001 1101 bin', correctAnswer: '157', explanation: '128 + 16 + 8 + 4 + 1 = 157' },
  { id: 'ex-zs-a04-e', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'easy', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Dezimalzahl um: 1111 1111 bin', correctAnswer: '255', explanation: 'Acht Einsen ergeben 2⁸ − 1 = 255.' },
  { id: 'ex-zs-a04-f', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'hard', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Dezimalzahl um: 10 1001 1001 bin', correctAnswer: '665', explanation: '512 + 128 + 16 + 8 + 1 = 665' },
  { id: 'ex-zs-a04-g', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'medium', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Dezimalzahl um: 0110 1011 bin', correctAnswer: '107', explanation: '64 + 32 + 8 + 2 + 1 = 107' },
  { id: 'ex-zs-a04-h', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'medium', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Dezimalzahl um: 100 0000 0000 bin', correctAnswer: '1024', explanation: 'Eine 1 gefolgt von zehn Nullen entspricht 2¹⁰ = 1024.' },
  { id: 'ex-zs-a04-i', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'hard', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Dezimalzahl um: 11 1111 1111 bin', correctAnswer: '1023', explanation: 'Zehn Einsen ergeben 2¹⁰ − 1 = 1023.' },
  { id: 'ex-zs-a04-j', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'hard', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Dezimalzahl um: 10 0110 0111 bin', correctAnswer: '615', explanation: '512 + 64 + 32 + 4 + 2 + 1 = 615' },
]

const a05DezToBin: Exercise[] = [
  { id: 'ex-zs-a05-a', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'easy', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Dualzahl um: 27 dez', correctAnswer: '11011', explanation: '16 + 8 + 2 + 1 = 27 → 11011 bin' },
  { id: 'ex-zs-a05-b', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'medium', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Dualzahl um: 101 dez', correctAnswer: '1100101', explanation: '64 + 32 + 4 + 1 = 101 → 1100101 bin' },
  { id: 'ex-zs-a05-c', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'medium', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Dualzahl um: 00000101 dez', correctAnswer: '1100101', explanation: 'Führende Nullen ändern den Dezimalwert nicht: 00000101 dez = 101 dez = 1100101 bin.' },
  { id: 'ex-zs-a05-d', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'easy', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Dualzahl um: 45 dez', correctAnswer: '101101', explanation: '32 + 8 + 4 + 1 = 45 → 101101 bin' },
  { id: 'ex-zs-a05-e', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'hard', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Dualzahl um: 1025 dez', correctAnswer: '10000000001', explanation: '1024 + 1 = 1025 → 10000000001 bin' },
  { id: 'ex-zs-a05-f', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'medium', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Dualzahl um: 256 dez', correctAnswer: '100000000', explanation: '256 = 2⁸ → eine 1 gefolgt von acht Nullen.' },
  { id: 'ex-zs-a05-g', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'medium', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Dualzahl um: 255 dez', correctAnswer: '11111111', explanation: '255 = 2⁸ − 1 → acht Einsen.' },
  { id: 'ex-zs-a05-h', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'hard', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Dualzahl um: 666 dez', correctAnswer: '1010011010', explanation: '512 + 128 + 16 + 8 + 2 = 666 → 1010011010 bin' },
  { id: 'ex-zs-a05-i', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'medium', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Dualzahl um: 127 dez', correctAnswer: '1111111', explanation: '127 = 2⁷ − 1 → sieben Einsen.' },
  { id: 'ex-zs-a05-j', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'easy', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Dualzahl um: 15 dez', correctAnswer: '1111', explanation: '8 + 4 + 2 + 1 = 15 → 1111 bin' },
]

const a07HexToDez: Exercise[] = [
  { id: 'ex-zs-a07-a', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'easy', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Dezimalzahl um: FF hex', correctAnswer: '255', explanation: '15·16 + 15 = 255' },
  { id: 'ex-zs-a07-b', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'hard', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Dezimalzahl um: 0D0A hex', correctAnswer: '3338', explanation: '13·256 + 0·16 + 10·1 = 3338' },
  { id: 'ex-zs-a07-c', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'easy', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Dezimalzahl um: 7 hex', correctAnswer: '7', explanation: '7 hex = 7 dez.' },
  { id: 'ex-zs-a07-d', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'hard', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Dezimalzahl um: 10E3 hex', correctAnswer: '4323', explanation: '1·4096 + 0·256 + 14·16 + 3·1 = 4323' },
  { id: 'ex-zs-a07-e', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'medium', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Dezimalzahl um: ABC hex', correctAnswer: '2748', explanation: '10·256 + 11·16 + 12·1 = 2748' },
  { id: 'ex-zs-a07-f', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'medium', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Dezimalzahl um: 101 hex', correctAnswer: '257', explanation: '1·256 + 0·16 + 1·1 = 257' },
  { id: 'ex-zs-a07-g', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'medium', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Dezimalzahl um: FFFF hex', correctAnswer: '65535', explanation: 'Vier F ergeben 16⁴ − 1 = 65535.' },
  { id: 'ex-zs-a07-h', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'hard', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Dezimalzahl um: 2A5E hex', correctAnswer: '10846', explanation: '2·4096 + 10·256 + 5·16 + 14·1 = 10846' },
]

const a08DezToHex: Exercise[] = [
  { id: 'ex-zs-a08-a', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'medium', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Hexadezimalzahl um: 4096 dez', correctAnswer: '1000', explanation: '4096 = 16³ → 1000 hex' },
  { id: 'ex-zs-a08-b', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'easy', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Hexadezimalzahl um: 1 dez', correctAnswer: '1', explanation: '1 dez = 1 hex.' },
  { id: 'ex-zs-a08-c', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'easy', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Hexadezimalzahl um: 255 dez', correctAnswer: 'FF', explanation: '255 = 15·16 + 15 → FF hex' },
  { id: 'ex-zs-a08-d', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'easy', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Hexadezimalzahl um: 32 dez', correctAnswer: '20', explanation: '32 = 2·16 + 0 → 20 hex' },
  { id: 'ex-zs-a08-e', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'hard', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Hexadezimalzahl um: 7369 dez', correctAnswer: '1CC9', explanation: '1·4096 + 12·256 + 12·16 + 9·1 = 7369 → 1CC9 hex' },
  { id: 'ex-zs-a08-f', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'easy', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Hexadezimalzahl um: 48 dez', correctAnswer: '30', explanation: '48 = 3·16 + 0 → 30 hex' },
  { id: 'ex-zs-a08-g', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'medium', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Hexadezimalzahl um: 160 dez', correctAnswer: 'A0', explanation: '160 = 10·16 + 0 → A0 hex' },
  { id: 'ex-zs-a08-h', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'medium', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Hexadezimalzahl um: 512 dez', correctAnswer: '200', explanation: '512 = 2·256 → 200 hex' },
]

const a09HexToBin: Exercise[] = [
  { id: 'ex-zs-a09-a', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'easy', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Dualzahl um: A hex', correctAnswer: '1010', explanation: 'A hex = 1010 bin (eine Hex-Ziffer = 4 Bit).' },
  { id: 'ex-zs-a09-b', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'medium', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Dualzahl um: 32 hex', correctAnswer: '00110010', explanation: '3 → 0011, 2 → 0010, zusammen 00110010 bin.' },
  { id: 'ex-zs-a09-c', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'easy', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Dualzahl um: 1 hex', correctAnswer: '0001', explanation: '1 hex = 0001 bin.' },
  { id: 'ex-zs-a09-d', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'medium', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Dualzahl um: 10 hex', correctAnswer: '00010000', explanation: '1 → 0001, 0 → 0000, zusammen 00010000 bin.' },
  { id: 'ex-zs-a09-e', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'hard', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Dualzahl um: ABC hex', correctAnswer: '101010111100', explanation: 'A → 1010, B → 1011, C → 1100, zusammen 101010111100 bin.' },
]

const a10BinToHex: Exercise[] = [
  { id: 'ex-zs-a10-a', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'easy', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Hexadezimalzahl um: 101 bin', correctAnswer: '5', explanation: 'Mit führenden Nullen zur Vierergruppe aufgefüllt: 0101 → 5 hex.' },
  { id: 'ex-zs-a10-b', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'easy', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Hexadezimalzahl um: 1 bin', correctAnswer: '1', explanation: '0001 → 1 hex.' },
  { id: 'ex-zs-a10-c', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'hard', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Hexadezimalzahl um: 1011000000011001 bin', correctAnswer: 'B019', explanation: 'Von rechts in 4er-Gruppen: 1011 0000 0001 1001 → B 0 1 9 → B019 hex.' },
  { id: 'ex-zs-a10-d', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'medium', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Hexadezimalzahl um: 11111111 bin', correctAnswer: 'FF', explanation: '1111 1111 → F F → FF hex.' },
  { id: 'ex-zs-a10-e', topicSlug: TOPIC_SLUG, type: 'calculation', difficulty: 'hard', question: 'Rechnen Sie ohne Benutzung einer Liste in eine Hexadezimalzahl um: 10100101111100100111 bin', correctAnswer: 'A5F27', explanation: 'In 4er-Gruppen: 1010 0101 1111 0010 0111 → A 5 F 2 7 → A5F27 hex.' },
]

export const zahlensystemeTopic: Topic = {
  id: 'topic-it-grundlagen-zahlensysteme',
  slug: 'zahlensysteme',
  moduleSlug: 'it-grundlagen',
  title: 'Zahlensysteme',
  shortIntro:
    'Dualzahlen, Hexadezimalzahlen und signierte Dualzahlen – und wie man zwischen ihnen umrechnet.',
  order: 2,
  keyPoints: [
    'Eine Dualzahl (Binärzahl) besteht nur aus den Ziffern 0 und 1.',
    'Bei jedem Stellenwertsystem gilt: Die letzte Stelle (ganz rechts) sind die Einer, die vorletzte Stelle stellt die Basis des Zahlensystems dar.',
    'Eine Hexadezimal-Ziffer entspricht immer genau 4 Bit – das macht die Umrechnung Hex ↔ Dual besonders einfach.',
    'Bei signierten Dualzahlen erkennt man eine negative Zahl daran, dass die erste Stelle (ganz links) eine 1 ist – vorausgesetzt, die Gesamtanzahl der Stellen ist bekannt.',
  ],
  exercises: [...a04BinToDez, ...a05DezToBin, ...a07HexToDez, ...a08DezToHex, ...a09HexToBin, ...a10BinToHex],
  content: [
    { type: 'heading', level: 2, text: 'Verschiedene Darstellungen derselben Zahl' },
    {
      type: 'paragraph',
      text: 'Eine Zahl kann in ganz verschiedenen Formen dargestellt werden: als Ziffer, als Handzeichen, als Wort, als römische Zahl, als Strichliste – oder als Dualzahl. Es sieht völlig unterschiedlich aus, bedeutet aber immer das Gleiche.',
    },

    { type: 'heading', level: 2, text: 'Dualzahlen (Binärzahlen)' },
    {
      type: 'paragraph',
      text: 'Eine Dualzahl besteht nur aus den Ziffern 0 und 1. Dualzahlen werden vor allem in technischen Systemen benutzt, die sehr gut in der Lage sind, genau zwei verschiedene Zustände darzustellen: „Strom an" kann z. B. Eins und „Strom aus" Null bedeuten. Dualzahlen werden auch als Binärzahlen bezeichnet.',
    },
    {
      type: 'note',
      text: 'Um Verwechslungen zu vermeiden, erhalten Dezimalzahlen den Index dez und Dualzahlen den Index bin. Dabei wird z. B. 1100 bin nicht als „Tausendeinhundert" ausgesprochen, sondern als „Eins Eins Null Null".',
    },

    { type: 'heading', level: 2, text: 'Das Stellenwertsystem' },
    {
      type: 'paragraph',
      text: 'Im Dezimalsystem stellt die letzte Stelle die Einer dar, die vorletzte die Zehner, die drittletzte die Hunderter usw. – eine Stelle bedeutet immer das Zehnfache der vorangehenden Stelle.',
    },
    {
      type: 'paragraph',
      text: 'Bei Dualzahlen bedeutet eine Stelle immer das Doppelte der vorangehenden Stelle: Die letzte Stelle sind die Einer, die vorletzte die Zweier, die drittletzte die Vierer, die nächste die Achter usw.',
    },
    {
      type: 'key-points',
      items: [
        'Die letzte Stelle (ganz rechts) bezeichnet immer die Einer.',
        'Die vorletzte Stelle (von rechts) stellt immer die Basis des Zahlensystems dar.',
      ],
    },
    {
      type: 'table',
      headers: ['Stelle', 'Wert', 'Ergebnis'],
      rows: [
        ['2', '2 · 1000', '2000'],
        ['6', '6 · 100', '600'],
        ['0', '0 · 10', '0'],
        ['3', '3 · 1', '3'],
      ],
    },
    {
      type: 'example',
      title: 'Stellenwert dezimal',
      text: '2603 = 2·1000 + 6·100 + 0·10 + 3·1 = 2603.',
    },
    {
      type: 'example',
      title: 'Stellenwert dual',
      text: '1101 bin = 1·8 + 1·4 + 0·2 + 1·1 = 13 dez.',
    },

    { type: 'heading', level: 2, text: 'Hexadezimalzahlen' },
    {
      type: 'paragraph',
      text: 'Dualzahlen sind in der Regel sehr lang und damit unübersichtlich und schwer handhabbar. Hexadezimalzahlen erlauben dagegen eine sehr kompakte Darstellung der Zahlen – und sind perfekt verträglich mit den Dualzahlen.',
    },
    {
      type: 'paragraph',
      text: 'Mit Hexadezimalzahlen können alle Zahlen von 0 bis 15 dez (bzw. bis 1111 bin) einstellig dargestellt werden. Dazu braucht man sechzehn verschiedene Ziffern: die zehn bekannten Ziffern und zusätzlich die Buchstaben A bis F.',
    },
    {
      type: 'table',
      headers: ['dez', 'bin', 'hex'],
      rows: [
        ['0', '0', '0'],
        ['1', '1', '1'],
        ['2', '10', '2'],
        ['3', '11', '3'],
        ['4', '100', '4'],
        ['5', '101', '5'],
        ['6', '110', '6'],
        ['7', '111', '7'],
        ['8', '1000', '8'],
        ['9', '1001', '9'],
        ['10', '1010', 'A'],
        ['11', '1011', 'B'],
        ['12', '1100', 'C'],
        ['13', '1101', 'D'],
        ['14', '1110', 'E'],
        ['15', '1111', 'F'],
        ['16', '1 0000', '10'],
        ['17', '1 0001', '11'],
        ['18', '1 0010', '12'],
        ['…', '…', '…'],
        ['255', '1111 1111', 'FF'],
        ['256', '1 0000 0000', '100'],
        ['…', '…', '…'],
        ['4095', '1111 1111 1111', 'FFF'],
        ['4096', '1 0000 0000 0000', '1000'],
      ],
    },
    {
      type: 'paragraph',
      text: 'Auch bei Hexadezimalzahlen gilt das Stellenwertsystem: Die letzte Stelle sind die Einer, die vorletzte die Sechzehner, die drittletzte die Zweihundertsechsundfünfziger (16²) usw. – von Stelle zu Stelle immer das Sechzehnfache.',
    },
    {
      type: 'example',
      title: 'Stellenwert hexadezimal',
      text: '10A5 hex = 1·4096 + 0·256 + 10·16 + 5·1 = 4261 dez.',
    },
    {
      type: 'note',
      text: 'Mit einer hexadezimalen Ziffer lassen sich alle vierstelligen Dualzahlen darstellen – eine Hex-Ziffer steht also immer für genau 4 Bit. Deshalb wird jede Hex-Ziffer bei der Umrechnung nach Dual direkt durch 4 Bit ersetzt; umgekehrt wird eine Dualzahl von rechts in Vierergruppen geteilt (die linke Gruppe ggf. mit führenden Nullen aufgefüllt) und jede Gruppe einzeln in eine Hex-Ziffer umgerechnet.',
    },
    {
      type: 'example',
      title: 'Hex → Dual',
      text: '10A5 hex = 0001 0000 1010 0101 bin.',
    },
    {
      type: 'example',
      title: 'Dual → Hex',
      text: '0010 1011 0011 1001 1110 0000 1101 0001 bin = 2B39E0D1 hex.',
    },

    { type: 'heading', level: 2, text: 'Signierte Dualzahlen (Dualzahlen mit Vorzeichen)' },
    {
      type: 'paragraph',
      text: 'Stehen z. B. vier Bit (vier Stellen) zur Verfügung, lassen sich damit alle Zahlen von 0 bis 15 dez darstellen. Sollen mit diesen vier Bit auch negative Zahlen dargestellt werden, muss auf die Hälfte der positiven Zahlen verzichtet werden: Die obere Hälfte des Zahlenbereichs wird abgeschnitten und nach unten verschoben – sie stellt nun die negativen Zahlen dar.',
    },
    {
      type: 'table',
      headers: ['dez (signiert)', 'bin (4 Bit)'],
      rows: [
        ['7', '0111'],
        ['…', '…'],
        ['0', '0000'],
        ['-1', '1111'],
        ['…', '…'],
        ['-8', '1000'],
      ],
    },
    {
      type: 'note',
      text: 'Das gleiche Verfahren gilt, wenn 8 Bit (ein Byte), 16 Bit, 32 Bit oder 64 Bit zur Verfügung stehen. Eine negative Zahl erkennt man bei signierten Dualzahlen immer daran, dass an der ersten Stelle (ganz links) eine 1 steht – wichtig ist dabei, dass die Gesamtanzahl der Stellen bekannt ist.',
    },
    {
      type: 'heading', level: 3, text: 'Negative Dezimalzahl → signierte Dualzahl',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        'Das Minuszeichen entfernen.',
        'Die (jetzt positive) Zahl in die Dualdarstellung umrechnen.',
        'Das Komplement der Dualzahl bilden (jedes Bit invertieren).',
        '1 addieren (inkrementieren).',
      ],
    },
    {
      type: 'example',
      title: '-5 dez in eine 4-Bit-Dualzahl umrechnen',
      text: '1. +5   2. 0101 bin   3. Komplement: 1010 bin   4. +1: 1011 bin.',
    },
    {
      type: 'heading', level: 3, text: 'Signierte Dualzahl (negativ) → Dezimalzahl',
    },
    {
      type: 'paragraph',
      text: 'Der Weg wird einfach zurück gegangen:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        '1 subtrahieren (dekrementieren).',
        'Das Komplement der Dualzahl bilden.',
        'In die Dezimaldarstellung umrechnen.',
        'Ein Minuszeichen davorsetzen.',
      ],
    },
    {
      type: 'example',
      title: '11011000 bin (8-Bit, signiert) in eine Dezimalzahl umrechnen',
      text: '1. -1: 11010111 bin   2. Komplement: 00101000 bin   3. Dezimal: 40   4. Vorzeichen: -40 dez.',
    },
  ],
}
