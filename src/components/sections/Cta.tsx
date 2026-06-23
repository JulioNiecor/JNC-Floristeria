import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";

export function Cta() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-24 md:py-32">
        <FadeUp className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/60 mb-5">
            ¿Tienes una idea en mente?
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-primary-foreground">
            Creamos arreglos florales únicos para cada ocasión.
          </h2>
          <p className="mt-6 text-primary-foreground/75 text-lg max-w-xl mx-auto leading-relaxed">
            Cuéntanos qué tienes en mente y te respondemos con propuestas en menos de 48 horas.
          </p>
          <Link
            to="/contacto"
            className="group mt-10 inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full text-sm font-medium hover:bg-cream hover:text-foreground transition-all duration-300"
          >
            Solicitar información
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
