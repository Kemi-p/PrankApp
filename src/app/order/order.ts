import { OrderService } from '@/services/order-service';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderedCat, CategoryLabels, ChaosQuestions, MenuItems, ResetAfterCat } from '@/constants/menu';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuCategory, MenuItem,  } from '@/models/order';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DestroyRef } from '@angular/core';

import { BrewCoinsPipe } from '@/pipes/coins-pipe';
import { DodgeButtonDirective } from '@/directives/dodge-button';
import { NotificationBannerComponent } from '@/shared/notifications/notifications';
import { ZardBadgeComponent } from '@/shared/components/badge';
import { ZardButtonComponent } from '@/shared/components/button';

@Component({
  selector: 'order',
  imports: [],
  templateUrl: './order.html',
})
export class OrderComponent implements OnInit {
  orderService = inject(OrderService);
  fb = inject(FormBuilder);
  router = inject(Router);

  readonly orderedCategories = OrderedCat;
  readonly categoryLabels = CategoryLabels;
  readonly chaosQuestions = ChaosQuestions;

  readonly realTotal = this.orderService.realTotal;
  readonly advertisedTotal = this.orderService.advertisedTotal;
  readonly hasBeenReset = this.orderService.hasBeenReset;

  form!: FormGroup;

  getItemsByCategory(category: MenuCategory): MenuItem[] {
    return MenuItems.filter((i) => i.category === category);
  }

  isSelected(id: string): boolean {
    return this.orderService.isSelected(id);
  }

  getChaosItems(prefix: string): MenuItem[] {
    return MenuItems.filter((i) => i.category === 'chaos' && i.id.startsWith(prefix));
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = this.fb.group({
      customerName: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
}
