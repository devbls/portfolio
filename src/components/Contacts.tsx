import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { Suspense, useRef } from "react";

import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

const Contacts = () => {
  const { t } = useTranslation("contacts");
  const ref = useRef(null);
  const isVisible = useFadeInOnScroll(ref);

  return (
    <Suspense fallback={null}>
      {isVisible ? (
        <div
          id="contacts"
          className="flex flex-col items-center justify-center min-h-[50vh]"
        >
          <h2 className="font-dm text-4xl sm:text-3xl font-bold text-zinc-50">
            {t("title")}
          </h2>
          <div className="flex items-center justify-between w-40 mt-2 lg:mt-4">
            <a
              href="https://www.linkedin.com/in/brenno-santos-57399b334/"
              target="_blank"
              aria-label={t("linkedin-link-aria-label")}
            >
              <div className="p-2 text-purple-500 border border-stone-600 rounded-md hover:border-purple-500 transition-all duration-300">
                <FaLinkedinIn size={20} />
              </div>
            </a>
            <a href="https://github.com/devbls" target="_blank" aria-label={t("github-link-aria-label")}>
              <div className="p-2 text-purple-500 border border-stone-600 rounded-md hover:border-purple-500 transition-all duration-300">
                <FaGithub size={20} />
              </div>
            </a>
            <a href="mailto:devblsds@gmail.com" target="_blank" aria-label={t("email-link-aria-label")}>
              <div className="p-2 text-purple-500 border border-stone-600 rounded-md hover:border-purple-500 transition-all duration-300">
                <BiLogoGmail size={20} />
              </div>
            </a>
          </div>
        </div>
      ) : <></>}
    </Suspense>
  );
}

export default Contacts;
