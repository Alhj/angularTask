import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { signIn, signOut } from '../../../action/signIn.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private store: Store<{ signIn: boolean }>, ) { }

  isSignIn = this.store.pipe(select('signIn'));

  ngOnInit(): void {
  }

}
