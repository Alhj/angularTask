import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

//import { findTasks } from '../../helpers/fetchdata/fetchTasksMok';
import { getTask } from '../../helpers/fetchdata/fetchtask'


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

  showAddTask: boolean = false;

  isCollectionEmpty: boolean

  async ngOnInit(): Promise<void> {
    this.router.paramMap.subscribe(async (params: ParamMap) => {
      this.id = params.get('tasksID')

      this.selectedTasks = await getTask(this.id)

      this.isCollectionEmpty = this.selectedTasks.taskCollection.length >= 1
    })
  }

  onClickShow(): void {
    if (!this.showAddTask) {
      this.showAddTask = true
    }
  }

  onClose(close: boolean): void {
    if (close) {
      this.showAddTask = false;
    }
  }
}
