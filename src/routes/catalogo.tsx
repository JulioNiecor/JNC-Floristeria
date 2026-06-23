import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "@/components/ui/FadeUp";
import { cn } from "@/lib/utils";
import g1 from "@/assets/g1.webp";
import g2 from "@/assets/g2.webp";
import g3 from "@/assets/g3.webp";
import g4 from "@/assets/g4.webp";
import g5 from "@/assets/g5.webp";
import g6 from "@/assets/g6.webp";

export const Route = createFileRoute("/catalogo")({
  head: () => ({
    meta: [
      { title: "Catálogo — Jardín Secreto" },
      { name: "description", content: "Galería visual de ramos, bodas, flores de temporada, eventos y decoración floral artesanal." },
      { property: "og:title", content: "Catálogo — Jardín Secreto" },
      { property: "og:description", content: "Galería visual de nuestros trabajos florales." },
      { property: "og:url", content: "/catalogo" },
      { property: "og:image", content: g1 },
      { name: "twitter:image", content: g1 },
    ],
    links: [{ rel: "canonical", href: "/catalogo" }],
  }),
  component: CatalogoPage,
});

type Cat = "Todos" | "Ramos románticos" | "Flores de temporada" | "Bodas" | "Eventos" | "Decoración floral";

const items: { src: string; alt: string; cat: Exclude<Cat, "Todos"> }[] = [
  { src: g1, alt: "Ramo romántico de rosas", cat: "Ramos románticos" },
  { src: g6, alt: "Ramo otoñal envuelto en papel", cat: "Ramos románticos" },
  { src: g4, alt: "Flores de temporada", cat: "Flores de temporada" },
  { src: g2, alt: "Arco floral para boda", cat: "Bodas" },
  { src: g5, alt: "Centro de mesa para evento", cat: "Eventos" },
  { src: g3, alt: "Taller floral", cat: "Decoración floral" },
];

const categories: Cat[] = ["Todos", "Ramos románticos", "Flores de temporada", "Bodas", "Eventos", "Decoración floral"];

function CatalogoPage() {
  const [active, setActive] = useState<Cat>("Todos");
  const filtered = active === "Todos" ? items : items.filter((i) => i.cat === active);

  return (
    <>
      <section className="pt-40 pb-12 md:pt-48 md:pb-16">
        <div className="container mx-auto px-6 text-center">
          <FadeUp>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5">Catálogo</p>
            <h1 className="font-display text-5xl md:text-6xl leading-[1.05] text-foreground max-w-3xl mx-auto">
              Una colección viva, cambiante,
              <em className="text-accent not-italic"> hecha a mano</em>.
            </h1>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
              Esta es una selección visual. Cada arreglo se diseña a medida — escríbenos para crear el tuyo.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm border transition-all",
                  active === c
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-foreground/70 hover:border-primary hover:text-foreground",
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((it) => (
                <motion.figure
                  key={it.src}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-xl group aspect-[4/5]"
                >
                  <img src={it.src} alt={it.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <figcaption className="absolute bottom-4 left-4 text-cream text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs uppercase tracking-[0.2em] text-cream/70 block">{it.cat}</span>
                    {it.alt}
                  </figcaption>
                </motion.figure>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
