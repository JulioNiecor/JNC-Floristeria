import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import React, { useId } from "react";
import { Mail, MapPin, Clock, Phone } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";
import g5 from "@/assets/g5.webp";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Jardín Secreto" },
      { name: "description", content: "Escríbenos para encargar un ramo, organizar una boda o decorar un espacio. Estamos en Ubrique, Cádiz." },
      { property: "og:title", content: "Contacto — Jardín Secreto" },
      { property: "og:description", content: "Escríbenos para encargar un ramo o decorar un espacio." },
      { property: "og:url", content: "/contacto" },
      { property: "og:image", content: g5 },
      { name: "twitter:image", content: g5 },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: ContactoPage,
});

const schema = z.object({
  nombre: z.string().trim().min(2, "Cuéntanos tu nombre").max(80),
  email: z.string().trim().email("Email no válido").max(120),
  tipo: z.enum(["Ramo", "Boda", "Evento", "Decoración", "Otro"]),
  mensaje: z.string().trim().min(10, "Escríbenos un poco más").max(800),
});

type FormData = z.infer<typeof schema>;

function ContactoPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { tipo: "Ramo" },
  });

  const onSubmit = async (_data: FormData) => {
    // Proyecto de portfolio: el formulario no envía datos a ningún servicio.
    toast("Este formulario es solo demostrativo y no envía datos.", {
      description: "Proyecto de portfolio ficticio.",
    });
    reset();
  };

  return (
    <>
      <section className="pt-40 pb-16 md:pt-48 md:pb-20 bg-secondary/15">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <FadeUp>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5">Contacto</p>
            <h1 className="font-display text-5xl md:text-6xl leading-[1.05] text-foreground">
              Escríbenos. <em className="text-accent not-italic">Estamos cerca</em>.
            </h1>
            <p className="mt-6 text-muted-foreground text-lg">
              Cuéntanos qué tienes en mente y te respondemos con cariño y propuestas concretas.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 grid gap-12 lg:gap-20 lg:grid-cols-[1.1fr_1fr]">
          <FadeUp>
            <div className="mb-8 p-4 bg-accent/10 border border-accent/20 rounded-lg text-sm text-accent-foreground text-left">
              <strong>⚠️ Proyecto de portfolio:</strong> Este formulario es puramente demostrativo. No introduzcas datos bancarios ni información personal sensible, ya que este negocio no opera comercialmente.
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-left">
              <Field label="Nombre" error={errors.nombre?.message}>
                <input
                  {...register("nombre")}
                  className="form-input"
                  placeholder="Tu nombre"
                />
              </Field>

              <Field label="Email" error={errors.email?.message}>
                <input
                  type="email"
                  {...register("email")}
                  className="form-input"
                  placeholder="tu@email.com"
                />
              </Field>

              <Field label="Tipo de proyecto" error={errors.tipo?.message}>
                <select
                  {...register("tipo")}
                  className="form-input"
                >
                  <option>Ramo</option>
                  <option>Boda</option>
                  <option>Evento</option>
                  <option>Decoración</option>
                  <option>Otro</option>
                </select>
              </Field>

              <Field label="Mensaje" error={errors.mensaje?.message}>
                <textarea
                  rows={5}
                  {...register("mensaje")}
                  className="form-input resize-none"
                  placeholder="Cuéntanos la ocasión, fechas, espacio…"
                />
              </Field>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-medium hover:bg-primary/90 transition disabled:opacity-60"
              >
                {isSubmitting ? "Enviando…" : "Enviar mensaje"}
              </button>
            </form>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="bg-secondary/20 rounded-2xl p-8 space-y-6">
              <Info icon={MapPin} title="Dirección" lines={["Ubrique", "Cádiz"]} />
              <Info icon={Clock} title="Horario" lines={["Lun – Vie · 10:00 – 20:00", "Sábado · 10:00 – 14:00"]} />
              <Info icon={Phone} title="Teléfono" lines={[{ label: "+34 000 000 000", href: "tel:+34000000000" }]} />
              <Info icon={Mail} title="Email" lines={[{ label: "julioniecor@gmail.com", href: "mailto:julioniecor@gmail.com" }]} />
            </div>

            <div className="mt-6 rounded-2xl overflow-hidden border border-border aspect-[4/3] bg-muted/20">
              <iframe
                title="Mapa Jardín Secreto"
                src="https://maps.google.com/maps?q=Ubrique,%20Cadiz&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  const id = useId();
  const child = React.isValidElement(children) 
    ? React.cloneElement(children as React.ReactElement, { id })
    : children;

  return (
    <div className="block">
      <label htmlFor={id} className="text-sm font-medium text-foreground/80 mb-2 block">{label}</label>
      {child}
      {error && <span className="text-xs text-destructive mt-1 block">{error}</span>}
    </div>
  );
}

type InfoLine = string | { label: string; href: string };
function Info({ icon: Icon, title, lines }: { icon: React.ComponentType<{ className?: string }>; title: string; lines: InfoLine[] }) {
  return (
    <div className="flex gap-4">
      <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <h3 className="font-display text-lg text-foreground mb-1">{title}</h3>
        {lines.map((l) =>
          typeof l === "string" ? (
            <p key={l} className="text-muted-foreground text-sm">{l}</p>
          ) : (
            <p key={l.label} className="text-muted-foreground text-sm">
              <a href={l.href} className="hover:text-primary transition-colors">{l.label}</a>
            </p>
          ),
        )}
      </div>
    </div>
  );
}
