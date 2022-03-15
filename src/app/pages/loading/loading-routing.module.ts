import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LOadingPage } from './loading.page';

const routes: Routes = [
  {
    path: '',
    component: LOadingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LOadingPageRoutingModule {}
