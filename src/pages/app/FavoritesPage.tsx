import { useAuth } from "@/contexts/AuthContext";
import { useMaterials } from "@/hooks/useMaterials";
import { MaterialCard } from "@/components/library/MaterialCard";
import { EmptyState } from "@/components/library/EmptyState";
import { SkeletonCard } from "@/components/library/SkeletonCard";

export default function FavoritesPage() {
  const { favorites } = useAuth();
  const { data: materials = [], isLoading } = useMaterials();
  const favMaterials = materials.filter(m => favorites.includes(m.id));

  return (
    <div className="space-y-6 pt-8 lg:pt-0">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-1">Favoritos</h1>
        <p className="text-muted-foreground text-sm">{favMaterials.length} materiais salvos</p>
      </div>
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => <SkeletonCard key={i} />)}
        </div>
      ) : favMaterials.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favMaterials.map(m => <MaterialCard key={m.id} material={m} />)}
        </div>
      ) : (
        <EmptyState title="Nenhum favorito ainda" description="Clique na ⭐ em qualquer material para salvar aqui." />
      )}
    </div>
  );
}
