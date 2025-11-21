import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(262_83%_58%/0.1),transparent_50%)]" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Main headline with gradient */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          <span className="gradient-text">Construa impérios digitais.</span>
          <br />
          <span className="text-foreground">Lucre silenciosamente.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
          Entre no <span className="text-primary font-semibold">Aristocracy Dark</span> — o clube privado que ensina você a crescer perfis anônimos, automatizados e lucrativos com IA.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <a href="https://pay.kirvano.com/b53abcb1-4e23-40df-830e-493c9f4f18c4" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 glow-primary animate-glow-pulse font-semibold btn-pulse-click"
            >
              Entrar no Clube
            </Button>
          </a>
          <a href="https://pay.kirvano.com/b53abcb1-4e23-40df-830e-493c9f4f18c4" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10 font-semibold btn-pulse-click"
            >
              Ver o que tem Dentro
            </Button>
          </a>
        </div>

        {/* Subtle indicator */}
        <div className="pt-12 text-sm text-muted-foreground/60 uppercase tracking-wider">
          Exclusivo • Inteligente • Lucrativo
        </div>
      </div>
    </section>
  );
};

export default Hero;
