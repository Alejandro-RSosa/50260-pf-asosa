import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../layouts/auth/auth.service';
import { map, pipe } from 'rxjs';



export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  // NO ME RECONOCE EL PIPE
  // return authService
  //   .verifyToken()
  //   .pipe(   // <--------------------
  //     map((isAuthenticated) =>
  //       isAuthenticated ? true : router.createUrlTree(['auth', 'login'])
  //     )
  //   );
  return !!authService.authStudent ? true : router.createUrlTree(['auth', 'login']);
};
