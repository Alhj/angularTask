import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  email: string;
  password: string;

  setPassword(password: string): void {
    this.password = password;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  getEmail(): string {
    return this.email;
  }
  getPassword(): string {
    return this.password;
  }
}
