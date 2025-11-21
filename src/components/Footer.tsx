import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const contentSections = [
  {
    title: "Perfis Dark & Sistema de Operação",
    items: [
      "Como criar perfis dark lucrativos do zero",
      "Modelos, scripts, templates e estruturas prontas",
      "Linha editorial completa",
      "Estratégia de crescimento diário",
      "Organização e rotina operacional"
    ]
  },
  {
    title: "Mercado Internacional (Módulo Importado)",
    items: [
      "Técnicas avançadas usadas no mercado americano",
      "Conteúdo adaptado para o Público Global",
      "Métodos de viralização e escala massiva",
      "Frameworks de conversão inspirados nos top players internacionais"
    ]
  },
  {
    title: "Vendas Anônimas & Monarquias Digitais",
    items: [
      "Estratégia de vendas sem aparecer",
      "Construção de micro-impérios digitais (dark em múltiplas frentes)",
      "Sistemas de persuasão, urgência e autoridade anônima",
      "Como transformar perfis dark em máquinas diárias de venda"
    ]
  },
  {
    title: "Tráfego Orgânico e Pago",
    items: [
      "Métodos de alcance massivo sem gastar dinheiro",
      "Criativos de conversão para tráfego pago",
      "Estruturas de anúncio para acelerar resultados",
      "Aceleração de vendas com impulsionamento mínimo e estratégico"
    ]
  },
  {
    title: "Criação de Produtos & Vendas de SaaS",
    items: [
      "Como criar e vender produtos digitais no modelo dark",
      "Blueprint completo para lançar produtos rápidos",
      "Ferramentas internas da Aristocracy para duplicar processos",
      "Guia para vender SaaS e automações no modelo anônimo"
    ]
  },
  {
    title: "Arsenal Interno da Aristocracy Dark",
    items: [
      "Packs, templates e materiais estratégicos",
      "Atualizações constantes sem custo adicional",
      "Ferramentas internas privadas",
      "Recursos inéditos adicionados ao longo do caminho"
    ]
  },
  {
    title: "Automação, Lembranças e Sistemas Inteligentes",
    items: [
      "Automações completas para perfis dark (rotinas, envios, respostas)",
      "Sistema de lembretes inteligente para manter a operação rodando",
      "Ferramentas de organização para nunca perder timing de postagem",
      "Scripts automáticos para acelerar engajamento e conversão",
      "Estruturas de funis automatizados no modelo anônimo",
      "Templates de mensagens prontas para vender sem esforço",
      "Configuração do ManyChat (Internacional e Brasileiro)"
    ]
  }
];

const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        {/* Logo/Brand */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold gradient-text">Aristocracy Dark</h3>
          <p className="text-muted-foreground mt-2">O que você recebe ao entrar</p>
        </div>

        {/* Carousel with content sections */}
        <div className="mb-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {contentSections.map((section, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="glass-card p-6 h-full border border-border/50 rounded-xl hover:border-primary/30 transition-colors">
                    <h4 className="text-lg font-semibold text-primary mb-4">
                      {section.title}
                    </h4>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Copyright and links */}
        <div className="text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            Aristocracy Dark © 2025
          </p>
          <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
