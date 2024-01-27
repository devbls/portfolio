import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { useTranslation } from "react-i18next";

import cv from "../assets/CVBrennoSantos.pdf";

export const FirstSection = () => {
  const { t } = useTranslation("firstSection");

  return (
    <div className="h-[calc(100vh-5rem)]">
      <div className="h-full flex items-center justify-between px-20">
        <div className="flex flex-col gap-2">
          <p className="font-poppins text-5xl text-zinc-50">{t("title")}</p>
          <span className="font-poppins text-5xl text-purple-500">
            Brenno Santos
          </span>
          <p className="font-poppins text-xl text-zinc-500">{t("subtitle")}</p>
          <div className="flex items-center mt-4 gap-6">
            <button className="h-8 w-36 text-sm font-dm bg-purple-500 hover:bg-purple-600 text-zinc-200 rounded-full transition">
              <a href={cv} download="CV" target="_blank">
                Download CV
              </a>
            </button>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/brenno-luis/"
                target="_blank"
              >
                <div className="p-2 text-purple-500 border border-stone-600 rounded-md hover:border-purple-500 transition-all duration-300">
                  <FaLinkedinIn size={18} />
                </div>
              </a>
              <a href="https://github.com/devbls" target="_blank">
                <div className="p-2 text-purple-500 border border-stone-600 rounded-md hover:border-purple-500 transition-all duration-300">
                  <FaGithub size={18} />
                </div>
              </a>
              <a href="mailto:devblsds@gmail.com" target="_blank">
                <div className="p-2 text-purple-500 border border-stone-600 rounded-md hover:border-purple-500 transition-all duration-300">
                  <BiLogoGmail size={18} />
                </div>
              </a>
            </div>
          </div>
        </div>
        <img className="h-128 w-128" src="/logo.webp" alt="Big Logo" />
      </div>
    </div>
  );
};
