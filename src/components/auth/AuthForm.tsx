import React, { useState } from 'react';

interface AuthFormProps {
  type: 'login' | 'register';
  onSwitch: () => void;
  onSubmit: (email: string, password: string) => void;
}

export function AuthForm({ type, onSwitch, onSubmit }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <div className="w-full max-w-md p-8 rounded-lg backdrop-blur-sm mb-40">
      <div className="flex flex-col items-center text-center mb-14">
        <img src="/src/image/logo.png" alt="Logo" className="h-40 w-40" />
      </div>
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        {type === 'login' ? 'Connexion' : 'Inscription'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 bg-transparent border border-white/20 rounded-lg text-white focus:border-white focus:outline-none"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 bg-transparent border border-white/20 rounded-lg text-white focus:border-white focus:outline-none mb-8"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-white text-white hover:bg-white hover:text-black transition-colors rounded-lg mt-6"
        >
          {type === 'login' ? 'Se connecter' : "S'inscrire"}
        </button>
      </form>
      <button
        onClick={onSwitch}
        className="w-full text-sm text-white/80 hover:text-white mt-4"
      >
        {type === 'login'
          ? "Pas encore de compte ? S'inscrire"
          : 'Déjà un compte ? Se connecter'}
      </button>
    </div>
  );
}