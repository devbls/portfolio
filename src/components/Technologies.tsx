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

const TECHNOLOGIES = [
  {
    name: "React",
    icon: <FaReact size={56} />,
  },
  {
    name: "HTML",
    icon: <FaHtml5 size={56} />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt size={56} />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={56} />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={56} />,
  },
  {
    name: "Next.js",
    icon: <TbBrandNextjs size={56} />,
  },
  {
    name: "React Native",
    icon: <TbBrandReactNative size={56} />,
  },
  {
    name: "Git",
    icon: <FaGitAlt size={56} />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={56} />,
  },
  {
    name: "Chakra UI",
    icon: <SiChakraui size={56} />,
  },
  {
    name: "Redux",
    icon: <SiRedux size={56} />,
  },
  {
    name: "React Query",
    icon: <SiReactquery size={56} />,
  },
  {
    name: "Strapi",
    icon: <SiStrapi size={56} />,
  },
  {
    name: "Nodejs",
    icon: <FaNodeJs size={56} />,
  },
  {
    name: "Scrum",
    icon: <DiScrum size={56} />,
  },
];

export const Technologies = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[120vh]">
      <h2 className="font-dm text-3xl font-bold text-zinc-50">Tecnologias</h2>
      <div className="max-w-4xl grid grid-cols-[repeat(auto-fill,_minmax(144px,_1fr))] gap-6 mt-8">
        {TECHNOLOGIES.map((tech) => (
          <div className="flex flex-col gap-4 items-center justify-center h-36 w-36 bg-black-400 text-purple-500 rounded-md border border-stone-700 hover:border-purple-500 transition-all duration-300">
            <p className="font-poppins text-md mt-4">{tech.name}</p>
            <div className="mb-auto">{tech.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
