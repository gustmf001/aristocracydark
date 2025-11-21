import { Button } from "@/components/ui/button";
import { ArrowRight, Lock } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent rounded-3xl blur-3xl" />
        
        <div className="relative z-10 space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/30">
            <Lock className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Vagas Limitadas</span>
          </div>

          {/* Main text */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Garanta seu lugar dentro da <span className="gradient-text">Aristocracia</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light">
              Comece sua transformação. Construa seu império digital invisível.
            </p>
          </div>

          {/* Price and CTA */}
          <div className="pt-4 space-y-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">
                Apenas para as 10 primeiras vagas
              </p>
              <p className="text-5xl md:text-6xl font-bold gradient-text">
                R$ 47,90
              </p>
              <p className="text-sm text-muted-foreground">
                Acesso vitalício + todos os bônus incluídos
              </p>
            </div>

            <a href="https://pay.kirvano.com/b53abcb1-4e23-40df-830e-493c9f4f18c4" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="text-xl px-12 py-8 bg-primary hover:bg-primary/90 glow-primary animate-glow-pulse font-bold group btn-pulse-click"
              >
                Entrar no Aristocracy Dark Agora
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>

            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Pagamento seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Suporte dedicado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
