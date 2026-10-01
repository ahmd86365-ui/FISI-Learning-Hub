import { ArrowRight, Brain } from 'lucide-react'
import { ButtonLink } from '../Button'
import { getFlashcardBank } from '../../lib/flashcards'
import { useFlashcardProgress } from '../../contexts/FlashcardProgressContext'

export function FlashcardLessonAction({ lessonId }: { lessonId: string }) {
  const bank = getFlashcardBank(lessonId)
  const { getProgress } = useFlashcardProgress()
  const saved = getProgress(lessonId)
  if (!bank || bank.questions.length === 0) return null

  return (
    <section className="mt-14" aria-labelledby={`flashcards-${lessonId}`}>
      <div className="rounded-2xl border border-brand-200 bg-brand-50/60 p-5 shadow-soft dark:border-brand-500/30 dark:bg-brand-500/10 sm:p-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white dark:bg-brand-500" aria-hidden="true">
              <Brain className="h-5 w-5" />
            </span>
            <div>
              <h2 id={`flashcards-${lessonId}`} className="text-lg font-bold text-ink-900 dark:text-white">Lernkarten</h2>
              <p className="mt-1 text-sm leading-relaxed text-ink-600 dark:text-ink-300">Teste dein Wissen zu diesem Thema mit direktem Feedback.</p>
              <p className="mt-2 text-xs font-semibold text-brand-700 dark:text-brand-300">
                {bank.questions.length} Fragen
                {saved ? ` · Bestwert ${saved.best_score} % · Zuletzt ${saved.last_score} %` : ''}
              </p>
            </div>
          </div>
          <ButtonLink to={`/lernkarten/${encodeURIComponent(lessonId)}`} size="lg" icon={<ArrowRight />} iconPosition="right" className="w-full sm:w-auto">
            Lernkarten starten
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
