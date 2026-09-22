import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { AlertTriangle, CheckCircle2, RotateCcw, Terminal } from 'lucide-react'
import { examTaskIds, linuxDayTwoTasks, type DayTwoExercise } from '../data/linux/dayTwoExercises'
import { createDayTwoSession, createTaskFixture, deletionTargets, HOME, parseCommand, runDayTwoCommand, type DayTwoSession } from '../lib/linuxDayTwoSimulator'

type Mode = 'learn' | 'exam'
type ExamAnswer = { task: DayTwoExercise; input: string; correct: boolean }
const examTasks = examTaskIds.map(id => linuxDayTwoTasks.find(task => task.id === id)!)

export function acceptsDayTwoAnswer(input: string, task: DayTwoExercise): boolean {
  if (task.kind === 'shortcut') return task.answers.some(answer => answer.toLocaleLowerCase('de-DE') === input.trim().toLocaleLowerCase('de-DE'))
  const actual = parseCommand(input)
  return !!actual && task.answers.some(answer => {
    const expected = parseCommand(answer)
    return !!expected && expected.length === actual.length && expected.every((part, index) => part === actual[index])
  })
}

function explainError(input: string, task: DayTwoExercise, simulatorError?: string): { de: string; ar: string } {
  if (!input.trim()) return { de: 'Es fehlt eine Eingabe.', ar: 'لم تُدخل أمراً بعد.' }
  if (!parseCommand(input)) return { de: 'Ein Anführungszeichen ist nicht geschlossen.', ar: 'هناك علامة اقتباس لم تُغلق.' }
  if (simulatorError) return { de: simulatorError, ar: 'تحقق من وجود المصدر والهدف وصحة المسار والخيارات.' }
  if (input.startsWith('cp ') && task.answers.some(answer => answer.startsWith('cp -r'))) return { de: 'Beim Kopieren eines Ordners brauchst du -r.', ar: 'تحتاج إلى ‎-r عند نسخ مجلد.' }
  if (input.startsWith('mkdir Mein Ordner')) return { de: 'Das Leerzeichen trennt den Namen in zwei Argumente.', ar: 'يفصل الفراغ الاسم إلى وسيطين؛ استخدم الاقتباس أو الشرطة العكسية.' }
  return { de: 'Prüfe Befehl, Option, Argument und Groß-/Kleinschreibung.', ar: 'تحقق من الأمر والخيار والوسيط والأحرف الكبيرة والصغيرة.' }
}

function localEntries(session: DayTwoSession): string[] {
  return Object.keys(session.nodes).filter(path => path !== session.cwd && path.slice(0, path.lastIndexOf('/')) === session.cwd).map(path => `${path.slice(path.lastIndexOf('/') + 1)}${session.nodes[path].type === 'dir' ? '/' : ''}`).sort()
}

export default function LinuxDayTwoTrainer() {
  const [mode, setMode] = useState<Mode>('learn')
  const [index, setIndex] = useState(0)
  const [session, setSession] = useState(() => createDayTwoSession(linuxDayTwoTasks[0].scene))
  const [answer, setAnswer] = useState('')
  const [result, setResult] = useState<'correct' | 'wrong' | null>(null)
  const [errorText, setErrorText] = useState<string>()
  const [attempts, setAttempts] = useState(0)
  const [showSolution, setShowSolution] = useState(false)
  const [pendingDeletion, setPendingDeletion] = useState<string[] | null>(null)
  const [examAnswers, setExamAnswers] = useState<ExamAnswer[]>([])
  const [examFinished, setExamFinished] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const tasks = mode === 'learn' ? linuxDayTwoTasks : examTasks
  const task = tasks[index]
  const active = mode === 'learn' ? session : createTaskFixture(task.cwd, task.entries)
  const complete = mode === 'learn' && index === tasks.length - 1 && result === 'correct'
  const error = result === 'wrong' ? explainError(answer, task, errorText) : null

  useEffect(() => { inputRef.current?.focus() }, [index, mode])

  function reset(nextMode: Mode) {
    setMode(nextMode); setIndex(0); setSession(createDayTwoSession(linuxDayTwoTasks[0].scene))
    setAnswer(''); setResult(null); setErrorText(undefined); setAttempts(0); setShowSolution(false)
    setPendingDeletion(null); setExamAnswers([]); setExamFinished(false)
  }
  function next() {
    if (index + 1 === tasks.length) { if (mode === 'exam') setExamFinished(true); return }
    const following = tasks[index + 1]
    if (mode === 'learn' && following.scene !== task.scene) setSession(createDayTwoSession(following.scene))
    setIndex(index + 1); setAnswer(''); setResult(null); setErrorText(undefined); setAttempts(0)
    setShowSolution(false); setPendingDeletion(null)
  }
  function submit(event: FormEvent) {
    event.preventDefault()
    if (result === 'correct') return
    const targets = deletionTargets(active, answer)
    if (targets?.length && !pendingDeletion) { setPendingDeletion(targets); return }
    const accepted = acceptsDayTwoAnswer(answer, task)
    const simulated = accepted && task.kind !== 'shortcut' ? runDayTwoCommand(active, answer, !!pendingDeletion) : null
    const correct = accepted && !simulated?.error && !simulated?.deletion
    if (mode === 'exam') { setExamAnswers(items => [...items, { task, input: answer, correct }]); next(); return }
    setAttempts(value => value + 1); setErrorText(simulated?.error); setResult(correct ? 'correct' : 'wrong'); setPendingDeletion(null)
    if (correct && simulated) setSession(simulated.session)
    if (!correct) inputRef.current?.focus()
  }

  if (examFinished) {
    const correct = examAnswers.filter(item => item.correct).length
    return <main className="mx-auto max-w-4xl px-4 py-8 sm:py-12">
      <h1 className="text-3xl font-bold text-ink-950 dark:text-white">Prüfungsauswertung</h1>
      <p className="mt-2 text-ink-700 dark:text-ink-200">{correct} richtig · {examAnswers.length - correct} falsch · {Math.round(correct / examAnswers.length * 100)} %</p>
      <div className="mt-7 space-y-4">{examAnswers.map((item, i) => <section key={item.task.id} className="rounded-2xl border border-ink-200 bg-white p-5 dark:border-ink-800 dark:bg-ink-900">
        <h2 className="font-semibold text-ink-950 dark:text-white">{i + 1}. {item.task.task} {item.correct ? '✓' : '✗'}</h2>
        <p className="mt-2 text-sm">Deine Eingabe: <code>{item.input || '—'}</code></p>
        {!item.correct && <p className="mt-1 text-sm">Akzeptierte Antwort: <code>{item.task.answers[0]}</code></p>}
        <p className="mt-2 text-sm text-ink-700 dark:text-ink-200">{item.task.reason}</p>
        <p lang="ar" dir="rtl" className="mt-2 text-sm leading-7 text-ink-700 dark:text-ink-200">{item.task.ar}</p>
      </section>)}</div>
      <button onClick={() => reset('exam')} className="mt-6 min-h-11 rounded-full bg-brand-600 px-6 py-3 font-semibold text-white">Prüfung wiederholen</button>
    </main>
  }

  return <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
    <Link to="/it/linux/terminal-und-erste-befehle" className="text-sm font-medium text-brand-700 hover:underline dark:text-brand-300">← Zur Tag-2-Lektion</Link>
    <header className="mt-5 flex flex-wrap items-start justify-between gap-5">
      <div><p className="text-sm font-semibold uppercase tracking-wider text-brand-700 dark:text-brand-300">Linux Campus · Tag 2</p><h1 className="mt-2 text-3xl font-bold text-ink-950 dark:text-white sm:text-4xl">Terminal und erste Befehle</h1><p className="mt-3 text-ink-700 dark:text-ink-200">Befehle ändern nur das simulierte Dateisystem im Browser. Hier läuft keine echte Shell.</p></div>
      <div className="flex gap-2 rounded-full border border-ink-200 bg-white p-1 dark:border-ink-700 dark:bg-ink-900" role="group" aria-label="Übungsmodus"><button onClick={() => reset('learn')} aria-pressed={mode === 'learn'} className={`min-h-11 rounded-full px-4 py-2 text-sm font-semibold ${mode === 'learn' ? 'bg-brand-600 text-white' : 'text-ink-700 dark:text-ink-200'}`}>Lernen</button><button onClick={() => reset('exam')} aria-pressed={mode === 'exam'} className={`min-h-11 rounded-full px-4 py-2 text-sm font-semibold ${mode === 'exam' ? 'bg-brand-600 text-white' : 'text-ink-700 dark:text-ink-200'}`}>Prüfungsmodus</button></div>
    </header>
    <section className="mt-8 min-w-0 rounded-2xl border border-ink-200 bg-white p-5 shadow-card dark:border-ink-800 dark:bg-ink-900 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-ink-600 dark:text-ink-300"><span>{task.section}</span><span>Aufgabe {index + 1} von {tasks.length}</span></div>
      <div role="progressbar" aria-valuenow={index + 1} aria-valuemin={1} aria-valuemax={tasks.length} aria-label="Fortschritt" className="mt-3 h-2 overflow-hidden rounded-full bg-ink-100 dark:bg-ink-800"><div className="h-full rounded-full bg-brand-600" style={{ width: `${(index + 1) / tasks.length * 100}%` }} /></div>
      <h2 className="mt-7 text-xl font-semibold text-ink-950 dark:text-white">Deine Aufgabe</h2><p className="mt-2 text-lg leading-8 text-ink-800 dark:text-ink-100">{task.task}</p>
      <div className="mt-6 overflow-hidden rounded-xl bg-ink-950 text-ink-100"><div className="flex items-center gap-2 border-b border-ink-700 px-4 py-3 text-sm text-ink-300"><Terminal size={17} /> Bash · simuliert</div><p className="px-4 pt-4 text-xs text-ink-300">Aktueller Ordner: {active.cwd}</p><form id="day-two-form" onSubmit={submit} className="flex flex-wrap items-center gap-2 px-4 py-4 font-mono"><label htmlFor="day-two-command" className="shrink-0 text-teal-300">andre@lubuntu:{active.cwd === HOME ? '~' : active.cwd}$</label><input ref={inputRef} id="day-two-command" value={answer} onChange={event => { setAnswer(event.target.value); setPendingDeletion(null); if (result === 'wrong') setResult(null) }} disabled={result === 'correct'} autoComplete="off" autoCapitalize="off" spellCheck={false} aria-label={task.kind === 'shortcut' ? 'Antwort eingeben' : 'Linux-Befehl eingeben'} className="min-h-11 min-w-0 flex-1 bg-transparent py-2 text-white outline-none focus-visible:ring-2 focus-visible:ring-teal-300" /></form>{result === 'correct' && active.screen && <pre className="overflow-x-auto whitespace-pre-wrap px-4 pb-4 text-sm">{active.screen}</pre>}</div>
      {mode === 'learn' && <div className="mt-4 rounded-xl bg-ink-50 p-4 dark:bg-ink-800"><p className="text-xs font-semibold uppercase tracking-wide text-ink-500 dark:text-ink-300">Dateien und Ordner hier</p><p className="mt-2 break-words font-mono text-sm text-ink-800 dark:text-ink-100">{localEntries(active).join('   ') || '(noch leer)'}</p></div>}
      {pendingDeletion && <div role="alert" className="mt-4 rounded-xl border border-amber-400 bg-amber-50 p-4 text-amber-950"><p className="flex items-center gap-2 font-semibold"><AlertTriangle size={18} /> Vor dem Löschen prüfen</p><p className="mt-2 text-sm">Diese simulierten Pfade würden endgültig gelöscht:</p><ul className="mt-2 list-inside list-disc break-all font-mono text-sm">{pendingDeletion.map(path => <li key={path}>{path}</li>)}</ul><p className="mt-2 text-sm">Es gibt keinen Papierkorb. Erst die zweite Bestätigung führt die simulierte Löschung aus.</p></div>}
      <div aria-live="polite" className="mt-4">{result === 'correct' && <div className="rounded-xl border border-teal-300 bg-teal-50 p-4 text-teal-950"><p className="flex items-center gap-2 font-semibold"><CheckCircle2 size={18} /> Richtig!</p><p className="mt-2 text-sm">{task.reason}</p><p lang="ar" dir="rtl" className="mt-2 text-sm leading-7">{task.ar}</p></div>}{error && <div className="rounded-xl border border-rose-300 bg-rose-50 p-4 text-rose-950"><p className="font-semibold">Noch nicht richtig</p><p className="mt-2 text-sm">{error.de}</p><p lang="ar" dir="rtl" className="mt-2 text-sm leading-7">{error.ar}</p><p className="mt-2 text-sm"><strong>Hinweis:</strong> {task.hint}</p></div>}{showSolution && result !== 'correct' && <div className="rounded-xl bg-ink-100 p-4 text-ink-900 dark:bg-ink-800 dark:text-white"><strong>Mögliche Eingabe:</strong> <code>{task.answers[0]}</code><p className="mt-2 text-sm">Gib sie selbst ein, damit der simulierte Zustand fortgesetzt wird.</p></div>}</div>
      <div className="mt-5 flex flex-wrap gap-3">{result !== 'correct' && <button type="submit" form="day-two-form" className="min-h-11 rounded-full bg-brand-600 px-5 py-2 font-semibold text-white hover:bg-brand-700">{pendingDeletion ? 'Löschen bestätigen' : mode === 'exam' ? 'Antwort abgeben' : 'Befehl prüfen'}</button>}{mode === 'learn' && attempts >= 2 && result !== 'correct' && !showSolution && <button onClick={() => setShowSolution(true)} className="min-h-11 rounded-full border px-5 py-2 font-medium">Lösung anzeigen</button>}{mode === 'learn' && result === 'correct' && <button onClick={complete ? () => reset('exam') : next} className="min-h-11 rounded-full bg-brand-600 px-5 py-2 font-semibold text-white">{complete ? 'Prüfungsmodus starten' : 'Nächste Aufgabe'}</button>}{mode === 'learn' && index > 0 && <button onClick={() => reset('learn')} className="inline-flex min-h-11 items-center gap-2 rounded-full px-4 py-2 text-sm text-ink-600 dark:text-ink-300"><RotateCcw size={16} /> Von vorn beginnen</button>}</div>
    </section>
  </main>
}
