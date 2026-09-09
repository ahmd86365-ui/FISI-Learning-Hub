import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { LogoMark } from '../Logo'
import { useAuth } from '../../contexts/AuthContext'

export function ProtectedRoute() {
  const { session, loading } = useAuth()
  const location = useLocation()

  if (loading) return <SessionLoading />
  if (!session) return <Navigate to="/auth" replace state={{ from: location }} />
  return <Outlet />
}

export function GuestOnlyRoute() {
  const { session, loading } = useAuth()

  if (loading) return <SessionLoading />
  if (session) return <Navigate to="/" replace />
  return <Outlet />
}

function SessionLoading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-ink-950 px-4">
      <div className="text-center" role="status" aria-live="polite">
        <LogoMark className="mx-auto h-11 w-11 shadow-glow" />
        <p className="mt-4 text-sm text-ink-400">Sitzung wird geprüft …</p>
      </div>
    </main>
  )
}
