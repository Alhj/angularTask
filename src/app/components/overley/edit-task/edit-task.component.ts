import { Component } from '@angular/core'
import { Input } from '@angular/core'
import { task } from 'src/app/models/apiTask/types'
@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {

  constructor() { }

  @Input('taskInfo') taskInfo: task

  

}
