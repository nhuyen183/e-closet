import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MixnmatchPageRoutingModule } from './mixnmatch-routing.module';

import { MixnmatchPage } from './mixnmatch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MixnmatchPageRoutingModule
  ],
  declarations: [MixnmatchPage]
})
export class MixnmatchPageModule {}
