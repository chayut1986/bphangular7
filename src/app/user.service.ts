import { Injectable, Inject } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions: any;

  constructor(@Inject('API_URL') private apiUrl: string, private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //'Authorization': 'Bearer ' + _token
      })
    };
  }
  async getUsers() {
    const _url = `${this.apiUrl}/api/?results=200`;
    return this.httpClient.get(_url, this.httpOptions).toPromise();

  }
}
