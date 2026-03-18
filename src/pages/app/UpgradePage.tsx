import { Check, Crown } from "lucide-react";
import { pricingPlans } from "@/data/mockData";
import { toast } from "sonner";

export default function UpgradePage() {
  const handleSubscribe = (planId: string) => {
    toast.success(`Checkout para o plano ${planId} seria aberto aqui (Stripe mock)`);
  };

  return (
    <div className="space-y-6 pt-8 lg:pt-0">
      <div className="text-center max-w-xl mx-auto">
        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Crown className="text-primary" size={24} />
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Upgrade para Premium</h1>
        <p className="text-muted-foreground text-sm">
          Desbloqueie acesso completo a +500 materiais prontos, kits exclusivos e novidades semanais.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {pricingPlans.map(plan => (
          <div key={plan.id}
            className={`bg-card border rounded-xl p-6 relative ${
              plan.highlighted ? 'border-primary shadow-card-hover ring-1 ring-primary/20' : 'border-border'
            }`}>
            {plan.badge && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                {plan.badge}
              </span>
            )}
            <h3 className="font-semibold text-foreground mb-1">{plan.name}</h3>
            <p className="text-muted-foreground text-xs mb-4">{plan.description}</p>
            <div className="mb-4">
              <span className="text-3xl font-bold text-foreground">
                {plan.price === 0 ? 'R$0' : `R$${plan.price.toString().replace('.', ',')}`}
              </span>
              <span className="text-muted-foreground text-sm">{plan.period}</span>
            </div>
            <ul className="space-y-2 mb-6">
              {plan.features.map(f => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                  <Check size={14} className="text-primary mt-0.5 flex-shrink-0" />{f}
                </li>
              ))}
            </ul>
            <button onClick={() => handleSubscribe(plan.id)}
              className={`w-full py-2.5 rounded-lg text-sm font-medium transition-colors ${
                plan.highlighted ? 'bg-primary text-primary-foreground hover:opacity-90' : 'bg-foreground text-background hover:bg-primary'
              }`}>
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
