import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { CredentialsService } from '../services/credentials.service';
import { SetupRoutes } from '../../@core';


export const loggedInGuard: CanActivateFn = (route, state) => {
  const credentialsService = inject(CredentialsService);
  const router = inject(Router);
  const setupRoutes = new SetupRoutes();
  if (!credentialsService.isAuthenticated) {
    return true;
  }

  router.navigate([setupRoutes.base.route], { replaceUrl: true });
  return false;
};
