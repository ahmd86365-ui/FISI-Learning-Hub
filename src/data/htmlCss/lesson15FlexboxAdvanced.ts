import type { ContentBlock, Exercise, Topic } from '../../types/content'

export const htmlCss15Slug = 'flexbox-advanced'

const h = (text: string, level: 2 | 3 | 4 = 2): ContentBlock => ({ type: 'heading', level, text })
const p = (text: string): ContentBlock => ({ type: 'paragraph', text })
const table = (headers: string[], rows: string[][]): ContentBlock => ({ type: 'table', headers, rows })
const list = (...items: string[]): ContentBlock => ({ type: 'list', style: 'bullet', items })
const code = (val: string, language = 'html'): ContentBlock => ({ type: 'code', language, code: val })
const interactive = (component: string, caption?: string): ContentBlock => ({ type: 'interactive', component, caption })

const practice = (id: string, question: string): Exercise => ({
  id: 'html-css-' + htmlCss15Slug + '-' + id,
  topicSlug: htmlCss15Slug,
  type: 'technical-problem',
  difficulty: 'medium',
  question,
})

export const htmlCss15Topic: Topic = {
  id: 'topic-html-css-flexbox-advanced',
  slug: htmlCss15Slug,
  moduleSlug: 'html-css',
  title: 'Flexbox: Umbrüche, Wachstumsfaktoren & Order',
  shortIntro: 'Vertiefung des flexiblen Box-Modells: flex-wrap, flex-grow, flex-shrink, flex-basis und die Kurzform flex: 1.',
  order: 15,
  content: [
    h('Lernziele dieser Lektion'),
    p('Du beherrschst mehrzeilige Flex-Layouts mit flex-wrap, verstehst das Zusammenspiel der drei Berechnungsfaktoren flex-grow, flex-shrink und flex-basis und änderst visuelle Reihenfolgen mit order.'),

    h('1. Mehrzeilige Layouts mit flex-wrap'),
    p('Standardmäßig drückt Flexbox alle Items in eine einzige Zeile (flex-wrap: nowrap), selbst wenn der Platz nicht ausreicht. Mit flex-wrap: wrap brechen überzählige Elemente sauber in die nächste Zeile um:'),
    code('.grid-container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.grid-item {\n  flex: 1 1 280px; /* Wachsen, Schrumpfen, Basisbreite 280px */\n}', 'css'),

    h('2. Die drei Wachstumsfaktoren im Detail'),
    table(['Eigenschaft', 'Standardwert', 'Bedeutung & Berechnungsregel'], [
      ['flex-grow', '0', 'Wachstumsfaktor: Bestimmt, wie überschüssiger Leerraum verteilt wird. 0 = kein Wachsen, 1 = nimmt gleichen Anteil.'],
      ['flex-shrink', '1', 'Schrumpffaktor: Bestimmt, wie stark das Element schrumpft, wenn der Platz zu eng wird. 0 = schrumpft niemals.'],
      ['flex-basis', 'auto', 'Ideale Ausgangsgröße vor der Raumverteilung (z. B. 250px oder 30%).']
    ]),

    h('3. Die Kurzschreibweise: flex: 1'),
    p('In modernen Projekten wird selten grow/shrink/basis einzeln geschrieben, sondern die Kurzform verwendet:'),
    list(
      'flex: 1; entspricht flex: 1 1 0; – Alle Items mit flex: 1 teilen sich den verfügbaren Platz exakt zu gleichen Teilen.',
      'flex: 0 0 250px; – Feste Breite von 250px, wächst nicht und schrumpft nicht (ideal für Sidebars).'
    ),

    h('4. Visuelle Reihenfolge manipulieren mit order'),
    p('Mit der order-Eigenschaft kann ein Element an eine andere Stelle verschoben werden, ohne die HTML-Reihenfolge zu ändern. Standard ist order: 0. Ein Wert von order: -1 zieht das Element nach ganz vorne, order: 1 nach ganz hinten.'),

    h('5. Interaktive Live-Sandbox'),
    h('6. Original-Aufgabe 13.2_Übung-flex2 & Offizielle Musterlösung'),
    p('Aufgabe aus dem Schulungsarchiv: Baue flexible Spaltenleisten mit prozentualen Breiten (w-100, w-50, w-33, w-25, w-60, w-40) und gap-Abständen über Flexbox.'),
    code(`/* Aus 13.2_Übung-flex2-Lösung/styles.css (Offizielle Dozentenlösung) */
.flexbox {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 16px;
}

.w-100 { width: 100%; }
.w-50  { width: calc(50% - 8px); }
.w-33  { width: calc(33.333% - 11px); }
.w-25  { width: calc(25% - 12px); }
.w-60  { width: calc(60% - 10px); }
.w-40  { width: calc(40% - 10px); }

.box {
  background: #ffffff;
  border-radius: 4px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12);
}`, 'css'),

    interactive('html-css-sandbox', 'Verändere flex-grow und flex-wrap live in der Sandbox'),

    h('Begleitende Schulungsunterlagen & Referenzen', 3),
    list(
      '[Präsentation: CSS Flexbox (PDF)](/resources/html-css/praesentation/3_CSS-Flexbox.pdf)',
      '[Präsentation: CSS Flexbox Kurzbeschreibung (PDF)](/resources/html-css/praesentation/2.5_CSS-Flexbox-Kurzbeschreibung.pdf)'
    )

  ],
  exercises: [
    practice('praxis-1', 'Erstelle eine responsive Bildergalerie: Items haben flex: 1 1 250px mit flex-wrap: wrap, sodass sich die Spaltenanzahl automatisch der Bildschirmbreite anpasst.'),
    practice('praxis-2', 'Erläutere die Bedeutung der Werte im Flex-Dreisatz flex: 1 0 auto.')
  ],
  flashcards: [
    {
      id: 'fc-html-css-15-1',
      lessonId: 'topic-html-css-flexbox-advanced',
      type: 'multiple-choice',
      question: 'Welche CSS-Eigenschaft erlaubt es Flexbox-Elementen, in die nächste Zeile umzubrechen?',
      answers: [
        { id: 'a1', text: 'flex-wrap: wrap;' },
        { id: 'a2', text: 'flex-break: true;' },
        { id: 'a3', text: 'display: block;' }
      ],
      correctAnswer: 'a1',
      explanation: 'Ohne flex-wrap verharren alle Items standardmäßig auf einer einzigen Zeile (nowrap).',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-15-2',
      lessonId: 'topic-html-css-flexbox-advanced',
      type: 'multiple-choice',
      question: 'Was bedeutet die Angabe flex-grow: 2; bei einem Element im Vergleich zu Elementen mit flex-grow: 1;?',
      answers: [
        { id: 'a1', text: 'Das Element erhält den doppelten Anteil des verbleibenden freien Raums auf der Hauptachse.' },
        { id: 'a2', text: 'Das Element wird doppelt so hoch skaliert.' },
        { id: 'a3', text: 'Das Element ignoriert Breitenbeschränkungen.' }
      ],
      correctAnswer: 'a1',
      explanation: 'Flex-grow verteilt verfügbaren Überschuss proportional zu den angegebenen Faktoren.',
      difficulty: 'medium',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-15-3',
      lessonId: 'topic-html-css-flexbox-advanced',
      type: 'multiple-choice',
      question: 'Was ist flex-basis?',
      answers: [
        { id: 'a1', text: 'Die definierte Grundgröße eines Flex-Elements vor Beginn der Berechnung von Wachstum oder Schrumpfung.' },
        { id: 'a2', text: 'Der minimale Außenabstand des Items.' },
        { id: 'a3', text: 'Die maximale Schriftgröße innerhalb des Containers.' }
      ],
      correctAnswer: 'a1',
      explanation: 'Flex-basis ersetzt im Flex-Kontext oft width oder height.',
      difficulty: 'medium',
      tags: ['HTML & CSS']
    }
  ]
}
