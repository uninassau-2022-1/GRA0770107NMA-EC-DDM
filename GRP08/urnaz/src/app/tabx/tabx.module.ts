import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabxPageRoutingModule } from './tabx-routing.module';

import { TabxPage } from './tabx.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabxPageRoutingModule
  ],
  declarations: [TabxPage]
})
export class TabxPageModule {}
