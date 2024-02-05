import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loadingTrigger$ = new Subject<boolean>();

  public isLoading$ = this.loadingTrigger$.asObservable();

  setIsLoading(value: boolean): void {
    this.loadingTrigger$.next(value);
  }
}
