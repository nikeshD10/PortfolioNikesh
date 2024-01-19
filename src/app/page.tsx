import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import GeneralComponent from "./components/GeneralComponent";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SkillSet from "./components/SkillSet";

export default function Home() {
  return (
    // Previous background color : #121212
    <main className="flex min-h-screen flex-col bg-[#1d192e]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <GeneralComponent />
        <AboutSection />
        <SkillSet />
        <Projects />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
