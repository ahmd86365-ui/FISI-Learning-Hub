import type { ContentBlock, Exercise, Topic } from '../../types/content'

export const htmlCss03Slug = 'textelemente-listen'

const h = (text: string, level: 2 | 3 | 4 = 2): ContentBlock => ({ type: 'heading', level, text })
const p = (text: string): ContentBlock => ({ type: 'paragraph', text })
const table = (headers: string[], rows: string[][]): ContentBlock => ({ type: 'table', headers, rows })
const list = (...items: string[]): ContentBlock => ({ type: 'list', style: 'bullet', items })
const code = (val: string, language = 'html'): ContentBlock => ({ type: 'code', language, code: val })
const interactive = (component: string, caption?: string): ContentBlock => ({ type: 'interactive', component, caption })

const practice = (id: string, question: string): Exercise => ({
  id: 'html-css-' + htmlCss03Slug + '-' + id,
  topicSlug: htmlCss03Slug,
  type: 'technical-problem',
  difficulty: 'medium',
  question,
})

export const htmlCss03Topic: Topic = {
  id: 'topic-html-css-textelemente-listen',
  slug: htmlCss03Slug,
  moduleSlug: 'html-css',
  title: 'Textelemente, Formatierung & Listen',
  shortIntro: 'Überschriftenhierarchie (h1–h6), Absätze, semantische Textauszeichnung und geordnete/ungeordnete Listen.',
  order: 3,
  content: [
    h('Lernziele dieser Lektion'),
    p('Du beherrschst die logische Überschriftenhierarchie von h1 bis h6, weißt, warum <strong> dem visuellen <b> vorgezogen wird, und strukturierst Informationen mit ul, ol und nested Lists.'),

    h('1. Überschriftenhierarchie (h1 bis h6)'),
    p('Überschriften strukturieren den Text für menschliche Leser, Suchmaschinen-Crawler (SEO) und Screenreader.'),
    list(
      'h1: Haupttitel der Seite. Darf laut SEO- und Barrierefreiheits-Standards pro Seite exakt EINMAL vorkommen.',
      'h2: Hauptkapitel und Abschnitte.',
      'h3 bis h6: Unterabschnitte und Detailgliederungen. Niemals Ebenen überspringen (z. B. nicht direkt von h2 auf h4 springen)!'
    ),

    h('2. Absätze & Semantische Textauszeichnung'),
    p('Textinhalte gehören in Absatz-Tags <p>. Zur Hervorhebung einzelner Wörter gibt es zwei Kategorien von Tags: semantische Auszeichnung und reine Formatierungs-Tags.'),
    table(['Tag', 'Semantische Bedeutung', 'Visuelle Standard-Darstellung', 'Empfehlung'], [
      ['<strong>', 'Starke Wichtigkeit / Dringlichkeit (von Screenreadern betont gelesen).', 'Fett (bold)', 'Best Practice für wichtige Begriffe'],
      ['<b>', 'Reine visuelle Fettung ohne semantische Bedeutung (Stilmittel).', 'Fett (bold)', 'Nur nutzen, wenn keine Wichtigkeit vorliegt'],
      ['<em>', 'Betonung (Emphasis) des Satzinhalts.', 'Kursiv (italic)', 'Best Practice für Zitate/Betonung'],
      ['<i>', 'Reine visuelle Kursivstellung (oder für Icon-Fonts).', 'Kursiv (italic)', 'Häufig für Font-Awesome Icons'],
      ['<code>', 'Inline-Code, Programmiersyntax oder Dateinamen.', 'Monospace-Schriftart', 'Ideal für technische Dokumentation'],
      ['<mark>', 'Visuelle Textmarkierung (wie mit Textmarker).', 'Gelb hinterlegt', 'Für Suchtreffer oder Hervorhebungen']
    ]),

    h('3. Listen: Ungeordnet (ul) vs. Geordnet (ol)'),
    p('Aufzählungen gliedern Inhalte in übersichtliche Punkte. Jeder Listeneintrag wird mit <li> (List Item) umschlossen:'),
    table(['Listentyp', 'Tag', 'Standard-Aufzählungszeichen', 'Typischer Anwendungsbereich'], [
      ['Ungeordnete Liste', '<ul>', 'Aufzählungspunkte (Bullets: disc)', 'Navigationen, Feature-Listen, Stichpunkte'],
      ['Geordnete Liste', '<ol>', 'Fortlaufende Nummerierung (1., 2., 3.)', 'Schritt-für-Schritt-Anleitungen, Rezepte, Ranglisten']
    ]),

    h('4. Verschachtelte Listen (Nested Lists)'),
    p('Eine Unterliste muss stets INNERHALB eines <li>-Elements des übergeordneten Containers platziert werden:'),
    code('<ul>\n  <li>Netzwerktechnik\n    <ul>\n      <li>OSI-Schichtenmodell</li>\n      <li>Subnetting & CIDR</li>\n    </ul>\n  </li>\n  <li>Webentwicklung\n    <ul>\n      <li>HTML5 & Semantik</li>\n      <li>CSS3 Flexbox</li>\n    </ul>\n  </li>\n</ul>', 'html'),

    h('5. Interaktive Live-Sandbox'),
    h('6. Original-Aufgabe 05_Textelemente & Offizielle Musterlösung'),
    p('Aufgabe aus dem Schulungsarchiv: Teste alle 6 Überschriftenebenen (h1 bis h6), semantische Auszeichnungen (strong, em, mark, code) sowie geordnete und ungeordnete Listen.'),
    code(`<!-- Aus 2_textformat.html (Offizielle Musterlösung) -->
<h1>Frische <span class="highlight">Briese</span> am Meer</h1>
<h2>Nordseeküste Spaziergang</h2>
<hr>

<p>
  <strong>Starke Betonung:</strong> Herrlicher Sommerwind beim Spaziergang.
  <em>Hervorgehoben:</em> Die Wellen brechen an der Küste.
  <code>console.log('Strand');</code>
</p>

<!-- Geordnete Liste (ol) -->
<ol>
  <li>Schuhe anziehen</li>
  <li>Zum Strand gehen</li>
  <li>Wind genießen</li>
</ol>

<!-- Ungeordnete Liste (ul) -->
<ul>
  <li>Sonnencreme</li>
  <li>Windjacke</li>
  <li>Kamera</li>
</ul>`, 'html'),

    interactive('html-css-sandbox', 'Experimentiere mit Listen und Textformatierungen'),

    h('Begleitende Schulungsunterlagen & Referenzen', 3),
    list(
      '[Präsentation: HTML Einführung (PDF)](/resources/html-css/praesentation/1_HTML-Einführung.pdf)',
      '[HTML-Kurzreferenz (HTML)](/resources/html-css/nuetzliches/HTML-Kurzreferenz.html)'
    )

  ],
  exercises: [
    practice('praxis-1', 'Erstelle eine geordnete Liste (<ol>) mit den drei Schritten des Three-Way-Handshakes und hebe die Flags fett hervor.'),
    practice('praxis-2', 'Warum ist es für Screenreader und Suchmaschinen problematisch, wenn auf einer Seite mehrere <h1>-Elemente verwendet werden?')
  ],
  flashcards: [
    {
      id: 'fc-html-css-03-1',
      lessonId: 'topic-html-css-textelemente-listen',
      type: 'multiple-choice',
      question: 'Welcher Unterschied besteht zwischen <ul> und <ol>?',
      answers: [
        { id: 'a1', text: '<ul> erzeugt eine unnummerierte Liste mit Aufzählungszeichen, <ol> eine nummerierte Liste.' },
        { id: 'a2', text: '<ul> ist für Links, <ol> für Absätze.' },
        { id: 'a3', text: '<ul> darf maximal 3 Einträge haben, <ol> beliebig viele.' }
      ],
      correctAnswer: 'a1',
      explanation: '<ul> steht für unordered list, <ol> für ordered list.',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-03-2',
      lessonId: 'topic-html-css-textelemente-listen',
      type: 'multiple-choice',
      question: 'Warum sollte eine Seite in der Regel nur eine einzige <h1>-Überschrift haben?',
      answers: [
        { id: 'a1', text: 'Weil die <h1> das Hauptthema der Seite darstellt und für Barrierefreiheit sowie SEO die Gliederungsspitze bildet.' },
        { id: 'a2', text: 'Weil HTML mehr als ein h1 syntaktisch verbietet.' },
        { id: 'a3', text: 'Weil CSS sonst keine Stile zuweisen kann.' }
      ],
      correctAnswer: 'a1',
      explanation: 'Die Überschriftenhierarchie dient assistiven Technologien zur Strukturierung der Seite.',
      difficulty: 'medium',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-03-3',
      lessonId: 'topic-html-css-textelemente-listen',
      type: 'multiple-choice',
      question: 'Welches Tag kennzeichnet ein einzelnes Listenelement innerhalb von <ul> oder <ol>?',
      answers: [
        { id: 'a1', text: '<li> (list item)' },
        { id: 'a2', text: '<item>' },
        { id: 'a3', text: '<entry>' }
      ],
      correctAnswer: 'a1',
      explanation: 'Sowohl in ungeordneten als auch geordneten Listen müssen die Einträge in <li>-Tags gefasst sein.',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    }
  ]
}
