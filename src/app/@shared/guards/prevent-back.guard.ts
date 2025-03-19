import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { SetupRoutes } from '../../@core';


export const PreventBackGuard: CanActivateFn = (route, state) => {
  const isLocalStorageAvailable = typeof window !== 'undefined' && typeof localStorage !== 'undefined';

  const router = inject(Router);
  const setupRoutes = new SetupRoutes();
  if (isLocalStorageAvailable) {
    const verificationState = localStorage.getItem('verificationState');

    if (verificationState === 'true') {
      router.navigate([setupRoutes.base.route], { replaceUrl: true });
      return false;
    }
  }

  return true;
};
