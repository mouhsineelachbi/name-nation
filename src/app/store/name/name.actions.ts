import {createAction, props} from '@ngrx/store';

export enum NameActionTypes {
    FETCH_NAMES = '[Name] Fetch Names',
    FETCH_NAMES_SUCCESS = '[Name] Fetch Names Success',
    FETCH_NAMES_FAILED = '[Name] Fetch Names Failed',
}

export const FetchNames = createAction(
    NameActionTypes.FETCH_NAMES
);

export const FetchNamesSuccess = createAction(
    NameActionTypes.FETCH_NAMES_SUCCESS,
    props<{ names: string[] }>(),
);


export const FetchNamesFailed = createAction(
    NameActionTypes.FETCH_NAMES_FAILED,
    props<{ error: string }>(),
);