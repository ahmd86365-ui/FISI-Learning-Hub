import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Check, CheckCircle2, ChevronDown, Circle, CircleHelp, FlaskConical, Lightbulb, ListChecks, Play, TerminalSquare } from 'lucide-react'
import { Button } from '../components/Button'
import { FileTree } from '../components/linuxLab/FileTree'
import { TerminalConsole, type TerminalEntry } from '../components/linuxLab/TerminalConsole'
import { useLearningProgress } from '../contexts/LearningProgressContext'
import { quickHelp, terminalExercises } from '../data/linux/terminalExercises'
import { createLinuxLabSession, runLinuxCommand } from '../lib/linuxTerminal'

const progressId = (challengeId: string) => `linux-lab-${challengeId}`
const difficultyStyle = {
  Grundlagen: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300',
  Mittel: 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300',
  Fortgeschritten: 'bg-violet-50 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300',
}

export default function LinuxTerminalTrainer() {
  const [session, setSession] = useState(createLinuxLabSession)
  const [entries, setEntries] = useState<TerminalEntry[]>([])
  const [command, setCommand] = useState('')
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [activeIndex, setActiveIndex] = useState(0)
  const [showHint, setShowHint] = useState(false)
  const [challengePanelOpen, setChallengePanelOpen] = useState(false)
  const [lastOutput, setLastOutput] = useState('')
  const [sessionSuccesses, setSessionSuccesses] = useState<Set<string>>(new Set())
  const { isCompleted, isPending, toggleCompleted } = useLearningProgress()
  const completionInFlight = useRef<Set<string>>(new Set())
  const activeChallenge = terminalExercises[activeIndex]

  const completedCount = useMemo(() => terminalExercises.filter((item) => isCompleted(progressId(item.id)) || sessionSuccesses.has(item.id)).length, [isCompleted, sessionSuccesses])
  const percent = Math.round((completedCount / terminalExercises.length) * 100)

  useEffect(() => {
    if (!activeChallenge.isComplete(session, lastOutput)) return
    setSessionSuccesses((current) => current.has(activeChallenge.id) ? current : new Set(current).add(activeChallenge.id))
    const id = progressId(activeChallenge.id)
    if (isCompleted(id) || isPending(id) || completionInFlight.current.has(id)) return
    completionInFlight.current.add(id)
    void toggleCompleted(id).finally(() => completionInFlight.current.delete(id))
  }, [activeChallenge, isCompleted, isPending, lastOutput, session, toggleCompleted])

  function execute() {
    if (!command.trim()) return
    const promptPath = session.cwd.replace('/home/student', '~') || '~'
    const evaluation = runLinuxCommand(session, command)
    setSession(evaluation.session)
    setLastOutput(evaluation.output)
    setEntries((current) => evaluation.clear ? [] : [...current, { id: Date.now(), prompt: `${session.user}@${session.hostname}:${promptPath}`, command: command.trim(), output: evaluation.output, error: evaluation.error }])
    setCommand('')
    setHistoryIndex(-1)
  }

  function resetLab() {
    setSession(createLinuxLabSession())
    setEntries([])
    setCommand('')
    setLastOutput('')
    setSessionSuccesses(new Set())
    setHistoryIndex(-1)
  }

  function selectChallenge(index: number) {
    setActiveIndex(index); setShowHint(false); setChallengePanelOpen(false)
  }

  const activeDone = isCompleted(progressId(activeChallenge.id)) || sessionSuccesses.has(activeChallenge.id)
  return (
    <main className="mx-auto w-full max-w-[96rem] px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-ink-500 dark:text-ink-400">
        <Link to="/it" className="hover:text-brand-700 hover:underline dark:hover:text-brand-300">IT</Link><span aria-hidden="true">/</span>
        <Link to="/it/linux" className="hover:text-brand-700 hover:underline dark:hover:text-brand-300">Linux</Link><span aria-hidden="true">/</span><span>Linux Lab</span>
      </nav>

      <header className="mt-5 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-700 dark:text-brand-300"><FlaskConical className="h-4 w-4" aria-hidden="true" /> Praktische Lernumgebung</div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink-950 dark:text-white sm:text-4xl">Linux Lab · Terminal Praxis</h1>
          <p className="mt-3 text-base leading-7 text-ink-600 dark:text-ink-300">Übe Linux-Befehle in einem realistischen, vollständig simulierten Dateisystem. Deine Eingaben verlassen niemals den Browser.</p>
        </div>
        <div className="min-w-64 rounded-2xl border border-ink-200 bg-white p-4 shadow-soft dark:border-ink-800 dark:bg-ink-900">
          <div className="flex items-center justify-between text-sm"><span className="font-semibold text-ink-800 dark:text-ink-100">Lab-Fortschritt</span><span className="font-mono text-brand-700 dark:text-brand-300">{completedCount}/{terminalExercises.length}</span></div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-ink-100 dark:bg-ink-800" role="progressbar" aria-label="Linux-Lab-Fortschritt" aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent}><div className="h-full rounded-full bg-brand-600 transition-[width] duration-300 dark:bg-brand-400" style={{ width: `${percent}%` }} /></div>
        </div>
      </header>

      <div className="mt-8 lg:hidden">
        <button type="button" onClick={() => setChallengePanelOpen((open) => !open)} aria-expanded={challengePanelOpen} className="flex min-h-12 w-full items-center justify-between rounded-xl border border-ink-200 bg-white px-4 font-semibold text-ink-900 shadow-soft dark:border-ink-800 dark:bg-ink-900 dark:text-white">
          <span className="flex items-center gap-2"><ListChecks className="h-5 w-5 text-brand-600 dark:text-brand-400" aria-hidden="true" /> Aufgabe {activeIndex + 1}: {activeChallenge.title}</span><ChevronDown className={`h-5 w-5 transition-transform ${challengePanelOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
        </button>
      </div>

      <div className="mt-4 grid min-w-0 gap-5 lg:mt-8 lg:grid-cols-[17.5rem_minmax(0,1fr)] xl:grid-cols-[18rem_minmax(0,1fr)_17rem]">
        <aside className={`${challengePanelOpen ? 'block' : 'hidden'} min-w-0 lg:block`} aria-label="Linux-Lab-Aufgaben">
          <div className="rounded-2xl border border-ink-200 bg-white p-3 shadow-card dark:border-ink-800 dark:bg-ink-900 lg:sticky lg:top-24">
            <div className="px-2 pb-3 pt-1"><h2 className="font-semibold text-ink-950 dark:text-white">Aufgaben</h2><p className="mt-1 text-xs text-ink-500 dark:text-ink-400">In empfohlener Reihenfolge bearbeiten</p></div>
            <ol className="max-h-[38rem] space-y-1 overflow-y-auto">
              {terminalExercises.map((challenge, index) => {
                const done = isCompleted(progressId(challenge.id)) || sessionSuccesses.has(challenge.id)
                return <li key={challenge.id}><button type="button" onClick={() => selectChallenge(index)} aria-current={index === activeIndex ? 'step' : undefined} className={`flex min-h-12 w-full items-start gap-3 rounded-xl px-3 py-3 text-left transition-colors ${index === activeIndex ? 'bg-brand-50 text-brand-950 dark:bg-brand-500/10 dark:text-white' : 'text-ink-700 hover:bg-ink-50 dark:text-ink-200 dark:hover:bg-ink-800'}`}>
                  {done ? <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" aria-label="Abgeschlossen" /> : <Circle className="mt-0.5 h-5 w-5 shrink-0 text-ink-300 dark:text-ink-600" aria-hidden="true" />}
                  <span><span className="block text-xs font-medium text-ink-400">{String(index + 1).padStart(2, '0')}</span><span className="mt-0.5 block text-sm font-semibold leading-5">{challenge.title}</span></span>
                </button></li>
              })}
            </ol>
          </div>
        </aside>

        <div className="min-w-0 space-y-5">
          <section className={`rounded-2xl border p-5 shadow-card sm:p-6 ${activeDone ? 'border-emerald-200 bg-emerald-50/70 dark:border-emerald-500/30 dark:bg-emerald-500/5' : 'border-ink-200 bg-white dark:border-ink-800 dark:bg-ink-900'}`} aria-labelledby="active-challenge-title">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div><div className="flex flex-wrap items-center gap-2"><span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${difficultyStyle[activeChallenge.difficulty]}`}>{activeChallenge.difficulty}</span><Link to={`/it/linux/${activeChallenge.lessonSlug}`} className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 hover:underline dark:text-brand-300"><BookOpen className="h-3.5 w-3.5" aria-hidden="true" /> Zugehörige Lektion</Link></div><h2 id="active-challenge-title" className="mt-3 text-xl font-bold text-ink-950 dark:text-white">{activeChallenge.title}</h2></div>
              {activeDone && <span className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-3 py-1.5 text-sm font-semibold text-white"><Check className="h-4 w-4" aria-hidden="true" /> Geschafft</span>}
            </div>
            <p className="mt-3 leading-6 text-ink-700 dark:text-ink-200">{activeChallenge.description}</p>
            <div className="mt-4 rounded-xl bg-ink-50 p-4 dark:bg-ink-800/70"><p className="text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400">Erwartetes Ziel</p><p className="mt-1 text-sm text-ink-800 dark:text-ink-100">{activeChallenge.goal}</p></div>
            <div className="mt-4 flex flex-wrap gap-2"><Button type="button" variant="secondary" size="sm" icon={<Lightbulb />} onClick={() => setShowHint((value) => !value)} aria-expanded={showHint}>{showHint ? 'Tipp ausblenden' : 'Tipp anzeigen'}</Button>{activeChallenge.suggestedCommands.map((example) => <button key={example} type="button" onClick={() => setCommand(example)} className="min-h-8 rounded-full border border-ink-200 bg-white px-3 font-mono text-xs text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-700 dark:border-ink-700 dark:bg-ink-950 dark:text-ink-200 dark:hover:border-brand-500 dark:hover:text-brand-300" aria-label={`${example} in die Eingabe übernehmen`}><Play className="mr-1 inline h-3 w-3" aria-hidden="true" />{example}</button>)}</div>
            {showHint && <p className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-100"><strong>Tipp:</strong> {activeChallenge.hint}</p>}
          </section>

          <TerminalConsole session={session} entries={entries} command={command} historyIndex={historyIndex} onCommandChange={setCommand} onHistoryIndexChange={setHistoryIndex} onSubmit={execute} onReset={resetLab} />
        </div>

        <aside className="space-y-5 lg:col-start-2 xl:col-start-auto" aria-label="Linux-Lab-Werkzeuge">
          <FileTree session={session} />
          <section className="rounded-2xl border border-ink-200 bg-white p-4 shadow-card dark:border-ink-800 dark:bg-ink-900" aria-labelledby="quick-help-title">
            <h2 id="quick-help-title" className="flex items-center gap-2 font-semibold text-ink-950 dark:text-white"><CircleHelp className="h-5 w-5 text-brand-600 dark:text-brand-400" aria-hidden="true" /> Schnellhilfe</h2>
            <dl className="mt-4 space-y-3">{quickHelp.map(([label, commands]) => <div key={label}><dt className="text-xs font-semibold text-ink-500 dark:text-ink-400">{label}</dt><dd className="mt-1"><code className="text-xs leading-5 text-ink-700 dark:text-ink-200">{commands}</code></dd></div>)}</dl>
          </section>
          <section className="rounded-2xl border border-brand-200 bg-brand-50 p-4 text-sm dark:border-brand-500/20 dark:bg-brand-500/5">
            <div className="flex items-center gap-2 font-semibold text-brand-900 dark:text-brand-200"><TerminalSquare className="h-5 w-5" aria-hidden="true" /> Umgebung</div>
            <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 text-xs text-ink-600 dark:text-ink-300"><dt>System</dt><dd className="text-right font-mono">Ubuntu 24.04</dd><dt>Benutzer</dt><dd className="text-right font-mono">student</dd><dt>Kernel</dt><dd className="text-right font-mono">6.8.0-fisi</dd><dt>Sicherheit</dt><dd className="text-right font-semibold text-emerald-700 dark:text-emerald-300">Simuliert</dd></dl>
          </section>
        </aside>
      </div>
    </main>
  )
}
