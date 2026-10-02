import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Brain, Check, CheckCircle2, RotateCcw, X, XCircle } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { Button, ButtonLink } from '../components/Button'
import { Breadcrumb } from '../components/content/Breadcrumb'
import { EmptyState } from '../components/EmptyState'
import { PageHeader } from '../components/PageHeader'
import { getSubjectBySlug } from '../data/subjects'
import {
  flashcardBanks,
  getFlashcardBank,
  getLessonForFlashcards,
  isFlashcardAnswerCorrect,
  lessonPath,
  prepareQuestion,
  shuffle,
} from '../lib/flashcards'
import { useFlashcardProgress } from '../contexts/FlashcardProgressContext'
import type { FlashcardQuestion } from '../types/content'
import { dueFlashcards, formatDueLabel, getDueStatus, orderFlashcardsForLesson } from '../lib/flashcardSrs'
import { SmartBackButton } from '../components/navigation/SmartBackButton'
import { BackToTop } from '../components/navigation/BackToTop'

type AnswerState = { answer: string[]; correct: boolean }

function answerText(question: FlashcardQuestion) {
  const ids = Array.isArray(question.correctAnswer) ? question.correctAnswer : [question.correctAnswer]
  if (question.type === 'short-answer') return ids.join(' / ')
  return ids.map((id) => question.answers?.find((answer) => answer.id === id)?.text ?? id).join(', ')
}

function newRound(questions: FlashcardQuestion[], prioritized?: FlashcardQuestion[]) {
  return (prioritized ?? shuffle(questions)).map(prepareQuestion)
}

export default function Flashcards({ dueReview = false }: { dueReview?: boolean }) {
  const { lessonId } = useParams<{ lessonId: string }>()
  const bank = getFlashcardBank(lessonId ? decodeURIComponent(lessonId) : undefined)
  const { saveResult, getProgress, cardProgress, recordCardReview, loading } = useFlashcardProgress()
  const reviewCards = useMemo(() => dueReview ? dueFlashcards(flashcardBanks.flatMap((entry) => entry.questions), cardProgress) : [], [cardProgress, dueReview])
  const found = getLessonForFlashcards(bank?.lessonId)
  const subject = found ? getSubjectBySlug(found.module.subjectSlug)! : undefined
  const returnPath = found && subject ? lessonPath(subject.path, found.module.slug, found.topic.slug) : '/'
  const [questions, setQuestions] = useState<FlashcardQuestion[]>([])
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<string, AnswerState>>({})
  const [selected, setSelected] = useState<string[]>([])
  const [shortAnswer, setShortAnswer] = useState('')
  const [selfAssessmentRevealed, setSelfAssessmentRevealed] = useState(false)
  const [finished, setFinished] = useState(false)
  const [reviewMode, setReviewMode] = useState(false)
  const [originalResult, setOriginalResult] = useState<{ correct: number; total: number } | null>(null)
  const savedRound = useRef(false)
  const initialized = useRef(false)
  const initiallyDueIds = useRef(new Set<string>())

  useEffect(() => {
    if (loading || initialized.current) return
    const source = dueReview ? reviewCards : bank?.questions ?? []
    const ordered = dueReview ? source : orderFlashcardsForLesson(source, cardProgress)
    initiallyDueIds.current = new Set(source.filter((card) => {
      const entry = cardProgress.find((progressEntry) => progressEntry.card_id === card.id)
      return entry ? getDueStatus(entry) !== 'future' : false
    }).map((card) => card.id))
    setQuestions(newRound(source, ordered))
    initialized.current = true
  }, [bank, cardProgress, dueReview, loading, reviewCards])

  const correctCount = Object.values(answers).filter((answer) => answer.correct).length
  const incorrectCount = Object.values(answers).filter((answer) => !answer.correct).length
  const question = questions[current]
  const submitted = question ? answers[question.id] : undefined
  const isMultiAnswer = question && Array.isArray(question.correctAnswer) && question.correctAnswer.length > 1
  const progress = questions.length ? ((current + (submitted ? 1 : 0)) / questions.length) * 100 : 0
  const persisted = bank ? getProgress(bank.lessonId) : undefined

  const wrongQuestions = useMemo(() => questions.filter((item) => answers[item.id] && !answers[item.id].correct), [answers, questions])

  if (loading || !initialized.current) {
    return <div className="mx-auto flex min-h-[50vh] max-w-content items-center justify-center px-4" role="status">Lernkarten werden vorbereitet …</div>
  }

  if (dueReview && questions.length === 0) {
    return <div className="mx-auto max-w-content px-4 py-24 sm:px-6"><EmptyState icon={CheckCircle2} title="Heute keine Lernkarten fällig" description="Dein Wiederholungsplan ist für heute erledigt."><ButtonLink to="/review" size="sm">Zurück zu Smart Review</ButtonLink></EmptyState></div>
  }

  if ((!dueReview && (!bank || !found || !subject || bank.questions.length === 0)) || questions.length === 0) {
    return <div className="mx-auto max-w-content px-4 py-24 sm:px-6"><EmptyState icon={Brain} title="Lernkarten nicht gefunden" description="Für diese Lektion ist kein bewertbarer Fragenpool verfügbar."><ButtonLink to="/" size="sm">Zur Startseite</ButtonLink></EmptyState></div>
  }

  const submit = (value?: string[]) => {
    if (!question || submitted) return
    const answer = value ?? (question.type === 'short-answer' ? [shortAnswer] : selected)
    if (!answer[0]) return
    const correct = isFlashcardAnswerCorrect(question, answer)
    setAnswers((previous) => ({ ...previous, [question.id]: { answer, correct } }))
    const questionBank = getFlashcardBank(question.lessonId)
    if (questionBank) void recordCardReview(question, questionBank, correct)
  }

  const selectOption = (id: string) => {
    if (!question || submitted) return
    if (isMultiAnswer) {
      setSelected((previous) => previous.includes(id) ? previous.filter((entry) => entry !== id) : [...previous, id])
    } else {
      setSelected([id])
      submit([id])
    }
  }

  const next = () => {
    if (current < questions.length - 1) {
      setCurrent((value) => value + 1)
      setSelected([])
      setShortAnswer('')
      setSelfAssessmentRevealed(false)
      return
    }
    const result = { correct: correctCount, total: questions.length }
    if (!reviewMode) setOriginalResult(result)
    setFinished(true)
    if (!dueReview && !reviewMode && bank && !savedRound.current) {
      savedRound.current = true
      void saveResult(bank.lessonId, result.correct, result.total)
    }
  }

  const restart = (onlyWrong: boolean) => {
    const source = onlyWrong ? wrongQuestions : dueReview ? dueFlashcards(flashcardBanks.flatMap((entry) => entry.questions), cardProgress) : bank?.questions ?? []
    const ordered = onlyWrong || dueReview ? undefined : orderFlashcardsForLesson(source, cardProgress)
    setQuestions(newRound(source, ordered))
    setAnswers({})
    setSelected([])
    setShortAnswer('')
    setSelfAssessmentRevealed(false)
    setCurrent(0)
    setFinished(false)
    setReviewMode(onlyWrong)
    if (!onlyWrong) {
      setOriginalResult(null)
      savedRound.current = false
    }
  }

  if (finished) {
    const score = Math.round((correctCount / questions.length) * 100)
    return (
      <div>
        <PageHeader eyebrow={dueReview ? 'Spaced Repetition' : found!.module.title} title={dueReview ? 'Wiederholung abgeschlossen' : 'Lernkarten abgeschlossen'} description={dueReview ? 'Fällige Lernkarten' : found!.topic.title} accent={subject?.accent ?? 'brand'} breadcrumb={<Breadcrumb items={dueReview ? [{ label: 'Home', to: '/' }, { label: 'Smart Review', to: '/review' }, { label: 'Lernkarten' }] : [{ label: 'Home', to: '/' }, { label: found!.topic.title, to: returnPath }, { label: 'Lernkarten' }]} />} />
        <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <SmartBackButton label={dueReview ? 'Zurück zu Smart Review' : 'Zurück zur Lektion'} fallback={dueReview ? '/review' : returnPath} className="mb-4 -ml-3" />
          <section className="rounded-2xl border border-ink-200 bg-white p-6 text-center shadow-card dark:border-ink-800 dark:bg-ink-900 sm:p-10" aria-labelledby="result-title">
            <CheckCircle2 className="mx-auto h-10 w-10 text-brand-500" aria-hidden="true" />
            <h2 id="result-title" className="mt-4 text-2xl font-bold text-ink-900 dark:text-white">{reviewMode ? 'Fehlerrunde abgeschlossen' : 'Lernkarten abgeschlossen'}</h2>
            <p className="mt-3 text-4xl font-bold text-ink-950 dark:text-white">{correctCount} / {questions.length}</p>
            <p className="mt-1 text-lg font-semibold text-brand-700 dark:text-brand-300">{score} %</p>
            <div className="mx-auto mt-6 flex max-w-sm justify-center gap-6 rounded-xl bg-ink-50 px-4 py-3 dark:bg-ink-850">
              <span className="flex items-center gap-2 text-sm font-semibold text-teal-700 dark:text-teal-300"><Check className="h-4 w-4" />{correctCount} richtig</span>
              <span className="flex items-center gap-2 text-sm font-semibold text-rose-700 dark:text-rose-300"><X className="h-4 w-4" />{incorrectCount} falsch</span>
            </div>
            <div className="mx-auto mt-5 grid max-w-lg gap-2 text-sm text-ink-600 dark:text-ink-300 sm:grid-cols-3">
              <span>{questions.length} Karten gelernt</span>
              <span>{questions.filter((item) => initiallyDueIds.current.has(item.id)).length} heute fällig erledigt</span>
              <span>{incorrectCount} Karten erneut in Kürze</span>
            </div>
            {cardProgress.filter((entry) => answers[entry.card_id]).sort((a, b) => a.due_at.localeCompare(b.due_at))[0] && <p className="mt-3 text-xs text-ink-500 dark:text-ink-400">Nächste Wiederholung: {formatDueLabel(cardProgress.filter((entry) => answers[entry.card_id]).sort((a, b) => a.due_at.localeCompare(b.due_at))[0].due_at)}</p>}
            {reviewMode && originalResult && <p className="mt-5 text-sm text-ink-500 dark:text-ink-400">Ursprüngliches Ergebnis: {originalResult.correct} / {originalResult.total}. Dieses Ergebnis bleibt gespeichert.</p>}
            {!dueReview && !reviewMode && persisted && <p className="mt-5 text-xs text-ink-500 dark:text-ink-400">Bisheriger Bestwert: {Math.max(persisted.best_score, score)} %</p>}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              {incorrectCount > 0 && <Button onClick={() => restart(true)} icon={<RotateCcw />}>Fehler wiederholen</Button>}
              {!dueReview && <Button onClick={() => restart(false)} variant="secondary" icon={<RotateCcw />}>Alle Fragen erneut</Button>}
              <ButtonLink to={dueReview ? '/review' : returnPath} variant="ghost" icon={<ArrowLeft />}>{dueReview ? 'Zurück zu Smart Review' : 'Zurück zur Lektion'}</ButtonLink>
            </div>
          </section>
        </main><BackToTop />
      </div>
    )
  }

  const selectedIds = submitted?.answer ?? selected
  return (
    <div>
      <PageHeader eyebrow={dueReview ? 'Spaced Repetition' : found!.module.title} title={dueReview ? 'Fällige Lernkarten' : found!.topic.title} description={dueReview ? `${questions.length} Karten für heute` : 'Lernkarten'} accent={subject?.accent ?? 'brand'} breadcrumb={<Breadcrumb items={dueReview ? [{ label: 'Home', to: '/' }, { label: 'Smart Review', to: '/review' }, { label: 'Lernkarten' }] : [{ label: 'Home', to: '/' }, { label: found!.topic.title, to: returnPath }, { label: 'Lernkarten' }]} />} />
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <SmartBackButton label={dueReview ? 'Zurück zu Smart Review' : 'Zurück zur Lektion'} fallback={dueReview ? '/review' : returnPath} className="mb-4 -ml-3" />
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-sm" aria-live="polite">
          <span className="font-semibold text-ink-700 dark:text-ink-200">Frage {current + 1} / {questions.length}</span>
          <div className="flex gap-3"><span className="font-semibold text-teal-700 dark:text-teal-300">{correctCount} richtig</span><span className="font-semibold text-rose-700 dark:text-rose-300">{incorrectCount} falsch</span></div>
        </div>
        <div className="mb-6 h-2 overflow-hidden rounded-full bg-ink-200 dark:bg-ink-800" role="progressbar" aria-valuemin={0} aria-valuemax={questions.length} aria-valuenow={current + (submitted ? 1 : 0)} aria-label="Fortschritt">
          <div className="h-full rounded-full bg-brand-600 transition-[width] duration-300 dark:bg-brand-500" style={{ width: `${progress}%` }} />
        </div>

        <section className="rounded-2xl border border-ink-200 bg-white p-5 shadow-card dark:border-ink-800 dark:bg-ink-900 sm:p-8" aria-labelledby="question-title">
          <div className="mb-5 flex items-center justify-between gap-3">
            <span className="rounded-full bg-ink-100 px-3 py-1 text-xs font-semibold text-ink-600 dark:bg-ink-800 dark:text-ink-300">{question.difficulty === 'easy' ? 'Einfach' : question.difficulty === 'medium' ? 'Mittel' : 'Anspruchsvoll'}</span>
            {(reviewMode || dueReview) && <span className="text-xs font-semibold text-amber-700 dark:text-amber-300">{dueReview ? 'Fällige Wiederholung' : 'Fehlerrunde'}</span>}
          </div>
          <h2 id="question-title" className="text-lg font-bold leading-relaxed text-ink-900 dark:text-white sm:text-xl">{question.question}</h2>

          {question.type === 'self-assessment' ? (
            <div className="mt-6">
              {!selfAssessmentRevealed ? (
                <Button onClick={() => setSelfAssessmentRevealed(true)} className="w-full sm:w-auto">Musterlösung zeigen</Button>
              ) : (
                <div className="rounded-xl border border-brand-200 bg-brand-50 p-4 dark:border-brand-500/30 dark:bg-brand-500/10">
                  <p className="text-sm font-semibold text-ink-900 dark:text-white">Musterlösung</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700 dark:text-ink-200">{question.correctAnswer}</p>
                  <p className="mt-4 text-sm font-semibold text-ink-800 dark:text-ink-100">Konntest du die Kernaussage selbst nennen?</p>
                  <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                    <Button onClick={() => submit(['known'])} icon={<Check />}>Gewusst</Button>
                    <Button onClick={() => submit(['review'])} variant="secondary" icon={<RotateCcw />}>Noch üben</Button>
                  </div>
                </div>
              )}
            </div>
          ) : question.type === 'short-answer' ? (
            <form className="mt-6" onSubmit={(event) => { event.preventDefault(); submit() }}>
              <label htmlFor="flashcard-answer" className="text-sm font-semibold text-ink-700 dark:text-ink-200">Deine Antwort</label>
              <input id="flashcard-answer" value={shortAnswer} onChange={(event) => setShortAnswer(event.target.value)} disabled={Boolean(submitted)} autoComplete="off" className="mt-2 min-h-12 w-full rounded-xl border border-ink-300 bg-white px-4 py-3 text-base text-ink-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 disabled:opacity-70 dark:border-ink-700 dark:bg-ink-850 dark:text-white" />
              {!submitted && <Button type="submit" className="mt-4 w-full sm:w-auto" disabled={!shortAnswer.trim()}>Antwort prüfen</Button>}
            </form>
          ) : (
            <div className="mt-6 space-y-3" role={isMultiAnswer ? 'group' : 'radiogroup'} aria-label="Antwortmöglichkeiten">
              {question.answers?.map((option) => {
                const chosen = selectedIds.includes(option.id)
                const correctOption = (Array.isArray(question.correctAnswer) ? question.correctAnswer : [question.correctAnswer]).includes(option.id)
                const state = submitted && correctOption ? 'correct' : submitted && chosen && !correctOption ? 'wrong' : chosen ? 'selected' : 'idle'
                const classes = state === 'correct'
                  ? 'border-teal-500 bg-teal-50 text-teal-900 dark:border-teal-500 dark:bg-teal-500/10 dark:text-teal-200'
                  : state === 'wrong'
                    ? 'border-rose-500 bg-rose-50 text-rose-900 dark:border-rose-500 dark:bg-rose-500/10 dark:text-rose-200'
                    : state === 'selected'
                      ? 'border-brand-500 bg-brand-50 text-brand-900 dark:border-brand-500 dark:bg-brand-500/10 dark:text-brand-200'
                      : 'border-ink-200 text-ink-700 hover:border-brand-300 hover:bg-brand-50/50 dark:border-ink-700 dark:text-ink-200 dark:hover:border-brand-500 dark:hover:bg-brand-500/10'
                return <button key={option.id} type="button" onClick={() => selectOption(option.id)} disabled={Boolean(submitted)} aria-pressed={chosen} className={`flex min-h-12 w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors disabled:cursor-default disabled:opacity-100 ${classes}`}><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current" aria-hidden="true">{submitted && correctOption ? <Check className="h-4 w-4" /> : submitted && chosen ? <X className="h-4 w-4" /> : chosen ? <span className="h-2.5 w-2.5 rounded-full bg-current" /> : null}</span><span>{option.text}</span></button>
              })}
              {isMultiAnswer && !submitted && <Button onClick={() => submit()} className="mt-4 w-full sm:w-auto" disabled={selected.length === 0}>Antwort prüfen</Button>}
            </div>
          )}

          {submitted && (
            <div className={`mt-6 rounded-xl border p-4 ${submitted.correct ? 'border-teal-200 bg-teal-50 dark:border-teal-500/30 dark:bg-teal-500/10' : 'border-rose-200 bg-rose-50 dark:border-rose-500/30 dark:bg-rose-500/10'}`} role="status" aria-live="polite">
              <div className={`flex items-center gap-2 font-bold ${submitted.correct ? 'text-teal-800 dark:text-teal-300' : 'text-rose-800 dark:text-rose-300'}`}>{submitted.correct ? <CheckCircle2 className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}{submitted.correct ? 'Richtig!' : 'Falsch'}</div>
              {!submitted.correct && <p className="mt-3 text-sm font-semibold text-ink-800 dark:text-ink-100">Richtige Antwort: <span className="font-normal">{answerText(question)}</span></p>}
              <p className="mt-2 text-sm leading-relaxed text-ink-700 dark:text-ink-200"><span className="font-semibold">Warum?</span> {question.explanation}</p>
            </div>
          )}
          {submitted && <div className="mt-6 flex justify-end"><Button onClick={next} icon={<ArrowRight />} iconPosition="right" className="w-full sm:w-auto">{current < questions.length - 1 ? 'Nächste Frage' : 'Ergebnis anzeigen'}</Button></div>}
        </section>
      </main><BackToTop />
    </div>
  )
}
