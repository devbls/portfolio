import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import { Navbar } from "./components/Navbar";
import en from "./assets/translations/en.json";
import pt from "./assets/translations/pt.json";
import cv from "./assets/CVBrennoSantos.pdf";

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
    <div className="h-screen bg-black">
      <Navbar />
      <div className="h-[calc(100vh-5rem)]">
        <div className="h-full flex items-center justify-between px-20">
          <div className="flex flex-col gap-2">
            <p className="font-poppins text-5xl text-zinc-50">Olá, eu sou o</p>
            <span className="font-poppins text-5xl text-purple-500">
              Brenno Santos
            </span>
            <p className="font-poppins text-xl text-zinc-500">
              Sou desenvolvedor Frontend
            </p>
            <a href={cv} download="CV" target="_blank">
              <button className="h-8 w-36 mt-4 text-sm font-dm bg-purple-500 hover:bg-purple-600 text-zinc-200 rounded-full transition">
                Download CV
              </button>
            </a>
          </div>
          <img className="h-32 w-32" src="/logo.png" alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default App;
