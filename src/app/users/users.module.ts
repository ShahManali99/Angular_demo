import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { DemoService } from '../demo.service';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    DemoService
  ],
  exports: [
    LoginComponent,
    SignupComponent
  ]
})
export class UsersModule { }
