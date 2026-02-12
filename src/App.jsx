import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import ScrollTopButton from "./components/ScrollTopButton.jsx";
import { useI18n } from "./state/i18n.jsx";

export default function App() {
  const { lang } = useI18n();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const ids = ["home", "about", "projects", "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { root: null, threshold: [0.2, 0.35, 0.5, 0.75] }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="app">
      <Header activeSection={activeSection} />
      <main className="content">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <ScrollTopButton />
    </div>
  );
}
