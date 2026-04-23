import i18next from "i18next";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { IoMenuOutline } from "react-icons/io5";
import { motion } from "framer-motion";

import { Drawer } from "./Drawer";

export const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { t, i18n } = useTranslation("tabs");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled 
          ? "bg-zinc-900/80 backdrop-blur-xl border-b border-zinc-800/50 shadow-2xl" 
          : "bg-transparent"
      }`}
    >
      <div className="w-full h-20 px-6 sm:px-12 flex items-center justify-between">
        <motion.img
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="h-10 w-10 object-contain cursor-pointer"
          src="/logo.webp"
          alt="Logo"
          fetchpriority="high"
        />
        <div className="hidden md:flex items-center gap-12">
          {["about", "projects", "techs", "contacts"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative group"
              aria-label={`${t("nav-link-aria-label")} ${t(item)}`}
            >
              <span className="font-poppins text-sm font-medium text-zinc-400 group-hover:text-zinc-50 transition-colors">
                {t(item)}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center bg-zinc-800/50 rounded-full p-1 border border-zinc-700/50">
            <button
              className={`px-4 py-1.5 rounded-full text-xs font-poppins transition-all ${
                i18next.resolvedLanguage === "pt"
                  ? "bg-purple-500 text-zinc-50 shadow-lg shadow-purple-500/20"
                  : "text-zinc-400 hover:text-zinc-50"
              }`}
              onClick={() => i18n.changeLanguage("pt")}
            >
              PT
            </button>
            <button
              className={`px-4 py-1.5 rounded-full text-xs font-poppins transition-all ${
                i18next.resolvedLanguage === "en"
                  ? "bg-purple-500 text-zinc-50 shadow-lg shadow-purple-500/20"
                  : "text-zinc-400 hover:text-zinc-50"
              }`}
              onClick={() => i18n.changeLanguage("en")}
            >
              EN
            </button>
          </div>
          <button
            aria-label={t("drawer-icon-aria-label")}
            className="md:hidden p-2 text-purple-500 hover:bg-purple-500/10 rounded-xl transition-colors"
            onClick={() => setDrawerOpen((prevState) => !prevState)}
          >
            <IoMenuOutline size={32} />
          </button>
        </div>
      </div>
      <Drawer isOpen={isDrawerOpen} setOpen={setDrawerOpen} />
    </header>
  );
};
