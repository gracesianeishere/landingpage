import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Starburst } from "./Starburst";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-wine px-5 py-24 text-cream sm:px-8 lg:py-32"
    >
      <div className="relative mx-auto max-w-6xl">
        <Starburst
          className="pointer-events-none absolute -right-10 -top-16 h-40 w-40 opacity-30"
          color="var(--color-blush)"
        />
        <Reveal>
          <p className="kicker mb-6 text-blush">05 — Contact</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="max-w-3xl font-display text-4xl leading-[1.05] sm:text-6xl">
            Let&apos;s create something <em className="italic text-blush">worth following</em>.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-xl text-lg text-canvas/70">
            Have a brand, project, or community you&apos;d like to grow? I&apos;d love to
            hear about it.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center justify-between gap-6 rounded-2xl border border-canvas/15 bg-canvas/5 px-6 py-5 transition hover:border-canvas/40"
            >
              <span className="flex items-center gap-3">
                <Mail size={18} className="text-blush" />
                <span className="text-base">{profile.email}</span>
              </span>
              <ArrowUpRight
                size={18}
                className="text-canvas/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={`tel:${profile.phoneHref}`}
              className="group inline-flex items-center justify-between gap-6 rounded-2xl border border-canvas/15 bg-canvas/5 px-6 py-5 transition hover:border-canvas/40"
            >
              <span className="flex items-center gap-3">
                <Phone size={18} className="text-blush" />
                <span className="text-base">{profile.phone}</span>
              </span>
              <ArrowUpRight
                size={18}
                className="text-canvas/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
