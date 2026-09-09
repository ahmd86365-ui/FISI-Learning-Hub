import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import { Camera, Check, LogOut, UserRound } from 'lucide-react'
import { Button } from '../components/Button'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'

const AVATAR_BUCKET = 'avatars'
const MAX_AVATAR_SIZE = 5 * 1024 * 1024
const ALLOWED_AVATAR_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp'])

type Feedback = { type: 'success' | 'error'; message: string }

export default function Profile() {
  const { session, signOut } = useAuth()
  const user = session!.user
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [firstName, setFirstName] = useState(String(user.user_metadata.first_name ?? ''))
  const [lastName, setLastName] = useState(String(user.user_metadata.last_name ?? ''))
  const [avatarFile, setAvatarFile] = useState<File | null>(null)
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)
  const [feedback, setFeedback] = useState<Feedback | null>(null)

  useEffect(
    () => () => {
      if (avatarUrl?.startsWith('blob:')) URL.revokeObjectURL(avatarUrl)
    },
    [avatarUrl],
  )

  useEffect(() => {
    const avatarPath = user.user_metadata.avatar_path
    if (typeof avatarPath === 'string' && avatarPath) {
      void supabase.storage
        .from(AVATAR_BUCKET)
        .createSignedUrl(avatarPath, 60 * 60)
        .then(({ data, error }) => {
          if (!error) setAvatarUrl(data.signedUrl)
        })
      return
    }

    const providerAvatar = user.user_metadata.avatar_url ?? user.user_metadata.picture
    if (typeof providerAvatar === 'string' && providerAvatar) setAvatarUrl(providerAvatar)
  }, [user.user_metadata])

  const handleAvatarChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    if (!ALLOWED_AVATAR_TYPES.has(file.type)) {
      setFeedback({ type: 'error', message: 'Bitte wähle ein JPG-, PNG- oder WebP-Bild aus.' })
      event.target.value = ''
      return
    }
    if (file.size > MAX_AVATAR_SIZE) {
      setFeedback({ type: 'error', message: 'Das Profilbild darf höchstens 5 MB groß sein.' })
      event.target.value = ''
      return
    }

    setAvatarFile(file)
    setAvatarUrl(URL.createObjectURL(file))
    setFeedback(null)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSaving(true)
    setFeedback(null)

    try {
      let avatarPath = user.user_metadata.avatar_path as string | undefined
      if (avatarFile) {
        avatarPath = `${user.id}/avatar`
        const { error: uploadError } = await supabase.storage.from(AVATAR_BUCKET).upload(avatarPath, avatarFile, {
          cacheControl: '3600',
          contentType: avatarFile.type,
          upsert: true,
        })
        if (uploadError) throw uploadError
      }

      const { error } = await supabase.auth.updateUser({
        data: {
          ...user.user_metadata,
          first_name: firstName.trim(),
          last_name: lastName.trim(),
          ...(avatarPath ? { avatar_path: avatarPath } : {}),
        },
      })
      if (error) throw error

      setAvatarFile(null)
      setFeedback({ type: 'success', message: 'Dein Profil wurde gespeichert.' })
    } catch (error) {
      setFeedback({
        type: 'error',
        message: error instanceof Error ? error.message : 'Das Profil konnte nicht gespeichert werden.',
      })
    } finally {
      setSaving(false)
    }
  }

  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase() || user.email?.charAt(0).toUpperCase()
  const fieldClassName =
    'mt-1.5 h-11 w-full rounded-lg border border-ink-200 bg-white px-3.5 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 dark:border-ink-700 dark:bg-ink-950 dark:text-white dark:placeholder:text-ink-500'

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <header className="mb-8">
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          Benutzerkonto
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink-950 dark:text-white sm:text-4xl">Mein Profil</h1>
        <p className="mt-3 max-w-2xl text-ink-600 dark:text-ink-400">
          Verwalte deine persönlichen Angaben und dein Profilbild.
        </p>
      </header>

      <div className="overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-card dark:border-ink-800 dark:bg-ink-900 dark:shadow-card-dark">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-8 p-5 sm:p-8 md:grid-cols-[12rem_1fr]">
            <div className="flex flex-col items-center md:items-start">
              <div className="relative">
                <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-brand-100 text-3xl font-bold text-brand-700 shadow-card dark:border-ink-800 dark:bg-brand-950 dark:text-brand-300">
                  {avatarUrl ? (
                    <img src={avatarUrl} alt="Dein Profilbild" className="h-full w-full object-cover" />
                  ) : initials ? (
                    <span aria-label="Profilbild-Platzhalter">{initials}</span>
                  ) : (
                    <UserRound className="h-12 w-12" aria-label="Profilbild-Platzhalter" />
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute bottom-0 right-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-brand-600 text-white shadow-soft transition-colors hover:bg-brand-700 dark:border-ink-900 dark:bg-brand-500 dark:hover:bg-brand-400"
                  aria-label="Profilbild auswählen"
                >
                  <Camera className="h-4 w-4" />
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={handleAvatarChange}
                  className="sr-only"
                />
              </div>
              <p className="mt-4 text-center text-xs leading-relaxed text-ink-500 md:text-left dark:text-ink-400">
                JPG, PNG oder WebP<br />bis maximal 5 MB
              </p>
            </div>

            <div className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-ink-700 dark:text-ink-200">
                  Vorname
                  <input
                    className={fieldClassName}
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    autoComplete="given-name"
                    maxLength={80}
                    required
                  />
                </label>
                <label className="block text-sm font-medium text-ink-700 dark:text-ink-200">
                  Nachname
                  <input
                    className={fieldClassName}
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    autoComplete="family-name"
                    maxLength={80}
                    required
                  />
                </label>
              </div>
              <label className="block text-sm font-medium text-ink-700 dark:text-ink-200">
                E-Mail-Adresse
                <input className={`${fieldClassName} cursor-not-allowed opacity-70`} value={user.email ?? ''} readOnly />
                <span className="mt-1.5 block text-xs font-normal text-ink-500 dark:text-ink-400">
                  Die E-Mail-Adresse kann hier nicht geändert werden.
                </span>
              </label>

              {feedback && (
                <p
                  className={`rounded-lg border p-3 text-sm ${
                    feedback.type === 'success'
                      ? 'border-teal-500/20 bg-teal-500/10 text-teal-700 dark:text-teal-300'
                      : 'border-rose-500/20 bg-rose-500/10 text-rose-700 dark:text-rose-300'
                  }`}
                  role={feedback.type === 'error' ? 'alert' : 'status'}
                >
                  {feedback.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col-reverse gap-3 border-t border-ink-200 bg-ink-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8 dark:border-ink-800 dark:bg-ink-950/40">
            <Button type="button" variant="ghost" icon={<LogOut />} onClick={() => void signOut()}>
              Abmelden
            </Button>
            <Button type="submit" icon={<Check />} disabled={saving}>
              {saving ? 'Wird gespeichert …' : 'Profil speichern'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
