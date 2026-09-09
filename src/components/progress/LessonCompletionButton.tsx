import { CheckCircle2, Circle } from 'lucide-react'
import { useLearningProgress } from '../../contexts/LearningProgressContext'

export function LessonCompletionButton({ lessonId }: { lessonId: string }) {
  const { isCompleted, isPending, toggleCompleted } = useLearningProgress()
  const completed = isCompleted(lessonId)
  const pending = isPending(lessonId)
  const Icon = completed ? CheckCircle2 : Circle

  return (
    <button
      type="button"
      onClick={() => void toggleCompleted(lessonId)}
      disabled={pending}
      aria-pressed={completed}
      className={`inline-flex h-9 items-center gap-2 rounded-full border px-3.5 text-sm font-medium transition-colors disabled:opacity-60 ${
        completed
          ? 'border-teal-300 bg-teal-50 text-teal-700 dark:border-teal-500/40 dark:bg-teal-500/10 dark:text-teal-300'
          : 'border-ink-200 bg-white text-ink-600 hover:border-ink-300 hover:bg-ink-50 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-300 dark:hover:border-ink-600 dark:hover:bg-ink-800'
      }`}
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
      {completed ? 'Abgeschlossen' : 'Als abgeschlossen markieren'}
    </button>
  )
}
