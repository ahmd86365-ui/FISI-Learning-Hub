import type { Exercise, Topic } from '../../types/content'

/**
 * Source: WISO.md, section "37. FUSION". WISO.md is the sole source of
 * truth — nothing here contradicts or extends its facts. Exercises are
 * original IHK-style practice questions, including the explicit "bedeutet
 * nicht automatisch" exam traps named in the source.
 */

const TOPIC_SLUG = 'fusion'

const exercises: Exercise[] = [
  {
    id: 'ex-wiso-fusion-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Was ist eine Fusion?',
    options: [
      { id: 'a', text: 'Der Zusammenschluss von zwei oder mehreren Unternehmen' },
      { id: 'b', text: 'Die Auflösung eines Unternehmens' },
      { id: 'c', text: 'Der Verkauf eines einzelnen Geschäftsbereichs' },
    ],
    correctAnswer: 'a',
    explanation: 'Eine Fusion ist der Zusammenschluss von zwei oder mehreren Unternehmen.',
  },
  {
    id: 'ex-wiso-fusion-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Was bedeutet Rationalisierung?',
    options: [
      { id: 'a', text: 'Arbeitsabläufe und Ressourcen werden effizienter gestaltet, um Kosten zu senken oder die Leistung zu verbessern' },
      { id: 'b', text: 'Ein Unternehmen wird komplett geschlossen' },
      { id: 'c', text: 'Die Steuerlast eines Unternehmens sinkt automatisch' },
    ],
    correctAnswer: 'a',
    explanation: 'Rationalisierung bedeutet, dass Arbeitsabläufe und Ressourcen effizienter gestaltet werden, um Kosten zu senken oder die Leistung zu verbessern.',
  },
  {
    id: 'ex-wiso-fusion-03',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: 'Eine Fusion führt automatisch zu einer geringeren Umsatzsteuer.',
    options: [
      { id: 'wahr', text: 'Wahr' },
      { id: 'falsch', text: 'Falsch' },
    ],
    correctAnswer: 'falsch',
    explanation: 'Eine Fusion bedeutet nicht automatisch eine geringere Umsatzsteuer.',
  },
  {
    id: 'ex-wiso-fusion-04',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: 'Eine Fusion bedeutet automatisch eine Änderung der Rechtsform.',
    options: [
      { id: 'wahr', text: 'Wahr' },
      { id: 'falsch', text: 'Falsch' },
    ],
    correctAnswer: 'falsch',
    explanation: 'Eine Fusion bedeutet nicht automatisch eine Änderung der Rechtsform.',
  },
  {
    id: 'ex-wiso-fusion-05',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Welche Auswirkung wird als mögliche Folge einer Fusion genannt?',
    options: [
      { id: 'a', text: 'Größere Kapitalbasis' },
      { id: 'b', text: 'Automatische staatliche Prämien' },
      { id: 'c', text: 'Direkte Aufsicht durch das Bundeswirtschaftsministerium' },
    ],
    correctAnswer: 'a',
    explanation: 'Mögliche Auswirkungen einer Fusion sind u. a. Rationalisierung, Kosteneinsparungen, größere Kapitalbasis, bessere Finanzierungsmöglichkeiten und stärkere Marktposition.',
  },
]

export const fusionTopic: Topic = {
  id: 'topic-wiso-fusion',
  slug: TOPIC_SLUG,
  moduleSlug: 'wiso',
  title: 'Fusion',
  shortIntro: 'Der Zusammenschluss von Unternehmen und seine möglichen – und unwahrscheinlichen – Auswirkungen.',
  order: 20,
  keyPoints: [
    'Fusion = Zusammenschluss von zwei oder mehreren Unternehmen.',
    'Rationalisierung = effizientere Arbeitsabläufe und Ressourcen zur Kostensenkung oder Leistungsverbesserung.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Was ist eine Fusion?' },
    {
      type: 'paragraph',
      text: 'Eine Fusion ist der Zusammenschluss von zwei oder mehreren Unternehmen.',
    },
    {
      type: 'paragraph',
      text: 'Mögliche Auswirkungen:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: ['Rationalisierung', 'Kosteneinsparungen', 'größere Kapitalbasis', 'bessere Finanzierungsmöglichkeiten', 'stärkere Marktposition'],
    },
    {
      type: 'note',
      text: 'Rationalisierung bedeutet: Arbeitsabläufe und Ressourcen werden effizienter gestaltet, um Kosten zu senken oder die Leistung zu verbessern.',
    },
    {
      type: 'exam-tip',
      text: 'Eine Fusion bedeutet nicht automatisch: geringere Umsatzsteuer, Änderung der Rechtsform, staatliche Prämien, direkte Aufsicht durch das Bundeswirtschaftsministerium.',
    },
  ],
}
