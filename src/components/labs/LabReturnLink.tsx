import { useLocation } from 'react-router-dom'
import { getReturnDestination } from '../../lib/navigation'
import { SmartBackButton } from '../navigation/SmartBackButton'

export function LabReturnLink() {
  const location = useLocation()
  const source = getReturnDestination(location.search, location.state)
  return <SmartBackButton label={source === '/labs' ? 'Zurück zu Labs' : source ? 'Zurück zur Lektion' : 'Zurück zu Labs'} fallback="/labs" className="mb-4 -ml-3" />
}
