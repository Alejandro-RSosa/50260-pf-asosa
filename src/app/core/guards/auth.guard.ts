import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../layouts/auth/auth.service';
import { map, pipe } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  // return true
  return authService
  .verifyToken()
  .pipe(
    map((isAuthenticated) =>
    isAuthenticated ? true : router.createUrlTree(['auth', 'login'])
    )
  )
};
