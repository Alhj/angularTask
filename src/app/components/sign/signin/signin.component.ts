import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
  }

  singInForm = this.fb.group({
    email: '',
    password: ''
  })

  onSumbit(coustomData): void {
    this.singInForm.reset()
    console.warn(coustomData)
  }

}
