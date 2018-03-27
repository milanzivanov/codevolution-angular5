import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tehnology } from './tehnology';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TehnologiesService {

  private _url = '../assets/data.json';

  constructor(private http: HttpClient) { }

  getTehnologies(): Observable<Tehnology[]> {
    // casting
    return this.http.get<Tehnology[]>(this._url);
  }

}
