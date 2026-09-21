import { useState, type FormEvent } from 'react'
import { Button, ButtonLink } from '../components/Button'
import { answerMatches, calculateSubnet, generateSubnetProblem, type Difficulty } from '../lib/subnetting'

const fields = [
  ['mask', 'Subnetzmaske'], ['network', 'Netzadresse'], ['broadcast', 'Broadcast-Adresse'],
  ['firstHost', 'Erste Hostadresse'], ['lastHost', 'Letzte Hostadresse'], ['usableHosts', 'Anzahl nutzbarer Hosts'],
] as const
type Field = typeof fields[number][0]
const emptyAnswers = (): Record<Field, string> => ({ mask: '', network: '', broadcast: '', firstHost: '', lastHost: '', usableHosts: '' })

export default function SubnettingTrainer() {
  const [difficulty, setDifficulty] = useState<Difficulty>('mittel')
  const [problem, setProblem] = useState(() => generateSubnetProblem('mittel'))
  const [answers, setAnswers] = useState(emptyAnswers)
  const [checked, setChecked] = useState(false)
  const [hint, setHint] = useState(false)
  const [tasks, setTasks] = useState(0)
  const [correct, setCorrect] = useState(0)
  const solution = calculateSubnet(problem)
  const results = fields.map(([key]) => answerMatches(answers[key], solution[key]))
  const allCorrect = results.every(Boolean)

  const next = (level = difficulty) => {
    let candidate = generateSubnetProblem(level)
    for (let i = 0; i < 5 && candidate.address === problem.address && candidate.prefix === problem.prefix; i++) {
      candidate = generateSubnetProblem(level)
    }
    setProblem(candidate)
    setAnswers(emptyAnswers())
    setChecked(false)
    setHint(false)
  }
  const submit = (event: FormEvent) => {
    event.preventDefault()
    if (checked) return
    setChecked(true)
    setTasks((count) => count + 1)
    if (allCorrect) setCorrect((count) => count + 1)
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <ButtonLink to="/it/netzwerktechnik/subnetting" variant="ghost" size="sm">← Zur Lektion</ButtonLink>
      <header className="mt-5 mb-8">
        <h1 className="text-3xl font-bold text-ink-950 dark:text-white">Subnetting Trainer</h1>
        <p className="mt-2 text-ink-600 dark:text-ink-400">Berechne die Netzgrenzen und den nutzbaren Hostbereich.</p>
      </header>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 text-sm text-ink-600 dark:text-ink-300">
        <div className="flex items-center gap-2"><label htmlFor="difficulty">Schwierigkeit</label>
          <select id="difficulty" value={difficulty} onChange={(event) => { const level = event.target.value as Difficulty; setDifficulty(level); next(level) }}
            className="min-h-11 rounded-xl border border-ink-300 bg-white px-3 text-ink-900 dark:border-ink-700 dark:bg-ink-900 dark:text-white">
            <option value="leicht">Leicht</option><option value="mittel">Mittel</option><option value="schwer">Schwer</option>
          </select>
        </div>
        <p aria-live="polite">Richtig: {correct} · Aufgaben: {tasks}</p>
      </div>
      <section className="rounded-2xl border border-ink-200 bg-white p-5 shadow-card dark:border-ink-800 dark:bg-ink-900 sm:p-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-500 dark:text-ink-400">IP-Adresse</h2>
        <p className="mt-2 break-all font-mono text-2xl font-bold text-ink-950 dark:text-white sm:text-3xl">{problem.address}/{problem.prefix}</p>
        <form onSubmit={submit} className="mt-7">
          <div className="grid gap-5 sm:grid-cols-2">
            {fields.map(([key, label], index) => (
              <div key={key}>
                <label htmlFor={key} className="block text-sm font-medium text-ink-800 dark:text-ink-100">{label}</label>
                <input id={key} value={answers[key]} onChange={(event) => setAnswers((current) => ({ ...current, [key]: event.target.value }))}
                  disabled={checked} inputMode={key === 'usableHosts' ? 'numeric' : 'decimal'} autoComplete="off" spellCheck={false}
                  aria-describedby={checked ? `${key}-result` : undefined}
                  className="mt-2 min-h-12 w-full min-w-0 rounded-xl border border-ink-300 bg-white px-3 font-mono text-base text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500 disabled:opacity-80 dark:border-ink-700 dark:bg-ink-950 dark:text-white" />
                {checked && <p id={`${key}-result`} className={`mt-1 text-sm font-medium ${results[index] ? 'text-teal-700 dark:text-teal-300' : 'text-rose-700 dark:text-rose-300'}`}>
                  {results[index] ? '✓ Richtig' : `✗ Falsch · ${solution[key]}`}
                </p>}
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button type="submit" size="lg" disabled={checked}>Antwort prüfen</Button>
            <Button type="button" variant="secondary" size="lg" onClick={() => next()}>Neue Aufgabe</Button>
            <Button type="button" variant="ghost" size="lg" onClick={() => setHint((value) => !value)} aria-expanded={hint}>Tipp anzeigen</Button>
          </div>
        </form>
        {hint && !checked && <div className="mt-6 rounded-xl bg-brand-50 p-4 text-sm text-ink-800 dark:bg-ink-800 dark:text-ink-100">
          <strong>Tipp:</strong> /{problem.prefix} bedeutet {problem.prefix} Netzbits und {solution.hostBits} Host-Bits. Im {solution.relevantOctet}. Oktett liegt die Blockgrenze. Ermittle dort die Schrittweite aus 256 minus Maskenwert. Für nutzbare Hosts: 2<sup>{solution.hostBits}</sup> − 2.
        </div>}
        {checked && <div className="mt-8 border-t border-ink-200 pt-6 dark:border-ink-800" aria-live="polite">
          <h2 className="text-lg font-semibold text-ink-950 dark:text-white">{allCorrect ? 'Alles richtig!' : 'Lösungsweg'}</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-ink-700 dark:text-ink-200">
            <li>Das Präfix /{problem.prefix} reserviert {problem.prefix} Bits für das Netz.</li>
            <li>Es bleiben 32 − {problem.prefix} = {solution.hostBits} Host-Bits.</li>
            <li>Die Subnetzmaske lautet {solution.mask}.</li>
            <li>Im {solution.relevantOctet}. Oktett beträgt die Blockgröße {solution.blockSize}; der passende Block reicht dort von {solution.blockStart} bis {solution.blockEnd}.</li>
            <li>Alle Host-Bits auf 0 ergeben die Netzadresse {solution.network}.</li>
            <li>Alle Host-Bits auf 1 ergeben die Broadcast-Adresse {solution.broadcast}.</li>
            <li>Dazwischen liegen die nutzbaren Hosts von {solution.firstHost} bis {solution.lastHost}.</li>
            <li>2<sup>{solution.hostBits}</sup> − 2 = {solution.usableHosts} nutzbare Hosts; Netz- und Broadcast-Adresse entfallen.</li>
          </ol>
        </div>}
      </section>
    </div>
  )
}
