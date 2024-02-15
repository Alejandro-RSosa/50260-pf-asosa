import { Injectable } from '@angular/core';
import { Students } from '../dashboard/pages/students/models';
import { Router } from '@angular/router';
import { AlertsService } from '../../core/services/alerts.service';
import { delay, finalize, map, of, tap } from 'rxjs';
import { LoadingService } from '../../core/services/loading.service';

interface LoginData {
  email: string | null;
  password: string | null;
}
const MOCK_ADMIN = {
  id: 100,
  email: 'admin@mail.com',
  firstName: 'FakeName',
  lastName: 'FakeLastName',
  password: 'asd',
  role: 'Admin',
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authStudent: Students | null = null

  constructor(private router: Router, private alertsService: AlertsService, private loadingService: LoadingService) {}

  private setAuthStudent(mockUser: Students): void {
    this.authStudent = mockUser;
    localStorage.setItem('token', 'Fu%uwYq@mMLK6^3c5PR9T^3GoyNbonVV^kAeURkN')
  }

  login(data: LoginData): void {
    if (data.email === MOCK_ADMIN.email && data.password === MOCK_ADMIN.password ) {
      this.setAuthStudent(MOCK_ADMIN);
      this.router.navigate(['dashboard', 'home']);
    }
    else {
        this.alertsService.showError('Error', 'Email or password invalid')
      }
    }

    logout(): void {
      this.authStudent = null;
      this.router.navigate(['auth', 'login']);
      localStorage.removeItem('token');
    }

    verifyToken() {
      this.loadingService.setIsLoading(true);
      return of(localStorage.getItem('token')).pipe(delay(1000), map((response) => !!response)),
      tap(() => {
        this.setAuthStudent(MOCK_ADMIN);
      }),
      finalize(() => this.loadingService.setIsLoading(false))
    }
  }
