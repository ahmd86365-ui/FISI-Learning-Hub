import { useState, useId, useMemo } from 'react'
import Editor from '@monaco-editor/react'
import { Play, RotateCcw, ShieldCheck, Code, FileCode } from 'lucide-react'
import { useTheme } from '../../../contexts/ThemeContext'
import { initMonaco, registerMonacoLanguageProviders } from '../../../lib/monacoSetup'

// Ensure local Monaco workers and language completion providers are registered immediately
initMonaco()

interface HtmlCssSandboxProps {
  initialHtml?: string
  initialCss?: string
  title?: string
}

/**
 * Strips script tags, javascript: urls, meta refresh, base tags,
 * and inline event handlers as multi-layer defense-in-depth prior to iframe injection.
 */
function sanitizeHtmlAndCss(html: string, css: string): string {
  // 1. Strip <script>...</script> tags entirely
  let cleanHtml = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
  // 2. Strip on* event attributes (with quotes and unquoted)
  cleanHtml = cleanHtml.replace(/\s+on[a-z0-9_-]+\s*=\s*(['"]).*?\1/gi, '')
  cleanHtml = cleanHtml.replace(/\s+on[a-z0-9_-]+\s*=[^\s>]+/gi, '')
  // 3. Neutralize javascript: pseudo-protocols across all attributes
  cleanHtml = cleanHtml.replace(/javascript\s*:/gi, 'blocked:')
  // 4. Strip dangerous <meta> (e.g. meta refresh) and <base> tags
  cleanHtml = cleanHtml.replace(/<meta\b[^>]*>/gi, '')
  cleanHtml = cleanHtml.replace(/<base\b[^>]*>/gi, '')

  // 5. In CSS, strip behavior, expression, @import, or javascript: urls
  const cleanCss = css
    .replace(/@import\b[^;]+;/gi, '')
    .replace(/expression\s*\(.*?\)/gi, 'none')
    .replace(/javascript\s*:/gi, 'blocked:')
    .replace(/behavior\s*:[^;]+;/gi, '')

  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    /* Sandbox base resets */
    *, *::before, *::after { box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.5;
      padding: 1rem;
      margin: 0;
      color: #1e293b;
      background-color: #ffffff;
    }
    ${cleanCss}
  </style>
</head>
<body>
  ${cleanHtml}
</body>
</html>`
}

export function HtmlCssSandbox({
  initialHtml = '<div class="card">\n  <h2>Hallo FISI!</h2>\n  <p>Bearbeite HTML und CSS, um das Ergebnis live zu sehen.</p>\n  <button class="btn">Klick mich</button>\n</div>',
  initialCss = '.card {\n  padding: 1.5rem;\n  border-radius: 8px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  max-width: 400px;\n}\nh2 {\n  color: #0284c7;\n  margin-top: 0;\n}\n.btn {\n  background: #0284c7;\n  color: white;\n  border: none;\n  padding: 0.5rem 1rem;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.btn:hover {\n  background: #0369a1;\n}',
  title = 'Interaktive HTML/CSS Live-Vorschau',
}: HtmlCssSandboxProps) {
  const [htmlCode, setHtmlCode] = useState(initialHtml)
  const [cssCode, setCssCode] = useState(initialCss)
  const [previewDoc, setPreviewDoc] = useState(() => sanitizeHtmlAndCss(initialHtml, initialCss))
  const [activeTab, setActiveTab] = useState<'html' | 'css'>('html')
  const sandboxId = useId()
  const { resolvedTheme } = useTheme()

  const monacoTheme = useMemo(() => {
    return resolvedTheme === 'dark' ? 'vs-dark' : 'light'
  }, [resolvedTheme])

  const handleRun = () => {
    setPreviewDoc(sanitizeHtmlAndCss(htmlCode, cssCode))
  }

  const handleReset = () => {
    setHtmlCode(initialHtml)
    setCssCode(initialCss)
    setPreviewDoc(sanitizeHtmlAndCss(initialHtml, initialCss))
  }

  const editorOptions = useMemo(
    () => ({
      minimap: { enabled: false },
      fontSize: 13,
      lineHeight: 20,
      fontFamily: "'Fira Code', 'Cascadia Code', Consolas, 'Courier New', monospace",
      tabSize: 2,
      scrollBeyondLastLine: false,
      automaticLayout: true,
      lineNumbers: 'on' as const,
      lineNumbersMinChars: 3,
      wordWrap: 'on' as const,
      folding: true,
      renderLineHighlight: 'all' as const,
      suggestOnTriggerCharacters: true,
      quickSuggestions: { other: true, comments: true, strings: true },
      quickSuggestionsDelay: 10,
      acceptSuggestionOnEnter: 'on' as const,
      tabCompletion: 'on' as const,
      suggest: {
        showWords: true,
        showSnippets: true,
        localityBonus: true,
        snippetsPreventQuickSuggestions: false,
      },
      autoClosingBrackets: 'always' as const,
      autoClosingQuotes: 'always' as const,
      formatOnPaste: true,
      scrollbar: {
        verticalScrollbarSize: 8,
        horizontalScrollbarSize: 8,
      },
    }),
    []
  )

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-ink-200 bg-white shadow-sm dark:border-ink-800 dark:bg-ink-900">
      <div className="flex flex-wrap items-center justify-between border-b border-ink-200 bg-ink-50/70 px-4 py-2.5 dark:border-ink-800 dark:bg-ink-950">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-ink-900 dark:text-white">{title}</span>
          <span
            className="inline-flex items-center gap-1 rounded bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400"
            title="Sandbox ohne Script-Ausführung für maximale Sicherheit"
          >
            <ShieldCheck className="h-3 w-3" />
            Isoliert
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1 rounded-lg border border-ink-300 bg-white px-2.5 py-1 text-xs font-medium text-ink-700 hover:bg-ink-100 dark:border-ink-700 dark:bg-ink-800 dark:text-ink-200 dark:hover:bg-ink-700"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Zurücksetzen
          </button>
          <button
            type="button"
            onClick={handleRun}
            className="inline-flex items-center gap-1 rounded-lg bg-brand-600 px-3 py-1 text-xs font-medium text-white hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
          >
            <Play className="h-3.5 w-3.5" />
            Aktualisieren
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-ink-200 dark:divide-ink-800">
        {/* Editor column */}
        <div className="flex flex-col h-[400px]">
          <div className="flex border-b border-ink-200 bg-ink-100/50 dark:border-ink-800 dark:bg-ink-900/60">
            <button
              type="button"
              onClick={() => setActiveTab('html')}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeTab === 'html'
                  ? 'border-b-2 border-brand-500 bg-white text-brand-600 dark:bg-ink-900 dark:text-brand-400'
                  : 'text-ink-500 hover:text-ink-900 dark:text-ink-400 dark:hover:text-ink-100'
              }`}
            >
              <Code className="h-3.5 w-3.5" />
              HTML
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('css')}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeTab === 'css'
                  ? 'border-b-2 border-brand-500 bg-white text-brand-600 dark:bg-ink-900 dark:text-brand-400'
                  : 'text-ink-500 hover:text-ink-900 dark:text-ink-400 dark:hover:text-ink-100'
              }`}
            >
              <FileCode className="h-3.5 w-3.5" />
              CSS
            </button>
          </div>
          <div className="flex-1 relative overflow-hidden bg-ink-950">
            {activeTab === 'html' ? (
              <Editor
                height="100%"
                language="html"
                theme={monacoTheme}
                value={htmlCode}
                onChange={(value) => setHtmlCode(value || '')}
                beforeMount={registerMonacoLanguageProviders}
                onMount={(editor) => {
                  editor.onDidChangeModelContent((e) => {
                    if (e.changes.length === 1 && e.changes[0].text) {
                      const text = e.changes[0].text
                      if (text === '<' || text === ':' || /^[a-zA-Z0-9-]$/.test(text)) {
                        editor.trigger('keyboard', 'editor.action.triggerSuggest', {})
                      }
                    }
                  })
                }}
                options={editorOptions}
                loading={
                  <div className="flex h-full items-center justify-center text-xs text-ink-400">
                    Lade HTML-Editor...
                  </div>
                }
              />
            ) : (
              <Editor
                height="100%"
                language="css"
                theme={monacoTheme}
                value={cssCode}
                onChange={(value) => setCssCode(value || '')}
                beforeMount={registerMonacoLanguageProviders}
                onMount={(editor) => {
                  editor.onDidChangeModelContent((e) => {
                    if (e.changes.length === 1 && e.changes[0].text) {
                      const text = e.changes[0].text
                      if (text === ':' || text === ' ' || /^[a-zA-Z0-9-]$/.test(text)) {
                        editor.trigger('keyboard', 'editor.action.triggerSuggest', {})
                      }
                    }
                  })
                }}
                options={editorOptions}
                loading={
                  <div className="flex h-full items-center justify-center text-xs text-ink-400">
                    Lade CSS-Editor...
                  </div>
                }
              />
            )}
          </div>
        </div>

        {/* Live sandboxed preview column */}
        <div className="flex flex-col h-[400px] bg-white">
          <div className="border-b border-ink-200 bg-ink-100/30 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-ink-500 dark:border-ink-800 dark:bg-ink-900/40 dark:text-ink-400">
            Live-Ergebnis
          </div>
          <div className="flex-1 bg-white">
            <iframe
              id={sandboxId}
              title="HTML and CSS Isolated Sandbox Preview"
              sandbox=""
              srcDoc={previewDoc}
              className="w-full h-full border-0 bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
