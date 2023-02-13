import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NgoLoginComponent } from './components/ngo-login/ngo-login.component';
import { FundraiserLoginComponent } from './components/fundraiser-login/fundraiser-login.component';
import { NgoModule } from '../ngo/ngo.module';
import { RouterModule } from '@angular/router';
import { DonorFormComponent } from './components/donor-form/donor-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    NgoLoginComponent,
    FundraiserLoginComponent,
    DonorFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    NgoLoginComponent,
    FundraiserLoginComponent,
    DonorFormComponent,
    SignupComponent
  ]
})
export class AuthenticationModule { }
