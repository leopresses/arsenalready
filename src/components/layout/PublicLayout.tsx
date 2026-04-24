import { Outlet, Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export function PublicLayout() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Arsenal de Materiais Prontos" className="h-9 w-auto" />
          </Link>
          <nav className="flex items-center gap-4">
            <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Preços</Link>
            <Link to="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Entrar</Link>
            <Link to="/register" className="text-sm font-medium bg-foreground text-background px-4 py-2 rounded-lg hover:bg-primary transition-colors">
              Começar Grátis
            </Link>
          </nav>
        </div>
      </header>
      <Outlet />
      <footer className="border-t border-border bg-card py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <img src={logo} alt="Arsenal de Materiais Prontos" className="h-8 w-auto mb-4" />
              <p className="text-muted-foreground text-xs">Sua biblioteca de execução imediata.</p>
            </div>
            <div>
              <p className="font-medium text-foreground text-sm mb-3">Produto</p>
              <div className="space-y-2">
                <Link to="/pricing" className="block text-muted-foreground text-xs hover:text-foreground transition-colors">Preços</Link>
                <Link to="/login" className="block text-muted-foreground text-xs hover:text-foreground transition-colors">Login</Link>
              </div>
            </div>
            <div>
              <p className="font-medium text-foreground text-sm mb-3">Legal</p>
              <div className="space-y-2">
                <Link to="/terms" className="block text-muted-foreground text-xs hover:text-foreground transition-colors">Termos de Uso</Link>
                <Link to="/privacy" className="block text-muted-foreground text-xs hover:text-foreground transition-colors">Política de Privacidade</Link>
              </div>
            </div>
            <div>
              <p className="font-medium text-foreground text-sm mb-3">Contato</p>
              <p className="text-muted-foreground text-xs">contato@arsenal.com</p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-muted-foreground text-xs">© 2026 Arsenal de Materiais Prontos. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
