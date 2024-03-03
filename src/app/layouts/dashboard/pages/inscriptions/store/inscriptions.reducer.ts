import { createFeature, createReducer, on } from '@ngrx/store';
import { InscriptionsActions } from './inscriptions.actions';
import { Inscription } from '../models';
import { Students } from '../../students/models';
import { Courses } from '../../courses/models';

export const inscriptionsFeatureKey = 'inscriptions';

export interface State {
  inscriptions: Inscription[];
  studentToInscript: Students[],
  courses: Courses[],
  loading: boolean;
  loadingStudentToInscript: boolean;
  error: unknown;
}

export const initialState: State = {
  inscriptions: [],
  studentToInscript: [],
  courses: [],
  loading: false,
  loadingStudentToInscript: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(InscriptionsActions.loadInscriptions, (state) => ({ ...state, loading: true })),
  on(InscriptionsActions.loadInscriptionsSuccess, (state, action) => ({ ...state, loading: false, inscriptions: action.data })),
  on(InscriptionsActions.loadInscriptionsFailure, (state, action) => ({ ...state, loading: false, error: action.error })),
  on(InscriptionsActions.loadClasses, (state) => { return { ...state, loadingStudentToInscript: true } }),
  on(InscriptionsActions.loadClassesSuccess, (state, action) => { return { ...state, loadingStudentToInscript: false, studentToInscript: action.data} }),
  on(InscriptionsActions.loadCoursesSuccess, (state, action) => { return { ...state, courses: action.data} })
);

export const inscriptionsFeature = createFeature({
  name: inscriptionsFeatureKey,
  reducer,
});
