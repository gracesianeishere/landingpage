import { Mail, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/content";
import { Reveal } from "./Reveal";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-wine px-5 py-24 text-cream sm:px-8 lg:py-32"
    >
      <div className="relative mx-auto max-w-6xl">
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
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-between gap-6 rounded-2xl border border-canvas/15 bg-canvas/5 px-6 py-5 transition hover:border-canvas/40"
            >
              <span className="flex items-center gap-3">
                <LinkedInIcon className="text-blush" />
                <span className="text-base">{profile.linkedinLabel}</span>
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
