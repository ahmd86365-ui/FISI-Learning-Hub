import { useEffect, useState, type MouseEvent } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { BarChart3, BookmarkCheck, BookOpen, ChevronRight, FlaskConical, GraduationCap, Home, LayoutGrid } from 'lucide-react'
import { getModulesBySubject } from '../data/modules'
import { subjects } from '../data/subjects'
import type { SubjectSlug } from '../types/content'
import { SIDEBAR_MODULE_KEY, validStoredModule } from '../lib/sidebarState'

const linkBase = 'flex min-h-9 items-center gap-2.5 rounded-lg px-3 py-2 text-[0.82rem] font-medium transition-colors'

function currentSubject(pathname: string): SubjectSlug | null {
  if (pathname.startsWith('/it-english')) return 'english'
  if (pathname.startsWith('/wirtschaft-gesellschaft')) return 'wirtschaft'
  if (pathname.startsWith('/pruefungsvorbereitung')) return 'pruefung'
  if (pathname.startsWith('/it')) return 'it'
  return null
}

export function LearningSidebar() {
  const { pathname } = useLocation()
  const subjectSlug = currentSubject(pathname)
  const subject = subjects.find((item) => item.slug === subjectSlug)
  const modules = subjectSlug ? getModulesBySubject(subjectSlug) : []
  const routeModuleSlug = modules.find((module) => {
    const modulePath = `${subject?.path}/${module.slug}`
    return pathname === modulePath || pathname.startsWith(`${modulePath}/`)
  })?.slug ?? null
  const [expandedModule, setExpandedModule] = useState<string | null>(() => routeModuleSlug ?? validStoredModule(sessionStorage.getItem(SIDEBAR_MODULE_KEY), modules.map((module) => module.slug)))

  useEffect(() => {
    const stored = validStoredModule(sessionStorage.getItem(SIDEBAR_MODULE_KEY), modules.map((module) => module.slug))
    setExpandedModule(routeModuleSlug ?? stored)
  }, [routeModuleSlug, subjectSlug])

  const rememberExpanded = (moduleSlug: string | null) => {
    setExpandedModule(moduleSlug)
    if (moduleSlug) sessionStorage.setItem(SIDEBAR_MODULE_KEY, moduleSlug)
    else sessionStorage.removeItem(SIDEBAR_MODULE_KEY)
  }

  function toggleModule(event: MouseEvent<HTMLAnchorElement>, moduleSlug: string, expanded: boolean, routeInModule: boolean) {
    if (expanded) {
      event.preventDefault()
      rememberExpanded(null)
      return
    }
    if (routeInModule) event.preventDefault()
    rememberExpanded(moduleSlug)
  }

  return (
    <aside className="hidden w-60 shrink-0 border-r border-ink-200 bg-white dark:border-ink-800 dark:bg-ink-900 lg:block" aria-label="Lernnavigation">
      <div className="sticky top-14 flex h-[calc(100vh-3.5rem)] flex-col overflow-y-auto px-3 py-4">
        <div className="mb-3 flex items-center gap-2 px-2 text-xs font-bold uppercase tracking-[0.12em] text-ink-500 dark:text-ink-400">
          <BookOpen className="h-4 w-4" aria-hidden="true" /> {subject ? `${subject.name} lernen` : 'Lernbereiche'}
        </div>

        <nav className="space-y-1">
          <NavLink to="/" end className={({ isActive }) => `${linkBase} ${isActive ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300' : 'text-ink-600 hover:bg-ink-100 hover:text-ink-900 dark:text-ink-300 dark:hover:bg-ink-800 dark:hover:text-white'}`}>
            <Home className="h-4 w-4" aria-hidden="true" /> Übersicht
          </NavLink>

          {!subject && subjects.map((item) => {
            const Icon = item.icon
            return <NavLink key={item.slug} to={item.path} className={({ isActive }) => `${linkBase} ${isActive ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300' : 'text-ink-600 hover:bg-ink-100 hover:text-ink-900 dark:text-ink-300 dark:hover:bg-ink-800 dark:hover:text-white'}`}>
              <Icon className="h-4 w-4" aria-hidden="true" /><span className="min-w-0 flex-1 truncate">{item.name}</span>
            </NavLink>
          })}

          {subject && <NavLink to={subject.path} end className={({ isActive }) => `${linkBase} ${isActive ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300' : 'text-ink-600 hover:bg-ink-100 hover:text-ink-900 dark:text-ink-300 dark:hover:bg-ink-800 dark:hover:text-white'}`}>
            <LayoutGrid className="h-4 w-4" aria-hidden="true" /> Bereichsübersicht
          </NavLink>}

          {modules.map((module) => {
            const Icon = module.icon ?? BookOpen
            const modulePath = `${subject?.path}/${module.slug}`
            const expanded = expandedModule === module.slug
            const routeInModule = pathname === modulePath || pathname.startsWith(`${modulePath}/`)
            return <div key={module.slug}>
              <NavLink to={modulePath} aria-expanded={expanded} onClick={(event) => toggleModule(event, module.slug, expanded, routeInModule)} className={({ isActive }) => `${linkBase} ${isActive ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300' : expanded ? 'text-brand-700 dark:text-brand-300' : 'text-ink-600 hover:bg-ink-100 hover:text-ink-900 dark:text-ink-300 dark:hover:bg-ink-800 dark:hover:text-white'}`}>
                <Icon className="h-4 w-4" aria-hidden="true" /><span className="min-w-0 flex-1 truncate">{module.title}</span><ChevronRight className={`h-3 w-3 text-ink-400 transition-transform dark:text-ink-500 ${expanded ? 'rotate-90' : ''}`} aria-hidden="true" />
              </NavLink>
              {expanded && <div className="ml-5 mt-1 space-y-0.5 border-l border-ink-200 pl-2 dark:border-ink-700">
                {module.topics.map((topic) => <NavLink key={topic.slug} to={`${modulePath}/${topic.slug}`} className={({ isActive }) => `block rounded-md px-2.5 py-1.5 text-[0.76rem] leading-4 transition-colors ${isActive ? 'bg-brand-50 font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-300' : 'text-ink-500 hover:bg-ink-100 hover:text-ink-800 dark:text-ink-400 dark:hover:bg-ink-800 dark:hover:text-ink-100'}`}>{topic.title}</NavLink>)}
                {module.slug === 'linux' && <NavLink to="/it/linux/lab" className={({ isActive }) => `flex items-center gap-2 rounded-md px-2.5 py-2 text-[0.76rem] font-semibold transition-colors ${isActive ? 'bg-brand-100 text-brand-700 dark:bg-brand-500/15 dark:text-brand-300' : 'text-brand-600 hover:bg-brand-50 dark:text-brand-400 dark:hover:bg-brand-500/10'}`}><FlaskConical className="h-3.5 w-3.5" aria-hidden="true" /> Linux Lab</NavLink>}
              </div>}
            </div>
          })}
        </nav>

        <div className="mt-auto space-y-1 border-t border-ink-200 pt-3 dark:border-ink-800">
          <NavLink to="/progress" className={({ isActive }) => `${linkBase} ${isActive ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300' : 'text-ink-600 hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-ink-800'}`}><BarChart3 className="h-4 w-4" aria-hidden="true" /> Fortschritt</NavLink>
          <NavLink to="/saved" className={({ isActive }) => `${linkBase} ${isActive ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300' : 'text-ink-600 hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-ink-800'}`}><BookmarkCheck className="h-4 w-4" aria-hidden="true" /> Gespeichert</NavLink>
          <NavLink to="/practice/labs" className={({ isActive }) => `${linkBase} ${isActive ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300' : 'text-ink-600 hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-ink-800'}`}><GraduationCap className="h-4 w-4" aria-hidden="true" /> Praxis-Labs</NavLink>
        </div>
      </div>
    </aside>
  )
}
