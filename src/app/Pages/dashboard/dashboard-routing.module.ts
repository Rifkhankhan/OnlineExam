import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
  },
  {
    path: 'tabs',
    component: DashboardPage,
    children: [
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./dashboard.module').then((m) => m.DashboardPageModule),
          },
        ],
      },
      {
        path: 'exam',
        children: [
          {
            path: '',
            children: [
              {
                path: '',
                loadChildren: () =>
                  import('../exam/exam.module').then((m) => m.ExamPageModule),
              },
              {
                path: 'view/:examid',
                loadChildren: () =>
                  import('../exam/view-exam/view-exam.module').then(
                    (m) => m.ViewExamPageModule
                  ),
              },
              {
                path: 'edit/:examid',
                loadChildren: () =>
                  import('../exam/edit-exam/edit-exam.module').then(
                    (m) => m.EditExamPageModule
                  ),
              },
            ],
          },
        ],
      },
      {
        path: '',
        redirectTo: '/dashboard/tabs/dashboard',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
