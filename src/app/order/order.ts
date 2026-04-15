import { OrderService } from '@/services/order-service';
import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { OrderedCat, CategoryLabels, ChaosQuestions, MenuItems, ResetAfterCat } from '@/constants/menu';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MenuCategory, MenuItem,  } from '@/models/order';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DestroyRef } from '@angular/core';

import { BrewCoinsPipe } from '@/pipes/coins-pipe';
import { DodgeButtonDirective } from '@/directives/dodge-button';
import { NotificationBannerComponent } from '@/shared/notifications/notifications';
import { ZardBadgeComponent } from '@/shared/components/badge';
import { ZardButtonComponent } from '@/shared/components/button';
import { ZardCheckboxComponent } from '@/shared/components/checkbox';

import { NotificationsMessages } from '@/constants/notifications';

@Component({
  selector: 'order',
  imports: [ ReactiveFormsModule, NotificationBannerComponent,DodgeButtonDirective,BrewCoinsPipe,ZardButtonComponent,ZardBadgeComponent,ZardCheckboxComponent,FormsModule],
  templateUrl: './order.html',
})
export class OrderComponent implements OnInit {
  orderService = inject(OrderService);
  fb = inject(FormBuilder);
  router = inject(Router);

  readonly orderedCategories = OrderedCat;
  readonly categoryLabels = CategoryLabels;
  readonly chaosQuestions = ChaosQuestions;
  readonly notificationMessages= NotificationsMessages;

  //signals for state
   readonly activeNotifications = signal<number[]>([...Array(10).keys()]);
  readonly notificationsVisible = signal(false);
  readonly formInteracted = signal(false);
  readonly resetBannerVisible = signal(false);
  readonly submitDodgeEnabled = signal(false);
  readonly hasCompletedOnce = signal(false);
  readonly runningTotal = signal(0);

  readonly realTotal = this.orderService.realTotal;
  readonly advertisedTotal = this.orderService.advertisedTotal;
  readonly hasBeenReset = this.orderService.hasBeenReset;

  readonly canSubmit = computed(
    () => this.hasBeenReset() && this.formInteracted() && this.activeNotifications().length === 0
  );

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

   onNameInput(): void {
    const name = this.form.get('customerName')?.value ?? '';
    this.orderService.setCustomerName(name);
  }

  onFirstInteraction(): void {
    if (this.formInteracted()) return;
    this.formInteracted.set(true);
    this.notificationsVisible.set(true);
  }

  dismissNotification(index: number): void {
    this.activeNotifications.update(n => n.filter(i => i !== index));
  }

  toggleItem(item: MenuItem, categoryIndex: number): void {
    this.orderService.toggleItem(item);

    // Trigger reset after second-last category (index 4 = size)
    if (categoryIndex === ResetAfterCat && !this.hasBeenReset()) {
      setTimeout(() => this.triggerReset(), 300);
    }
  }

  private triggerReset(): void {
    this.orderService.resetOrder();
    this.resetBannerVisible.set(true);
    this.hasCompletedOnce.set(false);
    this.submitDodgeEnabled.set(false);
    this.buildForm();

    setTimeout(() => {
      this.resetBannerVisible.set(false);
    }, 4000);
  }

  dismissResetBanner(): void {
    this.resetBannerVisible.set(false);
  }

  onSubmit(): void {
    if (!this.canSubmit()) return;
    if (this.form.invalid) return;
    this.router.navigate(['/loading']);
  }

  nameError = computed(() => {
    const ctrl = this.form?.get('customerName');
    if (!ctrl || !ctrl.touched) return null;
    if (ctrl.hasError('required')) return 'Name is required. The barista needs to call someone.';
    if (ctrl.hasError('minlength')) return "That's not a real name. Try harder.";
    return null;
  });
}
