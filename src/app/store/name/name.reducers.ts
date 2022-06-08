import { createReducer, on } from "@ngrx/store";
import { FetchNames, FetchNamesFailed, FetchNamesSuccess } from "./name.actions";

export interface NamesState {
    names: string[]
    errorMessage: string
}

export const initialState: NamesState = {
    names: [],
    errorMessage: '',
};

export const NamesReducers = createReducer(
    initialState,
    on(FetchNames, (state, action) => {
        return {
            ...state,
        }
    }),
    on(FetchNamesSuccess, (state, {names}) => {
        return {
            ...state,
            names,
        }
    }),
    on(FetchNamesFailed, (state, { error }) => {
        return {
            ...state,
            errorMessage: error,
        }
    })
);