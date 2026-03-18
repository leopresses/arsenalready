import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { pricingPlans } from "@/data/mockData";

export default function PricingPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-foreground mb-3">Planos e Preços</h1>
          <p className="text-muted-foreground">Comece grátis. Sem cartão de crédito.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
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
              <Link to="/register"
                className={`block text-center py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  plan.highlighted ? 'bg-primary text-primary-foreground hover:opacity-90' : 'bg-foreground text-background hover:bg-primary'
                }`}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
