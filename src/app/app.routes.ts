import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'user-info',
    loadChildren: () => import('./user-info/user-info.module').then((m) => m.UserInfoModule),
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then((m) => m.CoursesModule),
  },
  {
    path: 'calender',
    loadChildren: () => import('./calender/calender.module').then((m) => m.CalenderModule),
  },
  {
    path: 'academic-programs',
    loadChildren: () => import('./academic-programs/academic-programs.module').then((m) => m.AcademicProgramsModule),
  },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: '**', redirectTo: '/auth' },
];
