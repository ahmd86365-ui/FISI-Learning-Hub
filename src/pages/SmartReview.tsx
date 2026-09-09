import { BookOpen, CheckCircle2, CircleAlert, RotateCcw, Sparkles, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useSmartReviewPlan } from '../hooks/useSmartReviewPlan'
import type { ReviewPriority, SmartReviewRecommendation } from '../lib/smartReview'

const priorityStyle: Record<ReviewPriority, string> = {
  'Sehr hoch': 'bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300',
  Hoch: 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300',
  Mittel: 'bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300',
  Niedrig: 'bg-ink-100 text-ink-600 dark:bg-ink-800 dark:text-ink-300',
}

export default function SmartReview() {
  const { plan, loading, error } = useSmartReviewPlan()
  const visibleRecommendations = plan.urgentItems === 0 && plan.nextIncompleteLesson ? [plan.nextIncompleteLesson] : plan.recommendations

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <header className="mb-8">
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">Smart Review</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink-950 dark:text-white sm:text-4xl">Heute wiederholen</h1>
        <p className="mt-3 max-w-2xl text-ink-600 dark:text-ink-400">Dein persönlicher Tagesplan aus Lernfortschritt, Prüfungen, Fehlertraining und gespeicherten Wiederholungen.</p>
      </header>

      {error && <p role="alert" className="mb-6 rounded-xl border border-rose-300 bg-rose-50 p-4 text-sm text-rose-700 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-300">Einige persönliche Lerndaten konnten nicht geladen werden. Bitte aktualisiere die Seite.</p>}

      <section aria-label="Tagesübersicht" className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        <Summary value={plan.activeErrors} label="Aktive Fehler" />
        <Summary value={plan.reviewItems} label="Wiederholen" />
        <Summary value={plan.recommendedLessons} label="Lektionen" />
        <Summary value={plan.weakAreas.length} label="Schwache Bereiche" />
        <Summary value={plan.recommendations.length} label="Heute empfohlen" className="col-span-2 sm:col-span-1" />
      </section>

      {loading ? (
        <div role="status" className="mt-8 rounded-2xl border border-ink-200 bg-white p-10 text-center text-ink-500 dark:border-ink-800 dark:bg-ink-900 dark:text-ink-400">Dein Tagesplan wird erstellt …</div>
      ) : plan.urgentItems === 0 ? (
        <section className="mt-8 rounded-2xl border border-teal-200 bg-teal-50/70 p-6 text-center dark:border-teal-500/20 dark:bg-teal-500/10 sm:p-8">
          <CheckCircle2 className="mx-auto h-9 w-9 text-teal-600 dark:text-teal-400" aria-hidden="true" />
          <h2 className="mt-4 text-xl font-semibold text-ink-950 dark:text-white">Heute ist nichts dringend offen. Stark gemacht!</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-ink-600 dark:text-ink-300">{plan.nextIncompleteLesson ? 'Wenn du weitermachen möchtest, ist diese noch offene Lektion der nächste sinnvolle Schritt.' : 'Du hast alle verfügbaren Lektionen abgeschlossen und keine offenen Wiederholungen.'}</p>
        </section>
      ) : null}

      {!loading && visibleRecommendations.length > 0 && (
        <section className="mt-8" aria-labelledby="review-plan-title">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div><p className="font-mono text-xs uppercase tracking-wider text-ink-400 dark:text-ink-500">Nach Priorität sortiert</p><h2 id="review-plan-title" className="mt-1 text-xl font-semibold text-ink-950 dark:text-white">Dein Plan</h2></div>
            <span className="text-sm text-ink-500 dark:text-ink-400">max. 10 Einträge</span>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">{visibleRecommendations.map((recommendation) => <RecommendationCard key={recommendation.id} recommendation={recommendation} />)}</div>
        </section>
      )}

      {!loading && plan.weakAreas.length > 0 && (
        <section className="mt-10" aria-labelledby="weak-areas-title">
          <div className="mb-4 flex items-center gap-2"><Target className="h-5 w-5 text-brand-500" aria-hidden="true" /><h2 id="weak-areas-title" className="text-xl font-semibold text-ink-950 dark:text-white">Schwache Bereiche</h2></div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{plan.weakAreas.map((area) => <article key={area.key} className="rounded-xl border border-ink-200 bg-white p-4 dark:border-ink-800 dark:bg-ink-900"><h3 className="font-semibold text-ink-900 dark:text-white">{area.module || area.subject}</h3>{area.module && area.subject && <p className="mt-1 text-xs text-ink-500 dark:text-ink-400">{area.subject}</p>}<p className="mt-3 text-sm text-ink-600 dark:text-ink-300">{area.accuracy} % Genauigkeit · {area.activeErrors} aktive Fehler</p></article>)}</div>
        </section>
      )}
    </main>
  )
}

function RecommendationCard({ recommendation }: { recommendation: SmartReviewRecommendation }) {
  const Icon = recommendation.kind.includes('error') ? CircleAlert : recommendation.kind === 'saved-review' ? RotateCcw : BookOpen
  return <article className="flex flex-col rounded-2xl border border-ink-200 bg-white p-5 shadow-card dark:border-ink-800 dark:bg-ink-900 dark:shadow-card-dark sm:p-6">
    <div className="flex items-start justify-between gap-3"><span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${priorityStyle[recommendation.priority]}`}>{recommendation.priority}</span><Icon className="h-5 w-5 text-brand-500 dark:text-brand-400" aria-hidden="true" /></div>
    <p className="mt-4 flex items-center gap-2 text-sm font-medium text-ink-600 dark:text-ink-300"><Sparkles className="h-4 w-4 shrink-0 text-amber-500" aria-hidden="true" />{recommendation.reason}</p>
    <h3 className="mt-2 line-clamp-3 text-lg font-semibold leading-snug text-ink-950 dark:text-white">{recommendation.title}</h3>
    {(recommendation.subject || recommendation.module) && <p className="mt-2 text-xs text-ink-500 dark:text-ink-400">{[recommendation.subject, recommendation.module].filter(Boolean).join(' · ')}</p>}
    <div className="mt-auto pt-5"><Link to={recommendation.path} className="inline-flex h-10 items-center justify-center rounded-full bg-brand-600 px-5 text-sm font-medium text-white transition-colors hover:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-400">{recommendation.actionLabel}</Link></div>
  </article>
}

function Summary({ value, label, className = '' }: { value: number; label: string; className?: string }) {
  return <article className={`rounded-xl border border-ink-200 bg-white p-4 dark:border-ink-800 dark:bg-ink-900 ${className}`}><p className="text-2xl font-bold text-ink-950 dark:text-white">{value}</p><p className="mt-1 text-xs text-ink-500 dark:text-ink-400">{label}</p></article>
}
