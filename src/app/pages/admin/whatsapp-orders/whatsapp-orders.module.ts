import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WhatsappOrdersPage } from './whatsapp-orders.page';

const routes: Routes = [
  {
    path: '',
    component: WhatsappOrdersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WhatsappOrdersPage]
})
export class WhatsappOrdersPageModule {}
