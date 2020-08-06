import { Component } from '@angular/core';
import { Input, Output } from '@angular/core'
import { EventEmitter } from '@angular/core'

import { dealteTasks } from '../../../helpers/fetchdata/fetchTasks'
import { MessageService } from '../../../message/message.service'

import { ICollectionInfo } from '../../../models/types/types'

@Component({
  selector: 'app-delate-sure',
  templateUrl: './delate-sure.component.html',
  styleUrls: ['./delate-sure.component.css']
})
export class DelateSureComponent {
  @Output('close') close: EventEmitter<boolean> = new EventEmitter()
  @Output('dealte') dealte: EventEmitter<void> = new EventEmitter()
  @Input('CollectionInfo') collectionInfo: ICollectionInfo

  constructor(private message:MessageService){}

  async onDealte(): Promise<void> {
    await dealteTasks(this.collectionInfo._id)

    this.message.setMessage('collection have been dealte')

    this.dealte.emit()
  }

  onClick(): void {
    this.close.emit(true)
  }

}
