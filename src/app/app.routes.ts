import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '',
    loadComponent: () =>
      import('./home/home').then(m => m.HomeComponent), 
  },
  {
    path: 'order',
    loadComponent: () =>
      import('./order/order').then(m => m.OrderComponent),
  },
];
