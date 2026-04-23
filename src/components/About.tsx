import { useTranslation } from "react-i18next";
import { FaFilePdf, FaCode, FaRocket, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

import cv from "../assets/CVBrennoSantos.pdf";

export const About = () => {
  const { t } = useTranslation("about");

  const stats = [
    { icon: <FaCode className="text-purple-500" />, label: t("stat_exp"), value: "5+ Anos" },
    { icon: <FaRocket className="text-purple-500" />, label: t("stat_projects"), value: "20+" },
    { icon: <FaLightbulb className="text-purple-500" />, label: t("stat_clients"), value: "15+" },
  ];

  return (
    <section id="about" className="py-24 container mx-auto px-6">
      <div className="flex flex-col items-center gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-zinc-50 mb-4">
            {t("title")}
          </h2>
          <div className="h-1.5 w-20 bg-purple-500 mx-auto rounded-full" />
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <p className="font-poppins text-lg md:text-xl text-zinc-400 leading-relaxed text-justify sm:text-left">
              {t("description")}
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-fit px-8 py-3 gap-2 font-poppins font-semibold bg-purple-500 hover:bg-purple-600 text-zinc-50 rounded-full transition shadow-lg shadow-purple-500/20"
            >
              <FaFilePdf size={20} />
              <a href={cv} download="CV" target="_blank">
                {t("cv")}
              </a>
            </motion.button>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-3xl flex flex-col items-center text-center gap-4 hover:border-purple-500/50 transition-colors"
              >
                <div className="p-4 bg-purple-500/10 rounded-2xl">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-zinc-50 font-poppins">{stat.value}</h3>
                  <p className="text-zinc-400 font-poppins">{stat.label}</p>
                </div>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="p-8 bg-gradient-to-br from-purple-600/20 to-zinc-900/50 backdrop-blur-md border border-purple-500/20 rounded-3xl flex flex-col justify-center gap-2 hover:border-purple-500/50 transition-colors"
            >
              <h4 className="text-zinc-50 font-bold font-poppins">{t("skill_title")}</h4>
              <p className="text-zinc-400 font-poppins text-sm">
                {t("skill_desc")}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
