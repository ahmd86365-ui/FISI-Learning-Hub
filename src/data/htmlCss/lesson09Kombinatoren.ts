import type { ContentBlock, Exercise, Topic } from '../../types/content'

export const htmlCss09Slug = 'kombinatoren'

const h = (text: string, level: 2 | 3 | 4 = 2): ContentBlock => ({ type: 'heading', level, text })
const p = (text: string): ContentBlock => ({ type: 'paragraph', text })
const table = (headers: string[], rows: string[][]): ContentBlock => ({ type: 'table', headers, rows })
const list = (...items: string[]): ContentBlock => ({ type: 'list', style: 'bullet', items })
const code = (val: string, language = 'html'): ContentBlock => ({ type: 'code', language, code: val })
const interactive = (component: string, caption?: string): ContentBlock => ({ type: 'interactive', component, caption })

const practice = (id: string, question: string): Exercise => ({
  id: 'html-css-' + htmlCss09Slug + '-' + id,
  topicSlug: htmlCss09Slug,
  type: 'technical-problem',
  difficulty: 'medium',
  question,
})

export const htmlCss09Topic: Topic = {
  id: 'topic-html-css-kombinatoren',
  slug: htmlCss09Slug,
  moduleSlug: 'html-css',
  title: 'CSS-Kombinatoren & Pseudoklassen',
  shortIntro: 'Verschachtelte Selektion: Nachfahren-, Kind-, Nachbar- und Geschwisterkombinatoren sowie :hover, :focus, :nth-child.',
  order: 9,
  content: [
    h('Lernziele dieser Lektion'),
    p('Du beherrschst die 4 CSS-Kombinatoren, kannst präzise Elemente basierend auf ihrer Verwandtschaft im DOM auswählen und dynamische Benutzerinteraktionen über Pseudoklassen stylen.'),

    h('1. Die 4 CSS-Kombinatoren im Vergleich'),
    table(['Kombinator', 'Name', 'Syntax', 'Auswahlregel'], [
      ['Leerzeichen', 'Nachfahrenkombinator (Descendant)', 'div p', 'Trifft JEDEN Absatz p, der irgendwo innerhalb von div liegt (auch Enkel, Urenkel).'],
      ['>', 'Kindkombinator (Child)', 'ul > li', 'Trifft NUR direkte Kinder auf Ebene 1. Enkelkinder werden ignoriert!'],
      ['+', 'Direkter Nachbarkombinator (Adjacent Sibling)', 'h2 + p', 'Trifft NUR den unmittelbar folgenden Absatz direkt nach einer h2.'],
      ['~', 'Allgemeiner Geschwisterkombinator (General Sibling)', 'h2 ~ p', 'Trifft ALLE folgenden Absätze auf derselben Hierarchieebene nach der h2.']
    ]),

    h('2. Häufige Pseudoklassen für Interaktion & Status'),
    p('Pseudoklassen sprechen Elemente in bestimmten Zuständen an:'),
    table(['Pseudoklasse', 'Zustand / Bedeutung', 'Praxisbeispiel'], [
      [':hover', 'Mauszeiger schwebt über dem Element.', 'button:hover { background: #1d4ed8; }'],
      [':focus', 'Element besitzt Tastatur- oder Eingabefokus.', 'input:focus { outline: 2px solid #3b82f6; }'],
      [':active', 'Moment des Klickens/Herunterdrückens der Maustaste.', 'button:active { transform: scale(0.98); }'],
      [':first-child', 'Erstes Kind-Element seines Eltern-Elements.', 'li:first-child { font-weight: bold; }'],
      [':last-child', 'Letztes Kind-Element seines Eltern-Elements.', 'li:last-child { border-bottom: none; }'],
      [':nth-child(n)', 'Gezielte Auswahl nach Zählindex oder Formel (even/odd).', 'tr:nth-child(even) { background: #f8fafc; }']
    ]),

    h('3. Original-Übung aus der Klausurvorbereitung'),
    p('Aufgabe: Formatiere ein Bild in einer Card so, dass nur Bilder in direkten Container-Divs angesprochen werden:'),
    code('.card > div > img {\n  width: 100%;\n  border-radius: 8px 8px 0 0;\n}', 'css'),

    h('4. Interaktive Live-Sandbox'),
    h('5. Original-Aufgabe 10.4_CSS-Kombinatoren & Offizielle Musterlösung'),
    p('Aufgabe aus dem Schulungsarchiv: Wende Nachfahren-, Kind- (>) und Nachbarkombinatoren (+) gezielt auf Absätze innerhalb verschachtelter Container an.'),
    code(`/* Aus 10.4_CSS-Kombinatoren-Lösung/style-aufgabe1.css (Offizielle Dozentenlösung) */
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
  color: #000;
}

/* Nur der direkte Kind-Absatz in div (Farbe Orange, Fett) */
div > p {
  color: #ff6600;
  font-weight: bold;
}

/* Der unmittelbare Nachbar-Absatz direkt nach h2 */
h2 + p {
  font-style: italic;
  color: #2563eb;
}

/* Alle Nachfahren-Absätze innerhalb der Card */
.card p {
  font-size: 14px;
}`, 'css'),

    interactive('html-css-sandbox', 'Teste Kombinatoren und Hover-Zustände im Editor'),

    h('Begleitende Schulungsunterlagen & Referenzen', 3),
    list(
      '[Präsentation: CSS Einführung 2.0 (PDF)](/resources/html-css/praesentation/2_CSS-Einführung2.0.pdf)',
      '[CSS-Kurzreferenz (HTML)](/resources/html-css/nuetzliches/CSS-Kurzreferenz.html)'
    )

  ],
  exercises: [
    practice('praxis-1', 'Schreibe einen Selektor, der nur das erste <li> einer ungeordneten Liste fett formatiert (:first-child).'),
    practice('praxis-2', 'Erkläre den Unterschied zwischen .menu li a und .menu > li > a.')
  ],
  flashcards: [
    {
      id: 'fc-html-css-09-1',
      lessonId: 'topic-html-css-kombinatoren',
      type: 'multiple-choice',
      question: 'Welches Zeichen kennzeichnet den Kindselektor (direkte Kind-Elemente) in CSS?',
      answers: [
        { id: 'a1', text: 'Das Größer-als-Zeichen >' },
        { id: 'a2', text: 'Das Plus-Zeichen (+)' },
        { id: 'a3', text: 'Die Tilde (~)' }
      ],
      correctAnswer: 'a1',
      explanation: 'parent > child selektiert ausschließlich Kinder der ersten Ebene, keine tieferen Nachfahren.',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-09-2',
      lessonId: 'topic-html-css-kombinatoren',
      type: 'multiple-choice',
      question: 'Was wählt der Nachbar-Kombinator h2 + p aus?',
      answers: [
        { id: 'a1', text: 'Genau dasjenige <p>-Element, das unmittelbar als Geschwisterelement auf ein <h2> folgt.' },
        { id: 'a2', text: 'Alle Absätze auf der gesamten Seite.' },
        { id: 'a3', text: 'Nur Absätze, die innerhalb von h2 verschachtelt sind.' }
      ],
      correctAnswer: 'a1',
      explanation: 'Der Plus-Kombinator wählt den direkten Nachbarn desselben Eltern-Elements.',
      difficulty: 'medium',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-09-3',
      lessonId: 'topic-html-css-kombinatoren',
      type: 'multiple-choice',
      question: 'Welche Pseudoklasse wird aktiv, wenn der Benutzer mit dem Mauszeiger über ein Element fährt?',
      answers: [
        { id: 'a1', text: ':hover' },
        { id: 'a2', text: ':active' },
        { id: 'a3', text: ':visited' }
      ],
      correctAnswer: 'a1',
      explanation: ':hover reagiert auf den Mauszeiger, :focus auf Tastaturfokus/Eingaben.',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    }
  ]
}
