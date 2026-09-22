import { useRef, useState, type FormEvent } from 'react'
import { Button, ButtonLink } from '../components/Button'
import { terminalExercises } from '../data/linux/terminalExercises'
import { evaluateCommand, virtualLinux } from '../lib/linuxTerminal'

export default function LinuxTerminalTrainer() {
  const [index, setIndex] = useState(0)
  const [answer, setAnswer] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [result, setResult] = useState<'correct' | 'wrong' | 'solution' | null>(null)
  const [output, setOutput] = useState<string | null>(null)
  const [showHint, setShowHint] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const exercise = terminalExercises[index]
  const finished = index === terminalExercises.length - 1 && result !== null && result !== 'wrong'

  function submit(event: FormEvent) {
    event.preventDefault()
    if (result === 'correct' || result === 'solution') return
    const evaluation = evaluateCommand(answer, exercise.command)
    setAttempts((value) => value + 1)
    setResult(evaluation.correct ? 'correct' : 'wrong')
    setOutput(evaluation.output)
    if (evaluation.correct) setCorrect((value) => value + 1)
    else inputRef.current?.focus()
  }

  function next() {
    setIndex((value) => value + 1)
    setAnswer('')
    setAttempts(0)
    setResult(null)
    setOutput(null)
    setShowHint(false)
    requestAnimationFrame(() => inputRef.current?.focus())
  }

  function restart() {
    setIndex(0)
    setCorrect(0)
    setAnswer('')
    setAttempts(0)
    setResult(null)
    setOutput(null)
    setShowHint(false)
    requestAnimationFrame(() => inputRef.current?.focus())
  }

  return <div className="mx-auto w-full max-w-3xl min-w-0 px-4 py-8 sm:px-6 sm:py-12">
    <ButtonLink to="/it/linux/was-ist-linux" variant="ghost" size="sm">← Zur Lektion</ButtonLink>
    <header className="mb-7 mt-5">
      <h1 className="text-3xl font-bold text-ink-950 dark:text-white">Linux Terminal Trainer</h1>
      <p className="mt-2 text-ink-600 dark:text-ink-300">Übe die ersten Befehle aus „Was ist Linux?“.</p>
    </header>
    <div className="mb-4 flex flex-wrap justify-between gap-2 text-sm text-ink-600 dark:text-ink-300">
      <span>Aufgabe {index + 1} / {terminalExercises.length} · Richtig: {correct}</span>
      <span>Simulierte Lernumgebung</span>
    </div>
    <section className="min-w-0 rounded-2xl border border-ink-200 bg-white p-4 shadow-card dark:border-ink-800 dark:bg-ink-900 sm:p-7" aria-labelledby="terminal-task">
      <h2 id="terminal-task" className="font-semibold text-ink-950 dark:text-white">Aufgabe</h2>
      <p className="mt-2 text-ink-700 dark:text-ink-200">{exercise.task}</p>
      <div className="mt-6 min-w-0 overflow-hidden rounded-xl bg-ink-950 text-ink-100">
        <div className="border-b border-ink-700 px-4 py-2 text-xs text-ink-300">student@fisi:~</div>
        <form id="terminal-form" onSubmit={submit} className="flex min-w-0 items-center gap-2 px-4 py-4 font-mono text-base">
          <label htmlFor="terminal-command" className="shrink-0 text-teal-300">student@fisi:~$</label>
          <input ref={inputRef} id="terminal-command" value={answer} onChange={(event) => setAnswer(event.target.value)}
            aria-label="Simulierten Linux-Befehl eingeben" autoComplete="off" autoCapitalize="off" spellCheck={false}
            disabled={result === 'correct' || result === 'solution'}
            className="min-h-12 min-w-0 flex-1 rounded bg-transparent px-1 text-base text-white outline-none focus-visible:ring-2 focus-visible:ring-teal-300 disabled:opacity-70" />
        </form>
        {output !== null && <pre className="overflow-x-auto whitespace-pre-wrap break-words px-4 pb-4 font-mono text-sm text-ink-100">{output}</pre>}
      </div>
      <div aria-live="polite" className="mt-4 min-h-6 text-sm">
        {result === 'correct' && <p className="font-semibold text-teal-700 dark:text-teal-300">✓ Richtig</p>}
        {result === 'wrong' && <p className="font-semibold text-rose-700 dark:text-rose-300">✗ Noch nicht richtig. {exercise.hint}</p>}
        {result === 'solution' && <p className="text-ink-700 dark:text-ink-200">Lösung: <code className="font-semibold">{exercise.command}</code>. {exercise.explanation}</p>}
      </div>
      {showHint && result !== 'correct' && result !== 'solution' && <p className="mt-2 rounded-lg bg-ink-100 p-3 text-sm text-ink-800 dark:bg-ink-800 dark:text-ink-100"><strong>Tipp:</strong> {exercise.hint}</p>}
      <div className="mt-5 flex flex-wrap gap-3">
        {result !== 'correct' && result !== 'solution' && <Button type="submit" form="terminal-form" size="lg">Befehl prüfen</Button>}
        {result !== 'correct' && result !== 'solution' && <Button type="button" variant="secondary" size="lg" onClick={() => setShowHint((value) => !value)} aria-expanded={showHint}>Tipp anzeigen</Button>}
        {attempts >= 2 && result !== 'correct' && result !== 'solution' && <Button type="button" variant="ghost" size="lg" onClick={() => { setResult('solution'); setOutput(null) }}>Lösung anzeigen</Button>}
        {(result === 'correct' || result === 'solution') && (finished
          ? <Button type="button" size="lg" onClick={restart}>Nochmal üben</Button>
          : <Button type="button" size="lg" onClick={next}>Nächste Aufgabe</Button>)}
      </div>
    </section>
    <p className="mt-5 text-sm text-ink-500 dark:text-ink-400">Die Ausgaben sind Beispiele. Benutzer: {virtualLinux.user} · Home: {virtualLinux.directory}. Es werden keine echten Befehle ausgeführt.</p>
  </div>
}
