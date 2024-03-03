import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CreateInscriptionData, Inscription } from '../models';
import { Students } from '../../students/models';
import { Courses } from '../../courses/models';

export const InscriptionsActions = createActionGroup({
  source: 'Inscriptions',
  events: {
    'Load Inscriptions': emptyProps(),
    'Load Inscriptions Success': props<{ data: Inscription[] }>(),
    'Load Inscriptions Failure': props<{ error: unknown }>(),
    'Load Classes': emptyProps(),
    'Load Classes Success': props<{ data: Students[] }>(),
    'Load Classes Failure': props<{ error: unknown }>(),
    'Load Courses': emptyProps(),
    'Load Courses Success': props<{ data: Courses[] }>(),
    'Load Courses Failure': props<{ error: unknown }>(),
    'Create Inscript': props<{ data: CreateInscriptionData}>(),
    'Create Inscrip Success': props<{ data: Inscription }>(),
    'Create Inscrip Failure': props<{ error: unknown }>(),
  }
});
