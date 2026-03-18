import { Copy, Star, Lock, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Material } from "@/data/mockData";
import { toast } from "sonner";

interface MaterialCardProps {
  material: Material;
}

export function MaterialCard({ material }: MaterialCardProps) {
  const { isPremium, favorites, toggleFavorite } = useAuth();
  const isLocked = material.planRequired === 'premium' && !isPremium;
  const isFavorited = favorites.includes(material.id);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(material.content);
    toast.success("Copiado! Agora é só adaptar e lucrar. 🚀");
  };

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(material.id);
    toast.success(isFavorited ? "Removido dos favoritos" : "Adicionado aos favoritos ⭐");
  };

  return (
    <Link
      to={`/app/material/${material.slug}`}
      className="group relative bg-card border border-border rounded-xl p-5 transition-all duration-200 ease-out hover:shadow-card-hover hover:border-primary/20 flex flex-col animate-fade-in"
    >
      <div className="flex justify-between items-start mb-4">
        <span
          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${
            material.planRequired === 'premium'
              ? 'bg-premium/10 text-premium-foreground border border-premium/20'
              : 'bg-secondary text-muted-foreground'
          }`}
        >
          {material.planRequired === 'premium' ? '⭐ Premium' : 'Gratuito'}
        </span>
        <button
          onClick={handleFavorite}
          className="text-muted-foreground/40 hover:text-premium transition-colors duration-200"
        >
          <Star size={18} fill={isFavorited ? 'currentColor' : 'none'} className={isFavorited ? 'text-premium' : ''} />
        </button>
      </div>

      <div className="flex-1">
        <h3 className="text-card-foreground font-semibold text-lg leading-snug mb-2 group-hover:text-primary transition-colors duration-200">
          {material.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
          {material.shortDescription}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {material.tags.slice(0, 3).map(tag => (
          <span key={tag} className="text-[11px] text-muted-foreground bg-secondary px-2 py-0.5 rounded-md">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <span
          className={`flex-1 text-sm font-medium py-2.5 rounded-lg transition-all duration-200 flex justify-center items-center gap-2 ${
            isLocked
              ? 'bg-secondary text-muted-foreground'
              : 'bg-foreground text-background group-hover:bg-primary'
          }`}
        >
          {isLocked ? <Lock size={14} /> : <Eye size={14} />}
          {isLocked ? 'Upgrade para Acessar' : 'Ver Material'}
        </span>
        {!isLocked && (
          <button
            onClick={handleCopy}
            className="p-2.5 border border-border rounded-lg hover:bg-secondary text-muted-foreground transition-colors duration-200"
          >
            <Copy size={16} />
          </button>
        )}
      </div>
    </Link>
  );
}
