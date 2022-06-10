import { NameNationality } from 'src/app/models/name-nationality.model';
import { catchError, map, of, switchMap, tap, mergeMap, mergeAll } from 'rxjs';
import { Inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { NameService } from "src/app/services/name.service";
import { FetchNameNationality, FetchNameNationalityFailed, FetchNameNationalitySuccess, NameNationalityActionTypes } from "./name-nationality.actions";

@Injectable()
export class NameNationalityEffect {
    constructor(
        @Inject(Actions) private actions: Actions,
        private service: NameService
      ) {}

      /*
        Effect to fetch list of names nationalities from API
        if it's done success action will be sent
        if it's not done failed action will be sent
    */
      fetchNameNationality = createEffect(()=>
        this.actions.pipe(
            ofType(NameNationalityActionTypes.FETCH_NAMENATIONALITY),
            switchMap((action: any)=>  {
                return this.service.getNamesNationality().pipe(
                    map((names: any) => FetchNameNationalitySuccess({ nameNationality: [].concat.apply([], names)})),
                    tap((names: any) => console.log(names)),
                    catchError((error: any) => of(FetchNameNationalityFailed({ error })))
                )
            })
        )
      )
}