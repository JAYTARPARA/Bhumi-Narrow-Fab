import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AllMaterialsPage } from './all-materials.page';

const routes: Routes = [
  {
    path: '',
    component: AllMaterialsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AllMaterialsPage]
})
export class AllMaterialsPageModule {}
