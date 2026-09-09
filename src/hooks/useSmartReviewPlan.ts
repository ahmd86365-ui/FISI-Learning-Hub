import { useExamAttempts } from '../contexts/ExamAttemptsContext'
import { useLearningProgress } from '../contexts/LearningProgressContext'
import { useQuestionPerformance } from '../contexts/QuestionPerformanceContext'
import { useSavedItems } from '../contexts/SavedItemsContext'
import { useStudyActivity } from '../contexts/StudyActivityContext'
import { buildSmartReviewPlan } from '../lib/smartReview'

export function useSmartReviewPlan() {
  const { performance, loading: questionLoading, error: questionError } = useQuestionPerformance()
  const { items, loading: savedLoading, error: savedError } = useSavedItems()
  const { progress, loading: progressLoading, error: progressError } = useLearningProgress()
  const { activities, loading: activityLoading, error: activityError } = useStudyActivity()
  const { attempts, loading: examLoading, error: examError } = useExamAttempts()
  return {
    plan: buildSmartReviewPlan({ performance, savedItems: items, progress, activities, examAttempts: attempts }),
    loading: questionLoading || savedLoading || progressLoading || activityLoading || examLoading,
    error: questionError || savedError || progressError || activityError || examError,
  }
}
