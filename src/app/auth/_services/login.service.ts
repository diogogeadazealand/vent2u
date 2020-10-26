import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
@Injectable(
)
export class LoginService {
  isLoggedIn = false;
  login(username, password){
    if (username === 'valdimir' && password === 'takeout') {
      this.isLoggedIn = true;
    }
    else {
      this.isLoggedIn = false;
    }
    return this.isLoggedIn;
  }
  logout(){
    this.isLoggedIn = false;
    return this.isLoggedIn;
  }
}
