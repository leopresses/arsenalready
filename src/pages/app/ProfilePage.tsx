import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export default function ProfilePage() {
  const { profile, user, refreshProfile } = useAuth();
  const [name, setName] = useState(profile?.name || "");
  const [loading, setLoading] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setLoading(true);
    const { error } = await supabase
      .from('profiles')
      .update({ name })
      .eq('user_id', user.id);
    setLoading(false);
    if (error) {
      toast.error("Erro ao salvar.");
    } else {
      await refreshProfile();
      toast.success("Perfil atualizado com sucesso!");
    }
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
            <input type="email" value={user?.email || ''} disabled
              className="w-full px-3 py-2.5 bg-secondary border border-border rounded-lg text-sm text-muted-foreground" />
          </div>
          <button type="submit" disabled={loading}
            className="bg-foreground text-background px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-primary transition-colors disabled:opacity-50">
            {loading ? 'Salvando...' : 'Salvar Alterações'}
          </button>
        </form>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 shadow-premium">
        <h2 className="font-semibold text-foreground mb-2">Plano Atual</h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-foreground font-medium">{profile?.plan === 'premium' ? 'Premium' : 'Gratuito'}</p>
            <p className="text-muted-foreground text-xs">
              {profile?.plan === 'premium' ? 'Acesso completo à biblioteca' : 'Acesso limitado'}
            </p>
          </div>
          {profile?.plan !== 'premium' && (
            <a href="/app/upgrade" className="text-sm text-primary hover:underline font-medium">Fazer Upgrade</a>
          )}
        </div>
      </div>
    </div>
  );
}
