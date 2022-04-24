import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit,OnChanges {

  detailsForm:any;
  disableButton:boolean = true;
  constructor(private fb: FormBuilder,private signupservice:SignupService) { }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.detailsForm = this.fb.group({
      NAME: this.fb.control('',Validators.compose([Validators.required])),
      EMAIL: this.fb.control('',Validators.compose([Validators.required,Validators.email])),
      PHONE_NUM: this.fb.control('',Validators.compose([Validators.required])),
      PASSWORD: this.fb.control('',Validators.compose([Validators.required])),
      SHOP_NAME: this.fb.control('',Validators.compose([Validators.required]))
    })
    const sub = this.detailsForm.valueChanges.subscribe((value:any) => {
      if(this.detailsForm.status === 'VALID'){
        this.disableButton = false;
        this.detailsForm.controls['PHONE_NUM'].value = Number(value.PHONE_NUM);
      }
    })
  }

  registerShop(){
    console.log("form",this.detailsForm)
    this.signupservice.register(this.detailsForm.value).subscribe((result:any) => {
      console.log("created",result)
    })
  }
}
