import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationConstant } from '../shared/constants/ApplicationConstant';
import { Donors } from '../shared/interfaces/donor.interface';
// import { Fundraiser } from '../shared/interfaces/fundraiser.interface';

@Injectable({
  providedIn: 'root'
})
export class FundraiserService {
  donorData: Donors[] =[]
  fetchDetail():Donors[]{
    return this.donorData
  }


  constructor(private httpClient:HttpClient) { }
  fetchDonors():Observable<any>{
    return this.httpClient.get(`${ApplicationConstant.APIURL}/viewDonorsFundraiser`);
  }
  fetchOneDonor():Observable<any>{
    return this.httpClient.get(`${ApplicationConstant.APIURL}/viewDonorsFundraiser`);
  }

}
