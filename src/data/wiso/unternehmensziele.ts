import type { Exercise, Topic } from '../../types/content'

/**
 * Source: WISO.md, section "6. UNTERNEHMENSZIELE" (ökonomische, ökologische,
 * soziale Ziele), with the compact Merksatz from section "39. WICHTIGE
 * MERKSÄTZE FÜR DIE PRÜFUNG" folded in as the exam-tip. WISO.md is the sole
 * source of truth — nothing here contradicts or extends its facts.
 * Exercises are original IHK-style practice questions, several reusing the
 * exact classification examples given in the source.
 */

const TOPIC_SLUG = 'unternehmensziele'

const exercises: Exercise[] = [
  {
    id: 'ex-wiso-ziel-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: '„Es sollen ausreichend Gewinne erwirtschaftet werden." Um welche Art von Ziel handelt es sich?',
    options: [
      { id: 'oekonomisch', text: 'Ökonomisches Ziel' },
      { id: 'oekologisch', text: 'Ökologisches Ziel' },
      { id: 'sozial', text: 'Soziales Ziel' },
    ],
    correctAnswer: 'oekonomisch',
    explanation: 'Ökonomische Ziele beziehen sich auf wirtschaftliche Ergebnisse wie Gewinn – das ist genau dieses Beispiel aus WISO.md.',
  },
  {
    id: 'ex-wiso-ziel-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: '„Die CO₂-Emission soll durch den Einbau einer Photovoltaikanlage gesenkt werden." Um welche Art von Ziel handelt es sich?',
    options: [
      { id: 'oekonomisch', text: 'Ökonomisches Ziel' },
      { id: 'oekologisch', text: 'Ökologisches Ziel' },
      { id: 'sozial', text: 'Soziales Ziel' },
    ],
    correctAnswer: 'oekologisch',
    explanation: 'Ökologische Ziele beziehen sich auf Umwelt und Nachhaltigkeit – dazu zählt die Reduktion von CO₂-Emissionen.',
  },
  {
    id: 'ex-wiso-ziel-03',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: '„Die Chancengleichheit von Frauen und Männern wird sichergestellt." Um welche Art von Ziel handelt es sich?',
    options: [
      { id: 'oekonomisch', text: 'Ökonomisches Ziel' },
      { id: 'oekologisch', text: 'Ökologisches Ziel' },
      { id: 'sozial', text: 'Soziales Ziel' },
    ],
    correctAnswer: 'sozial',
    explanation: 'Soziale Ziele beziehen sich auf Menschen, Mitarbeiter und gesellschaftliche Aspekte wie Chancengleichheit.',
  },
  {
    id: 'ex-wiso-ziel-04',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Welches Ziel gehört zu den ökonomischen Zielen eines Unternehmens?',
    options: [
      { id: 'a', text: 'Rentabilität' },
      { id: 'b', text: 'CO₂-Emissionen reduzieren' },
      { id: 'c', text: 'Mitarbeitermotivation' },
    ],
    correctAnswer: 'a',
    explanation: 'Rentabilität ist ein Beispiel für ein ökonomisches Ziel, ebenso Gewinn, Umsatz, Kosten, Finanzierung und Wirtschaftlichkeit.',
  },
  {
    id: 'ex-wiso-ziel-05',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: '„Energie sparen" und „Ressourcen schonen" zählen zu welcher Zielkategorie?',
    options: [
      { id: 'oekonomisch', text: 'Ökonomisch' },
      { id: 'oekologisch', text: 'Ökologisch' },
      { id: 'sozial', text: 'Sozial' },
    ],
    correctAnswer: 'oekologisch',
    explanation: 'Energie sparen und Ressourcen schonen sind Beispiele für ökologische Ziele.',
  },
  {
    id: 'ex-wiso-ziel-06',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: '„Gute Arbeitsbedingungen" und „Mitarbeiterbeteiligung" zählen zu welcher Zielkategorie?',
    options: [
      { id: 'oekonomisch', text: 'Ökonomisch' },
      { id: 'oekologisch', text: 'Ökologisch' },
      { id: 'sozial', text: 'Sozial' },
    ],
    correctAnswer: 'sozial',
    explanation: 'Gute Arbeitsbedingungen und Mitarbeiterbeteiligung sind Beispiele für soziale Ziele.',
  },
]

export const unternehmenszieleTopic: Topic = {
  id: 'topic-wiso-unternehmensziele',
  slug: TOPIC_SLUG,
  moduleSlug: 'wiso',
  title: 'Unternehmensziele',
  shortIntro: 'Ökonomische, ökologische und soziale Ziele – und wie man Beispiele richtig zuordnet.',
  order: 5,
  keyPoints: [
    'Ökonomisches Ziel: Gewinn, Umsatz, Kosten, Rentabilität.',
    'Ökologisches Ziel: Umwelt, CO₂, Nachhaltigkeit.',
    'Soziales Ziel: Mitarbeiter, Gleichberechtigung, Chancengleichheit.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Drei Zielbereiche' },
    {
      type: 'paragraph',
      text: 'Unternehmensziele lassen sich unter anderem in folgende Bereiche einteilen: ökonomische Ziele, ökologische Ziele und soziale Ziele.',
    },

    { type: 'heading', level: 3, text: 'Ökonomische Ziele' },
    {
      type: 'paragraph',
      text: 'Ökonomische Ziele beziehen sich auf wirtschaftliche Ergebnisse.',
    },
    {
      type: 'list',
      style: 'bullet',
      items: ['Gewinn', 'Umsatz', 'Rentabilität', 'Kosten', 'Finanzierung', 'Wirtschaftlichkeit'],
    },
    {
      type: 'example',
      text: '„Es sollen ausreichend Gewinne erwirtschaftet werden." → ökonomisches Ziel.',
    },

    { type: 'heading', level: 3, text: 'Ökologische Ziele' },
    {
      type: 'paragraph',
      text: 'Ökologische Ziele beziehen sich auf Umwelt und Nachhaltigkeit.',
    },
    {
      type: 'list',
      style: 'bullet',
      items: ['CO₂-Emissionen reduzieren', 'Energie sparen', 'Ressourcen schonen', 'Umweltbelastung reduzieren', 'Photovoltaik einsetzen', 'nachhaltige Produktion'],
    },
    {
      type: 'example',
      text: '„Die CO₂-Emission soll durch den Einbau einer Photovoltaikanlage gesenkt werden." → ökologisches Ziel.',
    },

    { type: 'heading', level: 3, text: 'Soziale Ziele' },
    {
      type: 'paragraph',
      text: 'Soziale Ziele beziehen sich auf Menschen, Mitarbeiter und gesellschaftliche Aspekte.',
    },
    {
      type: 'list',
      style: 'bullet',
      items: ['Chancengleichheit', 'Gleichberechtigung', 'Mitarbeitermotivation', 'gute Arbeitsbedingungen', 'Mitarbeiterbeteiligung'],
    },
    {
      type: 'example',
      text: '„Die Chancengleichheit von Frauen und Männern wird sichergestellt." → soziales Ziel.',
    },

    {
      type: 'exam-tip',
      text: 'Merksatz: Ökonomisch = Geld, Ökologisch = Umwelt, Sozial = Menschen.',
    },
  ],
}
