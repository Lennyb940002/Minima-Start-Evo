import { Sale } from '../sales/types';
import { MoreHorizontal } from 'lucide-react';

interface SalesTableProps {
  sales: Sale[];
  onDelete: (id: number) => void; // Fonction pour gérer la suppression
}

export function SalesTable({ sales, onDelete }: SalesTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-zinc-800">
            <th className="px-4 py-3 text-left text-sm font-medium text-zinc-400">Produit</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-zinc-400">Référence</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-zinc-400">Quantité</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-zinc-400">Prix Unitaire</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-zinc-400">Prix Total</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-zinc-400">Prix de Vente</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-zinc-400">Marge (%)</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-zinc-400">Bénéfice</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-zinc-400">Date</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-zinc-400">État</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-zinc-400">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => {
            const margin = ((sale.salePrice - sale.unitPrice) / sale.unitPrice) * 100;
            const profit = sale.salePrice * sale.quantity - sale.totalPrice;

            // Définir la couleur de l'état
            let stateClass = '';
            let stateText = '';
            switch (sale.status) {
              case 'in-progress':
                stateClass = 'bg-yellow-500/20 text-yellow-400';
                stateText = 'En Cours';
                break;
              case 'validated':
                stateClass = 'bg-green-500/20 text-green-400';
                stateText = 'Validé';
                break;
              case 'rejected':
                stateClass = 'bg-red-500/20 text-red-400';
                stateText = 'Rejeté';
                break;
              default:
                stateClass = 'bg-gray-500/20 text-gray-400';
                stateText = 'Non défini';
                break;
            }

            return (
              <tr key={sale.id} className="border-b border-zinc-800">
                <td className="px-4 py-3 text-sm">{sale.product}</td>
                <td className="px-4 py-3 text-sm">{sale.reference}</td>
                <td className="px-4 py-3 text-sm">{sale.quantity}</td>
                <td className="px-4 py-3 text-sm">{sale.unitPrice} €</td>
                <td className="px-4 py-3 text-sm">{sale.totalPrice} €</td>
                <td className="px-4 py-3 text-sm">{sale.salePrice} €</td>
                <td className="px-4 py-3 text-sm">{margin.toFixed(2)} %</td>
                <td className="px-4 py-3 text-sm">{profit.toFixed(2)} €</td>
                <td className="px-4 py-3 text-sm">{new Date(sale.date).toLocaleDateString()}</td>
                <td className="px-4 py-3 text-sm">
                  <span className={`px-3 py-1 rounded-full ${stateClass}`}>{stateText}</span>
                </td>
                <td className="px-4 py-3 text-sm">
                  <button
                    className="p-1 hover:bg-zinc-800 rounded"
                    onClick={() => onDelete(sale.id)}
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
