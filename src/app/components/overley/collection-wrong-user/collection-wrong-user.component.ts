import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-collection-wrong-user',
  templateUrl: './collection-wrong-user.component.html',
  styleUrls: ['./collection-wrong-user.component.css']
})
export class CollectionWrongUserComponent{

  constructor(private router: Router) { }

  sendRequest():void {
    
  }

  goBack():void {
    this.router.navigate(['/tasks'])
  }
}
