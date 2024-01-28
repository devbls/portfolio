import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation("about");

  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center  min-h-[100vh] sm:h-[85vh] gap-6"
    >
      <h1 className="font-dm text-4xl sm:text-3xl font-bold text-zinc-50">
        {t("title")}
      </h1>
      <p className="w-9/12 sm:w-10/12 md:w-8/12 lg:w-7/12 max-w-2xl font-dm text-xl text-zinc-500 text-center leading-8">
        {t("description")}
      </p>
    </div>
  );
};
