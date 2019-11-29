import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WhatsappOrderDetailsPage } from './whatsapp-order-details.page';

const routes: Routes = [
  {
    path: '',
    component: WhatsappOrderDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WhatsappOrderDetailsPage]
})
export class WhatsappOrderDetailsPageModule {}
