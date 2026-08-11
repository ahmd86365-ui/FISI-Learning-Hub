import type { Exercise, Topic } from '../../types/content'

/**
 * Source: IT_Englisch.md, Lesson 10 "CYBERSECURITY" (lines 1799–1837).
 * IT_Englisch.md is the sole source of truth — nothing here contradicts or
 * extends its vocabulary or example sentences. Exercises are original
 * practice questions applying exactly the terms and sentences given in
 * that source.
 */

const TOPIC_SLUG = 'cybersecurity'

const exercises: Exercise[] = [
  {
    id: 'ex-eng-fisi-security-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the English term for "Schadsoftware"?',
    options: [
      { id: 'a', text: 'malware' },
      { id: 'b', text: 'threat' },
      { id: 'c', text: 'vulnerability' },
    ],
    correctAnswer: 'a',
    explanation: 'malware — Schadsoftware.',
  },
  {
    id: 'ex-eng-fisi-security-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the German translation of "phishing"?',
    options: [
      { id: 'a', text: 'Phishing' },
      { id: 'b', text: 'Verschlüsselung' },
      { id: 'c', text: 'Angriff' },
    ],
    correctAnswer: 'a',
    explanation: 'phishing — Phishing.',
  },
  {
    id: 'ex-eng-fisi-security-03',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'What does "multi-factor authentication" mean in German?',
    options: [
      { id: 'a', text: 'Mehrfaktor-Authentifizierung' },
      { id: 'b', text: 'Zugriffskontrolle' },
      { id: 'c', text: 'Sicherheitsupdate' },
    ],
    correctAnswer: 'a',
    explanation: 'multi-factor authentication — Mehrfaktor-Authentifizierung.',
  },
  {
    id: 'ex-eng-fisi-security-04',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: '"The firewall blocks unauthorized traffic." means "Die Firewall blockiert nicht autorisierten Datenverkehr."',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'true',
    explanation: 'The firewall blocks unauthorized traffic. → Die Firewall blockiert nicht autorisierten Datenverkehr.',
  },
  {
    id: 'ex-eng-fisi-security-05',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'medium',
    question: 'Complete: "The password must be changed ____."',
    correctAnswer: 'regularly',
    explanation: 'The password must be changed regularly. → Das Passwort muss regelmäßig geändert werden.',
  },
  {
    id: 'ex-eng-fisi-security-06',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'What is the German translation of "vulnerability"?',
    options: [
      { id: 'a', text: 'Schwachstelle' },
      { id: 'b', text: 'Risiko' },
      { id: 'c', text: 'Bedrohung' },
    ],
    correctAnswer: 'a',
    explanation: 'vulnerability — Schwachstelle.',
  },
  {
    id: 'ex-eng-fisi-security-07',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Which English term means "Autorisierung"?',
    options: [
      { id: 'a', text: 'authorization' },
      { id: 'b', text: 'authentication' },
      { id: 'c', text: 'encryption' },
    ],
    correctAnswer: 'a',
    explanation: 'authorization — Autorisierung (compare: authentication — Authentifizierung).',
  },
  {
    id: 'ex-eng-fisi-security-08',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'medium',
    question: 'Complete: "The system must be protected against unauthorized ____."',
    correctAnswer: 'access',
    explanation: 'The system must be protected against unauthorized access. → Das System muss vor unbefugtem Zugriff geschützt werden.',
  },
]

export const cybersecurityTopic: Topic = {
  id: 'topic-eng-fisi-cybersecurity',
  slug: TOPIC_SLUG,
  moduleSlug: 'technical-english-fisi',
  title: 'Cybersecurity',
  shortIntro: 'Englisches Fachvokabular für IT-Sicherheit – von Bedrohungen und Angriffen bis zu Schutzmaßnahmen.',
  order: 9,
  keyPoints: [
    'malware, virus, ransomware und phishing sind die wichtigsten Bedrohungsarten (threats).',
    'authentication (Authentifizierung) und authorization (Autorisierung) sind unterschiedliche Konzepte.',
    'encryption (Verschlüsselung) und access control (Zugriffskontrolle) schützen Systeme und Daten.',
    'Passwörter müssen regelmäßig geändert werden ("The password must be changed regularly.").',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Cybersecurity Vocabulary' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['cybersecurity', 'Cybersicherheit / IT-Sicherheit'],
        ['security', 'Sicherheit'],
        ['threat', 'Bedrohung'],
        ['attack', 'Angriff'],
        ['malware', 'Schadsoftware'],
        ['virus', 'Virus'],
        ['ransomware', 'Ransomware'],
        ['phishing', 'Phishing'],
        ['password', 'Passwort'],
        ['authentication', 'Authentifizierung'],
        ['authorization', 'Autorisierung'],
        ['encryption', 'Verschlüsselung'],
        ['vulnerability', 'Schwachstelle'],
        ['risk', 'Risiko'],
        ['firewall', 'Firewall'],
        ['antivirus software', 'Antivirensoftware'],
        ['security update', 'Sicherheitsupdate'],
        ['access control', 'Zugriffskontrolle'],
        ['multi-factor authentication', 'Mehrfaktor-Authentifizierung'],
      ],
    },
    { type: 'heading', level: 3, text: 'Important Sentences' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['The system must be protected against unauthorized access.', 'Das System muss vor unbefugtem Zugriff geschützt werden.'],
        ['The password must be changed regularly.', 'Das Passwort muss regelmäßig geändert werden.'],
        ['The software contains a security vulnerability.', 'Die Software enthält eine Sicherheitslücke.'],
        ['The firewall blocks unauthorized traffic.', 'Die Firewall blockiert nicht autorisierten Datenverkehr.'],
      ],
    },
    {
      type: 'key-points',
      items: [
        'threat, attack, malware, virus, ransomware, phishing — die wichtigsten Bedrohungs- und Angriffsarten.',
        'authentication vs. authorization — Authentifizierung (Identität prüfen) vs. Autorisierung (Rechte vergeben).',
        'encryption, firewall, antivirus software, access control — zentrale Schutzmaßnahmen.',
        'security update und multi-factor authentication reduzieren Risiken (risk) und Schwachstellen (vulnerability).',
      ],
    },
    {
      type: 'exam-tip',
      text: 'Verwechsle in der Prüfung nicht "authentication" (Authentifizierung – wer bist du?) und "authorization" (Autorisierung – was darfst du?). Beide Begriffe tauchen häufig zusammen auf.',
    },
  ],
}
