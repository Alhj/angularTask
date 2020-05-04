import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'

import { findTasks } from '../../helpers/fetchdata/fetchTasksMok';

import { tasks } from '../../models/apiTask/types'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {


  constructor(private router: ActivatedRoute) { }

  id: string;

  selectedTasks: tasks;

  ngOnInit(): void {
    this.router.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('tasksID')

      this.selectedTasks = findTasks(this.id)

      console.log(this.selectedTasks)
    })


  }
}
