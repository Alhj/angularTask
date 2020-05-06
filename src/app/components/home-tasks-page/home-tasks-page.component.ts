import { Component, OnInit } from '@angular/core';
import { tasks } from '../../models/apiTask/types';
import { one, two, three } from '../../models/mokTasks/tasks'

@Component({
  selector: 'app-home-tasks-page',
  templateUrl: './home-tasks-page.component.html',
  styleUrls: ['./home-tasks-page.component.css']
})
export class HomeTasksPageComponent implements OnInit {
  constructor() { }

  isLoading: boolean = true;

  showOverley: boolean = false;

  userTasks: tasks[] = [
    one,
    two,
    three
  ]

  async ngOnInit(): Promise<void> {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000)
  }

  onClick(): void {
    if (!this.showOverley) {
      this.showOverley = true;
    } else { 
      this.showOverley = false;
    }
  }

  onClose(close:boolean):void {
    if(close) {
      this.showOverley = false
    }
  }

  addCollection(collection:tasks) {
    this.userTasks.push(collection)
    this.showOverley = false
  }

}
