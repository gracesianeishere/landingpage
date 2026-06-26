import { experience } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="kicker mb-6">04 — Experience</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="max-w-2xl font-display text-3xl leading-tight sm:text-4xl">
            A timeline of selected engagements.
          </h2>
        </Reveal>

        <ol className="mt-12 border-t border-hair">
          {experience.map((e, i) => (
            <Reveal as="li" key={`${e.org}-${i}`} delay={i * 70}>
              <div className="grid grid-cols-1 gap-2 border-b border-hair py-6 sm:grid-cols-12 sm:items-baseline sm:gap-4">
                <span className="font-mono text-sm text-stone sm:col-span-3">
                  {e.period}
                </span>
                <span className="font-display text-xl text-ink sm:col-span-6">
                  {e.org}
                </span>
                <span className="text-sm text-stone sm:col-span-3 sm:text-right">
                  {e.role}
                </span>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
