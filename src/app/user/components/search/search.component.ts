import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Drives } from 'src/app/shared/interfaces/drive.interface';
import { Fundraiser } from 'src/app/shared/interfaces/fundraiser.interface';
import { Detail } from 'src/app/shared/interfaces/search.interface';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  Details!:Detail[]
  Fundraiser!:Fundraiser[]
  Drives!:Drives[]
  constructor(private userService:UserService,private router: Router) { }
  searchText: any;
  ngOnInit(): void {
    this.getDataDetails()
    this. getFundraiserData()
    this.getDrivesData()
  }
  getDataDetails() {
    this.Details=this.userService.fetchDetail()
  }
  navigate(Detail:any):void{
    this.router.navigate(
      ['/show-details', Detail.id] 
  ); 
  }
  getFundraiserData() {
    this.Fundraiser=this.userService.fetchFundraiser()
  }
  navigates(Fundraiser:any):void{
    this.router.navigate(
      ['/show-details', Fundraiser.id] 
  ); 
  }
  getDrivesData() {
    this.Drives=this.userService.fetchDrives()
  }
  navigatess(Drives:any):void{
    this.router.navigate(
      ['/show-details', Drives.id] 
  ); 
  }

}
