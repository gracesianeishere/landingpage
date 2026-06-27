"use client";

import { useState } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, X, FileText } from "lucide-react";
import { projects, type Project } from "@/lib/content";
import { Carousel } from "./Carousel";
import { VideoPlayer } from "./VideoPlayer";
import { Reveal } from "./Reveal";

/** Brand logo featured on a white panel over a soft ground. */
function LogoCover({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="absolute inset-0 bg-sand transition-transform duration-700 ease-out group-hover:scale-[1.03]">
      <div className="absolute inset-0 flex items-center justify-center p-6 pb-20">
        <div className="flex aspect-square w-[64%] items-center justify-center rounded-2xl border border-hair bg-white p-7 shadow-soft">
          <div className="relative h-full w-full">
            <Image src={src} alt={alt} fill sizes="320px" className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group block w-full text-left"
      aria-label={`Open ${project.name}`}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-hair bg-surface">
        {project.logo ? (
          <LogoCover src={project.logo.src} alt={project.logo.alt} />
        ) : (
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            sizes="(max-width: 768px) 90vw, 540px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/5 to-ink/0" />
        <span className="absolute left-4 top-4 rounded-full bg-wine/90 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-cream backdrop-blur">
          {project.discipline === "Social Media Specialist" ? "Social" : "Writing"}
        </span>
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
          <div>
            <h3 className="font-display text-2xl text-canvas">{project.name}</h3>
            <p className="mt-1 text-sm text-canvas/80">{project.category}</p>
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-canvas text-ink transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>
    </button>
  );
}

function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-wider text-stone">
          <span>{project.discipline}</span>
          <span aria-hidden>·</span>
          <span>{project.period}</span>
        </div>
        <Dialog.Title className="font-display text-3xl sm:text-4xl">
          {project.name}
        </Dialog.Title>
        <Dialog.Description className="max-w-2xl text-lg text-stone">
          {project.summary}
        </Dialog.Description>
        {project.contribution && (
          <p className="max-w-2xl text-ink">{project.contribution}</p>
        )}
        {(project.collaborators || project.note) && (
          <p className="font-mono text-xs text-stone-light">
            {project.collaborators ?? project.note}
          </p>
        )}
      </header>

      {project.metrics && (
        <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {project.metrics.map((m) => (
            <div key={m.label} className="rounded-xl border border-hair bg-surface p-4">
              <dt className="sr-only">{m.label}</dt>
              <dd className="font-display text-2xl text-ink sm:text-3xl">{m.value}</dd>
              <p className="mt-1 text-xs leading-snug text-stone">{m.label}</p>
            </div>
          ))}
        </dl>
      )}

      {project.galleries
        ? project.galleries.map((g, i) => (
            <div key={i} className="space-y-4 border-t border-hair pt-6 first:border-0 first:pt-0">
              <p className="kicker">
                {g.title} · {g.items.length} slides
              </p>
              <Carousel items={g.items} />
            </div>
          ))
        : project.gallery && project.gallery.length > 0 && (
            <Carousel items={project.gallery} />
          )}

      {project.reels && project.reels.length > 0 && (
        <div>
          <p className="kicker mb-4">Short-form reels</p>
          <div className="-mx-1 flex gap-3 overflow-x-auto px-1 pb-2 no-scrollbar">
            {project.reels.map((reel) => (
              <div key={reel.src} className="w-40 shrink-0 sm:w-48">
                <VideoPlayer src={reel.src} poster={reel.poster} alt={reel.alt} />
              </div>
            ))}
          </div>
        </div>
      )}

      {project.articles && (
        <div className="space-y-3">
          <p className="kicker mb-2">Published articles</p>
          {project.articles.map((a) => (
            <div
              key={a.title}
              className="flex flex-col gap-4 rounded-xl border border-hair bg-surface p-4 sm:flex-row sm:items-center"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-hair bg-canvas sm:h-24 sm:w-40 sm:shrink-0">
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  sizes="200px"
                  className="object-cover object-top"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-stone">
                  <span>{a.section}</span>
                  <span aria-hidden>·</span>
                  <span>{a.date}</span>
                  {a.premium && (
                    <span className="rounded bg-blush-deep px-1.5 py-0.5 text-canvas">
                      Premium
                    </span>
                  )}
                </div>
                <h4 className="mt-1.5 font-display text-lg leading-snug">{a.title}</h4>
              </div>
              <a
                href={a.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-hair px-4 py-2 text-sm text-ink transition hover:border-ink"
              >
                <FileText size={15} />
                Read sample
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function SelectedWork() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="scroll-mt-20 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="kicker mb-6">03 — Selected Work</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="max-w-2xl font-display text-3xl leading-tight sm:text-4xl">
            Brands &amp; communities I&apos;ve helped <em className="italic text-blush-deep">grow</em>.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <ProjectCard project={p} onOpen={() => setActive(p)} />
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog.Root open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 max-h-[90vh] w-[calc(100vw-1.5rem)] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border border-hair bg-canvas p-6 shadow-soft focus:outline-none sm:p-8">
            {active && <ProjectDetail project={active} />}
            <Dialog.Close
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-surface text-ink transition hover:bg-sand"
              aria-label="Close"
            >
              <X size={18} />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
