import { Component } from '@angular/core';
import { Donors } from 'src/app/shared/interfaces/donor.interface';
import { FundraiserService } from '../../fundraiser.service';

@Component({
  selector: 'app-view-more-fund',
  templateUrl: './view-more-fund.component.html',
  styleUrls: ['./view-more-fund.component.css']
})
export class ViewMoreFundComponent {
  donorData!:Donors[]

  constructor(private fundraiserService:FundraiserService) { }

  ngOnInit(): void {
    this.getFundraiserDetails()
    
  }
  getFundraiserDetails(){
    // this.donorData=this.fundraiserService.fetchDetail()
    this.fundraiserService.fetchOneDonor().subscribe((value:Donors[])=>
    {
      this.donorData=value
      console.log(value)
    });
  }
}
