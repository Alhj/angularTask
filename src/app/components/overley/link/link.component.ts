import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core'

import { getRequestLink } from '../../../helpers/fetchdata/request/'
import { MessageService } from '../../../message/message.service'

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  @Input('id') id: string
  @Output('close') close :EventEmitter<void> = new EventEmitter()
  key: string
  link: string

  constructor(private messageService: MessageService) { }

  async ngOnInit(): Promise<void> {
    this.key = await getRequestLink(this.id)
    this.link = `http://localhost:4200/request/${this.key}?collectionId=${this.id}`
  }

  onClose(): void {
    this.close.emit()
  }

  onClick(): void {
    const selBox: HTMLTextAreaElement = document.createElement('textarea')

    selBox.style.position = 'fixed'
    selBox.style.left = '0'
    selBox.style.top = '0'
    selBox.style.opacity = '0'
    selBox.value = this.link

    document.body.appendChild(selBox)

    selBox.focus()
    selBox.select()

    document.execCommand('copy')
    document.body.removeChild(selBox)

    this.messageService.setStatus(true)
    this.messageService.setMessage('link have been copyed')

    this.onClose()
  }


}
