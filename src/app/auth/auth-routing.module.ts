import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { AuthComponent } from './auth.component';
import { AuthRoutes } from '../@core/helpers/allRoutes.helper';
import { loggedInGuard } from '../@shared/guards/logged-in.guard';


const authRoutes = new AuthRoutes();
const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    canActivate: [loggedInGuard],
    children: [
      {
        path: '',
        component: LoginComponent,
        data: { title: authRoutes.login.title },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
