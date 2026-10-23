import type { ContentBlock, Exercise, Topic } from '../../types/content'

export const htmlCss14Slug = 'flexbox-grundlagen'

const h = (text: string, level: 2 | 3 | 4 = 2): ContentBlock => ({ type: 'heading', level, text })
const p = (text: string): ContentBlock => ({ type: 'paragraph', text })
const table = (headers: string[], rows: string[][]): ContentBlock => ({ type: 'table', headers, rows })
const list = (...items: string[]): ContentBlock => ({ type: 'list', style: 'bullet', items })
const code = (val: string, language = 'html'): ContentBlock => ({ type: 'code', language, code: val })
const note = (text: string): ContentBlock => ({ type: 'note', text })
const interactive = (component: string, caption?: string): ContentBlock => ({ type: 'interactive', component, caption })

const practice = (id: string, question: string): Exercise => ({
  id: 'html-css-' + htmlCss14Slug + '-' + id,
  topicSlug: htmlCss14Slug,
  type: 'technical-problem',
  difficulty: 'medium',
  question,
})

export const htmlCss14Topic: Topic = {
  id: 'topic-html-css-flexbox-grundlagen',
  slug: htmlCss14Slug,
  moduleSlug: 'html-css',
  title: 'Flexbox: Grundlagen, Achsen & Ausrichtung',
  shortIntro: 'Vollständiger Leitfaden zum CSS Flexible Box Layout: Haupt- und Kreuzachse, flex-direction, justify-content, align-items und gap.',
  order: 14,
  content: [
    h('Lernziele dieser Lektion'),
    p('Nach dieser Lektion kannst du mehrspaltige Layouts und Navigationsleisten mit Flexbox erstellen, Elemente auf Haupt- und Kreuzachse millimetergenau ausrichten und Elemente perfekt im Raum zentrieren.'),

    h('1. Warum Flexbox? (Das Ende von Float-Hacks)'),
    p('Vor Flexbox mussten Webentwickler Spalten mit float: left und fehleranfälligen clearfix-Hacks bauen. Flexbox (CSS Flexible Box Module) wurde speziell dafür entwickelt, Elemente in einer Dimension (linear in Zeile oder Spalte) flexibel anzuordnen, Abstände gleichmäßig zu verteilen und Höhen automatisch aneinander anzupassen.'),

    h('2. Das Container-Item Prinzip'),
    p('Flexbox unterscheidet strikt zwischen zwei Ebenen:'),
    table(['Begriff', 'Deklaration', 'Wirkung & Reichweite'], [
      ['Flex-Container (Obercontainer)', 'display: flex; oder display: inline-flex;', 'Aktiviert das Flexbox-Modell. Wirkt GENAU EINE EBENE TIEF auf die direkten Kinder.'],
      ['Flex-Items (Kind-Elemente)', 'Direkte Kinder im Flex-Container', 'Werden automatisch zu flexiblen Boxen. Tiefer verschachtelte Enkelkinder werden NICHT beeinflusst.']
    ]),
    note('Wichtig laut Dozent Robert Reich: Flexbox wirkt nur auf Kinder der 1. Ebene. Will man Untercontainer ebenfalls flexibel gestalten, muss auf dem Kind-Element erneut display: flex; deklariert werden (Verschachtelung).'),

    h('3. Die beiden Achsen: Hauptachse & Kreuzachse'),
    p('Das gesamte Flexbox-System orientiert sich an zwei Achsen:'),
    table(['Achse', 'Standard-Richtung', 'Gesteuert durch'], [
      ['Hauptachse (Main Axis)', 'Horizontal von links nach rechts (row)', 'justify-content'],
      ['Kreuzachse (Cross Axis)', 'Vertikal von oben nach unten (senkrecht zur Hauptachse)', 'align-items']
    ]),

    h('4. Die Hauptachse steuern: flex-direction'),
    table(['Wert', 'Richtung der Hauptachse', 'Typischer Anwendungsfall'], [
      ['row (Standard)', 'Horizontal: links nach rechts', 'Desktop-Navigation, Spalten nebeneinander'],
      ['column', 'Vertikal: oben nach unten', 'Mobile Smartphone-Ansicht, Formularfelder untereinander'],
      ['row-reverse', 'Horizontal: rechts nach links', 'Umgekehrte Zeilenreihenfolge'],
      ['column-reverse', 'Vertikal: unten nach oben', 'Umgekehrte Stapelung']
    ]),

    h('5. Ausrichtung auf der Hauptachse: justify-content'),
    table(['Wert', 'Verteilung der Items'], [
      ['flex-start (Standard)', 'Items stehen dicht am Anfang der Hauptachse (links bei row).'],
      ['center', 'Items werden mittig im Container zentriert.'],
      ['flex-end', 'Items stehen ganz am Ende der Hauptachse (rechts bei row).'],
      ['space-between', 'Erstes Item ganz links, letztes ganz rechts; der Restplatz wird absolut gleichmäßig DAZWISCHEN verteilt.'],
      ['space-around', 'Items erhalten gleichen Raum links und rechts (Abstand an den Rändern ist halb so groß wie zwischen zwei Items).'],
      ['space-evenly', 'Alle Abstände (auch zu den Außenrändern) sind mathematisch exakt gleich groß.']
    ]),

    h('6. Ausrichtung auf der Kreuzachse: align-items'),
    table(['Wert', 'Verhalten der Items'], [
      ['stretch (Standard)', 'Alle Items dehnen sich automatisch auf die volle Höhe des höchsten Elements aus.'],
      ['flex-start', 'Items richten sich am oberen Rand der Kreuzachse aus.'],
      ['center', 'Items werden vertikal mittig zentriert.'],
      ['flex-end', 'Items richten sich am unteren Rand aus.'],
      ['baseline', 'Schrift-Grundlinien der Texte werden auf eine gemeinsame Höhe gebracht.']
    ]),

    h('7. Das Wunder: Perfekte Zentrierung in 3 Zeilen'),
    p('Die berüchtigte Web-Aufgabe „Zentriere ein Element horizontal und vertikal“ wird mit Flexbox trivial:'),
    code('.parent-hero {\n  display: flex;\n  justify-content: center; /* horizontal */\n  align-items: center;     /* vertikal */\n  height: 300px;\n}', 'css'),

    h('8. Moderne Abstände mit gap'),
    p('Früher musste man margins auf Items setzen und das letzte Kind mühsam mit :last-child entstören. Heute definiert man einfach gap auf dem Container:'),
    code('.nav-list {\n  display: flex;\n  gap: 16px; /* exakt 16px Abstand NUR zwischen den Items, nicht an den Außenkanten */\n}', 'css'),

    h('9. Original-Übung aus Präsentation 3 (Flexbox Layout)'),
    p('Aufgabe: Erstelle eine 3-Spalten-Leiste mit flexiblen Breiten 20%, 30% und 50%.'),
    h('Offizielle Musterlösung:', 3),
    code('<section class="flex-layout">\n  <article class="col-20">Artikel 1 (20%)</article>\n  <article class="col-30">Artikel 2 (30%)</article>\n  <article class="col-50">Artikel 3 (50%)</article>\n</section>\n\n<style>\n.flex-layout {\n  display: flex;\n  gap: 12px;\n}\n.col-20 { width: 20%; background: #fee2e2; padding: 16px; }\n.col-30 { width: 30%; background: #fef3c7; padding: 16px; }\n.col-50 { width: 50%; background: #dcfce7; padding: 16px; }\n</style>', 'html'),

    h('10. Interaktive Live-Sandbox'),
    interactive('html-css-sandbox', 'Experimentiere mit justify-content und align-items'),

    h('Begleitende Schulungsunterlagen & Referenzen', 3),
    list(
      '[Präsentation: Flexbox Kurzbeschreibung (PDF)](/resources/html-css/praesentation/2.5_CSS-Flexbox-Kurzbeschreibung.pdf)',
      '[Präsentation: CSS Flexbox Hauptleitfaden (PDF)](/resources/html-css/praesentation/3_CSS-Flexbox.pdf)'
    )

  ],
  exercises: [
    practice('praxis-1', 'Zentriere eine Box sowohl horizontal als auch vertikal perfekt in der Mitte eines Bildschirms mittels Flexbox (justify-content: center; align-items: center).'),
    practice('praxis-2', 'Erstelle eine 3-Spalten-Leiste (20%, 30%, 50%) gemäß Prüfungsaufgabe 6 aus der Klausurvorbereitung.')
  ],
  flashcards: [
    {
      id: 'fc-html-css-14-1',
      lessonId: 'topic-html-css-flexbox-grundlagen',
      type: 'multiple-choice',
      question: 'Welche Eigenschaft richtet Elemente entlang der Hauptachse eines Flex-Containers aus?',
      answers: [
        { id: 'a1', text: 'justify-content' },
        { id: 'a2', text: 'align-items' },
        { id: 'a3', text: 'flex-wrap' }
      ],
      correctAnswer: 'a1',
      explanation: 'Justify-content steuert die Hauptachse (bei row horizontal, bei column vertikal).',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-14-2',
      lessonId: 'topic-html-css-flexbox-grundlagen',
      type: 'multiple-choice',
      question: 'Welche Eigenschaft richtet Elemente entlang der Querachse eines Flex-Containers aus?',
      answers: [
        { id: 'a1', text: 'align-items' },
        { id: 'a2', text: 'justify-content' },
        { id: 'a3', text: 'flex-direction' }
      ],
      correctAnswer: 'a1',
      explanation: 'Align-items kontrolliert die senkrecht zur Hauptachse stehende Querachse.',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-14-3',
      lessonId: 'topic-html-css-flexbox-grundlagen',
      type: 'multiple-choice',
      question: 'Wie lautet die Standardrichtung der Hauptachse bei display: flex;?',
      answers: [
        { id: 'a1', text: 'row (von links nach rechts in LTR-Sprachen)' },
        { id: 'a2', text: 'column (vertikal von oben nach unten)' },
        { id: 'a3', text: 'row-reverse (von rechts nach links)' }
      ],
      correctAnswer: 'a1',
      explanation: 'Standardmäßig reiht Flexbox Elemente in einer Zeile nebeneinander an.',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    }
  ]
}
