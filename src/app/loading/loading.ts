import {
  Component,
  computed,
  DestroyRef,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { ZardButtonComponent } from '@/shared/components/button';
import { ZardProgressBarComponent } from '@/shared/components/progress-bar';
import { OrderService } from '@/services/order-service';
import { BrewCoinsPipe } from '@/pipes/coins-pipe';

@Component({
  selector: 'loading',
  imports: [ZardButtonComponent, ZardProgressBarComponent, BrewCoinsPipe],
  templateUrl: './loading.html',
})
export class LoadingComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly orderService = inject(OrderService);

  readonly elapsed = signal(0);
  readonly displayTotal = signal(this.orderService.realTotal());
  readonly showMilkMessage = signal(false);
  readonly showGif = signal(false);

  readonly progressMessage = computed(() => {
    if (this.elapsed() < 5) return 'Sending your order to the barista...';
    if (this.elapsed() < 10) return "Waiting for my dad to come back with the milk...";
    return "He's still not back.";
  });

  ngOnInit(): void {
    interval(1000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.elapsed.update(e => e + 1);

        if (this.elapsed() === 5) {
          this.showMilkMessage.set(true);
        }

        if (this.elapsed() === 10) {
          this.showGif.set(true);
        }
      });
  }

  tryAgain(): void {
    this.orderService.resetOrder();
    this.router.navigate(['/']);
  }
}