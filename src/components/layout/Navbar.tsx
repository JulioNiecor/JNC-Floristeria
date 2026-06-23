import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Flower2 } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/catalogo", label: "Catálogo" },
  { to: "/servicios", label: "Servicios" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  // Solo la home tiene un hero oscuro a pantalla completa; el resto de páginas
  // tienen fondo claro desde el inicio y necesitan la navbar en modo sólido.
  const isHome = pathname === "/";
  const solid = scrolled || open || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        solid
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-6",
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Flower2
            className={cn(
              "h-5 w-5 transition-colors",
              solid ? "text-primary" : "text-cream",
            )}
          />
          <span
            className={cn(
              "font-display text-xl tracking-tight transition-colors",
              solid ? "text-foreground" : "text-cream",
            )}
          >
            Jardín Secreto
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const active =
              l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "relative text-sm tracking-wide transition-colors",
                  solid
                    ? active
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground"
                    : active
                      ? "text-cream"
                      : "text-cream/75 hover:text-cream",
                )}
              >
                {l.label}
                {active && (
                  <span
                    className={cn(
                      "absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-px w-6 transition-colors",
                      solid ? "bg-primary" : "bg-cream",
                    )}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          className={cn(
            "md:hidden p-2 transition-colors",
            solid ? "text-foreground" : "text-cream",
          )}
          aria-label="Menú"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border/60 mt-3 animate-fade-in">
          <div className="container mx-auto px-6 py-4 flex flex-col items-center text-center gap-1">
            {links.map((l) => {
              const active =
                l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={cn(
                    "w-full py-3 text-base border-b border-border/40 last:border-0",
                    active ? "text-primary" : "text-foreground/80",
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
