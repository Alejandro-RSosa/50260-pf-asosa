import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { InscriptionsActions } from './store/inscriptions.actions';
import { selectInscriptions, selectInscriptionsIsLoading } from './store/inscriptions.selectors';
import { Observable, Subscription } from 'rxjs';
import { Inscription } from './models';
import { MatDialog } from '@angular/material/dialog';
import { InscriptionDialogComponent } from './component/inscription-dialog/inscription-dialog.component';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrl: './inscriptions.component.scss'
})
export class InscriptionsComponent implements OnDestroy {

  displayedColumns = ['id', 'studentName', 'courseName']

  inscriptions: Inscription[] = [];

  subscription?: Subscription;

  isLoading$: Observable<boolean>;

  constructor(private store: Store, private matDialog: MatDialog) {
    this.subscription = this.store.select(selectInscriptions).subscribe({
      next: (inscriptions) => {
        this.inscriptions = inscriptions;
      }
    })
    this.isLoading$ = this.store.select(selectInscriptionsIsLoading)
    this.store.dispatch(InscriptionsActions.loadInscriptions())
  }

  createInscription(): void {
    this.matDialog.open(InscriptionDialogComponent)
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
