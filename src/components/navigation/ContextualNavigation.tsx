import { useLocation } from 'react-router-dom'
import { SmartBackButton } from './SmartBackButton'
import { BackToTop } from './BackToTop'

const exact: Record<string, { label?: string; fallback: string; top?: boolean }> = {
  '/suche': { fallback: '/', top: true },
  '/glossary': { fallback: '/', top: true },
  '/saved': { fallback: '/', top: true },
  '/errors': { fallback: '/', top: true },
  '/stats': { fallback: '/' },
  '/profile': { fallback: '/' },
  '/review': { fallback: '/', top: true },
  '/exams': { label: 'Zurück', fallback: '/', top: true },
  '/exams/mixed': { label: 'Zurück zu Prüfungen', fallback: '/exams', top: true },
}

export function ContextualNavigation() {
  const { pathname } = useLocation()
  const config = exact[pathname]
    ?? (pathname.match(/^\/pruefungsvorbereitung\/it-ap\/[^/]+$/) ? { label: 'Zurück zu Prüfungen', fallback: '/pruefungsvorbereitung/it-ap', top: true } : undefined)
  if (!config) return null
  return <><div className="mx-auto w-full max-w-content px-4 pt-3 sm:px-6 lg:px-8"><SmartBackButton label={config.label} fallback={config.fallback} className="-ml-3" /></div>{config.top && <BackToTop />}</>
}
