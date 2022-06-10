import { createSelector } from "@ngrx/store";
import { AppState } from "../app.states";
import { NameNationalityState } from "./name-nationality.reducers";

export const selectNameNationalityState = (state: AppState) => state.namesNationality

/*
    Select name nationality
*/
export const selectNamesNationality = createSelector(
    selectNameNationalityState,
    (state: NameNationalityState) => state.nameNationality
)

/*
    Select Error
*/
export const selectError = createSelector(
    selectNameNationalityState,
    (state: NameNationalityState) => state.errorMessage
)

/*
    Select loading state
*/
export const selectIsLoading = createSelector(
    selectNameNationalityState,
    (state: NameNationalityState) => state.loading,
)