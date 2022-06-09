import { createAction, props } from '@ngrx/store';
import { NameNationality } from 'src/app/models/name-nationality.model';

export enum NameNationalityActionTypes {
    FETCH_NAMENATIONALITY = '[Name] Fetch Name Nationality',
    FETCH_NAMENATIONALITY_SUCCESS = '[Name] Fetch Name Nationality Success',
    FETCH_NAMENATIONALITY_FAILED = '[Name] Fetch Name Nationality Failed',
}

export const FetchNameNationality = createAction(
    NameNationalityActionTypes.FETCH_NAMENATIONALITY
);

export const FetchNameNationalitySuccess = createAction(
    NameNationalityActionTypes.FETCH_NAMENATIONALITY_SUCCESS,
    props<{ nameNationality: NameNationality[] }>(),
);

export const FetchNameNationalityFailed = createAction(
    NameNationalityActionTypes.FETCH_NAMENATIONALITY_FAILED,
    props<{ error: string}>()
)
