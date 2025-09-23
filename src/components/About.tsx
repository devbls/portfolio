import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaFilePdf } from "react-icons/fa";

import cv from "../assets/CVBrennoSantos.pdf";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

export const About = () => {
  const { t } = useTranslation("about");
  const ref = useRef(null);
  const isVisible = useFadeInOnScroll(ref);

  return (
    <div
      ref={ref}
      id="about"
      className={`flex flex-col items-center justify-center  min-h-[100vh] sm:h-[85vh] gap-6 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <h1 className={`font-dm text-4xl sm:text-3xl font-bold text-zinc-50`}>
        {t("title")}
      </h1>
      <p className="w-9/12 sm:w-10/12 md:w-8/12 lg:w-7/12 max-w-2xl font-dm text-xl text-zinc-500 text-center leading-8">
        {t("description")}
      </p>
      <button className="flex items-center justify-center h-9 w-40 gap-1 text-sm font-dm font-semibold bg-purple-500 hover:bg-purple-600 text-zinc-200 rounded-md transition">
        <FaFilePdf />
        <a href={cv} download="CV" target="_blank">
          {t("cv")}
        </a>
      </button>
    </div>
  );
};
