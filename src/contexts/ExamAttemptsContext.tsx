import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { supabase } from '../lib/supabase'
import type { ExamMode, ExamResultData, SimulationQuestion } from '../lib/examSimulationCore'
import { isSimulationAnswerCorrect, toPerformanceAttempt } from '../lib/examSimulationCore'
import { useAuth } from './AuthContext'
import { useQuestionPerformance } from './QuestionPerformanceContext'

export interface ExamAttempt {
  id: string
  user_id: string
  exam_mode: ExamMode
  exam_label: string
  started_at: string
  submitted_at: string
  duration_seconds: number
  used_seconds: number
  total_questions: number
  correct_answers: number
  incorrect_answers: number
  unanswered_questions: number
  percentage: number
  passed: boolean
  result_data: ExamResultData
}

export interface SubmitExamInput {
  id: string
  mode: ExamMode
  label: string
  startedAt: string
  durationSeconds: number
  submittedAt?: string
  questions: SimulationQuestion[]
  answers: Record<string, string[]>
}

interface ExamAttemptsContextValue {
  attempts: ExamAttempt[]
  loading: boolean
  error: string | null
  submitExam: (input: SubmitExamInput) => Promise<ExamAttempt | null>
}

const ExamAttemptsContext = createContext<ExamAttemptsContextValue | undefined>(undefined)

export function ExamAttemptsProvider({ children }: { children: ReactNode }) {
  const { session } = useAuth()
  const { refresh: refreshQuestionPerformance } = useQuestionPerformance()
  const [attempts, setAttempts] = useState<ExamAttempt[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const currentUser = useRef(session?.user.id)
  currentUser.current = session?.user.id

  useEffect(() => {
    let active = true
    if (!session?.user) {
      setAttempts([])
      setLoading(false)
      return
    }
    setLoading(true)
    setError(null)
    void supabase
      .from('exam_attempts')
      .select('id,user_id,exam_mode,exam_label,started_at,submitted_at,duration_seconds,used_seconds,total_questions,correct_answers,incorrect_answers,unanswered_questions,percentage,passed,result_data')
      .order('submitted_at', { ascending: false })
      .then(({ data, error: loadError }) => {
        if (!active) return
        if (loadError) {
          setAttempts([])
          setError(loadError.message)
        } else {
          setAttempts((data ?? []) as ExamAttempt[])
        }
        setLoading(false)
      })
    return () => { active = false }
  }, [session?.user.id])

  const submitExam = useCallback(async (input: SubmitExamInput) => {
    const userId = currentUser.current
    if (!userId) return null
    const answeredQuestions = input.questions.filter((question) => (input.answers[question.questionKey] ?? []).some((value) => value.trim()))
    const correct = answeredQuestions.filter((question) => isSimulationAnswerCorrect(question, input.answers[question.questionKey] ?? [])).length
    const incorrect = answeredQuestions.length - correct
    const unanswered = input.questions.length - answeredQuestions.length
    const percentage = Math.round((correct / input.questions.length) * 100)
    const usedSeconds = Math.min(input.durationSeconds, Math.max(0, Math.round(((input.submittedAt ? Date.parse(input.submittedAt) : Date.now()) - Date.parse(input.startedAt)) / 1000)))
    const questionResults = input.questions.map((question) => {
      const answer = input.answers[question.questionKey] ?? []
      const answered = answer.some((value) => value.trim())
      return {
        ...toPerformanceAttempt(question, answered && isSimulationAnswerCorrect(question, answer)),
        question_key: question.questionKey,
        question_id: question.questionId,
        question_type: question.questionType,
        source_id: question.sourceId,
        subject_label: question.subjectLabel ?? '',
        module_label: question.moduleLabel ?? '',
        content_path: question.contentPath,
        question_data: toPerformanceAttempt(question, false).questionData,
        answered,
      }
    })

    const { data, error: saveError } = await supabase.rpc('submit_exam_attempt', {
      p_id: input.id,
      p_exam_mode: input.mode,
      p_exam_label: input.label,
      p_started_at: input.startedAt,
      p_duration_seconds: input.durationSeconds,
      p_used_seconds: usedSeconds,
      p_total_questions: input.questions.length,
      p_correct_answers: correct,
      p_incorrect_answers: incorrect,
      p_unanswered_questions: unanswered,
      p_percentage: percentage,
      p_passed: correct / input.questions.length >= 0.5,
      p_result_data: { questions: input.questions, answers: input.answers },
      p_question_results: questionResults,
    }).single()
    if (currentUser.current !== userId) return null

    if (saveError) {
      setError(saveError.message)
      return null
    }
    const saved = data as ExamAttempt
    setError(null)
    setAttempts((current) => [saved, ...current.filter((attempt) => attempt.id !== saved.id)])
    await refreshQuestionPerformance()
    return saved
  }, [refreshQuestionPerformance])

  const value = useMemo(() => ({ attempts, loading, error, submitExam }), [attempts, error, loading, submitExam])
  return <ExamAttemptsContext.Provider value={value}>{children}</ExamAttemptsContext.Provider>
}

export function useExamAttempts() {
  const context = useContext(ExamAttemptsContext)
  if (!context) throw new Error('useExamAttempts must be used within an ExamAttemptsProvider')
  return context
}
