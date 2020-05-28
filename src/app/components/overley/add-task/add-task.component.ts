import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { Input } from '@angular/core'

import { genereateTasks } from '../../../helpers/create/create'
import { updateTask } from '../../../helpers/fetchdata/fetchtask'

import { task, taskCollection } from '../../../models/apiTask/types'
import { createTask } from '../../../models/types/createTypes'

interface IFbGruop {
  twoCollection: string
  name: string
  description: string
}

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  @Input('taskCollection') collection: taskCollection[]
  @Input('id') id: string
  @Output() closeWindow: EventEmitter<boolean> = new EventEmitter()

  addCollection: boolean;

  addTaskForm = this.fb.group({
    twoCollection: '',
    name: '',
    description: ''
  })

  ngOnInit(): void {
    this.addCollection = this.collection.length > 0
  }

  onClickClose(): void {
    this.closeWindow.emit(true);
  }
  async onSubmit(taskData: IFbGruop): Promise<void> {
    const task: task = genereateTasks(taskData.name);

    const data: createTask = {
      id: this.id,
      name: taskData.twoCollection,
      task: task
    }
    const addTask: boolean = await updateTask(data);

    if (addTask) {
      this.closeWindow.emit(true);
    }
  }
}
