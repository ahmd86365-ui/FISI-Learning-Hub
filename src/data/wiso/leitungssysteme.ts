import type { Exercise, Topic } from '../../types/content'

/**
 * Source: WISO.md, sections "20. AUFBAUORGANISATION" through
 * "26. VERGLEICH DER LEITUNGSSYSTEME" (Organigramm, Einlinien-, Mehrlinien-,
 * Stablinien- und Matrixsystem — merged into one lesson covering
 * Aufbauorganisation as a whole). WISO.md is the sole source of truth —
 * nothing here contradicts or extends its facts. Exercises are original
 * IHK-style practice questions.
 */

const TOPIC_SLUG = 'leitungssysteme'

const exercises: Exercise[] = [
  {
    id: 'ex-wiso-leit-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'In welchem Leitungssystem hat jeder Mitarbeiter grundsätzlich nur einen direkten Vorgesetzten?',
    options: [
      { id: 'ein', text: 'Einliniensystem' },
      { id: 'mehr', text: 'Mehrliniensystem' },
      { id: 'matrix', text: 'Matrixorganisation' },
    ],
    correctAnswer: 'ein',
    explanation: 'Beim Einliniensystem hat jeder Mitarbeiter grundsätzlich nur einen direkten Vorgesetzten.',
  },
  {
    id: 'ex-wiso-leit-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'In welchem Leitungssystem kann ein Mitarbeiter Weisungen von mehreren Vorgesetzten erhalten?',
    options: [
      { id: 'ein', text: 'Einliniensystem' },
      { id: 'mehr', text: 'Mehrliniensystem' },
      { id: 'stab', text: 'Stabliniensystem' },
    ],
    correctAnswer: 'mehr',
    explanation: 'Beim Mehrliniensystem kann ein Mitarbeiter Weisungen von mehreren Vorgesetzten erhalten.',
  },
  {
    id: 'ex-wiso-leit-03',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Welches System basiert auf dem Einliniensystem, ergänzt um beratende Stabsstellen?',
    options: [
      { id: 'mehr', text: 'Mehrliniensystem' },
      { id: 'stab', text: 'Stabliniensystem' },
      { id: 'matrix', text: 'Matrixorganisation' },
    ],
    correctAnswer: 'stab',
    explanation: 'Das Stabliniensystem basiert auf einem Einliniensystem und wird durch beratende Stabsstellen ergänzt.',
  },
  {
    id: 'ex-wiso-leit-04',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: 'Stabsstellen haben grundsätzlich Weisungsbefugnis gegenüber den Linienmitarbeitern.',
    options: [
      { id: 'wahr', text: 'Wahr' },
      { id: 'falsch', text: 'Falsch' },
    ],
    correctAnswer: 'falsch',
    explanation: 'Stabsstellen haben grundsätzlich KEINE Weisungsbefugnis gegenüber den Linienmitarbeitern – sie beraten und unterstützen nur.',
  },
  {
    id: 'ex-wiso-leit-05',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Welches Organisationsmodell führt zu einer Doppelunterstellung unter Funktions- und Projektleitung?',
    options: [
      { id: 'ein', text: 'Einliniensystem' },
      { id: 'stab', text: 'Stabliniensystem' },
      { id: 'matrix', text: 'Matrixorganisation' },
    ],
    correctAnswer: 'matrix',
    explanation: 'Die Matrixorganisation verbindet zwei Organisationsdimensionen – Funktionsleitung und Projekt-/Objektleitung – und erzeugt so eine Doppelunterstellung.',
  },
  {
    id: 'ex-wiso-leit-06',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Welcher Nachteil wird typischerweise dem Mehrliniensystem zugeschrieben?',
    options: [
      { id: 'a', text: 'Klare Zuständigkeiten' },
      { id: 'b', text: 'Widersprüchliche Anweisungen' },
      { id: 'c', text: 'Geringe Flexibilität' },
    ],
    correctAnswer: 'b',
    explanation: 'Nachteile des Mehrliniensystems sind u. a. widersprüchliche Anweisungen, Kompetenzkonflikte und hoher Abstimmungsaufwand.',
  },
  {
    id: 'ex-wiso-leit-07',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Welcher Vorteil wird typischerweise dem Einliniensystem zugeschrieben?',
    options: [
      { id: 'a', text: 'Klare Zuständigkeiten und Verantwortlichkeiten' },
      { id: 'b', text: 'Hohe Flexibilität' },
      { id: 'c', text: 'Schnellere fachliche Entscheidungen' },
    ],
    correctAnswer: 'a',
    explanation: 'Vorteile des Einliniensystems sind klare Zuständigkeiten, klare Verantwortlichkeiten, eine übersichtliche Struktur und eindeutige Weisungswege.',
  },
  {
    id: 'ex-wiso-leit-08',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Woran erkennt man ein Mehrliniensystem im Organigramm am schnellsten?',
    options: [
      { id: 'a', text: 'An einer klaren Baumstruktur' },
      { id: 'b', text: 'An mehreren Weisungswegen, die zu einer Stelle führen' },
      { id: 'c', text: 'An einem Netz aus zwei Dimensionen' },
    ],
    correctAnswer: 'b',
    explanation: 'Mehrere Weisungswege, die zu einer Stelle führen, sind das Erkennungsmerkmal des Mehrliniensystems im Organigramm.',
  },
  {
    id: 'ex-wiso-leit-09',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Welches Beispiel für eine Stabsstelle wird in WISO.md genannt?',
    options: [
      { id: 'a', text: 'Rechtsabteilung' },
      { id: 'b', text: 'Vertriebsabteilung' },
      { id: 'c', text: 'Produktionsabteilung' },
    ],
    correctAnswer: 'a',
    explanation: 'Beispiele für Stabsstellen sind u. a. Rechtsabteilung, Assistent der Geschäftsleitung, Qualitätsmanagement und Sicherheitsbeauftragter.',
  },
]

export const leitungssystemeTopic: Topic = {
  id: 'topic-wiso-leitungssysteme',
  slug: TOPIC_SLUG,
  moduleSlug: 'wiso',
  title: 'Aufbauorganisation und Leitungssysteme',
  shortIntro: 'Organigramm, Einlinien-, Mehrlinien-, Stablinien- und Matrixsystem im Vergleich.',
  order: 12,
  keyPoints: [
    'Einliniensystem: ein Mitarbeiter → ein Vorgesetzter.',
    'Mehrliniensystem: ein Mitarbeiter → mehrere Vorgesetzte.',
    'Stabliniensystem: Einliniensystem + beratende Stabsstellen (keine Weisungsbefugnis).',
    'Matrixorganisation: Doppelunterstellung in zwei Dimensionen.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Aufbauorganisation' },
    {
      type: 'paragraph',
      text: 'Aufbauorganisation beschreibt, wie ein Unternehmen strukturell aufgebaut ist.',
    },
    {
      type: 'list',
      style: 'bullet',
      items: ['Stelle', 'Instanz', 'Abteilung', 'Geschäftsleitung', 'Unterstellung', 'Weisungsbefugnis', 'Stabsstelle'],
    },

    { type: 'heading', level: 2, text: 'Organigramm' },
    {
      type: 'paragraph',
      text: 'Ein Organigramm zeigt die hierarchische Struktur eines Unternehmens: wer wem unterstellt ist, wer Weisungsbefugnis hat, welche Abteilungen es gibt, wer an der Spitze steht und welches Leitungssystem verwendet wird.',
    },
    {
      type: 'list',
      style: 'bullet',
      items: ['Einliniensystem', 'Mehrliniensystem', 'Stabliniensystem', 'Matrixsystem'],
    },
    { type: 'illustration', component: 'leitungssysteme-diagrams', caption: 'Die vier Leitungssysteme unterscheiden sich an ihrer Struktur im Organigramm.' },

    { type: 'heading', level: 2, text: 'Einliniensystem' },
    {
      type: 'paragraph',
      text: 'Beim Einliniensystem hat jeder Mitarbeiter grundsätzlich nur einen direkten Vorgesetzten.',
    },
    {
      type: 'table',
      headers: ['Vorteile', 'Nachteile'],
      rows: [
        ['klare Zuständigkeiten', 'lange Informationswege'],
        ['klare Verantwortlichkeiten', 'lange Entscheidungswege'],
        ['übersichtliche Struktur', 'Führungskräfte können überlastet werden'],
        ['eindeutige Weisungswege', 'weniger flexibel'],
      ],
    },
    {
      type: 'note',
      text: 'Erkennung im Organigramm: eine klare hierarchische Baumstruktur.',
    },

    { type: 'heading', level: 2, text: 'Mehrliniensystem' },
    {
      type: 'paragraph',
      text: 'Beim Mehrliniensystem kann ein Mitarbeiter Weisungen von mehreren Vorgesetzten erhalten.',
    },
    {
      type: 'table',
      headers: ['Vorteile', 'Nachteile'],
      rows: [
        ['Spezialisierung', 'widersprüchliche Anweisungen'],
        ['Expertenwissen', 'Kompetenzkonflikte'],
        ['fachliche Entscheidungen können schneller getroffen werden', 'hoher Abstimmungsaufwand'],
        ['Fachwissen wird besser genutzt', 'Mitarbeiter können überfordert werden'],
      ],
    },
    {
      type: 'note',
      text: 'Erkennung: Mehrere Weisungswege führen zu einer Stelle.',
    },

    { type: 'heading', level: 2, text: 'Stabliniensystem' },
    {
      type: 'paragraph',
      text: 'Das Stabliniensystem basiert auf einem Einliniensystem und wird durch Stabsstellen ergänzt. Stabsstellen beraten, unterstützen, liefern Fachwissen und entlasten die Leitung.',
    },
    {
      type: 'exam-tip',
      text: 'Stabsstellen haben grundsätzlich keine Weisungsbefugnis gegenüber den Linienmitarbeitern.',
    },
    {
      type: 'list',
      style: 'bullet',
      items: ['Rechtsabteilung', 'Assistent der Geschäftsleitung', 'Qualitätsmanagement', 'Sicherheitsbeauftragter'],
    },
    {
      type: 'example',
      text: 'Die Rechtsabteilung berät die Geschäftsleitung, hat aber gegenüber den normalen Angestellten keine Weisungsbefugnis.',
    },

    { type: 'heading', level: 2, text: 'Matrixorganisation' },
    {
      type: 'paragraph',
      text: 'Die Matrixorganisation verbindet zwei Organisationsdimensionen. Ein Mitarbeiter kann gleichzeitig einer Funktionsleitung und einer Projekt- oder Objektleitung unterstellt sein. Dadurch entsteht eine Doppelunterstellung.',
    },
    {
      type: 'table',
      headers: ['Vorteile', 'Nachteile'],
      rows: [
        ['hohe Flexibilität', 'Kompetenzkonflikte'],
        ['bessere Nutzung von Fachwissen', 'widersprüchliche Anweisungen möglich'],
        ['bessere Ressourcennutzung', 'hoher Koordinationsaufwand'],
        ['Teamarbeit, Spezialisierung', 'Doppelbelastung'],
      ],
    },

    { type: 'heading', level: 2, text: 'Schnelle Erkennung im Vergleich' },
    {
      type: 'table',
      headers: ['Merkmal im Organigramm', 'Leitungssystem'],
      rows: [
        ['Baumstruktur', 'Einliniensystem'],
        ['Mehrere Weisungswege', 'Mehrliniensystem'],
        ['Baum + beratende Stabsstelle', 'Stabliniensystem'],
        ['Netz / zwei Dimensionen / Projekt + Funktion', 'Matrixorganisation'],
      ],
    },
  ],
}
