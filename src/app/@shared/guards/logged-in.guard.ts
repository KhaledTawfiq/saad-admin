import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { CredentialsService } from '../services/credentials.service';
import { UserInfoRoutes } from '../../@core/helpers/allRoutes.helper';


export const loggedInGuard: CanActivateFn = (route, state) => {
  const credentialsService = inject(CredentialsService);
  const router = inject(Router);
  const userInfoRoutes = new UserInfoRoutes();

  if (!credentialsService.isAuthenticated()) {
    return true;
  }

  router.navigate([userInfoRoutes.base.route], { replaceUrl: true });
  return false;
};
