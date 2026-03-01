import type { WeekPlan } from '../types/workout';

const dayAbbrevs = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

interface DayNavigationProps {
  weekPlan: WeekPlan;
  selectedDay: number;
  onSelectDay: (day: number) => void;
}

export function DayNavigation({ weekPlan, selectedDay, onSelectDay }: DayNavigationProps) {
  return (
    <nav className="flex gap-1.5 px-1 py-2 overflow-x-auto">
      {weekPlan.map((day, i) => {
        const isActive = selectedDay === i;
        const isRest = day.isRest;

        return (
          <button
            key={i}
            onClick={() => onSelectDay(i)}
            className={`flex-shrink-0 flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl transition-all ${
              isActive
                ? 'bg-accent text-white shadow-lg shadow-accent/25'
                : isRest
                  ? 'bg-bg-card/50 text-text-muted'
                  : 'bg-bg-card text-text-secondary hover:bg-bg-card-hover'
            }`}
          >
            <span className="text-[10px] font-semibold uppercase tracking-wider">
              {dayAbbrevs[i]}
            </span>
            <span className={`text-xs font-bold ${isActive ? 'text-white' : ''}`}>
              {day.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
