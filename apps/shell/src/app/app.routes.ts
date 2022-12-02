import { Route, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'remote',
    pathMatch: 'full',
  },
  {
    path: 'remote',
    loadChildren: async () =>
      (
        await loadRemoteModule<{ routes: Routes }>({
          type: 'module',
          remoteEntry: 'http://localhost:4201/remoteEntry.js',
          exposedModule: './Routes',
        })
      ).routes,
  },
];
