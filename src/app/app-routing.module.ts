import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonorFormComponent } from './authentication/components/donor-form/donor-form.component';
import { FundraiserLoginComponent } from './authentication/components/fundraiser-login/fundraiser-login.component';
import { NgoLoginComponent } from './authentication/components/ngo-login/ngo-login.component';
import { SignupComponent } from './authentication/components/signup/signup.component';
import { FundraiserComponent } from './fundraiser/components/fundraiser/fundraiser.component';
import { ViewMoreFundComponent } from './fundraiser/components/view-more-fund/view-more-fund.component';
import { NgoComponent } from './ngo/components/ngo/ngo.component';
import { ViewMoreComponent } from './ngo/components/view-more/view-more.component';
import { AboutusComponent } from './user/components/aboutus/aboutus.component';
import { ContactusComponent } from './user/components/contactus/contactus.component';
import { GalleryComponent } from './user/components/gallery/gallery.component';
import { HomeComponent } from './user/components/home/home.component';
import { SearchComponent } from './user/components/search/search.component';
import { ServicesComponent } from './user/components/services/services.component';
import { ShowMoreDetailsComponent } from './user/components/show-more-details/show-more-details.component';

const routes: Routes = [
  {
    path:"home",component:HomeComponent
  },
  {
    path:"",redirectTo:"home",pathMatch:"full"
  },
  {
    path:"aboutus",component:AboutusComponent
  },
  {
    path:"services",component:ServicesComponent
  },
  {
    path:"gallery",component:GalleryComponent
  },
  {
    path:"contactus",component:ContactusComponent
  },
  {
    path:"search",component:SearchComponent
  },
  {
    path:"show-details/:id",component:ShowMoreDetailsComponent
  },
  {
    path:"fundRaiser",component:FundraiserComponent
  },
  {
    path:"ngo",component:NgoComponent
  },
  {
    path:"fundraiser-login",component:FundraiserLoginComponent
  },
  {
    path:"ngo-login",component:NgoLoginComponent
  },
  {
    path:"donor-form",component:DonorFormComponent
  },
  {
    path:"signUp",component:SignupComponent
  },
  {
    path:"viewMore",component:ViewMoreComponent
  }
  ,
  {
    path:"viewMoreFund",component:ViewMoreFundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
