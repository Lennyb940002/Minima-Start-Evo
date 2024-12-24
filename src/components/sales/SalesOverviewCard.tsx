import React from 'react';
import { Period } from '../sales/types';

interface SalesOverviewCardProps {
  title: string;
  value: string;
  period: Period;
  onPeriodChange: (period: Period) => void;
}

export function SalesOverviewCard({
  title,
  value,
}: SalesOverviewCardProps) {
  return (
    <div className="bg-black border border-colors-white rounded-xl p-6">
      <div className="flex flex-col h-full">
        <h3 className="text-sm text-zinc-400 mb-2">{title}</h3>
        <p className="text-5xl font-bolt mt-auto">{value}</p>
        <div className="mt-4 flex gap-2">
          <button className="px-3 py-1 rounded-full bg-yellow-500 text-black text-sm">
            Jour
          </button>
          <button className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 text-sm">
            Semaine
          </button>
          <button className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 text-sm">
            Mois
          </button>
        </div>
      </div>
    </div>
  );
}