import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '50260-pf-asosa';

  // isLoading$ = Observable<boolean>;
  isLoading = false;

  constructor(private loadingService: LoadingService) {
    this.loadingService.loadingTrigger$.subscribe({
      next: (value) => {
        this.isLoading = value;
      },
    });
  }
}
