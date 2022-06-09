import { NameNationalityState } from "./name-nationality/name-nationality.reducers";
import { NamesState } from "./name/name.reducers";

export interface AppState {
    names: NamesState,
    namesNationality: NameNationalityState,
}