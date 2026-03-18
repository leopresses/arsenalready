import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  plan: 'free' | 'premium';
  avatarUrl?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isPremium: boolean;
  login: (email: string, password: string) => void;
  register: (name: string, email: string, password: string) => void;
  logout: () => void;
  favorites: string[];
  toggleFavorite: (materialId: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>({
    id: '1',
    name: 'Usuário Demo',
    email: 'demo@arsenal.com',
    plan: 'free',
  });
  const [favorites, setFavorites] = useState<string[]>(['1', '3']);

  const login = (_email: string, _password: string) => {
    setUser({
      id: '1',
      name: 'Usuário Demo',
      email: _email,
      plan: 'free',
    });
  };

  const register = (name: string, email: string, _password: string) => {
    setUser({ id: '2', name, email, plan: 'free' });
  };

  const logout = () => setUser(null);

  const toggleFavorite = (materialId: string) => {
    setFavorites(prev =>
      prev.includes(materialId)
        ? prev.filter(id => id !== materialId)
        : [...prev, materialId]
    );
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isPremium: user?.plan === 'premium',
        login,
        register,
        logout,
        favorites,
        toggleFavorite,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
