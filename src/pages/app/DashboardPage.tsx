import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { materials, categories } from "@/data/mockData";
import { MaterialCard } from "@/components/library/MaterialCard";
import { Sparkles, TrendingUp, Star, ArrowRight } from "lucide-react";

export default function DashboardPage() {
  const { user, favorites } = useAuth();
  const featured = materials.filter(m => m.featured).slice(0, 3);
  const recent = [...materials].sort((a, b) => b.createdAt.localeCompare(a.createdAt)).slice(0, 3);
  const favMaterials = materials.filter(m => favorites.includes(m.id)).slice(0, 3);

  return (
    <div className="space-y-10 pt-8 lg:pt-0">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-1">
          Olá, {user?.name?.split(' ')[0]} 👋
        </h1>
        <p className="text-muted-foreground text-sm">Sua biblioteca de execução imediata.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Materiais", value: materials.length.toString(), icon: Sparkles },
          { label: "Categorias", value: categories.length.toString(), icon: TrendingUp },
          { label: "Favoritos", value: favorites.length.toString(), icon: Star },
          { label: "Seu Plano", value: user?.plan === 'premium' ? 'Premium' : 'Gratuito', icon: Sparkles },
        ].map(stat => (
          <div key={stat.label} className="bg-card border border-border rounded-xl p-4 shadow-premium">
            <stat.icon size={18} className="text-primary mb-2" strokeWidth={1.5} />
            <p className="text-2xl font-bold text-foreground tabular-nums">{stat.value}</p>
            <p className="text-muted-foreground text-xs">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Featured */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Sparkles size={18} className="text-primary" /> Destaques
          </h2>
          <Link to="/app/library" className="text-sm text-primary hover:underline flex items-center gap-1">
            Ver todos <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map(m => <MaterialCard key={m.id} material={m} />)}
        </div>
      </div>

      {/* Recent */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Novidades da Semana</h2>
          <Link to="/app/new" className="text-sm text-primary hover:underline flex items-center gap-1">
            Ver todos <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recent.map(m => <MaterialCard key={m.id} material={m} />)}
        </div>
      </div>

      {/* Favorites */}
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
