import { createSelector } from "@ngrx/store";
import { AppState } from "../app.states";
import { NamesState } from "./name.reducers";

export const selectNamesState = (state: AppState) => state.names

export const selectNames = createSelector(
    selectNamesState,
    ( state: NamesState ) => state.names,
);


export const selectErrorMessage = createSelector(
    selectNamesState,
    ( state: NamesState ) => state.errorMessage
)