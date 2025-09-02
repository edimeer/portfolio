import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import KeyMetricsSection from "./components/KeyMetricsSection";
import ProjectSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";
import ExperienceSection from "./components/ExperienceSection";
import TestimonialSection from "./components/TestimonialSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-200 min-h-screen">
      <Header />
      <main id="main">
        <HeroSection />
        <KeyMetricsSection />
        <ProjectSection />
        <SkillSection />
        <ExperienceSection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
export default App
