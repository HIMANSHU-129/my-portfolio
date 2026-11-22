import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import InfiniteTechMarquee from "./components/sections/InfiniteTechMarquee";
import TechStack from "./components/sections/TechStack";
import DeveloperJourney from "./components/sections/DeveloperJourney";
import DeveloperValues from "./components/sections/DeveloperValues";
import Projects from "./components/Projects";
import Contact from "./components/sections/Contact";
import SectionDivider from "./components/sections/SectionDivider";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-slate-100 bg-transparent">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <InfiniteTechMarquee />
        <SectionDivider />
        <TechStack />
        <SectionDivider />
        <DeveloperJourney />
        <SectionDivider />
        <DeveloperValues />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
