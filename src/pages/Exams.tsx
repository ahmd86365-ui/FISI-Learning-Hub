import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { useAuth } from '../contexts/AuthContext'
import { useExamAttempts } from '../contexts/ExamAttemptsContext'
import { chooseQuestions, examPresets, freezeExam, remainingExamSeconds, getExamPool, isSimulationAnswerCorrect, type ActiveExamSession, type ExamMode, type ExamResultData } from '../lib/examSimulation'

const panel = 'rounded-2xl border border-ink-200 bg-white p-5 dark:border-ink-800 dark:bg-ink-900 sm:p-7'
const answered = (values: string[] = []) => values.some((value) => value.trim())
const clock = (seconds: number) => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`

function Review({ data }: { data: ExamResultData }) {
  return <div className="space-y-3">{data.questions.map((question, index) => {
    const answer = data.answers[question.questionKey] ?? []
    const expected = Array.isArray(question.correctAnswer) ? question.correctAnswer : [question.correctAnswer]
    const display = (values: string[]) => values.map((value) => question.options?.find((option) => option.id === value)?.text ?? value).join(' · ')
    return <details key={question.questionKey} className={panel}>
      <summary className="cursor-pointer font-semibold">{index + 1}. {question.title} — {!answered(answer) ? 'Unbeantwortet' : isSimulationAnswerCorrect(question, answer) ? 'Richtig' : 'Falsch'}</summary>
      <div className="mt-4 space-y-3 whitespace-pre-wrap break-words">
        {question.scenario && <p>{question.scenario}</p>}{question.referenceText && <p>{question.referenceText}</p>}
        <p>Deine Antwort: {display(answer) || 'Keine Antwort'}</p>
        <p className="font-semibold">Lösung: {display(expected)}</p>
        {question.explanation && <p>{question.explanation}</p>}
        <Link className="text-brand-600 underline dark:text-brand-400" to={question.contentPath}>Zum Lerninhalt</Link>
      </div>
    </details>
  })}</div>
}

export default function Exams() {
  const { session } = useAuth()
  return session ? <ExamWorkspace key={session.user.id} userId={session.user.id} /> : null
}

function ExamWorkspace({ userId }: { userId: string }) {
  const storageKey = `fisi:exam:v1:${userId}`
  const { attempts, loading, error, submitExam } = useExamAttempts()
  const [storageError, setStorageError] = useState('')
  const [draft, setDraft] = useState<ActiveExamSession | null>(() => {
    try {
      const raw = localStorage.getItem(storageKey)
      if (!raw) return null
      const value = JSON.parse(raw) as ActiveExamSession
      if (value.userId !== userId || !value.id || !Array.isArray(value.questions) || !value.questions.length || !value.answers || !Number.isFinite(Date.parse(value.endAt))) return null
      return value
    } catch { return null }
  })
  const [mode, setMode] = useState<ExamMode>('wiso_mixed')
  const [count, setCount] = useState(10)
  const [index, setIndex] = useState(0)
  const [now, setNow] = useState(Date.now())
  const [saving, setSaving] = useState(false)
  const [saveError, setSaveError] = useState('')
  const [reviewId, setReviewId] = useState<string | null>(null)
  const inFlight = useRef(false)
  const autoTried = useRef<string | null>(null)
  const remaining = draft ? remainingExamSeconds(draft, now) : 0
  const persist = (value: ActiveExamSession | null) => {
    try {
      if (value) localStorage.setItem(storageKey, JSON.stringify(value))
      else localStorage.removeItem(storageKey)
      setStorageError('')
    } catch { setStorageError('Lokales Speichern nicht möglich. Bitte diese Seite bis zur erfolgreichen Abgabe geöffnet lassen.') }
    setDraft(value)
  }

  useEffect(() => {
    const tick = () => setNow(Date.now())
    const timer = window.setInterval(tick, 250)
    window.addEventListener('focus', tick)
    return () => { clearInterval(timer); window.removeEventListener('focus', tick) }
  }, [])

  const submit = async (reason: 'manual' | 'timeout') => {
    if (!draft || inFlight.current) return
    inFlight.current = true
    const frozen = freezeExam(draft, reason)
    persist(frozen)
    setSaving(true)
    setSaveError('')
    try {
      const result = await submitExam(frozen)
      if (result) { persist(null); setReviewId(result.id) }
      else setSaveError('Abgabe noch nicht gespeichert. Antworten bleiben gesperrt und können erneut übertragen werden.')
    } catch { setSaveError('Verbindung fehlgeschlagen. Bitte erneut speichern.') }
    finally { setSaving(false); inFlight.current = false }
  }

  useEffect(() => {
    if (draft && (remaining === 0 || draft.submittedAt) && autoTried.current !== draft.id) {
      autoTried.current = draft.id
      void submit(draft.submissionReason ?? 'timeout')
    }
  }, [draft, remaining]) // Submission locks the snapshot before any network request.

  const start = () => {
    const questions = chooseQuestions(mode, count)
    if (!questions.length) return
    const started = Date.now()
    const durationSeconds = questions.length * examPresets[mode].secondsPerQuestion
    persist({ id: crypto.randomUUID(), userId, mode, label: examPresets[mode].label, questions, answers: {}, startedAt: new Date(started).toISOString(), endAt: new Date(started + durationSeconds * 1000).toISOString(), durationSeconds })
    setNow(started); setIndex(0); setReviewId(null); setSaveError('')
  }
  const question = draft?.questions[Math.min(index, draft.questions.length - 1)]
  const locked = !!draft?.submittedAt || remaining === 0
  const changeAnswer = (values: string[]) => {
    if (!draft || !question || locked || Date.now() >= Date.parse(draft.endAt)) return
    persist({ ...draft, answers: { ...draft.answers, [question.questionKey]: values } })
  }
  const selected = attempts.find((attempt) => attempt.id === reviewId)
  const localCorrect = draft?.questions.filter((item) => answered(draft.answers[item.questionKey]) && isSimulationAnswerCorrect(item, draft.answers[item.questionKey])).length ?? 0

  return <main className="mx-auto max-w-5xl space-y-6 px-4 py-8 sm:px-6 sm:py-12">
    <header><h1 className="text-3xl font-bold">Prüfungsmodus</h1><p className="mt-2 text-ink-500 dark:text-ink-400">Prüfung üben, Ergebnis prüfen und deinen Verlauf verfolgen.</p></header>
    {storageError && <p role="alert">{storageError}</p>}
    {(error || saveError) && <p role="alert" className={panel}>{saveError || `Prüfungsdaten konnten nicht geladen werden: ${error}`}</p>}
    {!draft && <section className={panel} aria-label="Prüfung einrichten">
      <h2 className="text-xl font-semibold">Neue Prüfung</h2>
      <div className="my-5 grid gap-4 sm:grid-cols-2">
        <label>Prüfungstyp<select className="mt-2 w-full rounded-lg border p-3 dark:border-ink-700 dark:bg-ink-800" value={mode} onChange={(event) => { setMode(event.target.value as ExamMode); setCount(10) }}>{Object.entries(examPresets).map(([key, preset]) => <option key={key} value={key}>{preset.label}</option>)}</select></label>
        <label>Fragenzahl<select className="mt-2 w-full rounded-lg border p-3 dark:border-ink-700 dark:bg-ink-800" value={count} onChange={(event) => setCount(Number(event.target.value))}>{examPresets[mode].counts.map((value) => <option key={value} value={value} disabled={getExamPool(mode).length < value}>{value} Fragen</option>)}</select></label>
      </div>
      <p>{examPresets[mode].description}</p>
      <p className="my-3">{count * examPresets[mode].secondsPerQuestion / 60} Minuten · Bestanden ab 50 % · Ein Punkt je Frage, keine Teilpunkte. Unbeantwortete Fragen zählen mit null Punkten.</p>
      <p className="mb-5 text-sm">Die Zeit läuft auch beim Verlassen oder Neuladen weiter. Antworten werden in diesem Browser gespeichert. Freitext wird ohne Beachtung von Großschreibung und äußeren Leerzeichen exakt verglichen. Dies ist eine Lernsimulation.</p>
      <Button onClick={start} disabled={getExamPool(mode).length < count}>Prüfung starten</Button>
    </section>}
    {draft && question && <section className="space-y-5" aria-label="Laufende Prüfung">
      <div className={`${panel} flex flex-wrap items-center justify-between gap-3`}><h2 className="font-semibold">{draft.label}</h2><span role="timer" className="font-mono text-xl">Restzeit {clock(remaining)}</span><p>{draft.questions.filter((item) => answered(draft.answers[item.questionKey])).length} / {draft.questions.length} beantwortet</p></div>
      {!draft.submittedAt && <>
        <nav aria-label="Fragennavigation" className="flex flex-wrap gap-2">{draft.questions.map((item, position) => <button key={item.questionKey} onClick={() => setIndex(position)} aria-current={position === index ? 'step' : undefined} aria-label={`Frage ${position + 1}, ${answered(draft.answers[item.questionKey]) ? 'beantwortet' : 'offen'}`} className={`h-11 min-w-11 rounded-lg border px-2 ${position === index ? 'ring-2 ring-brand-500' : ''} ${answered(draft.answers[item.questionKey]) ? 'bg-brand-600 text-white' : 'bg-white dark:bg-ink-800'}`}>{position + 1}</button>)}</nav>
        <div className={panel}>
          <p className="mb-3 text-sm">Frage {index + 1} · {question.subjectLabel}</p>
          {question.scenario && <p className="mb-4 whitespace-pre-wrap">{question.scenario}</p>}{question.referenceText && <p className="mb-4 whitespace-pre-wrap">{question.referenceText}</p>}
          <fieldset disabled={locked}><legend className="mb-5 whitespace-pre-wrap text-lg font-semibold">{question.title}</legend>
            {question.options?.length ? <div className="space-y-3">{question.type === 'multiple-choice' && <p className="text-sm">Mehrere Antworten möglich.</p>}{question.options.map((option) => <label key={option.id} className="flex cursor-pointer items-start gap-3 rounded-xl border border-ink-200 p-4 dark:border-ink-700"><input className="mt-1" type={question.type === 'multiple-choice' ? 'checkbox' : 'radio'} name={question.questionKey} checked={(draft.answers[question.questionKey] ?? []).includes(option.id)} onChange={() => {
              const previous = draft.answers[question.questionKey] ?? []
              changeAnswer(question.type === 'multiple-choice' ? previous.includes(option.id) ? previous.filter((id) => id !== option.id) : [...previous, option.id] : [option.id])
            }} /><span className="whitespace-pre-wrap">{option.text}</span></label>)}</div> : <label className="block">Deine Antwort<textarea className="mt-2 min-h-28 w-full rounded-xl border p-3 dark:border-ink-700 dark:bg-ink-800" value={draft.answers[question.questionKey]?.[0] ?? ''} onChange={(event) => changeAnswer([event.target.value])} /></label>}
          </fieldset>
          <div className="mt-5 flex flex-wrap gap-3"><Button variant="secondary" disabled={index === 0} onClick={() => setIndex(index - 1)}>Zurück</Button><Button variant="secondary" disabled={index === draft.questions.length - 1} onClick={() => setIndex(index + 1)}>Weiter</Button><Button variant="ghost" disabled={locked} onClick={() => changeAnswer([])}>Antwort löschen</Button></div>
        </div>
        <Button disabled={locked || saving} onClick={() => { if (window.confirm('Prüfung verbindlich abgeben? Danach können Antworten nicht mehr geändert werden.')) void submit(Date.now() >= Date.parse(draft.endAt) ? 'timeout' : 'manual') }}>Prüfung abgeben</Button>
      </>}
      {draft.submittedAt && <div className={panel}><h2 className="text-xl font-semibold">{draft.submissionReason === 'timeout' ? 'Zeit abgelaufen' : 'Prüfung abgegeben'} — {localCorrect} / {draft.questions.length} Punkte ({Math.round(localCorrect / draft.questions.length * 100)} %)</h2><p>{localCorrect / draft.questions.length >= 0.5 ? 'Bestanden' : 'Nicht bestanden'}</p><p className="my-3">{saving ? 'Ergebnis wird gespeichert …' : 'Ergebnis lokal gesichert. Übertragung noch ausstehend.'}</p><Button disabled={saving} onClick={() => void submit(draft.submissionReason ?? 'manual')}>Erneut speichern</Button><div className="mt-5"><Review data={draft} /></div></div>}
    </section>}
    {selected && <section className="space-y-4"><div className={panel}><h2 className="text-2xl font-bold">{selected.passed ? 'Bestanden' : 'Nicht bestanden'} · {selected.percentage} %</h2><p>{selected.correct_answers} / {selected.total_questions} Punkte · {selected.incorrect_answers} falsch · {selected.unanswered_questions} unbeantwortet · {clock(selected.used_seconds)} benötigt</p><p className="mt-2">In deinem Konto gespeichert.</p><Link className="text-brand-600 underline" to="/errors">Fehlertraining öffnen</Link></div><Review data={selected.result_data} /></section>}
    <section className="space-y-3"><h2 className="text-2xl font-semibold">Prüfungsverlauf</h2>{loading && <p role="status">Verlauf wird geladen …</p>}{!loading && !attempts.length && <p>Noch keine gespeicherten Prüfungen.</p>}{attempts.map((attempt) => <button key={attempt.id} className={`${panel} flex w-full flex-wrap items-center justify-between gap-3 text-left`} onClick={() => setReviewId(attempt.id)}><span><strong>{attempt.exam_label}</strong><br />{new Date(attempt.submitted_at).toLocaleString('de-DE')} · {attempt.total_questions} Fragen</span><span>{attempt.percentage} % · {attempt.passed ? 'Bestanden' : 'Nicht bestanden'} · Antworten ansehen</span></button>)}</section>
  </main>
}
