import { Component } from '@angular/core';
import { Donors } from 'src/app/shared/interfaces/donor.interface';
import { Ngo } from 'src/app/shared/interfaces/ngo.interface';
import { NgoService } from '../../ngo.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalDismissReasons,NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ngo',
  templateUrl: './ngo.component.html',
  styleUrls: ['./ngo.component.css']
})
export class NgoComponent {
  donorData!:Donors[]
  constructor(private ngoService:NgoService, private modalService:NgbModal) { }

  ngOnInit(): void {
    this.getngoDetails()
    this.onSubmit()
   
  }
  getngoDetails(){
    // this.ngos=this.ngoService.fetchDetail()
    this.ngoService.fetchDonors().subscribe((value:Donors[])=>
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
