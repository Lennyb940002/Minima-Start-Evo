import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export function Navigation() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Activer les animations avec un léger délai pour un effet fluide
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const baseClass =
    'px-4 py-2 transition-all duration-300 hover:bg-white hover:text-black hover:border hover:border-white rounded-[20px]';
  const activeClass = 'bg-white text-black border border-white';
  const inactiveClass = 'text-white';

  // Définir les routes exclues où le header ne doit pas apparaître
  const excludedRoutes = ['/intro', '/signup'];
  const isExcludedRoute = excludedRoutes.includes(location.pathname);

  // Si la route actuelle est exclue, masquez le composant
  if (isExcludedRoute) {
    return null;
  }

  // Liste des liens de navigation
  const navItems = [
    { path: '/ecommerce', label: 'E-commerce' },
    { path: '/investissements', label: 'Investissements' },
    { path: '/suivi-personnel', label: 'Suivi Personnel' },
  ];

  return (
    <nav className="flex gap-8">
      {navItems.map((item, index) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : inactiveClass}`
          }
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 0.2s ease-out ${0.2 * index}s, transform 0.2s ease-out ${0.2 * index}s`,
          }}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
