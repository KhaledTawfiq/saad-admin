import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoComponent } from './user-info.component';
import { UserInfoRoutes } from '../@core/helpers/allRoutes.helper';
import { authGuard } from '../@shared/guards/auth.guard';


const userInfoRoutes = new UserInfoRoutes();
const routes: Routes = [
  {
    path: '',
    component: UserInfoComponent,
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
export class UserInfoRoutingModule {}
