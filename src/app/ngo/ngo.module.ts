import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgoComponent } from './components/ngo/ngo.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewMoreComponent } from './components/view-more/view-more.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    NgoComponent,
    ViewMoreComponent
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
    NgoComponent,
    ViewMoreComponent
  ]
})
export class NgoModule { }
