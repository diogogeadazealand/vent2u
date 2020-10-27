import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../shared/_styles/auth.css']
})
export class LoginComponent {
  form = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  message: string;
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(public authService: AuthService, public router: Router) {
  }

  setMessage() { // TODO This needs to work somehow....
    if (this.authService.isLoginFailed === true){
      this.message = 'Incorrect Credentials';
    }
    if (this.authService.isLoginFailed === false){
      this.message = 'Logging In';
    }
  }

  login() {
    this.setMessage();
    this.authService.login(this.form.controls['username'].value, this.form.controls['password'].value).subscribe(() => {
      if (this.authService.isLoggedIn) {

        // Usually you would use the redirect URL from the auth service.
        const redirectUrl = '/Dashboard/Temperature';

        // Set our navigation extras object
        // that passes on our global query params and fragment
        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };
        this.router.navigate([redirectUrl], navigationExtras);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}

