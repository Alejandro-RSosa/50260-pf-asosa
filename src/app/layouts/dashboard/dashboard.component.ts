import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Students } from './pages/students/models';
import { selectAuthStudent } from '../../core/store/auth/selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  showFiller = false;

  authStudent$: Observable<Students | null>;

  constructor(private authService: AuthService, private store: Store) {
    this.authStudent$ = this.store.select(selectAuthStudent)
   }

  logout(): void {
    this.authService.logout();
  }
}
