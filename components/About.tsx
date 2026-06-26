import Image from "next/image";
import { profile } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Starburst } from "./Starburst";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="kicker mb-6">01 — About Me</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="max-w-xl font-display text-3xl leading-tight sm:text-4xl">
              {profile.intro}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone">
              {profile.summary}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-xl font-mono text-sm leading-relaxed text-stone-light">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-8">
              <p className="kicker mb-3">Platforms</p>
              <ul className="flex flex-wrap gap-2">
                {profile.platforms.map((p) => (
                  <li
                    key={p}
                    className="rounded-full border border-hair bg-surface px-4 py-1.5 text-sm text-ink"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={160}>
            <div className="relative mx-auto w-full max-w-xs">
              <Starburst className="absolute -right-6 -top-6 h-24 w-24 opacity-80" />
              <div className="relative overflow-hidden rounded-2xl border border-hair bg-surface shadow-soft">
                <Image
                  src={profile.photo.src}
                  alt={profile.photo.alt}
                  width={354}
                  height={472}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
