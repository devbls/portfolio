import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import { Navbar } from "./components/Navbar";
import { FirstSection } from "./components/FirstSection";
import { About } from "./components/About";
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
    <div className="bg-black">
      <Navbar />
      <div>
        <FirstSection />
        <About />
      </div>
    </div>
  );
}

export default App;
