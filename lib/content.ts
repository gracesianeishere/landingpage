/**
 * SINGLE SOURCE OF TRUTH for all site content.
 * Every factual claim below is traceable to the portfolio PDF
 * (docs/source/Portfolio-Gracesiane.pdf) — page refs noted in comments.
 * Do not add facts that are not in the PDF or explicitly provided by the user.
 */

export type MediaItem = {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
};

export type Metric = { value: string; label: string };

export type Article = {
  title: string;
  section: string;
  date: string;
  premium?: boolean;
  image: string;
  pdf: string;
};

export type Project = {
  id: string;
  name: string;
  discipline: "Social Media Specialist" | "Content Writer";
  category: string;
  period: string;
  summary: string; // PDF wording
  contribution?: string;
  collaborators?: string;
  coverKind?: "image" | "linkedin" | "press"; // "image" = photo cover (default)
  cover: MediaItem;
  gallery?: MediaItem[]; // single gallery (e.g. FullFind)
  galleries?: { title: string; items: MediaItem[] }[]; // multiple distinct carousels
  reels?: MediaItem[];
  metrics?: Metric[];
  articles?: Article[];
  note?: string;
};

/* ---------------------------------- Profile (p.1–2, p.13) --------------------------------- */
export const profile = {
  name: "Gracesiane J.",
  firstName: "Gracesiane",
  title: "Social Media Specialist & Content Writer",
  // p.2 — verbatim intent, lightly tidied for the web
  intro:
    "Greetings! I'm Gracesiane — a Social Media Specialist and Content Writer.",
  summary:
    "I specialize in content planning and ideation, social media management, and copywriting. I help personal brands and businesses grow across Instagram, TikTok, X, and LinkedIn.",
  tagline: "Welcome to Gracesiane's little space of creativity.", // p.2
  platforms: ["Instagram", "TikTok", "X", "LinkedIn"], // p.2
  photo: { src: "/media/profile.jpg", alt: "Portrait of Gracesiane J." },
  email: "work.gsjaklyn@gmail.com", // p.13
  phone: "+6285647989835", // p.13
  phoneHref: "+6285647989835",
};

/* ----------------------------- Disciplines / capabilities (p.4, p.10) ---------------------------- */
export const disciplines = [
  {
    id: "social-media",
    title: "Social Media Specialist",
    blurb:
      "End-to-end social content — from strategy and research to production, management, and analysis.",
    scope: [
      "Content plan & strategy",
      "Copywriting",
      "Trend & content research",
      "Content production",
      "Social media management",
      "Performance analysis",
    ], // p.4
  },
  {
    id: "content-writer",
    title: "Content Writer",
    blurb:
      "Researched, well-crafted writing — from idea to polished, published copy.",
    scope: [
      "Topic research",
      "Content ideation",
      "Content writing",
      "Copywriting",
    ], // p.10
  },
];

/* ------------------------------------- Helpers ------------------------------------- */
const img = (src: string, alt: string): MediaItem => ({ type: "image", src, alt });
const vid = (src: string, poster: string, alt: string): MediaItem => ({
  type: "video",
  src,
  poster,
  alt,
});

/* ------------------------------------- Projects ------------------------------------ */
export const projects: Project[] = [
  /* ---------------- EdTan For Fun (p.5–7) ---------------- */
  {
    id: "edtan",
    name: "EdTan For Fun",
    discipline: "Social Media Specialist",
    category: "Designer toys & creative culture",
    period: "2024 — Present",
    summary:
      "A media platform focusing on designer toys, art toys, collectibles, and creative culture.", // p.5
    cover: img("/media/edtan/post-1-01.jpg", "EdTan For Fun — Behind the Shelf carousel cover"),
    galleries: [
      {
        title: "Carousel 01",
        items: [
          img("/media/edtan/post-1-01.jpg", "EdTan — carousel 1, slide 1"),
          img("/media/edtan/post-1-02.jpg", "EdTan — carousel 1, slide 2"),
          img("/media/edtan/post-1-03.jpg", "EdTan — carousel 1, slide 3"),
          img("/media/edtan/post-1-04.jpg", "EdTan — carousel 1, slide 4"),
          img("/media/edtan/post-1-05.jpg", "EdTan — carousel 1, slide 5"),
          img("/media/edtan/post-1-06.jpg", "EdTan — carousel 1, slide 6"),
          vid("/media/edtan/post-1-07.mp4", "/media/edtan/post-1-07.jpg", "EdTan — carousel 1, video slide"),
          img("/media/edtan/post-1-08.jpg", "EdTan — carousel 1, slide 8"),
        ],
      },
      {
        title: "Carousel 02",
        items: [
          img("/media/edtan/post-2-01.jpg", "EdTan — carousel 2, slide 1"),
          img("/media/edtan/post-2-02.jpg", "EdTan — carousel 2, slide 2"),
          img("/media/edtan/post-2-03.jpg", "EdTan — carousel 2, slide 3"),
          img("/media/edtan/post-2-04.jpg", "EdTan — carousel 2, slide 4"),
          img("/media/edtan/post-2-05.jpg", "EdTan — carousel 2, slide 5"),
          img("/media/edtan/post-2-06.jpg", "EdTan — carousel 2, slide 6"),
          img("/media/edtan/post-2-07.jpg", "EdTan — carousel 2, slide 7"),
          img("/media/edtan/post-2-08.jpg", "EdTan — carousel 2, slide 8"),
        ],
      },
    ],
    reels: [
      vid("/media/edtan/reel-1.mp4", "/media/edtan/reel-1.jpg", "EdTan short-form reel 1"),
      vid("/media/edtan/reel-2.mp4", "/media/edtan/reel-2.jpg", "EdTan short-form reel 2"),
      vid("/media/edtan/reel-3.mp4", "/media/edtan/reel-3.jpg", "EdTan short-form reel 3"),
    ],
    metrics: [
      { value: "23.7K", label: "Views on a single post" }, // p.6
      { value: "8,856", label: "Accounts reached" }, // p.6
      { value: "18.7K", label: "Top reel views" }, // p.7
      { value: "104", label: "Follows from one post" }, // p.6
    ],
  },

  /* ---------------- Morfo Associates & Maison (p.8–9) ---------------- */
  {
    id: "morfo",
    name: "Morfo Associates & Maison",
    discipline: "Social Media Specialist",
    category: "Architecture & interior design",
    period: "2025 — Present",
    summary:
      "Social content for an architectural designer & residential interior design consultant.", // p.8
    cover: img("/media/morfo/post-1-01.jpg", "Morfo Associates & Maison — interior render"),
    galleries: [
      {
        title: "Carousel 01",
        items: [
          img("/media/morfo/post-1-01.jpg", "Morfo — carousel 1, slide 1"),
          img("/media/morfo/post-1-02.jpg", "Morfo — carousel 1, slide 2"),
          img("/media/morfo/post-1-03.jpg", "Morfo — carousel 1, slide 3"),
          img("/media/morfo/post-1-04.jpg", "Morfo — carousel 1, slide 4"),
          img("/media/morfo/post-1-05.jpg", "Morfo — carousel 1, slide 5"),
        ],
      },
      {
        title: "Carousel 02",
        items: [
          img("/media/morfo/post-2-01.jpg", "Morfo — carousel 2, slide 1"),
          img("/media/morfo/post-2-02.jpg", "Morfo — carousel 2, slide 2"),
          img("/media/morfo/post-2-03.jpg", "Morfo — carousel 2, slide 3"),
          img("/media/morfo/post-2-04.jpg", "Morfo — carousel 2, slide 4"),
          img("/media/morfo/post-2-05.jpg", "Morfo — carousel 2, slide 5"),
          img("/media/morfo/post-2-06.jpg", "Morfo — carousel 2, slide 6"),
        ],
      },
    ],
    reels: [
      vid("/media/morfo/reel-1.mp4", "/media/morfo/reel-1.jpg", "Morfo short-form reel 1"),
      vid("/media/morfo/reel-2.mp4", "/media/morfo/reel-2.jpg", "Morfo short-form reel 2"),
      vid("/media/morfo/reel-3.mp4", "/media/morfo/reel-3.jpg", "Morfo short-form reel 3"),
    ],
    metrics: [
      { value: "2,948", label: "Views on a single post" }, // p.8
      { value: "811", label: "Accounts reached" }, // p.8
      { value: "1,419", label: "Top reel views" }, // p.9
    ],
  },

  /* ---------------- FullFind & Ku Creatives (p.11) ---------------- */
  {
    id: "fullfind",
    name: "FullFind & Ku Creatives",
    discipline: "Content Writer",
    category: "Thought leadership · LinkedIn",
    period: "2025",
    summary: "A remote job academy & recruiting, digital marketing agency.", // p.11
    contribution:
      "Developed thought leadership content for the CEO's LinkedIn presence.", // p.11
    note: "Written for Calvin Nathan Manik, CEO of Ku Creatives.", // p.11
    coverKind: "linkedin",
    cover: img("/media/fullfind/post-1.png", "FullFind & Ku Creatives — LinkedIn post"),
    gallery: [
      img("/media/fullfind/post-1.png", "LinkedIn post — 'We Know Videos' re-edit project"),
      img("/media/fullfind/post-2.png", "LinkedIn post — leveraging AI as a creative assistant"),
      img("/media/fullfind/post-3.png", "LinkedIn post — zoolife Snow Leopard Cub edit"),
    ],
  },

  /* ---------------- The Jakarta Post (p.12) ---------------- */
  {
    id: "jakarta-post",
    name: "The Jakarta Post",
    discipline: "Content Writer",
    category: "Published journalism",
    period: "2022",
    summary:
      "Articles published on The Jakarta Post through a media agency engagement.", // p.12
    coverKind: "press",
    cover: img("/media/jakarta/jp-1-cancer-survivors.jpg", "The Jakarta Post article headline"),
    gallery: [],
    articles: [
      {
        title: "To live another day: cancer survivors gain strength from trials",
        section: "Culture · Health",
        date: "October 14, 2022",
        premium: true,
        image: "/media/jakarta/jp-1-cancer-survivors.jpg",
        pdf: "/writing-samples/jakarta-post/jp-1-cancer-survivors.pdf",
      },
      {
        title: "Journaling: Gen Z's latest form of self-expression and therapy",
        section: "Culture · Lifestyle",
        date: "July 18, 2022",
        image: "/media/jakarta/jp-2-genz-journaling.jpg",
        pdf: "/writing-samples/jakarta-post/jp-2-genz-journaling.pdf",
      },
      {
        title: "Rent-an-iPhone promises full experience without breaking the bank",
        section: "Culture · Lifestyle",
        date: "July 12, 2022",
        image: "/media/jakarta/jp-3-rent-iphone.jpg",
        pdf: "/writing-samples/jakarta-post/jp-3-rent-iphone.pdf",
      },
    ],
  },
];

/* --------------------------- Short-Form Highlights (user-provided) -------------------------- */
export const shortForm = {
  heading: "Short-Form Highlights",
  subhead: "Selected short-form video work across brands and projects.",
  clips: [
    vid("/media/shortform/clip-1.mp4", "/media/shortform/clip-1.jpg", "Short-form highlight 1"),
    vid("/media/shortform/clip-2.mp4", "/media/shortform/clip-2.jpg", "Short-form highlight 2"),
    vid("/media/shortform/clip-3.mp4", "/media/shortform/clip-3.jpg", "Short-form highlight 3"),
    vid("/media/shortform/clip-4.mp4", "/media/shortform/clip-4.jpg", "Short-form highlight 4"),
  ],
};

/* --------------------------------- Experience timeline ------------------------------- */
export const experience = [
  { period: "2024 — Present", role: "Social Media Specialist", org: "EdTan For Fun" },
  { period: "2025 — Present", role: "Social Media Specialist", org: "Morfo Associates & Maison" },
  { period: "2025", role: "Content Writer", org: "FullFind & Ku Creatives" },
  { period: "2022", role: "Content Writer", org: "The Jakarta Post" },
];

/* ------------------------------------ Navigation ----------------------------------- */
export const nav = [
  { id: "about", label: "About" },
  { id: "practice", label: "What I Do" },
  { id: "work", label: "Selected Work" },
  { id: "highlights", label: "Highlights" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];
