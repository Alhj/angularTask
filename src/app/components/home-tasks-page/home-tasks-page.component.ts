import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { getUserTasks } from '../../helpers/fetchdata/fetchTasks'
import { tasks } from '../../models/apiTask/types';
import { ICollectionInfo } from '../../models/types/types'

@Component({
  selector: 'app-home-tasks-page',
  templateUrl: './home-tasks-page.component.html',
  styleUrls: ['./home-tasks-page.component.css']
})
export class HomeTasksPageComponent implements OnInit {
  constructor(private router: Router) { }

  isLoading: boolean = true

  showOverley: boolean = false

  showDealteOverlay: Boolean = false

  userTasks: tasks[] = []

  noCollectionFound: Boolean = true

  collectionInfo: ICollectionInfo 

  async ngOnInit(): Promise<void> {
    if (localStorage.getItem('token')) {
      this.userTasks = await getUserTasks();

      this.isLoading = false;

      this.noCollectionFound = this.userTasks.length === 0;

    } else {
      this.router.navigate(['/'])
    }
  }

  onClick(): void {

    if (!this.showOverley) {
      this.showOverley = true;
    } else {
      this.showOverley = false;
    }
  }

  onClose(close: boolean): void {
    if (close) {
      this.showOverley = false
      this.showDealteOverlay = false
    }
  }

  onDealteClick(event: ICollectionInfo) {
    this.collectionInfo = event

    this.showDealteOverlay = true
  }

  async updateCollection() {
    this.userTasks = await getUserTasks();
    this.showOverley = false
    this.showDealteOverlay = false

    if (this.noCollectionFound) {
      this.noCollectionFound = false
    }

    if (this.userTasks.length === 0) {
      this.noCollectionFound = true
    }
  }

}
