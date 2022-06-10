import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, of, tap, switchMap, combineLatest } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ArrayManipulation } from '../helpers/array.manipulation';
import { NameNationality } from '../models/name-nationality.model';
import { AppState } from '../store/app.states';

@Injectable({
  providedIn: 'root',
})
export class NameService {
  apiUrl: string;
  nationalizeUrl: string;

  constructor(
    private http: HttpClient,
    private store: Store<AppState>,
    private arrayManipulation: ArrayManipulation
  ) {
    this.apiUrl = environment['baseUrl'];
    this.nationalizeUrl = environment['nationalizeUrl'];
  }

  /*
  *   Get names from Java rest API as text format
  */
  getNames(): Observable<string> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );
    return this.http.get(this.apiUrl + 'getNames', {
      headers,
      responseType: 'text',
    });
  }

  /*
  *   get names from store and join then to be in form name[]=Name&
  *   slice the array into slices with chunch size of 10
  *   then combine multiple observables to call api each time
  */
  getNamesNationality() {
    let ArrayOfNamesArrays: string[][] = [];
    let allNames: string[] = [];
    this.store
      .select((state) => state.names.names)
      .subscribe((names) => {
        ArrayOfNamesArrays = this.arrayManipulation.getChunkFromArray(
          names,
          10
        );
        allNames = ArrayOfNamesArrays.map((namesArray: string[]) => {
          let onOperationArray = namesArray.map(
            (name) => 'name[]=' + name + '&'
          );
          return onOperationArray.join('');
        });
      });

    return combineLatest(
      allNames.map((names) => this.http.get(this.nationalizeUrl + names))
    )
  }
}
