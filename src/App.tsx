import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import Home from './pages/Home'
import It from './pages/It'
import Wirtschaft from './pages/Wirtschaft'
import ItEnglish from './pages/ItEnglish'
import Pruefungsvorbereitung from './pages/Pruefungsvorbereitung'
import ModulePage from './pages/ModulePage'
import LessonPage from './pages/LessonPage'
import Search from './pages/Search'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="it" element={<It />} />
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

        <Route path="suche" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
