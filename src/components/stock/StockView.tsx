import React, { useState } from 'react';
import { StockHeader } from './StockHeader';
import { StockSummaryCard } from './StockSummaryCard';
import { StockTable } from './StockTable';
import { LowStockPanel } from './LowStockPanel';
import { StockItem, LowStockItem } from './types';

const mockItems: StockItem[] = [
  {
    id: '1',
    product: 'T-Shirt',
    reference: 'Noir/M',
    quantity: 1,
    unitPrice: 7.99,
    salePrice: 19.99,
  },
  {
    id: '2',
    product: 'T-Shirt',
    reference: 'REF-F58FAT',
    quantity: 1,
    unitPrice: 10,
    salePrice: 25,
  },
  {
    id: '3',
    product: 'T-Shirt',
    reference: 'REF-SNWPA7',
    quantity: 25,
    unitPrice: 10,
    salePrice: 50,
  },
];

const lowStockItems: LowStockItem[] = [
  { product: 'T-Shirt', reference: 'Noir/M', stock: 1 },
  { product: 'T-Shirt', reference: 'REF-F58FAT', stock: 1 },
];

export function StockView() {
  const [items] = useState(mockItems);
  const [criticalItems, setCriticalItems] = useState(lowStockItems);

  const handleDeleteLowStock = (reference: string) => {
    setCriticalItems(criticalItems.filter(item => item.reference !== reference));
  };

  const totalValue = items.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);

  return (
    <div className="p-6 space-y-6">
      <StockHeader onAddStock={() => console.log('Add stock clicked')} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StockSummaryCard title="Total Produits" value="725" />
        <StockSummaryCard
          title="Valeur Stock"
          value={`${totalValue.toFixed(2)}€`}
        />
        <StockSummaryCard title="Commandes en Attente" value="15" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <StockTable items={items} />
        </div>
        <div>
          <LowStockPanel
            items={criticalItems}
            onDelete={handleDeleteLowStock}
          />
        </div>
      </div>
    </div>
  );
}