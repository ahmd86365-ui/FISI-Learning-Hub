import type { Exercise, Topic } from '../../types/content'

/**
 * Source: IT_Englisch.md, Lesson 16 "REMOTE ADMINISTRATION" (lines 1999-2026)
 * and Lesson 17 "MONITORING & LOGS" (lines 2028-2058). IT_Englisch.md is the
 * sole source of truth — nothing here contradicts or extends its vocabulary
 * or example sentences. Exercises are original practice questions applying
 * exactly the terms and sentences given in that source.
 */

const TOPIC_SLUG = 'remote-admin-monitoring'

const exercises: Exercise[] = [
  {
    id: 'ex-eng-fisi-remote-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the English term for "Fernzugriff"?',
    options: [
      { id: 'a', text: 'remote access' },
      { id: 'b', text: 'remote session' },
      { id: 'c', text: 'authentication' },
    ],
    correctAnswer: 'a',
    explanation: 'remote access — Fernzugriff.',
  },
  {
    id: 'ex-eng-fisi-remote-02',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'easy',
    question: 'Complete: "I need remote ____ to the server." (Ich benötige Fernzugriff auf den Server.)',
    correctAnswer: 'access',
    explanation: 'I need remote access to the server. → Ich benötige Fernzugriff auf den Server.',
  },
  {
    id: 'ex-eng-fisi-remote-03',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'What is the German translation of "credentials"?',
    options: [
      { id: 'a', text: 'Zugangsdaten' },
      { id: 'b', text: 'Verbindung' },
      { id: 'c', text: 'Sitzung' },
    ],
    correctAnswer: 'a',
    explanation: 'credentials — Zugangsdaten.',
  },
  {
    id: 'ex-eng-fisi-remote-04',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: '"The remote connection has been disconnected." means "Die Remote-Verbindung wurde getrennt."',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'true',
    explanation: 'The remote connection has been disconnected. → Die Remote-Verbindung wurde getrennt.',
  },
  {
    id: 'ex-eng-fisi-remote-05',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the English term for "Speicherauslastung"?',
    options: [
      { id: 'a', text: 'memory usage' },
      { id: 'b', text: 'disk usage' },
      { id: 'c', text: 'CPU usage' },
    ],
    correctAnswer: 'a',
    explanation: 'memory usage — Speicherauslastung.',
  },
  {
    id: 'ex-eng-fisi-remote-06',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'What is the difference between "uptime" and "downtime"?',
    options: [
      { id: 'a', text: 'uptime = Betriebszeit, downtime = Ausfallzeit' },
      { id: 'b', text: 'uptime = Ausfallzeit, downtime = Betriebszeit' },
      { id: 'c', text: 'Both mean the same thing' },
    ],
    correctAnswer: 'a',
    explanation: 'uptime — Betriebszeit. downtime — Ausfallzeit.',
  },
  {
    id: 'ex-eng-fisi-remote-07',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'medium',
    question: 'Complete: "CPU ____ is too high." (Die CPU-Auslastung ist zu hoch.)',
    correctAnswer: 'usage',
    explanation: 'CPU usage is too high. → Die CPU-Auslastung ist zu hoch.',
  },
  {
    id: 'ex-eng-fisi-remote-08',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'What should you check for more information when the monitoring system detects an error?',
    options: [
      { id: 'a', text: 'The event logs' },
      { id: 'b', text: 'The remote session' },
      { id: 'c', text: 'The credentials' },
    ],
    correctAnswer: 'a',
    explanation: 'Check the event logs for more information. → Überprüfe die Ereignisprotokolle für weitere Informationen.',
  },
  {
    id: 'ex-eng-fisi-remote-09',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the English term for "Warnmeldung"?',
    options: [
      { id: 'a', text: 'alert' },
      { id: 'b', text: 'notification' },
      { id: 'c', text: 'warning' },
    ],
    correctAnswer: 'a',
    explanation: 'alert — Warnmeldung.',
  },
  {
    id: 'ex-eng-fisi-remote-10',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: '"reconnect" means "erneut verbinden".',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'true',
    explanation: 'reconnect — erneut verbinden.',
  },
]

export const remoteAdminMonitoringTopic: Topic = {
  id: 'topic-eng-fisi-remote-monitoring',
  slug: TOPIC_SLUG,
  moduleSlug: 'technical-english-fisi',
  title: 'Remote Administration & Monitoring',
  shortIntro: 'Vokabular für Fernzugriff, Remote-Sitzungen sowie das Überwachen von Systemen und Protokollen.',
  order: 13,
  keyPoints: [
    'remote access = Fernzugriff, credentials = Zugangsdaten, authentication = Authentifizierung.',
    'The remote connection has been disconnected. → Die Remote-Verbindung wurde getrennt.',
    'uptime = Betriebszeit, downtime = Ausfallzeit.',
    'The monitoring system detected an error. → Check the event logs for more information.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Remote Administration' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['remote access', 'Fernzugriff'],
        ['remote desktop', 'Remotedesktop'],
        ['remote session', 'Remote-Sitzung'],
        ['administration', 'Administration'],
        ['administrator', 'Administrator'],
        ['credentials', 'Zugangsdaten'],
        ['authentication', 'Authentifizierung'],
        ['connection', 'Verbindung'],
        ['session', 'Sitzung'],
        ['disconnect', 'trennen'],
        ['reconnect', 'erneut verbinden'],
      ],
    },
    { type: 'heading', level: 3, text: 'Useful phrases' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['I need remote access to the server.', 'Ich benötige Fernzugriff auf den Server.'],
        ['Please provide your username.', 'Bitte geben Sie Ihren Benutzernamen an.'],
        ['The remote connection has been disconnected.', 'Die Remote-Verbindung wurde getrennt.'],
      ],
    },
    { type: 'heading', level: 2, text: 'Monitoring & Logs' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['monitoring', 'Überwachung'],
        ['monitor', 'überwachen'],
        ['performance', 'Leistung'],
        ['CPU usage', 'CPU-Auslastung'],
        ['memory usage', 'Speicherauslastung'],
        ['disk usage', 'Festplattenauslastung'],
        ['uptime', 'Betriebszeit'],
        ['downtime', 'Ausfallzeit'],
        ['alert', 'Warnmeldung'],
        ['log', 'Protokoll'],
        ['event log', 'Ereignisprotokoll'],
        ['error message', 'Fehlermeldung'],
        ['warning', 'Warnung'],
        ['notification', 'Benachrichtigung'],
      ],
    },
    { type: 'heading', level: 3, text: 'Important sentences' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['The monitoring system detected an error.', 'Das Monitoring-System hat einen Fehler erkannt.'],
        ['CPU usage is too high.', 'Die CPU-Auslastung ist zu hoch.'],
        ['Check the event logs for more information.', 'Überprüfe die Ereignisprotokolle für weitere Informationen.'],
      ],
    },
    {
      type: 'key-points',
      items: [
        'remote access / remote desktop / remote session — die drei Grundbegriffe der Fernadministration.',
        'credentials (Zugangsdaten) und authentication (Authentifizierung) gehören beim Remote-Zugriff immer zusammen.',
        'uptime vs. downtime ist ein zentrales Begriffspaar beim Monitoring.',
        'Bei einem erkannten Fehler zuerst die event logs prüfen.',
      ],
    },
    {
      type: 'exam-tip',
      text: 'Merke dir das Begriffspaar disconnect/reconnect zusammen mit "The remote connection has been disconnected." — im Fachgespräch wird oft nach dem Vorgehen bei Verbindungsabbrüchen gefragt.',
    },
  ],
}
