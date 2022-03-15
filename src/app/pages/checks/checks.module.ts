import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChecksPageRoutingModule } from './checks-routing.module';

import { ChecksPage } from './checks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChecksPageRoutingModule
  ],
  declarations: [ChecksPage]
})
export class ChecksPageModule {}
