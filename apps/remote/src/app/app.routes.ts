import { Route } from '@angular/router';

export const routes: Route[] = [
    {
        path: '',
        loadChildren: async () =>
        (await import('@tailwind-microfrontends/remote-lib')).routes
    }
];
