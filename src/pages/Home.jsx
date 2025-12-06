import { Contact } from "lucide-react";
import { AboutMe } from "../components/AboutMe";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProjectSection } from "../components/ProjectSection";
import { Skills } from "../components/Skills";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { ContactS } from "../components/ContactS";
import { Footer } from "../components/Footer";

export const Home = () => {
  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <ThemeToggle />

    <StarBackground />

    <Navbar />


    <main>
      <HeroSection />
      <AboutMe />
      <Skills />
      <ProjectSection />
      <ContactS />
    </main>

    <Footer />

    </div>;
}