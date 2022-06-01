import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pag2Page } from './pag2.page';

const routes: Routes = [
  {
    path: '',
    component: Pag2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pag2PageRoutingModule {}
