import Image from "next/image";
import { profile } from "@/lib/content";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-wine px-5 py-20 text-cream sm:px-8 lg:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="mb-6 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-blush">
              01 — About Me
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="max-w-xl font-display text-3xl leading-tight sm:text-4xl">
              {profile.intro}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/75">
              {profile.summary}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 max-w-xl font-display text-2xl italic leading-snug text-[#f0d6cc] sm:text-3xl">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-9">
              <p className="mb-3 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-blush">
                Platforms
              </p>
              <ul className="flex flex-wrap gap-2">
                {profile.platforms.map((p) => (
                  <li
                    key={p}
                    className="rounded-full border border-cream/20 bg-cream/5 px-4 py-1.5 text-sm text-cream"
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
              <div className="relative overflow-hidden rounded-2xl border border-cream/15 bg-wine-deep shadow-soft">
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
