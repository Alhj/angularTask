import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { Router } from '@angular/router'
import { FormGroup, FormBuilder } from '@angular/forms';

import { emailValidation, passwordLength, comparepass } from '../../../helpers/validation/signUpVali';
import { signUp } from '../../../helpers/fetchdata/creatAccount'
import { SignUpForm } from '../../../models/types/types'
import { signIn } from '../../../action/signIn.actions'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder, private store: Store<{ signIn: boolean }>) {
  }
  setSignIn$ = this.store.pipe(select('signIn'));


  message: string = ''

  signUpForm: FormGroup = this.fb.group({
    email: '',
    name: '',
    password: '',
    comparePassword: '',
  });
  ngOnInit(): void {
  }

  async onSumbit(coustomData: SignUpForm): Promise<void> {
    this.signUpForm.reset();

    if (!emailValidation(coustomData.email)) {
      this.message = 'the email is not long enough or not correct'
      return
    }
    if (!passwordLength(coustomData.password)) {
      this.message = 'the password is not long enough'

      return
    }
    if (!comparepass(coustomData.password, coustomData.comparePassword)) {
      this.message = "password don't match "
      return
    }
    const signUpRes: boolean = await signUp(coustomData)

    if (signUpRes) {
      this.store.dispatch(signIn())
      
      this.router.navigate(['/signIn'])
    } else {
      this.message = 'somthing whent wrong'
    }
  }

}
