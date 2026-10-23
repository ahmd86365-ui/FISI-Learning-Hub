import type { ContentBlock, Exercise, Topic } from '../../types/content'

export const htmlCss16Slug = 'responsive-design'

const h = (text: string, level: 2 | 3 | 4 = 2): ContentBlock => ({ type: 'heading', level, text })
const p = (text: string): ContentBlock => ({ type: 'paragraph', text })
const table = (headers: string[], rows: string[][]): ContentBlock => ({ type: 'table', headers, rows })
const list = (...items: string[]): ContentBlock => ({ type: 'list', style: 'bullet', items })
const code = (val: string, language = 'html'): ContentBlock => ({ type: 'code', language, code: val })
const interactive = (component: string, caption?: string): ContentBlock => ({ type: 'interactive', component, caption })

const practice = (id: string, question: string): Exercise => ({
  id: 'html-css-' + htmlCss16Slug + '-' + id,
  topicSlug: htmlCss16Slug,
  type: 'technical-problem',
  difficulty: 'medium',
  question,
})

export const htmlCss16Topic: Topic = {
  id: 'topic-html-css-responsive-design',
  slug: htmlCss16Slug,
  moduleSlug: 'html-css',
  title: 'Responsive Webdesign & Viewport',
  shortIntro: 'Philosophie von RWD: Der Viewport-Meta-Tag, flexible Raster, fluide Medien und Mobile-First-Konzept.',
  order: 16,
  content: [
    h('Lernziele dieser Lektion'),
    p('Du verstehst die Säulen des Responsive Webdesigns (RWD), weißt, warum der Viewport-Meta-Tag unverzichtbar ist und warum Mobile-First gegenüber Desktop-Down im Vorteil ist.'),

    h('1. Was ist Responsive Webdesign (RWD)?'),
    p('Responsive Webdesign bedeutet, dass sich Layout, Typografie und Bilder einer Webseite dynamisch an die Bildschirmgröße des Endgeräts anpassen – vom Smartphone über das Tablet bis zum 4K-Desktop-Monitor.'),

    h('2. Der zwingende Viewport-Meta-Tag'),
    p('Ohne den Viewport-Meta-Tag rendern Smartphones Webseiten in einer virtuellen 980px-Desktop-Auflösung und zoomen heraus – Text wird unlesbar klein! Der Viewport-Tag im <head> zwingt den Browser zur echten 1:1-Darstellung:'),
    code('<meta name="viewport" content="width=device-width, initial-scale=1.0">', 'html'),
    list(
      'width=device-width: Setzt die Seitenbreite exakt auf die physikalische Gerätebreite in CSS-Pixeln.',
      'initial-scale=1.0: Verhindert standardmäßiges Herauszoomen beim ersten Seitenaufruf.'
    ),

    h('3. Mobile First vs. Desktop Down'),
    table(['Ansatz', 'Breakpoint-Methode', 'Vorteile & Branchenstandard'], [
      ['Mobile First (Empfohlen)', '@media (min-width: 768px) { ... }', 'Modernster Standard! Schlanker Basiscode für schwächere Mobilgeräte, sukzessive Erweiterung (Progressive Enhancement) für Desktop.'],
      ['Desktop Down (Veraltet)', '@media (max-width: 1024px) { ... }', 'Schreibt zuerst komplexe Desktop-Styles und versucht anschließend aufwendig, Elemente für Handys zu reduzieren.']
    ]),

    h('4. Fluide Medien (Bilder & Videos)'),
    p('Um zu verhindern, dass große Bilder auf Handys den Bildschirm sprengen, gehört folgende Regel in jedes Stylesheet:'),
    code('img, video {\n  max-width: 100%;\n  height: auto;\n  display: block;\n}', 'css'),

    h('5. Interaktive Live-Sandbox'),
    h('6. Original-Aufgabe 15.3_Responsive_Navi & Offizielle Musterlösung'),
    p('Aufgabe aus dem Schulungsarchiv: Erstelle eine Navigationsleiste, die auf Desktop (≥ 768px) blau und nebeneinander (row) liegt und auf Mobilgeräten (< 768px) grün und untereinander (column) dargestellt wird.'),
    code(`/* Aus 15.3_Responsive_Navi-Lösung/styles.css (Offizielle Dozentenlösung) */
.navigation ul {
  display: flex;
  flex-direction: row; /* Desktop: Nebeneinander */
  background-color: #1e40af; /* Blau */
  list-style: none;
  padding: 0;
}

.navigation li {
  padding: 12px 24px;
}

.navigation a {
  color: white;
  text-decoration: none;
}

/* Mobil-Breakpoint: Unter 768px umschalten */
@media (max-width: 767px) {
  .navigation ul {
    flex-direction: column; /* Mobil: Untereinander */
    background-color: #1d9e75; /* Grün */
  }
}`, 'css'),

    interactive('html-css-sandbox', 'Teste fluid skalierende Bilder in der Sandbox'),

    h('Begleitende Schulungsunterlagen & Referenzen', 3),
    list(
      '[Präsentation: CSS Media Queries (PDF)](/resources/html-css/praesentation/4_CSS-Media-Queries.pdf)',
      '[CSS-Kurzreferenz (HTML)](/resources/html-css/nuetzliches/CSS-Kurzreferenz.html)'
    )

  ],
  exercises: [
    practice('praxis-1', 'Schreibe den vollständigen HTML-Head-Tag, der mobilen Browsern signalisiert, die echte Gerätebreite zu nutzen.'),
    practice('praxis-2', 'Erkläre den Unterschied zwischen der Einheit rem (Root EM) und em.')
  ],
  flashcards: [
    {
      id: 'fc-html-css-16-1',
      lessonId: 'topic-html-css-responsive-design',
      type: 'multiple-choice',
      question: 'Warum ist der Viewport-Meta-Tag für mobile Endgeräte unverzichtbar?',
      answers: [
        { id: 'a1', text: 'Weil mobile Browser die Seite sonst als 980px breiten Desktop-Viewport laden und extrem herunterskalieren.' },
        { id: 'a2', text: 'Um Touch-Eingaben auf dem Bildschirm zu deaktivieren.' },
        { id: 'a3', text: 'Damit Bilder in Druckansichten ausgeblendet werden.' }
      ],
      correctAnswer: 'a1',
      explanation: 'width=device-width stellt 1:1 CSS-Pixel auf der physischen Displaybreite ein.',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-16-2',
      lessonId: 'topic-html-css-responsive-design',
      type: 'multiple-choice',
      question: 'Worauf bezieht sich die Schriftgrößeneinheit 1rem?',
      answers: [
        { id: 'a1', text: 'Auf die im Wurzelelement (<html>) definierte Grundschriftgröße (Standard: meist 16px).' },
        { id: 'a2', text: 'Auf die Schriftgröße des direkten Elternelements.' },
        { id: 'a3', text: 'Auf die Bildschirmdiagonale in Zoll.' }
      ],
      correctAnswer: 'a1',
      explanation: 'rem (Root EM) bleibt unabhängig von Verschachtelungen stabil an der Root-Größe.',
      difficulty: 'medium',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-16-3',
      lessonId: 'topic-html-css-responsive-design',
      type: 'multiple-choice',
      question: 'Was bedeutet der Gestaltungsansatz „Mobile First“?',
      answers: [
        { id: 'a1', text: 'Man schreibt das Standard-CSS zuerst für mobile Displays und fügt für größere Screens Breakpoints mit min-width hinzu.' },
        { id: 'a2', text: 'Dass man Webseiten ausschließlich für Smartphones baut.' },
        { id: 'a3', text: 'Dass Desktop-Monitore keine CSS-Stile erhalten.' }
      ],
      correctAnswer: 'a1',
      explanation: 'Mobile First fördert schlanke, performante Webseiten und klare Inhaltsfokussierung.',
      difficulty: 'medium',
      tags: ['HTML & CSS']
    }
  ]
}
