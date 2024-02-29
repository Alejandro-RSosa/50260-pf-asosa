import { createReducer, on } from "@ngrx/store";
import { Students } from "../../../../layouts/dashboard/pages/students/models";
import { authActions } from "../actions";

export const featureName = 'auth';

export interface AuthState {
  student: Students | null;
}

const initialState: AuthState = {
  student: null,
};

export const authReducer = createReducer(initialState, on(authActions.setAuthStudent, (state, action) => {
  return {
    ...state,
    student: action.student
  };
}),
  on(authActions.logout, () => initialState)
);
