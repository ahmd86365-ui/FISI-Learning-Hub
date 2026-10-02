import { useLocation } from 'react-router-dom'
import { SmartBackButton } from './SmartBackButton'
import { BackToTop } from './BackToTop'
import { HomeShortcut } from './HomeShortcut'
import { ShareLinkButton } from '../ShareLinkButton'

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
  '/labs': { fallback: '/', top: true },
}

export function ContextualNavigation() {
  const { pathname } = useLocation()
  const config = exact[pathname]
    ?? (pathname.match(/^\/pruefungsvorbereitung\/it-ap\/[^/]+$/) ? { label: 'Zurück zu Prüfungen', fallback: '/pruefungsvorbereitung/it-ap', top: true } : undefined)
  if (!config) return null
  return <><div className="mx-auto flex w-full max-w-content flex-wrap items-center gap-1 px-4 pt-3 sm:px-6 lg:px-8"><SmartBackButton label={config.label} fallback={config.fallback} className="-ml-3" /><HomeShortcut />{['/labs', '/glossary'].includes(pathname) && <ShareLinkButton />}</div>{config.top && <BackToTop />}</>
}
