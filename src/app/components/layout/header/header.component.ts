import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private store: Store<{ signIn: boolean }>, ) { }

  isSignIn = this.store.pipe(select('signIn'));
}
