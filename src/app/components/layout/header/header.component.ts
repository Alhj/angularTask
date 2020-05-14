import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { Store, select } from '@ngrx/store';

import {signIn, signOut} from '../../../action/signIn.actions'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private store: Store<{ signIn: boolean }>, ) { }

  isSignIn: Observable<boolean> = this.store.pipe(select('signIn'));


  ngOnInit() {
   if(localStorage.getItem('token')){
    this.store.dispatch(signIn())
   } else {
    this.store.dispatch(signOut())
   }
  }
}
