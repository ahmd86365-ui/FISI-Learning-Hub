import type { Exercise, Topic } from '../../types/content'

/**
 * Source: IT_Englisch.md, LESSON 3 – COMPUTER HARDWARE (lines 1507-1548).
 * IT_Englisch.md is the sole source of truth — nothing here contradicts or
 * extends its vocabulary or example sentences. This is the FISI course's
 * own hardware-vocabulary lesson (CPU, RAM, motherboard, etc.), distinct
 * from the IT-Grundlagen module's hardware topic which uses different
 * vocabulary. Exercises are original practice questions applying exactly
 * the terms and sentences given in that source.
 */

const TOPIC_SLUG = 'computer-hardware-technical'

const exercises: Exercise[] = [
  {
    id: 'ex-eng-fisi-hw-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the English term for "Arbeitsspeicher"?',
    options: [
      { id: 'a', text: 'RAM / memory' },
      { id: 'b', text: 'hard drive' },
      { id: 'c', text: 'motherboard' },
    ],
    correctAnswer: 'a',
    explanation: 'RAM / memory — Arbeitsspeicher.',
  },
  {
    id: 'ex-eng-fisi-hw-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the German translation of "heat sink"?',
    options: [
      { id: 'a', text: 'Kühlkörper' },
      { id: 'b', text: 'Lüfter' },
      { id: 'c', text: 'Gehäuse' },
    ],
    correctAnswer: 'a',
    explanation: 'heat sink — Kühlkörper.',
  },
  {
    id: 'ex-eng-fisi-hw-03',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: '"power supply" means "Netzteil".',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'true',
    explanation: 'power supply — Netzteil.',
  },
  {
    id: 'ex-eng-fisi-hw-04',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'What does "peripheral" mean?',
    options: [
      { id: 'a', text: 'Peripheriegerät' },
      { id: 'b', text: 'Prozessor' },
      { id: 'c', text: 'Anschluss' },
    ],
    correctAnswer: 'a',
    explanation: 'peripheral — Peripheriegerät.',
  },
  {
    id: 'ex-eng-fisi-hw-05',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'medium',
    question: 'Complete: "The RAM needs to be ____."',
    correctAnswer: 'replaced',
    explanation: 'The RAM needs to be replaced. → Der Arbeitsspeicher muss ausgetauscht werden.',
  },
  {
    id: 'ex-eng-fisi-hw-06',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the English term for "Netzwerkkarte"?',
    options: [
      { id: 'a', text: 'network card' },
      { id: 'b', text: 'graphics card' },
      { id: 'c', text: 'motherboard' },
    ],
    correctAnswer: 'a',
    explanation: 'network card — Netzwerkkarte.',
  },
  {
    id: 'ex-eng-fisi-hw-07',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: '"The network card is not detected." translates to "Die Netzwerkkarte wird nicht erkannt."',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'true',
    explanation: 'The network card is not detected. → Die Netzwerkkarte wird nicht erkannt.',
  },
  {
    id: 'ex-eng-fisi-hw-08',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the German translation of "cooling fan"?',
    options: [
      { id: 'a', text: 'Lüfter' },
      { id: 'b', text: 'Kühlkörper' },
      { id: 'c', text: 'Netzteil' },
    ],
    correctAnswer: 'a',
    explanation: 'cooling fan — Lüfter.',
  },
]

export const computerHardwareTechnicalTopic: Topic = {
  id: 'topic-eng-fisi-hardware',
  slug: TOPIC_SLUG,
  moduleSlug: 'technical-english-fisi',
  title: 'Computer Hardware',
  shortIntro: 'Technisches Hardware-Vokabular für Fachinformatiker – von CPU und RAM bis zu Anschlüssen und Peripheriegeräten.',
  order: 3,
  keyPoints: [
    'processor / CPU, RAM / memory und motherboard sind die zentralen Komponenten eines Computers.',
    'cooling fan (Lüfter) und heat sink (Kühlkörper) sorgen für die Kühlung der Hardware.',
    'USB port, HDMI port und Ethernet port sind die wichtigsten Anschlussarten.',
    'Typische Fehlerbeschreibungen: "The computer does not power on." und "The network card is not detected."',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Computer Hardware – Vocabulary' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['processor / CPU', 'Prozessor'],
        ['RAM / memory', 'Arbeitsspeicher'],
        ['motherboard', 'Mainboard / Hauptplatine'],
        ['hard drive', 'Festplatte'],
        ['SSD', 'SSD'],
        ['power supply', 'Netzteil'],
        ['graphics card', 'Grafikkarte'],
        ['network card', 'Netzwerkkarte'],
        ['cooling fan', 'Lüfter'],
        ['heat sink', 'Kühlkörper'],
        ['case', 'Gehäuse'],
        ['monitor', 'Monitor'],
        ['keyboard', 'Tastatur'],
        ['mouse', 'Maus'],
        ['printer', 'Drucker'],
        ['USB port', 'USB-Anschluss'],
        ['HDMI port', 'HDMI-Anschluss'],
        ['Ethernet port', 'Ethernet-Anschluss'],
        ['cable', 'Kabel'],
        ['connector', 'Stecker / Anschluss'],
        ['device', 'Gerät'],
        ['peripheral', 'Peripheriegerät'],
      ],
    },
    { type: 'heading', level: 3, text: 'Important Sentences' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['The computer does not power on.', 'Der Computer lässt sich nicht einschalten.'],
        ['The RAM needs to be replaced.', 'Der Arbeitsspeicher muss ausgetauscht werden.'],
        ['The network card is not detected.', 'Die Netzwerkkarte wird nicht erkannt.'],
        ['Connect the Ethernet cable to the network port.', 'Verbinden Sie das Ethernet-Kabel mit dem Netzwerkanschluss.'],
      ],
    },
    {
      type: 'key-points',
      items: [
        'CPU, RAM und motherboard sind die Kernkomponenten – ohne sie startet kein Computer.',
        'power supply, cooling fan und heat sink betreffen Stromversorgung und Kühlung.',
        'USB port, HDMI port und Ethernet port sind die häufigsten Anschlüsse für Peripheriegeräte und Netzwerk.',
        'connector ist der allgemeine Begriff für Stecker/Anschluss, cable für das Kabel selbst.',
      ],
    },
    {
      type: 'exam-tip',
      text: 'Fehlerbeschreibungen wie "The computer does not power on." oder "The network card is not detected." werden gerne als Ausgangspunkt für Troubleshooting-Aufgaben in Prüfungen genutzt – lerne diese Sätze zusammen mit dem passenden Hardware-Begriff.',
    },
  ],
}
