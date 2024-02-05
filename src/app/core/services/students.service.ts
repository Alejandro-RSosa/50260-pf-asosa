import { Injectable } from '@angular/core';
import { Students } from '../../layouts/dashboard/pages/students/models';
import { Observable, delay, of, tap } from 'rxjs';
import { AlertsService } from './alerts.service';


let STUDENTS_DB: Students[] = [
  {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@email.com",
    "password": "password123",
    "role": "Admin"
  },
  {
    "id": 2,
    "firstName": "Alice",
    "lastName": "Smith",
    "email": "alice.smith@email.com",
    "password": "pass456",
    "role": "Student"
  },
  {
    "id": 3,
    "firstName": "Bob",
    "lastName": "Johnson",
    "email": "bob.johnson@email.com",
    "password": "qwerty789",
    "role": "Student"
  },
  {
    "id": 4,
    "firstName": "Emily",
    "lastName": "Williams",
    "email": "emily.williams@email.com",
    "password": "securePwd",
    "role": "Student"
  },
  {
    "id": 5,
    "firstName": "Michael",
    "lastName": "Davis",
    "email": "michael.davis@email.com",
    "password": "pass123",
    "role": "Student"
  },
  {
    "id": 6,
    "firstName": "Sophia",
    "lastName": "Jones",
    "email": "sophia.jones@email.com",
    "password": "myPwd456",
    "role": "Student"
  },
  {
    "id": 7,
    "firstName": "David",
    "lastName": "Brown",
    "email": "david.brown@email.com",
    "password": "brownPwd",
    "role": "Student"
  },
  {
    "id": 8,
    "firstName": "Olivia",
    "lastName": "Miller",
    "email": "olivia.miller@email.com",
    "password": "millerPass",
    "role": "Student"
  },
  {
    "id": 9,
    "firstName": "Matthew",
    "lastName": "Anderson",
    "email": "matthew.anderson@email.com",
    "password": "anderson123",
    "role": "Student"
  },
  {
    "id": 10,
    "firstName": "Ava",
    "lastName": "Wilson",
    "email": "ava.wilson@email.com",
    "password": "wilsonPwd",
    "role": "Student"
  }
]

const ROLES_DB: string[] = [ 'Admin', 'Students'];

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private alerts: AlertsService) {}

  getRoles(): Observable<string[]> {
    return of(ROLES_DB).pipe(delay(1000))
  }

  getStudents() {
    return of(STUDENTS_DB).pipe(delay(1000))
  }
  createStudents(payload: Students) {
    STUDENTS_DB.push(payload);
    return this.getStudents();
  }
  deleteStudent(studentID: number) {
    STUDENTS_DB = STUDENTS_DB.filter((student) => student.id !== studentID);
    return this.getStudents().pipe(
      tap(() =>
      this.alerts.showSuccess('Deleted', 'successfully')))
  }
}
