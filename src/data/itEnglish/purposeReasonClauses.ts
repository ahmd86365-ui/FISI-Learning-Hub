import type { Exercise, Topic } from '../../types/content'

/**
 * Source: IT_Englisch.md, Unit 2, Lesson 5 (To / For / So / Because).
 * IT_Englisch.md is the sole source of truth — nothing here contradicts
 * or extends its rules or examples. Exercises are original practice
 * questions applying exactly the grammar patterns given in that source.
 */

const TOPIC_SLUG = 'purpose-reason-to-for-so-because'

const exercises: Exercise[] = [
  {
    id: 'ex-eng-purpose-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Complete: "I use a hard drive ____ back up my data." (purpose, + verb)',
    options: [
      { id: 'a', text: 'to' },
      { id: 'b', text: 'for' },
      { id: 'c', text: 'because' },
    ],
    correctAnswer: 'a',
    explanation: 'to + verb expresses purpose: I use a hard drive to back up my data.',
  },
  {
    id: 'ex-eng-purpose-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Complete: "I back up my data ____ security." (purpose, + noun)',
    options: [
      { id: 'a', text: 'to' },
      { id: 'b', text: 'for' },
      { id: 'c', text: 'so that' },
    ],
    correctAnswer: 'b',
    explanation: 'for + noun expresses purpose: I back up my data for security.',
  },
  {
    id: 'ex-eng-purpose-03',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: "Complete: \"I use open-source software ____ it's free.\" (reason)",
    options: [
      { id: 'a', text: 'because' },
      { id: 'b', text: 'for' },
      { id: 'c', text: 'to' },
    ],
    correctAnswer: 'a',
    explanation: "because + clause expresses a reason: I use open-source software because it's free.",
  },
  {
    id: 'ex-eng-purpose-04',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Complete: "I use a webcam ____ I can make video calls." (result/purpose)',
    options: [
      { id: 'a', text: 'so that' },
      { id: 'b', text: 'because' },
      { id: 'c', text: 'for' },
    ],
    correctAnswer: 'a',
    explanation: 'so that + subject + can/will... expresses a result/purpose: I use a webcam so that I can make video calls.',
  },
  {
    id: 'ex-eng-purpose-05',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'hard',
    question: 'Which pattern correctly follows "for"?',
    options: [
      { id: 'a', text: 'for + noun (for security, for work)' },
      { id: 'b', text: 'for + verb (for back up)' },
    ],
    correctAnswer: 'a',
    explanation: 'for is followed by a noun: for security, for work, for different purposes.',
  },
  {
    id: 'ex-eng-purpose-06',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: '"because" is followed directly by a noun, not by a subject + verb clause.',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'false',
    explanation: 'because is followed by subject + verb: "because it\'s free", "because security is important".',
  },
  {
    id: 'ex-eng-purpose-07',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'easy',
    question: 'Which two-word connector is used before "verb" to express purpose (e.g. "___ install", "___ maximise")?',
    correctAnswer: 'to',
    explanation: 'to + verb: to back up, to install, to maximise, to move.',
  },
]

export const purposeReasonClausesTopic: Topic = {
  id: 'topic-eng-grundlagen-purpose-reason',
  slug: TOPIC_SLUG,
  moduleSlug: 'it-english-grundlagen',
  title: 'Purpose & Reason: To / For / So / Because',
  shortIntro: 'Vier Wege, um Zweck und Grund auf Englisch auszudrücken – wichtig für technische Erklärungen.',
  order: 5,
  keyPoints: [
    'to + verb = Zweck: "I use a hard drive to back up my data."',
    'for + noun = Zweck: "I back up my data for security."',
    "because + clause = Grund: \"I use open-source software because it's free.\"",
    'so / so that + clause = Ergebnis/Zweck: "I use a webcam so that I can make video calls."',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Vier Wege, Zweck und Grund auszudrücken' },
    {
      type: 'paragraph',
      text: 'In technischen Erklärungen musst du oft begründen, WOZU etwas verwendet wird oder WARUM eine Entscheidung getroffen wurde. Dafür gibt es vier feste Muster.',
    },
    {
      type: 'table',
      headers: ['Struktur', 'Funktion', 'Beispiel (English)', 'Deutsch'],
      rows: [
        ['to + verb', 'Zweck', 'I use a hard drive to back up my data.', 'Ich benutze eine Festplatte, um meine Daten zu sichern.'],
        ['for + noun', 'Zweck', 'I back up my data for security.', 'Ich sichere meine Daten aus Sicherheitsgründen.'],
        ["because + clause", 'Grund', "I use open-source software because it's free.", 'Ich benutze Open-Source-Software, weil sie kostenlos ist.'],
        ['so / so that + clause', 'Ergebnis / Zweck', 'I use a webcam so that I can make video calls.', 'Ich benutze eine Webcam, damit ich Videoanrufe machen kann.'],
      ],
    },
    {
      type: 'key-points',
      items: [
        'to + verb: to back up, to install, to maximise, to move.',
        'for + noun: for security, for work, for different purposes.',
        "because + subject + verb: because it's free, because security is important.",
        'so that + subject + can/will...: so that I can show video, so that I can make calls.',
      ],
    },
    {
      type: 'exam-tip',
      text: 'Die häufigste Prüfungsfalle: "for" + Verb statt Nomen (falsch) oder "to" + Nomen statt Verb (falsch). Merke: to + VERB, for + NOMEN.',
    },
  ],
}
