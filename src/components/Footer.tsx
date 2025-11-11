const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          {/* Logo/Brand */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold gradient-text">Aristocracy Dark</h3>
          </div>

          {/* Legal notice */}
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Aristocracy Dark © 2025 — Conteúdo digital e mentoria. Os resultados individuais podem variar e dependem do esforço, dedicação e implementação adequada das estratégias ensinadas.
          </p>

          {/* Additional links */}
          <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground pt-4">
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
