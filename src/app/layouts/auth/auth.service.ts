import { Injectable } from '@angular/core';
import { Students } from '../dashboard/pages/students/models';
import { Router } from '@angular/router';
import { AlertsService } from '../../core/services/alerts.service';
import { Observable, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Store } from '@ngrx/store';
import { authActions } from '../../core/store/auth/actions';

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

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(
    private router: Router,
    private alertsService: AlertsService,
    private httpClient: HttpClient,
    private store: Store,
  ) { }

  private setAuthStudent(student: Students): void {
    this.store.dispatch(authActions.setAuthStudent({ student }))
    localStorage.setItem(
      'token',
      student.token
    );
  }

  login(data: LoginData): Observable<Students[]> {
    return this.httpClient.get<Students[]>(`${environment.apiURL}/students?email=${data.email}&password=${data.password}`
    ).pipe(tap((response) => {
      if (!!response[0]) {
        this.setAuthStudent(response[0])
        this.router.navigate(['dashboard', 'home']);
      } else {
        this.alertsService.showError('Error', 'Email or password invalid');
      }
    }))
  }

  logout(): void {
    this.store.dispatch(authActions.logout());
    this.router.navigate(['auth', 'login']);
    localStorage.removeItem('token');
  }

  verifyToken() {
    return this.httpClient.get<Students[]>(
      `${environment.apiURL}/students?token=${localStorage.getItem('token')}`
    ).pipe(map((response) => {
      if (response.length) {
        this.setAuthStudent(response[0]);
        return true;
      } else {
        this.store.dispatch(authActions.logout());
        localStorage.removeItem('token');
        return false;
      }
    }))
  }
}
