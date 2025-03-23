import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../@shared/guards/auth.guard';
import { CoursesComponent } from './courses.component';


const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    canActivate: [authGuard],
    children: [

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
