import { useParams, Link } from "react-router-dom";
import { useMaterial, useMaterials } from "@/hooks/useMaterials";
import { useAuth } from "@/contexts/AuthContext";
import { Copy, Star, ArrowLeft, Lock, Download } from "lucide-react";
import { toast } from "sonner";
import { SkeletonCard } from "@/components/library/SkeletonCard";
import { MaterialCard } from "@/components/library/MaterialCard";

export default function MaterialDetailPage() {
  const { slug } = useParams();
  const { isPremium, favorites, toggleFavorite } = useAuth();
  const { data: material, isLoading } = useMaterial(slug);
  const { data: allMaterials = [] } = useMaterials();

  if (isLoading) {
    return <div className="space-y-6 pt-8 lg:pt-0 max-w-3xl"><SkeletonCard /><SkeletonCard /></div>;
  }

  if (!material) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-xl font-semibold text-foreground mb-2">Material não encontrado</h1>
        <Link to="/app/library" className="text-primary hover:underline text-sm">Voltar à biblioteca</Link>
      </div>
    );
  }

  const isLocked = material.plan_required === 'premium' && !isPremium;
  const isFavorited = favorites.includes(material.id);

  // Materiais relacionados: mesma categoria OU mesmo objetivo, exceto ele mesmo
  const related = allMaterials
    .filter(m =>
      m.id !== material.id &&
      (m.category === material.category || (m.objective && m.objective === material.objective))
    )
    .slice(0, 3);

  const handleCopy = () => {
    if (material.content) navigator.clipboard.writeText(material.content);
    toast.success("Copiado! Agora é só adaptar e lucrar. 🚀");
  };

  return (
    <div className="space-y-6 pt-8 lg:pt-0 max-w-3xl">
      <Link to="/app/library" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft size={16} /> Voltar à biblioteca
      </Link>

      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${
              material.plan_required === 'premium' ? 'bg-premium/10 text-premium-foreground border border-premium/20' : 'bg-secondary text-muted-foreground'
            }`}>
              {material.plan_required === 'premium' ? '⭐ Premium' : 'Gratuito'}
            </span>
            <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider bg-secondary px-2 py-1 rounded-md">
              {material.type}
            </span>
          </div>
          <h1 className="text-2xl font-bold text-foreground">{material.title}</h1>
        </div>
        <button
          onClick={() => toggleFavorite(material.id)}
          className="p-2 rounded-lg border border-border hover:bg-secondary transition-colors flex-shrink-0"
        >
          <Star size={18} fill={isFavorited ? 'currentColor' : 'none'} className={isFavorited ? 'text-premium' : 'text-muted-foreground'} />
        </button>
      </div>

      <p className="text-muted-foreground">{material.full_description}</p>

      <div className="flex flex-wrap gap-1.5">
        {(material.tags || []).map(tag => (
          <span key={tag} className="text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-md">{tag}</span>
        ))}
      </div>

      {material.instructions && (
        <div className="bg-card border border-border rounded-xl p-5">
          <h2 className="font-semibold text-foreground mb-3">📋 Como usar</h2>
          <div className="text-sm text-muted-foreground whitespace-pre-line">{material.instructions}</div>
        </div>
      )}

      <div className="relative">
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-foreground">📝 Conteúdo</h2>
            {!isLocked && (
              <div className="flex gap-2">
                <button onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-foreground text-background text-sm font-medium rounded-lg hover:bg-primary transition-colors">
                  <Copy size={14} /> Copiar
                </button>
                <button className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-border text-sm font-medium rounded-lg hover:bg-secondary text-foreground transition-colors">
                  <Download size={14} /> Baixar
                </button>
              </div>
            )}
          </div>
          <pre className={`text-sm text-foreground/80 whitespace-pre-wrap font-sans leading-relaxed ${isLocked ? 'select-none' : ''}`}
            style={isLocked ? { filter: 'blur(6px)' } : {}}>
            {material.content}
          </pre>
        </div>

        {isLocked && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-card border border-border rounded-xl p-8 max-w-md mx-4 text-center shadow-card-hover">
              <div className="w-14 h-14 bg-premium/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="text-premium" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Conteúdo Premium</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Este material faz parte do Plano Premium. Libere acesso a +500 materiais prontos para usar.
              </p>
              <Link to="/app/upgrade"
                className="inline-flex items-center justify-center w-full bg-primary text-primary-foreground font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
                Desbloquear por R$24,90/mês
              </Link>
              <p className="text-muted-foreground text-xs mt-3">Cancele quando quiser.</p>
            </div>
          </div>
        )}
      </div>

      {related.length > 0 && (
        <div className="pt-6 border-t border-border">
          <h2 className="font-semibold text-foreground mb-1">Materiais relacionados</h2>
          <p className="text-muted-foreground text-xs mb-4 italic">Mais execução, menos enrolação.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map(m => <MaterialCard key={m.id} material={m} />)}
          </div>
        </div>
      )}
    </div>
  );
}
