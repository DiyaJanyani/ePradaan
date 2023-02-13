import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundraiserComponent } from './components/fundraiser/fundraiser.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ViewMoreFundComponent } from './components/view-more-fund/view-more-fund.component';



@NgModule({
  declarations: [
    FundraiserComponent,
    ViewMoreFundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule
  ],
  exports:[
    FundraiserComponent,
    ViewMoreFundComponent
    
  ]
})
export class FundraiserModule { }
