import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Swal, { SweetAlertOptions } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  private notifications$ = new Subject<SweetAlertOptions>()

  constructor() {
    this.notifications$.subscribe({
      next: (options) => {
        Swal.fire(options);
      },
    });
  }

  showAlert(options: SweetAlertOptions): void {
    this.notifications$.next(options);
  }
  showSuccess(title: string, msg: string): void {
    this.notifications$.next({
      icon: 'success',
      title,
      text: msg,
    })
  }
}
