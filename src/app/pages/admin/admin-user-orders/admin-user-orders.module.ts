import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdminUserOrdersPage } from './admin-user-orders.page';

const routes: Routes = [
  {
    path: '',
    component: AdminUserOrdersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminUserOrdersPage]
})
export class AdminUserOrdersPageModule {}
