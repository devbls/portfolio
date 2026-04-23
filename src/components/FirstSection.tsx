import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const FirstSection = () => {
  const { t } = useTranslation("firstSection");

  return (
    <section className="min-h-screen sm:h-[calc(100vh-5rem)] flex items-center justify-center relative overflow-hidden pt-20 sm:pt-0">
      <div className="container mx-auto px-6 h-full flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-4 text-center sm:text-left z-10"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-poppins text-zinc-400 text-base md:text-xl uppercase tracking-widest"
          >
            {t("title")}
          </motion.p>
          <h1 className="font-poppins text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-zinc-50 leading-tight">
            <span className="block">{t("greeting")}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-400 animate-shimmer bg-[length:200%_auto]">
              Brenno Santos
            </span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-[500px] font-poppins text-base md:text-xl text-zinc-400 leading-relaxed mx-auto sm:mx-0"
          >
            {t("subtitle")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 mt-4 justify-center sm:justify-start"
          >
            <a 
              href="#projects" 
              className="px-6 py-2.5 sm:px-8 sm:py-3 bg-purple-500 hover:bg-purple-600 text-zinc-50 font-poppins font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(152,109,255,0.3)] text-sm sm:text-base"
            >
              {t("cta_work")}
            </a>
            <a 
              href="#contacts" 
              className="px-6 py-2.5 sm:px-8 sm:py-3 border border-purple-500/30 hover:border-purple-500 text-zinc-50 font-poppins font-semibold rounded-full transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
            >
              {t("cta_contact")}
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group block sm:hidden md:block"
        >
          <div className="absolute inset-0 bg-purple-500/20 blur-[60px] sm:blur-[80px] rounded-full group-hover:bg-purple-500/30 transition-all duration-500" />
          <motion.img
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-[450px] lg:w-[450px] object-contain"
            src="/big-logo.webp"
            alt="Brenno Santos Logo"
            fetchpriority="high"
          />
        </motion.div>
      </div>
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <div className="w-5 h-8 border-2 border-zinc-500 rounded-full flex justify-center pt-1.5">
          <div className="w-0.5 h-1.5 bg-purple-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
