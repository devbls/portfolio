import { useTranslation } from "react-i18next";

export const FirstSection = () => {
  const { t } = useTranslation("firstSection");

  return (
    <div className="min-h-[375px] h-[calc(100vh-5rem)]">
      <div className="h-full flex items-center justify-center sm:justify-between sm:px-12 md:px-16 lg:px-20 gap-2 md:gap-4">
        <div className="flex flex-col gap-2">
          <p className="font-poppins text-center sm:text-left text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-zinc-50">
            {t("title")}
          </p>
          <span className="font-poppins text-center sm:text-left text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-purple-500">
            Brenno Santos
          </span>
          <p className="w-[90vw] max-w-[375px] sm:max-w-[320px] md:w-full md:max-w-[415px] font-poppins text-center sm:text-left text-lg sm:text-base md:text-lg lg:text-xl text-zinc-500">
            {t("subtitle")}
          </p>
        </div>
        <img
          className="hidden sm:block sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-96 lg:w-96"
          src="/logo.webp"
          alt="Big Logo"
        />
      </div>
    </div>
  );
};
