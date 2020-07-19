import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddclothesPageRoutingModule } from './addclothes-routing.module';

import { AddclothesPage } from './addclothes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddclothesPageRoutingModule
  ],
  declarations: [AddclothesPage]
})
export class AddclothesPageModule {}
