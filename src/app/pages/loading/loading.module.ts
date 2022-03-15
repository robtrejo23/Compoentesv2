import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LOadingPageRoutingModule } from './loading-routing.module';

import { LOadingPage } from './loading.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LOadingPageRoutingModule
  ],
  declarations: [LOadingPage]
})
export class LOadingPageModule {}
