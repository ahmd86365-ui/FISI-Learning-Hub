import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AuthProvider } from './contexts/AuthContext'
import { SavedItemsProvider } from './contexts/SavedItemsContext'
import { LearningProgressProvider } from './contexts/LearningProgressContext'
import { GuestOnlyRoute, ProtectedRoute } from './components/auth/AuthGuards'
import Home from './pages/Home'
import It from './pages/It'
import Wirtschaft from './pages/Wirtschaft'
import ItEnglish from './pages/ItEnglish'
import Pruefungsvorbereitung from './pages/Pruefungsvorbereitung'
import ApIhkOverview from './pages/apExam/ApIhkOverview'
import ApExamDetail from './pages/apExam/ApExamDetail'
import ApExamUebung from './pages/apExam/ApExamUebung'
import ApExamSimulation from './pages/apExam/ApExamSimulation'
import PruefungWirtschaftGesellschaft from './pages/wisoExam/PruefungWirtschaftGesellschaft'
import WisoIhkOverview from './pages/wisoExam/WisoIhkOverview'
import WisoIhkUebung from './pages/wisoExam/WisoIhkUebung'
import WisoIhkSimulation from './pages/wisoExam/WisoIhkSimulation'
import ModulePage from './pages/ModulePage'
import LessonPage from './pages/LessonPage'
import Search from './pages/Search'
import NotFound from './pages/NotFound'
import ItTechnicalPage from './pages/itTechnical/ItTechnicalPage'
import Auth from './pages/Auth'
import Profile from './pages/Profile'
import SavedItems from './pages/SavedItems'
import LearningProgress from './pages/LearningProgress'

export default function App() {
  return (
    <AuthProvider>
      <SavedItemsProvider>
        <LearningProgressProvider>
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
        </LearningProgressProvider>
      </SavedItemsProvider>
    </AuthProvider>
  )
}
