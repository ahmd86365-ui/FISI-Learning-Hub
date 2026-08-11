import type { Exercise, Topic } from '../../types/content'

/**
 * Source: IT_Englisch.md, Lesson 20 "PASSIVE VOICE" (lines 2155-2192) and
 * Lesson 21 "MODAL VERBS FOR IT" (lines 2194-2234). IT_Englisch.md is the
 * sole source of truth — nothing here contradicts or extends its rules,
 * examples, or translations. Exercises are original practice questions
 * applying exactly the sentences given in that source.
 */

const TOPIC_SLUG = 'grammar-passive-modals'

const exercises: Exercise[] = [
  {
    id: 'ex-eng-fisi-grammar-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the structure of the passive voice given in the source?',
    options: [
      { id: 'a', text: 'be + past participle' },
      { id: 'b', text: 'have + past participle' },
      { id: 'c', text: 'be + infinitive' },
    ],
    correctAnswer: 'a',
    explanation: 'Passive structure: be + past participle.',
  },
  {
    id: 'ex-eng-fisi-grammar-02',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'medium',
    question: 'Turn the active sentence into the passive one given in the source: "The technician installed the software." → "The software was installed by the ____."',
    correctAnswer: 'technician',
    explanation: 'Active: The technician installed the software. Passive: The software was installed by the technician.',
  },
  {
    id: 'ex-eng-fisi-grammar-03',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the German translation of "The server is configured."?',
    options: [
      { id: 'a', text: 'Der Server wird konfiguriert.' },
      { id: 'b', text: 'Der Server wurde konfiguriert.' },
      { id: 'c', text: 'Der Server ist konfiguriert.' },
    ],
    correctAnswer: 'a',
    explanation: 'The server is configured. → Der Server wird konfiguriert.',
  },
  {
    id: 'ex-eng-fisi-grammar-04',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: '"The user account has been disabled." means "Das Benutzerkonto wurde deaktiviert."',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'true',
    explanation: 'The user account has been disabled. → Das Benutzerkonto wurde deaktiviert.',
  },
  {
    id: 'ex-eng-fisi-grammar-05',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Which modal verb expresses "sollten" (a recommendation)?',
    options: [
      { id: 'a', text: 'should' },
      { id: 'b', text: 'must' },
      { id: 'c', text: 'may' },
    ],
    correctAnswer: 'a',
    explanation: 'should → sollten. You should back up the data. → Du solltest die Daten sichern.',
  },
  {
    id: 'ex-eng-fisi-grammar-06',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'What is the German meaning of "may" as used in "The service may be unavailable."?',
    options: [
      { id: 'a', text: 'dürfen / möglicherweise' },
      { id: 'b', text: 'müssen' },
      { id: 'c', text: 'können' },
    ],
    correctAnswer: 'a',
    explanation: 'may → dürfen / möglicherweise. The service may be unavailable. → Der Dienst ist möglicherweise nicht verfügbar.',
  },
  {
    id: 'ex-eng-fisi-grammar-07',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'easy',
    question: 'Complete: "You ____ change your password." (Du musst dein Passwort ändern.)',
    correctAnswer: 'must',
    explanation: 'You must change your password. → Du musst dein Passwort ändern.',
  },
  {
    id: 'ex-eng-fisi-grammar-08',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'What does "The client cannot connect to the server." mean in German?',
    options: [
      { id: 'a', text: 'Der Client kann keine Verbindung zum Server herstellen.' },
      { id: 'b', text: 'Der Client soll keine Verbindung zum Server herstellen.' },
      { id: 'c', text: 'Der Client darf keine Verbindung zum Server herstellen.' },
    ],
    correctAnswer: 'a',
    explanation: 'cannot / can\'t → nicht können. The client cannot connect to the server. → Der Client kann keine Verbindung zum Server herstellen.',
  },
  {
    id: 'ex-eng-fisi-grammar-09',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Which sentence uses "have to" (müssen) as given in the source?',
    options: [
      { id: 'a', text: 'We have to restart the server.' },
      { id: 'b', text: 'We should restart the server.' },
      { id: 'c', text: 'We may restart the server.' },
    ],
    correctAnswer: 'a',
    explanation: 'have to → müssen. We have to restart the server. → Wir müssen den Server neu starten.',
  },
  {
    id: 'ex-eng-fisi-grammar-10',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'hard',
    question: '"The system has been updated." is an example of the present perfect passive in the source.',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'true',
    explanation: 'The system has been updated. → Das System wurde aktualisiert. (has been + past participle = present perfect passive)',
  },
]

export const grammarPassiveModalsTopic: Topic = {
  id: 'topic-eng-fisi-passive-modals',
  slug: TOPIC_SLUG,
  moduleSlug: 'technical-english-fisi',
  title: 'Grammar for IT: Passive Voice & Modal Verbs',
  shortIntro: 'Das Passiv (be + past participle) und die wichtigsten Modalverben für technische Beschreibungen im IT-Alltag.',
  order: 15,
  keyPoints: [
    'Passiv-Struktur: be + past participle, z. B. "The software is installed."',
    'Aktiv "The technician installed the software." wird zu Passiv "The software was installed by the technician."',
    'must/have to = müssen, should = sollten, can = können, cannot/can\'t = nicht können, may = dürfen/möglicherweise.',
    'Present-Perfect-Passiv (has been + past participle) beschreibt abgeschlossene Systemänderungen: "The system has been updated."',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Passive Voice' },
    {
      type: 'paragraph',
      text: 'Passive structure: be + past participle.',
    },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['The server is configured.', 'Der Server wird konfiguriert.'],
        ['The software is installed.', 'Die Software wird installiert.'],
        ['The account was created.', 'Das Konto wurde erstellt.'],
        ['The system has been updated.', 'Das System wurde aktualisiert.'],
        ['The firewall is configured correctly.', 'Die Firewall ist korrekt konfiguriert.'],
        ['The user account has been disabled.', 'Das Benutzerkonto wurde deaktiviert.'],
        ['The server was restarted.', 'Der Server wurde neu gestartet.'],
      ],
    },
    { type: 'heading', level: 3, text: 'Active vs. Passive' },
    {
      type: 'table',
      headers: ['Active', 'Passive'],
      rows: [['The technician installed the software.', 'The software was installed by the technician.']],
    },
    { type: 'heading', level: 2, text: 'Modal Verbs for IT' },
    {
      type: 'table',
      headers: ['Modal', 'Deutsch', 'Example'],
      rows: [
        ['must', 'müssen', 'You must change your password. → Du musst dein Passwort ändern.'],
        ['have to', 'müssen', 'We have to restart the server. → Wir müssen den Server neu starten.'],
        ['should', 'sollten', 'You should back up the data. → Du solltest die Daten sichern.'],
        ['can', 'können', 'The user can access the server. → Der Benutzer kann auf den Server zugreifen.'],
        [
          'cannot / can\'t',
          'nicht können',
          'The client cannot connect to the server. → Der Client kann keine Verbindung zum Server herstellen.',
        ],
        ['may', 'dürfen / möglicherweise', 'The service may be unavailable. → Der Dienst ist möglicherweise nicht verfügbar.'],
      ],
    },
    {
      type: 'key-points',
      items: [
        'Passiv wird im IT-Deutsch/Englisch genutzt, um den Vorgang statt der handelnden Person zu betonen (z. B. Statusmeldungen, Tickets).',
        'be + past participle: is/was/has been + past participle je nach Zeitform.',
        'must und have to bedeuten beide "müssen", should ist nur eine Empfehlung ("sollten").',
        'may hat zwei Bedeutungen: Erlaubnis (dürfen) oder Möglichkeit (möglicherweise).',
      ],
    },
    {
      type: 'exam-tip',
      text: 'In Tickets und Incident Reports wird fast immer das Passiv verwendet ("The DHCP service was restarted." statt "I restarted the DHCP service.") — trainiere deshalb aktiv das Umformen von Aktiv- in Passivsätze wie im Beispiel "The technician installed the software." → "The software was installed by the technician."',
    },
  ],
}
