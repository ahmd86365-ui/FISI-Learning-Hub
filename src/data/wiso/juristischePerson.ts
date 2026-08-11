import type { Exercise, Topic } from '../../types/content'

/**
 * Source: WISO.md, sections "11. JURISTISCHE PERSON" and "12.
 * HANDELSREGISTER" (merged into one lesson — the Handelsregister is where
 * a juristische Person like the GmbH is registered). WISO.md is the sole
 * source of truth — nothing here contradicts or extends its facts.
 * Exercises are original IHK-style practice questions.
 */

const TOPIC_SLUG = 'juristische-person'

const exercises: Exercise[] = [
  {
    id: 'ex-wiso-jp-01',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: 'Eine GmbH ist eine juristische Person.',
    options: [
      { id: 'wahr', text: 'Wahr' },
      { id: 'falsch', text: 'Falsch' },
    ],
    correctAnswer: 'wahr',
    explanation: 'Die GmbH ist eine juristische Person – eine rechtlich selbstständige Organisation.',
  },
  {
    id: 'ex-wiso-jp-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Was ist eine natürliche Person?',
    options: [
      { id: 'a', text: 'Ein Mensch' },
      { id: 'b', text: 'Eine rechtlich selbstständige Organisation' },
    ],
    correctAnswer: 'a',
    explanation: 'Eine natürliche Person ist ein Mensch. Eine juristische Person ist dagegen eine rechtlich selbstständige Organisation, z. B. eine GmbH.',
  },
  {
    id: 'ex-wiso-jp-03',
    topicSlug: TOPIC_SLUG,
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welche der folgenden Aussagen treffen auf eine juristische Person zu? (Mehrfachauswahl)',
    options: [
      { id: 'a', text: 'Sie kann Verträge schließen' },
      { id: 'b', text: 'Sie kann Vermögen besitzen' },
      { id: 'c', text: 'Sie kann vor Gericht auftreten' },
      { id: 'd', text: 'Sie ist immer ein Mensch' },
    ],
    correctAnswer: ['a', 'b', 'c'],
    explanation: 'Eine juristische Person kann Rechte und Pflichten haben, Verträge schließen, Vermögen besitzen, vor Gericht auftreten, verklagt werden und selbst klagen. Sie ist gerade kein Mensch – das ist die natürliche Person.',
  },
  {
    id: 'ex-wiso-jp-04',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'In welcher Abteilung des Handelsregisters werden Personengesellschaften wie OHG und KG eingetragen?',
    options: [
      { id: 'hra', text: 'Abteilung A (HRA)' },
      { id: 'hrb', text: 'Abteilung B (HRB)' },
    ],
    correctAnswer: 'hra',
    explanation: 'HRA → Personengesellschaften wie OHG, KG und e.K.',
  },
  {
    id: 'ex-wiso-jp-05',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'In welcher Abteilung des Handelsregisters werden Kapitalgesellschaften wie GmbH und AG eingetragen?',
    options: [
      { id: 'hra', text: 'Abteilung A (HRA)' },
      { id: 'hrb', text: 'Abteilung B (HRB)' },
    ],
    correctAnswer: 'hrb',
    explanation: 'HRB → Kapitalgesellschaften wie GmbH, AG und UG.',
  },
  {
    id: 'ex-wiso-jp-06',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Welche Informationen können im Handelsregister stehen?',
    options: [
      { id: 'a', text: 'Firma, Sitz, Rechtsform, Stammkapital, Geschäftsführer, Prokura' },
      { id: 'b', text: 'Nur der aktuelle Jahresumsatz' },
      { id: 'c', text: 'Nur die Anzahl der Mitarbeiter' },
    ],
    correctAnswer: 'a',
    explanation: 'Mögliche Informationen im Handelsregister sind u. a. Firma, Sitz, Rechtsform, Stammkapital, Geschäftsführer, Prokuristen und Prokura.',
  },
]

export const juristischePersonTopic: Topic = {
  id: 'topic-wiso-juristische-person',
  slug: TOPIC_SLUG,
  moduleSlug: 'wiso',
  title: 'Juristische Person und Handelsregister',
  shortIntro: 'Was eine juristische Person auszeichnet – und wie das Handelsregister mit HRA und HRB Unternehmen erfasst.',
  order: 10,
  keyPoints: [
    'Juristische Person ≠ natürliche Person. Natürliche Person = ein Mensch.',
    'Die GmbH ist eine juristische Person.',
    'HRA → Personengesellschaften. HRB → Kapitalgesellschaften.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Juristische Person' },
    {
      type: 'paragraph',
      text: 'Eine juristische Person ist rechtlich selbstständig. Sie kann:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: ['Rechte haben', 'Pflichten haben', 'Verträge schließen', 'Vermögen besitzen', 'vor Gericht auftreten', 'verklagt werden', 'selbst klagen'],
    },
    {
      type: 'paragraph',
      text: 'Die GmbH ist eine juristische Person.',
    },
    {
      type: 'exam-tip',
      text: 'Juristische Person ≠ natürliche Person. Natürliche Person: ein Mensch. Juristische Person: eine rechtlich selbstständige Organisation, zum Beispiel eine GmbH.',
    },

    { type: 'heading', level: 2, text: 'Handelsregister' },
    {
      type: 'paragraph',
      text: 'Das Handelsregister ist ein öffentliches Register, in dem wichtige Informationen über Unternehmen eingetragen werden. Es dient der Information, Transparenz, Rechtssicherheit und dem Schutz von Geschäftspartnern.',
    },
    {
      type: 'table',
      headers: ['Abteilung', 'Rechtsformen'],
      rows: [
        ['Abteilung A (HRA)', 'Personengesellschaften, z. B. OHG, KG, e.K.'],
        ['Abteilung B (HRB)', 'Kapitalgesellschaften, z. B. GmbH, AG, UG'],
      ],
    },
    {
      type: 'note',
      text: 'Merksatz: HRA → Personengesellschaften, HRB → Kapitalgesellschaften.',
    },
    {
      type: 'paragraph',
      text: 'Mögliche Informationen im Handelsregister: Firma, Sitz, Rechtsform, Stammkapital, Geschäftsführer, Prokuristen, Prokura.',
    },
  ],
}
