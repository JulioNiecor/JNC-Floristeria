import { Leaf, Hand, MessageCircleHeart, Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/ui/FadeUp";

const items = [
  { icon: Leaf, title: "Flores frescas", desc: "Recogidas a diario, seleccionadas a mano." },
  { icon: Hand, title: "Diseño artesanal", desc: "Cada arreglo se piensa pieza a pieza." },
  { icon: MessageCircleHeart, title: "Atención personalizada", desc: "Te acompañamos en cada decisión." },
  { icon: Award, title: "Experiencia en eventos", desc: "Más de 200 bodas y celebraciones." },
];

export function WhyUs() {
  return (
    <section className="py-24 md:py-32 bg-secondary/15">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Por qué elegirnos"
          title="Lo que nos hace diferentes"
        />

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <FadeUp key={it.title} delay={i * 0.08} className="text-center">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-full border border-primary/20 text-primary mb-4">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">{it.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{it.desc}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
