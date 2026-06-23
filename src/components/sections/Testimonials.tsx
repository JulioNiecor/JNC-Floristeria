import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote: "El ramo de novia superó cualquier idea que pudiera haber tenido. Sentí que entendieron mi historia.",
    name: "Lucía y Marcos",
    role: "Boda en La Granja",
  },
  {
    quote: "Encargué un ramo para mi madre y lloró al recibirlo. Eso lo dice todo.",
    name: "Andrea Pérez",
    role: "Ramo personalizado",
  },
  {
    quote: "Decoraron nuestro restaurante en una mañana y dejaron el espacio precioso, sin estridencias.",
    name: "Nico Ferrer",
    role: "Cena de inauguración",
  },
  {
    quote: "Profesionalidad, cariño y un gusto exquisito. Repetiré sin duda.",
    name: "Marta Calleja",
    role: "Centros de mesa",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % testimonials.length), 5500);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[i];

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeading eyebrow="Testimonios" title="Lo que dicen quienes nos eligen" />

        <div className="mt-16 max-w-3xl mx-auto text-center min-h-[220px]">
          <Quote className="h-8 w-8 text-accent/60 mx-auto mb-6" />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-display text-2xl md:text-3xl leading-snug text-foreground italic">
                “{t.quote}”
              </p>
              <footer className="mt-6 text-sm tracking-wide uppercase text-muted-foreground">
                <span className="text-foreground">{t.name}</span> · {t.role}
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-10 flex justify-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Testimonio ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-1.5 bg-border"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
