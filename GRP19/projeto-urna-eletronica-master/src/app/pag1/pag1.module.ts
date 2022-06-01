import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pag1PageRoutingModule } from './pag1-routing.module';

import { Pag1Page } from './pag1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    IonicModule,
    Pag1PageRoutingModule
  ],
  declarations: [Pag1Page]
})
export class Pag1PageModule {}
