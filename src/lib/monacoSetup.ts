import { loader } from '@monaco-editor/react'
import type * as Monaco from 'monaco-editor'

let registered = false

const HTML_TAGS: Array<{ tag: string; desc: string; snippet?: string; void?: boolean }> = [
  { tag: 'div', desc: 'Generischer Block-Container', snippet: '<div$1>\n  $0\n</div>' },
  { tag: 'dialog', desc: 'Dialogfenster / Modal', snippet: '<dialog$1>\n  $0\n</dialog>' },
  { tag: 'details', desc: 'Aufklappbares Details-Element', snippet: '<details$1>\n  <summary>$2</summary>\n  $0\n</details>' },
  { tag: 'datalist', desc: 'Vordefinierte Optionen für Input', snippet: '<datalist id="$1">\n  <option value="$2">\n</datalist>' },
  { tag: 'p', desc: 'Textabsatz', snippet: '<p$1>$0</p>' },
  { tag: 'h1', desc: 'Überschrift 1. Ordnung', snippet: '<h1>$0</h1>' },
  { tag: 'h2', desc: 'Überschrift 2. Ordnung', snippet: '<h2>$0</h2>' },
  { tag: 'h3', desc: 'Überschrift 3. Ordnung', snippet: '<h3>$0</h3>' },
  { tag: 'h4', desc: 'Überschrift 4. Ordnung', snippet: '<h4>$0</h4>' },
  { tag: 'h5', desc: 'Überschrift 5. Ordnung', snippet: '<h5>$0</h5>' },
  { tag: 'h6', desc: 'Überschrift 6. Ordnung', snippet: '<h6>$0</h6>' },
  { tag: 'span', desc: 'Generischer Inline-Container', snippet: '<span$1>$0</span>' },
  { tag: 'a', desc: 'Hyperlink', snippet: '<a href="$1"$2>$0</a>' },
  { tag: 'button', desc: 'Schaltfläche', snippet: '<button type="${1|button,submit,reset|}"$2>$0</button>' },
  { tag: 'form', desc: 'Formular-Container', snippet: '<form action="$1" method="${2|post,get|}"$3>\n  $0\n</form>' },
  { tag: 'input', desc: 'Eingabefeld (Void-Element)', snippet: '<input type="${1|text,email,password,number,checkbox,radio,submit|}" name="$2"$3>', void: true },
  { tag: 'label', desc: 'Beschriftung für Formularelement', snippet: '<label for="$1">$0</label>' },
  { tag: 'select', desc: 'Auswahlliste', snippet: '<select name="$1" id="$2">\n  <option value="$3">$4</option>\n</select>' },
  { tag: 'option', desc: 'Option in Auswahlliste', snippet: '<option value="$1">$0</option>' },
  { tag: 'textarea', desc: 'Mehrzeiliges Textfeld', snippet: '<textarea name="$1" rows="${2:4}" cols="${3:50}">$0</textarea>' },
  { tag: 'ul', desc: 'Ungeordnete Aufzählungsliste', snippet: '<ul>\n  <li>$0</li>\n</ul>' },
  { tag: 'ol', desc: 'Nummerierte Liste', snippet: '<ol>\n  <li>$0</li>\n</ol>' },
  { tag: 'li', desc: 'Listeneintrag', snippet: '<li>$0</li>' },
  { tag: 'table', desc: 'Tabelle', snippet: '<table>\n  <thead>\n    <tr>\n      <th>$1</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>$0</td>\n    </tr>\n  </tbody>\n</table>' },
  { tag: 'tr', desc: 'Tabellenzeile', snippet: '<tr>\n  $0\n</tr>' },
  { tag: 'th', desc: 'Tabellenkopfzelle', snippet: '<th>$0</th>' },
  { tag: 'td', desc: 'Tabellendatenzelle', snippet: '<td>$0</td>' },
  { tag: 'img', desc: 'Bild / Grafik (Void-Element)', snippet: '<img src="$1" alt="$2"$3>', void: true },
  { tag: 'header', desc: 'Kopfbereich der Seite oder Sektion', snippet: '<header$1>\n  $0\n</header>' },
  { tag: 'footer', desc: 'Fußbereich der Seite oder Sektion', snippet: '<footer$1>\n  $0\n</footer>' },
  { tag: 'nav', desc: 'Navigationsbereich', snippet: '<nav$1>\n  $0\n</nav>' },
  { tag: 'main', desc: 'Hauptinhalt des Dokuments', snippet: '<main$1>\n  $0\n</main>' },
  { tag: 'section', desc: 'Thematischer Abschnitt', snippet: '<section$1>\n  $0\n</section>' },
  { tag: 'article', desc: 'Eigenständiger Artikel', snippet: '<article$1>\n  $0\n</article>' },
  { tag: 'aside', desc: 'Randbemerkung / Sidebar', snippet: '<aside$1>\n  $0\n</aside>' },
  { tag: 'style', desc: 'Internes CSS-Stylesheet', snippet: '<style>\n  $0\n</style>' },
  { tag: 'br', desc: 'Manueller Zeilenumbruch (Void-Element)', snippet: '<br>', void: true },
  { tag: 'hr', desc: 'Thematische Trennlinie (Void-Element)', snippet: '<hr>', void: true },
  { tag: 'strong', desc: 'Wichtiger, hervorgehobener Text (fett)', snippet: '<strong>$0</strong>' },
  { tag: 'em', desc: 'Betonter Text (kursiv)', snippet: '<em>$0</em>' },
]

const HTML_ATTRIBUTES: Array<{ attr: string; desc: string; snippet?: string }> = [
  { attr: 'class', desc: 'CSS-Klassenname', snippet: 'class="$1"' },
  { attr: 'id', desc: 'Eindeutige Element-ID', snippet: 'id="$1"' },
  { attr: 'style', desc: 'Inline-CSS-Deklaration', snippet: 'style="$1"' },
  { attr: 'src', desc: 'Ressourcen-URL (z. B. für Bilder/Skripte)', snippet: 'src="$1"' },
  { attr: 'href', desc: 'Hyperlink-Zieladresse', snippet: 'href="$1"' },
  { attr: 'alt', desc: 'Alternativtext für Grafiken', snippet: 'alt="$1"' },
  { attr: 'title', desc: 'Tooltip-Titel', snippet: 'title="$1"' },
  { attr: 'type', desc: 'Typ des Elements (z. B. input/button)', snippet: 'type="${1|text,email,password,number,button,submit|}"' },
  { attr: 'placeholder', desc: 'Hinweistext in Eingabefeldern', snippet: 'placeholder="$1"' },
  { attr: 'name', desc: 'Formularfeld-Name für HTTP-Request', snippet: 'name="$1"' },
  { attr: 'value', desc: 'Standardwert des Eingabefelds', snippet: 'value="$1"' },
  { attr: 'target', desc: 'Zielfenster für Link', snippet: 'target="${1|_blank,_self|}"' },
  { attr: 'rel', desc: 'Beziehung zur verlinkten Ressource', snippet: 'rel="${1|noopener noreferrer,stylesheet|}"' },
  { attr: 'required', desc: 'Pflichtfeld-Attribut', snippet: 'required' },
  { attr: 'disabled', desc: 'Deaktiviert das Formularelement', snippet: 'disabled' },
  { attr: 'checked', desc: 'Vorausgewähltes Kontrollkästchen', snippet: 'checked' },
  { attr: 'width', desc: 'Breite in Pixeln', snippet: 'width="$1"' },
  { attr: 'height', desc: 'Höhe in Pixeln', snippet: 'height="$1"' },
]

const CSS_PROPERTIES: Array<{ prop: string; desc: string; snippet: string }> = [
  { prop: 'display', desc: 'Layout-Verhalten des Elements', snippet: 'display: ${1|flex,grid,block,inline-block,inline,none|};' },
  { prop: 'color', desc: 'Schriftfarbe', snippet: 'color: ${1:#0284c7};' },
  { prop: 'background', desc: 'Hintergrund-Kurzform', snippet: 'background: ${1:#f8fafc};' },
  { prop: 'background-color', desc: 'Hintergrundfarbe', snippet: 'background-color: ${1:#f8fafc};' },
  { prop: 'font-size', desc: 'Schriftgröße', snippet: 'font-size: ${1|14px,16px,18px,1rem,1.25rem,1.5rem|};' },
  { prop: 'font-family', desc: 'Schriftart-Familie', snippet: 'font-family: ${1:system-ui, sans-serif};' },
  { prop: 'font-weight', desc: 'Schriftstärke', snippet: 'font-weight: ${1|normal,bold,500,600,700|};' },
  { prop: 'margin', desc: 'Außenabstand', snippet: 'margin: ${1|0,0.5rem,1rem,1.5rem,auto|};' },
  { prop: 'padding', desc: 'Innenabstand', snippet: 'padding: ${1|0.5rem,1rem,1.5rem|};' },
  { prop: 'border', desc: 'Rahmen-Kurzform', snippet: 'border: ${1:1px solid #e2e8f0};' },
  { prop: 'border-radius', desc: 'Eckenabrundung', snippet: 'border-radius: ${1|4px,8px,12px,9999px|};' },
  { prop: 'width', desc: 'Breite', snippet: 'width: ${1|100%,auto,300px|};' },
  { prop: 'max-width', desc: 'Maximale Breite', snippet: 'max-width: ${1|400px,600px,100%|};' },
  { prop: 'height', desc: 'Höhe', snippet: 'height: ${1|auto,100%,200px|};' },
  { prop: 'justify-content', desc: 'Hauptachsen-Ausrichtung in Flexbox', snippet: 'justify-content: ${1|center,space-between,space-around,flex-start,flex-end|};' },
  { prop: 'align-items', desc: 'Querachsen-Ausrichtung in Flexbox', snippet: 'align-items: ${1|center,flex-start,flex-end,stretch|};' },
  { prop: 'flex-direction', desc: 'Richtung der Flexbox-Hauptachse', snippet: 'flex-direction: ${1|row,column,row-reverse,column-reverse|};' },
  { prop: 'gap', desc: 'Abstand zwischen Flex- oder Grid-Kindern', snippet: 'gap: ${1|0.5rem,1rem,1.5rem|};' },
  { prop: 'position', desc: 'Positionierungsart', snippet: 'position: ${1|relative,absolute,fixed,sticky,static|};' },
  { prop: 'top', desc: 'Abstand von oben', snippet: 'top: ${1:0};' },
  { prop: 'left', desc: 'Abstand von links', snippet: 'left: ${1:0};' },
  { prop: 'right', desc: 'Abstand von rechts', snippet: 'right: ${1:0};' },
  { prop: 'bottom', desc: 'Abstand von unten', snippet: 'bottom: ${1:0};' },
  { prop: 'box-shadow', desc: 'Schlagschatten', snippet: 'box-shadow: ${1:0 1px 3px rgba(0,0,0,0.1)};' },
  { prop: 'cursor', desc: 'Mauszeiger-Darstellung', snippet: 'cursor: ${1|pointer,default,not-allowed|};' },
  { prop: 'opacity', desc: 'Deckkraft (0 bis 1)', snippet: 'opacity: ${1|0.5,0.8,1|};' },
  { prop: 'text-align', desc: 'Horizontale Textausrichtung', snippet: 'text-align: ${1|left,center,right,justify|};' },
  { prop: 'line-height', desc: 'Zeilenhöhe', snippet: 'line-height: ${1|1.2,1.5,1.75|};' },
  { prop: 'box-sizing', desc: 'Box-Modell Berechnung', snippet: 'box-sizing: ${1|border-box,content-box|};' },
  { prop: 'overflow', desc: 'Verhalten bei Inhaltsüberlauf', snippet: 'overflow: ${1|hidden,auto,scroll,visible|};' },
]

const CSS_VALUES: Record<string, string[]> = {
  display: ['flex', 'grid', 'block', 'inline-block', 'inline', 'none', 'inline-flex', 'contents', 'table', 'flow-root'],
  position: ['relative', 'absolute', 'fixed', 'sticky', 'static'],
  'justify-content': ['center', 'space-between', 'space-around', 'space-evenly', 'flex-start', 'flex-end', 'stretch'],
  'align-items': ['center', 'flex-start', 'flex-end', 'stretch', 'baseline'],
  'flex-direction': ['row', 'column', 'row-reverse', 'column-reverse'],
  'flex-wrap': ['nowrap', 'wrap', 'wrap-reverse'],
  'text-align': ['left', 'center', 'right', 'justify'],
  cursor: ['pointer', 'default', 'not-allowed', 'wait', 'text', 'move', 'grab'],
  'box-sizing': ['border-box', 'content-box'],
  overflow: ['hidden', 'auto', 'scroll', 'visible'],
  visibility: ['visible', 'hidden', 'collapse'],
}

export function registerMonacoLanguageProviders(monaco: typeof Monaco) {
  if (registered) return
  registered = true

  // 1. Register rich HTML completion provider
  monaco.languages.registerCompletionItemProvider('html', {
    triggerCharacters: ['<', ' ', ':', '/', '"', '=', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    provideCompletionItems(model, position) {
      const lineUntilCursor = model.getValueInRange({
        startLineNumber: position.lineNumber,
        startColumn: 1,
        endLineNumber: position.lineNumber,
        endColumn: position.column,
      })

      const wordInfo = model.getWordUntilPosition(position)
      const range = new monaco.Range(
        position.lineNumber,
        wordInfo.startColumn,
        position.lineNumber,
        wordInfo.endColumn
      )

      const suggestions: Monaco.languages.CompletionItem[] = []

      // Check if we are typing after '<' or opening tag
      const openTagMatch = lineUntilCursor.match(/<([a-zA-Z0-9-]*)$/)
      const insideTagMatch = lineUntilCursor.match(/<([a-zA-Z0-9-]+)(\s+[^>]*)?$/)

      if (openTagMatch) {
        // Tag completion directly after '<'
        const tagPrefix = openTagMatch[1].toLowerCase()
        const tagRange = new monaco.Range(
          position.lineNumber,
          position.column - tagPrefix.length,
          position.lineNumber,
          position.column
        )

        for (const item of HTML_TAGS) {
          if (!tagPrefix || item.tag.toLowerCase().startsWith(tagPrefix)) {
            suggestions.push({
              label: item.tag,
              kind: monaco.languages.CompletionItemKind.Snippet,
              documentation: item.desc,
              insertText: item.snippet
                ? item.snippet.replace(/^</, '') // '<' already typed
                : `${item.tag}>$0</${item.tag}>`,
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              range: tagRange,
              filterText: item.tag,
              sortText: item.tag === 'div' ? '00-div' : (item.tag === 'dialog' ? '01-dialog' : `10-${item.tag}`),
            })
          }
        }
      } else if (insideTagMatch && lineUntilCursor.endsWith(' ') || insideTagMatch && wordInfo.word) {
        // Attribute completion inside an opening tag
        const attrPrefix = wordInfo.word.toLowerCase()
        for (const item of HTML_ATTRIBUTES) {
          if (!attrPrefix || item.attr.toLowerCase().startsWith(attrPrefix)) {
            suggestions.push({
              label: item.attr,
              kind: monaco.languages.CompletionItemKind.Property,
              documentation: item.desc,
              insertText: item.snippet || `${item.attr}="$1"`,
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              range,
              sortText: `05-${item.attr}`,
            })
          }
        }
      } else {
        // General HTML tags without typing '<' first (Emmet-like convenience)
        const prefix = wordInfo.word.toLowerCase()
        if (prefix.length >= 1) {
          for (const item of HTML_TAGS) {
            if (item.tag.toLowerCase().startsWith(prefix)) {
              suggestions.push({
                label: item.tag,
                kind: monaco.languages.CompletionItemKind.Snippet,
                documentation: item.desc,
                insertText: item.snippet || `<${item.tag}>$0</${item.tag}>`,
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range,
                sortText: item.tag === 'div' ? '00-div' : `10-${item.tag}`,
              })
            }
          }
        }
      }

      return { suggestions }
    },
  })

  // 2. Register rich CSS completion provider
  monaco.languages.registerCompletionItemProvider('css', {
    triggerCharacters: [':', ' ', '-', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    provideCompletionItems(model, position) {
      const lineUntilCursor = model.getValueInRange({
        startLineNumber: position.lineNumber,
        startColumn: 1,
        endLineNumber: position.lineNumber,
        endColumn: position.column,
      })

      const wordInfo = model.getWordUntilPosition(position)
      const range = new monaco.Range(
        position.lineNumber,
        wordInfo.startColumn,
        position.lineNumber,
        wordInfo.endColumn
      )

      const suggestions: Monaco.languages.CompletionItem[] = []

      // Check if typing after property name and colon (e.g. "display:" or "display: ")
      const propValueMatch = lineUntilCursor.match(/([a-z-]+)\s*:\s*([^;]*)$/i)

      if (propValueMatch) {
        const propName = propValueMatch[1].toLowerCase()
        const currentVal = propValueMatch[2].trim().toLowerCase()
        const values = CSS_VALUES[propName]

        if (values) {
          const hasSpace = /\s+$/.test(lineUntilCursor)

          for (const val of values) {
            if (!currentVal || val.startsWith(currentVal)) {
              if (hasSpace || currentVal) {
                // Already has space after colon, e.g. "display: " or "display: f"
                const valueRange = new monaco.Range(
                  position.lineNumber,
                  wordInfo.startColumn,
                  position.lineNumber,
                  position.column
                )
                suggestions.push({
                  label: val,
                  kind: monaco.languages.CompletionItemKind.Value,
                  documentation: `CSS-Wert '${val}' für ${propName}`,
                  insertText: `${val};`,
                  range: valueRange,
                  sortText: `00-${val}`,
                })
              } else {
                // Immediately after colon without space, e.g. "display:"
                // Replaces "display:" with "display: flex;" cleanly
                const replaceRange = new monaco.Range(
                  position.lineNumber,
                  position.column - (propName.length + 1),
                  position.lineNumber,
                  position.column
                )
                suggestions.push({
                  label: val,
                  kind: monaco.languages.CompletionItemKind.Value,
                  documentation: `CSS-Wert '${val}' für ${propName}`,
                  insertText: `${propName}: ${val};`,
                  filterText: `${propName}:${val}`,
                  range: replaceRange,
                  sortText: `00-${val}`,
                })
              }
            }
          }
        }
      } else {
        // Property completion
        const prefix = wordInfo.word.toLowerCase()
        for (const item of CSS_PROPERTIES) {
          if (!prefix || item.prop.toLowerCase().startsWith(prefix)) {
            suggestions.push({
              label: item.prop,
              kind: monaco.languages.CompletionItemKind.Property,
              documentation: item.desc,
              insertText: item.snippet,
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              range,
              sortText: item.prop === 'display' ? '00-display' : `10-${item.prop}`,
            })
          }
        }
      }

      return { suggestions }
    },
  })
}

export function initMonaco() {
  if (typeof window === 'undefined') return
  loader.init().then((monaco) => {
    registerMonacoLanguageProviders(monaco)
  }).catch((err) => {
    console.error('Monaco loader init error:', err)
  })
}
