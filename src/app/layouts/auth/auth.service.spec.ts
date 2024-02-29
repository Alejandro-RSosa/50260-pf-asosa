import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from "./auth.service";
import { Students } from "../dashboard/pages/students/models";

describe('Pruebas de AuthService', () => {

  let authService: AuthService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
      imports: [HttpClientTestingModule]
    });

    authService = TestBed.inject(AuthService);
    httpController = TestBed.inject(HttpTestingController);
  })
  it('AuthService debe estar definido', () => {
    expect(authService).toBeTruthy();
  });

  it('Al llamar al login() debe establecer un authStudent', () => {

    const MOCK_RESPONSE: Students[] = [
      {
        id: 45,
        firstName: 'Mock',
        lastName: 'Kcom',
        email: 'mock@mail.com',
        password: '123',
        role: 'Admin',
        token: 'lajksdnfljsdnfg',
      }
    ]

    authService.login({email: 'mock@mail.com', password: '123'}).subscribe({
      next: (student) => {
        expect(authService.authStudent).toBeTruthy();
      }
    });

    httpController.expectOne({
      url: 'http://localhost:3000/students?email=mock@mail.com&password=123',
      method: 'GET',
    }).flush(MOCK_RESPONSE)
  });
});
