const branches = [
  { title: 'Kranken­versicherung', subtitle: 'Krankheit' },
  { title: 'Pflege­versicherung', subtitle: 'Pflegebedürftigkeit' },
  { title: 'Renten­versicherung', subtitle: 'Alter' },
  { title: 'Arbeitslosen­versicherung', subtitle: 'Arbeitslosigkeit' },
  { title: 'Unfall­versicherung', subtitle: 'Arbeitsunfälle' },
]

export function SozialversicherungOverview() {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
      {branches.map((branch) => (
        <div
          key={branch.title}
          className="rounded-lg border border-ink-200 bg-ink-50 px-3 py-3 text-center dark:border-ink-700 dark:bg-ink-800"
        >
          <p className="text-xs font-semibold text-ink-800 dark:text-ink-100">{branch.title}</p>
          <p className="mt-1 text-[0.65rem] text-ink-500 dark:text-ink-400">{branch.subtitle}</p>
        </div>
      ))}
    </div>
  )
}
