import type { Exercise, Topic } from '../../types/content'

/**
 * Source: IT_Englisch.md, Lesson 25 "COMMON IT COLLOCATIONS" (lines
 * 2338-2410, grouped NETWORK/SERVER/USER/DATA), Lesson 26 "IMPORTANT IT
 * PHRASAL VERBS" (lines 2412-2475), and Lesson 27 "NUMBERS, UNITS &
 * TECHNICAL SPECIFICATIONS" (lines 2477-2505). IT_Englisch.md is the sole
 * source of truth — nothing here contradicts or extends its vocabulary or
 * example sentences. Exercises are original practice questions applying
 * exactly the terms and sentences given in that source.
 */

const TOPIC_SLUG = 'collocations-phrasal-verbs-specs'

const exercises: Exercise[] = [
  {
    id: 'ex-eng-fisi-colloc-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Which collocation from the NETWORK group means "ein Netzwerk auf Fehler untersuchen"?',
    options: [
      { id: 'a', text: 'troubleshoot a network' },
      { id: 'b', text: 'secure a network' },
      { id: 'c', text: 'monitor network traffic' },
    ],
    correctAnswer: 'a',
    explanation: 'troubleshoot a network → ein Netzwerk auf Fehler untersuchen.',
  },
  {
    id: 'ex-eng-fisi-colloc-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Which SERVER collocation means "einen Server warten"?',
    options: [
      { id: 'a', text: 'maintain a server' },
      { id: 'b', text: 'restart a server' },
      { id: 'c', text: 'monitor a server' },
    ],
    correctAnswer: 'a',
    explanation: 'maintain a server → einen Server warten.',
  },
  {
    id: 'ex-eng-fisi-colloc-03',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: 'In the USER group, "grant access" means "Zugriff gewähren" and "deny access" means "Zugriff verweigern".',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'true',
    explanation: 'grant access → Zugriff gewähren. deny access → Zugriff verweigern.',
  },
  {
    id: 'ex-eng-fisi-colloc-04',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Which DATA collocation means "Daten wiederherstellen"?',
    options: [
      { id: 'a', text: 'restore data' },
      { id: 'b', text: 'back up data' },
      { id: 'c', text: 'transfer data' },
    ],
    correctAnswer: 'a',
    explanation: 'restore data → Daten wiederherstellen.',
  },
  {
    id: 'ex-eng-fisi-colloc-05',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'easy',
    question: 'Complete the phrasal verb: "____ up" means "einrichten".',
    correctAnswer: 'set',
    explanation: 'set up → einrichten.',
  },
  {
    id: 'ex-eng-fisi-colloc-06',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the English phrasal verb for "sich abmelden"?',
    options: [
      { id: 'a', text: 'log out' },
      { id: 'b', text: 'log in' },
      { id: 'c', text: 'shut down' },
    ],
    correctAnswer: 'a',
    explanation: 'log out → sich abmelden.',
  },
  {
    id: 'ex-eng-fisi-colloc-07',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Which sentence uses the phrasal verb "back up" correctly, according to the source?',
    options: [
      { id: 'a', text: 'Back up the server before making changes.' },
      { id: 'b', text: 'Back up the server after making changes.' },
      { id: 'c', text: 'Back out the server before making changes.' },
    ],
    correctAnswer: 'a',
    explanation: 'Back up the server before making changes. → Sichere den Server, bevor du Änderungen vornimmst.',
  },
  {
    id: 'ex-eng-fisi-colloc-08',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'What does the phrasal verb "carry out" mean?',
    options: [
      { id: 'a', text: 'durchführen' },
      { id: 'b', text: 'nachschlagen / suchen' },
      { id: 'c', text: 'herausfinden' },
    ],
    correctAnswer: 'a',
    explanation: 'carry out → durchführen.',
  },
  {
    id: 'ex-eng-fisi-colloc-09',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'medium',
    question: 'Complete: "The server has 64 ____ of RAM." (Der Server hat 64 GB RAM.)',
    correctAnswer: 'GB',
    explanation: 'The server has 64 GB of RAM. → Der Server hat 64 GB RAM.',
  },
  {
    id: 'ex-eng-fisi-colloc-10',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'What is the English term for "Kapazität"?',
    options: [
      { id: 'a', text: 'capacity' },
      { id: 'b', text: 'speed' },
      { id: 'c', text: 'voltage' },
    ],
    correctAnswer: 'a',
    explanation: 'capacity — Kapazität. The SSD has a capacity of 1 TB. → Die SSD hat eine Kapazität von 1 TB.',
  },
]

export const collocationsPhrasalVerbsSpecsTopic: Topic = {
  id: 'topic-eng-fisi-collocations',
  slug: TOPIC_SLUG,
  moduleSlug: 'technical-english-fisi',
  title: 'IT Collocations, Phrasal Verbs & Technical Specifications',
  shortIntro: 'Feste Wortverbindungen (Network/Server/User/Data), wichtige Phrasal Verbs und Vokabular für technische Daten.',
  order: 17,
  keyPoints: [
    'IT-Collocations gliedern sich in vier Bereiche: NETWORK, SERVER, USER, DATA.',
    'Phrasal Verbs wie set up, log in/out, back up, shut down gehören zum IT-Grundwortschatz.',
    'Back up the server before making changes. → Sichere den Server, bevor du Änderungen vornimmst.',
    'Technische Angaben nutzen feste Einheiten: GB, TB, Gbit/s, GHz.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Common IT Collocations' },
    { type: 'heading', level: 3, text: 'NETWORK' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['configure a network', 'ein Netzwerk konfigurieren'],
        ['connect to a network', 'sich mit einem Netzwerk verbinden'],
        ['troubleshoot a network', 'ein Netzwerk auf Fehler untersuchen'],
        ['monitor network traffic', 'Netzwerkverkehr überwachen'],
        ['secure a network', 'ein Netzwerk absichern'],
      ],
    },
    { type: 'heading', level: 3, text: 'SERVER' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['install a server', 'einen Server installieren'],
        ['configure a server', 'einen Server konfigurieren'],
        ['restart a server', 'einen Server neu starten'],
        ['monitor a server', 'einen Server überwachen'],
        ['maintain a server', 'einen Server warten'],
      ],
    },
    { type: 'heading', level: 3, text: 'USER' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['create a user account', 'ein Benutzerkonto erstellen'],
        ['disable an account', 'ein Konto deaktivieren'],
        ['reset a password', 'ein Passwort zurücksetzen'],
        ['grant access', 'Zugriff gewähren'],
        ['deny access', 'Zugriff verweigern'],
      ],
    },
    { type: 'heading', level: 3, text: 'DATA' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['store data', 'Daten speichern'],
        ['back up data', 'Daten sichern'],
        ['restore data', 'Daten wiederherstellen'],
        ['transfer data', 'Daten übertragen'],
        ['encrypt data', 'Daten verschlüsseln'],
      ],
    },
    { type: 'heading', level: 2, text: 'Important IT Phrasal Verbs' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['set up', 'einrichten'],
        ['log in', 'sich anmelden'],
        ['log out', 'sich abmelden'],
        ['shut down', 'herunterfahren'],
        ['start up', 'starten'],
        ['back up', 'sichern'],
        ['restore', 'wiederherstellen'],
        ['plug in', 'einstecken'],
        ['unplug', 'ausstecken'],
        ['turn on', 'einschalten'],
        ['turn off', 'ausschalten'],
        ['boot up', 'hochfahren'],
        ['look up', 'nachschlagen / suchen'],
        ['find out', 'herausfinden'],
        ['check out', 'überprüfen'],
        ['carry out', 'durchführen'],
      ],
    },
    { type: 'heading', level: 3, text: 'Examples' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['Log in with your username and password.', 'Melde dich mit deinem Benutzernamen und Passwort an.'],
        ['Back up the server before making changes.', 'Sichere den Server, bevor du Änderungen vornimmst.'],
        ['Shut down the computer.', 'Fahre den Computer herunter.'],
      ],
    },
    { type: 'heading', level: 2, text: 'Numbers, Units & Technical Specifications' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['bit', 'Bit'],
        ['byte', 'Byte'],
        ['kilobyte', 'Kilobyte'],
        ['megabyte', 'Megabyte'],
        ['gigabyte', 'Gigabyte'],
        ['terabyte', 'Terabyte'],
        ['megabit per second', 'Megabit pro Sekunde'],
        ['gigahertz', 'Gigahertz'],
        ['voltage', 'Spannung'],
        ['power consumption', 'Stromverbrauch'],
        ['capacity', 'Kapazität'],
        ['speed', 'Geschwindigkeit'],
      ],
    },
    { type: 'heading', level: 3, text: 'Examples' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['The server has 64 GB of RAM.', 'Der Server hat 64 GB RAM.'],
        ['The connection speed is 1 Gbit/s.', 'Die Verbindungsgeschwindigkeit beträgt 1 Gbit/s.'],
        ['The SSD has a capacity of 1 TB.', 'Die SSD hat eine Kapazität von 1 TB.'],
      ],
    },
    {
      type: 'key-points',
      items: [
        'Collocations lernst du am besten gruppiert: NETWORK, SERVER, USER, DATA.',
        'Viele IT-Phrasal-Verbs bilden Gegensatzpaare: log in/log out, turn on/turn off, plug in/unplug.',
        'back up (sichern) und restore (wiederherstellen) gehören inhaltlich zusammen.',
        'Technische Daten werden mit festen Einheiten angegeben: GB, TB, Gbit/s, GHz.',
      ],
    },
    {
      type: 'exam-tip',
      text: 'Lerne Collocations nie als Einzelwort, sondern immer mit ihrem festen Partnerwort (nicht nur "restart", sondern "restart a server") — im Fachgespräch wird oft die passende Kollokation statt einer Übersetzung verlangt.',
    },
  ],
}
