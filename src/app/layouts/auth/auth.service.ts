import { Injectable } from '@angular/core';
import { Students } from '../dashboard/pages/students/models';
import { Router } from '@angular/router';
import { AlertsService } from '../../core/services/alerts.service';
import { delay, finalize, map, of } from 'rxjs';
import { LoadingService } from '../../core/services/loading.service';

interface LoginData {
  email: string | null;
  password: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authStudent: Students | null = null

  constructor(private router: Router, private alertsService: AlertsService, private loadingService: LoadingService) {}

  login(data: LoginData): void {
    const MOCK_STUDENT = {
      id: 11,
      email: 'student@mail.com',
      firstName: 'FakeName',
      lastName: 'FakeLastName',
      password: 'asd',
      role: 'Student',
    };
    const MOCK_ADMIN = {
      id: 100,
      email: 'admin@mail.com',
      firstName: 'FakeName',
      lastName: 'FakeLastName',
      password: 'asd',
      role: 'Admin',
    };
    if (data.email === MOCK_STUDENT.email && data.password === MOCK_STUDENT.password ) {
      this.authStudent = MOCK_STUDENT;
      localStorage.setItem('token', 'Fu%uwYq@mMLK6^3c5PR9T^3GoyNbonVV^kAeURkN')
      this.router.navigate(['dashboard', 'home']);
    }
    else if (data.email === MOCK_ADMIN.email && data.password === MOCK_ADMIN.password ) {
      this.authStudent = MOCK_ADMIN;
      localStorage.setItem('token', '7iYmHSsr9Et6nA3TPhr9tePp^%FVpAw#aWkFPiLh');
      this.router.navigate(['dashboard']);
      } else {
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
      finalize(() => this.loadingService.setIsLoading(false))
    }
  }
