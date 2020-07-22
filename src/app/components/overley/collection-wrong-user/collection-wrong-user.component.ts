import { Component } from '@angular/core'
import { Input } from '@angular/core'
import { Router } from '@angular/router'

import { sendRequest } from '../../../helpers/fetchdata/requestToCollection'

@Component({
  selector: 'app-collection-wrong-user',
  templateUrl: './collection-wrong-user.component.html',
  styleUrls: ['./collection-wrong-user.component.css']
})
export class CollectionWrongUserComponent {

  constructor(private router: Router) { }
  @Input('collectionId') id: string

  async sendRequest(): Promise<void> {
    const res:Boolean = await sendRequest(this.id)

    if(res) {
      console.log('hello world')
    }

    this.router.navigate(['/tasks'])
  }

  goBack(): void {
    this.router.navigate(['/tasks'])
  }
}
