import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Practice } from "@/components/Practice";
import { SelectedWork } from "@/components/SelectedWork";
import { ShortFormHighlights } from "@/components/ShortFormHighlights";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <About />
        <Practice />
        <SelectedWork />
        <ShortFormHighlights />
        <Experience />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
