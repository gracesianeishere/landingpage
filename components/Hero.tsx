import { ArrowDownRight } from "lucide-react";
import { profile } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pt-40 lg:pb-28 lg:pt-48"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="kicker mb-6">Portfolio — {profile.title}</p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="font-display text-[clamp(3rem,11vw,9rem)] leading-[0.92] tracking-[-0.03em]">
            {profile.firstName}
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl font-display text-2xl leading-snug text-ink sm:text-3xl">
            Social Media Specialist <span className="italic text-blush-deep">&amp;</span>{" "}
            Content Writer.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-stone sm:text-lg">
            {profile.summary}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-wine px-6 py-3 text-sm text-cream transition hover:bg-wine-deep"
            >
              View selected work
              <ArrowDownRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-hair px-6 py-3 text-sm text-ink transition hover:border-ink"
            >
              Get in touch
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
