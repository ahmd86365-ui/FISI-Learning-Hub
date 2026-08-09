import { ClipboardList } from 'lucide-react'
import type { Exercise } from '../../types/content'
import { ExerciseItem } from './ExerciseItem'
import { EmptyState } from '../EmptyState'

export function ExercisesSection({ exercises }: { exercises: Exercise[] }) {
  if (exercises.length === 0) {
    return (
      <EmptyState
        icon={ClipboardList}
        title="Noch keine Übungen verfügbar"
        description="Für dieses Thema werden bald passende Übungen hinzugefügt."
        className="py-12 sm:py-14"
      />
    )
  }

  return (
    <div className="space-y-4">
      {exercises.map((exercise, i) => (
        <ExerciseItem key={exercise.id} exercise={exercise} index={i} />
      ))}
    </div>
  )
}
