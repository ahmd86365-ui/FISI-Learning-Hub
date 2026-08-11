const levels = [
  { title: 'Prokura', subtitle: 'sehr weitreichend', width: '100%' },
  { title: 'Handlungsvollmacht', subtitle: 'gewöhnliche Geschäfte', width: '80%' },
  { title: 'Artvollmacht', subtitle: 'bestimmte Art von Geschäften', width: '60%' },
  { title: 'Einzelvollmacht', subtitle: 'ein konkretes Geschäft', width: '40%' },
]

export function VollmachtenHierarchy() {
  return (
    <div className="flex flex-col items-center gap-2">
      {levels.map((level) => (
        <div
          key={level.title}
          style={{ width: level.width }}
          className="rounded-lg border border-brand-200 bg-brand-50/60 px-4 py-2.5 text-center dark:border-brand-500/30 dark:bg-brand-500/10"
        >
          <p className="text-xs font-semibold text-brand-800 dark:text-brand-300">{level.title}</p>
          <p className="text-[0.65rem] text-brand-700/70 dark:text-brand-300/70">{level.subtitle}</p>
        </div>
      ))}
    </div>
  )
}
