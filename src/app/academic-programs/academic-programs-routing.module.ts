import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../@shared/guards/auth.guard';
import { AcademicProgramsComponent } from './academic-programs.component';


const routes: Routes = [
  {
    path: '',
    component: AcademicProgramsComponent,
    canActivate: [authGuard],
    children: [
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcademicProgramsRoutingModule {}
