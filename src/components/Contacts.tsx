import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Contacts = () => {
  const { t } = useTranslation("contacts");

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/brenno-santos-57399b334/",
      icon: <FaLinkedinIn size={24} />,
      label: "LinkedIn",
      aria: t("linkedin-link-aria-label")
    },
    {
      href: "https://github.com/devbls",
      icon: <FaGithub size={24} />,
      label: "GitHub",
      aria: t("github-link-aria-label")
    },
    {
      href: "mailto:devblsds@gmail.com",
      icon: <BiLogoGmail size={24} />,
      label: "Email",
      aria: t("email-link-aria-label")
    }
  ];

  return (
    <section id="contacts" className="py-24 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-12"
      >
        <div className="text-center">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-zinc-50 mb-4">
            {t("title")}
          </h2>
          <div className="h-1.5 w-20 bg-purple-500 mx-auto rounded-full" />
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              aria-label={link.aria}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.1 }}
              className="flex flex-col items-center gap-4 group"
            >
              <div className="p-5 text-purple-500 bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-2xl group-hover:border-purple-500 group-hover:bg-purple-500/10 group-hover:text-purple-400 transition-all duration-300 shadow-lg">
                {link.icon}
              </div>
              <span className="text-zinc-400 font-poppins text-sm font-medium group-hover:text-zinc-50 transition-colors">
                {link.label}
              </span>
            </motion.a>
          ))}
        </div>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-zinc-500 font-poppins text-sm"
        >
          © {new Date().getFullYear()} Brenno Santos. {t("all_rights_reserved")}
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Contacts;
