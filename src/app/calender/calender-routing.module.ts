import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../@shared/guards/auth.guard';
import { CalenderComponent } from './calender.component';


const routes: Routes = [
  {
    path: '',
    component: CalenderComponent,
    canActivate: [authGuard],
    children: [

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalenderRoutingModule {}
