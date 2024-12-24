import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthForm } from './components/auth/AuthForm';
import { Header } from './components/layout/Header';
import { EcommerceDashboard } from './components/dashboard/EcommerceDashboard';
import { InvestmentView } from './components/investment/InvestmentView';

function App() {
  // Gestion de l'état d'authentification
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authType, setAuthType] = useState<'login' | 'register'>('login');

  // Fonction de gestion de l'authentification (à implémenter)
  const handleAuth = (email: string, password: string) => {
    console.log('Tentative d’authentification :', { email, password, type: authType });
    setIsAuthenticated(true); // Simulation de succès
  };

  // Affichage de la page d'authentification si l'utilisateur n'est pas connecté
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <AuthForm
          type={authType}
          onSwitch={() => setAuthType(authType === 'login' ? 'register' : 'login')}
          onSubmit={handleAuth}
        />
      </div>
    );
  }

  // Affichage de l'application principale une fois authentifié
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        {/* Header commun à toutes les pages */}
        <Header />

        {/* Contenu principal */}
        <main className="max-w-7xl mx-auto py-8">
          <Routes>
            {/* Redirection de la racine vers /ecommerce */}
            <Route path="/" element={<Navigate to="/ecommerce" replace />} />

            {/* Route vers le tableau de bord E-commerce */}
            <Route path="/ecommerce" element={<EcommerceDashboard />} />

            {/* Route vers la page Investissements */}
            <Route path="/investissements" element={<InvestmentView />} />

            {/* Ajoutez d'autres routes ici si nécessaire */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
