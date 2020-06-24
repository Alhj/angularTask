import { Component } from '@angular/core'
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

export class EditTaskComponent {

  @Output('closeClick') close: EventEmitter<boolean> = new EventEmitter()

  constructor(private fb: FormBuilder) { }

  @Input('taskInfo') taskInfo: task


  editForm: FormGroup = this.fb.group({
    name: '',
    description: ''
  })

  onClose() {
    this.close.emit(true)
  }

  async onSumbit(editTask: IFbGrupp): Promise<void> {
    console.log(editTask)
  }

}
