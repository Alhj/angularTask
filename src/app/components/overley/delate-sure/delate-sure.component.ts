import { Component } from '@angular/core';
import { Input, Output } from '@angular/core'
import { EventEmitter } from '@angular/core'

import { dealteTasks } from '../../../helpers/fetchdata/fetchTasks'

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


  ngOnInit(): void {
    console.log(this.collectionInfo)
  }

  async onDealte(): Promise<void> {
    await dealteTasks(this.collectionInfo._id)
    this.dealte.emit()
  }

  onClick(): void {
    this.close.emit(true)
  }

}
