import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule' },
  { path: 'profile/:type/:id', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'orders/:type/:id', loadChildren: './pages/orders/orders.module#OrdersPageModule' },
  { path: 'material/:type/:id', loadChildren: './pages/material/material.module#MaterialPageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'order-details/:orderid', loadChildren: './pages/order-details/order-details.module#OrderDetailsPageModule' },
];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
