import { Flower, Heart, Sparkles, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    icon: Heart,
    title: "Ramos personalizados",
    description: "Composiciones únicas creadas a partir de tu historia, tus colores y tu intención.",
  },
  {
    icon: Sparkles,
    title: "Bodas",
    description: "Ramos de novia, arcos florales y centros que acompañan el día más esperado.",
  },
  {
    icon: Calendar,
    title: "Eventos",
    description: "Decoración floral integral para cenas, presentaciones y celebraciones íntimas.",
  },
  {
    icon: Flower,
    title: "Flores de temporada",
    description: "Lo mejor de cada estación, recogido en local y arreglado el mismo día.",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-24 md:py-32 bg-secondary/15">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Servicios"
          title="Lo que cultivamos"
          description="Cuatro maneras de llevar flores a tu vida, todas tratadas con el mismo cuidado artesanal."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group bg-card rounded-2xl p-8 border border-border/60 shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
