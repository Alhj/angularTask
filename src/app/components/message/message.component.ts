import { Component } from '@angular/core';

import { AfterViewChecked } from '@angular/core'
import { MessageService } from '../../message/message.service'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements AfterViewChecked {

  constructor(public messageService: MessageService) { }
  ngAfterViewChecked(): void {

    if(this.messageService.message) {
      this.messageService.removeMessage()
    }
  }



}
