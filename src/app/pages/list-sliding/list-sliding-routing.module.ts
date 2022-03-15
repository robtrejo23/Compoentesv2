import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListSlidingPage } from './list-sliding.page';

const routes: Routes = [
  {
    path: '',
    component: ListSlidingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListSlidingPageRoutingModule {}
