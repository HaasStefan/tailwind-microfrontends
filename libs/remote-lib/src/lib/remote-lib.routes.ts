import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'beautiful',
    pathMatch: 'full',
  },
  {
    path: 'beautiful',
    loadComponent: async () =>
      (await import('./beauty/beauty.component')).BeautyComponent,
  }
];
