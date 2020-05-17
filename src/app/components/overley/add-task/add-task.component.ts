import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { Input } from '@angular/core'

import { task, taskCollection } from '../../../models/apiTask/types'

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
  async onSubmit(): Promise<void> {

  }
}
