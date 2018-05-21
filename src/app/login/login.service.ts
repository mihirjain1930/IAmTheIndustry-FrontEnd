import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { environment } from './../../environments/environment';

@Injectable()
export class LoginService {

  constructor(private _router: Router, private http: Http) { }
  public BASE_URL: string = environment.config.BASE_URL;

  signup(userDetails) {
    return this.http.post(`${this.BASE_URL}user/usersignup`, {userDetails}).
      toPromise().then((res: Response) => res.json());
  }

  getDetails(token) {
    return this.http.get(`${this.BASE_URL}user/userdetails/${token}`).
      toPromise().then((res: Response) => res.json());
  }

  logoutUser(email) {
    return this.http.get(`${this.BASE_URL}user/logout/${email}`).
      toPromise().then((res: Response) => res.json());
  }

}
