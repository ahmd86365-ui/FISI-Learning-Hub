import type { Exercise, Topic } from '../../types/content'

/**
 * Source: WISO.md, sections "27. ARBEITSSICHERHEIT UND ARBEITSSCHUTZ",
 * "28. GESETZLICHE UNFALLVERSICHERUNG" and "29. BERUFSGENOSSENSCHAFT"
 * (merged into one lesson — the Berufsgenossenschaft is the carrier of the
 * gesetzliche Unfallversicherung described right before it). WISO.md is the
 * sole source of truth — nothing here contradicts or extends its facts.
 * Exercises are original IHK-style practice questions.
 */

const TOPIC_SLUG = 'arbeitssicherheit'

const exercises: Exercise[] = [
  {
    id: 'ex-wiso-arb-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Ab wie vielen Beschäftigten muss laut den behandelten Aufgaben ein Arbeitsschutzausschuss eingerichtet werden?',
    options: [
      { id: 'a', text: 'Mehr als 10 Beschäftigte' },
      { id: 'b', text: 'Mehr als 20 Beschäftigte' },
      { id: 'c', text: 'Mehr als 50 Beschäftigte' },
    ],
    correctAnswer: 'b',
    explanation: 'Bei mehr als 20 Beschäftigten muss ein Arbeitsschutzausschuss (ASA) eingerichtet werden.',
  },
  {
    id: 'ex-wiso-arb-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Wofür steht die Abkürzung ASA?',
    options: [
      { id: 'a', text: 'Arbeitsschutzausschuss' },
      { id: 'b', text: 'Arbeitssicherheitsamt' },
      { id: 'c', text: 'Allgemeiner Sozialausgleich' },
    ],
    correctAnswer: 'a',
    explanation: 'ASA = Arbeitsschutzausschuss.',
  },
  {
    id: 'ex-wiso-arb-03',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Eine Mitarbeiterin stürzt im Materiallager und bricht sich den Fuß. Um welche Art von Unfall handelt es sich?',
    options: [
      { id: 'arbeit', text: 'Arbeitsunfall' },
      { id: 'weg', text: 'Wegeunfall' },
      { id: 'freizeit', text: 'Freizeitunfall' },
    ],
    correctAnswer: 'arbeit',
    explanation: 'Der Unfall passiert während der beruflichen Tätigkeit im Materiallager – das ist ein Arbeitsunfall.',
  },
  {
    id: 'ex-wiso-arb-04',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Eine Auszubildende rutscht auf dem direkten Weg zur Arbeit aus. Um welche Art von Unfall handelt es sich?',
    options: [
      { id: 'arbeit', text: 'Arbeitsunfall' },
      { id: 'weg', text: 'Wegeunfall' },
      { id: 'freizeit', text: 'Freizeitunfall' },
    ],
    correctAnswer: 'weg',
    explanation: 'Ein Unfall auf dem direkten Weg zur oder von der Arbeit ist ein Wegeunfall.',
  },
  {
    id: 'ex-wiso-arb-05',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: 'Ein Unfall in der Freizeit gilt grundsätzlich als Arbeitsunfall.',
    options: [
      { id: 'wahr', text: 'Wahr' },
      { id: 'falsch', text: 'Falsch' },
    ],
    correctAnswer: 'falsch',
    explanation: 'Ein Unfall in der Freizeit ist grundsätzlich kein Arbeitsunfall.',
  },
  {
    id: 'ex-wiso-arb-06',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Wer ist Träger der gesetzlichen Unfallversicherung?',
    options: [
      { id: 'bg', text: 'Die Berufsgenossenschaft' },
      { id: 'drv', text: 'Die Deutsche Rentenversicherung' },
      { id: 'kk', text: 'Die Krankenkasse' },
    ],
    correctAnswer: 'bg',
    explanation: 'Die Berufsgenossenschaft ist Träger der gesetzlichen Unfallversicherung für Unternehmen und Beschäftigte.',
  },
  {
    id: 'ex-wiso-arb-07',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Welche Zuordnung ist richtig?',
    options: [
      { id: 'a', text: 'Berufsgenossenschaft = gesetzliche Unfallversicherung' },
      { id: 'b', text: 'Berufsgenossenschaft = Rentenversicherung' },
      { id: 'c', text: 'Berufsgenossenschaft = Krankenversicherung' },
    ],
    correctAnswer: 'a',
    explanation: 'Berufsgenossenschaft → gesetzliche Unfallversicherung. Nicht verwechseln mit Deutscher Rentenversicherung (Rentenversicherung) oder Krankenkasse (Krankenversicherung).',
  },
]

export const arbeitssicherheitTopic: Topic = {
  id: 'topic-wiso-arbeitssicherheit',
  slug: TOPIC_SLUG,
  moduleSlug: 'wiso',
  title: 'Arbeitssicherheit und Unfallversicherung',
  shortIntro: 'Arbeitsschutz, Arbeitsunfall vs. Wegeunfall, und die Berufsgenossenschaft als Träger der gesetzlichen Unfallversicherung.',
  order: 13,
  keyPoints: [
    'Bei mehr als 20 Beschäftigten muss ein Arbeitsschutzausschuss (ASA) eingerichtet werden.',
    'Arbeitsunfall = Unfall bei der Arbeit. Wegeunfall = Unfall auf dem direkten Arbeitsweg.',
    'Berufsgenossenschaft = gesetzliche Unfallversicherung.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Arbeitssicherheit und Arbeitsschutz' },
    {
      type: 'paragraph',
      text: 'Arbeitssicherheit bedeutet, Beschäftigte vor Gefahren bei der Arbeit zu schützen.',
    },
    {
      type: 'list',
      style: 'bullet',
      items: ['Arbeitsschutz', 'Unfallverhütung', 'Unterweisung', 'Gefährdungen', 'Schutzmaßnahmen'],
    },
    {
      type: 'paragraph',
      text: 'Der Arbeitgeber muss Beschäftigte über Gefahren und Schutzmaßnahmen informieren und unterweisen.',
    },
    {
      type: 'note',
      text: 'Bei mehr als 20 Beschäftigten muss ein Arbeitsschutzausschuss eingerichtet werden. Arbeitsschutzausschuss = ASA.',
    },

    { type: 'heading', level: 2, text: 'Gesetzliche Unfallversicherung' },
    {
      type: 'paragraph',
      text: 'Die gesetzliche Unfallversicherung schützt Beschäftigte insbesondere vor Arbeitsunfällen, Berufskrankheiten und Wegeunfällen.',
    },
    {
      type: 'heading', level: 3, text: 'Arbeitsunfall',
    },
    {
      type: 'paragraph',
      text: 'Ein Arbeitsunfall passiert während der beruflichen Tätigkeit.',
    },
    {
      type: 'example',
      text: 'Eine Mitarbeiterin stürzt im Materiallager und bricht sich den Fuß. → Arbeitsunfall.',
    },
    { type: 'heading', level: 3, text: 'Wegeunfall' },
    {
      type: 'paragraph',
      text: 'Ein Wegeunfall passiert auf dem direkten Weg zur Arbeit oder von der Arbeit nach Hause.',
    },
    {
      type: 'example',
      text: 'Eine Auszubildende rutscht auf dem direkten Weg zur Arbeit aus. → Wegeunfall.',
    },
    {
      type: 'note',
      text: 'Ein Unfall in der Freizeit ist grundsätzlich kein Arbeitsunfall (Freizeitunfall).',
    },

    { type: 'heading', level: 2, text: 'Berufsgenossenschaft' },
    {
      type: 'paragraph',
      text: 'Die Berufsgenossenschaft ist Träger der gesetzlichen Unfallversicherung für Unternehmen und Beschäftigte in ihrem jeweiligen Bereich.',
    },
    {
      type: 'exam-tip',
      text: 'Gesetzliche Unfallversicherung → Berufsgenossenschaft. Nicht verwechseln mit: Deutsche Rentenversicherung → Rentenversicherung. Krankenkasse → Krankenversicherung.',
    },
  ],
}
