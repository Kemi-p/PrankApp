export interface OrderItem {
  label: string;
  displayPrice: string;
  realPrice: number;
}

export interface OrderState {
  items: OrderItem[];
  displayTotal: string;
  realTotal: number;
  bonusItems: OrderItem[];
}