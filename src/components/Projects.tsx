import { useTranslation } from "react-i18next";
import { FaExternalLinkAlt } from "react-icons/fa";

const PROJECTS = [
  {
    link: "https://www.telhanorte.com.br/",
    name: "Telhanorte",
    thumb: "telhanorte.png",
    alt: "Telhanorte"
  },
  {
    link: "https://www.enviapecas.com.br/",
    name: "Envia Peças",
    thumb: "enviapecas.png",
    alt: "Envia Peças"
  },
  {
    link: "https://www.tumelero.com.br/",
    name: "Tumelero",
    thumb: "tumelero.png",
    alt: "Tumelero"
  },
  {
    link: "https://www.ascona.com.br/",
    name: "Ascona",
    thumb: "ascona.png",
    alt: "Ascona"
  },
  {
    link: "https://www.intimastore.com.br/",
    name: "Intima Store",
    thumb: "intimastore.png",
    alt: "Intima Store"
  },
  {
    link: "https://www.conscienciajeans.com.br/",
    name: "Consciência Jeans",
    thumb: "conscienciajeans.png",
    alt: "Consciência Jeans"
  },
  {
    link: "https://espaco-nandi.vercel.app/",
    name: "Espaço Nandi",
    thumb: "espaco-nandi.png",
    alt: "Espaço Nandi"
  },
  {
    link: "https://www.klx.pt",
    name: "KLx Website",
    thumb: "klx.png",
    alt: "KLX",
  },
  {
    link: "https://www.primeit.pt",
    name: "PrimeIT Website",
    thumb: "primeit.png",
    alt: "PrimeIT"
  },
  {
    link: "https://www.primenearshore.com",
    name: "Prime Nearshore Website",
    thumb: "nearshore.png",
    alt: "Prime Nearshore"
  },
];

export const Projects = () => {
  const { t } = useTranslation("projects");

  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center min-h-[120vh] pt-24 sm:pt-8 scroll-mt-20"
    >
      <h2 className="font-dm text-4xl sm:text-3xl font-bold text-zinc-50">
        {t("title")}
      </h2>
      <div className="max-w-5xl grid md:grid-cols-2 lg:grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] gap-12 lg:gap-6 mt-12 sm:mt-8">
        {PROJECTS.map((project) => (
          <a
            className="w-[280px] h-[180px] md:w-[320px] md:h-[200px] group rounded-md relative overflow-hidden transition-all duration-300 border border-purple-500 sm:border-stone-700 sm:hover:border-purple-500"
            href={project.link}
            target="_blank"
          >
            <div className="w-fit h-fit absolute left-0 right-0 bottom-0 top-0 m-auto z-20 transition-all duration-300 sm:opacity-0 visible sm:invisible sm:group-hover:visible sm:group-hover:opacity-100">
              <p className="font-dm font-bold text-xl text-purple-500">
                {project.name}
              </p>
            </div>
            <img
              className="w-[280px] h-[180px] md:w-[320px] md:h-[200px] object-cover transition-all duration-300 sm:group-hover:scale-105 blur-[1px] sm:blur-0 sm:group-hover:blur-[1px]"
              src={`/thumbs/${project.thumb}`}
              alt={project.alt}
            />
            <div className="block sm:hidden w-[280px] h-[180px] md:w-[320px] md:h-[200px] bg-black-400 opacity-70 content-[''] sm:group-hover:block absolute top-0 left-0 z-10" />
            <div className="visible sm:invisible group-hover:visible block absolute top-2 right-2 z-10 text-purple-500 transition-all duration-300 sm:opacity-0 sm:group-hover:opacity-100">
              <FaExternalLinkAlt size={16} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
