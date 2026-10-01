import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { useAuth } from './AuthContext'
import { supabase } from '../lib/supabase'
import {
  CARD_PROGRESS_STORAGE_KEY,
  parseGuestCardProgress,
  scheduleFlashcardReview,
  serializeGuestCardProgress,
  type FlashcardCardProgress,
} from '../lib/flashcardSrs'
import type { FlashcardQuestion, LessonFlashcardBank } from '../types/content'

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
  cardProgress: FlashcardCardProgress[]
  loading: boolean
  error: boolean
  saveResult: (lessonId: string, correct: number, total: number) => Promise<void>
  recordCardReview: (card: FlashcardQuestion, bank: LessonFlashcardBank, correct: boolean, reviewedAt?: Date) => Promise<void>
  getProgress: (lessonId: string) => FlashcardProgress | undefined
}

const STORAGE_KEY = 'fisi_flashcard_progress'
const FlashcardProgressContext = createContext<FlashcardProgressValue | undefined>(undefined)

export function FlashcardProgressProvider({ children }: { children: ReactNode }) {
  const { session, isGuest } = useAuth()
  const [progress, setProgress] = useState<FlashcardProgress[]>([])
  const [cardProgress, setCardProgress] = useState<FlashcardCardProgress[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const activeUser = useRef(session?.user.id)
  activeUser.current = session?.user.id

  useEffect(() => {
    let active = true
    if (session?.user) {
      setLoading(true)
      setError(false)
      void Promise.all([
        supabase.from('flashcard_progress').select('user_id,lesson_id,completed_sessions,best_score,last_score,last_total,updated_at'),
        supabase.from('flashcard_card_progress').select('user_id,card_id,lesson_id,subject_id,module_id,attempts,correct_count,incorrect_count,consecutive_correct,repetitions,interval_days,ease_factor,last_result,last_reviewed_at,due_at,created_at,updated_at'),
      ]).then(([aggregate, cards]) => {
          if (!active) return
          setProgress(aggregate.error ? [] : (aggregate.data ?? []) as FlashcardProgress[])
          setCardProgress(cards.error ? [] : (cards.data ?? []) as FlashcardCardProgress[])
          setError(Boolean(aggregate.error || cards.error))
          setLoading(false)
        })
    } else if (isGuest) {
      try {
        setProgress(JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]'))
      } catch {
        setProgress([])
      }
      try {
        setCardProgress(parseGuestCardProgress(localStorage.getItem(CARD_PROGRESS_STORAGE_KEY)))
      } catch {
        setCardProgress([])
      }
      setError(false)
      setLoading(false)
    } else {
      setProgress([])
      setCardProgress([])
      setError(false)
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

  const recordCardReview = useCallback(async (card: FlashcardQuestion, bank: LessonFlashcardBank, correct: boolean, reviewedAt = new Date()) => {
    const previous = cardProgress.find((entry) => entry.card_id === card.id)
    const schedule = scheduleFlashcardReview(previous, correct, reviewedAt)
    const now = reviewedAt.toISOString()
    const optimistic: FlashcardCardProgress = {
      user_id: session?.user?.id ?? 'guest', card_id: card.id, lesson_id: bank.lessonId,
      subject_id: bank.subjectSlug, module_id: bank.moduleSlug,
      attempts: (previous?.attempts ?? 0) + 1,
      correct_count: (previous?.correct_count ?? 0) + (correct ? 1 : 0),
      incorrect_count: (previous?.incorrect_count ?? 0) + (correct ? 0 : 1),
      consecutive_correct: schedule.consecutiveCorrect, repetitions: schedule.repetitions,
      interval_days: schedule.intervalDays, ease_factor: schedule.easeFactor, last_result: correct,
      last_reviewed_at: now, due_at: schedule.dueAt, created_at: previous?.created_at ?? now, updated_at: now,
    }
    setCardProgress((current) => [optimistic, ...current.filter((entry) => entry.card_id !== card.id)])

    if (session?.user) {
      const userId = session.user.id
      const { data, error: rpcError } = await supabase.rpc('record_flashcard_card_review', {
        p_card_id: card.id, p_lesson_id: bank.lessonId, p_subject_id: bank.subjectSlug,
        p_module_id: bank.moduleSlug, p_correct: correct,
      }).single()
      if (activeUser.current === userId && !rpcError && data) {
        setCardProgress((current) => [data as FlashcardCardProgress, ...current.filter((entry) => entry.card_id !== card.id)])
      }
      if (rpcError) setError(true)
    } else if (isGuest) {
      setCardProgress((current) => {
        const next = [optimistic, ...current.filter((entry) => entry.card_id !== card.id)]
        localStorage.setItem(CARD_PROGRESS_STORAGE_KEY, serializeGuestCardProgress(next))
        return next
      })
    }
  }, [cardProgress, isGuest, session?.user])

  const getProgress = useCallback((lessonId: string) => progress.find((entry) => entry.lesson_id === lessonId), [progress])
  const value = useMemo(() => ({ progress, cardProgress, loading, error, saveResult, recordCardReview, getProgress }), [cardProgress, error, getProgress, loading, progress, recordCardReview, saveResult])
  return <FlashcardProgressContext.Provider value={value}>{children}</FlashcardProgressContext.Provider>
}

export function useFlashcardProgress() {
  const context = useContext(FlashcardProgressContext)
  if (!context) throw new Error('useFlashcardProgress must be used within FlashcardProgressProvider')
  return context
}
