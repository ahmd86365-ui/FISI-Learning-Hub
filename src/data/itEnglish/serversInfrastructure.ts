import type { Exercise, Topic } from '../../types/content'

/**
 * Source: IT_Englisch.md, LESSON 7 – SERVERS (lines 1671-1710).
 * IT_Englisch.md is the sole source of truth — nothing here contradicts or
 * extends its vocabulary or example sentences. Exercises are original
 * practice questions applying exactly the terms and sentences given in
 * that source.
 */

const TOPIC_SLUG = 'servers-infrastructure'

const exercises: Exercise[] = [
  {
    id: 'ex-eng-fisi-servers-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the German translation of "domain controller"?',
    options: [
      { id: 'a', text: 'Domänencontroller' },
      { id: 'b', text: 'Datenbankserver' },
      { id: 'c', text: 'Druckserver' },
    ],
    correctAnswer: 'a',
    explanation: 'domain controller — Domänencontroller.',
  },
  {
    id: 'ex-eng-fisi-servers-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the English term for "Dateiserver"?',
    options: [
      { id: 'a', text: 'file server' },
      { id: 'b', text: 'web server' },
      { id: 'c', text: 'mail server' },
    ],
    correctAnswer: 'a',
    explanation: 'file server — Dateiserver.',
  },
  {
    id: 'ex-eng-fisi-servers-03',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: '"The server is overloaded." means "Der Server ist überlastet."',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'true',
    explanation: 'The server is overloaded. → Der Server ist überlastet.',
  },
  {
    id: 'ex-eng-fisi-servers-04',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'medium',
    question: 'Complete: "We need to restart the ____."',
    correctAnswer: 'service',
    explanation: 'We need to restart the service. → Wir müssen den Dienst neu starten.',
  },
  {
    id: 'ex-eng-fisi-servers-05',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the English term for "Serverraum"?',
    options: [
      { id: 'a', text: 'server room' },
      { id: 'b', text: 'rack' },
      { id: 'c', text: 'server hardware' },
    ],
    correctAnswer: 'a',
    explanation: 'server room — Serverraum.',
  },
  {
    id: 'ex-eng-fisi-servers-06',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'What is the German translation of "rack server"?',
    options: [
      { id: 'a', text: 'Rack-Server' },
      { id: 'b', text: 'Backup-Server' },
      { id: 'c', text: 'Print-Server' },
    ],
    correctAnswer: 'a',
    explanation: 'rack server — Rack-Server.',
  },
  {
    id: 'ex-eng-fisi-servers-07',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: '"print server" means "Mailserver".',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'false',
    explanation: 'print server — Druckserver. mail server — Mailserver.',
  },
  {
    id: 'ex-eng-fisi-servers-08',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'medium',
    question: 'Complete: "The server is running out of disk ____."',
    correctAnswer: 'space',
    explanation: 'The server is running out of disk space. → Auf dem Server geht der Speicherplatz aus.',
  },
]

export const serversInfrastructureTopic: Topic = {
  id: 'topic-eng-fisi-servers',
  slug: TOPIC_SLUG,
  moduleSlug: 'technical-english-fisi',
  title: 'Servers & Server Infrastructure',
  shortIntro: 'Vokabular rund um Server, Serverraum und die verschiedenen Serverarten sowie typische Statusmeldungen.',
  order: 6,
  keyPoints: [
    'Server-Arten unterscheiden sich nach Aufgabe: file server, web server, database server, mail server, print server.',
    'Ein rack server steht im server room in einem rack (Serverschrank).',
    'Typische Statusmeldungen: "The server is running.", "The service has stopped.", "The server is overloaded."',
    'Ressourcenprobleme werden z. B. mit "The server is running out of disk space." beschrieben.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Servers & Server Infrastructure – Vocabulary' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['server', 'Server'],
        ['server room', 'Serverraum'],
        ['rack', 'Rack / Serverschrank'],
        ['rack server', 'Rack-Server'],
        ['server hardware', 'Server-Hardware'],
        ['operating system', 'Betriebssystem'],
        ['service', 'Dienst'],
        ['process', 'Prozess'],
        ['resource', 'Ressource'],
        ['storage', 'Speicher'],
        ['backup server', 'Backup-Server'],
        ['file server', 'Dateiserver'],
        ['web server', 'Webserver'],
        ['database server', 'Datenbankserver'],
        ['mail server', 'Mailserver'],
        ['print server', 'Druckserver'],
        ['domain controller', 'Domänencontroller'],
      ],
    },
    { type: 'heading', level: 3, text: 'Important Sentences' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['The server is running.', 'Der Server läuft.'],
        ['The service has stopped.', 'Der Dienst wurde beendet.'],
        ['The server is overloaded.', 'Der Server ist überlastet.'],
        ['We need to restart the service.', 'Wir müssen den Dienst neu starten.'],
        ['The server is running out of disk space.', 'Auf dem Server geht der Speicherplatz aus.'],
      ],
    },
    {
      type: 'key-points',
      items: [
        'Server werden nach ihrer Funktion benannt: file, web, database, mail, print, backup server.',
        'Ein domain controller verwaltet die Domäne, ein rack server steht physisch im server room.',
        'service (Dienst) und process (Prozess) sind zentrale Begriffe für laufende Server-Software.',
        '"The server is overloaded." und "running out of disk space" beschreiben typische Ressourcenprobleme.',
      ],
    },
    {
      type: 'exam-tip',
      text: 'Verwechsle nicht service (Dienst, z. B. ein laufender Serverprozess) mit server (das physische oder virtuelle Gerät selbst) – beide Begriffe tauchen häufig im selben Satz auf, z. B. "We need to restart the service."',
    },
  ],
}
