import { FadeUp } from "@/components/ui/FadeUp";
import intro from "@/assets/intro.webp";

export function Intro() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 grid gap-12 md:gap-20 md:grid-cols-2 items-center">
        <FadeUp>
          <div className="text-xs uppercase tracking-[0.2em] text-accent mb-4 flex items-center gap-3">
            <span className="h-px w-6 bg-accent/50" /> Nuestra esencia
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.1] text-foreground">
            Cada ramo cuenta una historia.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Creamos composiciones florales que acompañan momentos especiales y llenan de
            vida cualquier espacio. Trabajamos con flores frescas seleccionadas a mano y
            diseñamos cada arreglo pensando en quien lo va a recibir.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Una floristería local, con atención cercana y pasión por los detalles.
          </p>
        </FadeUp>

        <FadeUp delay={0.15} className="relative">
          <div className="absolute -inset-4 bg-secondary/30 rounded-2xl -rotate-2" />
          <img
            src={intro}
            alt="Manos arreglando un ramo de flores"
            loading="lazy"
            className="relative rounded-2xl shadow-xl object-cover aspect-[4/5] w-full"
          />
        </FadeUp>
      </div>
    </section>
  );
}
