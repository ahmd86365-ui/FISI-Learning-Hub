import { AlertCircle, CheckCircle2, RotateCcw, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  isActiveError,
  questionStats,
  useQuestionPerformance,
  type QuestionPerformance,
} from '../contexts/QuestionPerformanceContext'

const typeLabels: Record<QuestionPerformance['question_type'], string> = {
  lesson_exercise: 'Lektionsübung',
  lesson_test: 'Testfrage',
  ap_exam: 'AP-Prüfungsfrage',
  wiso_exam: 'WISO-Prüfungsfrage',
}

export default function ErrorTraining() {
  const { performance, loading, error } = useQuestionPerformance()
  const stats = questionStats(performance)
  const activeErrors = performance
    .filter(isActiveError)
    .sort((a, b) => b.incorrect_answers - a.incorrect_answers || Date.parse(b.last_answered_at) - Date.parse(a.last_answered_at))
  const mastered = performance
    .filter((entry) => entry.incorrect_answers > 0 && !isActiveError(entry))
    .sort((a, b) => Date.parse(b.last_answered_at) - Date.parse(a.last_answered_at))

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <header className="mb-8">
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          Persönliches Training
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink-950 dark:text-white sm:text-4xl">Fehlertraining</h1>
        <p className="mt-3 max-w-2xl text-ink-600 dark:text-ink-400">
          Wiederhole Fragen, die dir schwergefallen sind. Zwei richtige Antworten in Folge markieren eine Frage als gemeistert.
        </p>
      </header>

      {error && (
        <p className="mb-6 rounded-xl border border-rose-300 bg-rose-50 p-4 text-sm text-rose-700 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-300" role="alert">
          Deine Fragenstatistik konnte nicht geladen werden: {error}
        </p>
      )}

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
        <Stat value={stats.attempts} label="Versuche" />
        <Stat value={stats.correct} label="Richtig" tone="success" />
        <Stat value={stats.incorrect} label="Falsch" tone="error" />
        <Stat value={`${stats.accuracy}%`} label="Genauigkeit" />
        <Stat value={stats.activeErrors} label="Aktive Fehler" tone="error" className="col-span-2 lg:col-span-1" />
      </div>

      <section className="mt-8" aria-labelledby="active-errors-title">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 id="active-errors-title" className="text-xl font-semibold text-ink-900 dark:text-white">Aktive Fehler</h2>
          <span className="font-mono text-xs text-ink-400 dark:text-ink-500">{activeErrors.length} Fragen</span>
        </div>

        {loading ? (
          <div className="rounded-2xl border border-ink-200 bg-white p-10 text-center text-sm text-ink-500 dark:border-ink-800 dark:bg-ink-900 dark:text-ink-400" role="status">
            Fehlertraining wird geladen …
          </div>
        ) : activeErrors.length === 0 ? (
          <div className="rounded-2xl border border-ink-200 bg-white px-5 py-12 text-center shadow-card dark:border-ink-800 dark:bg-ink-900 dark:shadow-card-dark">
            <CheckCircle2 className="mx-auto h-8 w-8 text-teal-500 dark:text-teal-400" aria-hidden="true" />
            <h3 className="mt-4 font-semibold text-ink-900 dark:text-white">Keine aktiven Fehler</h3>
            <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">Falsch beantwortete Fragen erscheinen automatisch hier.</p>
          </div>
        ) : (
          <div className="grid gap-4 lg:grid-cols-2">
            {activeErrors.map((entry) => <ErrorCard key={entry.question_key} entry={entry} />)}
          </div>
        )}
      </section>

      {mastered.length > 0 && (
        <section className="mt-10" aria-labelledby="mastered-title">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 id="mastered-title" className="text-xl font-semibold text-ink-900 dark:text-white">Gemeistert</h2>
            <span className="font-mono text-xs text-ink-400 dark:text-ink-500">Historie bleibt erhalten</span>
          </div>
          <div className="overflow-hidden rounded-2xl border border-ink-200 bg-white dark:border-ink-800 dark:bg-ink-900">
            <ul className="divide-y divide-ink-100 dark:divide-ink-800">
              {mastered.slice(0, 10).map((entry) => (
                <li key={entry.question_key} className="flex items-start gap-3 px-5 py-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-500 dark:text-teal-400" aria-hidden="true" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-ink-800 dark:text-ink-100">{entry.title}</p>
                    <p className="mt-1 text-xs text-ink-400 dark:text-ink-500">{entry.correct_answers} richtig · {entry.incorrect_answers} falsch</p>
                  </div>
                  <Link to={entry.content_path} className="shrink-0 text-xs font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400">Öffnen</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  )
}

function ErrorCard({ entry }: { entry: QuestionPerformance }) {
  const recovery = Math.min(entry.consecutive_correct, 1)
  return (
    <article className="flex flex-col rounded-2xl border border-ink-200 bg-white p-5 shadow-card dark:border-ink-800 dark:bg-ink-900 dark:shadow-card-dark">
      <div className="flex items-start justify-between gap-3">
        <span className="rounded-full bg-rose-50 px-2.5 py-1 text-[0.7rem] font-medium text-rose-700 dark:bg-rose-500/10 dark:text-rose-300">
          {entry.incorrect_answers}× falsch
        </span>
        <span className="font-mono text-[0.65rem] uppercase text-ink-400 dark:text-ink-500">{typeLabels[entry.question_type]}</span>
      </div>
      <h3 className="mt-4 line-clamp-3 font-semibold leading-snug text-ink-900 dark:text-white">{entry.title}</h3>
      {(entry.subject_label || entry.module_label) && (
        <p className="mt-2 text-xs text-ink-500 dark:text-ink-400">{[entry.subject_label, entry.module_label].filter(Boolean).join(' · ')}</p>
      )}
      <div className="mt-5 flex items-center gap-2 text-xs text-ink-500 dark:text-ink-400">
        {recovery === 1 ? <Target className="h-4 w-4 text-amber-500" aria-hidden="true" /> : <AlertCircle className="h-4 w-4 text-rose-500" aria-hidden="true" />}
        {recovery === 1 ? 'Noch einmal richtig zum Meistern' : 'Zwei richtige Antworten zum Meistern'}
      </div>
      <p className="mt-2 text-xs text-ink-400 dark:text-ink-500">
        Zuletzt: {new Intl.DateTimeFormat('de-DE', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(entry.last_answered_at))}
      </p>
      <div className="mt-auto pt-5">
        <Link to={entry.content_path} className="inline-flex h-9 items-center gap-2 rounded-full bg-brand-600 px-4 text-sm font-medium text-white transition-colors hover:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-400">
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          Frage üben
        </Link>
      </div>
    </article>
  )
}

function Stat({ value, label, tone, className = '' }: { value: number | string; label: string; tone?: 'success' | 'error'; className?: string }) {
  const color = tone === 'success' ? 'text-teal-600 dark:text-teal-400' : tone === 'error' ? 'text-rose-600 dark:text-rose-400' : 'text-ink-950 dark:text-white'
  return (
    <article className={`rounded-xl border border-ink-200 bg-white p-4 dark:border-ink-800 dark:bg-ink-900 ${className}`}>
      <p className={`text-2xl font-bold ${color}`}>{value}</p>
      <p className="mt-1 text-xs text-ink-500 dark:text-ink-400">{label}</p>
    </article>
  )
}
