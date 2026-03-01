import type { DayPlan } from '../types/workout';
import { WorkoutSection } from './WorkoutSection';

interface DayViewProps {
  day: DayPlan;
  dayIndex: number;
}

export function DayView({ day, dayIndex }: DayViewProps) {
  if (day.isRest) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
        <div className="w-20 h-20 rounded-full bg-bg-card border border-border flex items-center justify-center mb-5">
          <svg className="w-10 h-10 text-rest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-text-primary mb-2">Rest Day</h2>
        <p className="text-text-secondary text-sm max-w-[260px] leading-relaxed">
          Recovery is when your muscles grow. Stay hydrated, eat well, and get quality sleep.
        </p>
      </div>
    );
  }

  const totalExercises = day.workouts.reduce((sum, w) => sum + w.exercises.length, 0);

  return (
    <div className="space-y-8 pb-8">
      <div className="pt-2">
        <h2 className="text-2xl font-bold text-text-primary">{day.label}</h2>
        <p className="text-sm text-text-secondary mt-1">
          {day.workouts.length} {day.workouts.length > 1 ? 'workouts' : 'workout'} &middot; {totalExercises} exercises
        </p>
      </div>

      {day.workouts.map((workout) => (
        <WorkoutSection
          key={`${workout.muscleGroup}-${workout.variant}`}
          workout={workout}
          storageKey={`workout-progress-day${dayIndex}-${workout.muscleGroup}-${workout.variant}`}
        />
      ))}
    </div>
  );
}
