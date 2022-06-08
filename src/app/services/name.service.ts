import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NameNationality } from '../model/name-nationality.model';
import { AppState } from '../store/app.states';

@Injectable({
  providedIn: 'root',
})
export class NameService {
  apiUrl: string;
  nationalizeUrl: string;

  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.apiUrl = environment['baseUrl'];
    this.nationalizeUrl = environment['nationalizeUrl'];

  }

  getNames(): Observable<string>{
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );
    return this.http
      .get(this.apiUrl + 'getNames', {
        headers,
        responseType: 'text',
      })
  }

  getNamesNationality(): Observable<NameNationality> {
    let name:string[] = []
    this.store.select((state)=> state.names.names).subscribe(res => name = res)
    return this.http.get<NameNationality>(this.nationalizeUrl)
  }
}
