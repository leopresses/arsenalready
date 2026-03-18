import { FileX } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
}

export function EmptyState({ title = "Nenhum material encontrado", description = "Tente ajustar seus filtros ou busca." }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
        <FileX className="text-muted-foreground" size={28} />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-muted-foreground text-sm max-w-sm">{description}</p>
    </div>
  );
}
