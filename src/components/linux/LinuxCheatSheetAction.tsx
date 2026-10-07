import { BookMarked, ArrowRight } from 'lucide-react'
import { ButtonLink } from '../Button'
import { linuxCheatSheetSectionForTag } from '../../data/linux/cheatSheet'

export function LinuxCheatSheetAction({ tag, lessonPath }: { tag: number; lessonPath: string }) {
  if (!linuxCheatSheetSectionForTag(tag)) return null
  const href = `/it/linux/spickzettel?tag=${tag}&source=${encodeURIComponent(lessonPath)}`
  return (
    <section className="mt-6" aria-labelledby={`linux-spickzettel-${tag}`}>
      <div className="flex flex-col gap-4 rounded-2xl border border-ink-200 bg-white p-5 shadow-soft dark:border-ink-800 dark:bg-ink-900 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink-100 text-brand-700 dark:bg-ink-800 dark:text-brand-300" aria-hidden="true"><BookMarked className="h-5 w-5" /></span>
          <div>
            <h2 id={`linux-spickzettel-${tag}`} className="font-bold text-ink-900 dark:text-white">Spickzettel</h2>
            <p className="mt-1 text-sm leading-relaxed text-ink-500 dark:text-ink-400">Befehle aus Tag {tag} kompakt nachschlagen.</p>
          </div>
        </div>
        <ButtonLink to={href} variant="secondary" size="lg" icon={<ArrowRight />} iconPosition="right" className="w-full sm:w-auto">Spickzettel öffnen</ButtonLink>
      </div>
    </section>
  )
}
