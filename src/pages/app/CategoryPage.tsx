import { useParams } from "react-router-dom";
import { useMaterials, useCategories } from "@/hooks/useMaterials";
import { MaterialCard } from "@/components/library/MaterialCard";
import { EmptyState } from "@/components/library/EmptyState";
import { SkeletonCard } from "@/components/library/SkeletonCard";

export default function CategoryPage() {
  const { slug } = useParams();
  const { data: categories = [] } = useCategories();
  const { data: materials = [], isLoading } = useMaterials();

  const category = categories.find(c => c.slug === slug);
  const categoryName = category?.name || slug;
  const filtered = materials.filter(m => m.category.toLowerCase() === categoryName?.toLowerCase());

  return (
    <div className="space-y-6 pt-8 lg:pt-0">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-1">{categoryName}</h1>
        <p className="text-muted-foreground text-sm">{filtered.length} materiais nesta categoria</p>
      </div>
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => <SkeletonCard key={i} />)}
        </div>
      ) : filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(m => <MaterialCard key={m.id} material={m} />)}
        </div>
      ) : (
        <EmptyState title="Nenhum material nesta categoria" description="Em breve teremos novos materiais aqui." />
      )}
    </div>
  );
}
