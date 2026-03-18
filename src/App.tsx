import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";

import { PublicLayout } from "@/components/layout/PublicLayout";
import { AppLayout } from "@/components/layout/AppLayout";

import LandingPage from "@/pages/LandingPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import ForgotPasswordPage from "@/pages/ForgotPasswordPage";
import PricingPage from "@/pages/PricingPage";
import TermsPage from "@/pages/TermsPage";
import PrivacyPage from "@/pages/PrivacyPage";

import DashboardPage from "@/pages/app/DashboardPage";
import LibraryPage from "@/pages/app/LibraryPage";
import CategoryPage from "@/pages/app/CategoryPage";
import MaterialDetailPage from "@/pages/app/MaterialDetailPage";
import FavoritesPage from "@/pages/app/FavoritesPage";
import NewMaterialsPage from "@/pages/app/NewMaterialsPage";
import KitsPage from "@/pages/app/KitsPage";
import ProfilePage from "@/pages/app/ProfilePage";
import UpgradePage from "@/pages/app/UpgradePage";
import AccessDeniedPage from "@/pages/app/AccessDeniedPage";

import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public */}
            <Route element={<PublicLayout />}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
            </Route>

            {/* Private */}
            <Route path="/app" element={<AppLayout />}>
              <Route index element={<DashboardPage />} />
              <Route path="library" element={<LibraryPage />} />
              <Route path="category/:slug" element={<CategoryPage />} />
              <Route path="material/:slug" element={<MaterialDetailPage />} />
              <Route path="favorites" element={<FavoritesPage />} />
              <Route path="new" element={<NewMaterialsPage />} />
              <Route path="kits" element={<KitsPage />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="upgrade" element={<UpgradePage />} />
              <Route path="access-denied" element={<AccessDeniedPage />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
