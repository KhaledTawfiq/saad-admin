import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { CredentialsService } from '../services/credentials.service';
import { AuthRoutes } from '../../@core/helpers/allRoutes.helper';

export const authGuard: CanActivateFn = (route, state) => {
  const credentialsService = inject(CredentialsService);
  const router = inject(Router);
  const authRoutes = new AuthRoutes();

  if (credentialsService.isAuthenticated()) {
    return true;
  }

  router.navigate([authRoutes.login.route], { replaceUrl: true });
  return false;
};
