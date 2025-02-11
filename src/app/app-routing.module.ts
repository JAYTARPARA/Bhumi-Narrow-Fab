import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'profile/:type/:id', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'orders/:type/:id', loadChildren: './pages/orders/orders.module#OrdersPageModule' },
  { path: 'material/:type/:id', loadChildren: './pages/material/material.module#MaterialPageModule' },
  { path: 'order-details/:orderid', loadChildren: './pages/order-details/order-details.module#OrderDetailsPageModule' },
  { path: 'upload-materials', loadChildren: './pages/admin/upload-materials/upload-materials.module#UploadMaterialsPageModule' },
  { path: 'all-orders', loadChildren: './pages/admin/all-orders/all-orders.module#AllOrdersPageModule' },
  { path: 'all-users', loadChildren: './pages/admin/all-users/all-users.module#AllUsersPageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'admin-order-details/:id', loadChildren: './pages/admin/admin-order-details/admin-order-details.module#AdminOrderDetailsPageModule' },
  { path: 'all-materials', loadChildren: './pages/admin/all-materials/all-materials.module#AllMaterialsPageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'admin-material-details/:id', loadChildren: './pages/admin/admin-material-details/admin-material-details.module#AdminMaterialDetailsPageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'admin-user-orders/:mobile/:name', loadChildren: './pages/admin/admin-user-orders/admin-user-orders.module#AdminUserOrdersPageModule' },
  { path: 'image-modal', loadChildren: './pages/image-modal/image-modal.module#ImageModalPageModule' },
  { path: 'authentication', loadChildren: './pages/authentication/authentication.module#AuthenticationPageModule' },
  { path: 'add-orders', loadChildren: './pages/admin/add-orders/add-orders.module#AddOrdersPageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'whatsapp-order-details/:id', loadChildren: './pages/admin/whatsapp-order-details/whatsapp-order-details.module#WhatsappOrderDetailsPageModule' },
  { path: 'whatsapp-orders', loadChildren: './pages/admin/whatsapp-orders/whatsapp-orders.module#WhatsappOrdersPageModule' },
];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
