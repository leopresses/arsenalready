import { Lock } from "lucide-react";
import { Link } from "react-router-dom";

export function PremiumLock() {
  return (
    <div className="relative">
      <div className="absolute inset-0 backdrop-blur-md bg-card/60 rounded-xl z-10 flex items-center justify-center">
        <div className="bg-card border border-border rounded-xl p-8 max-w-md mx-4 text-center shadow-card-hover">
          <div className="w-14 h-14 bg-premium/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="text-premium" size={24} />
          </div>
          <h3 className="text-xl font-semibold text-card-foreground mb-2">
            Conteúdo Premium
          </h3>
          <p className="text-muted-foreground text-sm mb-6">
            Este material faz parte do Plano Premium. Libere acesso a +500 materiais prontos para usar.
          </p>
          <Link
            to="/app/upgrade"
            className="inline-flex items-center justify-center w-full bg-primary text-primary-foreground font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-200"
          >
            Desbloquear por R$24,90/mês
          </Link>
          <p className="text-muted-foreground text-xs mt-3">
            Cancele quando quiser. Sem compromisso.
          </p>
        </div>
      </div>
    </div>
  );
}
