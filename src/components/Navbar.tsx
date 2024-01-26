import i18next from "i18next";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { t, i18n } = useTranslation("tabs");

  return (
    <header className="flex justify-between items-center h-20 p-8">
      <img className="h-12 w-12" src="/logo.png" alt="Logo" />
      <nav className="flex gap-12">
        <span className="font-poppins text-lg text-gray transition-all duration-40 hover:text-white hover:cursor-pointer">
          {t("about")}
        </span>
        <span className="font-poppins text-lg text-gray transition-all duration-40 hover:text-white hover:cursor-pointer">
          {t("projects")}
        </span>
        <span className="font-poppins text-lg text-gray transition-all duration-40 hover:text-white hover:cursor-pointer">
          {t("techs")}
        </span>
      </nav>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-gray">
          <button
            className={`h-8 w-8 text-purple-500 font-poppins ${
              i18next.resolvedLanguage === "pt" ? "font-bold" : "font-light"
            } transition-all duration-40`}
            onClick={() => i18n.changeLanguage("pt")}
          >
            PT
          </button>
          <div className="h-8 w-0.5 bg-purple-500" />
          <button
            className={`h-8 w-8 text-purple-500 font-poppins ${
              i18next.resolvedLanguage === "en" ? "font-bold" : "font-light"
            } transition-all duration-40`}
            onClick={() => i18n.changeLanguage("en")}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
};
