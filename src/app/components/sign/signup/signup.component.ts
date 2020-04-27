import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { SignUpUserService } from './sign-up-user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  //user

  constructor(private route: ActivatedRoute, private fb: FormBuilder, ) {
  }

  signUpForm = this.fb.group({
    email: '',
    password: ''
  });
  ngOnInit(): void {
  }

  onSumbit(coustomData): void {
    console.warn(coustomData)
  }

}
