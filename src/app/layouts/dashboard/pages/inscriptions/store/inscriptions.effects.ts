import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { InscriptionsActions } from './inscriptions.actions';
import { InscriptionsService } from '../inscriptions.service';
import { StudentsService } from '../../../../../core/services/students.service';
import { CoursesService } from '../../courses/courses.service';


@Injectable()
export class InscriptionsEffects {

  loadInscriptions$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(InscriptionsActions.loadInscriptions),
      concatMap(() =>
        this.inscriptionsService.getInscriptions().pipe(
          map(data => InscriptionsActions.loadInscriptionsSuccess({ data })),
          catchError(error => of(InscriptionsActions.loadInscriptionsFailure({ error }))))
      )
    );
  });

  loadClasses$ = createEffect(() => {
    return this.actions$.pipe(ofType(InscriptionsActions.loadClasses),
      concatMap(() => this.studentsService.getAllStudentsToInscript().pipe(map((resp) => InscriptionsActions.loadClassesSuccess({ data: resp })),
        catchError((error) => {
          return of(InscriptionsActions.loadClassesFailure({ error }));
        })
      ))
    )
  });

  loadCourses$ = createEffect(() => {
    return this.actions$.pipe(ofType(InscriptionsActions.loadCourses),
      concatMap(() => {
        return this.coursesService.getCourses().pipe(map((resp) => InscriptionsActions.loadCoursesSuccess({ data: resp })),
          catchError((error) => of(InscriptionsActions.loadCoursesFailure({ error })))
        );
      })
    );
  });

  createInscription$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscriptionsActions.createInscript),
      concatMap((action) => {
        return this.inscriptionsService.createInscription(action.data).pipe(
          map((resp) => InscriptionsActions.createInscripSuccess({ data: resp })),
          catchError((error) => of(InscriptionsActions.createInscripFailure({ error })))
        )
      })
    )
  });

  createInscriptionSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscriptionsActions.createInscripSuccess),
      map(() => InscriptionsActions.loadInscriptions())
    );
  })

  constructor(
    private actions$: Actions,
    private inscriptionsService: InscriptionsService,
    private studentsService: StudentsService,
    private coursesService: CoursesService) { }
}
