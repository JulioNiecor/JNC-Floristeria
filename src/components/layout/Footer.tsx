import { Link } from "@tanstack/react-router";
import { Flower2, Instagram, Facebook, Mail, MapPin, Clock } from "lucide-react";

function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M16.5 3a5.6 5.6 0 0 0 4.5 4.5v3a8.5 8.5 0 0 1-4.5-1.3v6.6a6.2 6.2 0 1 1-6.2-6.2c.3 0 .6 0 .9.1v3.2a3 3 0 1 0 2.1 2.9V3h3.2Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-20">
        <div className="grid gap-12 md:grid-cols-3 text-center justify-items-center">
          <div className="flex flex-col items-center">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Flower2 className="h-5 w-5" />
              <span className="font-display text-xl">Jardín Secreto</span>
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
              Flores que transforman momentos en recuerdos. Floristería artesanal con alma local.
            </p>
            <div className="flex gap-3 mt-6 justify-center">
              <span aria-label="Instagram" className="p-2 rounded-full border border-primary-foreground/20"><Instagram className="h-4 w-4" /></span>
              <span aria-label="Facebook" className="p-2 rounded-full border border-primary-foreground/20"><Facebook className="h-4 w-4" /></span>
              <span aria-label="TikTok" className="p-2 rounded-full border border-primary-foreground/20"><TiktokIcon className="h-4 w-4" /></span>
            </div>
          </div>

          <div>
            <h4 className="font-display text-base mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/nosotros" className="hover:text-primary-foreground transition">Nosotros</Link></li>
              <li><Link to="/catalogo" className="hover:text-primary-foreground transition">Catálogo</Link></li>
              <li><Link to="/servicios" className="hover:text-primary-foreground transition">Servicios</Link></li>
              <li><Link to="/contacto" className="hover:text-primary-foreground transition">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base mb-4">Visítanos</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70 inline-block text-left">
              <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> <span>Ubrique<br />Cádiz</span></li>
              <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 shrink-0" /> Lun – Sáb · 10:00 – 20:00</li>
              <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" /> <a href="mailto:julioniecor@gmail.com" className="hover:text-primary-foreground transition">julioniecor@gmail.com</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/15 text-center">
          <div className="inline-block bg-primary-foreground/10 text-primary-foreground/80 px-4 py-2 rounded-md text-xs mb-6 border border-primary-foreground/20">
            ⚠️ <strong>Aviso:</strong> Este sitio web es un proyecto de demostración para portfolio (ficticio). No es una tienda real ni se recaban datos verdaderos.
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50 text-center">
          <p>© {new Date().getFullYear()} Jardín Secreto. Hecho con flores y cariño. JNC. Proyecto Visual.</p>
          <p>Aviso legal · Privacidad · Cookies</p>
        </div>
      </div>
    </footer>
  );
}
