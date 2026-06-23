import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Heart, Sparkles, Calendar, Home } from "lucide-react";
import g2 from "@/assets/g2.webp";
import g5 from "@/assets/g5.webp";
import g1 from "@/assets/g1.webp";
import g3 from "@/assets/g3.webp";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — Jardín Secreto" },
      { name: "description", content: "Bodas, eventos, ramos personalizados y decoración de espacios. Floristería artesanal en Ubrique, Cádiz." },
      { property: "og:title", content: "Servicios — Jardín Secreto" },
      { property: "og:description", content: "Bodas, eventos, ramos personalizados y decoración de espacios." },
      { property: "og:url", content: "/servicios" },
      { property: "og:image", content: g2 },
      { name: "twitter:image", content: g2 },
    ],
    links: [{ rel: "canonical", href: "/servicios" }],
  }),
  component: ServiciosPage,
});

const servicios = [
  {
    icon: Sparkles,
    title: "Bodas",
    img: g2,
    desc: "Diseñamos la atmósfera floral de tu boda: ramo de novia, alfiler de novio, arcos, centros, decoración de ceremonia y espacios. Acompañamiento desde la primera idea.",
    incluye: ["Visita y propuesta a medida", "Pruebas de color y flor", "Montaje y desmontaje", "Coordinación con el lugar"],
  },
  {
    icon: Calendar,
    title: "Eventos",
    img: g5,
    desc: "Decoración floral integral para cenas, presentaciones, aperturas y celebraciones íntimas. Trabajamos en perfecta sincronía con cocina, sala y luz.",
    incluye: ["Centros de mesa", "Arreglos para entrada y bar", "Detalles para invitados", "Recogida discreta"],
  },
  {
    icon: Heart,
    title: "Ramos personalizados",
    img: g1,
    desc: "Ramos pensados para una persona concreta y un momento concreto. Tú nos cuentas, nosotros traducimos en flor.",
    incluye: ["Briefing por mensaje o tienda", "Selección de temporada", "Entrega en mano o envío", "Tarjeta manuscrita"],
  },
  {
    icon: Home,
    title: "Decoración de espacios",
    img: g3,
    desc: "Composiciones florales recurrentes para tiendas, oficinas y restaurantes. Frescura cada semana, criterio en cada arreglo.",
    incluye: ["Plan mensual o quincenal", "Renovación garantizada", "Cuidado y mantenimiento", "Tarifa fija sin sorpresas"],
  },
];

function ServiciosPage() {
  return (
    <>
      <section className="pt-40 pb-16 md:pt-48 md:pb-24">
        <div className="container mx-auto px-6 text-center">
          <FadeUp>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5">Servicios</p>
            <h1 className="font-display text-5xl md:text-6xl leading-[1.05] text-foreground max-w-3xl mx-auto">
              Acompañamos los momentos que <em className="text-accent not-italic">importan</em>.
            </h1>
          </FadeUp>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-6 space-y-24 md:space-y-32">
          {servicios.map((s, i) => (
            <div
              key={s.title}
              className={`grid gap-10 md:gap-16 md:grid-cols-2 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}
            >
              <FadeUp className="md:[direction:ltr]">
                <img src={s.img} alt={s.title} loading="lazy" className="rounded-2xl shadow-xl aspect-[4/5] md:aspect-[4/3] object-cover w-full" />
              </FadeUp>
              <FadeUp delay={0.1} className="md:[direction:ltr]">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-5">
                  <s.icon className="h-5 w-5" />
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-foreground leading-[1.1]">{s.title}</h2>
                <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="mt-6 space-y-2">
                  {s.incluye.map((x) => (
                    <li key={x} className="flex items-center gap-3 text-foreground/80">
                      <span className="h-1 w-4 bg-accent" /> {x}
                    </li>
                  ))}
                </ul>
              </FadeUp>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <SectionHeading invert title="¿Hablamos de tu proyecto?" description="Cuéntanos qué tienes en mente. Te respondemos en menos de 48 horas." />
          <Link to="/contacto" className="mt-10 inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-full text-sm hover:bg-cream hover:text-foreground transition">
            Solicitar presupuesto
          </Link>
        </div>
      </section>
    </>
  );
}
