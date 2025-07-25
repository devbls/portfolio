import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import { Navbar } from "./components/Navbar";
import { FirstSection } from "./components/FirstSection";
import { About } from "./components/About";
import { Technologies } from "./components/Technologies";
import { Projects } from "./components/Projects";
import { Contacts } from "./components/Contacts";
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
  return (
    <div className="w-screen max-w-[100%] bg-black-500 pb-8">
      <Navbar />
      <main>
        <FirstSection />
        <About />
        <Projects />
        <div id="techs" />
        <Technologies />
        <Contacts />
      </main>
    </div>
  );
}

export default App;
