import type { ContentBlock, Exercise, Topic } from '../../types/content'

export const htmlCss10Slug = 'box-modell'

const h = (text: string, level: 2 | 3 | 4 = 2): ContentBlock => ({ type: 'heading', level, text })
const p = (text: string): ContentBlock => ({ type: 'paragraph', text })
const table = (headers: string[], rows: string[][]): ContentBlock => ({ type: 'table', headers, rows })
const list = (...items: string[]): ContentBlock => ({ type: 'list', style: 'bullet', items })
const code = (val: string, language = 'html'): ContentBlock => ({ type: 'code', language, code: val })
const note = (text: string): ContentBlock => ({ type: 'note', text })
const interactive = (component: string, caption?: string): ContentBlock => ({ type: 'interactive', component, caption })

const practice = (id: string, question: string): Exercise => ({
  id: 'html-css-' + htmlCss10Slug + '-' + id,
  topicSlug: htmlCss10Slug,
  type: 'technical-problem',
  difficulty: 'medium',
  question,
})

export const htmlCss10Topic: Topic = {
  id: 'topic-html-css-box-modell',
  slug: htmlCss10Slug,
  moduleSlug: 'html-css',
  title: 'Das CSS-Box-Modell & Layout-Berechnung',
  shortIntro: 'Content, Padding, Border, Margin, box-sizing: border-box, Margin-Collapsing und die 4-Werte-Kurzschreibweise.',
  order: 10,
  content: [
    h('Lernziele dieser Lektion'),
    p('Du beherrschst die Schichten des CSS-Box-Modells, kannst Element-Gesamtbreiten im Schlaf berechnen und verstehst, warum modernste Layouts ausnahmslos auf box-sizing: border-box setzen.'),

    h('1. Die 4 Schichten jeder CSS-Box'),
    p('Jedes sichtbare Element auf einer Webseite wird von der Rendering-Engine des Browsers als rechteckige Box modelliert. Diese besteht von innen nach außen aus 4 Schichten:'),
    table(['Schicht', 'CSS-Eigenschaft', 'Bedeutung & visuelle Auswirkung'], [
      ['1. Content', 'width, height', 'Der eigentliche Inhalt: Text, Bilder oder eingebettete Kind-Elemente.'],
      ['2. Padding', 'padding', 'Der Innenabstand zwischen dem Inhalt und dem Rahmen. Nimmt immer die Hintergrundfarbe des Elements an.'],
      ['3. Border', 'border', 'Der Rahmen der Box (Stil, Stärke und Farbe, z. B. 2px solid #000).'],
      ['4. Margin', 'margin', 'Der Außenabstand zu benachbarten Elementen. Bleibt stets vollständig transparent.']
    ]),

    h('2. Die Kurzschreibweise für Ränder (Uhrzeiger-Regel)'),
    p('Für margin und padding existieren 4 Syntax-Varianten, die im Uhrzeigersinn (Top, Right, Bottom, Left) ausgewertet werden:'),
    table(['Syntax', 'Werte-Zuordnung', 'Beispiel', 'Bedeutung'], [
      ['4 Werte', 'Oben, Rechts, Unten, Links', 'padding: 10px 20px 30px 40px;', 'Top: 10px, Right: 20px, Bottom: 30px, Left: 40px'],
      ['3 Werte', 'Oben, [Rechts & Links], Unten', 'padding: 10px 20px 30px;', 'Top: 10px, Horizontal: 20px, Bottom: 30px'],
      ['2 Werte', '[Oben & Unten], [Rechts & Links]', 'padding: 15px 30px;', 'Vertikal: 15px, Horizontal: 30px'],
      ['1 Wert', 'Alle 4 Seiten identisch', 'padding: 20px;', 'Rundum 20px']
    ]),

    h('3. Der fundamentale Unterschied: content-box vs. border-box'),
    p('Das Standardverhalten alter Browser (content-box) führt häufig zu zerschossenen Layouts, da Innenabstand und Rahmen zur definierten Breite HINZUGERECHNET werden:'),
    table(['Box-Modell-Typ', 'Berechnungsformel der Gesamtbreite', 'Auswirkung bei width: 100% + padding: 20px'], [
      ['box-sizing: content-box (Standard)', 'Gesamtbreite = width + padding-left + padding-right + border-left + border-right', 'Container sprengt den Bildschirmrand (100% + 40px)!'],
      ['box-sizing: border-box (Modern)', 'Gesamtbreite = width (Padding und Border sind BEREITS ENTHALTEN)', 'Container bleibt exakt 100% breit. Content schrumpft innen passend.']
    ]),

    h('4. Der universelle Best-Practice Reset'),
    p('In jedem professionellen Webprojekt wird in der allerersten Zeile des Stylesheets der universelle border-box Reset definiert:'),
    code('*, *::before, *::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}', 'css'),

    h('5. Phänomen: Margin-Collapsing (Margen-Verschmelzung)'),
    p('Wenn zwei vertikal benachbarte Blockelemente aufeinandertreffen (z. B. Absatz 1 mit margin-bottom: 30px und Absatz 2 mit margin-top: 20px), addieren sich die Abstände NICHT zu 50px!'),
    note('Margin-Collapsing Regel: Die beiden Margins verschmelzen zu einem einzigen Abstand, der dem GRÖSSEREN der beiden Werte entspricht (im Beispiel: exakt 30px). Margins kollabieren nur vertikal, niemals horizontal!'),

    h('6. Original-Aufgabe 10.3_CSS-Boxmodel & Lösung'),
    p('Aufgabe: Erstelle eine Box mit Breite 300px, 20px Innenabstand, 5px blauem Rahmen und 40px Außenabstand oben/unten sowie automatischer Zentrierung links/rechts.'),
    h('Offizielle Musterlösung:', 3),
    code('.box-centered {\n  box-sizing: border-box;\n  width: 300px;\n  padding: 20px;\n  border: 5px solid #2563eb;\n  margin: 40px auto; /* 40px oben/unten, auto zentriert horizontal */\n  background-color: #f8fafc;\n}', 'css'),

    h('7. Interaktive Live-Sandbox'),
    interactive('html-css-sandbox', 'Verändere Padding und Border und beobachte das Verhalten'),

    h('Begleitende Schulungsunterlagen & Referenzen', 3),
    list(
      '[CSS-Kurzreferenz (HTML)](/resources/html-css/nuetzliches/CSS-Kurzreferenz.html)'
    )

  ],
  exercises: [
    practice('praxis-1', 'Berechne die Gesamtbreite eines Elements mit width: 300px, padding: 15px, border: 2px solid black im content-box vs. border-box Modus.'),
    practice('praxis-2', 'Erkläre das Phänomen des Margin-Collapsing anhand von zwei untereinanderliegenden Absätzen.')
  ],
  flashcards: [
    {
      id: 'fc-html-css-10-1',
      lessonId: 'topic-html-css-box-modell',
      type: 'multiple-choice',
      question: 'In welcher Reihenfolge liest man die Kurzschreibweise margin: 10px 20px 15px 5px;?',
      answers: [
        { id: 'a1', text: 'Oben, Rechts, Unten, Links (im Uhrzeigersinn: Top, Right, Bottom, Left).' },
        { id: 'a2', text: 'Links, Rechts, Oben, Unten.' },
        { id: 'a3', text: 'Oben, Unten, Links, Rechts.' }
      ],
      correctAnswer: 'a1',
      explanation: 'Die 4 Werte stehen für Oben (10px), Rechts (20px), Unten (15px), Links (5px).',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-10-2',
      lessonId: 'topic-html-css-box-modell',
      type: 'multiple-choice',
      question: 'Was ist der große Vorteil von box-sizing: border-box gegenüber content-box?',
      answers: [
        { id: 'a1', text: 'Padding und Border werden in die definierte width/height eingerechnet, wodurch Container nicht unkontrolliert anwachsen.' },
        { id: 'a2', text: 'Es verdoppelt automatisch alle Innenabstände.' },
        { id: 'a3', text: 'Es entfernt Rahmen und Abstände vollständig.' }
      ],
      correctAnswer: 'a1',
      explanation: 'Mit border-box bleibt ein Element mit width: 100% auch mit Padding exakt passend im Eltern-Container.',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-10-3',
      lessonId: 'topic-html-css-box-modell',
      type: 'multiple-choice',
      question: 'Liegt das Padding innerhalb oder außerhalb des Rahmens (Border)?',
      answers: [
        { id: 'a1', text: 'Innerhalb des Rahmens (zwischen Content und Border).' },
        { id: 'a2', text: 'Außerhalb des Rahmens (wie Margin).' },
        { id: 'a3', text: 'Hinter dem Element als Hintergrundebene.' }
      ],
      correctAnswer: 'a1',
      explanation: 'Padding = Innenabstand, Border = Rahmen, Margin = Außenabstand.',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    }
  ]
}
