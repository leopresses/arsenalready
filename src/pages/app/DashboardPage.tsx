import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useMaterials, useCategories, useKits } from "@/hooks/useMaterials";
import { MaterialCard } from "@/components/library/MaterialCard";
import { SkeletonCard } from "@/components/library/SkeletonCard";
import { Sparkles, TrendingUp, Star, ArrowRight, Flame, Layers } from "lucide-react";

export default function DashboardPage() {
  const { profile, favorites } = useAuth();
  const { data: materials = [], isLoading } = useMaterials();
  const { data: categories = [] } = useCategories();
  const { data: kits = [] } = useKits();

  const featured = materials.filter(m => m.featured).slice(0, 3);
  const recent = materials.slice(0, 6);
  const favMaterials = materials.filter(m => favorites.includes(m.id)).slice(0, 3);

  // "Mais usados": prioriza materiais gratuitos com tags fortes (vender, whatsapp, copy)
  const popularTags = ['whatsapp', 'vender', 'copy', 'cta', 'headline'];
  const popular = [...materials]
    .sort((a, b) => {
      const score = (m: typeof a) =>
        (m.tags || []).filter(t => popularTags.includes(t.toLowerCase())).length;
      return score(b) - score(a);
    })
    .slice(0, 3);

  // "Sequências prontas" = kits
  const sequences = kits.slice(0, 3);

  return (
    <div className="space-y-10 pt-8 lg:pt-0">
      <div className="bg-gradient-to-br from-card to-secondary/30 border border-border rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-foreground mb-1">
          Olá, {profile?.name?.split(' ')[0] || 'Usuário'} 👋
        </h1>
        <p className="text-muted-foreground text-sm mb-3">
          Sua biblioteca de execução imediata.
        </p>
        <p className="text-foreground/80 text-sm font-medium italic">
          "Hoje você não precisa começar do zero. Pegue pronto. Adapte rápido. Use hoje."
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Materiais", value: materials.length.toString(), icon: Sparkles },
          { label: "Categorias", value: categories.length.toString(), icon: TrendingUp },
          { label: "Favoritos", value: favorites.length.toString(), icon: Star },
          { label: "Seu Plano", value: profile?.plan === 'premium' ? 'Premium' : 'Gratuito', icon: Sparkles },
        ].map(stat => (
          <div key={stat.label} className="bg-card border border-border rounded-xl p-4 shadow-premium">
            <stat.icon size={18} className="text-primary mb-2" strokeWidth={1.5} />
            <p className="text-2xl font-bold text-foreground tabular-nums">{stat.value}</p>
            <p className="text-muted-foreground text-xs">{stat.label}</p>
          </div>
        ))}
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Sparkles size={18} className="text-primary" /> Destaques
          </h2>
          <Link to="/app/library" className="text-sm text-primary hover:underline flex items-center gap-1">
            Ver todos <ArrowRight size={14} />
          </Link>
        </div>
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => <SkeletonCard key={i} />)}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map(m => <MaterialCard key={m.id} material={m} />)}
          </div>
        )}
      </div>

      {sequences.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Layers size={18} className="text-primary" /> Sequências Prontas
            </h2>
            <Link to="/app/kits" className="text-sm text-primary hover:underline flex items-center gap-1">
              Ver todos os kits <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {sequences.map(k => (
              <Link
                key={k.id}
                to="/app/kits"
                className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-card-hover transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Layers size={20} />
                  </div>
                  {k.plan_required === 'premium' && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-premium/10 text-premium-foreground border border-premium/20">
                      ⭐ Premium
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                  {k.name}
                </h3>
                <p className="text-muted-foreground text-xs line-clamp-2">{k.description}</p>
                <p className="text-muted-foreground text-[11px] mt-3">
                  {(k as any).kit_items?.length || 0} materiais inclusos
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Flame size={18} className="text-premium" /> Mais Usados
          </h2>
          <Link to="/app/library" className="text-sm text-primary hover:underline flex items-center gap-1">
            Explorar <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popular.map(m => <MaterialCard key={m.id} material={m} />)}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Novidades da Semana</h2>
          <Link to="/app/new" className="text-sm text-primary hover:underline flex items-center gap-1">
            Ver todos <ArrowRight size={14} />
          </Link>
        </div>
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => <SkeletonCard key={i} />)}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recent.slice(0, 3).map(m => <MaterialCard key={m.id} material={m} />)}
          </div>
        )}
      </div>

      {favMaterials.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Star size={18} className="text-premium" /> Seus Favoritos
            </h2>
            <Link to="/app/favorites" className="text-sm text-primary hover:underline flex items-center gap-1">
              Ver todos <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favMaterials.map(m => <MaterialCard key={m.id} material={m} />)}
          </div>
        </div>
      )}
    </div>
  );
}
