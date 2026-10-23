import type { ContentBlock, Exercise, Topic } from '../../types/content'

export const htmlCss04Slug = 'links-navigation'

const h = (text: string, level: 2 | 3 | 4 = 2): ContentBlock => ({ type: 'heading', level, text })
const p = (text: string): ContentBlock => ({ type: 'paragraph', text })
const table = (headers: string[], rows: string[][]): ContentBlock => ({ type: 'table', headers, rows })
const list = (...items: string[]): ContentBlock => ({ type: 'list', style: 'bullet', items })
const code = (val: string, language = 'html'): ContentBlock => ({ type: 'code', language, code: val })
const note = (text: string): ContentBlock => ({ type: 'note', text })
const interactive = (component: string, caption?: string): ContentBlock => ({ type: 'interactive', component, caption })

const practice = (id: string, question: string): Exercise => ({
  id: 'html-css-' + htmlCss04Slug + '-' + id,
  topicSlug: htmlCss04Slug,
  type: 'technical-problem',
  difficulty: 'medium',
  question,
})

export const htmlCss04Topic: Topic = {
  id: 'topic-html-css-links-navigation',
  slug: htmlCss04Slug,
  moduleSlug: 'html-css',
  title: 'Links, Bookmarks & Hypermedia',
  shortIntro: 'Hyperlinks mit <a>, relative vs. absolute Pfade, target-Attribute, interne Sprungmarken (Bookmarks) und Navigation.',
  order: 4,
  content: [
    h('Lernziele dieser Lektion'),
    p('Du verstehst das Hypertext-Prinzip, kannst fehlerfreie relative und absolute Pfade verfassen, setzt interne Sprungmarken (Bookmarks mit #id) und baust moderne Navigationsleisten.'),

    h('1. Das <a>-Tag (Anchor) und Hyperlinks'),
    p('Hyperlinks sind das Fundament des World Wide Web. Sie verknüpfen Webseiten untereinander, verweisen auf Dateien oder springen an bestimmte Textstellen desselben Dokuments.'),
    code('<a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Besuche Example.com</a>', 'html'),

    h('2. Absolute vs. Relative Pfade'),
    table(['Pfadtyp', 'Syntax-Beispiel', 'Wann verwenden?'], [
      ['Absoluter Pfad (URL)', 'https://google.de oder https://cdn.site.de/img.jpg', 'Verlinkung externer Websites oder CDN-Ressourcen.'],
      ['Relativer Pfad (Gleicher Ordner)', 'kontakt.html oder ./kontakt.html', 'Verlinkung von Seiten auf demselben Verzeichnisebene.'],
      ['Relativer Pfad (Unterordner)', 'pages/ueber-uns.html oder images/banner.png', 'Aufruf von Ressourcen in untergeordneten Verzeichnissen.'],
      ['Relativer Pfad (Übergeordneter Ordner)', '../index.html oder ../../css/style.css', '.. springt eine Ordnerebene im Verzeichnisbaum nach oben.']
    ]),

    h('3. Das target-Attribut & Sicherheitsregeln'),
    p('Das target-Attribut steuert das Fenster-Verhalten beim Klick:'),
    list(
      'target="_self" (Standard): Öffnet das Linkziel im aktuellen Browser-Tab.',
      'target="_blank": Öffnet das Ziel in einem neuen Tab oder Fenster.'
    ),
    note('Sicherheitshinweis: Wenn du target="_blank" nutzt, ergänze stets rel="noopener noreferrer". Ohne diesen Zusatz erhält die geöffnete Seite über window.opener potenziell Zugriff auf deine Ursprungsseite (Reverse Tabnabbing Sicherheitslücke).'),

    h('4. Interne Sprungmarken (Bookmarks / Anker mit #)'),
    p('Um den Benutzer direkt zu einem bestimmten Abschnitt auf derselben Seite springen zu lassen, wird die Zielstelle mit einer eindeutigen id versehen. Das href-Attribut des Links referenziert diese id mit vorangestelltem Doppelkreuz (#):'),
    code('<!-- Der Sprunglink -->\n<a href="#kapitel-3">Direkt zu Kapitel 3 springen</a>\n\n<!-- Weiter unten auf der Seite -->\n<h2 id="kapitel-3">Kapitel 3: Subnetting</h2>\n<p>Hier beginnt der Inhalt von Kapitel 3...</p>\n<a href="#seitenanfang">Nach oben</a>', 'html'),

    h('5. Interaktive Live-Sandbox'),
    h('6. Original-Aufgabe 04_Links & Offizielle Musterlösung'),
    p('Aufgabe aus dem Schulungsarchiv: Verlinke Unterseiten gegenseitig (index.html und kontakt.html), binde externe Links mit target="_blank" ein und setze Bookmarks (#anker).'),
    code(`<!-- Aus 1_links.html & 3_bookmarks.html (Offizielle Musterlösung) -->
<nav>
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="kontakt.html">Kontakt</a></li>
    <li><a href="https://www.google.de" target="_blank" rel="noopener noreferrer">Google (externer Tab)</a></li>
  </ul>
</nav>

<!-- Interne Sprungmarke -->
<a href="#abschnitt-details">Direkt zum Detailabschnitt</a>

<!-- Ziel-Abschnitt -->
<h2 id="abschnitt-details">Detailinformationen</h2>
<p>Inhalt des Abschnitts...</p>
<a href="#seitenanfang">Nach oben</a>`, 'html'),

    interactive('html-css-sandbox', 'Teste interne Sprungmarken und Link-Ziele live'),

    h('Begleitende Schulungsunterlagen & Referenzen', 3),
    list(
      '[Präsentation: HTML Einführung (PDF)](/resources/html-css/praesentation/1_HTML-Einführung.pdf)',
      '[HTML-Kurzreferenz (HTML)](/resources/html-css/nuetzliches/HTML-Kurzreferenz.html)'
    )

  ],
  exercises: [
    practice('praxis-1', 'Erstelle ein Navigationsmenü mit Links zu Home (relativ), Über uns (relativ) und GitHub (extern, in neuem Tab mit rel="noopener").'),
    practice('praxis-2', 'Erkläre, warum ein Link mit href="#top" nach oben springt, wenn das Body- oder Header-Element id="top" besitzt.')
  ],
  flashcards: [
    {
      id: 'fc-html-css-04-1',
      lessonId: 'topic-html-css-links-navigation',
      type: 'multiple-choice',
      question: 'Mit welchem Attribut wird das Ziel eines Hyperlinks im <a>-Tag definiert?',
      answers: [
        { id: 'a1', text: 'href' },
        { id: 'a2', text: 'src' },
        { id: 'a3', text: 'link' }
      ],
      correctAnswer: 'a1',
      explanation: 'href steht für Hypertext Reference und bestimmt die Ziel-URL.',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-04-2',
      lessonId: 'topic-html-css-links-navigation',
      type: 'multiple-choice',
      question: 'Welches Attribut öffnet einen Link in einem neuen Browser-Tab?',
      answers: [
        { id: 'a1', text: 'target="_blank"' },
        { id: 'a2', text: 'target="_new"' },
        { id: 'a3', text: 'window="tab"' }
      ],
      correctAnswer: 'a1',
      explanation: 'target="_blank" weist den Browser an, einen neuen Browsing-Kontext zu öffnen.',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-04-3',
      lessonId: 'topic-html-css-links-navigation',
      type: 'multiple-choice',
      question: 'Welcher Unterschied besteht zwischen einem relativen und einem absoluten Pfad?',
      answers: [
        { id: 'a1', text: 'Ein absoluter Pfad enthält die vollständige Protokoll- und Domainangabe, ein relativer Pfad navigiert relativ zum aktuellen Verzeichnis.' },
        { id: 'a2', text: 'Relative Pfade sind verschlüsselt, absolute unverschlüsselt.' },
        { id: 'a3', text: 'Absolute Pfade funktionieren nur lokal, relative nur im Internet.' }
      ],
      correctAnswer: 'a1',
      explanation: 'Relative Pfade bleiben auch beim Verschieben auf andere Testumgebungen oder Server intakt.',
      difficulty: 'medium',
      tags: ['HTML & CSS']
    }
  ]
}
