import type { MuscleGroup } from '../types/workout';

const colorMap: Record<MuscleGroup, string> = {
  chest: 'bg-chest/15 text-chest border-chest/30',
  back: 'bg-back/15 text-back border-back/30',
  legs: 'bg-legs/15 text-legs border-legs/30',
  triceps: 'bg-triceps/15 text-triceps border-triceps/30',
  biceps: 'bg-biceps/15 text-biceps border-biceps/30',
  shoulders: 'bg-shoulders/15 text-shoulders border-shoulders/30',
};

export function MuscleGroupBadge({ group }: { group: MuscleGroup }) {
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider border ${colorMap[group]}`}>
      {group}
    </span>
  );
}
