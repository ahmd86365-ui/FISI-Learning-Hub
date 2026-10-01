import { useExamAttempts } from '../contexts/ExamAttemptsContext'
import { useLearningProgress } from '../contexts/LearningProgressContext'
import { useQuestionPerformance } from '../contexts/QuestionPerformanceContext'
import { useSavedItems } from '../contexts/SavedItemsContext'
import { useStudyActivity } from '../contexts/StudyActivityContext'
import { buildSmartReviewPlan } from '../lib/smartReview'
import { useFlashcardProgress } from '../contexts/FlashcardProgressContext'

export function useSmartReviewPlan() {
  const { performance, loading: questionLoading, error: questionError } = useQuestionPerformance()
  const { items, loading: savedLoading, error: savedError } = useSavedItems()
  const { progress, loading: progressLoading, error: progressError } = useLearningProgress()
  const { activities, loading: activityLoading, error: activityError } = useStudyActivity()
  const { attempts, loading: examLoading, error: examError } = useExamAttempts()
  const { cardProgress, loading: flashcardLoading, error: flashcardError } = useFlashcardProgress()
  return {
    plan: buildSmartReviewPlan({ performance, savedItems: items, progress, activities, examAttempts: attempts, cardProgress }),
    loading: questionLoading || savedLoading || progressLoading || activityLoading || examLoading || flashcardLoading,
    error: questionError || savedError || progressError || activityError || examError || flashcardError,
  }
}
