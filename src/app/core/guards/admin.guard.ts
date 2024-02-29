import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAuthStudent } from '../store/auth/selectors';
import { map } from 'rxjs';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const store = inject(Store);

  return store.select(selectAuthStudent).pipe(
    map((student) => {
    return student?.role === 'Admin' ? true : router.createUrlTree(['dashboard', 'home']);
  }))
};
