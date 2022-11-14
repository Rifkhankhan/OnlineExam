import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddExamPage } from './add-exam.page';

const routes: Routes = [
  {
    path: '',
    component: AddExamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddExamPageRoutingModule {}
