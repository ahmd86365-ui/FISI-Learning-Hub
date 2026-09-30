import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogIn, UserPlus, UserCircle } from 'lucide-react'
import { Button } from '../components/Button'
import { LogoMark } from '../components/Logo'
import { supabase } from '../lib/supabase'
import { useAuth } from '../contexts/AuthContext'

const getAuthRedirectUrl = () => new URL('/auth', window.location.origin).toString()

type AuthMode = 'login' | 'register'
type Feedback = { type: 'success' | 'error'; message: string }

const fieldClassName =
  'mt-1.5 h-10 w-full rounded-md border border-ink-300 bg-white px-3 text-sm text-ink-950 outline-none transition-colors placeholder:text-ink-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 dark:border-ink-700 dark:bg-ink-950 dark:text-white'

export default function Auth() {
  const navigate = useNavigate()
  const { enterGuestMode } = useAuth()
  const [mode, setMode] = useState<AuthMode>('login')
  const [submitting, setSubmitting] = useState(false)
  const [feedback, setFeedback] = useState<Feedback | null>(null)

  const changeMode = (nextMode: AuthMode) => {
    setMode(nextMode)
    setFeedback(null)
  }

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitting(true)
    setFeedback(null)

    const formData = new FormData(event.currentTarget)
    const email = String(formData.get('email') ?? '').trim()
    const password = String(formData.get('password') ?? '')
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      setFeedback(error
        ? { type: 'error', message: error.message }
        : { type: 'success', message: 'Du bist jetzt angemeldet.' })
    } catch {
      setFeedback({ type: 'error', message: 'Die Anmeldung ist fehlgeschlagen. Bitte prüfe deine Verbindung.' })
    } finally {
      setSubmitting(false)
    }
  }

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFeedback(null)

    const form = event.currentTarget
    const formData = new FormData(form)
    const firstName = String(formData.get('firstName') ?? '').trim()
    const lastName = String(formData.get('lastName') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const password = String(formData.get('password') ?? '')
    const passwordConfirmation = String(formData.get('passwordConfirmation') ?? '')

    if (password !== passwordConfirmation) {
      setFeedback({ type: 'error', message: 'Die Passwörter stimmen nicht überein.' })
      return
    }

    setSubmitting(true)
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { first_name: firstName, last_name: lastName },
          emailRedirectTo: getAuthRedirectUrl(),
        },
      })
      if (error) {
        setFeedback({ type: 'error', message: error.message })
      } else if (data.session) {
        setFeedback({ type: 'success', message: 'Dein Konto wurde erstellt und du bist angemeldet.' })
        form.reset()
      } else {
        setFeedback({
          type: 'success',
          message: 'Fast geschafft: Bitte bestätige deine E-Mail-Adresse über den Link in deinem Postfach.',
        })
        form.reset()
      }
    } catch {
      setFeedback({ type: 'error', message: 'Die Registrierung ist fehlgeschlagen. Bitte prüfe deine Verbindung.' })
    } finally {
      setSubmitting(false)
    }
  }

  const handleGoogleLogin = async () => {
    setSubmitting(true)
    setFeedback(null)
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: getAuthRedirectUrl() },
      })
      if (error) setFeedback({ type: 'error', message: error.message })
    } catch {
      setFeedback({ type: 'error', message: 'Google Login konnte nicht gestartet werden. Bitte prüfe deine Verbindung.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-ink-100 px-4 py-10 dark:bg-ink-950 sm:px-6">
      <section className="w-full max-w-md" aria-labelledby="auth-title">
        <div className="mb-7 flex flex-col items-center text-center">
          <LogoMark className="h-11 w-11" />
          <h1 id="auth-title" className="mt-3 font-mono text-lg font-semibold tracking-tight text-ink-950 dark:text-white">
            FISI<span className="text-brand-600 dark:text-brand-400">.</span> Learning Hub
          </h1>
          <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">Deine Lernplattform für Systemintegration</p>
        </div>

        <div className="rounded-xl border border-ink-200 bg-white p-5 shadow-card dark:border-ink-800 dark:bg-ink-900 dark:shadow-card-dark sm:p-7">
          <>
              <div className="grid grid-cols-2 rounded-lg bg-ink-100 p-1 dark:bg-ink-950" role="tablist" aria-label="Zugangsart">
                <button
                  type="button"
                  role="tab"
                  aria-selected={mode === 'login'}
                  onClick={() => changeMode('login')}
                  className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                    mode === 'login'
                      ? 'bg-white text-brand-700 shadow-sm dark:bg-ink-800 dark:text-white'
                      : 'text-ink-500 hover:text-ink-900 dark:text-ink-400 dark:hover:text-white'
                  }`}
                >
                  Anmelden
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={mode === 'register'}
                  onClick={() => changeMode('register')}
                  className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                    mode === 'register'
                      ? 'bg-white text-brand-700 shadow-sm dark:bg-ink-800 dark:text-white'
                      : 'text-ink-500 hover:text-ink-900 dark:text-ink-400 dark:hover:text-white'
                  }`}
                >
                  Registrieren
                </button>
              </div>

              {mode === 'login' ? (
                <form className="mt-7 space-y-5" onSubmit={handleLogin}>
                  <Field label="E-Mail-Adresse" name="email" type="email" autoComplete="email" />
                  <Field label="Passwort" name="password" type="password" autoComplete="current-password" minLength={6} />
                  <Button type="submit" className="w-full" icon={<LogIn />} disabled={submitting}>
                    {submitting ? 'Anmeldung läuft …' : 'Mit E-Mail anmelden'}
                  </Button>
                </form>
              ) : (
                <form className="mt-7 space-y-5" onSubmit={handleRegister}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Vorname" name="firstName" autoComplete="given-name" />
                    <Field label="Nachname" name="lastName" autoComplete="family-name" />
                  </div>
                  <Field label="E-Mail-Adresse" name="email" type="email" autoComplete="email" />
                  <Field label="Passwort" name="password" type="password" autoComplete="new-password" minLength={6} />
                  <Field
                    label="Passwort wiederholen"
                    name="passwordConfirmation"
                    type="password"
                    autoComplete="new-password"
                    minLength={6}
                  />
                  <Button type="submit" className="w-full" icon={<UserPlus />} disabled={submitting}>
                    {submitting ? 'Konto wird erstellt …' : 'Konto erstellen'}
                  </Button>
                </form>
              )}

              <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-wider text-ink-400 dark:text-ink-500">
                <span className="h-px flex-1 bg-ink-200 dark:bg-ink-700" />
                oder
                <span className="h-px flex-1 bg-ink-200 dark:bg-ink-700" />
              </div>

              <Button
                type="button"
                variant="secondary"
                className="w-full"
                disabled={submitting}
                onClick={handleGoogleLogin}
              >
                <GoogleMark />
                Mit Google anmelden
              </Button>

              <div className="mt-4">
                <Button
                  type="button"
                  variant="ghost"
                  className="w-full text-ink-600 hover:text-ink-950 dark:text-ink-400 dark:hover:text-white"
                  disabled={submitting}
                  onClick={() => {
                    enterGuestMode()
                    navigate('/')
                  }}
                  icon={<UserCircle />}
                >
                  Weiter als Gast
                </Button>
              </div>
          </>

          {feedback && (
            <p
              className={`mt-6 rounded-lg p-3 text-sm leading-relaxed ${
                feedback.type === 'success'
                  ? 'border border-teal-200 bg-teal-50 text-teal-700 dark:border-teal-500/20 dark:bg-teal-500/10 dark:text-teal-300'
                  : 'border border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-500/20 dark:bg-rose-500/10 dark:text-rose-300'
              }`}
              role={feedback.type === 'error' ? 'alert' : 'status'}
            >
              {feedback.message}
            </p>
          )}
        </div>
      </section>
    </main>
  )
}

interface FieldProps {
  label: string
  name: string
  type?: 'text' | 'email' | 'password'
  autoComplete: string
  minLength?: number
}

function Field({ label, name, type = 'text', autoComplete, minLength }: FieldProps) {
  return (
    <label className="block text-sm font-medium text-ink-700 dark:text-ink-200">
      {label}
      <input
        className={fieldClassName}
        name={name}
        type={type}
        autoComplete={autoComplete}
        minLength={minLength}
        required
      />
    </label>
  )
}

function GoogleMark() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.4Z" />
      <path fill="#34A853" d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1a5.8 5.8 0 0 1-5.5-4H3.2v2.6A10 10 0 0 0 12 22Z" />
      <path fill="#FBBC05" d="M6.5 14.1a6 6 0 0 1 0-4.2V7.3H3.2a10 10 0 0 0 0 9.4l3.3-2.6Z" />
      <path fill="#EA4335" d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.9-2.8A9.7 9.7 0 0 0 3.2 7.3l3.3 2.6A5.8 5.8 0 0 1 12 5.9Z" />
    </svg>
  )
}
