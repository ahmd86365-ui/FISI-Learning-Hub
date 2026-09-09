import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from './AuthContext'

export interface StudyActivity {
  id: number
  user_id: string
  activity_type: 'lesson_completed'
  lesson_id: string
  activity_date: string
  occurred_at: string
}

interface StudyActivityContextValue {
  activities: StudyActivity[]
  loading: boolean
  error: string | null
  recordLessonCompleted: (lessonId: string) => Promise<void>
}

const StudyActivityContext = createContext<StudyActivityContextValue | undefined>(undefined)

const utcDateKey = () => new Date().toISOString().slice(0, 10)

export function StudyActivityProvider({ children }: { children: ReactNode }) {
  const { session } = useAuth()
  const [activities, setActivities] = useState<StudyActivity[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let active = true
    if (!session?.user) {
      setActivities([])
      setLoading(false)
      return
    }

    setLoading(true)
    setError(null)
    void supabase
      .from('study_activity')
      .select('id,user_id,activity_type,lesson_id,activity_date,occurred_at')
      .order('occurred_at', { ascending: false })
      .then(({ data, error: loadError }) => {
        if (!active) return
        if (loadError) {
          setActivities([])
          setError(loadError.message)
        } else {
          setActivities((data ?? []) as StudyActivity[])
        }
        setLoading(false)
      })

    return () => {
      active = false
    }
  }, [session?.user.id])

  const recordLessonCompleted = useCallback(
    async (lessonId: string) => {
      const user = session?.user
      if (!user) return

      const activityDate = utcDateKey()
      if (activities.some((activity) => activity.lesson_id === lessonId && activity.activity_date === activityDate)) return

      const optimistic: StudyActivity = {
        id: -Date.now(),
        user_id: user.id,
        activity_type: 'lesson_completed',
        lesson_id: lessonId,
        activity_date: activityDate,
        occurred_at: new Date().toISOString(),
      }
      setError(null)
      setActivities((current) => [optimistic, ...current])

      const { data, error: saveError } = await supabase
        .from('study_activity')
        .insert({
          user_id: user.id,
          activity_type: 'lesson_completed',
          lesson_id: lessonId,
          activity_date: activityDate,
        })
        .select('id,user_id,activity_type,lesson_id,activity_date,occurred_at')
        .single()

      if (saveError) {
        setActivities((current) => current.filter((activity) => activity.id !== optimistic.id))
        if (saveError.code !== '23505') setError(saveError.message)
        return
      }

      setActivities((current) => [data as StudyActivity, ...current.filter((activity) => activity.id !== optimistic.id)])
    },
    [activities, session?.user],
  )

  const value = useMemo(
    () => ({ activities, loading, error, recordLessonCompleted }),
    [activities, error, loading, recordLessonCompleted],
  )

  return <StudyActivityContext.Provider value={value}>{children}</StudyActivityContext.Provider>
}

export function useStudyActivity() {
  const context = useContext(StudyActivityContext)
  if (!context) throw new Error('useStudyActivity must be used within a StudyActivityProvider')
  return context
}
