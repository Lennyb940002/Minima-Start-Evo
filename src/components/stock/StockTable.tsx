import React from 'react';
import { MoreHorizontal, AlertTriangle } from 'lucide-react';
import { StockItem } from './types';
import { formatCurrency } from './utils/stockCalculations';

interface StockTableProps {
  items: StockItem[];
}

export function StockTable({ items }: StockTableProps) {
  return (
    <div className="bg-black border border-white/10 rounded-2xl overflow-hidden h-[500px]">
      <div className="text-2xl font-bold text-white mt-4 mb-4 ml-4">Détails des Produits</div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="px-4 py-3 text-left text-lg font-bolt text-white">Produit</th>
              <th className="px-4 py-3 text-left text-lg font-bolt text-white">Référence</th>
              <th className="px-4 py-3 text-left text-lg font-bolt text-white">Quantité</th>
              <th className="px-4 py-3 text-left text-lg font-bolt text-white">Prix Unitaire</th>
              <th className="px-4 py-3 text-left text-lg font-bolt text-white">Prix Total</th>
              <th className="px-4 py-3 text-left text-lg font-bolt text-white">Prix de Vente</th>
              <th className="px-4 py-3 text-left text-lg font-bolt text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b border-white/10">
                <td className="px-4 py-3 text-sm">
                  <div className="flex items-center gap-2">
                    {item.quantity <= item.threshold && (
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                    )}
                    <span className="text-white">{item.product}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-white">{item.reference}</td>
                <td className="px-4 py-3 text-sm text-white">{item.quantity}</td>
                <td className="px-4 py-3 text-sm text-white">{formatCurrency(item.unitPrice)}</td>
                <td className="px-4 py-3 text-sm text-white">
                  {formatCurrency(item.quantity * item.unitPrice)}
                </td>
                <td className="px-4 py-3 text-sm text-white">{formatCurrency(item.salePrice)}</td>
                <td className="px-4 py-3 text-sm">
                  <button className="p-1 hover:bg-white/10 rounded">
                    <MoreHorizontal className="w-4 h-4 text-white" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}