import { createSelector } from "@ngrx/store";
import { AppState } from "../app.states";
import { NameNationalityState } from "./name-nationality.reducers";

export const selectNameNationalityState = (state: AppState) => state.namesNationality

export const selectNamesNationality = createSelector(
    selectNameNationalityState,
    (state: NameNationalityState) => state.nameNationality
)

export const selectError = createSelector(
    selectNameNationalityState,
    (state: NameNationalityState) => state.errorMessage
)

export const selectIsLoading = createSelector(
    selectNameNationalityState,
    (state: NameNationalityState) => state.loading,
)