import { useState } from 'react';
import type { Exercise } from '../types/workout';
import { VideoPlayer } from './VideoPlayer';
import { WeightTracker } from './WeightTracker';

interface ExerciseCardProps {
  exercise: Exercise;
  index: number;
  isCompleted: boolean;
  onToggle: () => void;
}

export function ExerciseCard({ exercise, index, isCompleted, onToggle }: ExerciseCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div
      className={`rounded-xl border transition-all duration-200 ${
        isCompleted
          ? 'bg-success/5 border-success/20'
          : 'bg-bg-card border-border'
      }`}
    >
      <div className="flex items-start gap-3 p-4 pb-2">
        <button
          onClick={onToggle}
          className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
            isCompleted
              ? 'bg-success border-success'
              : 'border-text-muted hover:border-accent'
          }`}
          aria-label={isCompleted ? 'Mark incomplete' : 'Mark complete'}
        >
          {isCompleted && (
            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>

        <div className="flex-1 min-w-0" onClick={() => setExpanded(!expanded)}>
          <div className="flex items-baseline gap-2">
            <span className="text-xs font-bold text-accent tabular-nums">{index + 1}</span>
            <h4 className={`font-semibold text-sm leading-tight ${isCompleted ? 'line-through text-text-muted' : 'text-text-primary'}`}>
              {exercise.name}
            </h4>
          </div>

          <div className="flex gap-3 mt-1.5">
            <div className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="text-xs text-text-secondary font-medium">{exercise.sets} sets</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-xs text-text-secondary font-medium">{exercise.reps} reps</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pb-3 pl-[52px] space-y-2">
        {expanded && exercise.notes && (
          <p className="text-xs text-text-secondary leading-relaxed bg-bg-primary/50 rounded-lg p-2.5">
            {exercise.notes}
          </p>
        )}

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowVideo(!showVideo)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-bg-primary/60 border border-border text-[11px] font-medium text-accent-light hover:bg-bg-card-hover active:scale-[0.97] transition-all"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
            {showVideo ? 'Hide' : 'Form'}
          </button>

          {!exercise.notes ? null : !expanded ? (
            <button
              onClick={() => setExpanded(true)}
              className="text-[10px] text-text-muted underline"
            >
              Tips
            </button>
          ) : (
            <button
              onClick={() => setExpanded(false)}
              className="text-[10px] text-text-muted underline"
            >
              Hide tips
            </button>
          )}
        </div>

        {showVideo && (
          <div className="pt-1">
            <VideoPlayer
              videoId={exercise.videoId}
              start={exercise.videoStart}
              end={exercise.videoEnd}
              title={exercise.name}
            />
          </div>
        )}

        {!exercise.isBodyweight && (
          <WeightTracker exerciseId={exercise.id} />
        )}
      </div>
    </div>
  );
}
