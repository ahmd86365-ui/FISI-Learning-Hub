import { useEffect, useRef, type FormEvent, type KeyboardEvent } from 'react'
import { CornerDownLeft, RotateCcw, ShieldCheck } from 'lucide-react'
import type { LinuxLabSession } from '../../lib/linuxTerminal'

export interface TerminalEntry { id: number; prompt: string; command: string; output: string; error?: boolean }

interface TerminalConsoleProps {
  session: LinuxLabSession
  entries: TerminalEntry[]
  command: string
  historyIndex: number
  onCommandChange: (value: string) => void
  onHistoryIndexChange: (value: number) => void
  onSubmit: () => void
  onReset: () => void
}

export function TerminalConsole({ session, entries, command, historyIndex, onCommandChange, onHistoryIndexChange, onSubmit, onReset }: TerminalConsoleProps) {
  const outputRef = useRef<HTMLDivElement>(null)
  useEffect(() => { outputRef.current?.scrollTo({ top: outputRef.current.scrollHeight, behavior: 'smooth' }) }, [entries])

  function submit(event: FormEvent) { event.preventDefault(); onSubmit() }
  function navigateHistory(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return
    event.preventDefault()
    const history = session.commandHistory
    if (!history.length) return
    const next = event.key === 'ArrowUp' ? Math.max(0, historyIndex < 0 ? history.length - 1 : historyIndex - 1) : Math.min(history.length, historyIndex + 1)
    onHistoryIndexChange(next === history.length ? -1 : next)
    onCommandChange(next === history.length ? '' : history[next])
  }

  const displayPath = session.cwd.replace('/home/student', '~') || '~'
  return (
    <section className="min-w-0 overflow-hidden rounded-2xl border border-ink-700 bg-ink-950 shadow-card-dark" aria-label="Simuliertes Linux-Terminal">
      <div className="flex min-h-12 items-center justify-between gap-3 border-b border-ink-800 bg-ink-900 px-4">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5" aria-hidden="true"><span className="h-3 w-3 rounded-full bg-rose-400" /><span className="h-3 w-3 rounded-full bg-amber-300" /><span className="h-3 w-3 rounded-full bg-emerald-400" /></div>
          <span className="hidden font-mono text-xs text-ink-300 sm:inline">student@fisi-lab: {displayPath}</span>
        </div>
        <button type="button" onClick={onReset} className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-xs font-semibold text-ink-300 transition-colors hover:bg-ink-800 hover:text-white" aria-label="Linux Lab zurücksetzen">
          <RotateCcw className="h-4 w-4" aria-hidden="true" /> Zurücksetzen
        </button>
      </div>

      <div ref={outputRef} className="h-[25rem] overflow-y-auto px-4 py-5 font-mono text-sm leading-6 text-ink-100 sm:h-[30rem]" role="log" aria-live="polite" aria-label="Terminalausgabe">
        <pre className="whitespace-pre-wrap text-emerald-300">FISI Linux Lab 1.0 — sichere Simulation{`\n`}Tippe einen Befehl oder nutze die Schnellhilfe.</pre>
        {entries.map((entry) => (
          <div key={entry.id} className="mt-3">
            <div className="break-all"><code className="text-emerald-300">{entry.prompt}$</code> <code className="text-white">{entry.command}</code></div>
            {entry.output && <pre className={`mt-1 whitespace-pre-wrap break-words ${entry.error ? 'text-rose-300' : 'text-ink-200'}`}>{entry.output}</pre>}
          </div>
        ))}
      </div>

      <form onSubmit={submit} className="border-t border-ink-800 bg-ink-900/80 p-3 sm:p-4">
        <div className="flex min-w-0 items-center gap-2 rounded-xl border border-ink-700 bg-ink-950 px-3 focus-within:border-emerald-400 focus-within:ring-2 focus-within:ring-emerald-400/20">
          <label htmlFor="linux-lab-command" className="shrink-0 font-mono text-sm text-emerald-300">{session.user}@{session.hostname}:{displayPath}$</label>
          <input id="linux-lab-command" value={command} onChange={(event) => onCommandChange(event.target.value)} onKeyDown={navigateHistory} autoComplete="off" autoCapitalize="off" spellCheck={false} className="min-h-12 min-w-0 flex-1 bg-transparent font-mono text-base text-white outline-none placeholder:text-ink-600" placeholder="Befehl eingeben …" aria-label="Linux-Befehl eingeben" />
          <button type="submit" disabled={!command.trim()} className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500 text-ink-950 transition-colors hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-40" aria-label="Befehl ausführen"><CornerDownLeft className="h-4 w-4" aria-hidden="true" /></button>
        </div>
        <p className="mt-2 flex items-center gap-2 text-xs text-ink-400"><ShieldCheck className="h-4 w-4 text-emerald-400" aria-hidden="true" /> Nur simulierte Befehle · Pfeiltasten durchsuchen den Verlauf</p>
      </form>
    </section>
  )
}
