import type { ContentBlock, Exercise, Topic } from '../../types/content'

export const htmlCss06Slug = 'block-inline'

const h = (text: string, level: 2 | 3 | 4 = 2): ContentBlock => ({ type: 'heading', level, text })
const p = (text: string): ContentBlock => ({ type: 'paragraph', text })
const table = (headers: string[], rows: string[][]): ContentBlock => ({ type: 'table', headers, rows })
const list = (...items: string[]): ContentBlock => ({ type: 'list', style: 'bullet', items })
const code = (val: string, language = 'html'): ContentBlock => ({ type: 'code', language, code: val })
const interactive = (component: string, caption?: string): ContentBlock => ({ type: 'interactive', component, caption })

const practice = (id: string, question: string): Exercise => ({
  id: 'html-css-' + htmlCss06Slug + '-' + id,
  topicSlug: htmlCss06Slug,
  type: 'technical-problem',
  difficulty: 'medium',
  question,
})

export const htmlCss06Topic: Topic = {
  id: 'topic-html-css-block-inline',
  slug: htmlCss06Slug,
  moduleSlug: 'html-css',
  title: 'Block- vs. Inline-Elemente & Normalfluss',
  shortIntro: 'Unterschiede im Standard-Rendering: Block-Boxen, Inline-Elemente, inline-block und das Box-Verhalten.',
  order: 6,
  content: [
    h('Lernziele dieser Lektion'),
    p('Du verstehst den Unterschied zwischen Block- und Inline-Elementen, weißt, warum Inline-Tags keine vertikalen Abstände annehmen und wie display: inline-block beide Welten vereint.'),

    h('1. Das fundamentale Rendering-Verhalten'),
    p('Jedes HTML-Element besitzt eine vordefinierte Darstellungsart im Standardfluss des Browsers (Normal Flow):'),
    table(['Eigenschaft', 'Block-Elemente (z. B. div, p, h1, ul)', 'Inline-Elemente (z. B. span, a, strong, em)'], [
      ['Zeilenumbruch', 'Beginnt stets auf einer NEUEN Zeile.', 'Fließt direkt im laufenden Textfluss mit.'],
      ['Breite (width)', 'Nimmt standardmäßig 100% der verfügbaren Elternbreite ein.', 'Nimmt exakt so viel Platz ein, wie der Textinhalt benötigt.'],
      ['Maße setzbar?', 'width und height können beliebig per CSS definiert werden.', 'width und height werden ignoriert!'],
      ['Abstände (Padding/Margin)', 'margin und padding wirken allseitig (oben, unten, links, rechts).', 'margin-top und margin-bottom wirken NICHT auf den Textfluss! Nur horizontal.']
    ]),

    h('2. display: inline-block als Lösung'),
    p('Mit der CSS-Eigenschaft display: inline-block erhält ein Element das Beste beider Welten: Es bleibt im Textfluss in einer Reihe mit anderen Elementen, reagiert aber voll auf width, height, padding und margin:'),
    code('.badge {\n  display: inline-block;\n  padding: 4px 8px;\n  margin: 0 4px;\n  background: #e2e8f0;\n  border-radius: 4px;\n}', 'css'),

    h('3. Interaktive Live-Sandbox'),
    h('4. Original-Aufgabe 09_Block-Inline & Offizielle Musterlösung'),
    p('Aufgabe aus dem Schulungsarchiv: Demonstriere den Unterschied zwischen Block-Elementen (die die volle Breite einnehmen) und Inline-Elementen (die im Textfluss stehen) sowie display: inline-block.'),
    code(`<!-- Aus 09_Block-Inline-Elemente/Beispiel.html (Offizielle Musterlösung) -->
<style>
  .block-box {
    display: block;
    width: 200px;
    background-color: #3b82f6;
    color: white;
    padding: 10px;
    margin-bottom: 10px;
  }
  .inline-badge {
    display: inline-block;
    padding: 6px 12px;
    background-color: #10b981;
    color: white;
    border-radius: 4px;
    margin-right: 8px;
  }
</style>

<div class="block-box">Block-Box (erzwingt Zeilenumbruch)</div>
<span class="inline-badge">Badge 1 (inline-block)</span>
<span class="inline-badge">Badge 2 (inline-block)</span>`, 'html'),

    interactive('html-css-sandbox', 'Vergleiche Block-, Inline- und Inline-Block-Verhalten live'),

    h('Begleitende Schulungsunterlagen & Referenzen', 3),
    list(
      '[Präsentation: HTML Einführung (PDF)](/resources/html-css/praesentation/1_HTML-Einführung.pdf)',
      '[HTML-Kurzreferenz (HTML)](/resources/html-css/nuetzliches/HTML-Kurzreferenz.html)'
    )

  ],
  exercises: [
    practice('praxis-1', 'Demonstriere den Unterschied: Setze zwei <span>-Elemente nebeneinander und weise einem display: block sowie dem anderen display: inline-block zu.'),
    practice('praxis-2', 'Warum werden für moderne Seitenlayouts heute Flexbox und Grid statt float genutzt?')
  ],
  flashcards: [
    {
      id: 'fc-html-css-06-1',
      lessonId: 'topic-html-css-block-inline',
      type: 'multiple-choice',
      question: 'Wie verhält sich ein reines Block-Element standardmäßig in Bezug auf die Breite?',
      answers: [
        { id: 'a1', text: 'Es nimmt die volle verfügbare Breite seines Eltern-Containers ein (100 %) und erzeugt einen Zeilenumbruch davor und danach.' },
        { id: 'a2', text: 'Es schrumpft exakt auf die Inhaltsbreite zusammen.' },
        { id: 'a3', text: 'Es nimmt standardmäßig höchstens 50 % des Bildschirms ein.' }
      ],
      correctAnswer: 'a1',
      explanation: 'Blockelemente breiten sich horizontal maximal aus und beginnen auf einer neuen Zeile.',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-06-2',
      lessonId: 'topic-html-css-block-inline',
      type: 'multiple-choice',
      question: 'Kann man einem reinen Inline-Element wie <span> eine feste width und height in CSS zuweisen?',
      answers: [
        { id: 'a1', text: 'Nein, bei display: inline werden Breiten- und Höhenangaben ignoriert.' },
        { id: 'a2', text: 'Ja, width und height wirken bei Inline-Elementen uneingeschränkt.' },
        { id: 'a3', text: 'Ja, aber nur bei Bildern und Links.' }
      ],
      correctAnswer: 'a1',
      explanation: 'Erst durch Umstellung auf display: block oder display: inline-block greifen width und height.',
      difficulty: 'medium',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-06-3',
      lessonId: 'topic-html-css-block-inline',
      type: 'multiple-choice',
      question: 'Was bewirkt die CSS-Eigenschaft clear: both?',
      answers: [
        { id: 'a1', text: 'Sie hebt das Umfließen von vorherigen float-Elementen auf und erzwingt die Platzierung unterhalb der gefloateten Boxen.' },
        { id: 'a2', text: 'Sie löscht alle Stylesheets der Seite.' },
        { id: 'a3', text: 'Sie zwingt das Element in den Hintergrund.' }
      ],
      correctAnswer: 'a1',
      explanation: 'Clear verhindert das ungewollte Hochrutschen nachfolgender Container hinter gefloatete Elemente.',
      difficulty: 'medium',
      tags: ['HTML & CSS']
    }
  ]
}
