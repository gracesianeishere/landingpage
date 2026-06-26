import { shortForm } from "@/lib/content";
import { VideoPlayer } from "./VideoPlayer";
import { Reveal } from "./Reveal";

export function ShortFormHighlights() {
  return (
    <section id="highlights" className="scroll-mt-20 bg-surface px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="kicker mb-6">03.5 — Motion</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">
            {shortForm.heading}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-4 max-w-xl text-lg text-stone">{shortForm.subhead}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {shortForm.clips.map((clip, i) => (
            <Reveal key={clip.src} delay={i * 80}>
              <VideoPlayer src={clip.src} poster={clip.poster} alt={clip.alt} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
