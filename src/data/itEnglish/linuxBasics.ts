import type { Exercise, Topic } from '../../types/content'

/**
 * Source: IT_Englisch.md, Lesson 9 "LINUX" (lines 1749–1797). IT_Englisch.md
 * is the sole source of truth — nothing here contradicts or extends its
 * vocabulary or example sentences. Exercises are original practice
 * questions applying exactly the terms and sentences given in that source.
 */

const TOPIC_SLUG = 'linux-basics'

const exercises: Exercise[] = [
  {
    id: 'ex-eng-fisi-linux-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the English term for "Verzeichnis"?',
    options: [
      { id: 'a', text: 'directory' },
      { id: 'b', text: 'file' },
      { id: 'c', text: 'repository' },
    ],
    correctAnswer: 'a',
    explanation: 'directory — Verzeichnis.',
  },
  {
    id: 'ex-eng-fisi-linux-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Which Linux command is used to list files?',
    options: [
      { id: 'a', text: 'ls' },
      { id: 'b', text: 'cd' },
      { id: 'c', text: 'rm' },
    ],
    correctAnswer: 'a',
    explanation: 'ls — list files.',
  },
  {
    id: 'ex-eng-fisi-linux-03',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Which Linux command is used to change permissions?',
    options: [
      { id: 'a', text: 'chmod' },
      { id: 'b', text: 'grep' },
      { id: 'c', text: 'mv' },
    ],
    correctAnswer: 'a',
    explanation: 'chmod — change permissions.',
  },
  {
    id: 'ex-eng-fisi-linux-04',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: '"sudo" is used to execute a command with elevated privileges.',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'true',
    explanation: 'sudo — execute with elevated privileges.',
  },
  {
    id: 'ex-eng-fisi-linux-05',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'easy',
    question: 'Complete: "Open the ____."',
    correctAnswer: 'terminal',
    explanation: 'Open the terminal. → Öffne das Terminal.',
  },
  {
    id: 'ex-eng-fisi-linux-06',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'What is the German translation of "root" in the Linux context?',
    options: [
      { id: 'a', text: 'Root / Administrator' },
      { id: 'b', text: 'Besitzer' },
      { id: 'c', text: 'Prozess' },
    ],
    correctAnswer: 'a',
    explanation: 'root — Root / Administrator.',
  },
  {
    id: 'ex-eng-fisi-linux-07',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Which Linux command is used to manage services?',
    options: [
      { id: 'a', text: 'systemctl' },
      { id: 'b', text: 'pwd' },
      { id: 'c', text: 'cat' },
    ],
    correctAnswer: 'a',
    explanation: 'systemctl — manage services.',
  },
  {
    id: 'ex-eng-fisi-linux-08',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: '"The service is not running." means "Der Dienst läuft nicht."',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'true',
    explanation: 'The service is not running. → Der Dienst läuft nicht.',
  },
]

export const linuxBasicsTopic: Topic = {
  id: 'topic-eng-fisi-linux',
  slug: TOPIC_SLUG,
  moduleSlug: 'technical-english-fisi',
  title: 'Linux',
  shortIntro: 'Englisches Fachvokabular und die wichtigsten Kommandozeilen-Befehle für Linux-Systeme.',
  order: 8,
  keyPoints: [
    'command line, terminal und shell sind die grundlegenden Begriffe für die Linux-Konsole.',
    'Befehle wie ls, cd, mkdir, cp, mv und rm dienen der Datei- und Verzeichnisverwaltung.',
    'sudo führt Befehle mit erhöhten Rechten (elevated privileges) aus, chmod ändert Berechtigungen.',
    'systemctl verwaltet Dienste (services) – wichtig, wenn "The service is not running."',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Linux Vocabulary' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['command line', 'Kommandozeile'],
        ['terminal', 'Terminal'],
        ['shell', 'Shell'],
        ['directory', 'Verzeichnis'],
        ['file', 'Datei'],
        ['permission', 'Berechtigung'],
        ['owner', 'Besitzer'],
        ['root', 'Root / Administrator'],
        ['process', 'Prozess'],
        ['package', 'Paket'],
        ['repository', 'Repository'],
        ['service', 'Dienst'],
        ['configuration file', 'Konfigurationsdatei'],
        ['log file', 'Protokolldatei'],
      ],
    },
    { type: 'heading', level: 3, text: 'Commands' },
    {
      type: 'code',
      language: 'bash',
      code: `ls          # list files
cd          # change directory
pwd         # show current directory
mkdir       # create directory
cp          # copy
mv          # move / rename
rm          # remove
cat         # display file
grep        # search text
sudo        # execute with elevated privileges
chmod       # change permissions
systemctl   # manage services`,
    },
    { type: 'heading', level: 3, text: 'Useful Sentences' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['Open the terminal.', 'Öffne das Terminal.'],
        ['Navigate to the configuration directory.', 'Wechsle in das Konfigurationsverzeichnis.'],
        ['Check the log file.', 'Überprüfe die Protokolldatei.'],
        ['The service is not running.', 'Der Dienst läuft nicht.'],
      ],
    },
    {
      type: 'key-points',
      items: [
        'command line, terminal, shell — die drei Grundbegriffe für die Linux-Konsole.',
        'directory, file, permission, owner, root — Grundvokabular der Dateiverwaltung.',
        'Die zwölf Befehle (ls, cd, pwd, mkdir, cp, mv, rm, cat, grep, sudo, chmod, systemctl) decken die wichtigsten Alltagsaufgaben ab.',
        'package, repository und service betreffen Softwareverwaltung und Dienste.',
      ],
    },
    {
      type: 'note',
      text: 'Die Befehle selbst sind international gleich (ls bleibt ls) – in der Prüfung zählt vor allem, dass du die englische Kurzbeschreibung jedes Befehls (z. B. "list files", "change permissions") sicher zuordnen kannst.',
    },
  ],
}
