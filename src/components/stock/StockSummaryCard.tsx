import React from 'react';

interface StockSummaryCardProps {
  title: string;
  value: string | number;
}

export function StockSummaryCard({ title, value }: StockSummaryCardProps) {
  return (
    <div className="bg-black rounded-2xl border border-gray p-6 flex flex-col items-center text-center">
      <h3 className="text-gray-300 text-sm mb-2">{title}</h3>
      <p className="text-white text-4xl font-black">{value}</p>
    </div>
  );
}