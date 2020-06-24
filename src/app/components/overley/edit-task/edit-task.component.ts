import { Component, OnInit } from '@angular/core'
import { Input } from '@angular/core'
import { Output, EventEmitter } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'

import { task } from 'src/app/models/apiTask/types'

interface IFbGrupp {
  name: string
  description: string
}

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})

export class EditTaskComponent implements OnInit {
  @Input('taskInfo') taskInfo: task
  @Output('closeClick') close: EventEmitter<boolean> = new EventEmitter()
  @Output('editTask') edit: EventEmitter<void> = new EventEmitter()

  editForm: FormGroup

  constructor(private fb: FormBuilder) {
  }


  ngOnInit(): void {
    this.editForm = this.fb.group({
      name: this.taskInfo.name,
      description: ''
    })
  }


  onClose() {
    this.close.emit(true)
  }

  async onSumbit(editTask: IFbGrupp): Promise<void> {
    this.taskInfo.name = editTask.name
    this.taskInfo.description = editTask.description

    this.edit.emit()
  }

}
