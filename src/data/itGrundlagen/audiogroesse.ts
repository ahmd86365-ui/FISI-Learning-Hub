import type { Exercise, Topic } from '../../types/content'

/**
 * Source: written material supplied directly for this platform (not from
 * the PDF school files) — see the header comment history for that base
 * content. The exercises below are original practice problems authored for
 * this platform, applying exactly the Datenmenge = Abtastrate ×
 * Abtasttiefe × Kanäle × Dauer formula already taught in this lesson — no
 * new school facts are introduced, only application of the given one.
 */

const TOPIC_SLUG = 'audiogroesse-soundgroesse'

const audiogroesseExercises: Exercise[] = [
  {
    id: 'ex-audio-01',
    topicSlug: TOPIC_SLUG,
    type: 'calculation',
    difficulty: 'easy',
    question: 'Abtastrate 48.000 Hz, Abtasttiefe 16 Bit, 1 Kanal (Mono), Dauer 10 Sekunden. Berechne die Datenmenge in Bit.',
    correctAnswer: '7680000',
    explanation: '48.000 × 16 × 1 × 10 = 7.680.000 Bit.',
  },
  {
    id: 'ex-audio-02',
    topicSlug: TOPIC_SLUG,
    type: 'calculation',
    difficulty: 'easy',
    question: 'Eine Aufnahme benötigt 8.000.000 Bit. Wie viele Byte sind das?',
    correctAnswer: '1000000',
    explanation: 'Byte = Bit / 8 = 8.000.000 / 8 = 1.000.000 Byte.',
  },
  {
    id: 'ex-audio-03',
    topicSlug: TOPIC_SLUG,
    type: 'calculation',
    difficulty: 'medium',
    question: 'Abtastrate 44.100 Hz, Abtasttiefe 8 Bit, 2 Kanäle (Stereo), Dauer 20 Sekunden. Berechne die Datenmenge in Bit.',
    correctAnswer: '14112000',
    explanation: '44.100 × 8 × 2 × 20 = 14.112.000 Bit.',
  },
  {
    id: 'ex-audio-04',
    topicSlug: TOPIC_SLUG,
    type: 'calculation',
    difficulty: 'medium',
    question: 'Eine Mono-Aufnahme mit 44.100 Hz und 16 Bit dauert 30 Sekunden. Wie viele Byte sind das?',
    correctAnswer: '2646000',
    explanation: '44.100 × 16 × 1 × 30 = 21.168.000 Bit. 21.168.000 / 8 = 2.646.000 Byte.',
  },
  {
    id: 'ex-audio-05',
    topicSlug: TOPIC_SLUG,
    type: 'calculation',
    difficulty: 'hard',
    question: 'Eine Stereo-Aufnahme (44.100 Hz, 16 Bit) belegt 8.820.000 Byte. Wie lang ist die Aufnahme in Sekunden?',
    correctAnswer: '50',
    explanation:
      'Bit = Byte × 8 = 8.820.000 × 8 = 70.560.000 Bit. Dauer = Bit / (Abtastrate × Abtasttiefe × Kanäle) = 70.560.000 / (44.100 × 16 × 2) = 70.560.000 / 1.411.200 = 50 Sekunden.',
  },
  {
    id: 'ex-audio-06',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question:
      'Zwei Aufnahmen sind bis auf die Kanalzahl identisch: eine ist Mono, die andere Stereo. Wie verhält sich die Datenmenge der Stereo-Aufnahme zur Mono-Aufnahme?',
    options: [
      { id: 'a', text: 'Etwa doppelt so groß' },
      { id: 'b', text: 'Etwa halb so groß' },
      { id: 'c', text: 'Genau gleich groß' },
    ],
    correctAnswer: 'a',
    explanation: 'Stereo verwendet 2 Kanäle statt 1 – bei sonst gleichen Werten verdoppelt sich die Datenmenge.',
  },
  {
    id: 'ex-audio-07',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: 'Die Abtastrate wird in Hz angegeben.',
    options: [
      { id: 'wahr', text: 'Wahr' },
      { id: 'falsch', text: 'Falsch' },
    ],
    correctAnswer: 'wahr',
    explanation: 'Die Abtastrate gibt an, wie viele Samples pro Sekunde aufgenommen werden – ihre Einheit ist Hz.',
  },
]

export const audiogroesseTopic: Topic = {
  id: 'topic-it-grundlagen-audiogroesse',
  slug: TOPIC_SLUG,
  moduleSlug: 'it-grundlagen',
  title: 'Audiogröße / Soundgröße',
  shortIntro: 'Wie aus Abtastrate, Abtasttiefe, Kanälen und Dauer die Datenmenge einer Audioaufnahme entsteht.',
  order: 8,
  keyPoints: [
    'Datenmenge = Abtastrate × Abtasttiefe × Kanäle × Dauer (Ergebnis zunächst in Bit).',
    'Stereo (2 Kanäle) benötigt bei sonst gleichen Werten etwa doppelt so viel Speicherplatz wie Mono (1 Kanal).',
    'Die Umrechnung geht von Bit über Byte (÷8) weiter zu KiB, MiB und GiB (jeweils ÷1024).',
  ],
  exercises: audiogroesseExercises,
  content: [
    { type: 'heading', level: 2, text: 'Analog → Digital' },
    {
      type: 'paragraph',
      text: 'Natürlicher Klang ist analog. Damit ein Computer Sound speichern kann, wird er abgetastet – dieser Vorgang heißt Abtastung (Sampling).',
    },

    { type: 'heading', level: 2, text: 'Abtastrate' },
    {
      type: 'paragraph',
      text: 'Die Abtastrate gibt an, wie viele Samples (Abtastungen) pro Sekunde aufgenommen werden. Ihre Einheit ist Hz.',
    },
    {
      type: 'example',
      title: 'Abtastrate 44.100 Hz',
      text: '44.100 Hz bedeutet 44.100 Abtastungen pro Sekunde.',
    },
    {
      type: 'insight',
      title: 'Zusatzwissen: Warum genau 44.100 Hz?',
      text: 'Das menschliche Gehör nimmt Frequenzen bis etwa 20.000 Hz wahr. Nach dem Abtasttheorem muss die Abtastrate mehr als doppelt so hoch sein wie die höchste enthaltene Frequenz, damit beim Digitalisieren keine Information verloren geht. 44.100 Hz (Standard für Audio-CDs) liegt bewusst über diesem doppelten Wert und wurde historisch außerdem so gewählt, dass sich das Signal mit der damaligen Videotechnik speichern ließ.',
    },

    { type: 'heading', level: 2, text: 'Abtasttiefe' },
    {
      type: 'paragraph',
      text: 'Die Abtasttiefe legt fest, wie viele Bit benutzt werden, um einen einzelnen Sample-Wert darzustellen – zum Beispiel 16 Bit.',
    },

    { type: 'heading', level: 2, text: 'Kanäle' },
    {
      type: 'table',
      headers: ['Wiedergabeart', 'Kanäle'],
      rows: [
        ['Mono', '1 Kanal'],
        ['Stereo', '2 Kanäle'],
      ],
    },
    {
      type: 'note',
      text: 'Sind alle anderen Werte gleich, benötigt Stereo etwa doppelt so viel Daten wie Mono.',
    },

    { type: 'heading', level: 2, text: 'Dauer' },
    {
      type: 'paragraph',
      text: 'Je länger die Aufnahmedauer, desto mehr Daten entstehen.',
    },

    { type: 'heading', level: 2, text: 'Die Hauptformel' },
    {
      type: 'key-points',
      items: ['Datenmenge = Abtastrate × Abtasttiefe × Kanäle × Dauer'],
    },
    {
      type: 'note',
      text: 'Das Ergebnis dieser Formel liegt zunächst in Bit vor.',
    },
    {
      type: 'illustration',
      component: 'audio-pipeline',
      caption: 'Die vier Eingangsgrößen ergeben multipliziert die Datenmenge in Bit, die anschließend über Byte zu KiB, MiB und GiB umgerechnet wird.',
    },

    { type: 'heading', level: 2, text: 'Vollständiges Beispiel' },
    {
      type: 'example',
      title: 'Abtastrate 44.100 Hz, Abtasttiefe 16 Bit, 2 Kanäle, 45 Sekunden',
      text: '44.100 × 16 × 2 × 45 = 63.504.000 Bit. 63.504.000 / 8 = 7.938.000 Byte. Bei Bedarf weiter umrechnen: Byte / 1024 / 1024 / 1024 für GiB.',
    },
    {
      type: 'interactive',
      component: 'audiogroesse-calculator',
      caption: 'Verändere Abtastrate, Abtasttiefe, Kanäle und Dauer und beobachte, wie sich die Datenmenge ändert.',
    },

    { type: 'heading', level: 2, text: 'Mono im Vergleich zu Stereo' },
    {
      type: 'paragraph',
      text: 'Für dieselbe Aufnahme mit 44.100 Hz, 16 Bit und 60 Sekunden Dauer unterscheidet sich die Datenmenge allein durch die Anzahl der Kanäle: Mono (1 Kanal) gegenüber Stereo (2 Kanäle) – Stereo benötigt etwa doppelt so viel Daten wie Mono.',
    },

    { type: 'heading', level: 2, text: 'Die Formel nach der Dauer umstellen' },
    {
      type: 'paragraph',
      text: 'Wird nach der Dauer gefragt, lässt sich die Hauptformel entsprechend umstellen:',
    },
    {
      type: 'key-points',
      items: ['Dauer = Datenmenge / (Abtastrate × Abtasttiefe × Kanäle)'],
    },
    {
      type: 'exam-tip',
      text: 'Prüfungsstrategie: Sind Abtastrate, Abtasttiefe, Kanäle und Dauer gegeben, zunächst Abtastrate × Abtasttiefe × Kanäle × Dauer berechnen und anschließend von Bit über Byte zu KiB, MiB und GiB umrechnen.',
    },
  ],
}
