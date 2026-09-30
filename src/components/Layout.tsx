import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { LearningSidebar } from './LearningSidebar'

export function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col bg-ink-100 dark:bg-ink-950">
      <Navbar />
      <div className="flex min-w-0 flex-1">
        <LearningSidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <main id="main-content" className="min-w-0 flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
