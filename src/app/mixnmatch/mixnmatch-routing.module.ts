import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MixnmatchPage } from './mixnmatch.page';

const routes: Routes = [
  {
    path: '',
    component: MixnmatchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MixnmatchPageRoutingModule {}
