import { useEffect, useMemo, useRef, useState, type FormEvent, type KeyboardEvent } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, FileText, RotateCcw, Terminal, XCircle } from 'lucide-react'
import { linuxDayThreeExam, linuxDayThreeTasks, type DayThreeTask } from '../data/linux/dayThreeExercises'
import { createDayThreeSession, DAY_THREE_HOME, runDayThreeCommand, saveNanoFile, type DayThreeSession } from '../lib/linuxDayThreeSimulator'
import { parseCommand } from '../lib/linuxDayTwoSimulator'

type Mode = 'learn' | 'exam'
type NanoState = { path: string; text: string; savedText: string; undo: string[]; clipboard: string; confirmSave: boolean; help: boolean; search: boolean }

export function acceptsDayThreeAnswer(input: string, task: DayThreeTask) {
  if (task.kind === 'text') return task.answers.some(answer => answer.toLocaleLowerCase('de-DE') === input.trim().toLocaleLowerCase('de-DE'))
  const actual = parseCommand(input)
  return !!actual && task.answers.some(answer => { const expected = parseCommand(answer); return !!expected && expected.length === actual.length && expected.every((part, index) => part === actual[index]) })
}

function initialNano(session: DayThreeSession, rawPath: string): NanoState {
  const path = rawPath === '~' ? DAY_THREE_HOME : rawPath.startsWith('~/') ? DAY_THREE_HOME + rawPath.slice(1) : rawPath.startsWith('/') ? rawPath : `${session.cwd}/${rawPath}`
  const text = session.nodes[path]?.content || ''
  return { path: rawPath, text, savedText: text, undo: [], clipboard: '', confirmSave: false, help: false, search: false }
}

function NanoEditor({ nano, setNano, onSave, onExit }: { nano: NanoState; setNano: (value: NanoState) => void; onSave: (text: string) => void; onExit: () => void }) {
  const modified = nano.text !== nano.savedText
  const textarea = useRef<HTMLTextAreaElement>(null)
  useEffect(() => { textarea.current?.focus() }, [nano.help, nano.search])
  const update = (text: string) => setNano({ ...nano, undo: [...nano.undo, nano.text].slice(-20), text })
  const cutLine = () => { const start = nano.text.lastIndexOf('\n', (textarea.current?.selectionStart || 0) - 1) + 1; const endAt = nano.text.indexOf('\n', textarea.current?.selectionStart || 0); const end = endAt < 0 ? nano.text.length : endAt + 1; setNano({ ...nano, undo: [...nano.undo, nano.text], clipboard: nano.text.slice(start, end), text: nano.text.slice(0, start) + nano.text.slice(end) }) }
  const paste = () => { const pos = textarea.current?.selectionStart || nano.text.length; update(nano.text.slice(0, pos) + nano.clipboard + nano.text.slice(pos)) }
  const key = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.ctrlKey && event.key.toLowerCase() === 'o') { event.preventDefault(); setNano({ ...nano, confirmSave: true }) }
    else if (event.ctrlKey && event.key.toLowerCase() === 'x') { event.preventDefault(); if (!modified || window.confirm('Save modified buffer? OK = speichern, Abbrechen = weiter bearbeiten')) { if (modified) onSave(nano.text); onExit() } }
    else if (event.ctrlKey && event.key.toLowerCase() === 'k') { event.preventDefault(); cutLine() }
    else if (event.ctrlKey && event.key.toLowerCase() === 'u') { event.preventDefault(); paste() }
    else if (event.ctrlKey && event.key.toLowerCase() === 'w') { event.preventDefault(); setNano({ ...nano, search: true }) }
    else if (event.altKey && event.key.toLowerCase() === 'u') { event.preventDefault(); const prior = nano.undo[nano.undo.length - 1]; if (prior !== undefined) setNano({ ...nano, text: prior, undo: nano.undo.slice(0, -1) }) }
    else if (event.ctrlKey && event.key.toLowerCase() === 'g') { event.preventDefault(); setNano({ ...nano, help: true }) }
  }
  return <section className="rounded-2xl border border-slate-700 bg-slate-950 text-slate-100 shadow-xl" aria-label="Simulierter nano-Editor">
    <div className="flex items-center justify-between border-b border-slate-700 px-4 py-3 text-sm"><span>GNU nano (Simulation) · {nano.path}</span>{modified && <span className="rounded bg-amber-400/20 px-2 py-1 text-amber-200">Modified</span>}</div>
    {nano.help ? <div className="min-h-72 p-5"><h2 className="font-semibold">Nano-Hilfe</h2><p className="mt-3 text-sm text-slate-300">^ = Strg · M- = Alt · Strg+O speichern · Strg+X zurück</p><button className="mt-5 min-h-11 rounded-lg bg-slate-700 px-4" onClick={() => setNano({ ...nano, help: false })}>Strg+X · Zurück</button></div> : <textarea ref={textarea} value={nano.text} onChange={event => update(event.target.value)} onKeyDown={key} className="min-h-72 w-full resize-y bg-transparent p-4 font-mono text-base leading-7 outline-none focus:ring-2 focus:ring-inset focus:ring-teal-400" aria-label="Dateiinhalt" />}
    {nano.search && <div className="border-t border-slate-700 p-3"><label className="text-sm">Suchen <input autoFocus className="ml-2 rounded bg-slate-800 px-2 py-1" onChange={event => { const i = nano.text.toLowerCase().indexOf(event.target.value.toLowerCase()); if (i >= 0) textarea.current?.setSelectionRange(i, i + event.target.value.length) }} /></label><button className="ml-3 underline" onClick={() => setNano({ ...nano, search: false })}>Schließen</button></div>}
    {nano.confirmSave && <div className="border-t border-slate-700 bg-slate-900 p-3"><span>Dateiname zum Schreiben: {nano.path}</span><button className="ml-3 min-h-11 rounded-lg bg-teal-600 px-4 font-semibold" onClick={() => { onSave(nano.text); setNano({ ...nano, savedText: nano.text, confirmSave: false }) }}>Enter · bestätigen</button></div>}
    <div className="grid grid-cols-2 gap-2 border-t border-slate-700 p-3 text-sm sm:grid-cols-4">
      <button onClick={() => setNano({ ...nano, confirmSave: true })}>^O Speichern</button><button onClick={() => { if (!modified || window.confirm('Ungespeicherte Änderungen speichern?')) { if (modified) onSave(nano.text); onExit() } }}>^X Beenden</button>
      <button onClick={cutLine}>^K Zeile ausschneiden</button><button onClick={paste}>^U Einfügen</button><button onClick={() => setNano({ ...nano, search: true })}>^W Suchen</button>
      <button onClick={() => { const prior = nano.undo[nano.undo.length - 1]; if (prior !== undefined) setNano({ ...nano, text: prior, undo: nano.undo.slice(0, -1) }) }}>M-U Rückgängig</button><button onClick={() => setNano({ ...nano, help: true })}>^G Hilfe</button>
    </div>
  </section>
}

export default function LinuxDayThreeTrainer() {
  const [mode, setMode] = useState<Mode>('learn'), [index, setIndex] = useState(0)
  const [session, setSession] = useState(createDayThreeSession), [input, setInput] = useState(''), [attempts, setAttempts] = useState(0)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null), [error, setError] = useState(''), [nano, setNano] = useState<NanoState | null>(null)
  const [examAnswers, setExamAnswers] = useState<Record<string, number>>({}), [examDone, setExamDone] = useState(false)
  const task = linuxDayThreeTasks[index]
  const sectionCounts = useMemo(() => Object.entries(linuxDayThreeTasks.reduce<Record<string, number>>((sum, item) => ({ ...sum, [item.section]: (sum[item.section] || 0) + 1 }), {})), [])
  const reset = () => { setSession(createDayThreeSession()); setIndex(0); setInput(''); setAttempts(0); setFeedback(null); setNano(null); setExamAnswers({}); setExamDone(false) }
  const submit = (event: FormEvent) => {
    event.preventDefault(); setError('')
    if (!acceptsDayThreeAnswer(input, task)) { setAttempts(value => value + 1); setFeedback('wrong'); return }
    if (task.kind === 'command') { const result = runDayThreeCommand(session, input); if (result.error) { setAttempts(value => value + 1); setFeedback('wrong'); setError(result.error); return } setSession(result.session); if (result.output.startsWith('NANO:')) { setNano(initialNano(result.session, result.output.slice(5))); return } }
    setFeedback('correct')
  }
  const next = () => { if (index < linuxDayThreeTasks.length - 1) { setIndex(value => value + 1); setInput(''); setAttempts(0); setFeedback(null); setError('') } }
  const score = linuxDayThreeExam.filter(item => examAnswers[item.id] === item.correct).length
  if (mode === 'exam') return <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6"><Link to="/it/linux/das-dateisystem" className="text-sm font-semibold text-teal-700 dark:text-teal-300">← Zur Lektion</Link><h1 className="mt-4 text-3xl font-bold">Tag 3 · Abschlussprüfung</h1><p className="mt-2 text-slate-600 dark:text-slate-300">20 deterministische Fragen. Während der Prüfung werden keine Hinweise oder Lösungen angezeigt.</p>{!examDone ? <form className="mt-8 space-y-6" onSubmit={event => { event.preventDefault(); if (Object.keys(examAnswers).length === linuxDayThreeExam.length) setExamDone(true) }}>
    {linuxDayThreeExam.map((item, qIndex) => <fieldset key={item.id} className="rounded-xl border border-slate-200 p-5 dark:border-slate-700"><legend className="px-2 font-semibold">{qIndex + 1}. {item.question}</legend><div className="mt-3 space-y-2">{item.options.map((option, optionIndex) => <label key={option} className="flex min-h-11 cursor-pointer items-center gap-3 rounded-lg px-3 hover:bg-slate-50 dark:hover:bg-slate-800"><input type="radio" name={item.id} checked={examAnswers[item.id] === optionIndex} onChange={() => setExamAnswers(value => ({ ...value, [item.id]: optionIndex }))} />{option}</label>)}</div></fieldset>)}
    <button disabled={Object.keys(examAnswers).length !== linuxDayThreeExam.length} className="min-h-11 rounded-xl bg-teal-700 px-5 font-semibold text-white disabled:opacity-50">Prüfung auswerten</button></form> : <div className="mt-8"><div className="rounded-xl bg-teal-50 p-6 dark:bg-teal-950"><p className="text-2xl font-bold">{score} richtig · {20 - score} falsch · {Math.round(score / 20 * 100)} %</p></div><div className="mt-6 space-y-4">{linuxDayThreeExam.map((item, qIndex) => { const correct = examAnswers[item.id] === item.correct; return <article key={item.id} className="rounded-xl border p-5 dark:border-slate-700"><h2 className="font-semibold">{qIndex + 1}. {item.question}</h2><p className="mt-2">Deine Antwort: {item.options[examAnswers[item.id]]}</p>{!correct && <p className="text-rose-700 dark:text-rose-300">Richtig: {item.options[item.correct]}</p>}<p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.explanation}</p></article> })}</div><button onClick={reset} className="mt-6 min-h-11 rounded-xl bg-teal-700 px-5 font-semibold text-white">Neu starten</button></div>}</div>

  return <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6"><div className="flex flex-wrap items-center justify-between gap-3"><div><Link to="/it/linux/das-dateisystem" className="text-sm font-semibold text-teal-700 dark:text-teal-300">← Zur Lektion</Link><h1 className="mt-3 text-3xl font-bold">Linux Campus · Tag 3 üben</h1></div><button onClick={reset} className="flex min-h-11 items-center gap-2 rounded-xl border px-4"><RotateCcw size={18} /> Sitzung zurücksetzen</button></div>
    <div className="mt-6 flex gap-2"><button onClick={() => { setMode('learn'); reset() }} className="min-h-11 rounded-xl bg-teal-700 px-4 font-semibold text-white">Training</button><button onClick={() => { setMode('exam'); reset(); setMode('exam') }} className="min-h-11 rounded-xl border px-4 font-semibold">Abschlussprüfung</button></div>
    {nano ? <div className="mt-8"><NanoEditor nano={nano} setNano={setNano} onSave={text => setSession(value => saveNanoFile(value, nano.path, text))} onExit={() => { setNano(null); setFeedback('correct') }} /></div> : <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]"><main><div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-700"><p className="text-sm font-semibold text-teal-700 dark:text-teal-300">Aufgabe {index + 1} von {linuxDayThreeTasks.length} · {task.section}</p><h2 className="mt-3 text-xl font-bold">{task.prompt}</h2><p className="mt-3 font-mono text-sm text-slate-500">andre@lubuntu:{session.cwd.replace(DAY_THREE_HOME, '~') || '/'}$</p><form onSubmit={submit} className="mt-4 flex flex-col gap-3 sm:flex-row"><label className="sr-only" htmlFor="command">Antwort oder Befehl</label><input id="command" autoFocus value={input} onChange={event => setInput(event.target.value)} className="min-h-12 flex-1 rounded-xl border bg-transparent px-4 font-mono focus:outline-none focus:ring-2 focus:ring-teal-500" /><button className="min-h-12 rounded-xl bg-teal-700 px-5 font-semibold text-white">Prüfen</button></form>
      {session.output && <pre className="mt-4 max-h-64 overflow-auto whitespace-pre-wrap rounded-xl bg-slate-950 p-4 text-sm text-slate-100" aria-live="polite">{session.output}</pre>}
      {feedback === 'wrong' && <div className="mt-4 rounded-xl bg-amber-50 p-4 text-amber-950 dark:bg-amber-950 dark:text-amber-100"><p className="flex items-center gap-2 font-semibold"><XCircle size={18} /> Noch nicht.</p><p className="mt-1">{error || task.hint}</p><p className="mt-1" dir="rtl">{task.ar}</p>{attempts >= 2 && <p className="mt-3 font-mono">Lösung: {task.answers[0]}</p>}</div>}
      {feedback === 'correct' && <div className="mt-4 rounded-xl bg-emerald-50 p-4 text-emerald-950 dark:bg-emerald-950 dark:text-emerald-100"><p className="flex items-center gap-2 font-semibold"><CheckCircle2 size={18} /> Richtig.</p><p className="mt-1">{task.explanation}</p><button onClick={next} className="mt-4 min-h-11 rounded-lg bg-emerald-700 px-4 font-semibold text-white">{index === linuxDayThreeTasks.length - 1 ? 'Training abgeschlossen' : 'Nächste Aufgabe'}</button></div>}
    </div></main><aside className="rounded-2xl border border-slate-200 p-5 dark:border-slate-700"><h2 className="flex items-center gap-2 font-bold"><Terminal size={18} /> Trainingsabschnitte</h2><ul className="mt-4 space-y-2 text-sm">{sectionCounts.map(([name, count]) => <li key={name} className="flex justify-between gap-3"><span>{name}</span><span>{count}</span></li>)}</ul><div className="mt-5 flex items-start gap-2 rounded-lg bg-slate-100 p-3 text-sm dark:bg-slate-800"><FileText className="mt-0.5 shrink-0" size={17} /><span>Nur simulierte Kursdaten. Keine Betriebssystembefehle werden ausgeführt.</span></div></aside></div>}
  </div>
}
