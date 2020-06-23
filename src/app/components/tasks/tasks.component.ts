import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { getTask, changeCollection } from '../../helpers/fetchdata/fetchtask'
import { delateCollection } from '../../helpers/fetchdata/fetchtask'

import { tasks, task } from '../../models/apiTask/types'
import { IFindIndex } from '../../models/types/types'
import { findCollectionIndex } from '../../helpers/find'

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

  editTask: task

  showEditTask: boolean = false


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

  onClickEdit(findIndex: IFindIndex) {
    console.log(findIndex)
    if (!this.showEditTask) {

      const collectionIndex: number = findCollectionIndex(this.selectedTasks, findIndex.taskCollectionName)

      this.editTask = this.selectedTasks.taskCollection[collectionIndex].task[findIndex.taskIndex]

      this.showEditTask = true
    }
  }

  onClilckClose(close: boolean) {
    if (close) {
      this.showEditTask = false
    }
  }

  async onClose(close: boolean): Promise<void> {
    if (close) {
      this.selectedTasks = await getTask(this.id)

      this.showAddTask = false;
    }
  }

  onAdd(): void {
    this.showAddTask = true
  }

  async onUpdate(): Promise<void> {
    changeCollection(this.selectedTasks, this.id)
  }

  async onDelate(name: string): Promise<void> {
    await delateCollection(this.id, name)

    this.selectedTasks = await getTask(this.id)
  }
}
