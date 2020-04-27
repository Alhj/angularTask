import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpUserService {
  email:string;
  password:string;

  setPassword(password:string){
    this.password = password;
  }

  setEmail(email:string){
    this.email = email;
  }
}
