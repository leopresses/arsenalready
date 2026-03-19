import { useMaterials } from "@/hooks/useMaterials";
import { MaterialCard } from "@/components/library/MaterialCard";
import { SkeletonCard } from "@/components/library/SkeletonCard";

export default function NewMaterialsPage() {
  const { data: materials = [], isLoading } = useMaterials();

  return (
    <div className="space-y-6 pt-8 lg:pt-0">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-1">Novidades</h1>
        <p className="text-muted-foreground text-sm">Os materiais mais recentes da biblioteca</p>
      </div>
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map(i => <SkeletonCard key={i} />)}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map(m => <MaterialCard key={m.id} material={m} />)}
        </div>
      )}
    </div>
  );
}
