import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { IoMdClose } from "react-icons/io";

type Props = {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
};

export const Drawer = ({ isOpen, setOpen }: Props) => {
  const { t, i18n } = useTranslation("tabs");

  return (
    <div
      className={
        "fixed overflow-hidden z-10 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <nav
        className={
          "flex flex-col gap-8 items-center py-16 w-screen max-w-screen-md bg-black-500 h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <a href="#about" onClick={() => setOpen(false)}>
          <span className="font-poppins text-2xl text-gray transition-all duration-40 active:text-white">
            {t("about")}
          </span>
        </a>
        <a href="#projects" onClick={() => setOpen(false)}>
          <span className="font-poppins text-2xl text-gray transition-all duration-40 active:text-white">
            {t("projects")}
          </span>
        </a>
        <a href="#techs" onClick={() => setOpen(false)}>
          <span className="font-poppins text-2xl text-gray transition-all duration-40 active:text-white">
            {t("techs")}
          </span>
        </a>
        <div className="flex items-center mt-auto">
          <button
            className={`h-10 w-12 text-purple-500 font-poppins ${
              i18next.resolvedLanguage === "pt" ? "font-bold" : "font-light"
            } transition-all duration-40 active:opacity-75 active:border rounded active:border-purple-500`}
            onClick={() => i18n.changeLanguage("pt")}
          >
            PT
          </button>
          <div className="h-10 w-0.5 bg-purple-500" />
          <button
            className={`h-10 w-12 text-purple-500 font-poppins ${
              i18next.resolvedLanguage === "en" ? "font-bold" : "font-light"
            } transition-all duration-40 active:opacity-75 active:border rounded active:border-purple-500`}
            onClick={() => i18n.changeLanguage("en")}
          >
            EN
          </button>
        </div>
      </nav>
      <button
        className={`w-8 h-8 absolute top-6 right-4 transition-all duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => {
          setOpen(false);
        }}
      >
        <IoMdClose className="text-purple-500" size={32} />
      </button>
    </div>
  );
};
