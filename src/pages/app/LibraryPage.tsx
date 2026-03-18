import { useState, useMemo } from "react";
import { materials, categories } from "@/data/mockData";
import { MaterialCard } from "@/components/library/MaterialCard";
import { SearchBar } from "@/components/library/SearchBar";
import { FilterChip } from "@/components/library/FilterChip";
import { EmptyState } from "@/components/library/EmptyState";

const types = ['Todos', 'script', 'prompt', 'copy', 'template', 'checklist'];
const plans = ['Todos', 'free', 'premium'];

export default function LibraryPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedType, setSelectedType] = useState("Todos");
  const [selectedPlan, setSelectedPlan] = useState("Todos");

  const filtered = useMemo(() => {
    return materials.filter(m => {
      const matchSearch = !search || m.title.toLowerCase().includes(search.toLowerCase()) || m.shortDescription.toLowerCase().includes(search.toLowerCase()) || m.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
      const matchCategory = selectedCategory === 'Todos' || m.category === selectedCategory;
      const matchType = selectedType === 'Todos' || m.type === selectedType;
      const matchPlan = selectedPlan === 'Todos' || m.planRequired === selectedPlan;
      return matchSearch && matchCategory && matchType && matchPlan;
    });
  }, [search, selectedCategory, selectedType, selectedPlan]);

  return (
    <div className="space-y-6 pt-8 lg:pt-0">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-1">Biblioteca</h1>
        <p className="text-muted-foreground text-sm">{materials.length} materiais prontos para usar</p>
      </div>

      <SearchBar value={search} onChange={setSearch} />

      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <FilterChip label="Todos" active={selectedCategory === 'Todos'} onClick={() => setSelectedCategory('Todos')} />
          {categories.map(c => (
            <FilterChip key={c.id} label={c.name} active={selectedCategory === c.name} onClick={() => setSelectedCategory(c.name)} />
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {types.map(t => (
            <FilterChip key={t} label={t === 'Todos' ? 'Todos os tipos' : t} active={selectedType === t} onClick={() => setSelectedType(t)} />
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {plans.map(p => (
            <FilterChip key={p} label={p === 'Todos' ? 'Todos os planos' : p === 'free' ? 'Gratuito' : 'Premium'} active={selectedPlan === p} onClick={() => setSelectedPlan(p)} />
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(m => <MaterialCard key={m.id} material={m} />)}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
}
