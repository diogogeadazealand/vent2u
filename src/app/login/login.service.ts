import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import * as Http from '@angular/common/http';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = true;
  // store the URL so we can redirect after logging in
  public redirectUrl: string;

  constructor(
    private http: Http,
    private router: Router
  ) {}

  login(username, password): Observable<boolean> {
    const body = {
      username,
      password
    };
    return this.http.post('api/login', JSON.stringify(body)).map((res: Response) => {
      // do whatever with your response
      this.isLoggedIn = true;
      if (this.redirectUrl) {
        this.router.navigate([this.redirectUrl]);
        this.redirectUrl = null;
      }
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
