import React, { useState } from 'react';
import { ShoppingCart, Users, TrendingUp, Plus } from 'lucide-react';
import { Period, Sale, SalesChartData } from '../sales/types';
import { SalesOverviewCard } from './SalesOverviewCard';
import { SalesChart } from './SalesChart';
import { SalesTable } from './SalesTable';
import { StatsCard } from '../sales/StatsCard';
import { ProductModal } from './ProductModal'; // Importation du composant ProductModal

const mockSales: Sale[] = [
  {
    id: '1',
    product: 'T-Shirt',
    reference: 'Noir/M',
    quantity: 1,
    salePrice: 19.99,
    unitPrice: 7.99,
    totalPrice: 7.99,
    date: '2024-03-15',
    client: 'John Doe',
    paymentMethod: 'Card',
    status: 'completed',
  },
  {
    id: '2',
    product: 'T-Shirt',
    reference: 'REF-F58FAT',
    quantity: 1,
    salePrice: 25.0,
    unitPrice: 10.0,
    totalPrice: 10.0,
    date: '2024-03-15',
    client: 'Jane Smith',
    paymentMethod: 'Cash',
    status: 'pending',
  },
  {
    id: '3',
    product: 'T-Shirt',
    reference: 'REF-SNWPA7',
    quantity: 25,
    salePrice: 50.0,
    unitPrice: 10.0,
    totalPrice: 250.0,
    date: '2024-03-15',
    client: 'Bob Wilson',
    paymentMethod: 'Card',
    status: 'completed',
  },
];

const mockChartData: SalesChartData[] = [
  { date: 'Lun', sales: 150 },
  { date: 'Mar', sales: 230 },
  { date: 'Mer', sales: 180 },
  { date: 'Jeu', sales: 290 },
  { date: 'Ven', sales: 200 },
  { date: 'Sam', sales: 340 },
  { date: 'Dim', sales: 250 },
];

export function SalesView() {
  const [period, setPeriod] = useState<Period>('day');
  const [sales, setSales] = useState<Sale[]>(mockSales); // Liste des ventes
  const [isModalOpen, setIsModalOpen] = useState(false); // État du modal
  const [modalData, setModalData] = useState<Sale | null>(null); // Données initiales pour le modal

  // Fonction pour gérer la soumission du formulaire
  const handleAddSale = (newSale: Sale) => {
    setSales((prevSales) => [...prevSales, newSale]); // Ajout de la nouvelle vente
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Gestion de Vente</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        <SalesOverviewCard
          title="Vue d'ensemble du CA"
          value="+ 7 096 €"
          period={period}
          onPeriodChange={setPeriod}
        />
        <SalesOverviewCard
          title="Vente Total"
          value="33"
          period={period}
          onPeriodChange={setPeriod}
        />
        <SalesOverviewCard
          title="CA Total"
          value="33"
          period={period}
          onPeriodChange={setPeriod}
        />
        <SalesOverviewCard
          title="Best Margin"
          value="33"
          period={period}
          onPeriodChange={setPeriod}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        <SalesOverviewCard
          className="flex flex-col items-center justify-center h-full"
          title="Bénéfice"
          value="+ 4 520 €"
          period={period}
          onPeriodChange={setPeriod}
        />
        <div className="md:col-span-2">
          <SalesChart data={mockChartData} />
        </div>
        <div className="space-y-4">
          <div className="bg-black border border-colors-white rounded-xl p-4 h-[310px]">
            <h3 className="text-s font mb-4">Stat</h3>
            <div className="space-y-3">
              <StatsCard label="Panier Moyen" value="30.11 €" />
              <StatsCard label="Taux de conversion" value="3.1%" />
              <StatsCard label="Vente J.Moyen" value="0.84" />
              <StatsCard label="Vente S.Moyen" value="14" />
              <StatsCard label="Vente M.Moyen" value="44" />
              <StatsCard label="Nouveaux Client" value="4" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black border border-colors-white rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Tableau des ventes</h2>
          <button
            className="bg-yellow-500 text-black px-4 py-2 rounded-lg flex items-center gap-2"
            onClick={() => {
              setIsModalOpen(true); // Ouvrir le modal
              setModalData(null); // Aucune donnée initiale pour le formulaire
            }}
          >
            <Plus className="w-4 h-4" />
            Ajouter Vente
          </button>
        </div>
        <SalesTable sales={sales} />
      </div>

      {/* Modal pour créer/éditer une vente */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(newSale) => {
          handleAddSale(newSale);
          setIsModalOpen(false); // Fermer le modal après soumission
        }}
        initialData={modalData}
      />
    </div>
  );
}
