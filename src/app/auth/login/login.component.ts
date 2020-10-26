import { Component, OnInit } from '@angular/core';

// import { AuthService } from '../_services/auth.service';
// import { TokenStorageService } from '../_services/token-storage.service';

import { LoginService } from '../_services/login.service';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from '../_services/passwordValidator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../_styles/style.css']
})
export class LoginComponent{
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errMsg = '';
  roles: string[] = [];
  hide: boolean;


  constructor(formBuilder: FormBuilder, private loginService: LoginService) {
    this.form = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, PasswordValidator.cannotContainSpace])]
    });
  }
  login(){
    let result = this.loginService.login(this.form.controls['username'].value, this.form.controls['password'].value);
    if (!result){
      this.form.controls['password'].setErrors({
        invalidLogin: true
      });
    }
    else {
      console.log(this.form.value);
    }
  }
}

// constructor(private authService: AuthService, private tokenStorage: TokenStorageService) {
// }
// ngOnInit(): void {
//   if (this.tokenStorage.getToken()){
//     this.isLoggedIn = true;
//     this.roles = this.tokenStorage.getUser().roles;
//   }
// }
// onSubmit(): void {
//   this.authService.login(this.form).subscribe(
//     data => {
//       this.tokenStorage.saveToken(data.accessToken);
//       this.tokenStorage.saveUser(data);
//       this.isLoggedIn = true;
//       this.isLoginFailed = false;
//       this.roles = this.tokenStorage.getUser().roles;
//       this.reloadPage();
//     },
//     err => {
//       this.errMsg = err.error.message;
//       this.isLoginFailed = true;
//     }
//   );
//   console.log('submit test complete');
// }
// reloadPage(): void {
//   window.location.reload();
// }
