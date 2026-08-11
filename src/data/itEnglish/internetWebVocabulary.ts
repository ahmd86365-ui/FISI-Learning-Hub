import type { Exercise, Topic } from '../../types/content'

/**
 * Source: IT_Englisch.md, Unit 3, Lesson 1 (Internet Vocabulary), Lesson 2
 * (Common Word Combinations) and Lesson 6 (Mobile / Internet Technology).
 * IT_Englisch.md is the sole source of truth — nothing here contradicts or
 * extends its vocabulary. Exercises are original practice questions
 * applying exactly the terms given in that source.
 */

const TOPIC_SLUG = 'internet-web-vocabulary'

const exercises: Exercise[] = [
  {
    id: 'ex-eng-internet-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the German translation of "wireless"?',
    options: [
      { id: 'a', text: 'drahtlos' },
      { id: 'b', text: 'kabelgebunden' },
      { id: 'c', text: 'verschlüsselt' },
    ],
    correctAnswer: 'a',
    explanation: 'wireless → drahtlos.',
  },
  {
    id: 'ex-eng-internet-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Which combination means "einem Link folgen"?',
    options: [
      { id: 'a', text: 'follow a link' },
      { id: 'b', text: 'enter an address' },
      { id: 'c', text: 'browse websites' },
    ],
    correctAnswer: 'a',
    explanation: 'follow a link → einem Link folgen.',
  },
  {
    id: 'ex-eng-internet-03',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Which word combination means "kurze Akkulaufzeit"?',
    options: [
      { id: 'a', text: 'short battery life' },
      { id: 'b', text: 'the refresh button' },
      { id: 'c', text: "the recipient's address" },
    ],
    correctAnswer: 'a',
    explanation: 'short battery life → kurze Akkulaufzeit.',
  },
  {
    id: 'ex-eng-internet-04',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Which device is described by "GPS"?',
    options: [
      { id: 'a', text: 'A device that shows your location' },
      { id: 'b', text: 'A device that plays music' },
      { id: 'c', text: 'A device that prints documents' },
    ],
    correctAnswer: 'a',
    explanation: 'A GPS is a device that shows your location. → Ein GPS ist ein Gerät, das deinen Standort anzeigt.',
  },
  {
    id: 'ex-eng-internet-05',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: '"recipient" means "Empfänger" in German.',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'true',
    explanation: 'recipient → Empfänger.',
  },
  {
    id: 'ex-eng-internet-06',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Which symbol is called "underscore" in English?',
    options: [
      { id: 'a', text: '_' },
      { id: 'b', text: '/' },
      { id: 'c', text: '.' },
    ],
    correctAnswer: 'a',
    explanation: 'underscore → Unterstrich (_). slash → Schrägstrich (/). dot → Punkt (.).',
  },
  {
    id: 'ex-eng-internet-07',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'What device measures orientation/movement and is listed alongside GPS in mobile technology?',
    options: [
      { id: 'a', text: 'accelerometer' },
      { id: 'b', text: 'e-book reader' },
      { id: 'c', text: 'calculator' },
    ],
    correctAnswer: 'a',
    explanation: 'accelerometer → Beschleunigungssensor.',
  },
  {
    id: 'ex-eng-internet-08',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'easy',
    question: 'What single word means "aktualisieren" as in "the ____ button" on a browser?',
    correctAnswer: 'refresh',
    explanation: 'refresh → aktualisieren; the refresh button → die Aktualisieren-Schaltfläche.',
  },
]

export const internetWebVocabularyTopic: Topic = {
  id: 'topic-eng-grundlagen-internet-vocabulary',
  slug: TOPIC_SLUG,
  moduleSlug: 'it-english-grundlagen',
  title: 'Internet & Web Vocabulary',
  shortIntro: 'Vokabular rund um Internet, Browser und mobile Geräte.',
  order: 6,
  keyPoints: [
    'a wireless network = ein drahtloses Netzwerk.',
    'follow a link = einem Link folgen; browse websites = im Internet surfen.',
    'A GPS is a device that shows your location.',
    'Mobile-Geräte-Vokabular: accelerometer, GPS, e-book reader, battery recharger.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Internet Vocabulary' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['address', 'Adresse'],
        ['button', 'Schaltfläche / Taste'],
        ['file', 'Datei'],
        ['link', 'Link / Verknüpfung'],
        ['network', 'Netzwerk'],
        ['password', 'Passwort'],
        ['website', 'Website / Webseite'],
        ['wireless', 'drahtlos'],
        ['web address', 'Webadresse'],
        ['recipient', 'Empfänger'],
        ['battery', 'Akku / Batterie'],
        ['refresh', 'aktualisieren'],
        ['browser', 'Browser'],
        ['GPS', 'GPS'],
        ['tablet', 'Tablet'],
        ['server', 'Server'],
      ],
    },
    { type: 'heading', level: 3, text: 'Common Word Combinations' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['a wireless network', 'ein drahtloses Netzwerk'],
        ['a web address', 'eine Webadresse'],
        ['enter an address', 'eine Adresse eingeben'],
        ['follow a link', 'einem Link folgen'],
        ['browse websites', 'Websites durchsuchen / im Internet surfen'],
        ["the recipient's address", 'die Adresse des Empfängers'],
        ['short battery life', 'kurze Akkulaufzeit'],
        ['the refresh button', 'die Aktualisieren-Schaltfläche'],
      ],
    },

    { type: 'heading', level: 2, text: 'Mobile / Internet Technology' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['back button', 'Zurück-Schaltfläche'],
        ['bookmarks bar', 'Lesezeichenleiste'],
        ['tab', 'Tab / Registerkarte'],
        ['check', 'überprüfen'],
        ['forward', 'vorwärts'],
        ['send', 'senden'],
        ['stream', 'streamen / übertragen'],
        ['browser', 'Browser'],
        ['local area', 'lokaler Bereich'],
        ['virtual private', 'virtuell privat'],
        ['wireless', 'drahtlos'],
        ['accelerometer', 'Beschleunigungssensor'],
        ['GPS', 'GPS'],
        ['printer', 'Drucker'],
        ['battery recharger', 'Akkuladegerät'],
        ['calculator', 'Taschenrechner'],
        ['calendar', 'Kalender'],
        ['e-book reader', 'E-Book-Reader'],
        ['dot', 'Punkt'],
        ['number', 'Nummer'],
        ['slash', 'Schrägstrich'],
        ['underscore', 'Unterstrich'],
      ],
    },
    {
      type: 'note',
      text: 'A GPS is a device that shows your location. → Ein GPS ist ein Gerät, das deinen Standort anzeigt. With a tablet and the right software, you can access your data anywhere. → Mit einem Tablet und der richtigen Software kannst du überall auf deine Daten zugreifen.',
    },
    {
      type: 'exam-tip',
      text: '"local area" (LAN) und "virtual private" (VPN) tauchen als Wortbausteine in zusammengesetzten Fachbegriffen auf – achte in Prüfungsfragen auf diese Kombinationen.',
    },
  ],
}
