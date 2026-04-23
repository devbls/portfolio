import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
};

export const Drawer = ({ isOpen, setOpen }: Props) => {
  const { t, i18n } = useTranslation("tabs");

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110]"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-screen w-full max-w-xs bg-zinc-950 border-l border-zinc-800 z-[120] p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <img src="/logo.webp" alt="Logo" className="h-8 w-8" />
              <button
                aria-label={t("drawer-close-icon-aria-label")}
                onClick={() => setOpen(false)}
                className="p-2 text-purple-500 hover:bg-purple-500/10 rounded-xl transition-colors"
              >
                <IoMdClose size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {["about", "projects", "techs", "contacts"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-poppins font-semibold text-zinc-400 hover:text-purple-500 transition-colors"
                >
                  {t(item)}
                </a>
              ))}
            </nav>
            <div className="mt-auto pt-8 border-t border-zinc-800">
              <div className="flex items-center gap-4">
                <button
                  className={`px-4 py-2 rounded-xl font-poppins text-sm transition-all ${
                    i18next.resolvedLanguage === "pt"
                      ? "bg-purple-500 text-zinc-50 shadow-lg shadow-purple-500/20"
                      : "text-zinc-400"
                  }`}
                  onClick={() => i18n.changeLanguage("pt")}
                >
                  Português
                </button>
                <button
                  className={`px-4 py-2 rounded-xl font-poppins text-sm transition-all ${
                    i18next.resolvedLanguage === "en"
                      ? "bg-purple-500 text-zinc-50 shadow-lg shadow-purple-500/20"
                      : "text-zinc-400"
                  }`}
                  onClick={() => i18n.changeLanguage("en")}
                >
                  English
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
