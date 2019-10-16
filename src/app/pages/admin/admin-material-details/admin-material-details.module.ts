import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdminMaterialDetailsPage } from './admin-material-details.page';

const routes: Routes = [
  {
    path: '',
    component: AdminMaterialDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminMaterialDetailsPage]
})
export class AdminMaterialDetailsPageModule {}
