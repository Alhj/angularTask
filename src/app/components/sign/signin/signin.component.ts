import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

import { singIn } from '../../../helpers/fetchdata/authSignin'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(
    private route: Router,
    private fb: FormBuilder
  ) {
  }

  singInForm = this.fb.group({
    email: '',
    password: ''
  })

  async onSumbit(coustomData): Promise<void> {
    this.singInForm.reset()

    const respons: boolean = await singIn(coustomData.email, coustomData.password);

    if (respons) {
      this.route.navigate(['/'])
    }
  }

}
