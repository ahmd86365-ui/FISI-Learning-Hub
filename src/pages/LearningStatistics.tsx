import { BarChart3, BookOpen, CalendarDays, Flame, Trophy } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLearningProgress } from '../contexts/LearningProgressContext'
import { useStudyActivity } from '../contexts/StudyActivityContext'
import { lessonCatalog } from '../lib/lessonCatalog'
import { calculateStudyStats } from '../lib/studyStats'

const lessonById = new Map(lessonCatalog.flatMap((module) => module.lessons).map((lesson) => [lesson.id, lesson]))

export default function LearningStatistics() {
  const { activities, loading, error } = useStudyActivity()
  const { progress } = useLearningProgress()
  const stats = calculateStudyStats(activities)
  const completedIds = new Set(progress.filter((entry) => entry.completed).map((entry) => entry.lesson_id))
  const totalCompleted = lessonCatalog
    .flatMap((module) => module.lessons)
    .filter((lesson) => completedIds.has(lesson.id)).length

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <header className="mb-8">
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          Persönliche Aktivität
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink-950 dark:text-white sm:text-4xl">Meine Lernstatistik</h1>
        <p className="mt-3 max-w-2xl text-ink-600 dark:text-ink-400">
          Deine Lerntage und abgeschlossenen Lektionen auf einen Blick.
        </p>
      </header>

      {error && (
        <p className="mb-6 rounded-xl border border-rose-300 bg-rose-50 p-4 text-sm text-rose-700 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-300" role="alert">
          Die Lernaktivität konnte nicht geladen werden: {error}
        </p>
      )}

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard icon={Flame} value={stats.currentStreak} label="Aktuelle Serie" suffix="Tage" />
        <StatCard icon={Trophy} value={stats.longestStreak} label="Längste Serie" suffix="Tage" />
        <StatCard icon={CalendarDays} value={stats.studyDaysLast7} label="Letzte 7 Tage" suffix="Lerntage" />
        <StatCard icon={BookOpen} value={stats.lessonsCompletedThisWeek} label="Diese Woche" suffix="Lektionen" />
      </div>

      <section className="mt-6 rounded-2xl border border-ink-200 bg-white p-5 shadow-card dark:border-ink-800 dark:bg-ink-900 dark:shadow-card-dark sm:p-6" aria-labelledby="week-title">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 id="week-title" className="text-lg font-semibold text-ink-900 dark:text-white">Aktivität der letzten 7 Tage</h2>
            <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">Ein aktiver Tag enthält mindestens eine abgeschlossene Lektion.</p>
          </div>
          <span className="font-mono text-xs uppercase tracking-wider text-ink-400 dark:text-ink-500" role="status">
            {loading ? 'Wird geladen …' : `${totalCompleted} insgesamt abgeschlossen`}
          </span>
        </div>
        <div className="mt-6 grid grid-cols-7 gap-2 sm:gap-3">
          {stats.last7Days.map((day) => (
            <div key={day.date} className="text-center">
              <div
                className={`mx-auto flex aspect-square w-full max-w-12 items-center justify-center rounded-xl border text-sm font-semibold ${
                  day.active
                    ? 'border-brand-300 bg-brand-50 text-brand-700 dark:border-brand-500/40 dark:bg-brand-500/10 dark:text-brand-300'
                    : 'border-ink-200 bg-ink-50 text-ink-400 dark:border-ink-800 dark:bg-ink-950 dark:text-ink-600'
                }`}
                title={`${day.completions} abgeschlossene Lektion${day.completions === 1 ? '' : 'en'}`}
              >
                {day.completions}
              </div>
              <span className="mt-2 block font-mono text-[0.65rem] uppercase text-ink-400 dark:text-ink-500">{day.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6 overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-card dark:border-ink-800 dark:bg-ink-900 dark:shadow-card-dark" aria-labelledby="recent-title">
        <div className="border-b border-ink-100 px-5 py-4 dark:border-ink-800">
          <h2 id="recent-title" className="text-lg font-semibold text-ink-900 dark:text-white">Letzte Aktivitäten</h2>
        </div>
        {loading ? (
          <p className="px-5 py-8 text-sm text-ink-500 dark:text-ink-400">Aktivitäten werden geladen …</p>
        ) : activities.length === 0 ? (
          <div className="px-5 py-10 text-center">
            <Flame className="mx-auto h-7 w-7 text-ink-300 dark:text-ink-600" aria-hidden="true" />
            <h3 className="mt-3 font-semibold text-ink-900 dark:text-white">Noch keine Lernaktivität</h3>
            <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">Schließe eine Lektion ab, um deine erste Serie zu starten.</p>
          </div>
        ) : (
          <ul className="divide-y divide-ink-100 dark:divide-ink-800">
            {activities.slice(0, 8).map((activity) => {
              const lesson = lessonById.get(activity.lesson_id)
              return (
                <li key={activity.id}>
                  {lesson ? (
                    <Link to={lesson.path} className="flex items-start gap-3 px-5 py-4 transition-colors hover:bg-ink-50 dark:hover:bg-ink-800/50">
                      <ActivityRow title={lesson.title} date={activity.occurred_at} />
                    </Link>
                  ) : (
                    <div className="flex items-start gap-3 px-5 py-4">
                      <ActivityRow title="Lektion abgeschlossen" date={activity.occurred_at} />
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        )}
      </section>
    </div>
  )
}

function StatCard({ icon: Icon, value, label, suffix }: { icon: typeof BarChart3; value: number; label: string; suffix: string }) {
  return (
    <article className="rounded-2xl border border-ink-200 bg-white p-4 shadow-card dark:border-ink-800 dark:bg-ink-900 dark:shadow-card-dark sm:p-5">
      <Icon className="h-5 w-5 text-brand-500 dark:text-brand-400" aria-hidden="true" />
      <p className="mt-4 text-3xl font-bold text-ink-950 dark:text-white">{value}</p>
      <p className="mt-1 text-xs font-medium text-ink-700 dark:text-ink-200">{label}</p>
      <p className="mt-0.5 text-xs text-ink-400 dark:text-ink-500">{suffix}</p>
    </article>
  )
}

function ActivityRow({ title, date }: { title: string; date: string }) {
  return (
    <>
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600 dark:bg-teal-500/10 dark:text-teal-300">
        <BookOpen className="h-4 w-4" aria-hidden="true" />
      </div>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-medium text-ink-800 dark:text-ink-100">{title}</span>
        <span className="mt-1 block text-xs text-ink-400 dark:text-ink-500">
          Abgeschlossen am {new Intl.DateTimeFormat('de-DE', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(date))}
        </span>
      </span>
    </>
  )
}
