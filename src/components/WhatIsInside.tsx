import { Ghost, Bot, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Ghost,
    title: "Sistema de Perfil Fantasma",
    description: "Aprenda a configurar perfis invisíveis que crescem automaticamente, sem expor sua identidade.",
  },
  {
    icon: Bot,
    title: "Automação com IA",
    description: "Ferramentas e configurações para postar, responder e vender por você, 24/7.",
  },
  {
    icon: TrendingUp,
    title: "Maestria em Vendas (X1)",
    description: "Aprenda conversão um-a-um para gerar seus primeiros R$500–R$1000.",
  },
];

const WhatIsInside = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            O que está <span className="gradient-text">Dentro</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Três pilares fundamentais para construir e automatizar seu império digital invisível
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="mb-6 inline-block">
                  <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIsInside;
