import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Tehnology } from './tehnology';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class TehnologiesService {

  private _url = '../assets/data.json';

  constructor(private http: HttpClient) { }

  getTehnologies(): Observable<Tehnology[]> {
    // casting
    return this.http.get<Tehnology[]>(this._url)
                    .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Server Error!!!');
  }

}
