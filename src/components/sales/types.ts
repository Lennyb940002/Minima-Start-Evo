export type Period = 'day' | 'week' | 'month';

export interface Sale {
  id: string;
  product: string;
  reference: string;
  quantity: number;
  salePrice: number;
  unitPrice: number;
  totalPrice: number;
  date: string;
  client: string;
  paymentMethod: string;
  status: 'pending' | 'completed' | 'cancelled';
}

export interface SalesChartData {
  date: string;
  sales: number;
}