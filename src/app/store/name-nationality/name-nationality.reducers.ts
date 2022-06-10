import { createReducer, on } from '@ngrx/store';
import { NameNationality } from "src/app/models/name-nationality.model";
import { FetchNameNationality, FetchNameNationalityFailed, FetchNameNationalitySuccess } from './name-nationality.actions';

export interface NameNationalityState {
    nameNationality: NameNationality[],
    errorMessage: string,
    loading: boolean,
}

export const initialState: NameNationalityState = {
    nameNationality: [],
    errorMessage: '',
    loading: false
}

/*
*   Reducer to fetch and get list of names nationality
*/
export const NameNationalityReducer = createReducer(
    initialState,
    on(FetchNameNationality, (state, action)=>{
        return {
            ...state,
            loading: true,
        }
    }),
    on(FetchNameNationalitySuccess, (state, {nameNationality})=>{
        return {
            ...state,
            loading: false,
            nameNationality: nameNationality,
        }
    }),
    on(FetchNameNationalityFailed, (state, {error})=>{
        return {
            ...state,
            loading: false,
            errorMessage: error,
        }
    })
)