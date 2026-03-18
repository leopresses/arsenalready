import { Link } from "react-router-dom";
import { ShieldX } from "lucide-react";

export default function AccessDeniedPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <ShieldX className="text-destructive" size={28} />
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Acesso Negado</h1>
        <p className="text-muted-foreground text-sm mb-6">
          Você não tem permissão para acessar este conteúdo. Faça upgrade para o plano Premium para desbloquear.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/app/upgrade" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            Fazer Upgrade
          </Link>
          <Link to="/app" className="border border-border bg-card text-foreground px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-secondary transition-colors">
            Voltar ao Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
