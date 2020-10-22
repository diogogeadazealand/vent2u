import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent} from './login.component';
import { AuthService } from './login.service';
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-gaurd.service';
import { AuthGuard } from './auth-gaurd.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [],
  providers: [
    AuthService,
    PreventUnsavedChangesGuard,
    AuthGuard
  ]
})
export class LoginModule{
}
