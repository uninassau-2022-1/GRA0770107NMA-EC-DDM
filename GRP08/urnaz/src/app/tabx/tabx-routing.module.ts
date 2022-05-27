import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabxPage } from './tabx.page';

const routes: Routes = [
  {
    path: '',
    component: TabxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabxPageRoutingModule {}
