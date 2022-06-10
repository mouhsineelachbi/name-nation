import { createReducer, on } from "@ngrx/store";
import { FetchNames, FetchNamesFailed, FetchNamesSuccess } from "./name.actions";

export interface NamesState {
    names: string[],
    errorMessage: string
}

export const initialState: NamesState = {
    names: [],
    errorMessage: '',
};

/*
*   Reducer to fetch and get list of names
*/
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
            names: names.split(","),
        }
    }),
    on(FetchNamesFailed, (state, { error }) => {
        return {
            ...state,
            errorMessage: error,
        }
    })
);