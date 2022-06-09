import { NameNationality } from 'src/app/models/name-nationality.model';
import { catchError, map, of, switchMap, tap, mergeMap } from 'rxjs';
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

      fetchNameNationality = createEffect(()=>
        this.actions.pipe(
            ofType(NameNationalityActionTypes.FETCH_NAMENATIONALITY),
            switchMap((action: any)=>  {
                return this.service.getNamesNationality().pipe(
                    map((names: any) => FetchNameNationalitySuccess({ nameNationality: names})),
                    tap((names: any) => console.log(names)),
                    catchError((error: any) => of(FetchNameNationalityFailed({ error })))
                )
            })
        )
      )
}