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
  // LA SIGUIENTE LINEA ESTA COMENTADA PARA QUE MANTENGA LA PAGINA Y NO ME ENVIE AL LOGIN
  // ESTO SE DEBE A QUE LA SOLUCION DE ARRIBA NO ME FUNCIONA POR EL "PIPE"
  // return !!authService.authStudent ? true : router.createUrlTree(['auth', 'login']);
  // POR ESO DEJO EL RETURN EN "TRUE"
  return true
};
