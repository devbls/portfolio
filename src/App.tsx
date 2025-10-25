import { lazy, Suspense, useEffect, useState } from "react";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import { Navbar } from "./components/Navbar";
import { FirstSection } from "./components/FirstSection";
import { About } from "./components/About";
const Projects = lazy(() => import("./components/Projects"));
const Contacts = lazy(() => import('./components/Contacts'));
const Technologies = lazy(() => import('./components/Technologies'));
import en from "./assets/translations/en.json";
import pt from "./assets/translations/pt.json";

i18next.use(initReactI18next).init({
  resources: {
    en,
    pt,
  },
  lng: "pt",
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  const [showLazySections, setShowLazySections] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 400) setShowLazySections(true);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="w-screen max-w-[100%] bg-black-500 pb-8">
      <Navbar />
      <main>
        <FirstSection />
        <About />
        <Suspense fallback={<div>Loading...</div>}>
          {showLazySections && <Projects />}
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          {showLazySections && <Technologies />}
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          {showLazySections && <Contacts />}
        </Suspense>
      </main>
    </div>
  );
}

export default App;
