import type { Exercise, Topic } from '../../types/content'

/**
 * Source: WISO.md, section "8. GmbH – GESELLSCHAFT MIT BESCHRÄNKTER
 * HAFTUNG" (8.1-8.5: Stammkapital, Gründung, Handelsregister,
 * Geschäftsführer, Haftung). WISO.md is the sole source of truth — nothing
 * here contradicts or extends its facts. Exercises are original IHK-style
 * practice questions, including the explicit "25.000 ≠ 50.000" exam trap.
 */

const TOPIC_SLUG = 'gmbh'

const exercises: Exercise[] = [
  {
    id: 'ex-wiso-gmbh-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Wie hoch ist das gesetzliche Mindeststammkapital einer GmbH?',
    options: [
      { id: 'a', text: '12.500 EUR' },
      { id: 'b', text: '25.000 EUR' },
      { id: 'c', text: '50.000 EUR' },
    ],
    correctAnswer: 'b',
    explanation: 'Das gesetzliche Mindeststammkapital der GmbH beträgt 25.000 EUR. Achtung, IHK-Falle: 25.000 EUR ≠ 50.000 EUR.',
  },
  {
    id: 'ex-wiso-gmbh-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'In welcher Abteilung des Handelsregisters wird eine GmbH eingetragen?',
    options: [
      { id: 'hra', text: 'Abteilung A (HRA)' },
      { id: 'hrb', text: 'Abteilung B (HRB)' },
    ],
    correctAnswer: 'hrb',
    explanation: 'Die GmbH wird als Kapitalgesellschaft im Handelsregister Abteilung B (HRB) eingetragen.',
  },
  {
    id: 'ex-wiso-gmbh-03',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: 'Eine GmbH kann auch von nur einer einzigen Person gegründet werden.',
    options: [
      { id: 'wahr', text: 'Wahr' },
      { id: 'falsch', text: 'Falsch' },
    ],
    correctAnswer: 'wahr',
    explanation: 'Eine GmbH kann auch durch nur eine Person gegründet werden; es können aber auch mehrere Gesellschafter vorhanden sein.',
  },
  {
    id: 'ex-wiso-gmbh-04',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: 'Gesellschafter einer GmbH haften grundsätzlich automatisch mit ihrem gesamten Privatvermögen für die Gesellschaftsschulden.',
    options: [
      { id: 'wahr', text: 'Wahr' },
      { id: 'falsch', text: 'Falsch' },
    ],
    correctAnswer: 'falsch',
    explanation: 'Die Haftung der GmbH ist grundsätzlich auf das Gesellschaftsvermögen beschränkt. Gesellschafter haften grundsätzlich nicht automatisch mit ihrem Privatvermögen.',
  },
  {
    id: 'ex-wiso-gmbh-05',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Wer leitet die GmbH und vertritt sie nach außen?',
    options: [
      { id: 'gf', text: 'Der Geschäftsführer' },
      { id: 'prokurist', text: 'Der Prokurist' },
      { id: 'notar', text: 'Der Notar' },
    ],
    correctAnswer: 'gf',
    explanation: 'Der Geschäftsführer leitet die Gesellschaft und vertritt sie. Ein Gesellschafter kann auch als Geschäftsführer eingesetzt werden.',
  },
  {
    id: 'ex-wiso-gmbh-06',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Was bezeichnet der Begriff „Geschäftsanteil"?',
    options: [
      { id: 'a', text: 'Die Beteiligung eines Gesellschafters an der GmbH' },
      { id: 'b', text: 'Das gesetzlich festgelegte Kapital der GmbH insgesamt' },
    ],
    correctAnswer: 'a',
    explanation: 'Geschäftsanteil = Beteiligung eines Gesellschafters an der GmbH. Das gesetzlich festgelegte Gesamtkapital ist das Stammkapital.',
  },
]

export const gmbhTopic: Topic = {
  id: 'topic-wiso-gmbh',
  slug: TOPIC_SLUG,
  moduleSlug: 'wiso',
  title: 'GmbH – Gesellschaft mit beschränkter Haftung',
  shortIntro: 'Stammkapital, Gründung, Handelsregister, Geschäftsführung und Haftung der GmbH.',
  order: 7,
  keyPoints: [
    'GmbH = Kapitalgesellschaft + 25.000 EUR Mindeststammkapital.',
    'GmbH → Handelsregister Abteilung B (HRB).',
    'Die Haftung ist grundsätzlich auf das Gesellschaftsvermögen beschränkt.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Was ist eine GmbH?' },
    {
      type: 'paragraph',
      text: 'GmbH bedeutet Gesellschaft mit beschränkter Haftung. Die GmbH ist eine Kapitalgesellschaft.',
    },
    {
      type: 'table',
      headers: ['Begriff', 'Bedeutung'],
      rows: [
        ['Gesellschafter', 'Eigentümer / Beteiligte der GmbH'],
        ['Geschäftsführer', 'leitet die Gesellschaft und vertritt sie'],
        ['Stammkapital', 'gesetzlich festgelegtes Kapital der GmbH'],
        ['Geschäftsanteil', 'Beteiligung eines Gesellschafters an der GmbH'],
      ],
    },

    { type: 'heading', level: 3, text: 'Stammkapital' },
    {
      type: 'paragraph',
      text: 'Das gesetzliche Mindeststammkapital der GmbH beträgt 25.000 EUR.',
    },
    {
      type: 'exam-tip',
      text: 'Achtung: 25.000 EUR ≠ 50.000 EUR.',
    },

    { type: 'heading', level: 3, text: 'Gründung' },
    {
      type: 'paragraph',
      text: 'Eine GmbH kann auch durch nur eine Person gegründet werden. Es können aber auch mehrere Gesellschafter vorhanden sein.',
    },
    {
      type: 'paragraph',
      text: 'Für die Gründung sind unter anderem wichtig:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: ['Gesellschaftsvertrag', 'notarielle Beurkundung', 'Stammkapital', 'Eintragung in das Handelsregister'],
    },

    { type: 'heading', level: 3, text: 'Handelsregister' },
    {
      type: 'paragraph',
      text: 'Die GmbH wird im Handelsregister eingetragen: → Handelsregister Abteilung B (HRB).',
    },

    { type: 'heading', level: 3, text: 'Geschäftsführer' },
    {
      type: 'paragraph',
      text: 'Eine GmbH kann einen oder mehrere Geschäftsführer haben. Ein Gesellschafter kann auch als Geschäftsführer eingesetzt werden.',
    },

    { type: 'heading', level: 3, text: 'Haftung' },
    {
      type: 'paragraph',
      text: 'Die GmbH ist grundsätzlich eine Gesellschaft mit beschränkter Haftung. Die Haftung ist grundsätzlich auf das Gesellschaftsvermögen beschränkt.',
    },
    {
      type: 'exam-tip',
      text: 'Gesellschafter haften grundsätzlich nicht automatisch mit ihrem gesamten Privatvermögen für die Gesellschaftsschulden.',
    },
  ],
}
