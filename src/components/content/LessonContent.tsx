import { useState } from 'react'
import { Check, Copy, GraduationCap, Info, Lightbulb, Sparkles, TriangleAlert } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { ContentBlock } from '../../types/content'
import { illustrationRegistry } from './illustrations/registry'
import { IllustrationFrame } from './illustrations/IllustrationFrame'
import { interactiveRegistry } from './interactive/registry'

export function LessonContent({ blocks }: { blocks: ContentBlock[] }) {
  if (blocks.length === 0) return null

  return (
    <div className="space-y-6">
      {blocks.map((block, i) => (
        <ContentBlockView key={i} block={block} />
      ))}
    </div>
  )
}

const headingSizes = {
  2: 'text-2xl',
  3: 'text-xl',
  4: 'text-lg',
} as const

function ContentBlockView({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case 'heading': {
      const Tag = `h${block.level}` as 'h2' | 'h3' | 'h4'
      return (
        <Tag className={`${headingSizes[block.level]} font-bold tracking-tight text-ink-900 dark:text-white`}>
          {block.text}
        </Tag>
      )
    }

    case 'paragraph':
      return <p className="text-base leading-relaxed text-ink-600 dark:text-ink-300">{block.text}</p>

    case 'list':
      return block.style === 'numbered' ? (
        <ol className="list-decimal space-y-2 pl-6 text-base leading-relaxed text-ink-600 marker:text-ink-400 dark:text-ink-300 dark:marker:text-ink-500">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      ) : (
        <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-ink-600 marker:text-ink-400 dark:text-ink-300 dark:marker:text-ink-500">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )

    case 'table':
      return (
        <div className="overflow-x-auto rounded-xl border border-ink-200 dark:border-ink-800">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-ink-50 dark:bg-ink-900">
              <tr>
                {block.headers.map((h, i) => (
                  <th
                    key={i}
                    className="whitespace-nowrap border-b border-ink-200 px-4 py-2.5 font-semibold text-ink-700 dark:border-ink-800 dark:text-ink-200"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="odd:bg-white even:bg-ink-50/50 dark:odd:bg-ink-900 dark:even:bg-ink-900/50">
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className="border-b border-ink-100 px-4 py-2.5 text-ink-600 dark:border-ink-800/60 dark:text-ink-300"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    case 'code':
      return <CodeBlockView language={block.language} code={block.code} />

    case 'image':
    case 'diagram':
      return (
        <figure className="overflow-hidden rounded-xl border border-ink-200 dark:border-ink-800">
          <img src={block.src} alt={block.alt} className="w-full" loading="lazy" />
          {block.caption && (
            <figcaption className="border-t border-ink-200 bg-ink-50/60 px-4 py-2 text-center text-xs text-ink-500 dark:border-ink-800 dark:bg-ink-900/60 dark:text-ink-400">
              {block.caption}
            </figcaption>
          )}
        </figure>
      )

    case 'example':
      return (
        <div className="rounded-xl border border-dashed border-ink-300 bg-ink-50/60 p-4 dark:border-ink-700 dark:bg-ink-900/40">
          {block.title && (
            <p className="mb-1.5 text-sm font-semibold text-ink-800 dark:text-ink-100">{block.title}</p>
          )}
          <p className="text-sm leading-relaxed text-ink-600 dark:text-ink-300">{block.text}</p>
        </div>
      )

    case 'note':
      return <Callout icon={Info} tone="brand" label="Hinweis" text={block.text} />

    case 'warning':
      return <Callout icon={TriangleAlert} tone="amber" label="Achtung" text={block.text} />

    case 'key-points':
      return (
        <div className="rounded-xl border border-brand-200 bg-brand-50/60 p-5 dark:border-brand-500/30 dark:bg-brand-500/10">
          <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-brand-800 dark:text-brand-300">
            <Lightbulb className="h-4 w-4" aria-hidden="true" />
            Das Wichtigste auf einen Blick
          </p>
          <ul className="space-y-2">
            {block.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-ink-700 dark:text-ink-200">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-500 dark:text-brand-400" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )

    case 'insight':
      return (
        <div className="rounded-xl border border-violet-200 bg-violet-50/60 p-4 dark:border-violet-500/30 dark:bg-violet-500/10">
          <p className="mb-1.5 flex items-center gap-2 text-sm font-semibold text-violet-800 dark:text-violet-300">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            {block.title ?? 'Zusatzwissen'}
          </p>
          <p className="text-sm leading-relaxed text-violet-900/80 dark:text-violet-200/80">{block.text}</p>
        </div>
      )

    case 'exam-tip':
      return <Callout icon={GraduationCap} tone="rose" label="Prüfungsfokus" text={block.text} />

    case 'illustration': {
      const Illustration = illustrationRegistry[block.component]
      if (!Illustration) return null
      return (
        <IllustrationFrame caption={block.caption}>
          <Illustration />
        </IllustrationFrame>
      )
    }

    case 'interactive': {
      const Widget = interactiveRegistry[block.component]
      if (!Widget) return null
      return (
        <div>
          <Widget />
          {block.caption && (
            <p className="mt-2 text-center text-xs text-ink-500 dark:text-ink-400">{block.caption}</p>
          )}
        </div>
      )
    }
  }
}

function Callout({
  icon: Icon,
  tone,
  label,
  text,
}: {
  icon: LucideIcon
  tone: 'brand' | 'amber' | 'rose'
  label: string
  text: string
}) {
  const toneClsMap = {
    brand:
      'border-brand-200 bg-brand-50/60 text-brand-800 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300',
    amber:
      'border-amber-200 bg-amber-50/60 text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300',
    rose: 'border-rose-200 bg-rose-50/60 text-rose-800 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-300',
  } as const
  const toneCls = toneClsMap[tone]

  return (
    <div className={`flex gap-3 rounded-xl border p-4 ${toneCls}`}>
      <Icon className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
      <div>
        <p className="text-sm font-semibold">{label}</p>
        <p className="mt-0.5 text-sm leading-relaxed opacity-90">{text}</p>
      </div>
    </div>
  )
}

function CodeBlockView({ language, code }: { language?: string; code: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // Clipboard API unavailable — no fallback needed, copy is a nicety.
    }
  }

  return (
    <div className="overflow-hidden rounded-xl border border-ink-800 bg-ink-950">
      <div className="flex items-center justify-between border-b border-ink-800 px-4 py-2">
        <span className="font-mono text-xs uppercase tracking-wider text-ink-400">{language ?? 'code'}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-ink-400 transition-colors hover:bg-ink-800 hover:text-white"
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? 'Kopiert' : 'Kopieren'}
        </button>
      </div>
      <pre className="overflow-x-auto p-4">
        <code className="font-mono text-sm leading-relaxed text-ink-100">{code}</code>
      </pre>
    </div>
  )
}
