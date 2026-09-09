import type { StudyActivity } from '../contexts/StudyActivityContext'

const dayMs = 86_400_000
const dateKey = (date: Date) => date.toISOString().slice(0, 10)
const dateValue = (key: string) => Date.parse(`${key}T00:00:00Z`)

export interface StudyDay {
  date: string
  label: string
  active: boolean
  completions: number
}

export interface StudyStats {
  currentStreak: number
  longestStreak: number
  studyDaysLast7: number
  lessonsCompletedThisWeek: number
  last7Days: StudyDay[]
}

export function calculateStudyStats(activities: StudyActivity[], now = new Date()): StudyStats {
  const today = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()))
  const activityDates = [...new Set(activities.map((activity) => activity.activity_date))].sort()
  const activityDateSet = new Set(activityDates)

  let longestStreak = 0
  let run = 0
  let previous = Number.NaN
  for (const key of activityDates) {
    const value = dateValue(key)
    run = value - previous === dayMs ? run + 1 : 1
    longestStreak = Math.max(longestStreak, run)
    previous = value
  }

  const mostRecent = activityDates[activityDates.length - 1]
  const daysSinceMostRecent = mostRecent ? Math.round((today.getTime() - dateValue(mostRecent)) / dayMs) : Number.POSITIVE_INFINITY
  let currentStreak = 0
  if (daysSinceMostRecent === 0 || daysSinceMostRecent === 1) {
    let cursor = dateValue(mostRecent!)
    while (activityDateSet.has(dateKey(new Date(cursor)))) {
      currentStreak += 1
      cursor -= dayMs
    }
  }

  const last7Days = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(today.getTime() - (6 - index) * dayMs)
    const key = dateKey(date)
    const completions = new Set(
      activities.filter((activity) => activity.activity_date === key).map((activity) => activity.lesson_id),
    ).size
    return {
      date: key,
      label: new Intl.DateTimeFormat('de-DE', { weekday: 'short', timeZone: 'UTC' }).format(date).replace('.', ''),
      active: completions > 0,
      completions,
    }
  })

  const mondayOffset = (today.getUTCDay() + 6) % 7
  const weekStart = dateKey(new Date(today.getTime() - mondayOffset * dayMs))
  const lessonsCompletedThisWeek = new Set(
    activities.filter((activity) => activity.activity_date >= weekStart).map((activity) => activity.lesson_id),
  ).size

  return {
    currentStreak,
    longestStreak,
    studyDaysLast7: last7Days.filter((day) => day.active).length,
    lessonsCompletedThisWeek,
    last7Days,
  }
}
