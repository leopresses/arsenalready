import { Link } from "react-router-dom";
import { kits, materials } from "@/data/mockData";
import { useAuth } from "@/contexts/AuthContext";
import { Lock, Package, MessageCircle, PenTool, Rocket, Sparkles } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  MessageCircle, PenTool, Rocket, Sparkles, Package,
};

export default function KitsPage() {
  const { isPremium } = useAuth();

  return (
    <div className="space-y-6 pt-8 lg:pt-0">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-1">Kits</h1>
        <p className="text-muted-foreground text-sm">Pacotes completos de materiais organizados por tema</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {kits.map(kit => {
          const Icon = iconMap[kit.icon] || Package;
          const isLocked = kit.planRequired === 'premium' && !isPremium;
          const kitMaterials = materials.filter(m => kit.materialIds.includes(m.id));

          return (
            <div key={kit.id} className="bg-card border border-border rounded-xl p-6 shadow-premium hover:shadow-card-hover transition-all duration-200">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon size={20} className="text-primary" strokeWidth={1.5} />
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${
                  kit.planRequired === 'premium' ? 'bg-premium/10 text-premium-foreground border border-premium/20' : 'bg-secondary text-muted-foreground'
                }`}>
                  {kit.planRequired === 'premium' ? '⭐ Premium' : 'Gratuito'}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{kit.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{kit.description}</p>
              <p className="text-xs text-muted-foreground mb-4">{kitMaterials.length} materiais inclusos</p>
              {isLocked ? (
                <Link to="/app/upgrade" className="flex items-center justify-center gap-2 w-full bg-secondary text-muted-foreground py-2.5 rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors">
                  <Lock size={14} /> Upgrade para Acessar
                </Link>
              ) : (
                <div className="space-y-2">
                  {kitMaterials.map(m => (
                    <Link key={m.id} to={`/app/material/${m.slug}`} className="block text-sm text-foreground hover:text-primary transition-colors py-1 border-b border-border last:border-0">
                      {m.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
