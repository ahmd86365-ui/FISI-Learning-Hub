import { useLocation } from 'react-router-dom'
import { getReturnDestination } from '../../lib/navigation'
import { SmartBackButton } from '../navigation/SmartBackButton'
import { HomeShortcut } from '../navigation/HomeShortcut'
import { ShareLinkButton } from '../ShareLinkButton'

export function LabReturnLink() {
  const location = useLocation()
  const source = getReturnDestination(location.search, location.state)
  return <div className="mb-4 flex flex-wrap items-center gap-1"><SmartBackButton label={source === '/labs' ? 'Zurück zu Labs' : source ? 'Zurück zur Lektion' : 'Zurück zu Labs'} fallback="/labs" className="-ml-3" /><HomeShortcut /><ShareLinkButton /></div>
}
