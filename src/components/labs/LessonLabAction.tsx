import { ArrowRight, FlaskConical } from 'lucide-react'
import { ButtonLink } from '../Button'
import { getLessonLabs, labHref } from '../../data/labs'

export function LessonLabAction({lessonId,lessonPath}:{lessonId:string;lessonPath:string}) {
  const matches=getLessonLabs(lessonId)
  if(!matches.length)return null
  return <section className="mt-14" aria-labelledby={`lesson-labs-${lessonId}`}><div className="rounded-2xl border border-brand-200 bg-brand-50/70 p-5 dark:border-brand-500/25 dark:bg-brand-500/5 sm:p-6">
    <div className="flex items-start gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-500/15 dark:text-brand-300" aria-hidden="true"><FlaskConical className="h-5 w-5"/></span><div className="min-w-0 flex-1"><p className="text-xs font-bold uppercase tracking-wider text-brand-700 dark:text-brand-300">Praxis im Lab</p><h2 id={`lesson-labs-${lessonId}`} className="mt-1 text-xl font-semibold text-ink-950 dark:text-white">{matches.length===1?'Im Lab üben':'Passende Labs'}</h2></div></div>
    <div className="mt-5 grid gap-4">{matches.map(({lab,mapping})=><article key={lab.id} className="min-w-0 rounded-xl border border-ink-200 bg-white p-4 dark:border-ink-700 dark:bg-ink-900"><div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><h3 className="font-semibold text-ink-950 dark:text-white">{lab.title}</h3><span className="rounded-md bg-ink-100 px-2 py-1 text-xs font-medium text-ink-600 dark:bg-ink-800 dark:text-ink-300">{lab.type}</span></div><p className="mt-2 break-words text-sm leading-6 text-ink-600 dark:text-ink-300">{mapping.reason}</p></div><ButtonLink to={labHref(lab,mapping,lessonPath)} size="lg" className="w-full shrink-0 sm:w-auto" icon={<ArrowRight/>} iconPosition="right">Im Lab üben</ButtonLink></div></article>)}</div>
  </div></section>
}
