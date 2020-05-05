import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { Input } from '@angular/core'

import { v4 } from 'uuid';

import { tasks, taskCollection } from '../../../models/apiTask/types'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  @Input('taskCollection') collection: taskCollection;

  addTaskForm = this.fb.group({
    twoCollection: '',
    name: '',
    description: ''
  })
  ngOnInit(): void {
  }

}
