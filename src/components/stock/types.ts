export interface StockItem {
  id: string;
  product: string;
  reference: string;
  quantity: number;
  unitPrice: number;
  salePrice: number;
  totalPrice?: number;
}

export interface StockSummary {
  totalProducts: number;
  totalValue: number;
  pendingOrders: number;
  lowStockCount: number;
}

export interface LowStockItem {
  product: string;
  reference: string;
  stock: number;
}