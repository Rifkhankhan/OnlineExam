import { ProfilePageModule } from './profile/profile.module';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherPage } from './teacher.page';

const routes: Routes = [
	{
		path: 'tabs',
		component: TeacherPage,
		children: [
			{
				path: 'exam',
				children: [
					{
						path: '',
						loadChildren: () =>
							import('./exam/exam.module').then(m => m.ExamPageModule)
					},
					{
						path: 'edit/:examid',
						loadChildren: () =>
							import('./exam/edit/edit.module').then(m => m.EditPageModule)
					},
					{
						path: 'view/:examid',
						loadChildren: () =>
							import('./exam/view/view.module').then(m => m.ViewPageModule)
					},
					{
						path: 'add',
						loadChildren: () =>
							import('./exam/add/add.module').then(m => m.AddPageModule)
					}
				]
			},
			{
				path: 'student',
				children: [
					{
						path: '',
						loadChildren: () =>
							import('./student/student.module').then(m => m.StudentPageModule)
					},
					{
						path: 'edit/:studentid',
						loadChildren: () =>
							import('./student/edit/edit.module').then(m => m.EditPageModule)
					},
					{
						path: 'view/:studentid',
						loadChildren: () =>
							import('./student/view/view.module').then(m => m.ViewPageModule)
					},
					{
						path: 'add',
						loadChildren: () =>
							import('./student/add/add.module').then(m => m.AddPageModule)
					},
					{
						path: 'resetPassword',
						loadChildren: () =>
							import('./student/resetpassword/resetpassword.module').then(
								m => m.ResetpasswordPageModule
							)
					}
				]
			},

			{
				path: 'profile',
				loadChildren: () =>
					import('./profile/profile.module').then(m => m.ProfilePageModule)
			},
			{
				path: '',
				redirectTo: '/teacher/tabs/exam',
				pathMatch: 'full'
			}
		]
	},
	{
		path: '',
		redirectTo: '/teacher/tabs/exam',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TeacherPageRoutingModule {}
