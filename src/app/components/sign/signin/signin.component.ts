import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { SignInService } from './sign-in.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
  }

  singInForm = this.fb.group({
    email: '',
    password: ''
  })

  ngOnInit(): void {
  }

  onSumbit(coustomData): void {
    this.singInForm.reset()
    console.warn(coustomData)
  }

}
