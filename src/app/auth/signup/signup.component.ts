import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  maxDate!:Date

  onSubmit(form: NgForm){
    console.log(form)
  }

  constructor() { }

  ngOnInit(): void {
    // set DatePicker can only 18 years old users
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18)
  }

}
