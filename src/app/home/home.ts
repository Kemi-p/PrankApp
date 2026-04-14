import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ZardButtonComponent } from '@/shared/components/button';

@Component({
  selector: 'home',
  imports: [ZardButtonComponent],
  templateUrl: './home.html'
})
export class HomeComponent {
  private readonly router = inject(Router);

  startOrder(): void {
    this.router.navigate(['/order']);
  }
}