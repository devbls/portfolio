import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaNodeJs,
  FaAngular,
  FaDocker,
  FaFigma,
} from "react-icons/fa";
import { TbBrandReactNative, TbBrandNextjs } from "react-icons/tb";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiStrapi,
  SiChakraui,
  SiVtex,
} from "react-icons/si";
import { DiScrum } from "react-icons/di";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const TECHNOLOGIES = [
  { name: "React", icon: <FaReact size={40} />, link: "https://react.dev" },
  { name: "HTML", icon: <FaHtml5 size={40} />, link: "https://developer.mozilla.org" },
  { name: "CSS", icon: <FaCss3Alt size={40} />, link: "https://developer.mozilla.org" },
  { name: "JS", icon: <SiJavascript size={40} />, link: "https://developer.mozilla.org" },
  { name: "TS", icon: <SiTypescript size={40} />, link: "https://www.typescriptlang.org" },
  { name: "Next.js", icon: <TbBrandNextjs size={40} />, link: "https://nextjs.org" },
  { name: "VTEX", icon: <SiVtex size={40} />, link: "https://vtex.com/" },
  { name: "Nodejs", icon: <FaNodeJs size={40} />, link: "https://nodejs.org" },
  { name: "Mobile", icon: <TbBrandReactNative size={40} />, link: "https://reactnative.dev" },
  { name: "Git", icon: <FaGitAlt size={40} />, link: "https://git-scm.com" },
  { name: "Angular", icon: <FaAngular size={40} />, link: "https://angular.dev/" },
  { name: "Tailwind", icon: <SiTailwindcss size={40} />, link: "https://tailwindcss.com" },
  { name: "Chakra UI", icon: <SiChakraui size={40} />, link: "https://chakra-ui.com" },
  { name: "Redux", icon: <SiRedux size={40} />, link: "https://redux.js.org" },
  { name: "Strapi", icon: <SiStrapi size={40} />, link: "https://strapi.io" },
  { name: "Scrum", icon: <DiScrum size={40} />, link: "https://www.scrum.org" },
  { name: "Docker", icon: <FaDocker size={40} />, link: "https://www.docker.com/" },
  { name: "Figma", icon: <FaFigma size={40} />, link: "https://www.figma.com/" },
];

const Technologies = () => {
  const { t } = useTranslation("techs");

  const duplicatedTechs = [...TECHNOLOGIES, ...TECHNOLOGIES];

  return (
    <section id="techs" className="py-24 container mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-4 mb-16"
      >
        <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-zinc-50">
          {t("title")}
        </h2>
        <div className="h-1.5 w-20 bg-purple-500 rounded-full" />
      </motion.div>
      <div className="relative flex flex-col gap-8">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-8 pr-8"
          >
            {duplicatedTechs.map((tech, i) => (
              <a
                key={i}
                href={tech.link}
                target="_blank"
                className="flex-shrink-0 w-32 h-32 bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-2xl flex flex-col items-center justify-center gap-2 group hover:border-purple-500/50 transition-colors"
              >
                <div className="text-purple-500 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <span className="text-zinc-400 font-poppins text-xs font-semibold group-hover:text-zinc-50 transition-colors">
                  {tech.name}
                </span>
              </a>
            ))}
          </motion.div>
        </div>
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            animate={{ x: [-1920, 0] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-8 pr-8"
          >
            {[...duplicatedTechs].reverse().map((tech, i) => (
              <a
                key={i}
                href={tech.link}
                target="_blank"
                className="flex-shrink-0 w-32 h-32 bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-2xl flex flex-col items-center justify-center gap-2 group hover:border-purple-500/50 transition-colors"
              >
                <div className="text-purple-500 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <span className="text-zinc-400 font-poppins text-xs font-semibold group-hover:text-zinc-50 transition-colors">
                  {tech.name}
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
