import { useMemo, useState } from 'react'
import { ChevronDown, ChevronRight, File, Folder, GitBranch, X } from 'lucide-react'
import type { LinuxLabSession } from '../../lib/linuxTerminal'

export function FileTree({ session }: { session: LinuxLabSession }) {
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set(['/', '/home', '/home/student']))
  const [preview, setPreview] = useState<string | null>(null)
  const children = useMemo(() => (path: string) => Object.keys(session.nodes).filter((item) => item !== path && (item.slice(0, item.lastIndexOf('/')) || '/') === path).sort(), [session.nodes])
  const rows: { path:string; depth:number }[] = []
  const walk = (path:string, depth:number) => { rows.push({path,depth}); if(session.nodes[path]?.type==='dir'&&expanded.has(path)) children(path).forEach(child=>walk(child,depth+1)) }
  walk('/',0)
  const toggle=(path:string)=>setExpanded(current=>{const next=new Set(current);next.has(path)?next.delete(path):next.add(path);return next})
  const selected=preview ? session.nodes[preview] : null
  return <section className="rounded-xl border border-ink-200 bg-white p-4 dark:border-ink-800 dark:bg-ink-900" aria-labelledby="file-tree-title">
    <div className="flex items-center justify-between gap-2"><h2 id="file-tree-title" className="font-semibold text-ink-950 dark:text-white">Dateisystem</h2><span className="rounded-md bg-ink-100 px-2 py-1 font-mono text-[0.65rem] text-ink-600 dark:bg-ink-800 dark:text-ink-300">{session.cwd.replace('/home/student','~')||'/'}</span></div>
    <ul className="mt-3 max-h-72 overflow-auto font-mono text-xs" data-no-translate>
      {rows.map(({path,depth})=>{const node=session.nodes[path];const isDir=node.type==='dir';const Icon=isDir?Folder:File;const label=path==='/'?'/':path.split('/').pop();return <li key={path}><button type="button" onClick={()=>isDir?toggle(path):setPreview(path)} className={`flex min-h-8 w-full items-center gap-1.5 rounded-md pr-2 text-left ${path===session.cwd?'bg-brand-50 text-brand-800 dark:bg-brand-500/10 dark:text-brand-300':'text-ink-600 hover:bg-ink-50 dark:text-ink-300 dark:hover:bg-ink-800'}`} style={{paddingLeft:`${0.35+depth*0.7}rem`}} title={path}>{isDir?(expanded.has(path)?<ChevronDown className="h-3 w-3"/>:<ChevronRight className="h-3 w-3"/>):<span className="w-3"/>}<Icon className={`h-3.5 w-3.5 shrink-0 ${isDir?'text-amber-500':'text-ink-400'}`}/><span className="truncate">{label}</span><span className="ml-auto text-[0.58rem] text-ink-400">{node.mode}</span></button></li>})}
    </ul>
    {selected?.type==='file'&&<div className="mt-3 rounded-lg bg-ink-50 p-3 dark:bg-ink-950"><div className="flex items-center justify-between gap-2"><span className="truncate font-mono text-xs font-semibold">{preview}</span><button type="button" onClick={()=>setPreview(null)} aria-label="Dateivorschau schließen"><X className="h-4 w-4"/></button></div><p className="mt-1 text-[0.68rem] text-ink-500">{selected.owner??'student'}:{selected.group??'student'} · {selected.mode}</p><pre className="mt-2 max-h-28 overflow-auto whitespace-pre-wrap text-xs text-ink-700 dark:text-ink-200">{selected.content||'(leer)'}</pre></div>}
    <div className="mt-3 flex items-center gap-2 border-t border-ink-100 pt-3 text-xs text-ink-500 dark:border-ink-800 dark:text-ink-400"><GitBranch className="h-4 w-4"/>{session.git.initialized?'Git-Repository aktiv':'Kein Git-Repository aktiv'}</div>
  </section>
}
