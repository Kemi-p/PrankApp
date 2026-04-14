export interface MenuItem {
  id: string;
  label: string;
  advertised: string;
  realPrice: number;
  category: MenuCategory;
}

export type MenuCategory =
  | 'coffee'
  | 'milk'
  | 'sugar'
  | 'extras'
  | 'size'
  | 'temperature'
  | 'chaos';

export interface OrderSummary {
  customerName: string;
  items: MenuItem[];
  advertisedTotal: number;
  realTotal: number;
}