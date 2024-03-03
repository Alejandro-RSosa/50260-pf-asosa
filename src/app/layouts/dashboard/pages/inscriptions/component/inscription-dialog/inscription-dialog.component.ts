import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { InscriptionsActions } from '../../store/inscriptions.actions';
import { Observable } from 'rxjs';
import { Students } from '../../../students/models';
import { selectInscriptionCourses, selectStudentToInscript } from '../../store/inscriptions.selectors';
import { Courses } from '../../../courses/models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-inscription-dialog',
  templateUrl: './inscription-dialog.component.html',
  styleUrl: './inscription-dialog.component.scss'
})
export class InscriptionDialogComponent {

  studentsToInscript$: Observable<Students[]>;
  courses$: Observable<Courses[]>;

  inscriptForm: FormGroup;


  constructor(private store: Store, private formBuilder: FormBuilder, private matDialogRef: MatDialogRef<InscriptionDialogComponent>) {

    this.inscriptForm = this.formBuilder.group({
      studentId: this.formBuilder.control('', Validators.required),
      courseId: this.formBuilder.control('', Validators.required),
    })

    this.store.dispatch(InscriptionsActions.loadClasses());
    this.store.dispatch(InscriptionsActions.loadCourses());
    this.courses$ = this.store.select(selectInscriptionCourses);
    this.studentsToInscript$ = this.store.select(selectStudentToInscript);
  }
  onSubmit(): void {
    if (this.inscriptForm.invalid) {
      this.inscriptForm.markAllAsTouched();
    } else {
      this.store.dispatch(InscriptionsActions.createInscript({ data: this.inscriptForm.value }));
      this.matDialogRef.close();
    }
  }
}
