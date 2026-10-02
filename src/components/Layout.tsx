import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { LearningSidebar } from './LearningSidebar'
import { NavigationManager } from './navigation/NavigationManager'
import { ContextualNavigation } from './navigation/ContextualNavigation'

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-ink-100 dark:bg-ink-950">
      <NavigationManager />
      <Navbar />
      <div className="flex min-w-0 flex-1">
        <LearningSidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <main id="main-content" className="min-w-0 flex-1">
            <ContextualNavigation />
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
