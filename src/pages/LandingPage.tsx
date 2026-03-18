import { Link } from "react-router-dom";
import { ArrowRight, Check, Package, Sparkles, Zap, Shield, MessageSquare, PenTool } from "lucide-react";
import { pricingPlans } from "@/data/mockData";

export default function LandingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-6">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs font-medium text-primary">+500 materiais prontos para usar</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 max-w-3xl mx-auto">
            Pare de criar tudo
            <span className="text-gradient-premium"> do zero.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Scripts, prompts, copies e templates validados para usar agora. Mais execução, menos enrolação.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/register"
              className="bg-foreground text-background px-6 py-3 rounded-lg font-medium text-sm hover:bg-primary transition-colors inline-flex items-center gap-2"
            >
              Pegar Pronto <ArrowRight size={16} />
            </Link>
            <Link
              to="/pricing"
              className="border border-border bg-card text-foreground px-6 py-3 rounded-lg font-medium text-sm hover:bg-secondary transition-colors"
            >
              Ver Preços
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-foreground text-center mb-3">Tudo que você precisa, pronto para usar</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-lg mx-auto">Chega de olhar para uma folha em branco.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: MessageSquare, title: "Scripts", desc: "WhatsApp, vendas, follow-up" },
              { icon: Sparkles, title: "Prompts", desc: "IA, copywriting, análise" },
              { icon: PenTool, title: "Copies", desc: "Headlines, CTAs, emails" },
              { icon: Package, title: "Templates", desc: "Bio, posts, apresentações" },
              { icon: Check, title: "Checklists", desc: "Lançamento, ofertas, campanhas" },
              { icon: Zap, title: "Kits", desc: "Pacotes completos por tema" },
            ].map(cat => (
              <div key={cat.title} className="bg-background border border-border rounded-xl p-5 hover:shadow-premium transition-all duration-200">
                <cat.icon size={22} className="text-primary mb-3" strokeWidth={1.5} />
                <h3 className="font-semibold text-foreground text-sm mb-1">{cat.title}</h3>
                <p className="text-muted-foreground text-xs">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">Como funciona</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Escolha", desc: "Navegue pela biblioteca e encontre o material ideal para sua necessidade." },
              { step: "02", title: "Copie", desc: "Um clique para copiar. Sem enrolação, sem fricção." },
              { step: "03", title: "Adapte e Use", desc: "Personalize com seus dados e coloque em ação hoje." },
            ].map(s => (
              <div key={s.step} className="text-center">
                <div className="text-4xl font-bold text-primary/15 mb-3">{s.step}</div>
                <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="py-16 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-foreground text-center mb-3">Para quem é o Arsenal?</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-lg mx-auto">Se você precisa produzir rápido, está no lugar certo.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {["Media Buyers", "Copywriters", "Empreendedores", "Social Media"].map(role => (
              <div key={role} className="bg-background border border-border rounded-xl p-5 text-center">
                <Shield size={22} className="text-primary mx-auto mb-3" strokeWidth={1.5} />
                <p className="font-medium text-foreground text-sm">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-foreground text-center mb-3">Planos simples, sem surpresas</h2>
          <p className="text-muted-foreground text-center mb-10">Comece grátis. Evolua quando quiser.</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricingPlans.map(plan => (
              <div
                key={plan.id}
                className={`bg-card border rounded-xl p-6 relative ${
                  plan.highlighted ? 'border-primary shadow-card-hover ring-1 ring-primary/20' : 'border-border'
                }`}
              >
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
                      <Check size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/register"
                  className={`block text-center py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    plan.highlighted
                      ? 'bg-primary text-primary-foreground hover:opacity-90'
                      : 'bg-foreground text-background hover:bg-primary'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card border-y border-border">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">Hoje você não precisa começar do zero.</h2>
          <p className="text-muted-foreground mb-6">Acesse scripts, prompts e templates validados para usar agora.</p>
          <Link
            to="/register"
            className="bg-foreground text-background px-6 py-3 rounded-lg font-medium text-sm hover:bg-primary transition-colors inline-flex items-center gap-2"
          >
            Pegar Pronto <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
