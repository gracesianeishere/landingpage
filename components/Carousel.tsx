"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { MediaItem } from "@/lib/content";
import { cn } from "@/lib/utils";

function Slide({ item }: { item: MediaItem }) {
  if (item.type === "video") {
    return (
      <video
        className="h-full w-full rounded-lg object-contain"
        src={item.src}
        poster={item.poster}
        controls
        playsInline
        preload="metadata"
        aria-label={item.alt}
      />
    );
  }
  return (
    <Image
      src={item.src}
      alt={item.alt}
      fill
      sizes="(max-width: 768px) 90vw, 560px"
      className="rounded-lg object-contain"
    />
  );
}

export function Carousel({ items }: { items: MediaItem[] }) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(items.length);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelected(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    setCount(embla.scrollSnapList().length);
    embla.on("select", onSelect);
    onSelect();
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {items.map((item, i) => (
            <div className="min-w-0 flex-[0_0_100%] px-1" key={i}>
              <div className="relative mx-auto flex aspect-[4/5] max-h-[64vh] w-full items-center justify-center">
                <Slide item={item} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => embla?.scrollPrev()}
            className="absolute left-1 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-canvas/90 text-ink shadow-soft transition hover:bg-canvas"
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => embla?.scrollNext()}
            className="absolute right-1 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-canvas/90 text-ink shadow-soft transition hover:bg-canvas"
            aria-label="Next slide"
          >
            <ChevronRight size={18} />
          </button>

          <div className="mt-4 flex items-center justify-center gap-1.5">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => embla?.scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === selected ? "w-5 bg-ink" : "w-1.5 bg-stone/40 hover:bg-stone"
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
