import type { Exercise, Topic } from '../../types/content'

/**
 * Source: IT_Englisch.md, Lesson 8 "WINDOWS & ACTIVE DIRECTORY" (lines
 * 1712–1747). IT_Englisch.md is the sole source of truth — nothing here
 * contradicts or extends its vocabulary or example sentences. Exercises are
 * original practice questions applying exactly the terms and sentences
 * given in that source.
 */

const TOPIC_SLUG = 'windows-active-directory'

const exercises: Exercise[] = [
  {
    id: 'ex-eng-fisi-winad-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the English term for "Domäne"?',
    options: [
      { id: 'a', text: 'domain' },
      { id: 'b', text: 'directory' },
      { id: 'c', text: 'group' },
    ],
    correctAnswer: 'a',
    explanation: 'domain — Domäne.',
  },
  {
    id: 'ex-eng-fisi-winad-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the German translation of "domain controller"?',
    options: [
      { id: 'a', text: 'Domänencontroller' },
      { id: 'b', text: 'Benutzerkonto' },
      { id: 'c', text: 'Organisationseinheit' },
    ],
    correctAnswer: 'a',
    explanation: 'domain controller — Domänencontroller.',
  },
  {
    id: 'ex-eng-fisi-winad-03',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'What does the abbreviation "OU" stand for in Active Directory?',
    options: [
      { id: 'a', text: 'organizational unit' },
      { id: 'b', text: 'operational user' },
      { id: 'c', text: 'organization update' },
    ],
    correctAnswer: 'a',
    explanation: 'organizational unit (OU) — Organisationseinheit.',
  },
  {
    id: 'ex-eng-fisi-winad-04',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: '"The user account has been locked." means "Das Benutzerkonto wurde gesperrt."',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'true',
    explanation: 'The user account has been locked. → Das Benutzerkonto wurde gesperrt.',
  },
  {
    id: 'ex-eng-fisi-winad-05',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'What is the German translation of "group policy"?',
    options: [
      { id: 'a', text: 'Gruppenrichtlinie' },
      { id: 'b', text: 'Sicherheitsgruppe' },
      { id: 'c', text: 'Zugriffsrechte' },
    ],
    correctAnswer: 'a',
    explanation: 'group policy — Gruppenrichtlinie.',
  },
  {
    id: 'ex-eng-fisi-winad-06',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'medium',
    question: 'Complete: "I need to reset the user\'s ____."',
    correctAnswer: 'password',
    explanation: "I need to reset the user's password. → Ich muss das Passwort des Benutzers zurücksetzen.",
  },
  {
    id: 'ex-eng-fisi-winad-07',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the English term for "Zugriffsrechte"?',
    options: [
      { id: 'a', text: 'access rights' },
      { id: 'b', text: 'permission' },
      { id: 'c', text: 'security group' },
    ],
    correctAnswer: 'a',
    explanation: 'access rights — Zugriffsrechte.',
  },
  {
    id: 'ex-eng-fisi-winad-08',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: '"The computer is joined to the domain." means "Der Computer ist der Domäne beigetreten."',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'true',
    explanation: 'The computer is joined to the domain. → Der Computer ist der Domäne beigetreten.',
  },
]

export const windowsActiveDirectoryTopic: Topic = {
  id: 'topic-eng-fisi-windows-ad',
  slug: TOPIC_SLUG,
  moduleSlug: 'technical-english-fisi',
  title: 'Windows & Active Directory',
  shortIntro: 'Englisches Fachvokabular für Domänen, Benutzerkonten und Berechtigungen in Windows-Umgebungen.',
  order: 7,
  keyPoints: [
    'domain / domain controller sind die Grundbegriffe der Active-Directory-Struktur.',
    'permission (Berechtigung) und access rights (Zugriffsrechte) regeln, wer worauf zugreifen darf.',
    'group policy (Gruppenrichtlinie) steuert Einstellungen zentral über Organisationseinheiten (OU).',
    'Wichtige Sätze wie "The user account has been locked." beschreiben typische Support-Situationen.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Windows & Active Directory Vocabulary' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['domain', 'Domäne'],
        ['domain controller', 'Domänencontroller'],
        ['user account', 'Benutzerkonto'],
        ['administrator account', 'Administratorkonto'],
        ['password', 'Passwort'],
        ['username', 'Benutzername'],
        ['group', 'Gruppe'],
        ['security group', 'Sicherheitsgruppe'],
        ['organizational unit (OU)', 'Organisationseinheit'],
        ['group policy', 'Gruppenrichtlinie'],
        ['permission', 'Berechtigung'],
        ['access rights', 'Zugriffsrechte'],
        ['login', 'Anmeldung'],
        ['log off', 'abmelden'],
        ['lock the computer', 'Computer sperren'],
        ['reset a password', 'Passwort zurücksetzen'],
      ],
    },
    { type: 'heading', level: 3, text: 'Important Sentences' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['The user account has been locked.', 'Das Benutzerkonto wurde gesperrt.'],
        ["I need to reset the user's password.", 'Ich muss das Passwort des Benutzers zurücksetzen.'],
        ['The computer is joined to the domain.', 'Der Computer ist der Domäne beigetreten.'],
        ['The user does not have permission to access this folder.', 'Der Benutzer hat keine Berechtigung, auf diesen Ordner zuzugreifen.'],
      ],
    },
    {
      type: 'key-points',
      items: [
        'domain / domain controller — die zentrale Struktur einer Windows-Netzwerkdomäne.',
        'user account, administrator account, username, password — Grundvokabular für Benutzerverwaltung.',
        'permission und access rights — beide beschreiben Zugriffsrechte auf Ressourcen.',
        'organizational unit (OU) und group policy — zentrale Verwaltung über Gruppenrichtlinien.',
        'login / log off / lock the computer / reset a password — typische Support-Handlungen.',
      ],
    },
    {
      type: 'exam-tip',
      text: 'In der Prüfung werden Support-Situationen oft als vollständiger englischer Satz formuliert (z. B. "The user account has been locked."). Lerne deshalb die Sätze und nicht nur die Einzelvokabeln auswendig.',
    },
  ],
}
