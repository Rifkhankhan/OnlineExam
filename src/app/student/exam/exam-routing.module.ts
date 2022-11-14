import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamPage } from './exam.page';

const routes: Routes = [
  {
    path: '',
    component: ExamPage
  },
  {
    path: 'view',
    loadChildren: () => import('./view/view.module').then( m => m.ViewPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamPageRoutingModule {}
