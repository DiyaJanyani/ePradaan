import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { RouterModule } from '@angular/router';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { FundraiserModule } from './fundraiser/fundraiser.module';
import { NgoModule } from './ngo/ngo.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    SharedModule,
    UserModule,
    GooglePayButtonModule,
    FundraiserModule,
    NgoModule,
    AuthenticationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
