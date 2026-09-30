import { File, Folder, GitBranch } from 'lucide-react'
import type { LinuxLabSession } from '../../lib/linuxTerminal'

export function FileTree({ session }: { session: LinuxLabSession }) {
  const visible = Object.entries(session.nodes)
    .filter(([path]) => path === '/home/student' || path.startsWith('/home/student/'))
    .sort(([a], [b]) => a.localeCompare(b))
  return (
    <section className="rounded-2xl border border-ink-200 bg-white p-4 shadow-card dark:border-ink-800 dark:bg-ink-900" aria-labelledby="file-tree-title">
      <div className="flex items-center justify-between gap-2">
        <h2 id="file-tree-title" className="font-semibold text-ink-950 dark:text-white">Dateisystem</h2>
        <span className="rounded-full bg-ink-100 px-2 py-1 font-mono text-[0.65rem] text-ink-600 dark:bg-ink-800 dark:text-ink-300">~/</span>
      </div>
      <ul className="mt-4 max-h-64 space-y-1 overflow-auto font-mono text-xs">
        {visible.map(([path, node]) => {
          const depth = Math.max(0, path.split('/').length - 4)
          const label = path === '/home/student' ? 'student' : path.split('/').pop()
          const Icon = node.type === 'dir' ? Folder : File
          return <li key={path} className={`flex items-center gap-2 rounded-md py-1.5 pr-2 ${path === session.cwd ? 'bg-brand-50 text-brand-800 dark:bg-brand-500/10 dark:text-brand-300' : 'text-ink-600 dark:text-ink-300'}`} style={{ paddingLeft: `${0.5 + depth * 0.8}rem` }} title={path}>
            <Icon className={`h-3.5 w-3.5 shrink-0 ${node.type === 'dir' ? 'text-amber-500' : 'text-ink-400'}`} aria-hidden="true" /><span className="truncate">{label}</span>{node.type === 'file' && <span className="ml-auto text-[0.6rem] text-ink-400">{node.mode}</span>}
          </li>
        })}
      </ul>
      <div className="mt-4 flex items-center gap-2 border-t border-ink-100 pt-3 text-xs text-ink-500 dark:border-ink-800 dark:text-ink-400"><GitBranch className="h-4 w-4" aria-hidden="true" />{session.git.initialized ? 'Git-Repository aktiv' : 'Noch kein Git-Repository'}</div>
    </section>
  )
}
