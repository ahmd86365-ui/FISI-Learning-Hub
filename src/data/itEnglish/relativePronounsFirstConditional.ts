import type { Exercise, Topic } from '../../types/content'

/**
 * Source: IT_Englisch.md, Unit 3, Lesson 3 (Relative Pronouns), Lesson 4
 * (First Conditional) and Lesson 5 (Internet Sentences). IT_Englisch.md is
 * the sole source of truth — nothing here contradicts or extends its
 * rules or examples. Exercises are original practice questions applying
 * exactly the grammar patterns given in that source.
 */

const TOPIC_SLUG = 'relative-pronouns-first-conditional'

const exercises: Exercise[] = [
  {
    id: 'ex-eng-rel-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Which relative pronoun is used for people?',
    options: [
      { id: 'who', text: 'who' },
      { id: 'which', text: 'which' },
      { id: 'where', text: 'where' },
    ],
    correctAnswer: 'who',
    explanation: 'who = people. The person who looks after the servers.',
  },
  {
    id: 'ex-eng-rel-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Which relative pronoun is used for places?',
    options: [
      { id: 'where', text: 'where' },
      { id: 'which', text: 'which' },
      { id: 'that', text: 'that' },
    ],
    correctAnswer: 'where',
    explanation: 'where = places. The office where I work.',
  },
  {
    id: 'ex-eng-rel-03',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Which relative pronoun can be used for BOTH people and things?',
    options: [
      { id: 'that', text: 'that' },
      { id: 'who', text: 'who' },
      { id: 'where', text: 'where' },
    ],
    correctAnswer: 'that',
    explanation: 'that = people / things. A device that shows your location.',
  },
  {
    id: 'ex-eng-rel-04',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Complete: "The internet is a network ____ covers the world."',
    options: [
      { id: 'which', text: 'which' },
      { id: 'who', text: 'who' },
      { id: 'where', text: 'where' },
    ],
    correctAnswer: 'which',
    explanation: 'which is usually used for things: The internet is a network which covers the world.',
  },
  {
    id: 'ex-eng-rel-05',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'hard',
    question: 'Which sentence uses the First Conditional correctly?',
    options: [
      { id: 'a', text: "If you follow a link, you'll go to another web page." },
      { id: 'b', text: 'If you will follow a link, you go to another web page.' },
    ],
    correctAnswer: 'a',
    explanation: "Form: If + Present Simple, will + base verb. Correct: 'If you follow...'. NOT: 'If you will follow...'.",
  },
  {
    id: 'ex-eng-rel-06',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Complete: "If we buy some tablets soon, we ____ enough money."',
    options: [
      { id: 'a', text: "'ll have" },
      { id: 'b', text: 'have' },
      { id: 'c', text: 'will bought' },
    ],
    correctAnswer: 'a',
    explanation: "After the comma: will + base verb → we'll have.",
  },
  {
    id: 'ex-eng-rel-07',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: 'In the First Conditional, the clause after "if" uses "will".',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'false',
    explanation: "After IF: Present Simple (not 'will'). After the comma: will + base verb.",
  },
  {
    id: 'ex-eng-rel-08',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Complete: "He\'s the person ____ looks after the servers."',
    options: [
      { id: 'who', text: 'who' },
      { id: 'which', text: 'which' },
      { id: 'where', text: 'where' },
    ],
    correctAnswer: 'who',
    explanation: "He's the person who looks after the servers. → Er ist die Person, die sich um die Server kümmert.",
  },
]

export const relativePronounsFirstConditionalTopic: Topic = {
  id: 'topic-eng-grundlagen-relative-conditional',
  slug: TOPIC_SLUG,
  moduleSlug: 'it-english-grundlagen',
  title: 'Relative Pronouns & First Conditional',
  shortIntro: 'who / which / that / where sowie der erste Konditionalsatz – anhand von Internet-Beispielsätzen.',
  order: 7,
  keyPoints: [
    'who = people, which = things, that = people/things, where = places.',
    'First Conditional: If + Present Simple, will + base verb.',
    "After IF: Present Simple. NOT: 'If you will follow...'",
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Relative Pronouns' },
    {
      type: 'table',
      headers: ['Pronoun', 'Used for', 'Example', 'Deutsch'],
      rows: [
        ['who', 'people', 'The person who looks after the servers.', 'Die Person, die sich um die Server kümmert.'],
        ['which', 'usually things', 'The network which covers the world.', 'Das Netzwerk, das die Welt abdeckt.'],
        ['that', 'people or things', 'A device that shows your location.', 'Ein Gerät, das deinen Standort anzeigt.'],
        ['where', 'places', 'The office where I work.', 'Das Büro, in dem ich arbeite.'],
      ],
    },
    {
      type: 'key-points',
      items: ['who = people', 'which = things', 'that = people / things', 'where = places'],
    },

    { type: 'heading', level: 2, text: 'First Conditional' },
    {
      type: 'paragraph',
      text: 'FORM: If + Present Simple, will + base verb.',
    },
    {
      type: 'example',
      title: 'Example',
      text: "If you follow a link, you'll go to another web page. → Wenn du einem Link folgst, wirst du zu einer anderen Webseite gelangen.",
    },
    {
      type: 'example',
      title: 'Another example',
      text: "If we buy some tablets soon, we'll have enough money.",
    },
    {
      type: 'warning',
      text: "After IF: Present Simple. NOT: 'If you will follow...' Correct: 'If you follow...' After the comma: will + base verb (you'll go, you'll need, we'll have).",
    },

    { type: 'heading', level: 2, text: 'Internet Sentences' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['The internet is a network which covers the world.', 'Das Internet ist ein Netzwerk, das die Welt abdeckt.'],
        ['I\'m learning how to develop websites.', 'Ich lerne, wie man Websites entwickelt.'],
        ['A GPS is a device that shows your location.', 'Ein GPS ist ein Gerät, das deinen Standort anzeigt.'],
        ['He\'s the person who looks after the servers.', 'Er ist die Person, die sich um die Server kümmert.'],
        ['If you follow a link, you\'ll go to another web page.', 'Wenn du einem Link folgst, gelangst du zu einer anderen Webseite.'],
        [
          'With a tablet and the right software, you can access your data anywhere.',
          'Mit einem Tablet und der richtigen Software kannst du überall auf deine Daten zugreifen.',
        ],
      ],
    },
    {
      type: 'exam-tip',
      text: 'Kombiniere beide Grammatikthemen bewusst: Relativsätze beschreiben WAS/WER etwas ist, First Conditional beschreibt WAS PASSIERT, WENN etwas eintritt. Beide Muster tauchen häufig in denselben Prüfungssätzen auf.',
    },
  ],
}
