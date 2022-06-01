import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'pag1',
    loadChildren: () => import('./pag1/pag1.module').then( m => m.Pag1PageModule)
  },
  {
    path: 'pag2',
    loadChildren: () => import('./pag2/pag2.module').then( m => m.Pag2PageModule)
  },
  {
    path: 'pag3',
    loadChildren: () => import('./pag3/pag3.module').then( m => m.Pag3PageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
