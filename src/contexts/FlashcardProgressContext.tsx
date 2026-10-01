import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { useAuth } from './AuthContext'
import { supabase } from '../lib/supabase'

export interface FlashcardProgress {
  user_id: string
  lesson_id: string
  completed_sessions: number
  best_score: number
  last_score: number
  last_total: number
  updated_at: string
}

interface FlashcardProgressValue {
  progress: FlashcardProgress[]
  loading: boolean
  saveResult: (lessonId: string, correct: number, total: number) => Promise<void>
  getProgress: (lessonId: string) => FlashcardProgress | undefined
}

const STORAGE_KEY = 'fisi_flashcard_progress'
const FlashcardProgressContext = createContext<FlashcardProgressValue | undefined>(undefined)

export function FlashcardProgressProvider({ children }: { children: ReactNode }) {
  const { session, isGuest } = useAuth()
  const [progress, setProgress] = useState<FlashcardProgress[]>([])
  const [loading, setLoading] = useState(false)
  const activeUser = useRef(session?.user.id)
  activeUser.current = session?.user.id

  useEffect(() => {
    let active = true
    if (session?.user) {
      setLoading(true)
      void supabase.from('flashcard_progress')
        .select('user_id,lesson_id,completed_sessions,best_score,last_score,last_total,updated_at')
        .then(({ data, error }) => {
          if (!active) return
          setProgress(error ? [] : (data ?? []) as FlashcardProgress[])
          setLoading(false)
        })
    } else if (isGuest) {
      try {
        setProgress(JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]'))
      } catch {
        setProgress([])
      }
      setLoading(false)
    } else {
      setProgress([])
      setLoading(false)
    }
    return () => { active = false }
  }, [isGuest, session?.user?.id])

  const saveResult = useCallback(async (lessonId: string, correct: number, total: number) => {
    if (total <= 0) return
    const score = Math.round((correct / total) * 100)
    const previous = progress.find((entry) => entry.lesson_id === lessonId)
    const next: FlashcardProgress = {
      user_id: session?.user?.id ?? 'guest',
      lesson_id: lessonId,
      completed_sessions: (previous?.completed_sessions ?? 0) + 1,
      best_score: Math.max(previous?.best_score ?? 0, score),
      last_score: score,
      last_total: total,
      updated_at: new Date().toISOString(),
    }
    setProgress((current) => [next, ...current.filter((entry) => entry.lesson_id !== lessonId)])

    if (session?.user) {
      const userId = session.user.id
      const { data, error } = await supabase.rpc('record_flashcard_result', {
        p_lesson_id: lessonId,
        p_score: score,
        p_total: total,
      }).single()
      if (activeUser.current !== userId) return
      if (!error && data) {
        setProgress((current) => [data as FlashcardProgress, ...current.filter((entry) => entry.lesson_id !== lessonId)])
      }
    } else if (isGuest) {
      const nextProgress = [next, ...progress.filter((entry) => entry.lesson_id !== lessonId)]
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextProgress))
    }
  }, [isGuest, progress, session?.user])

  const getProgress = useCallback((lessonId: string) => progress.find((entry) => entry.lesson_id === lessonId), [progress])
  const value = useMemo(() => ({ progress, loading, saveResult, getProgress }), [getProgress, loading, progress, saveResult])
  return <FlashcardProgressContext.Provider value={value}>{children}</FlashcardProgressContext.Provider>
}

export function useFlashcardProgress() {
  const context = useContext(FlashcardProgressContext)
  if (!context) throw new Error('useFlashcardProgress must be used within FlashcardProgressProvider')
  return context
}
