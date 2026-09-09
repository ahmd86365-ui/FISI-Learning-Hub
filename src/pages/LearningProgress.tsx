import { CheckCircle2, Circle, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLearningProgress } from '../contexts/LearningProgressContext'
import { lessonCatalog } from '../lib/lessonCatalog'

export default function LearningProgress() {
  const { progress, loading, error } = useLearningProgress()
  const completedIds = new Set(progress.filter((entry) => entry.completed).map((entry) => entry.lesson_id))
  const totalLessons = lessonCatalog.reduce((total, module) => total + module.lessons.length, 0)
  const completedLessons = lessonCatalog.reduce(
    (total, module) => total + module.lessons.filter((lesson) => completedIds.has(lesson.id)).length,
    0,
  )
  const percentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0
  const subjects = Array.from(new Set(lessonCatalog.map((module) => module.subjectSlug))).map((subjectSlug) => ({
    slug: subjectSlug,
    title: lessonCatalog.find((module) => module.subjectSlug === subjectSlug)!.subjectTitle,
    modules: lessonCatalog.filter((module) => module.subjectSlug === subjectSlug),
  }))

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <header className="mb-8">
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          Persönliche Übersicht
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink-950 dark:text-white sm:text-4xl">
          Mein Lernfortschritt
        </h1>
        <p className="mt-3 max-w-2xl text-ink-600 dark:text-ink-400">
          Behalte im Blick, welche Lektionen du bereits abgeschlossen hast.
        </p>
      </header>

      {error && (
        <p className="mb-6 rounded-xl border border-rose-300 bg-rose-50 p-4 text-sm text-rose-700 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-300" role="alert">
          Der Lernfortschritt konnte nicht geladen werden: {error}
        </p>
      )}

      <section className="rounded-2xl border border-ink-200 bg-white p-5 shadow-card dark:border-ink-800 dark:bg-ink-900 dark:shadow-card-dark sm:p-7">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm font-medium text-brand-600 dark:text-brand-400">
              <TrendingUp className="h-4 w-4" aria-hidden="true" />
              Gesamtfortschritt
            </div>
            <p className="mt-2 text-3xl font-bold text-ink-950 dark:text-white">{percentage}%</p>
            <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">
              {completedLessons} von {totalLessons} Lektionen abgeschlossen
            </p>
          </div>
          <p className="font-mono text-xs uppercase tracking-wider text-ink-400 dark:text-ink-500" role="status">
            {loading ? 'Wird geladen …' : 'Aktueller Stand'}
          </p>
        </div>
        <div className="mt-5 h-3 overflow-hidden rounded-full bg-ink-100 dark:bg-ink-800" aria-hidden="true">
          <div className="h-full rounded-full bg-brand-500 transition-[width] duration-500 dark:bg-brand-400" style={{ width: `${percentage}%` }} />
        </div>
      </section>

      <div className="mt-8 space-y-8">
        {subjects.map((subject) => (
          <section key={subject.slug}>
            <h2 className="mb-4 text-xl font-semibold text-ink-900 dark:text-white">{subject.title}</h2>
            <div className="grid gap-4 lg:grid-cols-2">
              {subject.modules.map((module) => {
                const completed = module.lessons.filter((lesson) => completedIds.has(lesson.id)).length
                const modulePercentage = Math.round((completed / module.lessons.length) * 100)
                return (
                  <article key={module.id} className="overflow-hidden rounded-xl border border-ink-200 bg-white dark:border-ink-800 dark:bg-ink-900">
                    <div className="border-b border-ink-100 px-5 py-4 dark:border-ink-800">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-medium text-ink-900 dark:text-white">{module.title}</h3>
                        <span className="shrink-0 font-mono text-xs text-ink-500 dark:text-ink-400">
                          {completed}/{module.lessons.length}
                        </span>
                      </div>
                      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-ink-100 dark:bg-ink-800">
                        <div className="h-full rounded-full bg-brand-500 dark:bg-brand-400" style={{ width: `${modulePercentage}%` }} />
                      </div>
                    </div>
                    <ul className="divide-y divide-ink-100 dark:divide-ink-800">
                      {module.lessons.map((lesson) => {
                        const isDone = completedIds.has(lesson.id)
                        const Icon = isDone ? CheckCircle2 : Circle
                        return (
                          <li key={lesson.id}>
                            <Link to={lesson.path} className="flex items-start gap-3 px-5 py-3.5 text-sm transition-colors hover:bg-ink-50 dark:hover:bg-ink-800/50">
                              <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${isDone ? 'text-teal-500 dark:text-teal-400' : 'text-ink-300 dark:text-ink-600'}`} aria-hidden="true" />
                              <span className={isDone ? 'text-ink-600 dark:text-ink-300' : 'text-ink-800 dark:text-ink-100'}>{lesson.title}</span>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </article>
                )
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
