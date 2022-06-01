import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pag2PageRoutingModule } from './pag2-routing.module';

import { Pag2Page } from './pag2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pag2PageRoutingModule
  ],
  declarations: [Pag2Page]
})
export class Pag2PageModule {}
