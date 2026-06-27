# Project Status — Gracesiane J. Portfolio Website

> **Resume file.** This document is the single source of project memory. If a new
> session starts with no chat history, read this file first, then read
> `docs/source/Portfolio-Gracesiane.pdf` (the authoritative source of truth).

_Last updated: 2026-06-26 — SITE BUILT (v1). Builds clean; deployed pending._

## STATUS: v2 — RETHEMED ✅
- Palette changed (user refs) to WINE & CREAM: --color-wine #6e1a2a, canvas cream
  #f4ebda, ink #2a1417. Wine color-blocks: About, Short-Form, Contact.
- Added Pinyon Script (@fontsource/pinyon-script) for tagline; Fraunces italic
  flourishes in section headings.
- Branded covers for content-writer cards (coverKind: "linkedin" | "press" in
  lib/content.ts → rendered in components/SelectedWork.tsx). Photo projects use
  coverKind "image" (default).
- LinkedIn live links still deferred (user away from LinkedIn).

## STATUS: v1 BUILT ✅
- Next.js 15 + React 19 + Tailwind v4 app. `npm run build` passes (static).
- Sections live: Hero, About, What I Do, Selected Work (+project modals),
  Short-Form Highlights, Experience, Contact, Footer.
- Media optimized into `public/media/` (mov→mp4, compressed, posters).
- Fonts via @fontsource (Fraunces/Inter/JetBrains Mono) — no Google Fonts network dep.
- Run locally: `npm install` then `npm run dev` (or `npm run build && npm run start`).
- Screenshot tooling: `npm i -D playwright`, browser at /opt/pw-browsers/chromium.
- NEXT: user review of screenshots → tweaks → deploy to Vercel (guide user).
- Pending content: live social links (LinkedIn etc.), optional higher-res headshot.

---

## 0. How to resume
1. Read this file top to bottom.
2. Source of truth = `docs/source/Portfolio-Gracesiane.pdf` (13 pages).
3. Working branch = `claude/ecstatic-dijkstra-0i9dra` (develop & push here; never push elsewhere without permission).
4. Continue from **Section 8 — Next Steps**.

---

## 1. Project goal
Premium, minimal, editorial personal portfolio website for **Gracesiane J.**,
a **Social Media Specialist & Content Writer**. Conversion-focused, mobile-first,
accessible, SEO-optimized. Design inspiration: Apple, Linear, Stripe, Framer.

**Hard rule (anti-hallucination):** every factual claim on the site must be
traceable to the PDF or to explicit user input. Do not invent achievements,
metrics, clients, skills, dates, or testimonials. If something is missing, flag
it and ask — never fill gaps with fiction.

## 2. Preferred stack (not yet scaffolded)
Next.js + React + TypeScript + Tailwind CSS + shadcn/ui. Clean architecture,
reusable components, type-safe, performance- and SEO-optimized.

---

## 3. Verified extraction (from the PDF) — VERIFIED ✅
- **Name / titles:** "Gracesiane J." — Social Media Specialist || Content Writer (p.1–2)
- **Summary (p.2):** "Greetings! My name is Gracesiane, a Social Media Specialist
  and Content Writer. I specialized in content plan and ideation, social media
  management, and copywriting. I help personal brands and businesses grow on
  different social media platforms such as Instagram, TikTok, X, and LinkedIn."
- **Brand tagline (p.2):** "You are now welcome to see and explore at Gracesiane's
  little space of creativity~"
- **Social Media Specialist — job scope (p.4):** Content plan & strategy ·
  Copywriting · Trend & content research · Content production · Social media
  management · Performance analysis
- **Content Writer — job scope (p.10):** Topic research · Content ideation ·
  Content writing · Copywriting
- **Contact (p.13):** work.gsjaklyn@gmail.com · +6285647989835

### Projects (verified)
**Social Media Specialist**
1. **EdTan For Fun** — 2024–present (p.5–7). "Media platform focusing on designer
   toys, art toys, collectibles, and creative culture." Handle @edtanforfun
   (IG/TikTok), "Edtan For Fun" (YouTube). Collab w/ serp93666.
   - Metrics in PDF: Post A — 3,830 views / 1,641 reached / 30 profile visits /
     9 follows / 191 likes / 12 comments / 11 reposts / 9 shares / 9 saves.
     Post B — 23,785 views / 8,856 reach / 283 interactions / 610 profile
     activity (505 visits, 104 follows, 1 external tap).
     Additional reel views: 18.7K, 7,041, 5,893.
2. **Morfo Associates & Maison** — 2025–present (p.8–9). "Architectural designer
   & residential interior design consultant." Collab tag arch__render;
   crossposted to Facebook.
   - Metrics in PDF: Post A — 2,948 views / 811 reached / 1 visit / 2 follows.
     Post B — 1,232 views / 456 reached / 0 follows. Reel views: 1,419, 956, 910.

**Content Writer**
3. **FullFind & Ku Creatives** — 2025 (p.11). "Remote job academy & recruiting,
   digital marketing agency." Contribution: "Developed thought leadership content
   for the CEO's LinkedIn presence" (Calvin Nathan Manik, CEO of Ku Creatives).
4. **The Jakarta Post** — 2022 (p.12). "Articles published on The Jakarta Post
   through a media agency engagement"; bylined "JP Staff (The Jakarta Post)".
   Articles:
   - "To live another day: cancer survivors gain strength from trials" — Culture·Health, Oct 14, 2022 (Premium)
   - "Journaling: Gen Z's latest form of self-expression and therapy" — Culture·Lifestyle, Jul 18, 2022
   - "Rent-an-iPhone promises full experience without breaking the bank" — Culture·Lifestyle, Jul 12, 2022

---

## 4. Decisions LOCKED (with user)
- **Titles:** keep exactly two — "Social Media Specialist" & "Content Writer".
  Do NOT add "Content Creator" or any third title (user agreed; video creation
  is covered under Social Media Specialist's "Content production", p.4).
- **Testimonials section:** OMIT for now (none exist in PDF; the p.11 LinkedIn
  posts are content she WROTE for the CEO — they are NOT testimonials about her
  and must not be presented as such).
- **New section "Short-Form Highlights"** under Social Media Specialist:
  - Heading: **"Short-Form Highlights"**
  - Subhead: **"Selected short-form video work across brands and projects."**
  - Presentation: elegant grid of vertical (9:16), muted, auto-playing clips.
  - These 4 clips are a cross-project compilation (not tied to one brand).
- **Profile photo:** received and in place at `public/images/profile.jpg`
  (PNG, 354×472 — small; a higher-res original is welcome but optional).

## 4b. DESIGN DIRECTION — "Editorial Collector"
Source: `docs/source/Aesthetic-Editorial-Collector.pdf` (user-provided aesthetic brief).
- **Mood:** premium magazine × gallery exhibition × creative strategist portfolio,
  with a subtle analog/tactile touch.
- **Typography-first:** words feel premium; hero reads like a magazine opening
  spread (big headline + supporting line). Serif display + clean sans.
- **Off-white, NOT pure white:** use ivory / warm beige / light stone (avoid
  #FFFFFF). Soft pink accent (from her portfolio) used sparingly.
- **Magazine-style grid** layout; large, authentic photography (designer-toy
  event shots, BTS, workspace) — NOT stock photos or floating device mockups.
- **Publication-style section names** suggested by the brief: Selected Work,
  Brands & Communities, Experiments, Notes & Insights, About Me. ADAPT to real
  content — do NOT create empty sections (e.g. no blog = no "Notes & Insights"
  unless mapped to the Jakarta Post published articles).
- ⚠️ **TITLE CONFLICT:** the aesthetic PDF's EXAMPLE headline says "Social Media
  Strategist & Community Builder" — that is just a STYLE example, NOT her title.
  Keep her real title: "Social Media Specialist & Content Writer" (portfolio p.1-2).
- **Structure decision (user):** "visually appealing but still engaging for
  visitors/potential clients." Plan: single-page editorial scroll + project
  detail expansion (modal/lightbox) for the heavy media.
- **Hosting:** user unsure → recommend Vercel (free, best Next.js fit); guide later.
- **Build:** user is a non-coder → I lead end-to-end, plan-first, explain simply.

## 5. OPEN questions / pending input
- **Live links DEFERRED:** user can't access LinkedIn right now — skip LinkedIn
  links for FullFind for now; can add later. Instagram/TikTok/X/LinkedIn profile
  URLs still not provided. Only @edtanforfun handle is visible in the PDF.
  Need confirmed URLs before linking anything.
- **Jakarta Post:** user's article links were Google Drive PDFs → decided to
  SELF-HOST the PDFs in the repo instead (see inventory). Live jakartapost.com
  URLs not provided (can add later). Button label must say "writing sample (PDF)",
  NOT imply it's the live published webpage.
- **Short-Form Highlights captions:** user was deciding between per-clip labels
  vs caption-free. NOT finalized — do not write captions without user input.
- **Project image/video labeling:** confirm mapping of carousel slides before
  publishing (offered to make a labeled contact sheet).
- **Missing from PDF (flag, do not invent):** skills/tools list, location,
  languages, education, full surname, any testimonials.

---

## 6. Asset inventory (all committed & pushed) ✅
```
public/images/profile.jpg                         profile photo (PNG 354x472)

public/images/projects/edtan/                     EdTan For Fun
  Edtan1_1.jpg, Edtan 1_2..1_6.jpg, Edtan 1_8.jpg Post 1 carousel images
  Edtan 1_7.mp4                                    Post 1 carousel VIDEO slide (2.8MB)
  Edtan 2_1..2_8.jpg                               Post 2 carousel images
public/videos/projects/edtan/
  Edtan video 1.mp4 (2.1M), 2.mp4 (2.6M), 3.mp4 (18M)   3 standalone reels

public/images/projects/morfo/                     Morfo Associates & Maison
  Morfo 1_1..1_5.jpg                               Post 1 carousel (5 images)
  Morfo 2_1..2_6.jpg                               Post 2 carousel (6 images)
public/videos/projects/morfo/
  Morfo video 1.mp4 (0.5M), 2.mp4 (1.9M), 3.mp4 (5.3M)  3 standalone reels

public/videos/short-form-samples/                 "Short-Form Highlights"
  Other project 1.mp4  720x1280  12s  H.264  736K
  Other project 2.mp4  720x1280  10s  H.264  2.1M
  Other project 3.mov  720x1280  24s  H.264  21M   (convert to mp4 + compress)
  Other project 4.mov  360x640   70s  H.264  21M   (convert to mp4 + compress)

public/images/projects/fullfind-kucreatives/      FullFind & Ku Creatives (Content Writer)
  fullfind-1.png   "We Know Videos" re-edit promo (Jack Shanahan)
  fullfind-2.png   AI thought-leadership post (recommending students)
  fullfind-3.png   zoolife Snow Leopard Cub edit
  (LinkedIn posts by Calvin Nathan Manik, CEO of Ku Creatives; live links deferred)

public/images/projects/jakarta-post/              The Jakarta Post (Content Writer) — screenshots
  jp-1-cancer-survivors.jpg   "To live another day..." (Health, Oct 14 2022, Premium)
  jp-2-genz-journaling.jpg    "Journaling: Gen Z's latest..." (Lifestyle, Jul 18 2022)
  jp-3-rent-iphone.jpg        "Rent-an-iPhone promises..." (Lifestyle, Jul 12 2022)
public/writing-samples/jakarta-post/              The Jakarta Post — PDF writing samples (self-hosted)
  jp-1-cancer-survivors.pdf   jp-2-genz-journaling.pdf   jp-3-rent-iphone.pdf
  (NOTE: PDF #3 draft title differs from published headline — display the published one)
```
- **File-naming convention used by user:** `<Project> <post>_<slide>` (e.g.
  `Edtan 1_3`, `Morfo 2_1`). Note inconsistency: `Edtan1_1.jpg` is missing a space.

## 7. Technical notes for the build
- **Normalize all media filenames to web-safe** (lowercase, hyphens, no spaces),
  e.g. `edtan-1-1.jpg`, `morfo-2-1.jpg`, `shortform-1.mp4`. Keep the post_slide
  logic; confirm the mapping with the user before finalizing.
- **Video pipeline (do at build time):** convert the two `.mov` → `.mp4`,
  compress ALL clips to web-optimized H.264 (~3–8 MB target), strip/keep audio
  but ensure muted autoplay + a play/unmute control, generate poster frames.
- **ffmpeg availability:** NOT preinstalled and `apt` is blocked. Install via:
  `pip install imageio-ffmpeg` then
  `python3 -c "import imageio_ffmpeg; print(imageio_ffmpeg.get_ffmpeg_exe())"`
  to get the binary path. (ffprobe not included; use `ffmpeg -i` for metadata.)
- **Environment constraints:** ephemeral container; outbound network is blocked
  (curl to google/drive → 403) so I cannot download from Drive links; PyPI pip
  install DOES work. Chat-attached images do NOT land as files — only document
  (PDF) uploads do; all image/video assets must come via GitHub web upload (or
  git). GitHub web uploader caps at 25 MB/file and ~one-file-per-commit for
  videos (multi-video commits failed with HTTP 400).

## 8. GitHub / access notes
- Write access works via the installed **Claude GitHub App** (Contents: R/W) on
  `gracesianeishere/landingpage`. (OAuth "Authorized" alone was read-only; the
  App had to be *Installed* on the repo to enable pushes.)
- `git push -u origin claude/ecstatic-dijkstra-0i9dra` works.
- `main` holds only the initial `profile.jpg` upload + README; real work lives on
  the `claude/...` branch.

---

## 9. NEXT STEPS (resume here)
Remaining workflow (per original brief, Steps 5–13):
1. Collect Content Writer assets (FullFind & Ku Creatives, Jakarta Post) — OR
   proceed to build with placeholders for those two and add later.
2. Site architecture → content architecture → information hierarchy.
3. Wireframe descriptions → design system → component architecture.
4. Implementation plan → scaffold Next.js app → build sections:
   Hero · About · Featured Projects (EdTan, Morfo) · Short-Form Highlights ·
   Project detail experience · Skills (from job scopes) · Experience timeline ·
   (Testimonials omitted) · Contact · Footer.
5. SEO: metadata, Open Graph, structured data, semantic markup.
6. Final verification audit (every claim ↔ PDF/user input).

**User is away (2026-06-17); may resume tonight or tomorrow.**
