import { createReducer, on } from '@ngrx/store';
import { initialState } from './../name/name.reducers';
import { NameNationality } from "src/app/model/name-nationality.model";
import { FetchNameNationality, FetchNameNationalityFailed, FetchNameNationalitySuccess } from './name-nationality.actions';

export interface NameNationalityState {
    nameNationality: NameNationality[],
    errorMessage: string,
}


export const initialState: NameNationalityState = {
    nameNationality: []
    errorMessage: ''
}

export const NameNationalityReducer = createReducer(
    initialState,
    on(FetchNameNationality, (state, action)=>{
        return {
            ...state
        }
    }),
    on(FetchNameNationalitySuccess, (state, {nameNationality})=>{
        return {
            ...state,
            nameNationality
        }
    }),
    on(FetchNameNationalityFailed, (state, {error})=>{
        return {
            ...state,
            errorMessage: error
        }
    })
)