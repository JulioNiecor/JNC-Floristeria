import { createFileRoute, Link } from "@tanstack/react-router";
import lost from "@/assets/lost-flower.webp";

export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [{ title: "Página no encontrada — Jardín Secreto" }],
  }),
  component: NotFound,
});

function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 bg-secondary/15">
      <div className="max-w-md text-center">
        <img src={lost} alt="Flor perdida" className="w-48 mx-auto mb-6 opacity-90" />
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Error 404</p>
        <h1 className="font-display text-4xl md:text-5xl text-foreground">
          Parece que esta flor se ha perdido.
        </h1>
        <p className="mt-4 text-muted-foreground">
          La página que buscas no existe o se ha trasplantado a otro rincón del jardín.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm hover:bg-primary/90 transition"
        >
          Volver al jardín
        </Link>
      </div>
    </section>
  );
}
