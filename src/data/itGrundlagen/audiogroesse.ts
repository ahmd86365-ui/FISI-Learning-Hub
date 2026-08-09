import type { Topic } from '../../types/content'

/**
 * Source: written material supplied directly for this platform (not from
 * the PDF school files). No exercise worksheets were provided for this
 * topic, so per the "architecture only unless instructed otherwise" rule,
 * `exercises` stays empty rather than generating new questions.
 */
export const audiogroesseTopic: Topic = {
  id: 'topic-it-grundlagen-audiogroesse',
  slug: 'audiogroesse-soundgroesse',
  moduleSlug: 'it-grundlagen',
  title: 'Audiogröße / Soundgröße',
  shortIntro: 'Wie aus Abtastrate, Abtasttiefe, Kanälen und Dauer die Datenmenge einer Audioaufnahme entsteht.',
  order: 8,
  keyPoints: [
    'Datenmenge = Abtastrate × Abtasttiefe × Kanäle × Dauer (Ergebnis zunächst in Bit).',
    'Stereo (2 Kanäle) benötigt bei sonst gleichen Werten etwa doppelt so viel Speicherplatz wie Mono (1 Kanal).',
    'Die Umrechnung geht von Bit über Byte (÷8) weiter zu KiB, MiB und GiB (jeweils ÷1024).',
  ],
  exercises: [],
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

    { type: 'heading', level: 2, text: 'Vollständiges Beispiel' },
    {
      type: 'example',
      title: 'Abtastrate 44.100 Hz, Abtasttiefe 16 Bit, 2 Kanäle, 45 Sekunden',
      text: '44.100 × 16 × 2 × 45 = 63.504.000 Bit. 63.504.000 / 8 = 7.938.000 Byte. Bei Bedarf weiter umrechnen: Byte / 1024 / 1024 / 1024 für GiB.',
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
      type: 'note',
      text: 'Prüfungsstrategie: Sind Abtastrate, Abtasttiefe, Kanäle und Dauer gegeben, zunächst Abtastrate × Abtasttiefe × Kanäle × Dauer berechnen und anschließend von Bit über Byte zu KiB, MiB und GiB umrechnen.',
    },
  ],
}
