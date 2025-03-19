import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { CredentialsService } from '../services/credentials.service';
import { AuthRoutes} from '../../@core';
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = (route, state) => {
  const credentialsService = inject(CredentialsService);
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);
  const authRoutes = new AuthRoutes();

  // Check if the platform is browser
  const isBrowser = isPlatformBrowser(platformId);

  // If running on the server, always return true
  if (!isBrowser) {
    return true;
  }

  // If running in the browser, check authentication
  if (credentialsService.isAuthenticated) {
    return true;
  }

  router.navigate([authRoutes.login.route], { replaceUrl: true });
  return false;
};
