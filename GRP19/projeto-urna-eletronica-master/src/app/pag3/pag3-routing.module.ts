import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pag3Page } from './pag3.page';

const routes: Routes = [
  {
    path: '',
    component: Pag3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pag3PageRoutingModule {}
