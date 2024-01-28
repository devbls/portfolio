import { useTranslation } from "react-i18next";
import { FaExternalLinkAlt } from "react-icons/fa";

const PROJECTS = [
  {
    link: "https://www.klx.pt",
    name: "KLx Website",
    thumb: "klx.png",
    alt: "KLX Project thumb",
  },
  {
    link: "https://www.primeit.pt",
    name: "PrimeIT Website",
    thumb: "primeit.png",
    alt: "PrimeIT Project thumb",
  },
];

export const Projects = () => {
  const { t } = useTranslation("projects");

  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center min-h-[120vh]"
    >
      <h2 className="font-dm text-3xl font-bold text-zinc-50">{t("title")}</h2>
      <div className="max-w-5xl grid grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] gap-6 mt-8">
        {PROJECTS.map((project) => (
          <a
            className="w-[320px] h-[200px] group rounded-md relative overflow-hidden transition-all duration-300 border border-stone-700 hover:border-purple-500"
            href={project.link}
            target="_blank"
          >
            <div className="w-fit h-fit absolute left-0 right-0 bottom-0 top-0 m-auto z-20 transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100">
              <p className="font-dm font-bold text-xl text-purple-500">
                {project.name}
              </p>
            </div>
            <img
              className="w-[320px] h-[200px] object-cover transition-all duration-300 group-hover:scale-105 group-hover:blur-[1px]"
              src={`/thumbs/${project.thumb}`}
              alt={project.alt}
            />
            <div className="hidden h-[200px] w-[320px] bg-black-400 opacity-70 content-[''] group-hover:block absolute top-0 left-0 z-10"></div>
            <div className="invisible group-hover:visible block absolute top-2 right-2 z-10 text-purple-500 transition-all duration-300 opacity-0 group-hover:opacity-100">
              <FaExternalLinkAlt size={16} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
