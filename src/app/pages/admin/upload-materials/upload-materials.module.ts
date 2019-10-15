import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UploadMaterialsPage } from './upload-materials.page';

const routes: Routes = [
  {
    path: '',
    component: UploadMaterialsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UploadMaterialsPage]
})
export class UploadMaterialsPageModule {}
