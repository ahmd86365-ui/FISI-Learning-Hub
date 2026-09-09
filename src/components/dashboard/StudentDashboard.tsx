import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Bookmark,
  RotateCcw,
  UserRound,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLearningProgress } from '../../contexts/LearningProgressContext'
import { useSavedItems, type SavedItem, type SavedItemKind } from '../../contexts/SavedItemsContext'
import { lessonCatalog } from '../../lib/lessonCatalog'
import { ButtonLink } from '../Button'

const previewLimit = 3

export function StudentDashboard() {
  const { progress, loading: progressLoading, error: progressError } = useLearningProgress()
  const { items, loading: savedLoading, error: savedError } = useSavedItems()
  const completedIds = new Set(progress.filter((entry) => entry.completed).map((entry) => entry.lesson_id))
  const lessons = lessonCatalog.flatMap((module) => module.lessons)
  const completedLessons = lessons.filter((lesson) => completedIds.has(lesson.id)).length
  const percentage = lessons.length > 0 ? Math.round((completedLessons / lessons.length) * 100) : 0
  const nextLesson = lessons.find((lesson) => !completedIds.has(lesson.id))
  const favoriteItems = items.filter((item) => item.item_kind === 'favorite').slice(0, previewLimit)
  const reviewItems = items.filter((item) => item.item_kind === 'review').slice(0, previewLimit)
  const subjects = Array.from(new Set(lessonCatalog.map((module) => module.subjectSlug))).map((subjectSlug) => {
    const modules = lessonCatalog.filter((module) => module.subjectSlug === subjectSlug)
    const subjectLessons = modules.flatMap((module) => module.lessons)
    const completed = subjectLessons.filter((lesson) => completedIds.has(lesson.id)).length
    return {
      slug: subjectSlug,
      title: modules[0].subjectTitle,
      completed,
      total: subjectLessons.length,
      percentage: subjectLessons.length > 0 ? Math.round((completed / subjectLessons.length) * 100) : 0,
    }
  })

  return (
    <section className="border-b border-ink-200 bg-ink-50/60 dark:border-ink-800 dark:bg-ink-900/30" aria-labelledby="dashboard-title">
      <div className="mx-auto max-w-content px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
              Deine Übersicht
            </p>
            <h2 id="dashboard-title" className="mt-2 text-2xl font-bold tracking-tight text-ink-950 dark:text-white sm:text-3xl">
              Heute weiterlernen
            </h2>
          </div>
          <span className="font-mono text-xs uppercase tracking-wider text-ink-400 dark:text-ink-500" role="status">
            {progressLoading || savedLoading ? 'Wird geladen …' : 'Aktueller Stand'}
          </span>
        </div>

        {(progressError || savedError) && (
          <p className="mb-6 rounded-xl border border-rose-300 bg-rose-50 p-4 text-sm text-rose-700 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-300" role="alert">
            Einige persönliche Daten konnten nicht geladen werden. Bitte aktualisiere die Seite.
          </p>
        )}

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.4fr)]">
          <article className="rounded-2xl border border-ink-200 bg-white p-5 shadow-card dark:border-ink-800 dark:bg-ink-900 dark:shadow-card-dark sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-brand-600 dark:text-brand-400">Gesamtfortschritt</p>
                <p className="mt-2 text-4xl font-bold tracking-tight text-ink-950 dark:text-white">{percentage}%</p>
              </div>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300">
                <BarChart3 className="h-5 w-5" aria-hidden="true" />
              </div>
            </div>
            <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">
              {completedLessons} von {lessons.length} Lektionen abgeschlossen
            </p>
            <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-ink-100 dark:bg-ink-800" role="progressbar" aria-label="Gesamtfortschritt" aria-valuemin={0} aria-valuemax={100} aria-valuenow={percentage}>
              <div className="h-full rounded-full bg-brand-500 transition-[width] duration-500 dark:bg-brand-400" style={{ width: `${percentage}%` }} />
            </div>

            <div className="mt-6 space-y-3 border-t border-ink-100 pt-5 dark:border-ink-800">
              {subjects.map((subject) => (
                <div key={subject.slug}>
                  <div className="mb-1.5 flex items-center justify-between gap-3 text-xs">
                    <span className="truncate font-medium text-ink-700 dark:text-ink-200">{subject.title}</span>
                    <span className="shrink-0 font-mono text-ink-400 dark:text-ink-500">{subject.completed}/{subject.total}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-ink-100 dark:bg-ink-800">
                    <div className="h-full rounded-full bg-brand-500/80 dark:bg-brand-400/80" style={{ width: `${subject.percentage}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="relative overflow-hidden rounded-2xl border border-brand-200 bg-white p-5 shadow-card dark:border-brand-500/20 dark:bg-ink-900 dark:shadow-card-dark sm:p-6">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-brand-400/10 blur-2xl" aria-hidden="true" />
            <div className="relative flex h-full flex-col">
              <div className="flex items-center gap-2 text-sm font-medium text-brand-600 dark:text-brand-400">
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                Weiterlernen
              </div>
              {progressLoading ? (
                <p className="mt-6 text-sm text-ink-500 dark:text-ink-400">Nächste Lektion wird ermittelt …</p>
              ) : nextLesson ? (
                <>
                  <h3 className="mt-6 text-2xl font-bold leading-tight text-ink-950 dark:text-white sm:text-3xl">{nextLesson.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                    Dies ist die erste noch offene Lektion in deinem Lernkatalog.
                  </p>
                  <div className="mt-auto pt-8">
                    <ButtonLink to={nextLesson.path} icon={<ArrowRight />} iconPosition="right">
                      Lektion öffnen
                    </ButtonLink>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="mt-6 text-2xl font-bold text-ink-950 dark:text-white">Alle Lektionen abgeschlossen</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                    Stark gemacht. In deinem Lernfortschritt kannst du abgeschlossene Themen erneut öffnen.
                  </p>
                  <div className="mt-auto pt-8">
                    <ButtonLink to="/progress" variant="secondary">Fortschritt ansehen</ButtonLink>
                  </div>
                </>
              )}
            </div>
          </article>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <SavedPreview kind="favorite" title="Favoriten" items={favoriteItems} loading={savedLoading} />
          <SavedPreview kind="review" title="Wiederholen" items={reviewItems} loading={savedLoading} />
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <QuickLink to="/progress" icon={BarChart3} title="Mein Lernfortschritt" description="Alle Module im Überblick" />
          <QuickLink to="/saved" icon={Bookmark} title="Favoriten & Wiederholen" description="Gespeicherte Inhalte öffnen" />
          <QuickLink to="/profile" icon={UserRound} title="Profil" description="Konto und Profilbild verwalten" />
        </div>
      </div>
    </section>
  )
}

function SavedPreview({ kind, title, items, loading }: { kind: SavedItemKind; title: string; items: SavedItem[]; loading: boolean }) {
  const Icon = kind === 'favorite' ? Bookmark : RotateCcw
  return (
    <article className="overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-card dark:border-ink-800 dark:bg-ink-900 dark:shadow-card-dark">
      <div className="flex items-center justify-between gap-4 border-b border-ink-100 px-5 py-4 dark:border-ink-800">
        <div className="flex items-center gap-3">
          <Icon className={`h-4 w-4 ${kind === 'favorite' ? 'text-amber-500' : 'text-brand-500 dark:text-brand-400'}`} aria-hidden="true" />
          <h3 className="font-semibold text-ink-900 dark:text-white">{title}</h3>
        </div>
        <Link to="/saved" className="text-xs font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300">
          Alle ansehen
        </Link>
      </div>
      {loading ? (
        <p className="px-5 py-6 text-sm text-ink-500 dark:text-ink-400">Wird geladen …</p>
      ) : items.length === 0 ? (
        <p className="px-5 py-6 text-sm text-ink-500 dark:text-ink-400">
          {kind === 'favorite' ? 'Noch keine Favoriten gespeichert.' : 'Aktuell ist nichts zum Wiederholen markiert.'}
        </p>
      ) : (
        <ul className="divide-y divide-ink-100 dark:divide-ink-800">
          {items.map((item) => (
            <li key={`${item.content_type}:${item.content_id}`}>
              <Link to={item.content_path} className="flex items-center gap-3 px-5 py-3.5 text-sm transition-colors hover:bg-ink-50 dark:hover:bg-ink-800/50">
                <BookOpen className="h-4 w-4 shrink-0 text-ink-400 dark:text-ink-500" aria-hidden="true" />
                <span className="min-w-0 flex-1 truncate font-medium text-ink-800 dark:text-ink-100">{item.content_title}</span>
                <span className="shrink-0 text-xs text-ink-400 dark:text-ink-500">{item.content_type === 'lesson' ? 'Lektion' : 'Aufgabe'}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

function QuickLink({ to, icon: Icon, title, description }: { to: string; icon: typeof BarChart3; title: string; description: string }) {
  return (
    <Link to={to} className="group flex items-center gap-3 rounded-xl border border-ink-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-soft dark:border-ink-800 dark:bg-ink-900 dark:hover:border-brand-500/30">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink-50 text-brand-600 dark:bg-ink-800 dark:text-brand-400">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </div>
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-ink-900 dark:text-white">{title}</span>
        <span className="mt-0.5 block text-xs text-ink-500 dark:text-ink-400">{description}</span>
      </span>
      <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-ink-300 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-500 dark:text-ink-600" aria-hidden="true" />
    </Link>
  )
}
