export type MuscleGroup = 'chest' | 'back' | 'legs' | 'triceps' | 'biceps' | 'shoulders';

export interface Exercise {
  id: string;
  name: string;
  sets: string;
  reps: string;
  notes?: string;
  videoId: string;
  videoStart: number;
  videoEnd: number;
  isBodyweight?: boolean;
}

export interface Workout {
  muscleGroup: MuscleGroup;
  title: string;
  variant: 1 | 2;
  exercises: Exercise[];
}

export interface DayPlan {
  dayNumber: number;
  label: string;
  workouts: Workout[];
  isRest: boolean;
}

export type WeekPlan = DayPlan[];

export interface WeightEntry {
  weight: number;
  unit: 'kg' | 'lbs';
  date: string;
}

export interface ExerciseLog {
  exerciseId: string;
  entries: WeightEntry[];
}
