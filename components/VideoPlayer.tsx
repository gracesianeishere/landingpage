"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Vertical (9:16) muted-autoplay video for grids.
 * Plays when scrolled into view, pauses when out. Tap the speaker to unmute.
 */
export function VideoPlayer({
  src,
  poster,
  alt,
  className,
}: {
  src: string;
  poster?: string;
  alt: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className={cn("group relative overflow-hidden rounded-xl bg-ink/5", className)}>
      <video
        ref={ref}
        className="aspect-[9/16] h-full w-full object-cover"
        src={src}
        poster={poster}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        aria-label={alt}
      />
      <button
        type="button"
        onClick={() => {
          const el = ref.current;
          if (!el) return;
          el.muted = !el.muted;
          setMuted(el.muted);
          if (!el.muted) el.play().catch(() => {});
        }}
        className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-ink/55 text-canvas backdrop-blur transition hover:bg-ink/80"
        aria-label={muted ? "Unmute video" : "Mute video"}
      >
        {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>
    </div>
  );
}
