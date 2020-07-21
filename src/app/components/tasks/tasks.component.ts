import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { getTask, changeCollection, getUser } from '../../helpers/fetchdata/fetchtask'
import { validateName } from '../../helpers/fetchdata/authSignin'
import { delateCollection } from '../../helpers/fetchdata/fetchtask'
import { createNewTask } from '../../helpers/fetchdata/fetchtask'

import { tasks, task } from '../../models/apiTask/types'
import { IFindIndex } from '../../models/types/types'
import { findCollectionIndex } from '../../helpers/find'
import { createTask } from 'src/app/models/types/createTypes';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {


  constructor(private router: ActivatedRoute) { }
  id: string;

  selectedTasks: tasks;

  showAddTask: boolean = false

  isCollectionEmpty: boolean

  isUserRight: boolean

  editTask: task

  showEditTask: boolean = false


  async ngOnInit(): Promise<void> {
    this.router.paramMap.subscribe(async (params: ParamMap) => {
      this.id = params.get('tasksID')

      this.isUserRight = await getUser(this.id)
      
      if (!this.isUserRight) {

        this.selectedTasks = await getTask(this.id)

        this.isCollectionEmpty = this.selectedTasks.taskCollection.length >= 1
      }
    })
  }

  onClickShow(): void {
    if (!this.showAddTask) {
      this.showAddTask = true
    }
  }

  onClickEdit(findIndex: IFindIndex) {
    if (!this.showEditTask) {

      const collectionIndex: number = findCollectionIndex(this.selectedTasks, findIndex.taskCollectionName)

      this.editTask = this.selectedTasks.taskCollection[collectionIndex].task[findIndex.taskIndex]

      this.showEditTask = true
    }
  }

  onEditTask() {
    changeCollection(this.selectedTasks, this.id)
    this.showEditTask = false
  }

  onClilckClose(close: boolean) {
    if (close) {
      this.showEditTask = false
    }
  }

  onClose(close: boolean): void {
    if (close) {
      this.showAddTask = false;
    }
  }

  async onAdd(): Promise<void> {
    this.showAddTask = true
  }

  async onAddTask(event: createTask): Promise<void> {

    const addtask: Boolean = await createNewTask(event);
    if (!this.isCollectionEmpty) {
      console.log('hello ')
      this.isCollectionEmpty = true
      this.selectedTasks = await getTask(this.id)
    }

    if (addtask) {
      this.selectedTasks = await getTask(this.id)
    }

    this.showAddTask = false
  }

  async onUpdate(): Promise<void> {
    changeCollection(this.selectedTasks, this.id)
  }

  async onDelate(name: string): Promise<void> {
    await delateCollection(this.id, name)

    this.selectedTasks = await getTask(this.id)

    const isNotEmpty: Boolean = this.selectedTasks.taskCollection.length >= 1

    if (!isNotEmpty) {
      this.isCollectionEmpty = false;
    }
  }
}
