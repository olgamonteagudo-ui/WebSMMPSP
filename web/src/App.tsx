import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { FeaturedWebinar } from "@/components/FeaturedWebinar";
import { About } from "@/components/About";
import { Areas } from "@/components/Areas";
import { Timeline } from "@/components/Timeline";
import { Activities } from "@/components/Activities";
import { Board } from "@/components/Board";
import { News } from "@/components/News";
import { Membership } from "@/components/Membership";
import { Links } from "@/components/Links";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-stone-700">
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand-800 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <FeaturedWebinar />
        <About />
        <Areas />
        <Timeline />
        <Activities />
        <Board />
        <News />
        <Membership />
        <Links />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
