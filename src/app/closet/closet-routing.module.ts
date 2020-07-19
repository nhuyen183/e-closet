import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClosetPage } from './closet.page';

const routes: Routes = [
  {
    path: '',
    component: ClosetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClosetPageRoutingModule {}
