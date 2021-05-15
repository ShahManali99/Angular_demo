import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { DemoService } from '../demo.service';
import { AppRoutingModule, routingComponents } from '../app-routing.module';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { TvComponent } from './products/tv/tv.component';
import { WashingMachineComponent } from './products/washing-machine/washing-machine.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    routingComponents,
    LaptopComponent,
    MobileComponent,
    TvComponent,
    WashingMachineComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule
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
