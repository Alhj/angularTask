import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter, Output } from '@angular/core'
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'

import { findTaskIndex } from '../../../helpers/find'

import { tasks, taskCollection } from '../../../models/apiTask/types'
import { IFindIndex } from '../../../models/types/types'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  constructor() { }

  @Input('taskCollection') collection: taskCollection
  @Output('updateCollection') update: EventEmitter<void> = new EventEmitter()
  @Output('editCollectionTask') edit: EventEmitter<IFindIndex> = new EventEmitter()
  @Output('dealteCollection') delate: EventEmitter<string> = new EventEmitter()
  tasks: tasks

  drop(event: CdkDragDrop<tasks[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

      this.update.emit();
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      this.update.emit();
    }
  }

  delete(): void {
    this.delate.emit(this.collection.name)
  }

  editTaskClick(id: string): void {
    const findIndex: IFindIndex = {
      taskCollectionName: this.collection.name,
      taskIndex: findTaskIndex(this.collection, id)

    }
    this.edit.emit(findIndex)
  }

}
