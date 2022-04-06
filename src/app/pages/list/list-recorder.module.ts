import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from 'src/app/components/components.module';


import { ListRecorderPageRoutingModule } from './list-recorder-routing.module';

import { ListRecorderPage } from './list-recorder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListRecorderPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListRecorderPage]
})
export class ListRecorderPageModule {}
