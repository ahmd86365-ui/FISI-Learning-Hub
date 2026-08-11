import type { Exercise, Topic } from '../../types/content'

/**
 * Source: WISO.md, sections "13. VOLLMACHTEN IM BETRIEB" through
 * "19. REIHENFOLGE DER VOLLMACHTEN" (Prokura, Einzel-/Gesamtprokura,
 * Handlungsvollmacht, Artvollmacht, Einzelvollmacht — merged into one
 * lesson, all being types of Vollmacht ordered by scope). WISO.md is the
 * sole source of truth — nothing here contradicts or extends its facts.
 * Exercises are original IHK-style practice questions.
 */

const TOPIC_SLUG = 'vollmachten-im-betrieb'

const exercises: Exercise[] = [
  {
    id: 'ex-wiso-voll-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Welche der vier Vollmachten ist vom Umfang her am weitreichendsten?',
    options: [
      { id: 'prokura', text: 'Prokura' },
      { id: 'handlung', text: 'Handlungsvollmacht' },
      { id: 'einzel', text: 'Einzelvollmacht' },
    ],
    correctAnswer: 'prokura',
    explanation: 'Die Reihenfolge vom Umfang her: Prokura → Handlungsvollmacht → Artvollmacht → Einzelvollmacht. Die Prokura ist am weitreichendsten.',
  },
  {
    id: 'ex-wiso-voll-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Welche Vollmacht gilt für ein einzelnes, konkret bestimmtes Rechtsgeschäft?',
    options: [
      { id: 'prokura', text: 'Prokura' },
      { id: 'art', text: 'Artvollmacht' },
      { id: 'einzel', text: 'Einzelvollmacht' },
    ],
    correctAnswer: 'einzel',
    explanation: 'Eine Einzelvollmacht gilt für ein einzelnes, konkret bestimmtes Rechtsgeschäft. Nach dessen Erledigung ist die Vollmacht grundsätzlich erledigt.',
  },
  {
    id: 'ex-wiso-voll-03',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Was bedeutet „Einzelprokura"?',
    options: [
      { id: 'a', text: 'Ein Prokurist darf allein unterschreiben' },
      { id: 'b', text: 'Mehrere Prokuristen müssen gemeinsam unterschreiben' },
    ],
    correctAnswer: 'a',
    explanation: 'Einzelprokura = allein. Gesamtprokura = gemeinsam.',
  },
  {
    id: 'ex-wiso-voll-04',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Was bedeutet „Gesamtprokura"?',
    options: [
      { id: 'a', text: 'Ein Prokurist darf allein unterschreiben' },
      { id: 'b', text: 'Mehrere Prokuristen müssen gemeinsam handeln bzw. unterschreiben' },
    ],
    correctAnswer: 'b',
    explanation: 'Gesamtprokura bedeutet, dass mehrere Prokuristen gemeinsam handeln bzw. gemeinsam unterschreiben müssen.',
  },
  {
    id: 'ex-wiso-voll-05',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Wofür steht die Unterschrift „ppa."?',
    options: [
      { id: 'a', text: 'per procura' },
      { id: 'b', text: 'per Post absenden' },
      { id: 'c', text: 'privat und persönlich autorisiert' },
    ],
    correctAnswer: 'a',
    explanation: '„ppa." steht für „per procura" und kennzeichnet die Unterschrift eines Prokuristen.',
  },
  {
    id: 'ex-wiso-voll-06',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: 'Ein Prokurist darf das Unternehmen selbst veräußern.',
    options: [
      { id: 'wahr', text: 'Wahr' },
      { id: 'falsch', text: 'Falsch' },
    ],
    correctAnswer: 'falsch',
    explanation: 'Die Prokura hat Grenzen: Ein Prokurist darf beispielsweise nicht einfach das Unternehmen selbst veräußern oder die Prokura an eine andere Person weitergeben.',
  },
  {
    id: 'ex-wiso-voll-07',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Welche Vollmacht erlaubt die Vornahme gewöhnlicher Geschäfte, die im jeweiligen Geschäftsbetrieb vorkommen?',
    options: [
      { id: 'prokura', text: 'Prokura' },
      { id: 'handlung', text: 'Handlungsvollmacht' },
      { id: 'einzel', text: 'Einzelvollmacht' },
    ],
    correctAnswer: 'handlung',
    explanation: 'Die Handlungsvollmacht ist weniger weitreichend als die Prokura und erlaubt gewöhnliche Geschäfte des jeweiligen Geschäftsbetriebs.',
  },
  {
    id: 'ex-wiso-voll-08',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'hard',
    question: 'Ein Mitarbeiter darf regelmäßig Waren einkaufen, hat aber nicht automatisch die Vollmacht für alle anderen Geschäfte des Unternehmens. Um welche Vollmacht handelt es sich?',
    options: [
      { id: 'handlung', text: 'Handlungsvollmacht' },
      { id: 'art', text: 'Artvollmacht' },
      { id: 'einzel', text: 'Einzelvollmacht' },
    ],
    correctAnswer: 'art',
    explanation: 'Eine Artvollmacht berechtigt zu einer bestimmten Art von Geschäften – genau dieses Beispiel aus WISO.md.',
  },
]

export const vollmachtenTopic: Topic = {
  id: 'topic-wiso-vollmachten',
  slug: TOPIC_SLUG,
  moduleSlug: 'wiso',
  title: 'Vollmachten im Betrieb',
  shortIntro: 'Prokura, Handlungsvollmacht, Artvollmacht und Einzelvollmacht – vom weitesten bis zum engsten Umfang.',
  order: 11,
  keyPoints: [
    'Prokura = sehr weitreichende Vollmacht.',
    'Handlungsvollmacht = gewöhnliche Geschäfte.',
    'Artvollmacht = bestimmte Art von Geschäften.',
    'Einzelvollmacht = ein einzelnes konkretes Geschäft.',
    'Einzelprokura = allein, Gesamtprokura = gemeinsam.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Was ist eine Vollmacht?' },
    {
      type: 'paragraph',
      text: 'Eine Vollmacht bedeutet: Eine Person wird berechtigt, im Namen eines anderen bzw. eines Unternehmens Rechtsgeschäfte vorzunehmen.',
    },
    {
      type: 'list',
      style: 'numbered',
      items: ['Prokura', 'Handlungsvollmacht', 'Artvollmacht', 'Einzelvollmacht'],
    },

    { type: 'heading', level: 2, text: 'Prokura' },
    {
      type: 'paragraph',
      text: 'Die Prokura ist eine besonders weitreichende handelsrechtliche Vollmacht. Der Prokurist darf grundsätzlich sehr viele Geschäfte für das Unternehmen vornehmen.',
    },
    {
      type: 'list',
      style: 'bullet',
      items: ['Verträge abschließen', 'Waren kaufen', 'Waren verkaufen', 'das Unternehmen in vielen Geschäften vertreten'],
    },
    {
      type: 'paragraph',
      text: 'Die Prokura hat aber Grenzen. Ein Prokurist darf beispielsweise nicht einfach das Unternehmen selbst veräußern oder die Prokura an eine andere Person weitergeben.',
    },
    {
      type: 'paragraph',
      text: 'Die Prokura wird vom dazu Berechtigten erteilt und in das Handelsregister eingetragen. Die Eintragung hat grundsätzlich deklaratorische Bedeutung.',
    },

    { type: 'heading', level: 3, text: 'Einzelprokura und Gesamtprokura' },
    {
      type: 'table',
      headers: ['Einzelprokura', 'Gesamtprokura'],
      rows: [['Ein Prokurist darf allein unterschreiben.', 'Mehrere Prokuristen müssen gemeinsam handeln bzw. gemeinsam unterschreiben.']],
    },
    {
      type: 'note',
      text: 'Die Unterschrift eines Prokuristen lautet „ppa.", das steht für „per procura".',
    },

    { type: 'heading', level: 2, text: 'Handlungsvollmacht' },
    {
      type: 'paragraph',
      text: 'Die Handlungsvollmacht ist weniger weitreichend als die Prokura. Sie erlaubt grundsätzlich die Vornahme gewöhnlicher Geschäfte, die im jeweiligen Geschäftsbetrieb vorkommen.',
    },
    {
      type: 'list',
      style: 'bullet',
      items: ['Waren bestellen', 'Kunden betreuen', 'gewöhnliche Verträge abschließen'],
    },
    {
      type: 'paragraph',
      text: 'Bestimmte außergewöhnliche Rechtsgeschäfte sind nicht automatisch von der Handlungsvollmacht umfasst.',
    },

    { type: 'heading', level: 2, text: 'Artvollmacht' },
    {
      type: 'paragraph',
      text: 'Eine Artvollmacht berechtigt zu einer bestimmten Art von Geschäften.',
    },
    {
      type: 'example',
      text: 'Ein Mitarbeiter darf regelmäßig Waren einkaufen. Er hat aber nicht automatisch die Vollmacht, alle anderen Geschäfte des Unternehmens vorzunehmen.',
    },

    { type: 'heading', level: 2, text: 'Einzelvollmacht' },
    {
      type: 'paragraph',
      text: 'Eine Einzelvollmacht gilt für ein einzelnes, konkret bestimmtes Rechtsgeschäft.',
    },
    {
      type: 'example',
      text: 'Ein Mitarbeiter erhält die Vollmacht, einmal einen bestimmten Computer oder ein bestimmtes Fahrzeug zu kaufen. Nach Erledigung dieses Geschäfts ist die Vollmacht grundsätzlich erledigt.',
    },

    { type: 'heading', level: 2, text: 'Reihenfolge der Vollmachten' },
    { type: 'illustration', component: 'vollmachten-hierarchy', caption: 'Vom Umfang her: Prokura → Handlungsvollmacht → Artvollmacht → Einzelvollmacht.' },
    {
      type: 'exam-tip',
      text: 'Prokura = sehr weit. Handlungsvollmacht = gewöhnliche Geschäfte. Artvollmacht = bestimmte Art. Einzelvollmacht = einzelnes Geschäft.',
    },
  ],
}
