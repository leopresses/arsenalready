import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { toast } from "sonner";

export default function ProfilePage() {
  const { user } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [email] = useState(user?.email || "");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Perfil atualizado com sucesso!");
  };

  return (
    <div className="space-y-6 pt-8 lg:pt-0 max-w-lg">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-1">Minha Conta</h1>
        <p className="text-muted-foreground text-sm">Gerencie suas informações</p>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 shadow-premium">
        <h2 className="font-semibold text-foreground mb-4">Informações Pessoais</h2>
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Nome</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)}
              className="w-full px-3 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary/50" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
            <input type="email" value={email} disabled
              className="w-full px-3 py-2.5 bg-secondary border border-border rounded-lg text-sm text-muted-foreground" />
          </div>
          <button type="submit"
            className="bg-foreground text-background px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-primary transition-colors">
            Salvar Alterações
          </button>
        </form>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 shadow-premium">
        <h2 className="font-semibold text-foreground mb-2">Plano Atual</h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-foreground font-medium">{user?.plan === 'premium' ? 'Premium' : 'Gratuito'}</p>
            <p className="text-muted-foreground text-xs">
              {user?.plan === 'premium' ? 'Acesso completo à biblioteca' : 'Acesso limitado'}
            </p>
          </div>
          {user?.plan !== 'premium' && (
            <a href="/app/upgrade" className="text-sm text-primary hover:underline font-medium">Fazer Upgrade</a>
          )}
        </div>
      </div>
    </div>
  );
}
