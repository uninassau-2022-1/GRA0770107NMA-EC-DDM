import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pag3PageRoutingModule } from './pag3-routing.module';

import { Pag3Page } from './pag3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pag3PageRoutingModule
  ],
  declarations: [Pag3Page]
})
export class Pag3PageModule {}
