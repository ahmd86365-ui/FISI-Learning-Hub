import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AuthProvider } from './contexts/AuthContext'
import { SavedItemsProvider } from './contexts/SavedItemsContext'
import { LearningProgressProvider } from './contexts/LearningProgressContext'
import { StudyActivityProvider } from './contexts/StudyActivityContext'
import { QuestionPerformanceProvider } from './contexts/QuestionPerformanceContext'
import { GuestOnlyRoute, ProtectedRoute } from './components/auth/AuthGuards'
import { ExamAttemptsProvider } from './contexts/ExamAttemptsContext'

const Home = lazy(() => import('./pages/Home'))
const It = lazy(() => import('./pages/It'))
const Wirtschaft = lazy(() => import('./pages/Wirtschaft'))
const ItEnglish = lazy(() => import('./pages/ItEnglish'))
const Pruefungsvorbereitung = lazy(() => import('./pages/Pruefungsvorbereitung'))
const ApIhkOverview = lazy(() => import('./pages/apExam/ApIhkOverview'))
const ApExamDetail = lazy(() => import('./pages/apExam/ApExamDetail'))
const ApExamUebung = lazy(() => import('./pages/apExam/ApExamUebung'))
const ApExamSimulation = lazy(() => import('./pages/apExam/ApExamSimulation'))
const PruefungWirtschaftGesellschaft = lazy(() => import('./pages/wisoExam/PruefungWirtschaftGesellschaft'))
const WisoIhkOverview = lazy(() => import('./pages/wisoExam/WisoIhkOverview'))
const WisoIhkUebung = lazy(() => import('./pages/wisoExam/WisoIhkUebung'))
const WisoIhkSimulation = lazy(() => import('./pages/wisoExam/WisoIhkSimulation'))
const ModulePage = lazy(() => import('./pages/ModulePage'))
const LessonPage = lazy(() => import('./pages/LessonPage'))
const Search = lazy(() => import('./pages/Search'))
const NotFound = lazy(() => import('./pages/NotFound'))
const ItTechnicalPage = lazy(() => import('./pages/itTechnical/ItTechnicalPage'))
const Auth = lazy(() => import('./pages/Auth'))
const Profile = lazy(() => import('./pages/Profile'))
const SavedItems = lazy(() => import('./pages/SavedItems'))
const LearningProgress = lazy(() => import('./pages/LearningProgress'))
const LearningStatistics = lazy(() => import('./pages/LearningStatistics'))
const ErrorTraining = lazy(() => import('./pages/ErrorTraining'))
const Exams = lazy(() => import('./pages/Exams'))
const SmartReview = lazy(() => import('./pages/SmartReview'))

export default function App() {
  return (
    <AuthProvider>
      <SavedItemsProvider>
        <StudyActivityProvider>
          <QuestionPerformanceProvider>
            <ExamAttemptsProvider>
            <LearningProgressProvider>
            <Suspense fallback={<RouteLoading />}>
            <Routes>
              <Route element={<GuestOnlyRoute />}>
                <Route path="auth" element={<Auth />} />
              </Route>

              <Route element={<ProtectedRoute />}>
                <Route element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="saved" element={<SavedItems />} />
                  <Route path="progress" element={<LearningProgress />} />
                  <Route path="stats" element={<LearningStatistics />} />
                  <Route path="errors" element={<ErrorTraining />} />
                  <Route path="exams" element={<Exams />} />
                  <Route path="review" element={<SmartReview />} />

        <Route path="it" element={<It />} />
        <Route path="it/it-technical" element={<ItTechnicalPage />} />
        <Route path="it/it-technical/:chapterSlug" element={<ItTechnicalPage />} />
        <Route path="it/it-technical/:chapterSlug/:lessonSlug" element={<ItTechnicalPage />} />
        <Route path="it/:moduleSlug" element={<ModulePage subjectSlug="it" />} />
        <Route path="it/:moduleSlug/:topicSlug" element={<LessonPage subjectSlug="it" />} />

        <Route path="wirtschaft-gesellschaft" element={<Wirtschaft />} />
        <Route path="wirtschaft-gesellschaft/:moduleSlug" element={<ModulePage subjectSlug="wirtschaft" />} />
        <Route
          path="wirtschaft-gesellschaft/:moduleSlug/:topicSlug"
          element={<LessonPage subjectSlug="wirtschaft" />}
        />

        <Route path="it-english" element={<ItEnglish />} />
        <Route path="it-english/:moduleSlug" element={<ModulePage subjectSlug="english" />} />
        <Route path="it-english/:moduleSlug/:topicSlug" element={<LessonPage subjectSlug="english" />} />

        <Route path="pruefungsvorbereitung" element={<Pruefungsvorbereitung />} />
        <Route path="pruefungsvorbereitung/it-ap" element={<ApIhkOverview />} />
        <Route path="pruefungsvorbereitung/it-ap/:examId" element={<ApExamDetail />} />
        <Route path="pruefungsvorbereitung/it-ap/:examId/uebung" element={<ApExamUebung />} />
        <Route path="pruefungsvorbereitung/it-ap/:examId/simulation" element={<ApExamSimulation />} />
        <Route path="pruefungsvorbereitung/wirtschaft-gesellschaft" element={<PruefungWirtschaftGesellschaft />} />
        <Route path="pruefungsvorbereitung/wirtschaft-gesellschaft/wiso-ihk" element={<WisoIhkOverview />} />
        <Route path="pruefungsvorbereitung/wirtschaft-gesellschaft/wiso-ihk/uebung" element={<WisoIhkUebung />} />
        <Route
          path="pruefungsvorbereitung/wirtschaft-gesellschaft/wiso-ihk/simulation"
          element={<WisoIhkSimulation />}
        />

                  <Route path="suche" element={<Search />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Route>
            </Routes>
            </Suspense>
            </LearningProgressProvider>
            </ExamAttemptsProvider>
          </QuestionPerformanceProvider>
        </StudyActivityProvider>
      </SavedItemsProvider>
    </AuthProvider>
  )
}

function RouteLoading() {
  return <div className="flex min-h-[50vh] items-center justify-center px-4" role="status" aria-live="polite">Seite wird geladen …</div>
}
