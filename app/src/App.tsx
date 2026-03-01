import { useState, useCallback, useRef, useEffect } from 'react';
import { weekPlan } from './data/workouts';
import { DayNavigation } from './components/DayNavigation';
import { DayView } from './components/DayView';
import { UserMenu } from './components/UserMenu';
import { AuthScreen } from './components/AuthScreen';
import { useAuth } from './contexts/AuthContext';

function getTodayIndex(): number {
  const jsDay = new Date().getDay();
  return jsDay === 0 ? 6 : jsDay - 1;
}

export default function App() {
  const { user, loading } = useAuth();
  const [selectedDay, setSelectedDay] = useState(getTodayIndex);
  const contentRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const navigateDay = useCallback((direction: 1 | -1) => {
    setSelectedDay(prev => {
      const next = prev + direction;
      if (next < 0) return 6;
      if (next > 6) return 0;
      return next;
    });
  }, []);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX.current = e.changedTouches[0].screenX;
      const diff = touchStartX.current - touchEndX.current;
      if (Math.abs(diff) > 60) {
        navigateDay(diff > 0 ? 1 : -1);
      }
    };

    el.addEventListener('touchstart', handleTouchStart, { passive: true });
    el.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      el.removeEventListener('touchstart', handleTouchStart);
      el.removeEventListener('touchend', handleTouchEnd);
    };
  }, [navigateDay]);

  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedDay]);

  const day = weekPlan[selectedDay];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-dvh">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <AuthScreen />;
  }

  return (
    <div className="flex flex-col h-dvh max-w-lg mx-auto">
      <header className="flex-shrink-0 px-4 pt-safe-top">
        <div className="flex items-center justify-between py-3">
          <div>
            <h1 className="text-lg font-bold text-text-primary tracking-tight">
              PERFECT Workout
            </h1>
            <p className="text-[10px] text-text-muted uppercase tracking-widest mt-0.5">
              ATHLEAN-X Science Series
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedDay(getTodayIndex())}
              className="px-3 py-1.5 rounded-lg bg-accent/10 text-accent text-xs font-semibold hover:bg-accent/20 active:scale-95 transition-all"
            >
              Today
            </button>
            <UserMenu />
          </div>
        </div>
        <DayNavigation
          weekPlan={weekPlan}
          selectedDay={selectedDay}
          onSelectDay={setSelectedDay}
        />
      </header>

      <main ref={contentRef} className="flex-1 overflow-y-auto px-4 pt-4">
        <DayView day={day} dayIndex={selectedDay} />
      </main>
    </div>
  );
}
