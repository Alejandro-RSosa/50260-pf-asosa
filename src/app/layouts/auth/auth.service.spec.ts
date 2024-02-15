import { TestBed } from "@angular/core/testing"
import { AuthService } from "./auth.service"

describe('Pruebas de AuthService', () => {

  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    })

    authService = TestBed.inject(AuthService);

  })
  it ('AuthService debe estar definido', () => {
    expect(authService)
  })
})
