import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListRecorderPage } from './list-recorder.page';

const routes: Routes = [
  {
    path: '',
    component: ListRecorderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRecorderPageRoutingModule {}
