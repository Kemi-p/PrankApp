import { Component, input, output } from '@angular/core';

@Component({
  selector: 'notification-banner',
  standalone: true,
  templateUrl: './notifications.html',
})
export class NotificationBannerComponent {
  readonly message = input.required<string>();
  readonly index = input.required<number>();
  readonly dismissed = output<number>();

  dismiss(): void {
    this.dismissed.emit(this.index());
  }
}