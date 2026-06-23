import { Link } from "@tanstack/react-router";
import { Flower2, MoveLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md mx-auto flex flex-col items-center gap-6 animate-fade-up">
        <div className="p-4 rounded-full bg-primary/10 text-primary">
          <Flower2 className="w-12 h-12 opacity-50" />
        </div>
        
        <h1 className="font-display text-6xl text-primary">404</h1>
        
        <div className="space-y-2">
          <h2 className="font-display text-2xl text-foreground">
            Parece que te has perdido en el bosque...
          </h2>
          <p className="text-muted-foreground text-sm max-w-sm mx-auto">
            La página que estás buscando no existe, ha sido movida o está temporalmente inaccesible.
          </p>
        </div>

        <Link to="/" className="mt-8 rounded-full px-8 py-3 bg-primary text-primary-foreground font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors">
          <MoveLeft className="w-4 h-4" />
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
