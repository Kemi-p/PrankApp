import {
  Component,
  DestroyRef,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
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

  ngOnInit(): void {
      
  }

}