import type { Exercise, Topic } from '../../types/content'

/**
 * Source: IT_Englisch.md, Unit 2, Lesson 1 (Computer Hardware Vocabulary)
 * and Lesson 2 (Hardware Sentences). IT_Englisch.md is the sole source of
 * truth — nothing here contradicts or extends its vocabulary or example
 * sentences. Exercises are original practice questions applying exactly
 * the terms and sentences given in that source.
 */

const TOPIC_SLUG = 'computer-hardware-vocabulary'

const exercises: Exercise[] = [
  {
    id: 'ex-eng-hw-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the English term for "Hauptplatine"?',
    options: [
      { id: 'a', text: 'motherboard' },
      { id: 'b', text: 'hard drive' },
      { id: 'c', text: 'optical drive' },
    ],
    correctAnswer: 'a',
    explanation: 'motherboard → Motherboard / Hauptplatine.',
  },
  {
    id: 'ex-eng-hw-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Which device do you need, along with a product key, to install this software?',
    options: [
      { id: 'a', text: 'A USB port' },
      { id: 'b', text: 'A product key' },
      { id: 'c', text: 'A projector' },
    ],
    correctAnswer: 'b',
    explanation: 'To install this software, he needs a product key. → Um diese Software zu installieren, benötigt er einen Produktschlüssel.',
  },
  {
    id: 'ex-eng-hw-03',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: 'A hard drive connects to the motherboard and stores data.',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'true',
    explanation: 'A hard drive connects to the motherboard and stores data. → Eine Festplatte wird mit dem Motherboard verbunden und speichert Daten.',
  },
  {
    id: 'ex-eng-hw-04',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'An external drive often connects to the computer using which port?',
    options: [
      { id: 'a', text: 'USB port' },
      { id: 'b', text: 'optical drive' },
      { id: 'c', text: 'switch' },
    ],
    correctAnswer: 'a',
    explanation: 'An external drive often connects to the computer using a USB port.',
  },
  {
    id: 'ex-eng-hw-05',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'What is a projector for?',
    options: [
      { id: 'a', text: 'Showing images and video' },
      { id: 'b', text: 'Storing data' },
      { id: 'c', text: 'Booting the computer' },
    ],
    correctAnswer: 'a',
    explanation: 'A projector is for showing images and video. → Ein Projektor dient zur Anzeige von Bildern und Videos.',
  },
  {
    id: 'ex-eng-hw-06',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the German translation of "headphones"?',
    options: [
      { id: 'a', text: 'Kopfhörer' },
      { id: 'b', text: 'Bildschirm' },
      { id: 'c', text: 'Ordner' },
    ],
    correctAnswer: 'a',
    explanation: 'headphones → Kopfhörer.',
  },
  {
    id: 'ex-eng-hw-07',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'medium',
    question: 'Complete: "This computer boots from the optical ____."',
    correctAnswer: 'drive',
    explanation: 'This computer boots from the optical drive. → Dieser Computer bootet vom optischen Laufwerk.',
  },
  {
    id: 'ex-eng-hw-08',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Which word means "Ordner" (as opposed to "Datei")?',
    options: [
      { id: 'a', text: 'file' },
      { id: 'b', text: 'folder' },
      { id: 'c', text: 'data' },
    ],
    correctAnswer: 'b',
    explanation: 'folder → Ordner. file → Datei.',
  },
]

export const computerHardwareVocabularyTopic: Topic = {
  id: 'topic-eng-grundlagen-hardware-vocabulary',
  slug: TOPIC_SLUG,
  moduleSlug: 'it-english-grundlagen',
  title: 'Computer Hardware Vocabulary',
  shortIntro: 'Grundlegendes Hardware-Vokabular – von der Festplatte bis zum Produktschlüssel.',
  order: 3,
  keyPoints: [
    'An external drive often connects to the computer using a USB port.',
    'A hard drive connects to the motherboard and stores data.',
    'A projector is for showing images and video.',
    'To install software, you often need a product key.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Computer Hardware Vocabulary' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['external drive', 'externe Festplatte'],
        ['hard drive', 'Festplatte'],
        ['window', 'Fenster'],
        ['headphones', 'Kopfhörer'],
        ['projector', 'Beamer / Projektor'],
        ['computer', 'Computer'],
        ['switch', 'Schalter'],
        ['software', 'Software'],
        ['optical drive', 'optisches Laufwerk'],
        ['motherboard', 'Motherboard / Hauptplatine'],
        ['USB port', 'USB-Anschluss'],
        ['product key', 'Produktschlüssel'],
        ['data', 'Daten'],
        ['file', 'Datei'],
        ['folder', 'Ordner'],
        ['server', 'Server'],
        ['screen', 'Bildschirm'],
      ],
    },
    { type: 'heading', level: 3, text: 'Hardware Sentences' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        [
          'An external drive often connects to the computer using a USB port.',
          'Eine externe Festplatte wird oft über einen USB-Anschluss mit dem Computer verbunden.',
        ],
        ['A hard drive connects to the motherboard and stores data.', 'Eine Festplatte wird mit dem Motherboard verbunden und speichert Daten.'],
        ['This window has three tabs.', 'Dieses Fenster hat drei Tabs.'],
        ['A pair of headphones is an audio device.', 'Ein Kopfhörer ist ein Audiogerät.'],
        ['A projector is for showing images and video.', 'Ein Projektor dient zur Anzeige von Bildern und Videos.'],
        ['This computer boots from the optical drive.', 'Dieser Computer bootet vom optischen Laufwerk.'],
        ['This switch turns off the computer.', 'Dieser Schalter schaltet den Computer aus.'],
        ['To install this software, he needs a product key.', 'Um diese Software zu installieren, benötigt er einen Produktschlüssel.'],
      ],
    },
    {
      type: 'exam-tip',
      text: 'Hardware-Vokabular wird in Prüfungen oft in ganzen Sätzen abgefragt (z. B. "A hard drive connects to the ___ and stores ___") – lerne deshalb Vokabel UND Beispielsatz zusammen.',
    },
  ],
}
