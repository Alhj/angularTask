import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { FormBuilder } from '@angular/forms'

import { Store } from '@ngrx/store'

import { signInReq } from '../../../helpers/fetchdata/authSignin'

import { signIn } from '../../../action/signIn.actions'
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(
    private route: Router,
    private fb: FormBuilder,
    private store: Store<{ signIn: boolean }>
  ) {
  }

  message: string = ''

  singInForm = this.fb.group({
    email: '',
    password: ''
  })

  async onSumbit(coustomData): Promise<void> {
    this.message = ''
    this.singInForm.reset()

    const respons: boolean = await signInReq(coustomData.email, coustomData.password);

    if (respons) {
      this.store.dispatch(signIn())

      this.route.navigate(['/tasks'])
    } else {
      this.message = 'Wrong email or password'
    }
  }

}
