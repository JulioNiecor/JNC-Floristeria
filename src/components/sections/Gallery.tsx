import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import g1 from "@/assets/g1.webp";
import g2 from "@/assets/g2.webp";
import g3 from "@/assets/g3.webp";
import g4 from "@/assets/g4.webp";
import g5 from "@/assets/g5.webp";
import g6 from "@/assets/g6.webp";

const images = [
  { src: g1, alt: "Ramo romántico de rosas", tag: "Ramos" },
  { src: g3, alt: "Taller floral con flores frescas", tag: "Taller" },
  { src: g4, alt: "Macro de dalia naranja y pétalos suaves", tag: "Temporada" },
  { src: g2, alt: "Arco floral para boda", tag: "Bodas" },
  { src: g6, alt: "Ramo de otoño envuelto en papel kraft", tag: "Ramos" },
  { src: g5, alt: "Centro de mesa para evento", tag: "Eventos" },
];

function Tile({ img, onClick }: { img: (typeof images)[number]; onClick: () => void }) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);
  return (
    <motion.figure
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className="mb-4 break-inside-avoid relative overflow-hidden rounded-xl group cursor-zoom-in"
    >
      {!loaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" aria-hidden />
      )}
      <img
        ref={imgRef}
        src={img.src}
        alt={img.alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={cn(
          "w-full h-auto object-cover transition-all duration-700",
          loaded ? "opacity-100" : "opacity-0",
          "group-hover:scale-[1.03]",
        )}
      />
      <figcaption className="absolute bottom-3 left-3 text-xs uppercase tracking-[0.2em] text-cream bg-primary/60 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
        {img.tag}
      </figcaption>
    </motion.figure>
  );
}

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Bloquear el scroll del body cuando el lightbox está abierto
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex]);

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Galería"
          title="Flores hechas a mano"
          description="Una pequeña selección de proyectos recientes: ramos, bodas y composiciones de temporada."
        />

        <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-4">
          {images.map((img, idx) => (
            <Tile key={img.src} img={img} onClick={() => setSelectedIndex(idx)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50"
              aria-label="Cerrar galería"
            >
              <X className="h-8 w-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
              }}
              className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors p-2 z-50"
              aria-label="Anterior imagen"
            >
              <ChevronLeft className="h-12 w-12" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((selectedIndex + 1) % images.length);
              }}
              className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors p-2 z-50"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="h-12 w-12" />
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative max-h-[85vh] max-w-[85vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                className="max-h-[85vh] max-w-[85vw] object-contain rounded-sm"
              />
              <div className="absolute -bottom-8 left-0 right-0 text-center text-white/70 text-sm tracking-widest uppercase">
                {images[selectedIndex].tag}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
