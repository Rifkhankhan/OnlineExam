import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then( m => m.StudentPageModule),
    // canLoad:[AuthGuard]

  },
  {
    path: 'teacher',
    loadChildren: () => import('./teacher/teacher.module').then( m => m.TeacherPageModule),
    // canLoad:[AuthGuard]

  },
  {
    path: 'login',
    loadChildren: () => import('./Auth/login/login.module').then( m => m.LoginPageModule),
    // canLoad:[AuthGuard]
  },

  {
    path: 'register',
    loadChildren: () => import('./Auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'resetpassword',
    loadChildren: () => import('./Auth/resetpassword/resetpassword.module').then( m => m.ResetpasswordPageModule)
  },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
