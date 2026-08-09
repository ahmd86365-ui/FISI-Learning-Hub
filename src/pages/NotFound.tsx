import { Compass } from 'lucide-react'
import { EmptyState } from '../components/EmptyState'
import { ButtonLink } from '../components/Button'

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-content items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
      <EmptyState
        icon={Compass}
        title="Seite nicht gefunden"
        description="Diese Seite existiert nicht oder wurde verschoben."
        className="max-w-md"
      >
        <ButtonLink to="/" size="sm">
          Zur Startseite
        </ButtonLink>
      </EmptyState>
    </div>
  )
}
