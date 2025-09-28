import i18next from "i18next";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoMenuOutline } from "react-icons/io5";

import { Drawer } from "./Drawer";

export const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const { t, i18n } = useTranslation("tabs");

  return (
    <header className="w-full flex items-center h-20 bg-black-500 sticky -top-4 z-50 shadow-xl">
      <div className="w-full flex justify-between items-center h-16 px-4 bg-black-500 sticky top-0">
        <img className="h-10 w-10 md:h-12 md:w-12" src="/logo.png" alt="Logo" />
        <nav className="hidden sm:flex gap-12">
          <a href="#about" aria-label={`${t("nav-link-aria-label")} ${t("about")}`}>
            <span className="font-poppins md:text-lg text-gray transition-all duration-40 hover:text-white hover:cursor-pointer">
              {t("about")}
            </span>
          </a>
          <a href="#projects" aria-label={`${t("nav-link-aria-label")} ${t("projects")}`}>
            <span className="font-poppins md:text-lg text-gray transition-all duration-40 hover:text-white hover:cursor-pointer">
              {t("projects")}
            </span>
          </a>
          <a href="#techs" aria-label={`${t("nav-link-aria-label")} ${t("techs")}`}>
            <span className="font-poppins md:text-lg text-gray transition-all duration-40 hover:text-white hover:cursor-pointer">
              {t("techs")}
            </span>
          </a>
          <a href="#contacts" aria-label={`${t("nav-link-aria-label")} ${t("contacts")}`}>
            <span className="font-poppins md:text-lg text-gray transition-all duration-40 hover:text-white hover:cursor-pointer">
              {t("contacts")}
            </span>
          </a>
        </nav>
        <div className="hidden sm:flex items-center gap-2">
          <button
            className={`h-8 w-8 text-purple-500 font-poppins ${
              i18next.resolvedLanguage === "pt"
                ? "font-bold underline underline-offset-4"
                : "font-light"
            } transition-all duration-40 hover:opacity-80 active:opacity-65`}
            onClick={() => i18n.changeLanguage("pt")}
          >
            PT
          </button>
          <div className="h-8 w-0.5 bg-purple-500" />
          <button
            className={`h-8 w-8 text-purple-500 font-poppins ${
              i18next.resolvedLanguage === "en"
                ? "font-bold underline underline-offset-4"
                : "font-light"
            } transition-all duration-40 hover:opacity-80 active:opacity-65`}
            onClick={() => i18n.changeLanguage("en")}
          >
            EN
          </button>
        </div>
        <button
          className="block sm:hidden hover:opacity-75 active:opacity-60 transition"
          onClick={() => setDrawerOpen((prevState) => !prevState)}
        >
          <IoMenuOutline className="text-purple-500" size={32} />
        </button>
        <Drawer isOpen={isDrawerOpen} setOpen={setDrawerOpen} />
      </div>
    </header>
  );
};
