import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInscriptions from './inscriptions.reducer';

export const selectInscriptionsState = createFeatureSelector<fromInscriptions.State>(
  fromInscriptions.inscriptionsFeatureKey
);

export const selectInscriptions = createSelector(
  selectInscriptionsState,
  (state) => state.inscriptions
);

export const selectInscriptionsIsLoading = createSelector(
  selectInscriptionsState,
  (state) => state.loading
);

export const selectStudentToInscript = createSelector(
  selectInscriptionsState,
  (state) => state.studentToInscript
);
export const selectInscriptionCourses = createSelector(
  selectInscriptionsState,
  (state) => state.courses
);
