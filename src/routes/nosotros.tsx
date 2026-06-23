import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Sprout, Scissors, Heart, Sparkles } from "lucide-react";
import intro from "@/assets/intro.webp";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — Jardín Secreto" },
      { name: "description", content: "Una floristería artesanal con alma local. Conoce nuestra historia, valores y proceso." },
      { property: "og:title", content: "Nosotros — Jardín Secreto" },
      { property: "og:description", content: "Una floristería artesanal con alma local." },
      { property: "og:url", content: "/nosotros" },
      { property: "og:image", content: intro },
      { name: "twitter:image", content: intro },
    ],
    links: [{ rel: "canonical", href: "/nosotros" }],
  }),
  component: NosotrosPage,
});

const valores = [
  { icon: Sprout, title: "Flores frescas", desc: "Compramos en local, recogemos a diario." },
  { icon: Scissors, title: "Diseños personalizados", desc: "Ningún ramo se parece a otro." },
  { icon: Heart, title: "Atención cercana", desc: "Escuchamos antes de proponer." },
  { icon: Sparkles, title: "Pasión por el detalle", desc: "Cada cinta, cada hoja, importa." },
];

const proceso = [
  { n: "01", t: "Escuchamos", d: "Nos cuentas la ocasión, la persona, el espacio. Sin prisas." },
  { n: "02", t: "Proponemos", d: "Diseñamos una propuesta a partir de tu historia y nuestra paleta de temporada." },
  { n: "03", t: "Componemos", d: "Trabajamos a mano en el taller, con flores recogidas el mismo día." },
  { n: "04", t: "Entregamos", d: "Cuidamos la entrega como cuidamos el ramo." },
];

const equipo = [
  { nombre: "Elena Vidal", rol: "Fundadora · Diseño floral" },
  { nombre: "Daniela Roca", rol: "Bodas y eventos" },
  { nombre: "Iván Ferré", rol: "Taller y logística" },
];

function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 md:pt-48 md:pb-24 bg-secondary/15">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5">Nuestra historia</p>
            <h1 className="font-display text-5xl md:text-6xl leading-[1.05] text-foreground">
              Un pequeño taller con
              <em className="text-accent not-italic"> alma de jardín</em>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
              Jardín Secreto nació en 2017 en un patio escondido de Lavapiés.
              Empezamos con tres baldes de flores y la idea de hacer ramos como
              quien escribe cartas: a mano, lentos, para alguien concreto.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <img src={intro} alt="Taller floral" loading="lazy" className="rounded-2xl shadow-xl aspect-[4/5] object-cover w-full" />
          </FadeUp>
        </div>
      </section>

      {/* Misión */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <FadeUp>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5">Misión</p>
            <p className="font-display text-3xl md:text-4xl leading-snug text-foreground">
              Hacer que las flores acompañen momentos importantes con la honestidad
              y la calma de lo hecho a mano.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Valores */}
      <section className="py-24 md:py-32 bg-secondary/15">
        <div className="container mx-auto px-6">
          <SectionHeading eyebrow="Valores" title="En qué creemos" />
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {valores.map((v, i) => (
              <FadeUp key={v.title} delay={i * 0.08} className="text-center">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-full border border-primary/20 text-primary mb-4">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <SectionHeading eyebrow="Proceso" title="Cómo trabajamos" />
          <div className="mt-16 grid gap-10 md:grid-cols-2 max-w-4xl mx-auto">
            {proceso.map((p, i) => (
              <FadeUp key={p.n} delay={i * 0.08} className="flex gap-5">
                <span className="font-display text-3xl text-accent">{p.n}</span>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">{p.t}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.d}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-24 md:py-32 bg-secondary/15">
        <div className="container mx-auto px-6">
          <SectionHeading eyebrow="Equipo" title="Las manos detrás de cada flor" />
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {equipo.map((p, i) => (
              <FadeUp key={p.nombre} delay={i * 0.1}>
                <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-secondary/40 rounded-2xl mb-4 flex items-end p-6">
                  <span className="font-display text-6xl text-primary/30">{p.nombre[0]}</span>
                </div>
                <h3 className="font-display text-xl text-foreground">{p.nombre}</h3>
                <p className="text-sm text-muted-foreground">{p.rol}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <Link to="/contacto" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm hover:bg-primary/90 transition">
          Hablemos de tu proyecto
        </Link>
      </section>
    </>
  );
}
