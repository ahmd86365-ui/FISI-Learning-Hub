import { BookOpen, Check, ChevronRight, Lightbulb, RotateCcw } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../Button'
import type { LinuxLabChallenge } from '../../data/linux/terminalExercises'
import type { LinuxScenario } from '../../data/linux/labContent'

type Props={item:LinuxLabChallenge|LinuxScenario;kind:'challenge'|'scenario';done:boolean;hintLevel:number;attempts:number;commands:string[];onHint:()=>void;onInsert:(value:string)=>void;onNext:()=>void;onRetry:()=>void}
export function LabTaskPanel({item,kind,done,hintLevel,attempts,commands,onHint,onInsert,onNext,onRetry}:Props){
 const challenge=kind==='challenge'?item as LinuxLabChallenge:null; const hints=item.hints; const objectives=item.objectives
 return <section className={`rounded-xl border bg-white p-5 dark:bg-ink-900 ${done?'border-emerald-300 dark:border-emerald-500/40':'border-ink-200 dark:border-ink-800'}`} aria-labelledby="lab-task-title">
  <div className="flex flex-wrap items-center gap-2"><span className="rounded-md bg-brand-50 px-2 py-1 text-[0.68rem] font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">{item.difficulty}</span>{challenge&&<span className="text-xs text-ink-500">{challenge.category}</span>}</div>
  <h2 id="lab-task-title" className="mt-3 text-lg font-bold text-ink-950 dark:text-white">{item.title}</h2>
  <p className="mt-2 text-sm leading-6 text-ink-600 dark:text-ink-300">{kind==='scenario'?(item as LinuxScenario).briefing:(item as LinuxLabChallenge).description}</p>
  <div className="mt-4"><p className="text-xs font-semibold uppercase tracking-wider text-ink-400">Ziele</p><ul className="mt-2 space-y-2">{objectives.map(objective=><li key={objective} className="flex gap-2 text-sm text-ink-700 dark:text-ink-200"><Check className={`mt-0.5 h-4 w-4 shrink-0 ${done?'text-emerald-500':'text-ink-300 dark:text-ink-600'}`}/>{objective}</li>)}</ul></div>
  {challenge&&<Link to={`/it/linux/${challenge.lessonSlug}`} className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 hover:underline dark:text-brand-300"><BookOpen className="h-3.5 w-3.5"/> Zugehörige Lektion</Link>}
  {!done&&<div className="mt-4"><Button type="button" variant="secondary" size="sm" icon={<Lightbulb/>} onClick={onHint}>{hintLevel===0?'Tipp anzeigen':hintLevel<hints.length?'Nächster Tipp':'Lösung anzeigen'}</Button>{hintLevel>0&&<div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-100"><strong>Tipp {Math.min(hintLevel,hints.length)}:</strong> {hintLevel<=hints.length?hints[hintLevel-1]:challenge?.solution??hints[hints.length-1]}</div>}</div>}
  {commands.length>0&&!done&&<div className="mt-4 flex flex-wrap gap-2">{commands.map(command=><button key={command} type="button" onClick={()=>onInsert(command)} className="rounded-md border px-2.5 py-1.5 font-mono text-[0.7rem] text-ink-600 hover:border-brand-300 dark:text-ink-300" data-no-translate>{command}</button>)}</div>}
  {done&&<div className="mt-4 rounded-lg bg-emerald-50 p-4 dark:bg-emerald-500/10"><p className="font-semibold text-emerald-800 dark:text-emerald-200">✓ Aufgabe abgeschlossen</p><p className="mt-1 text-sm text-emerald-700 dark:text-emerald-300">{item.successMessage}</p><p className="mt-2 text-xs text-emerald-700/80 dark:text-emerald-300/80">{attempts} Versuche · {commands.length} Befehle in dieser Aufgabe</p><div className="mt-3 flex gap-2"><Button size="sm" onClick={onNext} icon={<ChevronRight/>} iconPosition="right">Nächste Aufgabe</Button><Button size="sm" variant="secondary" onClick={onRetry} icon={<RotateCcw/>}>Wiederholen</Button></div></div>}
 </section>
}

