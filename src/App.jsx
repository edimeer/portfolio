import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => (
  <div id="top" className="min-h-screen">
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:font-mono focus:text-sm focus:text-accent-fg"
    >
      Skip to content
    </a>
    <Header />
    <main id="main">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
