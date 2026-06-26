import { profile } from "@/lib/content";

export function SiteFooter() {
  const year = 2026;
  return (
    <footer className="border-t border-hair bg-canvas px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-lg">{profile.name}</p>
          <p className="mt-1 text-sm text-stone">{profile.title}</p>
        </div>
        <div className="flex flex-col gap-1 text-sm text-stone sm:items-end">
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-ink">
            {profile.email}
          </a>
          <a href={`tel:${profile.phoneHref}`} className="transition-colors hover:text-ink">
            {profile.phone}
          </a>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-6xl items-center justify-between border-t border-hair/60 pt-6">
        <p className="text-xs text-stone-light">
          © {year} {profile.name}. All rights reserved.
        </p>
        <a href="#top" className="text-xs text-stone transition-colors hover:text-ink">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
