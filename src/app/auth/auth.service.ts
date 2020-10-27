import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  isLoginFailed = false;
  userName = 'test';
  userPassword = 'test';
  redirectUrl: string;

  login(username, password): Observable<boolean> {
    if (username === this.userName && password === this.userPassword){
      return of(true).pipe(
        delay(1500),
        tap(val => this.isLoggedIn = true)
      );
    }
    if (username !== this.userName || password !== this.userPassword){
      console.log('if statement work');
      this.isLoginFailed = true;
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
