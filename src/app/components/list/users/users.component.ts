import { Component } from '@angular/core';
import { Input } from '@angular/core'


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  {
  @Input('users') users: string[]

  constructor() { }

}
