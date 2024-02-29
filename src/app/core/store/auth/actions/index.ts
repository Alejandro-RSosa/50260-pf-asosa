import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Students } from "../../../../layouts/dashboard/pages/students/models";


export const authActions = createActionGroup({
  source: 'auth',
  events: {
    'Set auth student': props<{ student: Students }>(),
    logout: emptyProps(),
  },
});
