import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Star, Trash2, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";
import { useMaterials } from "@/hooks/useMaterials";
import { MaterialCard } from "@/components/library/MaterialCard";
import { SearchBar } from "@/components/library/SearchBar";
import { SkeletonCard } from "@/components/library/SkeletonCard";
import { FilterChip } from "@/components/library/FilterChip";

export default function FavoritesPage() {
  const { favorites, toggleFavorite } = useAuth();
  const { data: materials = [], isLoading } = useMaterials();

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  const favMaterials = useMemo(
    () => materials.filter(m => favorites.includes(m.id)),
    [materials, favorites]
  );

  const categories = useMemo(
    () => ["Todos", ...Array.from(new Set(favMaterials.map(m => m.category)))],
    [favMaterials]
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return favMaterials.filter(m => {
      const matchSearch =
        !q ||
        m.title.toLowerCase().includes(q) ||
        (m.short_description || "").toLowerCase().includes(q) ||
        (m.tags || []).some(t => t.toLowerCase().includes(q));
      const matchCat = activeCategory === "Todos" || m.category === activeCategory;
      return matchSearch && matchCat;
    });
  }, [favMaterials, search, activeCategory]);

  const handleClearAll = async () => {
    if (!favMaterials.length) return;
    if (!window.confirm(`Remover todos os ${favMaterials.length} favoritos?`)) return;
    for (const m of favMaterials) {
      await toggleFavorite(m.id);
    }
    toast.success("Favoritos limpos.");
  };

  const handleRemoveOne = async (id: string, title: string) => {
    await toggleFavorite(id);
    toast.success(`"${title}" removido dos favoritos`);
  };

  return (
    <div className="space-y-6 pt-8 lg:pt-0">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1 flex items-center gap-2">
            <Star className="text-premium" size={22} fill="currentColor" />
            Favoritos
          </h1>
          <p className="text-muted-foreground text-sm">
            {favMaterials.length} {favMaterials.length === 1 ? "material salvo" : "materiais salvos"} ·{" "}
            <span className="italic">Pegue pronto. Adapte rápido. Use hoje.</span>
          </p>
        </div>
        {favMaterials.length > 0 && (
          <button
            onClick={handleClearAll}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-destructive transition-colors px-3 py-2 rounded-lg border border-border hover:border-destructive/40 hover:bg-destructive/5"
          >
            <Trash2 size={14} /> Limpar todos
          </button>
        )}
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => <SkeletonCard key={i} />)}
        </div>
      ) : favMaterials.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-16 h-16 bg-premium/10 rounded-full flex items-center justify-center mb-4">
            <Star className="text-premium" size={28} />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-1">Nenhum favorito ainda</h3>
          <p className="text-muted-foreground text-sm max-w-sm mb-5">
            Clique na ⭐ em qualquer material para salvar aqui e acessar rapidinho depois.
          </p>
          <Link
            to="/app/library"
            className="inline-flex items-center gap-1.5 text-sm font-medium bg-foreground text-background px-4 py-2.5 rounded-lg hover:bg-primary transition-colors"
          >
            Explorar a biblioteca <ArrowRight size={14} />
          </Link>
        </div>
      ) : (
        <>
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Buscar nos seus favoritos..."
          />

          {categories.length > 2 && (
            <div className="flex flex-wrap gap-2">
              {categories.map(c => (
                <FilterChip
                  key={c}
                  label={c}
                  active={activeCategory === c}
                  onClick={() => setActiveCategory(c)}
                />
              ))}
            </div>
          )}

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(m => (
                <div key={m.id} className="relative group">
                  <MaterialCard material={m} />
                  <button
                    onClick={() => handleRemoveOne(m.id, m.title)}
                    className="absolute top-3 right-12 p-1.5 rounded-md bg-card/80 backdrop-blur border border-border text-muted-foreground hover:text-destructive hover:border-destructive/40 opacity-0 group-hover:opacity-100 transition-all"
                    aria-label="Remover dos favoritos"
                    title="Remover dos favoritos"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-muted-foreground text-sm">
              Nenhum favorito corresponde à busca.
            </div>
          )}
        </>
      )}
    </div>
  );
}
