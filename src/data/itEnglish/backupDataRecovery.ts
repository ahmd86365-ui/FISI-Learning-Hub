import type { Exercise, Topic } from '../../types/content'

/**
 * Source: IT_Englisch.md, Lesson 11 "BACKUPS & DATA RECOVERY" (lines
 * 1839–1870). IT_Englisch.md is the sole source of truth — nothing here
 * contradicts or extends its vocabulary or example sentences. Exercises
 * are original practice questions applying exactly the terms and
 * sentences given in that source.
 */

const TOPIC_SLUG = 'backup-data-recovery'

const exercises: Exercise[] = [
  {
    id: 'ex-eng-fisi-backup-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the German translation of "restore"?',
    options: [
      { id: 'a', text: 'wiederherstellen' },
      { id: 'b', text: 'speichern' },
      { id: 'c', text: 'löschen' },
    ],
    correctAnswer: 'a',
    explanation: 'restore — wiederherstellen.',
  },
  {
    id: 'ex-eng-fisi-backup-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the English term for "Wiederherstellungspunkt"?',
    options: [
      { id: 'a', text: 'restore point' },
      { id: 'b', text: 'backup copy' },
      { id: 'c', text: 'retention' },
    ],
    correctAnswer: 'a',
    explanation: 'restore point — Wiederherstellungspunkt.',
  },
  {
    id: 'ex-eng-fisi-backup-03',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: '"The data is backed up every night." means "Die Daten werden jede Nacht gesichert."',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'true',
    explanation: 'The data is backed up every night. → Die Daten werden jede Nacht gesichert.',
  },
  {
    id: 'ex-eng-fisi-backup-04',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'medium',
    question: 'Complete: "We need to ____ the backup."',
    correctAnswer: 'restore',
    explanation: 'We need to restore the backup. → Wir müssen das Backup wiederherstellen.',
  },
  {
    id: 'ex-eng-fisi-backup-05',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'What is the German translation of "disaster recovery"?',
    options: [
      { id: 'a', text: 'Notfallwiederherstellung' },
      { id: 'b', text: 'Datenverlust' },
      { id: 'c', text: 'Aufbewahrung' },
    ],
    correctAnswer: 'a',
    explanation: 'disaster recovery — Notfallwiederherstellung.',
  },
  {
    id: 'ex-eng-fisi-backup-06',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'easy',
    question: 'Complete: "Always ____ your backups."',
    correctAnswer: 'test',
    explanation: 'Always test your backups. → Teste deine Backups immer.',
  },
  {
    id: 'ex-eng-fisi-backup-07',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: '"The backup failed." means "Das Backup ist fehlgeschlagen."',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'true',
    explanation: 'The backup failed. → Das Backup ist fehlgeschlagen.',
  },
  {
    id: 'ex-eng-fisi-backup-08',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the German translation of "redundant"?',
    options: [
      { id: 'a', text: 'redundant' },
      { id: 'b', text: 'wiederherstellen' },
      { id: 'c', text: 'gesichert' },
    ],
    correctAnswer: 'a',
    explanation: 'redundant — redundant.',
  },
]

export const backupDataRecoveryTopic: Topic = {
  id: 'topic-eng-fisi-backup',
  slug: TOPIC_SLUG,
  moduleSlug: 'technical-english-fisi',
  title: 'Backups & Data Recovery',
  shortIntro: 'Englisches Fachvokabular für Datensicherung und Datenwiederherstellung.',
  order: 10,
  keyPoints: [
    'backup / backup copy und restore / recovery sind die zentralen Begriffspaare dieses Themas.',
    'Ein restore point (Wiederherstellungspunkt) ermöglicht das Zurücksetzen auf einen früheren Zustand.',
    'disaster recovery (Notfallwiederherstellung) plant den Umgang mit größerem data loss (Datenverlust).',
    'Regel aus dem Kurs: "Always test your backups." – Backups müssen regelmäßig getestet werden.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Backups & Data Recovery Vocabulary' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['backup', 'Sicherung / Backup'],
        ['backup copy', 'Sicherungskopie'],
        ['restore', 'wiederherstellen'],
        ['recovery', 'Wiederherstellung'],
        ['data loss', 'Datenverlust'],
        ['backup server', 'Backup-Server'],
        ['backup software', 'Backup-Software'],
        ['storage', 'Speicher'],
        ['retention', 'Aufbewahrung'],
        ['restore point', 'Wiederherstellungspunkt'],
        ['disaster recovery', 'Notfallwiederherstellung'],
        ['redundant', 'redundant'],
      ],
    },
    { type: 'heading', level: 3, text: 'Important Sentences' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['The data is backed up every night.', 'Die Daten werden jede Nacht gesichert.'],
        ['We need to restore the backup.', 'Wir müssen das Backup wiederherstellen.'],
        ['The backup failed.', 'Das Backup ist fehlgeschlagen.'],
        ['Always test your backups.', 'Teste deine Backups immer.'],
      ],
    },
    {
      type: 'key-points',
      items: [
        'backup, backup copy, backup server, backup software — Vokabular rund um die Sicherung selbst.',
        'restore und recovery — beide bedeuten Wiederherstellung, restore ist das Verb, recovery das Substantiv.',
        'retention (Aufbewahrung) beschreibt, wie lange Backups gespeichert bleiben.',
        'disaster recovery und redundant beschreiben Vorsorge gegen größere Ausfälle.',
      ],
    },
    {
      type: 'exam-tip',
      text: 'Der Satz "Always test your backups." ist ein häufig zitierter IT-Grundsatz – ein Backup, das nie getestet wurde, ist im Ernstfall keine Garantie für erfolgreiche Wiederherstellung.',
    },
  ],
}
