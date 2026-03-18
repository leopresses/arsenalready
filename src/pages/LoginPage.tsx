import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Package } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
    navigate("/app");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
            <Package className="text-primary-foreground" size={24} />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Bem-vindo de volta</h1>
          <p className="text-muted-foreground text-sm mt-1">Entre na sua conta para acessar o Arsenal</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-3 py-2.5 bg-card border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary/50"
              placeholder="seu@email.com"
              required
            />
          </div>
          <div>
            <div className="flex justify-between mb-1.5">
              <label className="text-sm font-medium text-foreground">Senha</label>
              <Link to="/forgot-password" className="text-xs text-primary hover:underline">Esqueceu?</Link>
            </div>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-3 py-2.5 bg-card border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary/50"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-foreground text-background py-2.5 rounded-lg text-sm font-medium hover:bg-primary transition-colors"
          >
            Entrar
          </button>
        </form>
        <p className="text-center text-sm text-muted-foreground mt-6">
          Não tem conta?{" "}
          <Link to="/register" className="text-primary hover:underline font-medium">Criar conta grátis</Link>
        </p>
      </div>
    </div>
  );
}
