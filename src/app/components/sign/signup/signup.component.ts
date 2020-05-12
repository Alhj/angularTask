import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'
import { FormGroup, FormBuilder } from '@angular/forms';

import { emailValidation, passwordLength, comparepass } from '../../../helpers/validation/signUpVali';
import { SignUpForm } from '../../../models/types/types'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder, ) {
  }
  message: string = ''

  signUpForm: FormGroup = this.fb.group({
    email: '',
    password: '',
    comparePassword: '',
  });
  ngOnInit(): void {
  }

  onSumbit(coustomData: SignUpForm): void {
    this.signUpForm.reset();
 
      if (!emailValidation(coustomData.email)) {
        this.message = 'the email is not long enough or not correct'
        return;
      }
      if (passwordLength(coustomData.password)) {
        this.message = 'the password is not long enough'
        
        return;
      }
  }

}
