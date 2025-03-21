import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashRoutes } from '../@core/helpers/allRoutes.helper';
import { authGuard } from '../@shared/guards/auth.guard';


const dashRoutes = new DashRoutes();
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      // {
      //   path: '',
      //   component: LoginComponent,
      //   data: { title: authRoutes.login.title },
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
