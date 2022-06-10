import { createSelector } from "@ngrx/store";
import { AppState } from "../app.states";
import { NamesState } from "./name.reducers";

export const selectNamesState = (state: AppState) => state.names

/*
    select name state
*/
export const selectNames = createSelector(
    selectNamesState,
    ( state: NamesState ) => state.names,
);

/*
    Select error from state
*/
export const selectErrorMessage = createSelector(
    selectNamesState,
    ( state: NamesState ) => state.errorMessage
)