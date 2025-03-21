import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { CredentialsService } from '../services/credentials.service';
import { DashRoutes } from '../../@core/helpers/allRoutes.helper';


export const loggedInGuard: CanActivateFn = (route, state) => {
  const credentialsService = inject(CredentialsService);
  const router = inject(Router);
  const dashRoutes = new DashRoutes();

  if (!credentialsService.isAuthenticated()) {
    return true;
  }

  router.navigate([dashRoutes.base.route], { replaceUrl: true });
  return false;
};
