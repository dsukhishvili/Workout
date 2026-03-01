import { useState } from 'react';

interface VideoPlayerProps {
  videoId: string;
  start: number;
  end: number;
  title: string;
}

export function VideoPlayer({ videoId, start, end, title }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&start=${start}&end=${end}&modestbranding=1`;

  if (!playing) {
    return (
      <button
        onClick={() => setPlaying(true)}
        className="relative w-full aspect-video rounded-lg overflow-hidden group"
        aria-label={`Play ${title}`}
      >
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-active:bg-black/60">
          <div className="w-11 h-11 rounded-full bg-accent/90 flex items-center justify-center shadow-lg">
            <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </button>
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden">
      <iframe
        src={embedUrl}
        title={title}
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
