import { useTranslation } from "react-i18next";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    link: "https://seocamp.com.br/",
    name: "SEOcamp 2026",
    thumb: "seocamp.webp",
    tags: ["React", "Vite", "Tailwind"],
  },
  {
    link: "https://www.sunbeachrental.com/",
    name: "Sunbeach Rental",
    thumb: "sunbeach.webp",
    tags: ["Next.js", "TypeScript", "CMS"],
  },
  {
    link: "https://cumulusled.com.br/",
    name: "Cumulus LED",
    thumb: "cumulus.webp",
    tags: ["React", "Styled Components"],
  },
  {
    link: "https://www.telhanorte.com.br/",
    name: "Telhanorte",
    thumb: "telhanorte.webp",
    tags: ["VTEX", "React", "Sass"],
  },
  {
    link: "https://www.enviapecas.com.br/",
    name: "Envia Peças",
    thumb: "enviapecas.webp",
    tags: ["E-commerce", "React"],
  },
  {
    link: "https://www.tumelero.com.br/",
    name: "Tumelero",
    thumb: "tumelero.webp",
    tags: ["VTEX", "React"],
  },
  {
    link: "https://www.ascona.com.br/",
    name: "Ascona",
    thumb: "ascona.webp",
    tags: ["VTEX", "Frontend"],
  },
  {
    link: "https://www.intimastore.com.br/",
    name: "Intima Store",
    thumb: "intimastore.webp",
    tags: ["VTEX", "UI/UX"],
  },
  {
    link: "https://www.conscienciajeans.com.br/",
    name: "Consciência Jeans",
    thumb: "conscienciajeans.webp",
    tags: ["VTEX", "React"],
  },
  {
    link: "https://espaco-nandi.vercel.app/",
    name: "Espaço Nandi",
    thumb: "espaco-nandi.webp",
    tags: ["React", "Vercel"],
  },
  {
    link: "https://www.klx.pt",
    name: "KLx Website",
    thumb: "klx.webp",
    tags: ["Corporate", "React"],
  },
  {
    link: "https://www.primeit.pt",
    name: "PrimeIT Website",
    thumb: "primeit.webp",
    tags: ["Corporate", "TypeScript"],
  },
  {
    link: "https://www.primenearshore.com",
    name: "Prime Nearshore Website",
    thumb: "nearshore.webp",
    tags: ["International", "React"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects = () => {
  const { t } = useTranslation("projects");

  return (
    <section id="projects" className="py-24 scroll-mt-20 container mx-auto px-6">
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
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {PROJECTS.map((project) => (
          <motion.div
            key={project.name}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="group relative bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-colors shadow-xl"
          >
            <div className="aspect-video overflow-hidden relative">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={`/assets/thumbs/${project.thumb}`}
                alt={project.name}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a
                  href={project.link}
                  target="_blank"
                  className="p-4 bg-purple-500 text-zinc-50 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100"
                >
                  <FaExternalLinkAlt size={20} />
                </a>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-zinc-50 font-poppins mb-3">
                {project.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
