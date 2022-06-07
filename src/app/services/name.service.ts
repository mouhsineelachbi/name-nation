import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NameService {
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment['baseUrl'];
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
}
