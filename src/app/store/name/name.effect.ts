import { NameService } from './../../services/name.service';
import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FetchNamesSuccess, NameActionTypes } from './name.actions';
import { map, of, switchMap } from 'rxjs';

@Injectable()
export class NamesEffect {
  constructor(
    @Inject(Actions) private actions: Actions,
    private service: NameService
  ) {}

  fetchNames = createEffect(() =>
    this.actions.pipe(
      ofType(NameActionTypes.FETCH_NAMES),
      switchMap((action: any) => {
        return this.service.getNames().pipe(
          map((names) => FetchNamesSuccess({ names })),
          catchError((error) => of(FetchNamesFailed({ error })))
        );
      })
    )
  );
}
