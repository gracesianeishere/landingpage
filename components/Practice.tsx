import { Check } from "lucide-react";
import { disciplines } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Practice() {
  return (
    <section id="practice" className="scroll-mt-20 bg-surface px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="kicker mb-6">02 — What I Do</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="max-w-2xl font-display text-3xl leading-tight sm:text-4xl">
            Two disciplines, one creative <em className="italic text-blush-deep">practice</em>.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {disciplines.map((d, i) => (
            <Reveal key={d.id} delay={120 + i * 90}>
              <div className="h-full rounded-2xl border border-hair bg-canvas p-7 sm:p-9">
                <h3 className="font-display text-2xl">{d.title}</h3>
                <p className="mt-3 text-stone">{d.blurb}</p>
                <ul className="mt-7 space-y-3">
                  {d.scope.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-ink">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blush/40 text-blush-deep">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className="text-[15px]">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
