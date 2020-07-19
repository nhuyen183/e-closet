import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClosetPageRoutingModule } from './closet-routing.module';

import { ClosetPage } from './closet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClosetPageRoutingModule
  ],
  declarations: [ClosetPage]
})
export class ClosetPageModule {}
