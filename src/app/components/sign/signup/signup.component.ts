import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { emailValidation, passwordLength, comparepass } from '../../../helpers/validation/signUpVali';
import { SignUpForm } from '../../../models/types/types'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private route: ActivatedRoute, private fb: FormBuilder, ) {
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
    let noProblem: boolean = true;

    while (noProblem) {
      if (!emailValidation(coustomData.email)) {

        noProblem = false
        break;
      }
      if(passwordLength(coustomData.password)) {
        noProblem = false
        break;
      }
      console.log('here');
      noProblem = false
    }

  }

}
