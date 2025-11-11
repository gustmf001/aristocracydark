import { Gift } from "lucide-react";

const bonuses = [
  "300+ vídeos de conteúdo premium",
  "10 wallpapers de mentalidade milionária",
  "300+ fotos com legendas para perfis dark",
  "Acesso vitalício a atualizações",
];

const BonusSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Main card */}
        <div className="glass-card rounded-3xl p-8 md:p-12 border-accent/30 relative overflow-hidden">
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            {/* Icon and badge */}
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-2xl bg-accent/20 glow-accent">
                <Gift className="w-8 h-8 text-accent" />
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-8 space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold">
                Pack de <span className="gradient-text">Bônus Premium</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Conteúdo exclusivo para acelerar sua jornada na Aristocracia
              </p>
            </div>

            {/* Bonus list */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {bonuses.map((bonus, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50"
                >
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{bonus}</span>
                </div>
              ))}
            </div>

            {/* Value indicator */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                Valor total dos bônus
              </p>
              <p className="text-3xl font-bold gradient-text">
                R$ 997
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Incluído gratuitamente na sua adesão
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
