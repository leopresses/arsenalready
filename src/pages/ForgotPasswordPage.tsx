import { useState } from "react";
import { Link } from "react-router-dom";
import { Package } from "lucide-react";
import { toast } from "sonner";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Email enviado! Verifique sua caixa de entrada.");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
            <Package className="text-primary-foreground" size={24} />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Recuperar senha</h1>
          <p className="text-muted-foreground text-sm mt-1">Enviaremos um link para redefinir sua senha</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)}
              className="w-full px-3 py-2.5 bg-card border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary/50"
              placeholder="seu@email.com" required />
          </div>
          <button type="submit"
            className="w-full bg-foreground text-background py-2.5 rounded-lg text-sm font-medium hover:bg-primary transition-colors">
            Enviar Link
          </button>
        </form>
        <p className="text-center text-sm text-muted-foreground mt-6">
          <Link to="/login" className="text-primary hover:underline font-medium">Voltar ao login</Link>
        </p>
      </div>
    </div>
  );
}
