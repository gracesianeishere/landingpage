"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, profile } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled || open
          ? "border-b border-hair bg-canvas/85 backdrop-blur-md"
          : "border-b border-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="font-display text-lg tracking-tight"
          onClick={() => setOpen(false)}
        >
          {profile.name}
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-stone transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-wine px-4 py-2 text-sm text-cream transition hover:bg-wine-deep"
          >
            Let&apos;s talk
          </a>
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full text-ink md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden border-t border-hair bg-canvas transition-[max-height] duration-300",
          open ? "max-h-96" : "max-h-0 border-transparent"
        )}
      >
        <nav className="flex flex-col px-5 py-2" aria-label="Mobile">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="border-b border-hair/60 py-3 text-base text-ink last:border-0"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
