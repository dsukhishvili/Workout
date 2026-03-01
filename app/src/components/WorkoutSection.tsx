import { useState, useCallback } from 'react';
import type { Workout } from '../types/workout';
import { MuscleGroupBadge } from './MuscleGroupBadge';
import { ExerciseCard } from './ExerciseCard';

interface WorkoutSectionProps {
  workout: Workout;
  storageKey: string;
}

function getCompletedExercises(key: string): Set<number> {
  try {
    const raw = localStorage.getItem(key);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

export function WorkoutSection({ workout, storageKey }: WorkoutSectionProps) {
  const [completed, setCompleted] = useState<Set<number>>(() => getCompletedExercises(storageKey));

  const toggleExercise = useCallback((index: number) => {
    setCompleted(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      localStorage.setItem(storageKey, JSON.stringify([...next]));
      return next;
    });
  }, [storageKey]);

  const completedCount = completed.size;
  const totalCount = workout.exercises.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <section className="space-y-3">
      <div className="flex items-center gap-2.5">
        <MuscleGroupBadge group={workout.muscleGroup} />
        <h3 className="font-bold text-base text-text-primary">{workout.title}</h3>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex-1 h-1.5 bg-bg-primary rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <span className="text-xs text-text-muted font-medium tabular-nums">
          {completedCount}/{totalCount}
        </span>
      </div>

      <div className="space-y-2.5">
        {workout.exercises.map((exercise, i) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            index={i}
            isCompleted={completed.has(i)}
            onToggle={() => toggleExercise(i)}
          />
        ))}
      </div>
    </section>
  );
}
