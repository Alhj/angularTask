import { Component } from '@angular/core'
import { Input } from '@angular/core'
import { Router } from '@angular/router'

import { MessageService } from '../../../message/message.service'
import { sendRequest } from '../../../helpers/fetchdata/requestToCollection'

@Component({
  selector: 'app-collection-wrong-user',
  templateUrl: './collection-wrong-user.component.html',
  styleUrls: ['./collection-wrong-user.component.css']
})
export class CollectionWrongUserComponent {

  constructor(private router: Router, private messageService: MessageService) { }
  @Input('collectionId') id: string
  @Input('collectionName') name:string

  async sendRequest(): Promise<void> {
    const res:Boolean = await sendRequest(this.id)

    if(res) {
      this.messageService.setMessage('collection have been added')
      this.messageService.setStatus(true)
    } else {
      this.messageService.setMessage('request has alrady been send')
      this.messageService.setStatus(false)
    }

    this.router.navigate(['/tasks'])
  }

  goBack(): void {
    this.router.navigate(['/tasks'])
  }
}
