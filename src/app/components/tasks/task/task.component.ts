import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter, Output } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'

import { tasks, taskCollection } from '../../../models/apiTask/types'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  constructor(private router: ActivatedRoute) { }

  @Input('taskCollection') collection: taskCollection
  @Output('updateCollection') update: EventEmitter<void> = new EventEmitter();

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<tasks[]>) {
    console.log(event.previousContainer + '  ' + event.container)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

      console.log('move')
      this.update.emit();
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);

      console.log('tranfare')
    }
  }

}
