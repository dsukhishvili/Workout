import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { saveWeight, getCurrentWeekWeight, getPreviousWeekWeight } from '../lib/weightHistory';
import type { WeightEntry } from '../types/workout';

interface WeightTrackerProps {
  exerciseId: string;
}

export function WeightTracker({ exerciseId }: WeightTrackerProps) {
  const { user } = useAuth();
  const [currentWeight, setCurrentWeight] = useState<WeightEntry | null>(null);
  const [prevWeight, setPrevWeight] = useState<WeightEntry | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [unit, setUnit] = useState<'kg' | 'lbs'>('kg');
  const [saving, setSaving] = useState(false);
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!user) return;
    let cancelled = false;

    (async () => {
      const [curr, prev] = await Promise.all([
        getCurrentWeekWeight(user.uid, exerciseId),
        getPreviousWeekWeight(user.uid, exerciseId),
      ]);
      if (cancelled) return;
      setCurrentWeight(curr);
      setPrevWeight(prev);
      if (curr) {
        setInputValue(String(curr.weight));
        setUnit(curr.unit);
      } else if (prev) {
        setUnit(prev.unit);
      }
    })();

    return () => { cancelled = true; };
  }, [user, exerciseId]);

  if (!user) {
    return (
      <button
        onClick={() => {
          const signInBtn = document.querySelector<HTMLButtonElement>('[data-signin]');
          signInBtn?.click();
        }}
        className="mt-2 flex items-center gap-1.5 text-[11px] text-text-muted hover:text-accent-light transition-colors"
      >
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
        Sign in to track weight
      </button>
    );
  }

  const handleSave = async () => {
    const weight = parseFloat(inputValue);
    if (isNaN(weight) || weight <= 0) return;

    setSaving(true);
    await saveWeight(user.uid, exerciseId, weight, unit);
    setCurrentWeight({ weight, unit, date: new Date().toISOString() });
    setSaving(false);
    setEditing(false);
  };

  if (currentWeight && !editing) {
    return (
      <div className="flex items-center gap-2 mt-2">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-accent/10 border border-accent/20">
          <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
          </svg>
          <span className="text-xs font-bold text-accent tabular-nums">
            {currentWeight.weight} {currentWeight.unit}
          </span>
        </div>
        {prevWeight && (
          <span className="text-[10px] text-text-muted">
            prev: {prevWeight.weight} {prevWeight.unit}
          </span>
        )}
        <button
          onClick={() => setEditing(true)}
          className="ml-auto text-[10px] text-text-muted underline"
        >
          edit
        </button>
      </div>
    );
  }

  return (
    <div className="mt-2 space-y-1.5">
      {prevWeight && (
        <p className="text-[10px] text-text-muted flex items-center gap-1">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Last week: {prevWeight.weight} {prevWeight.unit}
        </p>
      )}
      <div className="flex items-center gap-1.5">
        <input
          ref={inputRef}
          type="number"
          inputMode="decimal"
          step="0.5"
          placeholder="Weight"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onFocus={() => inputRef.current?.select()}
          onKeyDown={e => e.key === 'Enter' && handleSave()}
          className="w-20 px-2 py-1.5 rounded-lg bg-bg-primary border border-border text-xs text-text-primary text-center focus:outline-none focus:border-accent tabular-nums"
        />
        <button
          onClick={() => setUnit(u => u === 'kg' ? 'lbs' : 'kg')}
          className="px-2 py-1.5 rounded-lg bg-bg-primary border border-border text-xs text-text-secondary hover:text-text-primary transition-colors"
        >
          {unit}
        </button>
        <button
          onClick={handleSave}
          disabled={saving || !inputValue}
          className="px-3 py-1.5 rounded-lg bg-accent text-white text-xs font-semibold disabled:opacity-40 active:scale-95 transition-all"
        >
          {saving ? '...' : 'Save'}
        </button>
        {editing && (
          <button
            onClick={() => setEditing(false)}
            className="text-xs text-text-muted"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}
