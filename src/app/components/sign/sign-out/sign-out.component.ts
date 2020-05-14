import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Store } from '@ngrx/store';

import { signOut } from '../../../action/signIn.actions'

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {

  constructor(private router: Router, private store: Store<{ signIn: boolean }>) { }

  ngOnInit(): void {
    localStorage.clear();

    this.store.dispatch(signOut())

    this.router.navigate(['/'])
  }

}
