import type { Exercise, Topic } from '../../types/content'

/**
 * Source: WISO.md, section "3. SOZIALE MARKTWIRTSCHAFT". WISO.md is the
 * sole source of truth — nothing here contradicts or extends its facts.
 * Exercises are original IHK-style practice questions, including the two
 * explicit "bedeutet NICHT" exam traps named in the source.
 */

const TOPIC_SLUG = 'soziale-marktwirtschaft'

const exercises: Exercise[] = [
  {
    id: 'ex-wiso-smw-01',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: 'Die soziale Marktwirtschaft bedeutet, dass der Staat alle Preise bestimmt.',
    options: [
      { id: 'wahr', text: 'Wahr' },
      { id: 'falsch', text: 'Falsch' },
    ],
    correctAnswer: 'falsch',
    explanation: 'Soziale Marktwirtschaft bedeutet NICHT, dass der Staat alle Preise bestimmt.',
  },
  {
    id: 'ex-wiso-smw-02',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: 'Der Staat unterstützt in der sozialen Marktwirtschaft grundsätzlich Monopole und Kartelle.',
    options: [
      { id: 'wahr', text: 'Wahr' },
      { id: 'falsch', text: 'Falsch' },
    ],
    correctAnswer: 'falsch',
    explanation: 'Soziale Marktwirtschaft bedeutet auch NICHT, dass der Staat grundsätzlich Monopole und Kartelle unterstützt.',
  },
  {
    id: 'ex-wiso-smw-03',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Welches Ziel soll durch sozialen Ausgleich und solidarische Hilfe erreicht werden?',
    options: [
      { id: 'chancen', text: 'Chancengleichheit' },
      { id: 'monopol', text: 'Monopolbildung' },
      { id: 'preisbindung', text: 'Staatliche Preisbindung' },
    ],
    correctAnswer: 'chancen',
    explanation: 'Durch sozialen Ausgleich und solidarische Hilfe soll Chancengleichheit erreicht werden – ein zentraler Gedanke der sozialen Marktwirtschaft.',
  },
  {
    id: 'ex-wiso-smw-04',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Welche zwei Grundprinzipien verbindet die soziale Marktwirtschaft?',
    options: [
      { id: 'a', text: 'Freie Marktwirtschaft + sozialer Ausgleich' },
      { id: 'b', text: 'Planwirtschaft + Monopolbildung' },
      { id: 'c', text: 'Zölle + Subventionen' },
    ],
    correctAnswer: 'a',
    explanation: 'Die soziale Marktwirtschaft verbindet freie Marktwirtschaft mit sozialem Ausgleich.',
  },
  {
    id: 'ex-wiso-smw-05',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Was gehört NICHT zu den Aufgaben des Staates in der sozialen Marktwirtschaft?',
    options: [
      { id: 'a', text: 'Wettbewerb schützen' },
      { id: 'b', text: 'Arbeitnehmer schützen' },
      { id: 'c', text: 'Alle Preise selbst festlegen' },
    ],
    correctAnswer: 'c',
    explanation: 'Der Staat schützt Wettbewerb, gewährleistet soziale Sicherheit und schützt Arbeitnehmer – er legt aber nicht alle Preise selbst fest.',
  },
  {
    id: 'ex-wiso-smw-06',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Welche der folgenden Grundideen gehört zur sozialen Marktwirtschaft?',
    options: [
      { id: 'a', text: 'Vertragsfreiheit' },
      { id: 'b', text: 'Staatliche Preisfestsetzung' },
      { id: 'c', text: 'Förderung von Kartellen' },
    ],
    correctAnswer: 'a',
    explanation: 'Vertragsfreiheit gehört zu den Grundideen der sozialen Marktwirtschaft, ebenso Wettbewerb, freie Preisbildung und Privateigentum.',
  },
]

export const sozialeMarktwirtschaftTopic: Topic = {
  id: 'topic-wiso-soziale-marktwirtschaft',
  slug: TOPIC_SLUG,
  moduleSlug: 'wiso',
  title: 'Soziale Marktwirtschaft',
  shortIntro: 'Freie Marktwirtschaft und sozialer Ausgleich – und die Aufgaben des Staates.',
  order: 3,
  keyPoints: [
    'Soziale Marktwirtschaft = freie Marktwirtschaft + sozialer Ausgleich.',
    'Durch sozialen Ausgleich und solidarische Hilfe soll Chancengleichheit erreicht werden.',
    'Soziale Marktwirtschaft bedeutet NICHT: Der Staat bestimmt alle Preise.',
    'Soziale Marktwirtschaft bedeutet NICHT: Der Staat unterstützt grundsätzlich Monopole und Kartelle.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Grundidee' },
    {
      type: 'paragraph',
      text: 'Die soziale Marktwirtschaft verbindet freie Marktwirtschaft mit sozialem Ausgleich.',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        'Wettbewerb',
        'freie Preisbildung',
        'Privateigentum',
        'Vertragsfreiheit',
        'wirtschaftliche Freiheit',
        'soziale Absicherung',
        'sozialer Ausgleich',
        'Chancengleichheit',
      ],
    },

    { type: 'heading', level: 2, text: 'Aufgabe des Staates' },
    {
      type: 'paragraph',
      text: 'Die Aufgabe des Staates besteht unter anderem darin:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        'Wettbewerb zu schützen',
        'soziale Sicherheit zu gewährleisten',
        'Arbeitnehmer zu schützen',
        'soziale Unterschiede auszugleichen',
        'wirtschaftliche Rahmenbedingungen zu schaffen',
      ],
    },

    { type: 'heading', level: 2, text: 'Häufige Prüfungsfallen' },
    {
      type: 'exam-tip',
      text: 'Soziale Marktwirtschaft bedeutet NICHT, dass der Staat alle Preise bestimmt. Sie bedeutet auch NICHT, dass der Staat grundsätzlich Monopole und Kartelle unterstützt.',
    },
    {
      type: 'paragraph',
      text: 'Eine wichtige Aussage: Durch sozialen Ausgleich und solidarische Hilfe soll Chancengleichheit erreicht werden. Das ist ein zentraler Gedanke der sozialen Marktwirtschaft.',
    },
  ],
}
