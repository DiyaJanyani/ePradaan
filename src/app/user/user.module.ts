import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ServicesComponent } from './components/services/services.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { NgbCarouselModule, NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { ShowMoreDetailsComponent } from './components/show-more-details/show-more-details.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';




@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    AboutusComponent,
    ServicesComponent,
    GalleryComponent,
    ContactusComponent,
    ShowMoreDetailsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbCarouselModule, 
    NgIf,
    RouterModule,
    Ng2SearchPipeModule,
    FormsModule,
    GooglePayButtonModule,
    NgbNavModule
  ],
  exports:[]
})
export class UserModule { }
