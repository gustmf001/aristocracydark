import { Crown, Zap, MessageSquare } from "lucide-react";

const bumps = [
  {
    icon: Crown,
    title: "Mentoria Pessoal",
    subtitle: "Vagas limitadas",
    description: "Suporte direto e personalizado para acelerar seus resultados.",
  },
  {
    icon: Zap,
    title: "Pack de Templates de Automação",
    subtitle: "Pronto para usar",
    description: "Templates prontos para implementar automações imediatamente.",
  },
  {
    icon: MessageSquare,
    title: "Scripts de Vendas",
    subtitle: "Funis de mensagem",
    description: "Scripts testados e funis de conversação para maximizar vendas.",
  },
];

const OrderBumps = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Potencialize seus <span className="gradient-text">Resultados</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Add-ons exclusivos para membros que querem resultados ainda mais rápidos
          </p>
        </div>

        {/* Bumps grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {bumps.map((bump, index) => {
            const Icon = bump.icon;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Accent glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <span className="text-xs text-accent font-semibold uppercase tracking-wider">
                      {bump.subtitle}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3">{bump.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {bump.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OrderBumps;
