import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { environment } from './../../environments/environment';

@Injectable()
export class LoginService {

  constructor(private _router: Router, private http: Http) { }
  public BASE_URL: string = environment.config.BASE_URL;

  login(user) {
    return this.http.post(`${this.BASE_URL}user/userLogin`, {user}).
      toPromise().then((res: Response) => res.json());
  }

  signup(userDetails) {
    return this.http.post(`${this.BASE_URL}user/usersignin`, {userDetails}).
      toPromise().then((res: Response) => res.json());
  }

}
