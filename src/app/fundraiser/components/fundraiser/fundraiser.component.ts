import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faAngleDoubleRight, faUsers } from '@fortawesome/free-solid-svg-icons';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Donors } from 'src/app/shared/interfaces/donor.interface';

import { FundraiserService } from '../../fundraiser.service';

@Component({
  selector: 'app-fundraiser',
  templateUrl: './fundraiser.component.html',
  styleUrls: ['./fundraiser.component.css']
})
export class FundraiserComponent {
  donorData!:Donors[]

  constructor(private fundraiserService:FundraiserService,private modalService:NgbModal) { }

  ngOnInit(): void {
    this.getFundraiserDetails()
    this.onSubmit()
  }

  getFundraiserDetails(){
    // this.donorData=this.fundraiserService.fetchDetail()
    this.fundraiserService.fetchDonors().subscribe((value:Donors[])=>
    {
      this.donorData=value
      console.log(value)
    });
  }

  closeResult!: string;
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  Reactiveform = new FormGroup({
    
    driveTitle: new FormControl("", Validators.required),
    driveDescription: new FormControl("", Validators.required),
    TargetedMoney: new FormControl("", Validators.required),
    
  });
  get driveDescription(){
    return  this.Reactiveform.get('driveDescription')
   }
   get driveTitle(){
    return  this.Reactiveform.get('driveTitle')
   }
   get TargetedMoney(){
    return  this.Reactiveform.get('TargetedMoney')
   }
   onSubmit(){
    
    console.log(this.Reactiveform.value)
  
}
  icons={
    viewMore:faAngleDoubleRight,
    
    

  }
}
