import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation("about");

  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center h-[85vh] gap-6"
    >
      <h1 className="font-dm text-3xl font-bold text-zinc-50">{t("title")}</h1>
      <p className="w-3/6 font-dm text-xl text-zinc-500 text-center leading-8">
        {t("description")}
      </p>
    </div>
  );
};
