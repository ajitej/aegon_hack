import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

import { Headers, Http, RequestMethod, RequestOptions, Response } from '@angular/http';

import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';
@Injectable()
export class ApiService {

  api_url ='https://api.api.ai/api/query?v=20150910&query=';
  remaining_path='&lang=en&sessionId=c597f128-4e0c-47b2-a981-150d8b9061a3&timezone=2017-06-15T15:25:22+0200';

  constructor(private http: Http) { }

  getHeaders(): RequestOptions {
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer f96a3df951174a43bd3254d504702683'});
    const requestOptions = new RequestOptions({ headers: headers });
    return requestOptions;
  }

  private handleError(error: any) {
    return Observable.throw(error.json().error || 'Server error');
  }

  get(input: string): any {
    const request = this.http.get(this.api_url+input+this.remaining_path, this.getHeaders());
    return request.map((res: Response) => res.json())
      .catch(this.handleError)
      .share();
  }

  post(path: string, params: any): any {
    return this.http.post(`${this.api_url}/${path}/?format=json`, params)
      .map((res: Response) => res.json())
      .catch(this.handleError)
      .share();
  }
}
