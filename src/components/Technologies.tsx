import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import { TbBrandReactNative, TbBrandNextjs } from "react-icons/tb";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiReactquery,
  SiStrapi,
  SiChakraui,
} from "react-icons/si";
import { DiScrum } from "react-icons/di";
import { useTranslation } from "react-i18next";

const TECHNOLOGIES = [
  {
    name: "React",
    icon: <FaReact size={56} />,
    link: "https://react.dev",
  },
  {
    name: "HTML",
    icon: <FaHtml5 size={56} />,
    link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt size={56} />,
    link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={56} />,
    link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={56} />,
    link: "https://www.typescriptlang.org",
  },
  {
    name: "Next.js",
    icon: <TbBrandNextjs size={56} />,
    link: "https://nextjs.org",
  },
  {
    name: "React Native",
    icon: <TbBrandReactNative size={56} />,
    link: "https://reactnative.dev",
  },
  {
    name: "Git",
    icon: <FaGitAlt size={56} />,
    link: "https://git-scm.com",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={56} />,
    link: "https://tailwindcss.com",
  },
  {
    name: "Chakra UI",
    icon: <SiChakraui size={56} />,
    link: "https://chakra-ui.com",
  },
  {
    name: "Redux",
    icon: <SiRedux size={56} />,
    link: "https://redux.js.org",
  },
  {
    name: "React Query",
    icon: <SiReactquery size={56} />,
    link: "https://tanstack.com/query/latest/docs/framework/react/overview",
  },
  {
    name: "Strapi",
    icon: <SiStrapi size={56} />,
    link: "https://strapi.io",
  },
  {
    name: "Nodejs",
    icon: <FaNodeJs size={56} />,
    link: "https://nodejs.org/en",
  },
  {
    name: "Scrum",
    icon: <DiScrum size={56} />,
    link: "https://www.scrum.org",
  },
];

export const Technologies = () => {
  const { t } = useTranslation("techs");

  return (
    <div className="flex flex-col items-center justify-center min-h-[120vh] pt-24 sm:pt-16 md:pt-8">
      <h2 className="font-dm text-3xl font-bold text-zinc-50">{t("title")}</h2>
      <div className="max-w-4xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 mt-8">
        {TECHNOLOGIES.map((tech) => (
          <a href={tech.link} target="_blank">
            <div className="flex flex-col gap-4 items-center justify-center h-36 w-36 bg-black-400 text-purple-500 rounded-md border border-stone-700 sm:hover:border-purple-500 transition-all duration-300">
              <p className="font-poppins text-md mt-4">{tech.name}</p>
              <div className="mb-auto">{tech.icon}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
