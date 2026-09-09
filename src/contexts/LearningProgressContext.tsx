import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { useAuth } from './AuthContext'
import { supabase } from '../lib/supabase'

interface LessonProgressRow {
  user_id: string
  lesson_id: string
  completed: boolean
  updated_at: string
}

interface LearningProgressContextValue {
  progress: LessonProgressRow[]
  loading: boolean
  error: string | null
  isCompleted: (lessonId: string) => boolean
  isPending: (lessonId: string) => boolean
  toggleCompleted: (lessonId: string) => Promise<void>
}

const LearningProgressContext = createContext<LearningProgressContextValue | undefined>(undefined)

export function LearningProgressProvider({ children }: { children: ReactNode }) {
  const { session } = useAuth()
  const [progress, setProgress] = useState<LessonProgressRow[]>([])
  const [pendingIds, setPendingIds] = useState<Set<string>>(new Set())
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let active = true
    if (!session?.user) {
      setProgress([])
      setLoading(false)
      return
    }

    setLoading(true)
    setError(null)
    void supabase
      .from('lesson_progress')
      .select('user_id,lesson_id,completed,updated_at')
      .then(({ data, error: loadError }) => {
        if (!active) return
        if (loadError) {
          setProgress([])
          setError(loadError.message)
        } else {
          setProgress((data ?? []) as LessonProgressRow[])
        }
        setLoading(false)
      })

    return () => {
      active = false
    }
  }, [session?.user.id])

  const isCompleted = useCallback(
    (lessonId: string) => progress.some((entry) => entry.lesson_id === lessonId && entry.completed),
    [progress],
  )

  const isPending = useCallback((lessonId: string) => pendingIds.has(lessonId), [pendingIds])

  const toggleCompleted = useCallback(
    async (lessonId: string) => {
      const user = session?.user
      if (!user || pendingIds.has(lessonId)) return

      const previous = progress.find((entry) => entry.lesson_id === lessonId)
      const completed = !previous?.completed
      const optimistic: LessonProgressRow = {
        user_id: user.id,
        lesson_id: lessonId,
        completed,
        updated_at: new Date().toISOString(),
      }

      setError(null)
      setPendingIds((current) => new Set(current).add(lessonId))
      setProgress((current) => [optimistic, ...current.filter((entry) => entry.lesson_id !== lessonId)])

      const { data, error: saveError } = await supabase
        .from('lesson_progress')
        .upsert(
          { user_id: user.id, lesson_id: lessonId, completed },
          { onConflict: 'user_id,lesson_id' },
        )
        .select('user_id,lesson_id,completed,updated_at')
        .single()

      if (saveError) {
        setProgress((current) => [
          ...(previous ? [previous] : []),
          ...current.filter((entry) => entry.lesson_id !== lessonId),
        ])
        setError(saveError.message)
      } else {
        setProgress((current) => [data as LessonProgressRow, ...current.filter((entry) => entry.lesson_id !== lessonId)])
      }

      setPendingIds((current) => {
        const next = new Set(current)
        next.delete(lessonId)
        return next
      })
    },
    [pendingIds, progress, session?.user],
  )

  const value = useMemo(
    () => ({ progress, loading, error, isCompleted, isPending, toggleCompleted }),
    [error, isCompleted, isPending, loading, progress, toggleCompleted],
  )

  return <LearningProgressContext.Provider value={value}>{children}</LearningProgressContext.Provider>
}

export function useLearningProgress() {
  const context = useContext(LearningProgressContext)
  if (!context) throw new Error('useLearningProgress must be used within a LearningProgressProvider')
  return context
}
