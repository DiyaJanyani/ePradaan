import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';

@Component({
  selector: 'app-reactive-from',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userform=new FormGroup({
    Fullname:new FormControl('',[Validators.required]),
    UserName:new FormControl('',[Validators.required]),
    Password:new FormControl('',[Validators.required]),
    Phone:new FormControl('',[Validators.required]),
    Address:new FormControl('',[Validators.required]),
    Age:new FormControl('',[Validators.required]),
    Gender:new FormControl('',[Validators.required]),
    Emailaddress:new FormControl('',[Validators.required,Validators.email])
  })

  constructor() { }

  steps:any=1;
  submit(){
    console.log(this.userform.value)
  }
  next(){
    while(this.steps!=2){
      this.steps=this.steps+1;
      console.log(this.steps)
     
    }
  }
  previous(){
    this.steps=this.steps-1;
  }
  get Fullname(){
   return  this.userform.get('Fullname')
  }
  get UserName(){
    return  this.userform.get('UserName')
   }
   get Phone(){
    return this.userform.get('Phone')
   }
   get Password(){
    return  this.userform.get('Password')
   }
   get Address(){
    return  this.userform.get('Address')
   }
   get Age(){
    return  this.userform.get('Age')
   }
   get Gender(){
    return  this.userform.get('Gender')
   }
   get Emailaddress(){
    return  this.userform.get('Emailaddress')
   }
  

  ngOnInit(): void {
  }

}