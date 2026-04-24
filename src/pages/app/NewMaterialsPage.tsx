import { useMaterials } from "@/hooks/useMaterials";
import { MaterialCard } from "@/components/library/MaterialCard";
import { SkeletonCard } from "@/components/library/SkeletonCard";
import { EmptyState } from "@/components/library/EmptyState";

const RECENT_LIMIT = 24;

export default function NewMaterialsPage() {
  const { data: materials = [], isLoading } = useMaterials();
  const recent = materials.slice(0, RECENT_LIMIT);

  return (
    <div className="space-y-6 pt-8 lg:pt-0">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-1">Novidades</h1>
        <p className="text-muted-foreground text-sm">
          Os {RECENT_LIMIT} materiais mais recentes da biblioteca
        </p>
      </div>
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map(i => <SkeletonCard key={i} />)}
        </div>
      ) : recent.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recent.map(m => <MaterialCard key={m.id} material={m} />)}
        </div>
      ) : (
        <EmptyState title="Sem novidades por enquanto" description="Volte em breve para conferir os novos materiais." />
      )}
    </div>
  );
}
