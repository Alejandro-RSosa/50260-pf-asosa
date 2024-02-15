import { Injectable } from '@angular/core';
import { Students } from '../../layouts/dashboard/pages/students/models';
import { Observable, delay, mergeMap, of, tap } from 'rxjs';
import { AlertsService } from './alerts.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';


let STUDENTS_DB: Students[] = []

const ROLES_DB: string[] = [ 'Admin', 'Students'];

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private alerts: AlertsService, private httpClient: HttpClient) {}

  getStudenById(id: number | string): Observable<Students | undefined> {
    return this.httpClient.get<Students>(`${environment.apiURL}/students/${id}`);
  }

  getRoles(): Observable<string[]> {
    return of(ROLES_DB).pipe(delay(1000))
  }

  getStudents() {
    return this.httpClient.get<Students[]>(`${environment.apiURL}/students`)
  }

  createStudents(payload: Students) {
    return this.httpClient.post<Students>(`${environment.apiURL}/students`, payload).pipe(mergeMap(() => this.getStudents()))
  }

  deleteStudent(studentID: number) {
    return this.httpClient.delete<Students>(`${environment.apiURL}/students/${studentID}`).pipe(mergeMap(() => this.getStudents()))
  }
}
