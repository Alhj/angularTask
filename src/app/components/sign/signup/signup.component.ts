import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SignUpUserService } from './sign-up-user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  //user
  signUpForm
  constructor(
    private signUpUserService: SignUpUserService,
    private formBuilder: FormBuilder,
  ) {
    this.signUpForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  ngOnInit(): void {
  }

  onSumbit(coustomData): void {
    console.warn(coustomData)
  }

}
