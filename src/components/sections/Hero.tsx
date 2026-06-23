import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronsDown } from "lucide-react";
import { isInitialLoad, isServer } from "@/lib/nav-state";
import hero from "@/assets/hero.webp";

export function Hero() {
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const y = useTransform(scrollY, [0, 1000], [0, shouldReduceMotion ? 0 : 250]);

  const baseDelay = (isServer || isInitialLoad) ? 2.6 : 0;

  return (
    <section className="relative h-dvh min-h-[640px] overflow-hidden">
      <motion.div 
        className="absolute inset-0 will-change-transform"
        style={{ y, scale: 1.08 }}
      >
        <picture>
          <source media="(min-width: 768px)" srcSet={hero} />
          <img
            src={hero}
            alt="Composición floral artesanal con rosas y eucalipto"
            className="h-full w-full object-cover"
            fetchPriority="high"
            decoding="sync"
          />
        </picture>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

      <div className="relative h-full container mx-auto px-6 flex flex-col justify-end pb-24 md:pb-32">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: baseDelay + 0.3 } },
          }}
          className="max-w-2xl text-cream"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-cream/70 mb-6"
          >
            <span className="h-px w-8 bg-cream/50" /> Floristería artesanal
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95]"
          >
            Jardín <em className="text-accent not-italic font-normal">Secreto</em>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-lg md:text-xl text-cream/85 max-w-lg leading-relaxed font-light"
          >
            Flores que transforman momentos en recuerdos.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/catalogo"
              className="group inline-flex items-center gap-2 bg-cream text-foreground px-7 py-3.5 rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Descubrir catálogo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 border border-cream/40 text-cream px-7 py-3.5 rounded-full text-sm font-medium hover:bg-cream/10 transition-all duration-300"
            >
              Contactar
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          opacity: { delay: baseDelay + 1.4, duration: 1 },
          y: {
            delay: baseDelay + 1.4,
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.5,
            ease: "easeInOut",
          },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/70"
      >
        <ChevronsDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
