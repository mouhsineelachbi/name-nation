import { catchError, switchMap } from 'rxjs';
import { Inject, Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { NameService } from "src/app/services/name.service";
import { FetchNameNationality, NameNationalityActionTypes } from "./name-nationality.actions";

@Injectable()
export class NameNationalityEffect {
    constructor(
        @Inject(Actions) private actions: Actions,
        private service: NameService
      ) {}

      fetchNameNationality = createEffect(()=>
        this.actions.pipe(
            ofType(NameNationalityActionTypes.FETCH_NAMENATIONALITY)
            switchMap((action: any)=>  {
                return this.service.getNamesNationality().pipe(
                    map((names) => FetchNameNationalitySuccess({ nameNationality: names})),
                    catchError((error: any) => of(FetchNameNationalityFailed({ error })))
                )
            })
        )
      )
}