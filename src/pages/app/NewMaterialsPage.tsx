import { materials } from "@/data/mockData";
import { MaterialCard } from "@/components/library/MaterialCard";

export default function NewMaterialsPage() {
  const sorted = [...materials].sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  return (
    <div className="space-y-6 pt-8 lg:pt-0">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-1">Novidades</h1>
        <p className="text-muted-foreground text-sm">Os materiais mais recentes da biblioteca</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sorted.map(m => <MaterialCard key={m.id} material={m} />)}
      </div>
    </div>
  );
}
