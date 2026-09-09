import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from './AuthContext'

export type TrackedQuestionType = 'lesson_exercise' | 'lesson_test' | 'ap_exam' | 'wiso_exam'

export interface QuestionSnapshot {
  prompt: string
  type?: string
  options?: { id: string; text: string }[]
  correctAnswer?: string | string[]
  explanation?: string
  modelSolution?: string
  scenario?: string
  referenceText?: string
}

export interface QuestionAttempt {
  questionKey: string
  questionId: string
  questionType: TrackedQuestionType
  sourceId: string
  title: string
  subjectLabel?: string
  moduleLabel?: string
  contentPath: string
  questionData: QuestionSnapshot
  correct: boolean
}

export interface QuestionPerformance {
  user_id: string
  question_key: string
  question_id: string
  question_type: TrackedQuestionType
  source_id: string
  title: string
  subject_label: string | null
  module_label: string | null
  content_path: string
  question_data: QuestionSnapshot
  attempts: number
  correct_answers: number
  incorrect_answers: number
  consecutive_correct: number
  last_result: boolean
  last_answered_at: string
}

interface QuestionPerformanceContextValue {
  performance: QuestionPerformance[]
  loading: boolean
  error: string | null
  recordAttempt: (attempt: QuestionAttempt) => Promise<void>
  recordAttempts: (attempts: QuestionAttempt[]) => Promise<void>
}

const QuestionPerformanceContext = createContext<QuestionPerformanceContextValue | undefined>(undefined)

export function QuestionPerformanceProvider({ children }: { children: ReactNode }) {
  const { session } = useAuth()
  const [performance, setPerformance] = useState<QuestionPerformance[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let active = true
    if (!session?.user) {
      setPerformance([])
      setLoading(false)
      return
    }

    setLoading(true)
    setError(null)
    void supabase
      .from('question_performance')
      .select('user_id,question_key,question_id,question_type,source_id,title,subject_label,module_label,content_path,question_data,attempts,correct_answers,incorrect_answers,consecutive_correct,last_result,last_answered_at')
      .order('last_answered_at', { ascending: false })
      .then(({ data, error: loadError }) => {
        if (!active) return
        if (loadError) {
          setPerformance([])
          setError(loadError.message)
        } else {
          setPerformance((data ?? []) as QuestionPerformance[])
        }
        setLoading(false)
      })

    return () => {
      active = false
    }
  }, [session?.user.id])

  const recordAttempt = useCallback(async (attempt: QuestionAttempt) => {
    const { data, error: saveError } = await supabase.rpc('record_question_attempt', {
      p_question_key: attempt.questionKey,
      p_question_id: attempt.questionId,
      p_question_type: attempt.questionType,
      p_source_id: attempt.sourceId,
      p_title: attempt.title,
      p_subject_label: attempt.subjectLabel ?? null,
      p_module_label: attempt.moduleLabel ?? null,
      p_content_path: attempt.contentPath,
      p_question_data: attempt.questionData,
      p_correct: attempt.correct,
    }).single()

    if (saveError) {
      setError(saveError.message)
      return
    }
    const updated = data as QuestionPerformance
    setError(null)
    setPerformance((current) => [updated, ...current.filter((entry) => entry.question_key !== updated.question_key)])
  }, [])

  const recordAttempts = useCallback(
    async (attempts: QuestionAttempt[]) => {
      await Promise.all(attempts.map(recordAttempt))
    },
    [recordAttempt],
  )

  const value = useMemo(
    () => ({ performance, loading, error, recordAttempt, recordAttempts }),
    [error, loading, performance, recordAttempt, recordAttempts],
  )

  return <QuestionPerformanceContext.Provider value={value}>{children}</QuestionPerformanceContext.Provider>
}

export function useQuestionPerformance() {
  const context = useContext(QuestionPerformanceContext)
  if (!context) throw new Error('useQuestionPerformance must be used within a QuestionPerformanceProvider')
  return context
}

export const isActiveError = (entry: QuestionPerformance) =>
  entry.incorrect_answers > 0 && entry.consecutive_correct < 2

export function questionStats(entries: QuestionPerformance[]) {
  const attempts = entries.reduce((sum, entry) => sum + entry.attempts, 0)
  const correct = entries.reduce((sum, entry) => sum + entry.correct_answers, 0)
  const incorrect = entries.reduce((sum, entry) => sum + entry.incorrect_answers, 0)
  return {
    attempts,
    correct,
    incorrect,
    accuracy: attempts > 0 ? Math.round((correct / attempts) * 100) : 0,
    activeErrors: entries.filter(isActiveError).length,
  }
}
