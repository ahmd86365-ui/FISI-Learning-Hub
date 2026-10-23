import type { ContentBlock, Exercise, Topic } from '../../types/content'

export const htmlCss11Slug = 'positionierung'

const h = (text: string, level: 2 | 3 | 4 = 2): ContentBlock => ({ type: 'heading', level, text })
const p = (text: string): ContentBlock => ({ type: 'paragraph', text })
const table = (headers: string[], rows: string[][]): ContentBlock => ({ type: 'table', headers, rows })
const list = (...items: string[]): ContentBlock => ({ type: 'list', style: 'bullet', items })
const code = (val: string, language = 'html'): ContentBlock => ({ type: 'code', language, code: val })
const interactive = (component: string, caption?: string): ContentBlock => ({ type: 'interactive', component, caption })

const practice = (id: string, question: string): Exercise => ({
  id: 'html-css-' + htmlCss11Slug + '-' + id,
  topicSlug: htmlCss11Slug,
  type: 'technical-problem',
  difficulty: 'medium',
  question,
})

export const htmlCss11Topic: Topic = {
  id: 'topic-html-css-positionierung',
  slug: htmlCss11Slug,
  moduleSlug: 'html-css',
  title: 'CSS-Positionierung (static, relative, absolute, fixed, sticky)',
  shortIntro: 'Die 5 Positionierungsarten, Koordinatensteuerung mit top/right/bottom/left und Schichtenstapelung mit z-index.',
  order: 11,
  content: [
    h('Lernziele dieser Lektion'),
    p('Du beherrschst die 5 Positionierungsarten von CSS, weißt, welcher Bezugspunkt für absolute Positionierung gilt und steuerst die Überlappung von Elementen über z-index.'),

    h('1. Die 5 Werte von position im Detail'),
    table(['Wert', 'Verhalten im Dokumentfluss', 'Bezugspunkt für top/left', 'Einsatzbereich'], [
      ['static (Standard)', 'Normaler Dokumentenfluss. top, left, z-index sind WIRKUNGSLOS.', 'Keiner', 'Standard-Text und Fließinhalte.'],
      ['relative', 'Bleibt im normalen Fluss (hinterlässt den Platzhalter leer).', 'Seine eigene ursprüngliche Ausgangsposition.', 'Verschiebung um wenige Pixel ODER als Bezugs-Anker für absolute Kinder!'],
      ['absolute', 'Wird VOLLSTÄNDIG aus dem Fluss entfernt (hinterlässt KEINE Lücke).', 'Das nächste übergeordnete Element mit position != static (meist relative). Falls keines: body.', 'Tooltips, Badges auf Cards, Dropdown-Menüs, Popovers.'],
      ['fixed', 'Wird aus dem Fluss entfernt, haftet fest am Viewport.', 'Das Browserfenster (Viewport).', 'Feste Navigationsleiste (Sticky Header), Back-to-Top-Button, Cookie-Banner.'],
      ['sticky', 'Hybrid: Fließt normal mit, bis die Scrollposition top erreicht, und haftet dann fest.', 'Sein Scroll-Container.', 'Tabellen-Kopfzeilen, Kategorieleisten, Blog-Inhaltsverzeichnisse.']
    ]),

    h('2. Der Bezugspunkt-Trick (relative Parent + absolute Child)'),
    p('Die wichtigste Regel laut Dozent Robert Reich und Klausuraufgabe 5:'),
    p('Ein mit position: absolute positioniertes Element richtet sich IMMER am nächsten Vorfahren aus, der NICHT static ist. Daher erhält der umschließende Container standardmäßig position: relative;:'),
    code('.card {\n  position: relative; /* Bezugspunkt für Kinder! */\n  width: 300px;\n  padding: 16px;\n}\n.badge {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background: #ef4444;\n  color: white;\n}', 'css'),

    h('3. Ebenen-Stapelung mit z-index'),
    p('Über z-index wird gesteuert, welche Box bei Überlappung oben liegt (höherer Wert = weiter vorne). Wichtig: z-index wirkt NUR auf Elemente, deren position nicht static ist!'),

    h('4. Interaktive Live-Sandbox'),
    h('5. Original-Aufgaben 11.1 & 11.2 (CSS-Position) & Offizielle Musterlösung'),
    p('Aufgabe aus dem Schulungsarchiv: Platziere ein Close-Icon (close.svg) absolut oben rechts auf einer Karteikarte (.card) und richte Social-Media Icons relativ aus.'),
    code(`/* Aus 11.1_CSS-Position_absolute-Lösung/css/styles.css (Offizielle Dozentenlösung) */
.card {
  position: relative; /* WICHTIG: Bezugspunkt für absolute Kinder! */
  max-width: 400px;
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
}

/* Schließenbutton fest oben rechts in der Ecke der Card verankert */
.close-button {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
  cursor: pointer;
}

/* Aus 11.2: Icon relative Feinjustierung */
.social-icon {
  position: relative;
  bottom: 2px; /* Schiebt das Icon optisch auf die Grundlinie */
}`, 'css'),

    interactive('html-css-sandbox', 'Verschiebe absolute und fixed Boxen im Live-Editor'),

    h('Begleitende Schulungsunterlagen & Referenzen', 3),
    list(
      '[Präsentation: CSS Einführung 2.0 (PDF)](/resources/html-css/praesentation/2_CSS-Einführung2.0.pdf)',
      '[CSS-Kurzreferenz (HTML)](/resources/html-css/nuetzliches/CSS-Kurzreferenz.html)'
    )

  ],
  exercises: [
    practice('praxis-1', 'Platziere ein Notification-Badge exakt an der oberen rechten Ecke einer Card mittels position: relative und position: absolute.'),
    practice('praxis-2', 'Erstelle eine fixed Navigationsleiste, die beim Herunterscrollen stets am oberen Bildschirmrand kleben bleibt.')
  ],
  flashcards: [
    {
      id: 'fc-html-css-11-1',
      lessonId: 'topic-html-css-positionierung',
      type: 'multiple-choice',
      question: 'Woran orientiert sich ein Element mit position: absolute bei top: 0; left: 0;?',
      answers: [
        { id: 'a1', text: 'Am nächsten Vorfahrenelement (Eltern/Großeltern), das eine andere Positionierung als static hat (meist position: relative).' },
        { id: 'a2', text: 'Immer direkt am linken oberen Bildschirmrand des Viewports.' },
        { id: 'a3', text: 'Am direkt vorhergehenden Geschwister-Element.' }
      ],
      correctAnswer: 'a1',
      explanation: 'Gibt es keinen positionierten Vorfahren, richtet sich absolute am <html>-Root-Element aus.',
      difficulty: 'medium',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-11-2',
      lessonId: 'topic-html-css-positionierung',
      type: 'multiple-choice',
      question: 'Welche Eigenschaft bestimmt die vertikale Stapelreihenfolge überlappender Elemente?',
      answers: [
        { id: 'a1', text: 'z-index' },
        { id: 'a2', text: 'order' },
        { id: 'a3', text: 'elevation-level' }
      ],
      correctAnswer: 'a1',
      explanation: 'Höhere z-index-Werte liegen über niedrigeren (funktioniert nur bei positionierten Elementen).',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-11-3',
      lessonId: 'topic-html-css-positionierung',
      type: 'multiple-choice',
      question: 'Wie unterscheidet sich fixed von sticky?',
      answers: [
        { id: 'a1', text: 'Fixed ist permanent am Viewport verankert; Sticky scrollt zunächst normal mit und rastet erst an einer Schwelle ein.' },
        { id: 'a2', text: 'Fixed scrollt mit dem Inhalt, Sticky bleibt starr.' },
        { id: 'a3', text: 'Es gibt keinen Unterschied, die Begriffe sind Synonyme.' }
      ],
      correctAnswer: 'a1',
      explanation: 'Sticky eignet sich perfekt für Tabellenköpfe und Sub-Navigationsleisten.',
      difficulty: 'medium',
      tags: ['HTML & CSS']
    }
  ]
}
