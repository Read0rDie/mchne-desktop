import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { SharedModule }   from '../shared/modules/shared.module';

import { routing }  from './account.routing';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    SharedModule
  ],
  declarations: [RegistrationFormComponent,  LoginFormComponent],
  providers:    []
})
export class AccountModule { }
