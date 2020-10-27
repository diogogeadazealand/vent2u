import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../_styles/auth.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  isSuccesful = false;
  isSignUpFailed = false;
  errMsg = '';
  hide: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    // this.authService.register(this.form).subscribe(
    //   data => {
    //     console.log(data);
    //     this.isSuccesful = true;
    //     this.isSignUpFailed = false;
    //   },
    //   err => {
    //     this.errMsg = err.error.message;
    //     this.isSignUpFailed = true;
    //   }
    // );
  }

}
