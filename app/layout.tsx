import type { Metadata, Viewport } from "next";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import { profile } from "@/lib/content";

const siteUrl = "https://gracesiane.vercel.app"; // update when a custom domain is connected
const description =
  "Gracesiane J. — Social Media Specialist & Content Writer. I help personal brands and businesses grow across Instagram, TikTok, X, and LinkedIn through content strategy, copywriting, and short-form video.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gracesiane J. — Social Media Specialist & Content Writer",
    template: "%s · Gracesiane J.",
  },
  description,
  keywords: [
    "Gracesiane J.",
    "Social Media Specialist",
    "Content Writer",
    "Content Strategy",
    "Copywriting",
    "Short-form video",
    "Social media management",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Gracesiane J. — Social Media Specialist & Content Writer",
    description,
    siteName: "Gracesiane J. Portfolio",
    images: [{ url: "/media/profile.jpg", width: 354, height: 472, alt: profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gracesiane J. — Social Media Specialist & Content Writer",
    description,
    images: ["/media/profile.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f6f2ea",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Social Media Specialist & Content Writer",
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  url: siteUrl,
  knowsAbout: [
    "Social media strategy",
    "Content writing",
    "Copywriting",
    "Short-form video",
    "Community growth",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-canvas"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
