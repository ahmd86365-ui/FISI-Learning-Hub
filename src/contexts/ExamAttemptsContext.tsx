import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { supabase } from '../lib/supabase'
import type { ExamMode, ExamResultData, SimulationQuestion } from '../lib/examSimulationCore'
import { examScore, isSimulationAnswerCorrect, toPerformanceAttempt } from '../lib/examSimulationCore'
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
  selectedSubjects?: string[]
}

interface ExamAttemptsContextValue {
  attempts: ExamAttempt[]
  loading: boolean
  error: string | null
  submitExam: (input: SubmitExamInput) => Promise<ExamAttempt | null>
}

const ExamAttemptsContext = createContext<ExamAttemptsContextValue | undefined>(undefined)

export function ExamAttemptsProvider({ children }: { children: ReactNode }) {
  const { session, isGuest } = useAuth()
  const { refresh: refreshQuestionPerformance, recordAttempts } = useQuestionPerformance()
  const [attempts, setAttempts] = useState<ExamAttempt[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const currentUser = useRef(session?.user.id)
  currentUser.current = session?.user.id

  useEffect(() => {
    let active = true
    if (session?.user) {
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
    } else if (isGuest) {
      const local = localStorage.getItem('fisi_guest_exams')
      if (local) {
        try {
          setAttempts(JSON.parse(local))
        } catch {
          setAttempts([])
        }
      } else {
        setAttempts([])
      }
      setLoading(false)
    } else {
      setAttempts([])
      setLoading(false)
    }
    return () => { active = false }
  }, [session?.user?.id, isGuest])

  const submitExam = useCallback(async (input: SubmitExamInput) => {
    const userId = currentUser.current
    if (!userId && !isGuest) return null

    const { correct, incorrect, unanswered, percentage, passed } = examScore(input.questions, input.answers)
    const submittedTime = input.submittedAt ? new Date(input.submittedAt) : new Date()
    const usedSeconds = Math.min(input.durationSeconds, Math.max(0, Math.round((submittedTime.getTime() - Date.parse(input.startedAt)) / 1000)))
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

    if (userId) {
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
        p_passed: passed,
        p_result_data: { questions: input.questions, answers: input.answers, selectedSubjects: input.selectedSubjects },
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
    } else if (isGuest) {
      const saved: ExamAttempt = {
        id: input.id,
        user_id: 'guest',
        exam_mode: input.mode,
        exam_label: input.label,
        started_at: input.startedAt,
        submitted_at: submittedTime.toISOString(),
        duration_seconds: input.durationSeconds,
        used_seconds: usedSeconds,
        total_questions: input.questions.length,
        correct_answers: correct,
        incorrect_answers: incorrect,
        unanswered_questions: unanswered,
        percentage: percentage,
        passed: passed,
        result_data: { questions: input.questions, answers: input.answers, selectedSubjects: input.selectedSubjects },
      }
      
      setAttempts((current) => {
        const newAttempts = [saved, ...current.filter((attempt) => attempt.id !== saved.id)]
        localStorage.setItem('fisi_guest_exams', JSON.stringify(newAttempts))
        return newAttempts
      })

      // Ensure question performance is recorded for guests manually
      const attemptsToRecord = questionResults.filter((q) => q.answered).map((q) => ({
        questionKey: q.question_key,
        questionId: q.question_id,
        questionType: q.question_type,
        sourceId: q.source_id,
        title: q.title ?? '',
        subjectLabel: q.subject_label ?? undefined,
        moduleLabel: q.module_label ?? undefined,
        contentPath: q.content_path,
        questionData: q.question_data,
        correct: q.correct ?? false,
      }))
      if (attemptsToRecord.length > 0) {
        await recordAttempts(attemptsToRecord)
      }

      return saved
    }
    return null
  }, [isGuest, refreshQuestionPerformance, recordAttempts])

  const value = useMemo(() => ({ attempts, loading, error, submitExam }), [attempts, error, loading, submitExam])
  return <ExamAttemptsContext.Provider value={value}>{children}</ExamAttemptsContext.Provider>
}

export function useExamAttempts() {
  const context = useContext(ExamAttemptsContext)
  if (!context) throw new Error('useExamAttempts must be used within an ExamAttemptsProvider')
  return context
}
