import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import {Observable} from 'rxjs';


@Injectable()
export class AuthService {
  isLoggedIn = true;
  // store the URL so we can redirect after logging in
  public redirectUrl: string;
  private http: any;

  constructor(
    private router: Router
  ) {}

  login(username, password) {
    this.isLoggedIn = username === '123' && password === '123';
    this.router.navigate(['default']);
    return this.isLoggedIn;
    // const body = {
    //   username,
    //   password
    // };
    // console.log('ding');
    // return this.http.post('api/login', JSON.stringify(body)).map((res: Response) => {
    //   // do whatever with your response
    //   this.isLoggedIn = true;
    //   if (this.redirectUrl) {
    //     this.router.navigate([this.redirectUrl]);
    //     this.redirectUrl = null;
    //   }
    // });
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
