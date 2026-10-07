import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from './AuthContext'
import { isFiniteNumber, isIsoDate, isRecord, readValidatedArray, safeStorageSet } from '../lib/browserStorage'

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

const trackedQuestionTypes: TrackedQuestionType[] = ['lesson_exercise', 'lesson_test', 'ap_exam', 'wiso_exam']
const isQuestionPerformance = (value: unknown): value is QuestionPerformance =>
  isRecord(value) && typeof value.user_id === 'string' && typeof value.question_key === 'string' &&
  typeof value.question_id === 'string' && trackedQuestionTypes.includes(value.question_type as TrackedQuestionType) &&
  typeof value.source_id === 'string' && typeof value.title === 'string' &&
  (value.subject_label === null || typeof value.subject_label === 'string') &&
  (value.module_label === null || typeof value.module_label === 'string') &&
  typeof value.content_path === 'string' && isRecord(value.question_data) && typeof value.question_data.prompt === 'string' &&
  isFiniteNumber(value.attempts) && isFiniteNumber(value.correct_answers) &&
  isFiniteNumber(value.incorrect_answers) && isFiniteNumber(value.consecutive_correct) &&
  typeof value.last_result === 'boolean' && isIsoDate(value.last_answered_at)

interface QuestionPerformanceContextValue {
  performance: QuestionPerformance[]
  loading: boolean
  error: string | null
  recordAttempt: (attempt: QuestionAttempt) => Promise<void>
  recordAttempts: (attempts: QuestionAttempt[]) => Promise<void>
  refresh: () => Promise<void>
}

const QuestionPerformanceContext = createContext<QuestionPerformanceContextValue | undefined>(undefined)

export function QuestionPerformanceProvider({ children }: { children: ReactNode }) {
  const { session, isGuest } = useAuth()
  const [performance, setPerformance] = useState<QuestionPerformance[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const currentUser = useRef(session?.user.id)
  currentUser.current = session?.user.id
  const requestId = useRef(0)

  const refresh = useCallback(async () => {
    const userId = session?.user?.id
    const request = ++requestId.current
    if (session?.user) {
      setLoading(true)
      setError(null)
      const { data, error: loadError } = await supabase
        .from('question_performance')
        .select('user_id,question_key,question_id,question_type,source_id,title,subject_label,module_label,content_path,question_data,attempts,correct_answers,incorrect_answers,consecutive_correct,last_result,last_answered_at')
        .order('last_answered_at', { ascending: false })
      if (currentUser.current !== userId || request !== requestId.current) return
      if (loadError) {
        setPerformance([])
        setError(loadError.message)
      } else {
        setPerformance((data ?? []) as QuestionPerformance[])
      }
      setLoading(false)
    } else if (isGuest) {
      setPerformance(readValidatedArray('local', 'fisi_guest_performance', isQuestionPerformance))
      setLoading(false)
    } else {
      setPerformance([])
      setLoading(false)
    }
  }, [session?.user?.id, isGuest])

  useEffect(() => { void refresh() }, [refresh])

  const recordAttempt = useCallback(async (attempt: QuestionAttempt) => {
    const userId = currentUser.current
    if (!userId && !isGuest) return
    
    if (userId) {
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
      if (currentUser.current !== userId) return

      if (saveError) {
        setError(saveError.message)
        return
      }
      const updated = data as QuestionPerformance
      setError(null)
      setPerformance((current) => [updated, ...current.filter((entry) => entry.question_key !== updated.question_key)])
    } else if (isGuest) {
      setPerformance((current) => {
        const existing = current.find((e) => e.question_key === attempt.questionKey)
        const updated: QuestionPerformance = {
          user_id: 'guest',
          question_key: attempt.questionKey,
          question_id: attempt.questionId,
          question_type: attempt.questionType,
          source_id: attempt.sourceId,
          title: attempt.title,
          subject_label: attempt.subjectLabel ?? null,
          module_label: attempt.moduleLabel ?? null,
          content_path: attempt.contentPath,
          question_data: attempt.questionData,
          attempts: (existing?.attempts ?? 0) + 1,
          correct_answers: (existing?.correct_answers ?? 0) + (attempt.correct ? 1 : 0),
          incorrect_answers: (existing?.incorrect_answers ?? 0) + (attempt.correct ? 0 : 1),
          consecutive_correct: attempt.correct ? (existing?.consecutive_correct ?? 0) + 1 : 0,
          last_result: attempt.correct,
          last_answered_at: new Date().toISOString(),
        }
        const newPerformance = [updated, ...current.filter((entry) => entry.question_key !== attempt.questionKey)]
        safeStorageSet('local', 'fisi_guest_performance', JSON.stringify(newPerformance))
        return newPerformance
      })
    }
  }, [isGuest])

  const recordAttempts = useCallback(
    async (attempts: QuestionAttempt[]) => {
      await Promise.all(attempts.map(recordAttempt))
    },
    [recordAttempt],
  )

  const value = useMemo(
    () => ({ performance, loading, error, recordAttempt, recordAttempts, refresh }),
    [error, loading, performance, recordAttempt, recordAttempts, refresh],
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
