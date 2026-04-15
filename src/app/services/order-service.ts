import { Injectable, signal, computed } from '@angular/core';
import { MenuItem } from '@/models/order';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private selectedItemsState = signal<Map<string, MenuItem>>(new Map());
  private customerNameState = signal('');
  private hasBeenResetState = signal(false);

  readonly selectedItems = this.selectedItemsState.asReadonly();
  readonly customerName = this.customerNameState.asReadonly();
  readonly hasBeenReset = this.hasBeenResetState.asReadonly();

  readonly realTotal = computed(() =>
    Array.from(this.selectedItemsState().values()).reduce(
      (sum, item) => sum + item.realPrice,
      0
    )
  );

  setCustomerName(name: string): void {
    this.customerNameState.set(name);
  }

  toggleItem(item: MenuItem): void {
    const current = new Map(this.selectedItemsState());
    if (current.has(item.id)) {
      current.delete(item.id);
    } else {
      current.set(item.id, item);
    }
    this.selectedItemsState.set(current);
  }

  isSelected(id: string): boolean {
    return this.selectedItemsState().has(id);
  }

  resetOrder(): void {
    this.selectedItemsState.set(new Map());
    this.customerNameState.set('');
    this.hasBeenResetState.set(true);
  }
}