import { NameService } from '../../services/name.service';
import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  FetchNamesFailed,
  FetchNamesSuccess,
  NameActionTypes,
} from './name.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { FetchNameNationality } from '../name-nationality/name-nationality.actions';

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
          catchError((error: any) =>
            of(FetchNamesFailed({ error: JSON.parse(error.error).message }))
          )
        );
      })
    )
  );
}
