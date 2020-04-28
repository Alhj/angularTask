import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private route: ActivatedRoute, private fb: FormBuilder, ) {
  }

  signUpForm: FormGroup = this.fb.group({
    email: '',
    password: '',
    comparePassword: '',
  });
  ngOnInit(): void {
  }

  onSumbit(coustomData: FormGroup): void {
    this.signUpForm.reset();
    console.warn(coustomData)
  }

}
