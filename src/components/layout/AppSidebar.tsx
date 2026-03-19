import {
  LayoutDashboard,
  Library,
  Star,
  Sparkles,
  Package,
  User,
  Crown,
  LogOut,
  ChevronLeft,
  Menu,
  MessageSquare,
  PenTool,
  FileText,
  CheckSquare,
} from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";

const mainNav = [
  { title: "Dashboard", url: "/app", icon: LayoutDashboard },
  { title: "Biblioteca", url: "/app/library", icon: Library },
  { title: "Novidades", url: "/app/new", icon: Sparkles },
  { title: "Favoritos", url: "/app/favorites", icon: Star },
  { title: "Kits", url: "/app/kits", icon: Package },
];

const categoryNav = [
  { title: "Scripts", url: "/app/category/scripts", icon: MessageSquare },
  { title: "Prompts", url: "/app/category/prompts", icon: Sparkles },
  { title: "Copies", url: "/app/category/copies", icon: PenTool },
  { title: "Templates", url: "/app/category/templates", icon: FileText },
  { title: "Checklists", url: "/app/category/checklists", icon: CheckSquare },
];

export function AppSidebar() {
  const { profile, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/app") return location.pathname === "/app";
    return location.pathname.startsWith(path);
  };

  const handleLogout = async () => {
    await logout();
    setMobileOpen(false);
    navigate('/login');
  };

  const sidebarContent = (
    <div className="flex flex-col h-full">
      <div className="p-4 flex items-center justify-between border-b border-sidebar-border">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Package className="text-primary-foreground" size={18} />
            </div>
            <span className="font-semibold text-sidebar-foreground text-sm">Arsenal</span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:flex p-1.5 rounded-md hover:bg-sidebar-accent text-sidebar-foreground transition-colors"
        >
          <ChevronLeft size={16} className={`transition-transform duration-200 ${collapsed ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        <div className="mb-4">
          {!collapsed && <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider px-2 mb-2">Menu</p>}
          {mainNav.map(item => (
            <NavLink
              key={item.url}
              to={item.url}
              end={item.url === "/app"}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive(item.url)
                  ? 'bg-sidebar-accent text-sidebar-primary'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent/60'
              }`}
            >
              <item.icon size={18} strokeWidth={1.5} />
              {!collapsed && <span>{item.title}</span>}
            </NavLink>
          ))}
        </div>

        <div>
          {!collapsed && <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider px-2 mb-2">Categorias</p>}
          {categoryNav.map(item => (
            <NavLink
              key={item.url}
              to={item.url}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive(item.url)
                  ? 'bg-sidebar-accent text-sidebar-primary'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent/60'
              }`}
            >
              <item.icon size={18} strokeWidth={1.5} />
              {!collapsed && <span>{item.title}</span>}
            </NavLink>
          ))}
        </div>
      </nav>

      <div className="p-3 border-t border-sidebar-border space-y-1">
        {!collapsed && profile?.plan === 'free' && (
          <NavLink
            to="/app/upgrade"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2.5 px-2.5 py-2.5 rounded-lg text-sm font-medium bg-primary/10 text-primary hover:bg-primary/15 transition-colors mb-1"
          >
            <Crown size={18} strokeWidth={1.5} />
            <span>Upgrade Premium</span>
          </NavLink>
        )}
        <NavLink
          to="/app/profile"
          onClick={() => setMobileOpen(false)}
          className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-medium transition-colors ${
            isActive('/app/profile') ? 'bg-sidebar-accent text-sidebar-primary' : 'text-sidebar-foreground hover:bg-sidebar-accent/60'
          }`}
        >
          <User size={18} strokeWidth={1.5} />
          {!collapsed && <span>Minha Conta</span>}
        </NavLink>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent/60 transition-colors w-full"
        >
          <LogOut size={18} strokeWidth={1.5} />
          {!collapsed && <span>Sair</span>}
        </button>
      </div>
    </div>
  );

  return (
    <>
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-card border border-border rounded-lg shadow-premium"
      >
        <Menu size={20} className="text-foreground" />
      </button>

      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-foreground/20 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen bg-sidebar border-r border-sidebar-border z-50 transition-all duration-200 flex-shrink-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${collapsed ? 'w-[60px]' : 'w-[240px]'}`}
      >
        {sidebarContent}
      </aside>
    </>
  );
}
