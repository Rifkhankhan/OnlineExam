import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamPage } from './exam.page';

const routes: Routes = [
	{
		path: 'tabs',
		component: ExamPage,
		children: [
			{
				path: 'home',
				children: [
					{
						path: '',   
						loadChildren: () =>
							import('./exam.module').then(m => m.ExamPageModule)
					},
					{
            path: 'view/:examid',
            loadChildren: () =>
              import('../exam/view-exam/view-exam.module').then(
                m => m.ViewExamPageModule
              )
          },
          {
            path: 'edit/:examid',
            loadChildren: () =>
              import('../exam/edit-exam/edit-exam.module').then(
                m => m.EditExamPageModule
              )
          },
          {
            path: 'add',
            loadChildren: () =>
              import('../exam/add-exam/add-exam.module').then(
                m => m.AddExamPageModule
              )
          }
				]
			},

			{
				path: '',
				redirectTo: '/dashboard/tabs/home',
				pathMatch: 'full'
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ExamPageRoutingModule {}
