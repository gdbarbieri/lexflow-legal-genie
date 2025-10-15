import { Link } from "react-router-dom";
import { Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-subtle p-4">
      <div className="text-center space-y-6 max-w-md animate-fade-up">
        <Link to="/" className="flex items-center gap-2 font-bold text-3xl justify-center mb-8">
          <Scale className="h-10 w-10 text-primary" />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            LexFlow
          </span>
        </Link>
        
        <div className="space-y-2">
          <h1 className="text-8xl font-bold text-primary">404</h1>
          <h2 className="text-3xl font-bold">Página não encontrada</h2>
          <p className="text-lg text-muted-foreground">
            A página que você está procurando não existe ou foi movida.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link to="/">
            <Button size="lg">
              Voltar para home
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button variant="outline" size="lg">
              Ir para dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

