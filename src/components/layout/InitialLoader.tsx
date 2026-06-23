import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flower2 } from "lucide-react";
import { isInitialLoad, markNavigated, isServer } from "@/lib/nav-state";

export function InitialLoader() {
  const [show, setShow] = useState(isServer ? true : isInitialLoad);

  useEffect(() => {
    if (!isInitialLoad) return;
    // Tiempo total antes de que el loader comience a subir
    const t = setTimeout(() => {
      setShow(false);
      markNavigated();
    }, 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro-loader"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-forest text-cream"
        >
          <div className="flex flex-col items-center gap-6 overflow-hidden text-center px-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -20 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Flower2 className="h-10 w-10 text-accent" strokeWidth={1.5} />
            </motion.div>
            
            <div className="overflow-hidden pb-4 -mb-4">
              <motion.span
                initial={{ y: "150%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block font-display text-4xl md:text-5xl lg:text-6xl tracking-widest"
              >
                Jardín Secreto
              </motion.span>
            </div>
            
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="block font-sans text-xs md:text-sm tracking-[0.4em] text-cream/70 uppercase"
              >
                Taller Floral
              </motion.span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
