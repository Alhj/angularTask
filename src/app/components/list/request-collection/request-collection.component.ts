import { Component } from '@angular/core';
import { Input, Output } from '@angular/core'
import { EventEmitter } from '@angular/core'

import { declineRequest, acceptRequest } from '../../../helpers/fetchdata/requestToCollection'

import { IRequestCollection } from '../../../models/apiTask/types'

@Component({
  selector: 'app-request-collection',
  templateUrl: './request-collection.component.html',
  styleUrls: ['./request-collection.component.css']
})
export class RequestCollectionComponent {
  @Input('request') request: IRequestCollection[]
  @Output('requestUpdate') update: EventEmitter<void> = new EventEmitter()

  constructor() {
  }

  async onAccpetRequest(id: string) {
    const res: boolean = await acceptRequest(id)

    if (res) {
      this.update.emit()
    }

  }

  async onDeclineRequest(id: string) {
    const dealteRight: boolean = await declineRequest(id)
    if (dealteRight) {
      this.update.emit()
    }
  }
}
