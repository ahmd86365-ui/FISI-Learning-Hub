import { useState, type FormEvent } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from '../components/Button'
import { labs, gradeLabStep, labCommandOutput, labSolution, newLabSession, nextLabStep, revealLabSolution, submitLabAnswer, type LabSession } from '../lib/labs'
import { lessonCatalog } from '../lib/lessonCatalog'

const panel = 'rounded-2xl border border-ink-200 bg-white p-5 dark:border-ink-800 dark:bg-ink-900 sm:p-7'
const link = 'font-medium text-brand-700 underline underline-offset-2 dark:text-brand-400'

export default function PracticalLabs() {
  const { labId } = useParams()
  const lab = labs.find((item) => item.id === labId)
  if (labId && !lab) return <main className="mx-auto max-w-3xl px-4 py-10"><h1 className="text-2xl font-bold">Lab nicht gefunden</h1><Link className={link} to="/practice/labs">Zurück zu den Labs</Link></main>
  if (lab) return <LabRunner key={lab.id} lab={lab} />
  return <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
    <h1 className="text-3xl font-bold">Praktische Labs</h1>
    <p className="mt-2 text-ink-600 dark:text-ink-300">Bearbeite zusammenhängende Situationen aus Netzwerktechnik und Linux.</p>
    <div className="mt-8 grid gap-5 md:grid-cols-2">{labs.map((item) => <article key={item.id} className={`${panel} flex min-w-0 flex-col`}>
      <p className="text-sm font-medium text-ink-600 dark:text-ink-300">{item.subject} · {item.difficulty} · {item.steps.length} Schritte</p>
      <h2 className="mt-2 text-xl font-semibold">{item.title}</h2>
      <p className="mt-3 flex-1 break-words text-ink-700 dark:text-ink-200">{item.scenario}</p>
      <Link className={`${link} mt-5 inline-block`} to={`/practice/labs/${item.id}`}>Lab starten</Link>
    </article>)}</div>
  </main>
}

function LabRunner({ lab }: { lab: (typeof labs)[number] }) {
  const [session, setSession] = useState<LabSession>(newLabSession)
  const [input, setInput] = useState('')
  const [feedback, setFeedback] = useState('')
  const step = lab.steps[session.stepIndex]
  const restart = () => { setSession(newLabSession()); setInput(''); setFeedback('') }
  const advance = () => { setSession(nextLabStep); setInput(''); setFeedback('') }
  const check = (event: FormEvent) => {
    event.preventDefault()
    if (!step || !input.trim() || session.resolved) return
    const correct = gradeLabStep(step, input)
    setSession((current) => submitLabAnswer(current, correct))
    setFeedback(correct ? 'Richtig. Du kannst zum nächsten Schritt gehen.' : 'Noch nicht richtig. Prüfe die Angaben und versuche es erneut.')
  }
  return <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
    <Link className={link} to="/practice/labs">← Zurück zu den Labs</Link>
    <h1 className="mt-5 text-3xl font-bold">{lab.title}</h1>
    <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">{lab.subject} · {lab.difficulty}</p>
    {step ? <>
      <section className={`${panel} mt-6`} aria-label="Szenario"><h2 className="text-lg font-semibold">Szenario</h2><p className="mt-2 break-words leading-relaxed [overflow-wrap:anywhere]">{lab.scenario}</p></section>
      <section className={`${panel} mt-5`} aria-labelledby="lab-step-title">
        <p className="text-sm font-medium">Schritt {session.stepIndex + 1} / {lab.steps.length}</p>
        <progress className="mt-2 h-2 w-full accent-brand-600" value={session.stepIndex + 1} max={lab.steps.length} aria-label="Lab-Fortschritt" />
        <h2 id="lab-step-title" className="mt-5 text-xl font-semibold">{step.prompt}</h2>
        <form onSubmit={check} className="mt-5 space-y-4">
          {step.answer.type === 'choice' ? <fieldset disabled={session.resolved}><legend className="sr-only">Antwort auswählen</legend><div className="space-y-3">{step.answer.options.map((option) => <label key={option.id} className="flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border border-ink-200 p-3 dark:border-ink-700"><input type="radio" name="lab-answer" value={option.id} checked={input === option.id} onChange={() => setInput(option.id)} /><span className="break-words">{option.label}</span></label>)}</div></fieldset>
            : <label className="block font-medium">Deine Antwort<input className="mt-2 min-h-12 w-full min-w-0 rounded-xl border border-ink-300 bg-white px-4 py-3 font-mono text-base text-ink-900 dark:border-ink-700 dark:bg-ink-800 dark:text-white" type={step.answer.type === 'number' ? 'number' : 'text'} inputMode={step.answer.type === 'ipv4' ? 'decimal' : undefined} autoCapitalize="off" autoComplete="off" spellCheck={false} value={input} onChange={(event) => setInput(event.target.value)} disabled={session.resolved} /></label>}
          {!session.resolved && <Button type="submit" disabled={!input.trim()}>Antwort prüfen</Button>}
        </form>
        {feedback && <p className="mt-4" role="status">{feedback}</p>}
        {!session.resolved && session.attempts > 0 && <div className="mt-4 flex flex-wrap gap-3"><Button variant="secondary" onClick={() => setSession((current) => ({ ...current, hintVisible: true }))}>Tipp anzeigen</Button>{session.attempts >= 2 && <Button variant="ghost" onClick={() => { setSession(revealLabSolution); setFeedback('Lösung angezeigt. Lies die Begründung und gehe dann weiter.') }}>Lösung anzeigen</Button>}</div>}
        {session.hintVisible && !session.resolved && <p className="mt-4 rounded-xl bg-ink-100 p-4 dark:bg-ink-800"><strong>Tipp:</strong> {step.hint}</p>}
        {session.resolved && <div className="mt-5 space-y-3 rounded-xl bg-ink-100 p-4 dark:bg-ink-800"><p><strong>{session.revealed ? 'Lösung' : 'Deine Lösung'}:</strong> <span className="break-all font-mono">{labSolution(step)}</span></p>{labCommandOutput(step) && <pre className="max-w-full overflow-x-auto whitespace-pre-wrap break-words rounded-lg bg-ink-900 p-3 text-sm text-white" aria-label="Simulierte Terminalausgabe">{labCommandOutput(step)}</pre>}<p>{step.explanation}</p><Button onClick={advance}>{session.stepIndex + 1 === lab.steps.length ? 'Ergebnis ansehen' : 'Nächster Schritt'}</Button></div>}
      </section>
      <div className="mt-5"><Button variant="ghost" onClick={restart}>Lab neu starten</Button></div>
    </> : <section className={`${panel} mt-6`}>
      <h2 className="text-2xl font-bold">Lab abgeschlossen</h2>
      <p className="mt-3">{session.independentlySolved} / {lab.steps.length} Schritte selbst gelöst · {session.solutionsShown} {session.solutionsShown === 1 ? 'Lösung' : 'Lösungen'} angezeigt</p>
      <h3 className="mt-5 font-semibold">Geübte Konzepte</h3><p className="mt-1">{lab.concepts.join(' · ')}</p>
      <div className="mt-5 flex flex-wrap gap-3"><Button onClick={restart}>Nochmal üben</Button><Link className={link} to="/practice/labs">Zurück zu den Labs</Link></div>
      <div className="mt-6"><h3 className="font-semibold">Passenden Lernstoff öffnen</h3><ul className="mt-2 space-y-1">{lab.lessonPaths.map((path) => <li key={path}><Link className={link} to={path}>{lessonCatalog.flatMap((module) => module.lessons).find((lesson) => lesson.path === path)?.title}</Link></li>)}</ul></div>
    </section>}
  </main>
}
