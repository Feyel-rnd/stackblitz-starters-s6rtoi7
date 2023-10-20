import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((c) => c.LoginComponent),
  },
  // loadComponent: () => import('./login/login.component')
  //                                    .then(c => c.LoginComponent),
  // children : [
  //     {
  //         path: 'login',
  //         loadComponent: () => import('./login/login.component')
  //                                    .then(c => c.LoginComponent)

  //     },
      {
          path: 'home',
          loadChildren: () => import('./home/home.routes')
                                      .then(r => r.HOME_ROUTES)

      },

  // ]
  // }
  { path: '**', component: PageNotFoundComponent },
];
